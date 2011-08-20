/* 
 * @(#)lingcloud-common-zh_cn.js 2009-10-6 
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

var lingcloud = {
	tip:{
		refresh:'\u5237\u65b0',
		delapp:'\u4F60\u786E\u5B9A\u8981\u5220\u9664\u6B64\u6587\u4EF6\u5417\u003f',
		delapptitle:'\u5220\u9664\u5e94\u7528',
		nocategory:'\u65e0\u7c7b\u522b',
		clear:'\u6e05\u9664',
		vnctip:'\u8bf7\u901a\u8fc7\u672c\u5730\u0056\u004e\u0043\u5ba2\u6237\u7aef\u767b\u5f55\u865a\u62df\u673a'
	},
	upload:{
		finish:'\u0020\u6587\u4ef6\u4e0a\u4f20\u6210\u529f',
		upload:'\u4e0a\u4f20',
		cancel:'\u53d6\u6d88',
		close:'\u5173\u95ed',
		disc:'\u4e0a\u4f20\u5149\u76d8\u6620\u50cf',
		disk:'\u4e0a\u4f20\u865a\u62df\u7535\u5668',
		app:'\u4E0A\u4F20\u5E94\u7528'
	},
	Infrastructure:{
		login:'\u8BF7\u767B\u5F55',
		noAsset:'\u5F53\u524D\u6CA1\u6709\u8D44\u6E90',		
		partName:'\u5206\u533A\u540D',
		desc:'\u63CF\u8FF0',
		targetPart:'\u76EE\u6807\u5206\u533A',
		physicalNode:'\u7269\u7406\u8282\u70B9',
		clusterName:'\u673A\u7FA4\u540D',
		connection:'\u8FDE\u63A5',
		screenSize:'\u5C4F\u5E55\u5206\u8fa8\u7387',
		fullScreen:'\u5168\u5C4F',
		newPart:{
			title:'\u521B\u5EFA\u5206\u533A',			
			type:'\u7C7B\u578B',
			preInstalledSoft:'\u9884\u88C5\u8F6F\u4EF6',			
			vmtype:'\u865A\u62DF\u673A\u5206\u533A',
			hpctype:'\u9AD8\u6027\u80FD\u8BA1\u7B97\u5206\u533A',
			dctype:'\u5927\u89C4\u6A21\u6570\u636E\u5904\u7406\u5206\u533A',
			stotype:'\u5B58\u50A8\u5206\u533A',
			gertype:'\u901A\u7528\u5206\u533A'
		},
		delPart:{
			title:'\u9500\u6BC1\u5206\u533A'
		},
		addNewPNNode:{
			title:'\u6dfb\u52a0\u7269\u7406\u8282\u70b9',
			privateIp:'\u79C1\u6709IP',
			publicIp:'\u516C\u6709IP'			
		},
		rmNewPNNode:{
			title:'\u7F29\u51CF\u7269\u7406\u8282\u70B9'
		},
		clusterOp:{
			createCluster:'\u5F00\u8BBE\u673A\u7FA4',
			startCluster:'\u542F\u52A8\u673A\u7FA4',
			stopCluster:'\u505C\u6B62\u673A\u7FA4',
			freeCluster:'\u9500\u6BC1\u673A\u7FA4',
			tip4StopCluster:'\u4F60\u786E\u5B9A\u8981\u505C\u6B62\u8BE5\u673A\u7FA4\u5417\u003f',
			tip4FreeCluster:'\u4F60\u786E\u5B9A\u8981\u9500\u6BC1\u8BE5\u673A\u7FA4\u5417\u003f',
			unfoldMacInfo:'\u5C55\u5F00\u7F51\u7EDC\u4FE1\u606F',
			foldMacInfo:'\u6536\u7F29\u7F51\u7EDC\u4FE1\u606F'
		},
		physicalNodeOp:{
			title:'\u64cd\u4f5c\u7269\u7406\u8282\u70b9',
			boot:'\u5f00\u673a\u64cd\u4f5c',
			shutdown:'\u5173\u673a\u64cd\u4f5c',
			warn:'\u8be5\u7269\u7406\u8282\u70b9\u4e0a\u6709\u6b63\u5728\u8fd0\u884c\u7684\u865a\u62df\u8282\u70b9\u3002',
			confirmTip:'\u786e\u5b9a\u8981\u5bf9\u8be5\u7269\u7406\u8282\u70b9\u6267\u884c'
		},
		virtualNodeOp:{
			title:'\u7ba1\u7406\u865a\u62df\u8282\u70b9',
			save:'\u4fdd\u5b58\u64cd\u4f5c',
			boot:'\u542f\u52a8\u64cd\u4f5c',
			start:'\u5f00\u542f\u64cd\u4f5c',
			stop:'\u5173\u95ed\u64cd\u4f5c',
			shutdown:'\u5173\u673a\u64cd\u4f5c',
			migrate:'\u8fc1\u79fb\u64cd\u4f5c',
			migrateTitle:'\u8fc1\u79fb\u8be5\u865a\u62df\u8282\u70b9',
			empty:'\u6ca1\u6709\u7269\u7406\u8282\u70b9',
			destroy:'\u9500\u6bc1\u64cd\u4f5c\uff08\u4e0d\u53ef\u64a4\u9500\u64cd\u4f5c\uff09',
			confirmTip:'\u786e\u5b9a\u8981\u5bf9\u8be5\u865a\u62df\u8282\u70b9\u6267\u884c'
		}
	},
	Appliance:{
		desc:'\u63CF\u8FF0',
		loading:'\u52A0\u8F7D\u4FE1\u606F\u002e\u002e',
		newCate:{
			title:'\u6DFB\u52A0\u7C7B\u522B',
			name:'\u7C7B\u522B\u540D\u79F0'
		},
		delCate:{
			title:'\u5220\u9664\u7C7B\u522B',
			confirmTip:'\u60A8\u662F\u5426\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u7C7B\u522B\u003f'
		},
		newAppliance:{
			title:'\u6DFB\u52A0\u865A\u62DF\u7535\u5668',
			clickToAdd:'\u70B9\u6B64\u589E\u52A0',
			name:'\u7535\u5668\u540D\u79F0',
			disk:'\u78C1\u76D8',
			cate:'\u7C7B\u522B',
			os:'\u64CD\u4F5C\u7CFB\u7EDF',
			osversion:'\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C',
			application:'\u5DF2\u5B89\u88C5\u5E94\u7528',
			access:'\u8BBF\u95EE\u65B9\u5F0F',
			cpu:'CPU\u6570\u91CF',
			mem:'\u5185\u5B58\u5927\u5C0F',
			lang:'\u652F\u6301\u8BED\u8A00',
			loginStyle:'\u767B\u5F55\u65B9\u5F0F',
			user:'\u7528\u6237\u540D',
			pass:'\u5BC6\u7801'
		},
		modifyAppliance:{
			title:'\u4fee\u6539\u865a\u62df\u7535\u5668\u4fe1\u606f',
			clickToAdd:'\u70B9\u6B64\u589E\u52A0',
			name:'\u7535\u5668\u540D\u79F0',
			disk:'\u78C1\u76D8',
			cate:'\u7C7B\u522B',
			os:'\u64CD\u4F5C\u7CFB\u7EDF',
			osversion:'\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C',
			application:'\u5DF2\u5B89\u88C5\u5E94\u7528',
			access:'\u8BBF\u95EE\u65B9\u5F0F',
			cpu:'CPU\u6570\u91CF',
			mem:'\u5185\u5B58\u5927\u5C0F',
			lang:'\u652F\u6301\u8BED\u8A00',
			loginStyle:'\u767B\u5F55\u65B9\u5F0F',
			user:'\u7528\u6237\u540D',
			pass:'\u5BC6\u7801'
		},
		makeAppliance:{
			title:'\u5236\u4F5C\u865A\u62DF\u7535\u5668',
			newApp:'\u65B0\u7535\u5668',
			baseApp:'\u57FA\u4E8E\u5DF2\u6709\u7535\u5668',
			modifyApp:'\u4FEE\u6539\u5DF2\u6709\u7535\u5668',
			clickToAdd:'\u70B9\u6B64\u589E\u52A0',
			app:'\u7535\u5668',
			name:'\u7535\u5668\u540D\u79F0',
			vcd:'\u5B89\u88C5\u5149\u76D8',
			disk:'\u78C1\u76D8',
			cate:'\u7C7B\u522B',
			os:'\u64CD\u4F5C\u7CFB\u7EDF',
			osversion:'\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C',
			application:'\u5DF2\u5B89\u88C5\u5E94\u7528',
			access:'\u8BBF\u95EE\u65B9\u5F0F',
			cpu:'CPU\u6570\u91CF',
			mem:'\u5185\u5B58\u5927\u5C0F',
			lang:'\u652F\u6301\u8BED\u8A00',
			loginStyle:'\u767B\u5F55\u65B9\u5F0F',
			user:'\u7528\u6237\u540D',
			pass:'\u5BC6\u7801'
		},
		makeApplianceHelp:{
			title:'\u7535\u5668\u7684\u5236\u4F5C\u6D41\u7A0B\u5982\u4E0B\u6240\u793A\uFF1A',
			step1:'\u7B49\u5F85\u5236\u4F5C\u7535\u5668\u51C6\u5907\u5DE5\u4F5C\u5C31\u7EEA\uFF1B',
			step2:'\u6302\u8F7D\u5149\u76D8\u3002\u6BCF\u6B21\u66F4\u6539\u5149\u76D8\u5728\u4E0B\u4E00\u6B21\u542F\u52A8\u7535\u5668\u540E\u751F\u6548\uFF1B',
			step3:'\u70B9\u51FB\u542F\u52A8\u7535\u5668\u6309\u94AE\uFF0C\u5F00\u59CB\u8FD0\u884C\u7535\u5668\uFF0C\u5728\u7535\u5668\u5173\u673A\u8FDB\u53EF\u4EE5\u901A\u8FC7\u6B64\u64CD\u4F5C\u91CD\u65B0\u542F\u52A8\uFF1B',
			step4:'\u70B9\u51FB\u505C\u6B62\u7535\u5668\u6309\u94AE\uFF0C\u4E2D\u6B62\u7535\u5668\u7684\u8FD0\u884C\uFF0C\u5982\u679C\u5728\u5236\u4F5C\u7535\u5668\u8FC7\u7A0B\u4E2D\u51FA\u73B0\u95EE\u9898\uFF0C\u53EF\u4EE5\u901A\u8FC7\u6B64\u64CD\u4F5C\u505C\u6B62\u7535\u5668\u7684\u8FD0\u884C\uFF1B',
			step5:'\u70B9\u51FB\u8FDE\u63A5\u7535\u5668\u6309\u94AE\uFF0C\u53EF\u4EE5\u901A\u8FC7VNC\u65B9\u5F0F\u8FDE\u63A5\u5230\u7535\u5668\uFF1B',
			step6:'\u70B9\u51FB\u4FDD\u5B58\u7535\u5668\u6309\u94AE\uFF0C\u5C06\u7535\u5668\u4FDD\u5B58\u4E3A\u6A21\u677F\u3002'
		},
		saveAppliance:{
			title:'\u4FDD\u5B58\u865A\u62DF\u7535\u5668',
			clickToAdd:'\u70B9\u6B64\u589E\u52A0',
			name:'\u7535\u5668\u540D\u79F0',
			disk:'\u78C1\u76D8',
			cate:'\u7C7B\u522B',
			os:'\u64CD\u4F5C\u7CFB\u7EDF',
			osversion:'\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C',
			application:'\u5DF2\u5B89\u88C5\u5E94\u7528',
			access:'\u8BBF\u95EE\u65B9\u5F0F',
			cpu:'CPU\u6570\u91CF',
			mem:'\u5185\u5B58\u5927\u5C0F',
			lang:'\u652F\u6301\u8BED\u8A00',
			loginStyle:'\u767B\u5F55\u65B9\u5F0F',
			user:'\u7528\u6237\u540D',
			pass:'\u5BC6\u7801',
			confirmTip:'<tr><td>\u60A8\u662F\u5426\u786E\u5B9A\u8981\u4FDD\u5B58\u8FD9\u4E2A\u7535\u5668\u003f</td></tr>'
		},
		operateAppliance:{
			title:'\u64CD\u4F5C\u865A\u62DF\u7535\u5668',
			save:'\u4FDD\u5B58\u8FD9\u4E2A\u7535\u5668',
			stop:'\u505C\u6B62\u8FD9\u4E2A\u7535\u5668',
			start:'\u542F\u52A8\u8FD9\u4E2A\u7535\u5668',
			confirmTip:'\u4F60\u662F\u5426\u60F3\u8981'
		},
		delAppliance:{
			title:'\u5220\u9664\u865A\u62DF\u7535\u5668',
			confirmTip:'\u60A8\u662F\u5426\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u7535\u5668\u003f'
		},
		manageAppliance:{
			allCate:'\u6240\u6709\u7C7B\u522B',
			name:'\u540D\u79F0',
			os:'\u64CD\u4F5C\u7CFB\u7EDF',
			application:'\u5DF2\u5B89\u88C5\u5E94\u7528',
			disk:'\u5BB9\u91CF',
			size:'\u5B9E\u9645\u5927\u5C0F',
			state:'\u72B6\u6001',
			detail:'\u8be6\u60c5',
			more:'\u66F4\u591A',
			tip4AddAppliance:'\u6dfb\u52a0\u865a\u62df\u7535\u5668',
			tip4DelAppliance:'\u5220\u9664\u865a\u62df\u7535\u5668',
			tip4UpdateAppliance:'\u4fee\u6539\u865a\u62df\u7535\u5668\u4fe1\u606f',
			tip4UploadAppliance:'\u4e0a\u4f20\u865a\u62df\u7535\u5668'
		},
		newVirtualDisc:{
			title:'\u6dfb\u52a0\u5149\u76d8\u6620\u50cf',
			name:'\u5149\u76D8\u540D\u79F0',
			location:'\u4F4D\u7F6E',
			format:'\u683C\u5F0F',
			type:'\u7C7B\u578B',
			os:'\u64CD\u4F5C\u7CFB\u7EDF',
			osversion:'\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C',
			application:'\u5E94\u7528'
		},
		modifyVirtualDisc:{
			title:'\u4fee\u6539\u5149\u76d8\u6620\u50cf\u4fe1\u606f',
			name:'\u5149\u76D8\u540D\u79F0',
			location:'\u4F4D\u7F6E',
			format:'\u683C\u5F0F',
			type:'\u7C7B\u578B',
			os:'\u64CD\u4F5C\u7CFB\u7EDF',
			osversion:'\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C',
			application:'\u5E94\u7528'
		},
		changeVirtualDisc:{
			title:'\u66F4\u6539\u5149\u76D8',
			name:'\u5F53\u524D\u5149\u76D8',
			disc:'\u5149\u76D8',
			tip:'\u6B64\u6B21\u66F4\u6539\u5728\u4E0B\u6B21\u91CD\u542F\u7535\u5668\u540E\u751F\u6548\uFF01'
		},
		deleteVirtualDisc:{
			title:'\u5220\u9664\u5149\u76D8\u6620\u50cf',
			confirmTip:'\u60A8\u786E\u5B9A\u8981\u5220\u9664\u8FD9\u4E2A\u5149\u76D8\u6620\u50cf\u5417\u003f'
		}
	},
	Monitor:{
		name:'\u7CFB\u7EDF\u76D1\u63A7',				
		service: {
			pcnode:'\u7269\u7406\u8282\u70B9',
			cpu:'CPU\u8D1F\u8F7D',
			mem:'\u5185\u5B58\u4F7F\u7528',
			disk:'\u78C1\u76D8\u4F7F\u7528',
			net:'\u7F51\u7EDC\u6D41\u91CF',
			ping:'\u7F51\u7EDC\u5EF6\u8FDF',
			process:'\u603B\u8FDB\u7A0B\u6570',
			xen:'\u865A\u62DF\u5316\u670D\u52A1',
			lingcloud:'\u51CC\u4E91\u7CFB\u7EDF',
			user:'\u5F53\u524D\u767B\u5F55\u7528\u6237',
			zombie:'\u50F5\u5C38\u8FDB\u7A0B\u6570',
			vm:'\u865A\u62DF\u673A',
			
			swap:'\u4EA4\u6362\u533A\u4F7F\u7528',
			http:'HTTP\u670D\u52A1',
			ssh:'SSH\u8FDC\u7A0B\u767B\u5F55',
			mysql:'MySQL\u6570\u636E\u5E93\u670D\u52A1'
		},
		status: {
			ok:		'\u5065\u5EB7',	
			warn:	'\u8B66\u544A',				
			crit:	'\u4E25\u91CD',				
			unkw:	'\u672A\u77E5'				
		},
		monitorSummary: {
			name:'\u8FD0\u884C\u60C5\u51B5\u7EDF\u8BA1',
			selectTime:'\u8BF7\u9009\u62E9\u65F6\u95F4',
			tips14Move:'\u53F0\u673A\u5668\u6709',
			tips24Move:'\u7684',
			sumInfor: {
				total: '\u603B\u5171',			
				parNode: '\u4E2A\u5206\u533A',		
				hostNode: '\u7269\u7406\u8282\u70B9',		
				
				parHealth:'\u5206\u533A\u5065\u5EB7\u7A0B\u5EA6',	
				hostNum: '\u7269\u7406\u673A\u603B\u6570'			
			}
			
		},
		monitorDetail: {
			name:'\u8BE6\u7EC6\u76D1\u63A7\u4FE1\u606F',					
			
			tHost: '\u7269\u7406\u4E3B\u673A',				
			tSrv: '\u76d1\u63a7\u9879',					
			tStat: '\u72B6\u6001',					
			tCheck: '\u4E0A\u6B21\u76D1\u6D4B\u65F6\u95F4',				
			tInfor: '\u670D\u52A1\u9879\u72B6\u6001\u4FE1\u606F'			
		},
		vmInfor:{
			vmTittle: '\u865A\u62DF\u673A\u5B9E\u65F6\u4FE1\u606F',
			
			vmInfor:'\u865A\u62DF\u673A\u4FE1\u606F',
			vmCpu:'CPU\u4F7F\u7528',
			vmMem:'\u5185\u5B58\u8D44\u6E90',
			vmDisk:'\u786C\u76D8\u4F7F\u7528',
			vmNet:'\u7F51\u7EDC\u8D44\u6E90',
			infor:{
				vmName:'\u865A\u62DF\u673A',
				chkTime:'\u68C0\u6D4B\u65F6\u95F4',
				hostName:'\u5BBF\u4E3B\u673A',
				status:'\u8FD0\u884C\u72B6\u6001'
			},
			status:{
				r:'\u8FD0\u884C',
				b:'\u963B\u585E',
				d:'\u5782\u6B7B',
				c:'\u5D29\u6E83',
				s:'\u5173\u95ED',
				p:'\u6682\u505C',
				u:'\u672A\u77E5'
			},
			cpu:{
				vcpu:'\u865A\u62DFCPU\u6570',
				time:'CPU\u65F6\u95F4',
				usage:'\u5F53\u524D\u4F7F\u7528',
				uptime:'\u8FD0\u884C\u65F6\u95F4'
			},
			mem:{
				mem:'\u5185\u5B58\u4F7F\u7528',
				usage:'\u767E\u5206\u6BD4',
				max:'\u6700\u5927\u9650\u5236',
				maxPer:'\u767E\u5206\u6BD4'
			},
			disk:{
				usage:'\u786C\u76D8\u4F7F\u7528',
				max:'\u6700\u5927\u9650\u5236',
				dir:'\u6587\u4EF6\u8DEF\u5F84',
				size:'\u6240\u5360\u7A7A\u95F4'
			},
			net:{
				nets:'\u865A\u62DF\u7F51\u5361',
				ip:'IP\u5730\u5740',
				tx:'\u53D1\u9001\u6570\u636E',
				sx:'\u63A5\u6536\u6570\u636E'
			}
		},
		monitorMgt: {
			name:'\u76D1\u63A7\u7BA1\u7406',					
			
			perf:'\u6027\u80FD',				
			process:'\u8FDB\u7A0B',				
			network:'\u8054\u7F51',				
			app:	'\u5E94\u7528\u7A0B\u5E8F',			
			user:	'\u7528\u6237',				
			
			select:	'\u5168\u9009/\u5168\u4E0D\u9009',				
			inverse:'\u53CD\u9009',				
			
			interval:'\u76D1\u63A7\u5237\u65B0\u95F4\u9694',			
			item:	'\u6BCF\u9875\u8BB0\u5F55\u6761\u6570',				
			
			btnSave:'\u4FDD\u5B58\u4FEE\u6539',		
			
			subSucc:'\u63D0\u4EA4\u6210\u529F!',
			subFail:'\u63D0\u4EA4\u5931\u8D25!',
			timeUnit:'\u79D2'
		},
		errors: {
			noRes:'\u5BF9\u4E0D\u8D77\uFF0C\u6CA1\u6709\u7ED3\u679C!',
			noVm:'\u5F53\u524D\u6CA1\u6709\u865A\u62DF\u673A!',
			rppNotValid:'\u6BCF\u9875\u8BB0\u5F55\u6570\u5FC5\u987B\u662F\u5408\u6CD5\u6574\u6570!',
			refreshIntervalNotValid:'\u76D1\u63A7\u5237\u65B0\u95F4\u9694\u5FC5\u987B\u662F\u5408\u6CD5\u6574\u6570!'
			
		}
	},
	calendar:{
			today:'\u4ECA\u5929',
			confirm:'\u786E\u5B9A',
			cancel:'\u53D6\u6D88',
			sun:'\u65E5',
			mon:'\u4E00',
			tues:'\u4E8C',
			wed:'\u4E09',
			thurs:'\u56DB',
			fri:'\u4E94',
			sat:'\u516D',
			jan:'\u4E00\u6708',
			feb:'\u4E8C\u6708',
			mar:'\u4E09\u6708',
			apr:'\u56DB\u6708',
			may:'\u4E94\u6708',
			jun:'\u516D\u6708',
			jul:'\u4E03\u6708',
			aug:'\u516B\u6708',
			sep:'\u4E5D\u6708',
			oct:'\u5341\u6708',
			nov:'\u5341\u4E00\u6708',
			dec:'\u5341\u4E8C\u6708'
	},
	error:{
		responseNotFound:'\u65E0\u6CD5\u83B7\u53D6\u4FE1\u606F:',
		tip:'\u63D0\u793A',
		errorTip:'\u9519\u8BEF\u63D0\u793A',
		noResult:'\u65e0',
		//------------------- infrastruture --------------------
		partNameNotNull:'\u5206\u533A\u540D\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		partIDNotNull:'\u5206\u533AID\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		partNameTooLong:'\u5206\u533a\u540d\u8fc7\u957f',
		partNameBeenUsed:'\u5206\u533A\u540D\u5DF2\u88AB\u4F7F\u7528\uFF0C\u8BF7\u4FEE\u6539\u002e',
		partControllerNotNull:'\u5206\u533A\u63A7\u5236\u5668\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		partNameNotFound:'\u65E0\u6CD5\u83B7\u53D6\u5206\u53D6\u5206\u533A\u540D\u002e',
		privateIpNotNull:'\u79C1\u6709IP\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		privateIpNotValid:'\u79C1\u6709IP\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u002e',
		publicIpNotValid:'\u516C\u6709IP\u4E0D\u5408\u6CD5\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u002e',		
		clusterInfoNotNull:'\u673A\u7FA4\u4FE1\u606F\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		clusterNotSelect:'\u6CA1\u6709\u9009\u4E2D\u673A\u7FA4\u002e',
		partNotSelect:'\u6CA1\u6709\u9009\u62E9\u76EE\u6807\u5206\u533A\u002e',
		clusterNameNotAssigned:'\u673A\u7FA4\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		clusterNameTooLong:'\u673A\u7FA4\u540D\u5B57\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC720\u002e',
		pnNodeNotNull:'\u6CA1\u6709\u9009\u4E2D\u7269\u7406\u8282\u70B9\u002e',
		virtualNetworkNotValid:'\u8BF7\u9009\u62E9\u5408\u6CD5\u7684\u865A\u62DF\u7F51\u7EDC\u002e',
		nodeNumNotAssigned:'\u8BF7\u8BBE\u7F6E\u8282\u70B9\u6570\u91CF\u002e',
		publicIpAssignment:'\u8BF7\u9009\u62E9\u516C\u6709IP\u90E8\u7F72\u7B56\u7565\u002e',
		startAfterCurrent:'\u5F00\u59CB\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F53\u524D\u65F6\u95F4\u002e',
		endAfterStart:'\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F00\u59CB\u65F6\u95F4\u002e',
		endAfterCurrent:'\u7ED3\u675F\u65F6\u95F4\u5FC5\u987B\u665A\u4E8E\u5F53\u524D\u65F6\u95F4\u002e',				
		connectTimeout:'\u5BF9\u4E0D\u8D77\uFF0C\u8FDE\u63A5\u8D85\u65F6\u002e',
		nodeIdNull:'\u8282\u70B9ID\u4E3A\u7A7A\u002e',
		nodeTypeNull:'\u8282\u70B9\u7C7B\u578B\u4E3A\u7A7A\u002e',
		//--------------end of infrastructure -------
		//-------------- User ----------------
		userNameNotNull:'\u7528\u6237\u540D\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		userNameNotValid:'\u7528\u6237\u540D\u5FC5\u987B\u662F\u5408\u6CD5\u7684\u7535\u5B50\u90AE\u4EF6\u5730\u5740\u002e',
		passNotNull:'\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		passRetype:'\u8BF7\u518D\u6B21\u8F93\u5165\u5BC6\u7801\u002e',
		passConfirm:'\u8BF7\u786E\u8BA4\u5BC6\u7801\u002e',
		proxyNotNull:'\u8BC1\u4E66\u6587\u4EF6\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		newPassConfirm:'\u8BF7\u91CD\u8F93\u5165\u65B0\u5BC6\u7801\u002e',
		oldPassNotNull:'\u65E7\u5BC6\u7801\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		groupNameNotNull:'\u7EC4\u540D\u4E0D\u80FD\u4E3A\u7A7A\u002e',
		acSaveError:'\u8BF7\u6C42\u9519\u8BEF\u0021',
		acSaveSuccess:'\u4FDD\u5B58\u6210\u529F\u0021',
		acSaveFail:'\u4FDD\u5B58\u5931\u8D25\u0021',
		caUserNameNotNull:'\u8BC1\u4E66\u540D\u5B57\u4E0D\u80FD\u4E3A\u7A7A\u0021',
		caValidityNotValid:'\u6709\u6548\u671F\u5FC5\u987B\u662F\u5408\u6CD5\u7684\u6574\u6570\u0021',
		caTimeTooLong:'\u6709\u6548\u671F\u6700\u957F60\u5E74\uFF0C\u8BF7\u91CD\u65B0\u8F93\u5165\u002e',
		caTimeNotValid:'\u975E\u6CD5\u8F93\u5165\uFF0C\u8BF7\u68C0\u67E5\u0021',
		caNumNotValid:'\u8BC1\u4E66\u6570\u5FC5\u987B\u662F\u5408\u6CD5\u7684\u6574\u6570\u0021',
		caPrefixNotNull:'\u8BC1\u4E66\u540D\u524D\u7F00\u4E0D\u80FD\u4E3A\u7A7A\u0021',
		//--------------end of User ----------
		//-------------- Appliance ----------------
		cateNotNull:"\u7C7B\u522B\u540D\u79F0\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		cateTooLong:"\u7C7B\u522B\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC720\u4E2A\u5B57\u7B26\u0021",
		appIdNotNull:"\u7535\u5668\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appNameNotNull:"\u7535\u5668\u540D\u79F0\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appNameTooLong:"\u7535\u5668\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC720\u4E2A\u5B57\u7B26\u0021",
		appDiskNotNull:"\u7535\u5668\u78C1\u76D8\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appCateNotNull:"\u7535\u5668\u7C7B\u522B\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appVcdNotNull:"\u5B89\u88C5\u5149\u76D8\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appOsNotNull:"\u7535\u5668\u64CD\u4F5C\u7CFB\u7EDF\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appOsVersionTooLong:"\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u4E0D\u80FD\u8D85\u8FC720\u4E2A\u5B57\u7B26\u0021",
		appApplicationTooLong:"\u5DF2\u5B89\u88C5\u5E94\u7528\u4E0D\u80FD\u8D85\u8FC7100\u4E2A\u5B57\u7B26\u0021",
		appAccessNotNull:"\u7535\u5668\u81F3\u5C11\u8981\u6709\u4E00\u79CD\u8BBF\u95EE\u65B9\u5F0F\u0021",
		appCpuNotNull:"\u7535\u5668CPU\u6570\u91CF\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appMemNotNull:"\u5185\u5B58\u5927\u5C0F\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appDiskCapNull:"\u78C1\u76D8\u5BB9\u91CF\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appDiskCapLimt:"\u78C1\u76D8\u5BB9\u91CF\u5FC5\u987B\u4E3A1~128GB\u0021",
		appLangNotNull:"\u7535\u5668\u652F\u6301\u8BED\u8A00\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appLangTooLong:"\u7535\u5668\u652F\u6301\u8BED\u8A00\u4E0D\u80FD\u8D85\u8FC7100\u4E2A\u5B57\u7B26\u0021",
		appLoginStyleNotNull:"\u7535\u5668\u767B\u5F55\u65B9\u5F0F\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appUserNotNull:"\u7535\u5668\u7528\u6237\u540D\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appUserTooLong:"\u7535\u5668\u7528\u6237\u540D\u4E0D\u80FD\u8D85\u8FC780\u4E2A\u5B57\u7B26\u0021",
		appPassNotNull:"\u7535\u5668\u5BC6\u7801\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		appPassTooLong:"\u7535\u5668\u5BC6\u7801\u4E0D\u80FD\u8D85\u8FC780\u4E2A\u5B57\u7B26\u0021",
		appDescTooLong:"\u7535\u5668\u63CF\u8FF0\u4E0D\u80FD\u8D85\u8FC7500\u4E2A\u5B57\u7B26\u0021",
		discNameNotNull:"The disc name should not be null or blank\u0021",
		discNameTooLong:"\u5149\u76D8\u540D\u79F0\u4E0D\u80FD\u8D85\u8FC720\u4E2A\u5B57\u7B26\u0021",
		discLocNotNull:"\u5149\u76D8\u4F4D\u7F6E\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		discFormatNotNull:"\u5149\u76D8\u683C\u5F0F\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		discTypeNotNull:"\u5149\u76D8\u7C7B\u578B\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		discOsNotNull:"\u64CD\u4F5C\u7CFB\u7EDF\u4E0D\u5E94\u4E3A\u7A7A\u0021",
		discOsVersionTooLong:"\u64CD\u4F5C\u7CFB\u7EDF\u7248\u672C\u4E0D\u80FD\u8D85\u8FC720\u4E2A\u5B57\u7B26\u0021"
		//--------------Appliance ----------
	}
}
	
