!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=Error().stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="28a638e4-88b2-4b85-8efa-1947468ecc6e",e._sentryDebugIdIdentifier="sentry-dbid-28a638e4-88b2-4b85-8efa-1947468ecc6e")}catch(e){}}();var _global="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};_global.SENTRY_RELEASE={id:"6af6db66"};"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[943],{30173:function(e,r,n){n.d(r,{S:function(){return u}});var t=n(7444),o=n(91087),i=n(50959);function u(){var e=(0,o.mC)(),r=(0,t.Z)(e);return(0,i.useCallback)(function(){var e,n;return!Number.isFinite(n=parseInt(null==(e=r.current)?void 0:e.variation("flag-container-retry-minimum-ms",0),10))||n<0?0:n},[r])}},33829:function(e,r,n){n.d(r,{Z:function(){return C}});var t={};n.r(t),n.d(t,{checkAndTrack:function(){return w},ensureTrackedFile:function(){return y},storeOp:function(){return m}});var o=n(59868),i=n(27387),u=n(66626),s=n(96583),l=n(11516),a=n(41733),c={};function f(e,r,n){var t=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};e.info("ot client dataloss",(0,a._)({case:r,startTime:n.startTime,opsSinceFlush:n.opsSinceFlush,whileReconnecting:n.whileReconnecting,replid:n.replId,filePath:n.filePath},t))}var d=n(70090),p={replsList:function(){return"dataLossRepls"},replFiles:function(e){return"dataLossReplFiles".concat(e)},latestOp:function(e,r){return"dataLossLatestOp--".concat(e,"--").concat(r)},latestFlushedOp:function(e,r){return"dataLossLatestFlushed--".concat(e,"--").concat(r)},latestOwnOp:function(e,r){return"dataLosslatestOwnOp--".concat(e,"--").concat(r)},opsSinceFlush:function(e,r){return"dataLossOpsSinceFlush--".concat(e,"--").concat(r)}};function h(){var e=l.Z.get(p.replsList(),"array");return e||(e=[],l.Z.set(p.replsList(),e)),e}function v(e){var r=l.Z.get(p.replFiles(e),"array");return r||(r=[],l.Z.set(p.replFiles(e),r)),r}function g(e){var r=v(e),n=!0,t=!1,o=void 0;try{for(var i,u=r[Symbol.iterator]();!(n=(i=u.next()).done);n=!0){var s=i.value;"string"==typeof s&&function(e,r){l.Z.remove(p.latestOp(e,r)),l.Z.remove(p.latestFlushedOp(e,r)),l.Z.remove(p.latestOwnOp(e,r));var n=v(e).filter(function(e){return e!==r});l.Z.set(p.replFiles(e),n)}(e,s)}}catch(e){t=!0,o=e}finally{try{n||null==u.return||u.return()}finally{if(t)throw o}}l.Z.remove(p.replFiles(e));var a=h().filter(function(r){return r!==e});l.Z.set(p.replsList(),a)}function y(e){var r,n=e.replId,t=e.filePath;(r=h()).includes(n)||(r.length>20?(g(r[0]),r[0]=n):r.push(n),l.Z.set(p.replsList(),r));var o=v(n);o.includes(t)||(o.length>20?(g(o[0]),o[0]=t):o.push(t),l.Z.set(p.replFiles(n),o))}function m(e){var r=e.filePath,n=e.replId,t=e.opType,o=e.op;!function(e){var r=e.filePath,n=e.replId,t=e.opType,o=e.logger,i=e.isReconnecting,u=f.bind(null,o),s="".concat(n,"--").concat(r);c[s]||(c[s]={replId:n,filePath:r,timer:null,startTime:null,whileReconnecting:0,opsSinceFlush:0});var l=c[s];if("latestFlushedOp"===t){delete c[s];var a=l.startTime;if(a){var d=Date.now()-a;d>6e4&&u("flush_delay_received",l,{elapsed:d})}var p=l.timer;p&&(clearTimeout(p),l.timer=null)}else{l.opsSinceFlush+=1,i&&(l.whileReconnecting+=1);var h,v=null!==(h=l.startTime)&&void 0!==h?h:Date.now();l.startTime=v,l.timer||(l.timer=setTimeout(function(){u("flush_delay_timeout",l)},6e4)),150===l.opsSinceFlush?u("flush_delay_small",l):1e3===l.opsSinceFlush&&u("flush_delay_large",l)}}({filePath:r,replId:n,opType:t,logger:e.logger,isReconnecting:e.isReconnecting}),l.Z.set(p[t](n,r),o)}var b={};function w(e){return R.apply(this,arguments)}function R(){return(R=(0,i._)(function(e){var r,n,t,o,a,c,f,h;return(0,s.Jh)(this,function(v){var g;return r=e.filePath,n=e.replId,t=e.serverVersion,o=e.serverContent,a=e.fetchOps,c=e.logger,b[r+n]||(b[r+n]=!0,f=function(e,r){var n={latestOp:null,latestFlushedOp:null,latestOwnOp:null},t=Object.keys(n),o=!0,i=!1,u=void 0;try{for(var s,a=t[Symbol.iterator]();!(o=(s=a.next()).done);o=!0){var c=s.value,f=l.Z.get(p[c](e,r),"object");f&&f&&"object"==typeof f&&"number"==typeof f.crc32&&"number"==typeof f.version&&(n[c]=f)}}catch(e){i=!0,u=e}finally{try{o||null==a.return||a.return()}finally{if(i)throw u}}return n}(n,r),h=d.str(o)>>>0,Object.keys(f).forEach((g=(0,i._)(function(e){var r,n,o;return(0,s.Jh)(this,function(i){switch(i.label){case 0:if(!(r=f[e]))return[2];if(t<r.version)return c.info("ot client dataloss",{opType:e,case:"server_forgot"}),[2];if(t===r.version)return h!==r.crc32&&c.info("ot client dataloss",{opType:e,case:"crc32_mismatch"}),[2];i.label=1;case 1:return i.trys.push([1,3,,4]),[4,a(r.version,r.version)];case 2:return n=u._.apply(void 0,[i.sent(),1])[0],[3,4];case 3:return o=i.sent(),c.info("ot client dataloss",{opType:e,case:"error_fetching_op",originalError:String(o)}),[2];case 4:if(!n)return c.info("ot client dataloss",{opType:e,case:"op_not_found"}),[2];return n.crc32!==r.crc32&&c.info("ot client dataloss",{opType:e,case:"crc32_mismatch"}),[2]}})}),function(e){return g.apply(this,arguments)}))),[2]})})).apply(this,arguments)}var _=n(48170);function C(e){var r=e.container,n=e.channelRequestPriority;return(0,_.Z)({container:r,dataloss:t,track:o.j,channelRequestPriority:n})}},78037:function(e,r,n){function t(e,r){return{ok:!1,error:e,errorExtras:r}}function o(e){return{ok:!0,value:e}}n.d(r,{Ok:function(){return o},UG:function(){return t}}),r.ZP={Ok:o,Err:t,tryCatch:function(e,r){try{return o(e())}catch(e){return t(r?r(e):e)}}}},52191:function(e,r){r.Z=".replit"},24418:function(e,r,n){n.d(r,{Z:function(){return h},l:function(){return p}});var t=n(27387),o=n(63257),i=n(96583),u=n(83493),s=n(59808),l=n(30084),a=n(39756),c=n(52191),f=n(25202),d=n(30671),p=c.Z;function h(e){var r,n,c,h,v=e.container,g=e.fs,y=e.channelRequestPriority,m=e.ctx,b=(0,u.ZP)();b.setMaxListeners(50);var w=null,R=null,_=null;function C(){return E.apply(this,arguments)}function E(){return(E=(0,t._)(function(){return(0,i.Jh)(this,function(e){return w&&"open"===w.status?[2,w]:[2,new Promise(function(e){b.once(s.zW.CHANNEL_OPENED,function(r){e(r)})})]})})).apply(this,arguments)}(function(){O.apply(this,arguments)})(),v.openChannel({service:"dotreplit",priority:y},function(e){var r=e.channel;return w=r,b.emit(s.zW.CHANNEL_OPENED,r),function(){w=null}});var F=!1;function O(){return(O=(0,t._)(function(){return(0,i.Jh)(this,function(e){return g.watchDir(a.Ql,{onChange:function(e){if(!e.some(function(e){return e.filename===p&&e.type===l.Tv.File})){(null==R?void 0:R.error)!==s.Yt.NotFound&&(R={error:s.Yt.NotFound,errorMessage:"",config:null},b.emit(s.zW.CHANGE,R));return}F||(F=!0,g.watchFile(p,{onChange:function(){R=null,S.getConfig({bypassCache:!0}).then(function(e){b.emit(s.zW.CHANGE,e)})},onMoveOrDelete:function(){F=!1},onError:function(e,r){R=null,F=!1,e.code||v.unrecoverableError(e,r)}}))},onError:function(e,r){v.unrecoverableError(e,r)}}),[2]})})).apply(this,arguments)}function M(){return(M=(0,t._)(function(){return(0,i.Jh)(this,function(e){switch(e.label){case 0:return R=null,_||(_=function(){return N.apply(this,arguments)}()),[4,_];case 1:return R=e.sent(),_=null,[2,R]}})})).apply(this,arguments)}function N(){return(N=(0,t._)(function(){return(0,i.Jh)(this,function(e){var r;return[2,(0,d.DW)(m,"dotreplit.getConfigFromServer",(r=(0,t._)(function(e){var r,n,t,o;return(0,i.Jh)(this,function(i){switch(i.label){case 0:return[4,C()];case 1:if("closed"===(n=i.sent()).status)return[2,{error:s.Yt.Disconnected,errorMessage:"channel closed",config:null}];return[4,n.request({dotReplitGetRequest:{},traceInfo:e?(0,d.Rg)(e):void 0})];case 2:if((t=i.sent()).channelClosed)return[2,{error:s.Yt.Disconnected,errorMessage:"channel closed",config:null}];if(t.error){if(t.error.includes("unable to decode"))return[2,{error:s.Yt.ParseError,errorMessage:t.error,config:null}];if(t.error.includes("no such file"))return[2,{error:s.Yt.NotFound,errorMessage:t.error,config:null}];return[2,{error:s.Yt.Unknown,errorMessage:t.error,config:null}]}if(!(o=null===(r=t.dotReplitGetResponse)||void 0===r?void 0:r.dotReplit))return v.unrecoverableError(Error("Dotreplit responded with no error and no config")),[2,{error:s.Yt.Unknown,errorMessage:"Expected dotReplitGetResponse to include dotReplit",config:null}];return[2,{error:null,errorMessage:null,config:o}]}})}),function(e){return r.apply(this,arguments)}))]})})).apply(this,arguments)}var P=(r=(0,t._)(function(e){var r;return(0,i.Jh)(this,function(n){switch(n.label){case 0:return[4,g.stat(p)];case 1:if(n.sent().exists)return[3,3];return[4,g.writeFile(p,"")];case 2:n.sent(),n.label=3;case 3:return[4,C()];case 4:return[4,n.sent().request({dotReplitUpdateRequest:{ops:e}})];case 5:if((r=n.sent()).channelClosed)return[2,{errorMessage:"Channel closed.",error:s.au.ChannelClosed,response:null}];if(r.error){if(r.error.includes("could not parse json")||r.error.includes("is not json")||r.error.includes("parsing value field")||r.error.includes("missing field"))return[2,{errorMessage:r.error,error:s.au.JSONParseError,response:null}];if(r.error.includes("could not read file"))return[2,{errorMessage:r.error,error:s.au.NotFound,response:null}];if(r.error.includes("could not parse toml"))return[2,{errorMessage:r.error,error:s.au.TOMLParseError,response:null}];if(r.error.includes("unknown variant"))return[2,{errorMessage:r.error,error:s.au.OpType,response:null}];if(r.error.includes("could not write to file"))return[2,{errorMessage:r.error,error:s.au.CouldNotWrite,response:null}];if(r.error.includes("could not read line"))return[2,{errorMessage:r.error,error:s.au.ReadLine,response:null}];return[2,{errorMessage:r.error,error:s.au.Unknown,response:null}]}if(!r.dotReplitUpdateResponse)throw Error("Expected .replit to be updated");return[2,{response:r.dotReplitUpdateResponse,error:null,errorMessage:null}]}})}),function(e){return r.apply(this,arguments)}),S={watch:function(e){var r=!1,n=!1,t=function(){for(var r=arguments.length,t=Array(r),i=0;i<r;i++)t[i]=arguments[i];n=!0,e.apply(void 0,(0,o._)(t))};return b.on(s.zW.CHANGE,t),S.getConfig().then(function(e){r||n||t(e)}),function(){r=!0,b.removeListener(s.zW.CHANGE,t)}},getConfig:function(e){return(0,t._)(function(){return(0,i.Jh)(this,function(r){return(null==e?void 0:e.bypassCache)||!R?[2,function(){return M.apply(this,arguments)}()]:[2,R]})})()},getRunConfig:function(){return(0,t._)(function(){var e,r;return(0,i.Jh)(this,function(n){switch(n.label){case 0:return[4,C()];case 1:return[4,n.sent().request({runConfigGetRequest:{}})];case 2:if((e=n.sent()).channelClosed)return[2,this.getRunConfig()];if(!e.runConfigGetResponse)throw null!==(r=e.error)&&void 0!==r?r:Error("expected run config");return[2,e.runConfigGetResponse]}})}).apply(this)},updateDotReplit:(n=[],c=400,h=(0,f.Z)((0,t._)(function(){var e;return(0,i.Jh)(this,function(r){switch(r.label){case 0:return[4,P(n)];case 1:return e=r.sent(),n=[],[2,e]}})}),{wait:c}),function(e,r){r&&(c=r);var t=!0,o=!1,i=void 0;try{for(var u,s=e[Symbol.iterator]();!(t=(u=s.next()).done);t=!0)!function(){var e=u.value,r=n.findIndex(function(r){return r.path===e.path});-1!==r?n[r]=e:n.push(e)}()}catch(e){o=!0,i=e}finally{try{t||null==s.return||s.return()}finally{if(o)throw i}}return h()})};return S}},39756:function(e,r,n){n.d(r,{AS:function(){return u},Ql:function(){return o},oh:function(){return i}});var t=n(93711),o=(0,t.S1)("."),i=(0,t.S1)(".lesson"),u=(0,t.S1)(".tutorial")},23015:function(e,r,n){n.d(r,{Z:function(){return s}});var t=n(27387),o=n(96583),i=n(59173),u=n(59808);function s(e){var r=e.container,n=e.dotReplit,s=(0,i.u)(null),l=(0,i.u)(null),a=(0,i.u)(null);function c(){return a.current?Promise.resolve(a.current):new Promise(function(e){var r=a.subscribe(function(n){n&&(r(),e(n))})})}return r.openChannel({service:"toolchain"},function(e){var r=e.channel;a.set(r);var n=r.onCommand(function(e){e.toolchainChanged?s.current=e.toolchainChanged.configs:e.nixModulesChanged&&(l.current=e.nixModulesChanged.modules)});return r.request({toolchainGetRequest:{}}).then(function(e){var r;s.current=(null===(r=e.toolchainGetResponse)||void 0===r?void 0:r.configs)||null}),r.request({nixModulesGetRequest:{}}).then(function(e){var r;l.current=(null===(r=e.nixModulesGetResponse)||void 0===r?void 0:r.modules)||null}),function(){n()}}),{configs:s,modules:l,getConfigs:function(){return s.current?Promise.resolve(s.current):new Promise(function(e){var r=s.subscribe(function(n){if(r(),null===n)throw Error("Returned toolchain config should not be null");e(n)})})},getRegistry:function(){return(0,t._)(function(){return(0,o.Jh)(this,function(e){switch(e.label){case 0:return[4,c()];case 1:return[4,e.sent().request({nixModulesGetRegistryRequest:{}})];case 2:return[2,e.sent().nixModulesGetRegistryResponse||null]}})})()},addModule:function(e){return(0,t._)(function(){var r,t,i;return(0,o.Jh)(this,function(o){switch(o.label){case 0:return t=[],[4,n.getConfig()];case 1:if((i=o.sent()).error&&i.error!==u.Yt.NotFound)throw Error("Failed to read .replit"+i.error);if(-1!==(t=(null===(r=i.config)||void 0===r?void 0:r.modules)||[]).indexOf(e))return[3,3];return t.push(e),[4,n.updateDotReplit([{op:"add",path:"modules",value:JSON.stringify(t)}])];case 2:o.sent(),o.label=3;case 3:return[2]}})})()},removeModule:function(e){return(0,t._)(function(){var r,t,i,s;return(0,o.Jh)(this,function(o){switch(o.label){case 0:return t=[],[4,n.getConfig()];case 1:if((i=o.sent()).error&&i.error!==u.Yt.NotFound)throw Error("Failed to read .replit"+i.error);if((s=(t=(null===(r=i.config)||void 0===r?void 0:r.modules)||[]).filter(function(r){if(e===r)return!1;var n=r.match(/^(.+)\.nix$/);return(n&&n[1])!==e})).length===t.length)return[2];return[4,n.updateDotReplit([{op:"add",path:"modules",value:JSON.stringify(s)}])];case 2:return o.sent(),[2]}})})()},upgradeModule:function(e,r){return(0,t._)(function(){var t,i,s;return(0,o.Jh)(this,function(o){switch(o.label){case 0:return[4,n.getConfig()];case 1:if((i=o.sent()).error&&i.error!==u.Yt.NotFound)throw Error("Failed to read .replit"+i.error);return s=((null===(t=i.config)||void 0===t?void 0:t.modules)||[]).map(function(n){return e===n?r:n}),[4,n.updateDotReplit([{op:"add",path:"modules",value:JSON.stringify(s)}])];case 2:return o.sent(),[2]}})})()},buildModules:function(){return(0,t._)(function(){var e,r;return(0,o.Jh)(this,function(n){switch(n.label){case 0:return e=this,[4,c()];case 1:return r=n.sent(),[2,new Promise(function(n){var t=e.configs.subscribe(function(e){e&&(t(),n(void 0))});r.send({nixModulesBuildRequest:{}})})]}})}).apply(this)}}}}}]);
//# sourceMappingURL=943-f23c3542bebf132c.js.map