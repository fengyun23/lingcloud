/*******************************************************************************
 * Copyright 2002-2010, OpenNebula Project Leads (OpenNebula.org)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 ******************************************************************************/

package org.lingcloud.molva.xmm.vmc.one;

import org.opennebula.client.Client;
import org.opennebula.client.OneResponse;

import javax.xml.xpath.XPathExpressionException;
import org.w3c.dom.Node;

import org.lingcloud.molva.xmm.pojos.VirtualNode;
import org.lingcloud.molva.xmm.util.XMMConstants;

/**
 * This class represents an OpenNebula VM. It also offers static XML-RPC call
 * wrappers.
 */
public class VirtualMachine extends PoolElement {

	private static final String METHOD_PREFIX = "vm.";
	private static final String ALLOCATE = METHOD_PREFIX + "allocate";
	private static final String INFO = METHOD_PREFIX + "info";
	private static final String DEPLOY = METHOD_PREFIX + "deploy";
	private static final String ACTION = METHOD_PREFIX + "action";
	private static final String MIGRATE = METHOD_PREFIX + "migrate";
	private static final String SAVEDISK = METHOD_PREFIX + "savedisk";

	public static final int VM_STATE_INIT = 0;
	public static final int VM_STATE_PENDING = 1;
	public static final int VM_STATE_HOLD = 2;
	public static final int VM_STATE_ACTIVE = 3;
	public static final int VM_STATE_STOPPED = 4;
	public static final int VM_STATE_SUSPENDED = 5;
	public static final int VM_STATE_DONE = 6;
	public static final int VM_STATE_FAILED = 7;

	public static final int LCM_STATE_INIT = 0;
	public static final int LCM_STATE_PROLOG = 1;
	public static final int LCM_STATE_BOOT = 2;
	public static final int LCM_STATE_RUNNING = 3;
	public static final int LCM_STATE_MIGRATE = 4;
	public static final int LCM_STATE_SAVE_STOP = 5;
	public static final int LCM_STATE_SAVE_SUSPEND = 6;
	public static final int LCM_STATE_SAVE_MIGRATE = 7;
	public static final int LCM_STATE_PROLOG_MIGRATE = 8;
	public static final int LCM_STATE_PROLOG_RESUME = 9;
	public static final int LCM_STATE_EPILOG_STOP = 10;
	public static final int LCM_STATE_EPILOG = 11;
	public static final int LCM_STATE_SHUTDOWN = 12;
	public static final int LCM_STATE_CANCEL = 13;
	public static final int LCM_STATE_FAILURE = 14;
	public static final int LCM_STATE_DELETE = 15;
	public static final int LCM_STATE_UNKNOWN = 16;

	public static final String[] VM_STATES = { "INIT", "PENDING", "HOLD",
			"ACTIVE", "STOPPED", "SUSPENDED", "DONE", "FAILED" };

	private static final String[] SHORT_VM_STATES = { "init", "pend", "hold",
			"actv", "stop", "susp", "done", "fail" };

	public static final String[] LCM_STATE = { "LCM_INIT", "PROLOG", "BOOT",
			"RUNNING", "MIGRATE", "SAVE_STOP", "SAVE_SUSPEND", "SAVE_MIGRATE",
			"PROLOG_MIGRATE", "PROLOG_RESUME", "EPILOG_STOP", "EPILOG",
			"SHUTDOWN", "CANCEL", "FAILURE", "DELETE", "UNKNOWN" };

	private static final String[] SHORT_LCM_STATES = { null, "prol", "boot",
			"runn", "migr", "save", "save", "save", "migr", "prol", "epil",
			"epil", "shut", "shut", "fail", "dele", "unkn" };

	/**
	 * Creates a new VM representation.
	 * 
	 * @param id
	 *            The virtual machine Id (vid).
	 * @param client
	 *            XML-RPC Client.
	 */
	public VirtualMachine(int id, Client client) {
		super(id, client);
	}

	/**
	 * @see PoolElement
	 */
	protected VirtualMachine(Node xmlElement, Client client) {
		super(xmlElement, client);
	}

	// Added by Xiaoyi Lu for get vid.
	public VirtualMachine(String oneresponse, Client client)
			throws XPathExpressionException {
		super(oneresponse, client);
	}

	// =================================
	// Static XML-RPC methods
	// =================================

	/**
	 * Allocates a new VM in OpenNebula.
	 * 
	 * @param client
	 *            XML-RPC Client.
	 * @param description
	 *            A string containing the template of the vm.
	 * @return If successful the message contains the associated id generated
	 *         for this VM.
	 */
	public static OneResponse allocate(Client client, String description) {
		return client.call(ALLOCATE, description);
	}

	/**
	 * Retrieves the information of the given VM.
	 * 
	 * @param client
	 *            XML-RPC Client.
	 * @param id
	 *            The virtual machine id (vid) of the target instance.
	 * @return If successful the message contains the string with the
	 *         information returned by OpenNebula.
	 */
	public static OneResponse info(Client client, int id) {
		return client.call(INFO, id);
	}

	// =================================
	// Instanced object XML-RPC methods
	// =================================

	/**
	 * Loads the xml representation of the virtual machine. The info is also
	 * stored internally.
	 * 
	 * @see VirtualMachine#info(Client, int)
	 */
	public OneResponse info() {
		OneResponse response = info(getClient(), getID());
		super.processInfo(response);
		return response;
	}

	/**
	 * Initiates the instance of the VM on the target host.
	 * 
	 * @param hostId
	 *            The host id (hid) of the target host where the VM will be
	 *            instantiated.
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse deploy(int hostId) {
		return getClient().call(DEPLOY, getID(), hostId);
	}

	/**
	 * Submits an action to be performed on the virtual machine. <br/>
	 * It is recommended to use the helper methods instead:
	 * <ul>
	 * <li>{@link VirtualMachine#shutdown()}</li>
	 * <li>{@link VirtualMachine#cancel()}</li>
	 * <li>{@link VirtualMachine#hold()}</li>
	 * <li>{@link VirtualMachine#release()}</li>
	 * <li>{@link VirtualMachine#stop()}</li>
	 * <li>{@link VirtualMachine#suspend()}</li>
	 * <li>{@link VirtualMachine#resume()}</li>
	 * <li>{@link VirtualMachine#finalizeVM()}</li>
	 * <li>{@link VirtualMachine#restart()}</li>
	 * </ul>
	 * 
	 * @param action
	 *            The action name to be performed, can be:<br/>
	 *            "shutdown", "hold", "release", "stop", "cancel", "suspend",
	 *            "resume", "restart", "finalize".
	 * @return If an error occurs the error message contains the reason.
	 */
	protected OneResponse action(String action) {
		return getClient().call(ACTION, action, getID());
	}

	/**
	 * Migrates the virtual machine to the target host (hid).
	 * 
	 * @param hostId
	 *            The target host id (hid) where we want to migrate the vm.
	 * @param live
	 *            If true we are indicating that we want livemigration,
	 *            otherwise false.
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse migrate(int hostId, boolean live) {
		return getClient().call(MIGRATE, getID(), hostId, live);
	}

	/**
	 * Sets the specified vm's disk to be saved in a new image when the
	 * VirtualMachine shutdowns.
	 * 
	 * @param diskId
	 *            ID of the disk to be saved.
	 * @param imageId
	 *            ID of the image where the disk will be saved.
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse savedisk(int diskId, int imageId) {
		return getClient().call(SAVEDISK, diskId, imageId);
	}

	// =================================
	// Helpers
	// =================================

	/**
	 * Shuts down the already deployed VM.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse shutdown() {
		return action("shutdown");
	}

	/**
	 * Cancels the running VM.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse cancel() {
		return action("cancel");
	}

	/**
	 * Sets the VM to hold state. The VM will not be scheduled until it is
	 * released.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse hold() {
		return action("hold");
	}

	/**
	 * Releases a virtual machine from hold state.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse release() {
		return action("release");
	}

	/**
	 * Stops the virtual machine. The virtual machine state is transferred back
	 * to OpenNebula for a possible reschedule.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse stop() {
		return action("stop");
	}

	/**
	 * Suspends the virtual machine. The virtual machine state is left in the
	 * cluster node for resuming.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse suspend() {
		return action("suspend");
	}

	/**
	 * Resumes the execution of a saved VM.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse resume() {
		return action("resume");
	}

	/**
	 * Deletes the VM from the pool and database.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse finalizeVM() {
		return action("finalize");
	}

	/**
	 * Resubmits the virtual machine after failure.
	 * 
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse restart() {
		// return action("shutdown");
		// bug fixed by Xiaoyi Lu checked at 2010-09-19.
		return action("restart");
	}

	/**
	 * Migrates the virtual machine to the target host (hid). <br/>
	 * It does the same as {@link VirtualMachine#migrate(int, boolean)} with
	 * live set to false.
	 * 
	 * @param hostId
	 *            The target host id (hid) where we want to migrate the vm.
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse migrate(int hostId) {
		return migrate(hostId, false);
	}

	/**
	 * Performs a live migration of the virtual machine to the target host
	 * (hid). <br/>
	 * It does the same as {@link VirtualMachine#migrate(int, boolean)} with
	 * live set to true.
	 * 
	 * @param hostId
	 *            The target host id (hid) where we want to migrate the vm.
	 * @return If an error occurs the error message contains the reason.
	 */
	public OneResponse liveMigrate(int hostId) {
		return migrate(hostId, true);
	}

	public int state() {
		return super.state();
	}

	/**
	 * Returns the VM state of the VirtualMachine (string value).
	 * 
	 * @return The VM state of the VirtualMachine (string value).
	 */
	public String stateStr() {
		int state = state();
		// Modified by Xiaoyi Lu to improve robust.
		if (state != -1) {
			return VM_STATES[state()];
		}
		return "";
	}

	/**
	 * Returns the LCM state of the VirtualMachine (numeric value).
	 * 
	 * @return The LCM state of the VirtualMachine (numeric value).
	 */
	public int lcmState() {
		String state = xpath("LCM_STATE");
		if (state != null) {
			return Integer.parseInt(state);
		}
		return -1;
	}

	/**
	 * Returns the LCM state of the VirtualMachine (string value).
	 * 
	 * @return The LCM state of the VirtualMachine (string value).
	 */
	public String lcmStateStr() {
		int state = lcmState();
		// Modified by Xiaoyi Lu to improve robust.
		if (state != -1) {
			return LCM_STATE[state];
		}
		return "";
	}

	/**
	 * Returns the short status string for the VirtualMachine.
	 * 
	 * @return The short status string for the VirtualMachine.
	 */
	public String status() {
		int state = state();
		String shortStateStr = null;
		if (state != -1) {
			shortStateStr = SHORT_VM_STATES[state];
			if (shortStateStr.equals("actv")) {
				int lcmState = lcmState();
				if (lcmState != -1) {
					shortStateStr = SHORT_LCM_STATES[lcmState];
				}
			}
		}
		return shortStateStr;
	}

	// Added By Xiaoyi Lu at 2010-09-20 for one1.4 above version.
	// FIXME handle state carefully.
	public synchronized VirtualNode mappingFieldForVmInfo(VirtualNode vnode)
			throws CloneNotSupportedException {
		VirtualNode newvi = vnode.clone();

		String state = this.stateStr();
		String lcmState = this.lcmStateStr();
		if (vnode.getRunningStatus().equals(XMMConstants.MachineRunningState.SHUTDOWN.toString())){
			;
		} else if (vnode.getRunningStatus().equals(XMMConstants.MachineRunningState.SHUTTING.toString())){
			/**
			 * Wait for the VM state is UNKNOWN in openNebula.
			 */
			if(state.equals(VM_STATES[VM_STATE_ACTIVE])
				&& lcmState.equals(LCM_STATE[LCM_STATE_UNKNOWN])){
				newvi.setRunningStatus(XMMConstants.MachineRunningState.SHUTDOWN
						.toString());
			}
		} else if (state.equals(VM_STATES[VM_STATE_INIT])
				|| state.equals(VM_STATES[VM_STATE_PENDING])) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.BOOT
					.toString());
		} else if (state.equals(VM_STATES[VM_STATE_ACTIVE])
				&& lcmState.equals(LCM_STATE[LCM_STATE_RUNNING])) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.RUNNING
					.toString());
		} else if (state.equals(VM_STATES[VM_STATE_STOPPED])) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.STOP
					.toString());
		} else if (lcmState.equals(LCM_STATE[LCM_STATE_SAVE_STOP])) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.STOPPING
					.toString());
		} else if (state.equals(VM_STATES[VM_STATE_DONE])
				&& lcmState.equals(LCM_STATE[LCM_STATE_SHUTDOWN])) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.SHUTDOWN
					.toString());
		} else if (state.equals(VM_STATES[VM_STATE_PENDING])) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.WAIT_DEPLOY
					.toString());
		} else if (state.equals(VM_STATES[VM_STATE_SUSPENDED])) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.SUSPENDED
					.toString());
		} else if (lcmState.contains("MIGRATE")) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.MIGRATING
					.toString());
		}else if (lcmState.contains("SAVE")) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.SAVING
					.toString());
		}else if (state.equals(VM_STATES[VM_STATE_FAILED])) {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.ERROR
					.toString());
		}else if ( lcmState.equals(LCM_STATE[LCM_STATE_INIT])
						|| lcmState.equals(LCM_STATE[LCM_STATE_PROLOG])
						|| lcmState.equals(LCM_STATE[LCM_STATE_BOOT])) {
					newvi.setRunningStatus(XMMConstants.MachineRunningState.BOOT
							.toString());
		}else {
			newvi.setRunningStatus(XMMConstants.MachineRunningState.ERROR
					.toString());
		}

		// FIXME form 2010-07-28, we create a new method setVmInfo to save the
		// info of opennebula.
		newvi.setVmInfo(this.getInfo());

		newvi.setParentPhysialNodeName(this.getParentHostName());
		return newvi;
	}

	private String getParentHostName() {
		return this.xpath("/VM/HISTORY/HOSTNAME");
	}
}
