(this.webpackJsonptempermeter=this.webpackJsonptempermeter||[]).push([[0],{37:function(e,n,t){e.exports=t(51)},42:function(e,n,t){},43:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(18),i=t.n(a),s=(t(42),t(5)),c=(t(43),t(3)),u=t(4);function l(){var e=Object(c.a)(["\n    background-color: white;\n    padding: 0px;\n    width: 100%;\n    display:block;\n    height: 100px;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n"]);return l=function(){return e},e}var d=u.a.header(l());function f(){var e=Object(c.a)(["\n    width: 150px;\n    height: 150px;\n    position:absolute;\n    top: -30px;\n    left: 20px;\n"]);return f=function(){return e},e}var h=u.a.img(f()),m=t(32);function p(){var e=Object(c.a)(["\n    font-size: 30px;\n    color: ",";\n    position: absolute;\n    top: 30px;\n    right: 40px;\n    \n    :hover{\n        cursor: pointer;\n    }\n"]);return p=function(){return e},e}var b=Object(u.a)(m.a)(p(),(function(e){return e.secondary?"#FD759C":"#2E753E"})),g=t(34);function E(){var e=Object(c.a)(["\n    width: 1000px;\n    margin: 20px auto;\n    background-color: white;\n    padding: 20px;\n    display: block;\n    text-align: center;\n    border: 1px pink solid;\n"]);return E=function(){return e},e}var O=u.a.section(E()),j=t(6),v=t(36),w=t(11);function _(){var e=Object(c.a)(["\n    padding: 18px 60px;\n    background-color: ",";\n    color: ",";\n    border: 1px "," solid;\n    display: inline-block;\n    font-size:20px;\n    text-decoration: none;\n    :hover{\n        cursor:pointer;\n    }\n    :active{\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);\n    }\n"]);return _=function(){return e},e}var y=u.a.button(_(),(function(e){return e.disabled?"#a3a3a3":e.primary?"#2E753E":e.secondary?"#FD759C":"white"}),(function(e){return e.disabled?"black":e.primary||e.secondary?"white":"#2E753E"}),(function(e){return e.disabled?"black":e.secondary?"#FD759C":"#2E753E"}));function x(){var e=Object(c.a)(["\n    color: ",";\n    font-size: 30px;\n    font-weight: bold;\n\n"]);return x=function(){return e},e}var S=u.a.h1(x(),(function(e){return e.secondary?"#FD759C":"#2E753E"}));function I(){var e=Object(c.a)(["\n    \n    border:1px "," solid;\n    padding: 20px 40px;\n    font-size: 17px;\n    border-radius: 15px;\n    display: inline-block;\n    margin: 10px auto;\n    .date{\n        color: '#4d4d4d';\n        font-style: italic;\n    }\n    .result_name{\n        font-weight:bold;\n    }\n    :hover{\n        background-color: ",";\n        color: white;\n        cursor: pointer;\n    }\n"]);return I=function(){return e},e}var k=Object(u.a)((function(e){console.log(e);var n=new Date(e.date).toLocaleTimeString("ru-RU",{month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});return o.a.createElement("div",null,o.a.createElement("div",{className:e.className},o.a.createElement("span",{className:"date"},n),o.a.createElement("br",null),o.a.createElement("span",{className:"result_name"},e.result_name)))}))(I(),(function(e){return e.primary?"#2E753E":"#FD759C"}),(function(e){return e.primary?"#2E753E":"#FD759C"})),C=k;function N(){var e=Object(c.a)(["\n    border: 1px "," solid;\n    background-color: ",";\n    color: ",";\n    font-size: 18px;\n    border-radius: 15px;\n    padding: 20px;\n    \n"]);return N=function(){return e},e}var q=u.a.p(N(),(function(e){return e.secondary?"#FD759C":"#2E753E"}),(function(e){return e.primary?"#2E753E":e.secondary&&e.bold?"#FD759C":"white"}),(function(e){return e.primary||e.secondary&&e.bold?"white":"#4d4d4d"}));function T(){var e=Object(c.a)(["\n    width: 150px;\n    display: inline-block;\n    \n"]);return T=function(){return e},e}var F=Object(u.a)((function(e){return o.a.createElement("div",null,o.a.createElement("img",Object.assign({className:e.className},e,{src:"/images/preloader.svg"})))}))(T()),D=function(e){var n=Object(r.useState)(!1),t=Object(s.a)(n,2),a=t[0],i=t[1],c=Object(r.useState)(!1),u=Object(s.a)(c,2),l=u[0],d=u[1],f=Object(r.useState)([]),h=Object(s.a)(f,2),m=h[0],p=h[1];a||(d(!0),console.log("fetching /api/history/results/"+e.user_id),fetch("/api/history/results/"+e.user_id).then((function(e){return e.json()})).then((function(n){return console.log("result"),console.log(n),n&&e.updateResultsHistory(n),i(!0),d(!1),p(n),n})).catch((function(e){return console.log(e)})),i(!0));var b=e.resultsHistory.length>0?m.map((function(e){return o.a.createElement(C,Object.assign({},e,{key:e.session_id}))})):o.a.createElement(q,null,"\u0412\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0443\u0441\u0442\u0430. \u0412\u044b \u0435\u0449\u0435 \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u0438 \u0442\u0435\u0441\u0442.");return o.a.createElement("div",null,l?o.a.createElement(F,null):b)};function U(){var e=Object(c.a)(["\n"]);return U=function(){return e},e}var P=Object(u.a)(D)(U()),A=t(35),H=[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;Object(A.a)(e);switch(n.type){case"UPDATE-RESULTS-HISTORY":return n.newState;default:return e}},z=Object(w.b)((function(e){return{user_id:e.userInfo.user_id,resultsHistory:e.resultsHistory}}),(function(e){return{updateResultsHistory:function(n){e(function(e){return{type:"UPDATE-RESULTS-HISTORY",newState:e}}(n))}}}))(P),J=t(10),Q=function(e){return o.a.createElement("div",null,o.a.createElement(y,{primary:!0,as:J.b,to:"/test/",onClick:function(){fetch("/api/session/start/"+e.user_id).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"),o.a.createElement(S,{secondary:!0},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"),o.a.createElement(z,{user_id:e.user_id}))},G={user_id:"1"},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:G,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-USER-INFO":return n.userInfo;default:return e}},W=function(e){return{type:"UPDATE-USER-INFO",userInfo:{user_id:e.user_id}}},B=Object(w.b)((function(e){return Object(v.a)({},e.userInfo)}),(function(e){return{updateUserInfo:function(n){e(W(n))}}}))(Q),Y=function(e){return o.a.createElement(q,{primary:!0},e.question_text)};function M(){var e=Object(c.a)(["\n    :hover{\n        cursor:pointer;\n    }\n    \n"]);return M=function(){return e},e}var $=function(e){var n=Object(r.useState)(!1),t=Object(s.a)(n,2),a=t[0],i=t[1];return Object(r.useEffect)((function(){i(e.chosen),console.log(e)}),[e.chosen]),o.a.createElement(q,{secondary:!0,bold:a,className:e.className,onClick:e.onClick},e.answer_text)},K=$=Object(u.a)($)(M());function V(){var e=Object(c.a)(["\n\n"]);return V=function(){return e},e}var X=function(e){var n=Object(r.useState)([]),t=Object(s.a)(n,2),a=t[0],i=t[1],c=Object(r.useState)(!0),u=Object(s.a)(c,2),l=u[0],d=u[1],f=Object(r.useState)(null),h=Object(s.a)(f,2),m=h[0],p=h[1];Object(r.useEffect)((function(){b(e.question_id)}),[e.question_id]),Object(r.useEffect)((function(){p(a?a.map((function(n){return o.a.createElement(K,{answer_id:n.answer_id,answer_text:n.answer_text,onClick:function(t){e.answerChoiceHandler(n.answer_id),console.log(n.answer_id)},chosen:n.answer_id===+e.chosenAnswerId})})):null)}),[a,e.chosenAnswerId]);var b=function(n){return console.log("props"),console.log(e),console.log("Fetching answers for question "+n),n?fetch("/api/answers/"+n).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e),i(e),d(!1),e})).catch((function(e){return console.log(e)})):[]};return o.a.createElement("div",null,l||e.isChosenFetching?o.a.createElement(F,null):m)},Z=X=Object(u.a)(X)(V());function ee(){var e=Object(c.a)(["\n    padding: 15px;\n    color: '#5e5e5e';\n    font-style:italic;\n    text-align: left;\n"]);return ee=function(){return e},e}var ne=function(e){return o.a.createElement("div",{className:e.className},e.currentPage,"/",e.totalPages)},te=ne=Object(u.a)(ne)(ee());function re(){var e=Object(c.a)(["\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: rgba(33, 33, 33, 0.81);    \n    .wrapper{\n        background-color: white;\n        border: 1px black solid;\n        width: 800px;\n        margin: 200px auto;\n        padding: 20px;\n        text-align: center;\n        \n        .yes{\n            border: none;\n        }\n    }\n"]);return re=function(){return e},e}var oe=function(e){var n=Object(j.f)();return o.a.createElement("div",{className:e.className},o.a.createElement("div",{className:"wrapper"},o.a.createElement("p",null," \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435?"),o.a.createElement(y,{secondary:!0,className:"no",onClick:function(){e.showFinishConfirmation(!1)}},"\u041d\u0435\u0442"),o.a.createElement(y,{primary:!0,className:"yes",onClick:function(){e.showFinishConfirmation(!1),fetch("/api/result/calculate/"+e.userId+"/"+e.sessionId).then((function(e){return e.json()})).then((function(t){console.log(t),console.log("Props of FinishConfirmWindow"),console.log(e),n.push("/result/"+e.sessionId)})).catch((function(e){return console.log(e)}))}},"\u0414\u0430")))},ae=oe=Object(u.a)(oe)(re()),ie=function(e){var n=Object(r.useState)(!1),t=Object(s.a)(n,2),a=(t[0],t[1],Object(r.useState)([])),i=Object(s.a)(a,2),c=i[0],u=i[1],l=Object(r.useState)(!1),d=Object(s.a)(l,2),f=d[0],h=d[1],m=Object(r.useState)(0),p=Object(s.a)(m,2),b=p[0],g=p[1],E=Object(r.useState)(null),O=Object(s.a)(E,2),j=O[0],v=O[1],w=Object(r.useState)(!1),_=Object(s.a)(w,2),x=_[0],S=_[1],I=Object(r.useState)(!1),k=Object(s.a)(I,2),C=k[0],N=k[1],q=function(e){console.log("client put body"),console.log(JSON.stringify(e)),fetch("/api/answer",{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e)}))},T=function(){e.showFinishConfirmation(!0)};Object(r.useEffect)((function(){e.setSessionId(e.session_id)}),[e.session_id]),Object(r.useEffect)((function(){S(0===b)}),[b]),Object(r.useEffect)((function(){h(!0),console.log("/api/session/"+e.user_id),fetch("/api/session/"+e.user_id).then((function(e){return e.json()})).then((function(n){return console.log(n),n&&e.updateSessionId(n.session_id),h(!1),n.session_id})).catch((function(e){return console.log(e)})),h(!0),console.log("Getting questions"),fetch("/api/questions").then((function(e){return console.log(e),e.json()})).then((function(n){return console.log("questions result"),console.log(n),n&&(e.updateQuestions(n),u(n)),h(!1),n})).catch((function(e){return console.log(e)}))}),[e]),Object(r.useEffect)((function(){c.length>0&&void 0!==b&&(console.log("Getting chosen answer"),console.log(c),console.log(b),function(n){if(N(!0),console.log("Trying to fetch chosen answers. Session id :"+e.sessionId+", chosen answer id: "+j+"question id: "+n),+e.sessionId&&!j)console.log("Fetching chosen answer"),fetch("/api/history/answers/"+e.sessionId+"/"+n).then((function(e){return e.json()})).then((function(e){return console.log("Got the chosen answer from history"),console.log(e),e.length>0&&v(e[0].answer_id),N(!1),e})).catch((function(e){console.log("Couldn't get the chosen answer from the server"),console.log(e)}))}(c[b].question_id))}),[e.sessionId,b,c]);var D=c.map((function(n){return o.a.createElement(Y,{primary:!0,session_id:e.session_id,question_id:n.question_id,question_text:n.question_text,questions_picture:n.question_picture})}));return o.a.createElement("div",null,f?o.a.createElement(F,null):o.a.createElement("div",null,o.a.createElement(te,{currentPage:b+1,totalPages:c.length}),D[b]),o.a.createElement(Z,{question_id:c.length>0?c[b].question_id:"",answerChoiceHandler:function(e){v(e)},chosenAnswerId:j,isChosenFetching:C}),f?null:o.a.createElement("div",null,o.a.createElement(y,{onClick:function(){c&&b>0&&(j&&q({session_id:e.session_id,answer_id:j,question_id:c[b].question_id}),g(b-1),v(null))},disabled:x},"\u041d\u0430\u0437\u0430\u0434"),o.a.createElement(y,{primary:b===c.length-1,onClick:function(){c&&(j&&q({session_id:e.session_id,answer_id:j,question_id:c[b].question_id}),b<c.length-1?(g(b+1),v(null)):T())}},b===c.length-1?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442":"\u0412\u043f\u0435\u0440\u0435\u0434")))},se={session_id:null},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-SESSION-ID":return{session_id:n.session_id};default:return e}},ue=function(e){return{type:"UPDATE-SESSION-ID",session_id:e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-QUESTIONS":return n.questions;default:return e}},de=function(e){return{type:"UPDATE-QUESTIONS",questions:e}},fe=Object(w.b)((function(e){return{session_id:e.sessionInfo.session_id,user_id:e.userInfo.user_id}}),(function(e){return{updateSessionId:function(n){e(ue(n))},updateQuestions:function(n){e(de(n))}}}))(ie);function he(){var e=Object(c.a)(["\n    width:100%;\n"]);return he=function(){return e},e}Object(u.a)((function(e){return o.a.createElement("img",{className:e.className,src:"/images/Tempermeter_loader.svg"})}))(he());function me(){var e=Object(c.a)(["\n\n"]);return me=function(){return e},e}var pe=function(e){var n=Object(r.useState)(!1),t=Object(s.a)(n,2),a=t[0];t[1];return o.a.createElement("div",null,a?o.a.createElement(F,null):o.a.createElement("div",null,o.a.createElement(q,null,"Some result")))},be=pe=Object(u.a)(pe)(me()),ge=t(16),Ee=Object(ge.b)({resultsHistory:R,userInfo:L,sessionInfo:ce,questions:le}),Oe=Object(ge.c)(Ee);var je=function(e){var n=Object(r.useState)(!1),t=Object(s.a)(n,2),a=t[0],i=t[1],c=Object(r.useState)(null),u=Object(s.a)(c,2),l=u[0],f=u[1];return o.a.createElement("div",null,a?o.a.createElement(ae,{showFinishConfirmation:i,sessionId:l,userId:Oe.getState().userInfo.user_id}):null,o.a.createElement(d,null,o.a.createElement(h,{src:"images/Tempermeter-logo.svg",alt:"Tempermeter logo"}),o.a.createElement(b,{icon:g.a})),o.a.createElement(O,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{path:"/home",render:function(){return o.a.createElement(B,null)}}),o.a.createElement(j.a,{path:"/test/",render:function(){return o.a.createElement(fe,{showFinishConfirmation:i,setSessionId:f,sessionId:l})}}),o.a.createElement(j.a,{path:"/result/:session_id",render:function(e){return o.a.createElement(be,{sessionId:e.match.params.session_id})}}),o.a.createElement(j.a,{render:function(){return o.a.createElement("div",null,"The page isn't found")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(J.a,null,o.a.createElement(w.a,{store:Oe},o.a.createElement(je,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.5e2ebd33.chunk.js.map