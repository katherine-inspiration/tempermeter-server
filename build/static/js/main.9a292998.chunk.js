(this.webpackJsonptempermeter=this.webpackJsonptempermeter||[]).push([[0],{36:function(e,n,t){e.exports=t(50)},41:function(e,n,t){},42:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18),c=t.n(a),i=(t(41),t(42),t(2)),s=t(3);function u(){var e=Object(i.a)(["\n    background-color: white;\n    padding: 0px;\n    width: 100%;\n    display:block;\n    height: 100px;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n"]);return u=function(){return e},e}var l=s.a.header(u());function d(){var e=Object(i.a)(["\n    width: 150px;\n    height: 150px;\n    position:absolute;\n    top: -30px;\n    left: 20px;\n"]);return d=function(){return e},e}var f=s.a.img(d()),p=t(31);function b(){var e=Object(i.a)(["\n    font-size: 30px;\n    color: ",";\n    position: absolute;\n    top: 30px;\n    right: 40px;\n    \n    :hover{\n        cursor: pointer;\n    }\n"]);return b=function(){return e},e}var m=Object(s.a)(p.a)(b(),(function(e){return e.secondary?"#FD759C":"#2E753E"})),h=t(33);function g(){var e=Object(i.a)(["\n    width: 1000px;\n    margin: 20px auto;\n    background-color: white;\n    padding: 20px;\n    display: block;\n    text-align: center;\n    border: 1px pink solid;\n"]);return g=function(){return e},e}var E=s.a.section(g()),O=t(5),v=t(35),j=t(11);function _(){var e=Object(i.a)(["\n    padding: 18px 60px;\n    background-color: ",";\n    color: ",";\n    border: 1px "," solid;\n    display: inline-block;\n    font-size:20px;\n    text-decoration: none;\n    :hover{\n        cursor:pointer;\n    }\n    :active{\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);\n    }\n"]);return _=function(){return e},e}var y=s.a.button(_(),(function(e){return e.disabled?"#a3a3a3":e.primary?"#2E753E":e.secondary?"#FD759C":"white"}),(function(e){return e.disabled?"black":e.primary||e.secondary?"white":"#2E753E"}),(function(e){return e.disabled?"black":e.secondary?"#FD759C":"#2E753E"}));function w(){var e=Object(i.a)(["\n    color: ",";\n    font-size: 30px;\n    font-weight: bold;\n\n"]);return w=function(){return e},e}var x=s.a.h1(w(),(function(e){return e.secondary?"#FD759C":"#2E753E"})),S=t(6);function I(){var e=Object(i.a)(["\n    \n    border:1px "," solid;\n    padding: 20px 40px;\n    font-size: 17px;\n    border-radius: 15px;\n    display: inline-block;\n    margin: 10px auto;\n    .date{\n        color: '#4d4d4d';\n        font-style: italic;\n    }\n    .result_name{\n        font-weight:bold;\n    }\n    :hover{\n        background-color: ",";\n        color: white;\n        cursor: pointer;\n    }\n"]);return I=function(){return e},e}var k=Object(s.a)((function(e){console.log(e);var n=new Date(e.date).toLocaleTimeString("ru-RU",{month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});return o.a.createElement("div",null,o.a.createElement("div",{className:e.className},o.a.createElement("span",{className:"date"},n),o.a.createElement("br",null),o.a.createElement("span",{className:"result_name"},e.result_name)))}))(I(),(function(e){return e.primary?"#2E753E":"#FD759C"}),(function(e){return e.primary?"#2E753E":"#FD759C"})),q=k;function D(){var e=Object(i.a)(["\n    border: 1px "," solid;\n    background-color: ",";\n    color: ",";\n    font-size: 18px;\n    border-radius: 15px;\n    padding: 20px;\n    \n"]);return D=function(){return e},e}var N=s.a.p(D(),(function(e){return e.secondary?"#FD759C":"#2E753E"}),(function(e){return e.primary?"#2E753E":e.secondary&&e.bold?"#FD759C":"white"}),(function(e){return e.primary||e.secondary&&e.bold?"white":"#4d4d4d"}));function T(){var e=Object(i.a)(["\n    width: 150px;\n    display: inline-block;\n    \n"]);return T=function(){return e},e}var U=Object(s.a)((function(e){return o.a.createElement("div",null,o.a.createElement("img",Object.assign({className:e.className},e,{src:"/images/preloader.svg"})))}))(T()),C=function(e){var n=Object(r.useState)(!1),t=Object(S.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)(!1),s=Object(S.a)(i,2),u=s[0],l=s[1],d=Object(r.useState)([]),f=Object(S.a)(d,2),p=f[0],b=f[1];a||(l(!0),console.log("fetching /api/history/results/"+e.user_id),fetch("/api/history/results/"+e.user_id).then((function(e){return e.json()})).then((function(n){return console.log("result"),console.log(n),n&&e.updateResultsHistory(n),c(!0),l(!1),b(n),n})).catch((function(e){return console.log(e)})),c(!0));var m=e.resultsHistory.length>0?p.map((function(e){return o.a.createElement(q,Object.assign({},e,{key:e.session_id}))})):o.a.createElement(N,null,"\u0412\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0443\u0441\u0442\u0430. \u0412\u044b \u0435\u0449\u0435 \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u0438 \u0442\u0435\u0441\u0442.");return o.a.createElement("div",null,u?o.a.createElement(U,null):m)};function P(){var e=Object(i.a)(["\n"]);return P=function(){return e},e}var A=Object(s.a)(C)(P()),F=t(34),H=[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;Object(F.a)(e);switch(n.type){case"UPDATE-RESULTS-HISTORY":return n.newState;default:return e}},z=Object(j.b)((function(e){return{user_id:e.userInfo.user_id,resultsHistory:e.resultsHistory}}),(function(e){return{updateResultsHistory:function(n){e(function(e){return{type:"UPDATE-RESULTS-HISTORY",newState:e}}(n))}}}))(A),Q=t(14),J=function(e){return o.a.createElement("div",null,o.a.createElement(y,{primary:!0,as:Q.b,to:"/test/1",onClick:function(){fetch("/api/session/start/"+e.user_id).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"),o.a.createElement(x,{secondary:!0},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"),o.a.createElement(z,{user_id:e.user_id}))},L={user_id:"1"},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-USER-INFO":return n.userInfo;default:return e}},W=function(e){return{type:"UPDATE-USER-INFO",userInfo:{user_id:e.user_id}}},Y=Object(j.b)((function(e){return Object(v.a)({},e.userInfo)}),(function(e){return{updateUserInfo:function(n){e(W(n))}}}))(J),G=function(e){return o.a.createElement(N,{primary:!0},e.question_text)};function M(){var e=Object(i.a)(["\n    :hover{\n        cursor:pointer;\n    }\n    \n"]);return M=function(){return e},e}var $=function(e){var n=Object(r.useState)(!1),t=Object(S.a)(n,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){c(e.chosen),console.log(e)}),[e.chosen]),o.a.createElement(N,{secondary:!0,bold:a,className:e.className,onClick:e.onClick},e.answer_text)},K=$=Object(s.a)($)(M());function V(){var e=Object(i.a)(["\n\n"]);return V=function(){return e},e}var X=function(e){var n=Object(r.useState)([]),t=Object(S.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)(!0),s=Object(S.a)(i,2),u=s[0],l=s[1],d=Object(r.useState)(null),f=Object(S.a)(d,2),p=f[0],b=f[1];Object(r.useEffect)((function(){m(e.question_id)}),[e.question_id]),Object(r.useEffect)((function(){b(a?a.map((function(n){return o.a.createElement(K,{answer_id:n.answer_id,answer_text:n.answer_text,onClick:function(t){e.answerChoiceHandler(n.answer_id),console.log(n.answer_id)},chosen:n.answer_id===+e.chosenAnswerId})})):null)}),[a,e.chosenAnswerId]);var m=function(n){return console.log("props"),console.log(e),console.log("Fetching answers for question "+n),n?fetch("/api/answers/"+n).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e),c(e),l(!1),e})).catch((function(e){return console.log(e)})):[]};return o.a.createElement("div",null,u?o.a.createElement(U,null):p)},Z=X=Object(s.a)(X)(V());function ee(){var e=Object(i.a)(["\n    padding: 15px;\n    color: '#5e5e5e';\n    font-style:italic;\n    text-align: left;\n"]);return ee=function(){return e},e}var ne=function(e){return o.a.createElement("div",{className:e.className},e.currentPage,"/",e.totalPages)},te=ne=Object(s.a)(ne)(ee()),re=function(e){var n=Object(r.useState)(null),t=Object(S.a)(n,2),a=(t[0],t[1]),c=Object(r.useState)(!1),i=Object(S.a)(c,2),s=(i[0],i[1],Object(r.useState)([])),u=Object(S.a)(s,2),l=u[0],d=u[1],f=Object(r.useState)(!1),p=Object(S.a)(f,2),b=p[0],m=p[1],h=Object(r.useState)(0),g=Object(S.a)(h,2),E=g[0],O=g[1],v=Object(r.useState)(null),j=Object(S.a)(v,2),_=j[0],w=j[1],x=Object(r.useState)(!1),I=Object(S.a)(x,2),k=I[0],q=I[1],D=function(e){console.log("client put body"),fetch("/api/answer",{method:"PUT",body:JSON.stringify(e)}).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e)}))};Object(r.useEffect)((function(){a(e.session_id)}),[e.session_id]),Object(r.useEffect)((function(){q(0===E)}),[E]),Object(r.useEffect)((function(){m(!0),console.log("/api/session/"+e.user_id),fetch("/api/session/"+e.user_id).then((function(e){return e.json()})).then((function(n){return console.log(n),n&&e.updateSessionId(n.session_id),m(!1),n.session_id})).catch((function(e){return console.log(e)})),m(!0),console.log("Getting questions"),fetch("/api/questions").then((function(e){return console.log(e),e.json()})).then((function(n){return console.log("questions result"),console.log(n),n&&(e.updateQuestions(n),d(n)),m(!1),n})).catch((function(e){return console.log(e)}))}),[e]);var N=l.map((function(n){return o.a.createElement(G,{primary:!0,session_id:e.session_id,question_id:n.question_id,question_text:n.question_text,questions_picture:n.question_picture})}));return o.a.createElement("div",null,b?o.a.createElement(U,null):o.a.createElement("div",null,o.a.createElement(te,{currentPage:E+1,totalPages:l.length}),N[E]),o.a.createElement(Z,{question_id:l.length>0?l[E].question_id:"",answerChoiceHandler:function(e){w(e)},chosenAnswerId:_}),b?null:o.a.createElement("div",null,o.a.createElement(y,{onClick:function(){l&&E>0&&(D({session_id:e.session_id,answer_id:_,question_id:l[E].question_id}),O(E-1),w(null))},disabled:k},"\u041d\u0430\u0437\u0430\u0434"),o.a.createElement(y,{primary:E===l.length-1,onClick:function(){l&&E<l.length-1&&(D({session_id:e.session_id,answer_id:_,question_id:l[E].question_id}),O(E+1),w(null))}},E===l.length-1?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442":"\u0412\u043f\u0435\u0440\u0435\u0434")))},oe={session_id:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-SESSION-ID":return{session_id:n.session_id};default:return e}},ce=function(e){return{type:"UPDATE-SESSION-ID",session_id:e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-QUESTIONS":return n.questions;default:return e}},se=function(e){return{type:"UPDATE-QUESTIONS",questions:e}},ue=Object(j.b)((function(e){return{session_id:e.sessionInfo.session_id,user_id:e.userInfo.user_id}}),(function(e){return{updateSessionId:function(n){e(ce(n))},updateQuestions:function(n){e(se(n))}}}))(re);function le(){var e=Object(i.a)(["\n    width:100%;\n"]);return le=function(){return e},e}Object(s.a)((function(e){return o.a.createElement("img",{className:e.className,src:"/images/Tempermeter_loader.svg"})}))(le());var de=function(){return o.a.createElement("div",null,o.a.createElement(l,null,o.a.createElement(f,{src:"images/Tempermeter-logo.svg",alt:"Tempermeter logo"}),o.a.createElement(m,{icon:h.a})),o.a.createElement(E,null,o.a.createElement(O.c,null,o.a.createElement(O.a,{path:"/home",render:function(){return o.a.createElement(Y,null)}}),o.a.createElement(O.a,{path:"/test/:question_id",render:function(){return o.a.createElement(ue,null)}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var fe=t(16),pe=Object(fe.b)({resultsHistory:R,userInfo:B,sessionInfo:ae,questions:ie}),be=Object(fe.c)(pe);c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Q.a,null,o.a.createElement(j.a,{store:be},o.a.createElement(de,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.9a292998.chunk.js.map