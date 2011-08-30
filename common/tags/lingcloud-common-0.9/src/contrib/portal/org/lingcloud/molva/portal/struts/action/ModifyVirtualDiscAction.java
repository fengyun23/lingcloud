/* 
 * @(#)ModifyVirtualDiscAction.java 2009-10-6 
 *  
 * Copyright (C) 2008-2011, 
 * LingCloud Team, 
 * Institute of Computing Technology, 
 * Chinese Academy of Sciences. 
 * P.O.Box 2704, 100190, Beijing, China. 
 * 
 * http://lingcloud.org 
 *  
 */

package org.lingcloud.molva.portal.struts.action;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.struts.action.ActionForm;
import org.apache.struts.action.ActionForward;
import org.apache.struts.action.ActionMapping;
import org.apache.struts.validator.DynaValidatorForm;
import org.lingcloud.molva.portal.util.XMMPortalUtil;
import org.lingcloud.molva.xmm.vam.pojos.VADisk;
import org.lingcloud.molva.xmm.vam.pojos.VAFile;
import org.lingcloud.molva.xmm.vam.services.VirtualApplianceManager;
import org.lingcloud.molva.xmm.vam.util.VAMConstants;
import org.lingcloud.molva.xmm.vam.util.VAMUtil;

/**
 * <strong>Purpose:To modify a properties of a virtual disc.</strong><br>
 * TODO.
 * 
 * @version 1.0.1 2009-10-6<br>
 * @author Xiaoyi Lu<br>
 */

public class ModifyVirtualDiscAction extends NeedLoginAction {
	/**
	 * The logger for this class.
	 */
	private Log log = LogFactory.getFactory().getInstance(this.getClass());

	/**
	 * The url of the page calling this action.
	 */
	private String url;

	/**
	 * The main method.
	 */
	public ActionForward dowork(ActionMapping mapping, ActionForm form,
			HttpServletRequest request, HttpServletResponse response)
			throws Exception {
		try {
			DynaValidatorForm newFileForm = (DynaValidatorForm) form;
			if (newFileForm == null) {
				throw new Exception(
						"The form is submitted failed, please retry!");
			}
			String guid = (String) newFileForm.get("guid");
			String discName = (String) newFileForm.get("discname");
			String format = (String) newFileForm.get("format");
			String type = (String) newFileForm.get("type");
			String os = (String) newFileForm.get("os");
			String osversion = (String) newFileForm.get("osversion");
			String app = (String) newFileForm.get("app");
			String thispage = (String) newFileForm.get("thispage");

			if (XMMPortalUtil.checkParamsBlankOrNull(new String[] { guid,
					discName, format, type })) {
				throw new Exception("Please input the correct parameters of "
						+ "Guid, Disc Name, Format, Disc Type!");
			}
			discName = discName.trim();
			format = format.trim();
			type = type.trim();

			if (type.equals(VAMConstants.VAD_DISK_TYPE_OS)) {
				if (os == null || osversion == null || os.equals("")) {
					throw new Exception(
							"Please input the correct parameters of "
									+ "Operating System, OS Version!");
				}
				os = os.trim();
				osversion = osversion.trim();

			} else if (type.equals(VAMConstants.VAD_DISK_TYPE_APP)) {
				if (app == null) {
					throw new Exception(
							"Please input the correct parameters of "
									+ "Application!");
				}
			} else {
				throw new Exception("Please input the correct parameters of "
						+ "Disc Type!");
			}

			if (thispage == null || "".equals(thispage)) {
				this.url = request.getContextPath()
						+ "/JSP/viewVirtualDisc.jsp";
			} else {
				if (!thispage.trim().startsWith("/")) {
					thispage = "/" + thispage.trim();
				}
				this.url = request.getContextPath() + thispage.trim();
			}
			log.info("User want to modify a virtual disc from url : " + url);

			VirtualApplianceManager vam = VAMUtil.getVAManager();
			VAFile vafile = vam.queryFile(guid);
			VADisk disc = new VADisk(vafile);
			disc.setId(discName);
			disc.setFormat(format);
			disc.setDiskType(type);

			List<String> appl = new ArrayList<String>();
			if (type.equals(VAMConstants.VAD_DISK_TYPE_APP)) {
				if (app != null && !app.equals("")) {
					String[] apps = app.split("\\|");
					for (int i = 0; i < apps.length; i++) {
						appl.add(apps[i]);
					}
				}
				disc.setOs("", "");
			} else {
				disc.setOs(os, osversion);
			}
			disc.setApplications(appl);

			vafile = vam.updateFile(disc);

			log.info("A virtual disc with the name " + vafile.getId()
					+ " is updated successfully.");
			/*
			 * set object to request so that other pages can use.
			 */
			// request.setAttribute("thisPage", thisPage);
			request.getSession().removeAttribute("modifyVirtualDiscForm");
			String forwardAction = request.getParameter("forwardAction");
			if (forwardAction != null && !("".equals(forwardAction))) {
				log.info("get a forwardAction : " + forwardAction);
				response.sendRedirect(forwardAction);
				return null;
			} else {
				return mapping.findForward("success");
			}
		} catch (Exception e) {
			log.error(e.toString());
			// request.getSession().invalidate();
			super.addErrors(e.getMessage(), request);
			return mapping.findForward("failure");
		}
	}
}
