/*
 *  @(#)HashFunction.java  2007-8-6
 *
 *  Copyright (C) 2008-2011,
 *  LingCloud Team,
 *  Institute of Computing Technology,
 *  Chinese Academy of Sciences.
 *  P.O.Box 2704, 100190, Beijing, China.
 *
 *  http://lingcloud.org
 *  
 */
package org.lingcloud.molva.ocl.util;

import java.net.InetAddress;
import java.net.URL;
import java.net.UnknownHostException;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.Random;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.lingcloud.molva.ocl.persistence.GNodeConstants;
import org.lingcloud.molva.ocl.persistence.ID;

/**
 * 
 * <strong>Purpose:</strong><br>
 * Provides a hash function for calculating the hash value out of String or
 * {@link URL} of site.
 * 
 * @version 1.0.1 2007-8-6<br>
 * @author zouyongqiang<br>
 * 
 */
public final class HashFunction {
	/*
	 * This file is based on OpenChord project's class ID written by Sven
	 * Kaffille, Karsten Loesing.
	 */

	/**
	 * the log object.
	 */
	private static Log log = LogFactory.getLog(HashFunction.class);

	/**
	 * Singleton instance of this class.
	 */
	private static HashFunction hashFunction = null;

	/**
	 * The random object to get random number.
	 */
	private static Random rand = new Random(System.currentTimeMillis());

	/**
	 * The seed for generating pwd.
	 */
	private static final String SEED = "zouyongqiang,luxiaoyi"
			+ ",xuxiaoliang,linjian@software.ict.ac.cn";

	/**
	 * Returns the singleton instance of this class.
	 * 
	 * @return Singleton instance of HashFunction.
	 */
	private static HashFunction getHashFunction() {
		if (hashFunction == null) {
			try {
				MessageDigest digest1 = MessageDigest.getInstance("SHA-1");
				hashFunction = new HashFunction(digest1);
				messageDigest = digest1;
			} catch (NoSuchAlgorithmException e) {
				log.error("Get MessageDigest failed. " + e);
				throw new RuntimeException("No hash function available!", e);
			}
		}

		return hashFunction;
	}

	/**
	 * Message digest for calculating hash values.
	 */
	private static MessageDigest messageDigest;
	static {
		getHashFunction();
	}

	/**
	 * Constructor is hidden and invoked once by {@link #getHashFunction()}.
	 * 
	 * @param digest1
	 *            Message digest for calculating hash values.
	 */
	private HashFunction(MessageDigest digest1) {
		if (digest1 == null) {
			throw new NullPointerException("Parameter may not be null!");
		}
	}
	
	private HashFunction() {
		
	}

	/**
	 * Returns the length of IDs generated by this hash function.
	 * 
	 * @return Number of bytes of generated IDs.
	 */
	public static int getLengthOfIDsInBytes() {
		return messageDigest.getDigestLength();
	}

	/**
	 * Calculates the hash value for a given data Key.
	 * 
	 * @param entry
	 *            the given data key.
	 * @return ID for the given Key.
	 */
	public static ID getHashKey(String entry) {
		if (entry == null) {
			throw new IllegalArgumentException(
					"Parameter entry must not be null!");
		}
		if (entry.getBytes() == null || entry.getBytes().length == 0) {
			throw new IllegalArgumentException(
					"Byte representation of Parameter "
							+ " must not be null or have length 0!");
		}

		byte[] testBytes = entry.getBytes();
		/*
		 * synchronize access to messageDigest, so that messageDigest cannot be
		 * reset by another thread before calculating digest.
		 */
		synchronized (messageDigest) {
			messageDigest.reset();
			messageDigest.update(testBytes);
			return new ID(messageDigest.digest());
		}

	}

	/**
	 * Calculates the password for a given data Key.
	 * 
	 * @param entry
	 *            the given data key.
	 * @return Password for the given Key.
	 */
	public static String getPwd(String entry) {
		String headPwd = HashFunction.getHashKey(entry).toString();
		String tailPwd = HashFunction.getHashKey(SEED + headPwd + SEED)
				.toString();
		return headPwd + tailPwd;
	}

	/**
	 * Determine the given password right or wrong.
	 * 
	 * @param pwd
	 *            the given data key.
	 * @return boolean.
	 */
	public static boolean isPwd(String pwd) {
		if (pwd == null) {
			throw new IllegalArgumentException(
					"Parameter entry must not be null!");
		}
		if (pwd.length() != GNodeConstants.PASSMAXLEN) {
			return false;
		}
		String headPwd = pwd.substring(0, GNodeConstants.PASSMAXLEN / 2);
		String tailPwd = pwd.substring(headPwd.length(),
				GNodeConstants.PASSMAXLEN);
		headPwd = HashFunction.getHashKey(SEED + headPwd + SEED).toString();
		return headPwd.equals(tailPwd);
	}

	/**
	 * Calculates the hash value for a given URL.
	 * 
	 * @param incomingURL
	 *            URL of current node which is used to create a pseudo-unique
	 *            ID.
	 * @return ID for the given URL.
	 */
	public static ID createUniqueSiteID(URL incomingURL) {
		// create pseudo-unique string
		String idString = "";
		idString += incomingURL.toString();
		// idString.append(random.nextLong() + ":" +
		// System.currentTimeMillis());
		final String id = idString.toString();

		// calculate ID
		// this is done by creating a temporary anonymous class which implements
		// the Key interface - the variable id has to be final!

		ID resultKey = getHashKey(id);

		return resultKey;
	}

	/**
	 * Create a global unique ID which is generated by system.
	 * 
	 * @return the generated ID.
	 */
	public static ID createGUID() {
		// GUID is generated by hash of IP + timestamp + random number

		String key = "";

		try {
			// TODO should change IP to MAC so that to ensure global unique. If
			// use private IP address, then different machines may have same
			// ip. So it's not same enough. Change to MAC will be far more
			// better but more complex.
			key = InetAddress.getLocalHost().getHostAddress();
			key += " / " + InetAddress.getLocalHost().getHostName();
		} catch (UnknownHostException e) {
			log.error("Get local host's ip address or hostname failed. " + e);
			key = "127.0.0.1 / localhost";
		}

		long time = System.currentTimeMillis();
		key += " / " + time;
		// add random number.
		key += " / " + rand.nextInt();
		key += " / " + rand.nextInt();
		key += " / " + rand.nextInt();

		if (log.isDebugEnabled()) {
			log.debug("generated key is " + key);
		}
		return getHashKey(key);
	}

	/**
	 * Whether the two object is equal?
	 * 
	 * @param obj1
	 *            the first object.
	 * @param obj2
	 *            the second object.
	 * @return true if is equal.
	 */
	public static boolean isObjEqual(Object obj1, Object obj2) {
		if (obj1 == null && obj2 == null) {
			return true;
		}

		if (obj1 != null) {
			return obj1.equals(obj2);
		} else {
			return false;
		}
	}
}
