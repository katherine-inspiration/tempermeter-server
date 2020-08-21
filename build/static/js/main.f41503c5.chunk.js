(this.webpackJsonptempermeter=this.webpackJsonptempermeter||[]).push([[0],{37:function(e,n,t){e.exports=t(51)},42:function(e,n,t){},43:function(e,n,t){},51:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(18),a=t.n(c),i=(t(42),t(5)),s=(t(43),t(1)),u=t(2);function l(){var e=Object(s.a)(["\n    background-color: white;\n    padding: 0px;\n    width: 100%;\n    display:block;\n    height: 100px;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n"]);return l=function(){return e},e}var f=u.a.header(l());function d(){var e=Object(s.a)(["\n    width: 150px;\n    height: 150px;\n    position:absolute;\n    top: -30px;\n    left: 20px;\n"]);return d=function(){return e},e}var h=u.a.img(d()),m=t(32);function b(){var e=Object(s.a)(["\n    font-size: 30px;\n    color: ",";\n    position: absolute;\n    top: 30px;\n    right: 40px;\n    \n    :hover{\n        cursor: pointer;\n    }\n"]);return b=function(){return e},e}var p=Object(u.a)(m.a)(b(),(function(e){return e.secondary?"#FD759C":"#2E753E"})),g=t(34);function E(){var e=Object(s.a)(["\n    width: 1000px;\n    margin: 20px auto;\n    background-color: white;\n    padding: 20px;\n    display: block;\n    text-align: center;\n    border: 1px pink solid;\n"]);return E=function(){return e},e}var O=u.a.section(E()),j=t(6),v=t(36),w=t(11);function _(){var e=Object(s.a)(["\n    padding: 18px 60px;\n    background-color: ",";\n    color: ",";\n    border: 1px "," solid;\n    display: inline-block;\n    font-size:20px;\n    text-decoration: none;\n    :hover{\n        cursor:pointer;\n    }\n    :active{\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);\n    }\n"]);return _=function(){return e},e}var y=u.a.button(_(),(function(e){return e.disabled?"#a3a3a3":e.primary?"#2E753E":e.secondary?"#FD759C":"white"}),(function(e){return e.disabled?"black":e.primary||e.secondary?"white":"#2E753E"}),(function(e){return e.disabled?"black":e.secondary?"#FD759C":"#2E753E"}));function x(){var e=Object(s.a)(["\n    color: ",";\n    font-size: 30px;\n    font-weight: bold;\n\n"]);return x=function(){return e},e}var S=u.a.h1(x(),(function(e){return e.secondary?"#FD759C":"#2E753E"}));function I(){var e=Object(s.a)(["\n    \n    border:1px "," solid;\n    padding: 20px 40px;\n    font-size: 17px;\n    border-radius: 15px;\n    display: inline-block;\n    margin: 10px auto;\n    .date{\n        color: '#4d4d4d';\n        font-style: italic;\n    }\n    .result_name{\n        font-weight:bold;\n    }\n    :hover{\n        background-color: ",";\n        color: white;\n        cursor: pointer;\n    }\n"]);return I=function(){return e},e}var k=Object(u.a)((function(e){var n=Object(r.useState)(""),t=Object(i.a)(n,2),c=t[0],a=t[1];Object(r.useEffect)((function(){console.log("Props from Results History Item"),console.log(e);var n="";if(e.result.length>0){n+=e.result[0];for(var t=1;t<e.result.length;t++)n+=" + "+e.result[t]}a(n)}),[e]);var s=new Date(e.date).toLocaleTimeString("ru-RU",{month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});return o.a.createElement("div",{onClick:e.onClick},o.a.createElement("div",{className:e.className},o.a.createElement("span",{className:"date"},s),o.a.createElement("br",null),o.a.createElement("span",{className:"result_name"},c)))}))(I(),(function(e){return e.primary?"#2E753E":"#FD759C"}),(function(e){return e.primary?"#2E753E":"#FD759C"})),C=k;function N(){var e=Object(s.a)(["\n    border: 1px "," solid;\n    background-color: ",";\n    color: ",";\n    font-size: 18px;\n    border-radius: 15px;\n    padding: 20px;\n    text-align: ",";\n"]);return N=function(){return e},e}var q=u.a.p(N(),(function(e){return e.secondary?"#FD759C":"#2E753E"}),(function(e){return e.primary?"#2E753E":e.secondary&&e.bold?"#FD759C":"white"}),(function(e){return e.primary||e.secondary&&e.bold?"white":"#4d4d4d"}),(function(e){return"left"===e.align?"left":"right"===e.align?"right":"center"}));function T(){var e=Object(s.a)(["\n    width: 150px;\n    display: inline-block;\n    \n"]);return T=function(){return e},e}var D=Object(u.a)((function(e){return o.a.createElement("div",null,o.a.createElement("img",Object.assign({className:e.className},e,{src:"/images/preloader.svg"})))}))(T()),F=function(e){var n=Object(r.useState)(!1),t=Object(i.a)(n,2),c=t[0],a=t[1],s=Object(r.useState)([]),u=Object(i.a)(s,2),l=u[0],f=u[1],d=Object(r.useState)([]),h=Object(i.a)(d,2),m=h[0],b=h[1],p=Object(r.useState)(!1),g=Object(i.a)(p,2),E=g[0],O=g[1],v=Object(j.f)();return Object(r.useEffect)((function(){f(e.resultsHistory)}),[e.resultsHistory]),Object(r.useEffect)((function(){!function(){if(!E)a(!0),console.log("fetching /api/sessions/"+e.user_id),fetch("/api/sessions/"+e.user_id).then((function(e){return e.json()})).then((function(n){return n&&e.updateResultsHistory(n),console.log(n),a(!1),n})).catch((function(e){return console.log(e)}))}()}),[E]),Object(r.useEffect)((function(){console.log("Getting history items"),console.log(l),l.length>0?(b(l.map((function(e){return o.a.createElement(C,Object.assign({},e,{key:e.session_id,onClick:function(){v.push("/result/"+e.session_id)}}))}))),O(!0),console.log(m)):b(o.a.createElement(q,null,"\u0412\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0443\u0441\u0442\u0430. \u0412\u044b \u0435\u0449\u0435 \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u0438 \u0442\u0435\u0441\u0442."))}),[l,e.resultsHistory]),o.a.createElement("div",null,c?o.a.createElement(D,null):m)};function U(){var e=Object(s.a)(["\n"]);return U=function(){return e},e}var A=Object(u.a)(F)(U()),P=t(35),H=[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;Object(P.a)(e);switch(n.type){case"UPDATE-RESULTS-HISTORY":return n.newState;default:return e}},z=Object(w.b)((function(e){return{user_id:e.userInfo.user_id,resultsHistory:e.resultsHistory}}),(function(e){return{updateResultsHistory:function(n){e(function(e){return{type:"UPDATE-RESULTS-HISTORY",newState:e}}(n))}}}))(A),G=t(10),L=function(e){return o.a.createElement("div",null,o.a.createElement(y,{primary:!0,as:G.b,to:"/test/",onClick:function(){fetch("/api/session/start/"+e.user_id).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"),o.a.createElement(S,{secondary:!0},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"),o.a.createElement(z,{user_id:e.user_id}))},J={user_id:"1"},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-USER-INFO":return n.userInfo;default:return e}},B=function(e){return{type:"UPDATE-USER-INFO",userInfo:{user_id:e.user_id}}},W=Object(w.b)((function(e){return Object(v.a)({},e.userInfo)}),(function(e){return{updateUserInfo:function(n){e(B(n))}}}))(L),Y=function(e){return o.a.createElement(q,{primary:!0},e.question_text)};function K(){var e=Object(s.a)(["\n    :hover{\n        cursor:pointer;\n    }\n    \n"]);return K=function(){return e},e}var M=function(e){var n=Object(r.useState)(!1),t=Object(i.a)(n,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){a(e.chosen),console.log(e)}),[e.chosen]),o.a.createElement(q,{secondary:!0,bold:c,className:e.className,onClick:e.onClick},e.answer_text)},V=M=Object(u.a)(M)(K());function $(){var e=Object(s.a)(["\n\n"]);return $=function(){return e},e}var X=function(e){var n=Object(r.useState)([]),t=Object(i.a)(n,2),c=t[0],a=t[1],s=Object(r.useState)(!0),u=Object(i.a)(s,2),l=u[0],f=u[1],d=Object(r.useState)(null),h=Object(i.a)(d,2),m=h[0],b=h[1];Object(r.useEffect)((function(){p(e.question_id)}),[e.question_id]),Object(r.useEffect)((function(){b(c?c.map((function(n){return o.a.createElement(V,{answer_id:n.answer_id,answer_text:n.answer_text,onClick:function(t){e.answerChoiceHandler(n.answer_id),console.log(n.answer_id)},chosen:n.answer_id===+e.chosenAnswerId})})):null)}),[c,e.chosenAnswerId]);var p=function(n){return console.log("props"),console.log(e),console.log("Fetching answers for question "+n),n?fetch("/api/answers/"+n).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e),a(e),f(!1),e})).catch((function(e){return console.log(e)})):[]};return o.a.createElement("div",null,l||e.isChosenFetching?o.a.createElement(D,null):m)},Z=X=Object(u.a)(X)($());function ee(){var e=Object(s.a)(["\n    padding: 15px;\n    color: '#5e5e5e';\n    font-style:italic;\n    text-align: left;\n"]);return ee=function(){return e},e}var ne=function(e){return o.a.createElement("div",{className:e.className},e.currentPage,"/",e.totalPages)},te=ne=Object(u.a)(ne)(ee());function re(){var e=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: rgba(33, 33, 33, 0.81);    \n    .wrapper{\n        background-color: white;\n        border: 1px black solid;\n        width: 800px;\n        margin: 200px auto;\n        padding: 20px;\n        text-align: center;\n        \n        .yes{\n            border: none;\n        }\n    }\n"]);return re=function(){return e},e}var oe=function(e){var n=Object(j.f)();return o.a.createElement("div",{className:e.className},o.a.createElement("div",{className:"wrapper"},o.a.createElement("p",null," \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435?"),o.a.createElement(y,{secondary:!0,className:"no",onClick:function(){e.showFinishConfirmation(!1)}},"\u041d\u0435\u0442"),o.a.createElement(y,{primary:!0,className:"yes",onClick:function(){e.showFinishConfirmation(!1),fetch("/api/result/calculate/"+e.userId+"/"+e.sessionId).then((function(e){return e.json()})).then((function(t){console.log(t),n.push("/result/"+e.sessionId)})).catch((function(e){return console.log(e)}))}},"\u0414\u0430")))},ce=oe=Object(u.a)(oe)(re()),ae=function(e){var n=Object(r.useState)(!1),t=Object(i.a)(n,2),c=(t[0],t[1],Object(r.useState)([])),a=Object(i.a)(c,2),s=a[0],u=a[1],l=Object(r.useState)(!1),f=Object(i.a)(l,2),d=f[0],h=f[1],m=Object(r.useState)(0),b=Object(i.a)(m,2),p=b[0],g=b[1],E=Object(r.useState)(null),O=Object(i.a)(E,2),j=O[0],v=O[1],w=Object(r.useState)(!1),_=Object(i.a)(w,2),x=_[0],S=_[1],I=Object(r.useState)(!1),k=Object(i.a)(I,2),C=k[0],N=k[1],q=function(e){console.log("client put body"),console.log(JSON.stringify(e)),fetch("/api/answer",{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e)}))},T=function(){e.showFinishConfirmation(!0)};Object(r.useEffect)((function(){e.setSessionId(e.session_id)}),[e.session_id]),Object(r.useEffect)((function(){S(0===p)}),[p]),Object(r.useEffect)((function(){h(!0),console.log("/api/session/"+e.user_id),fetch("/api/session/"+e.user_id).then((function(e){return e.json()})).then((function(n){return console.log(n),n&&e.updateSessionId(n.session_id),h(!1),n.session_id})).catch((function(e){return console.log(e)})),h(!0),console.log("Getting questions"),fetch("/api/questions").then((function(e){return console.log(e),e.json()})).then((function(n){return console.log("questions result"),console.log(n),n&&(e.updateQuestions(n),u(n)),h(!1),n})).catch((function(e){return console.log(e)}))}),[e]),Object(r.useEffect)((function(){s.length>0&&void 0!==p&&(console.log("Getting chosen answer"),console.log(s),console.log(p),function(n){if(N(!0),console.log("Trying to fetch chosen answers. Session id :"+e.sessionId+", chosen answer id: "+j+"question id: "+n),+e.sessionId&&!j)console.log("Fetching chosen answer"),fetch("/api/history/answers/"+e.sessionId+"/"+n).then((function(e){return e.json()})).then((function(e){return console.log("Got the chosen answer from history"),console.log(e),e.length>0&&v(e[0].answer_id),N(!1),e})).catch((function(e){console.log("Couldn't get the chosen answer from the server"),console.log(e)}))}(s[p].question_id))}),[e.sessionId,p,s]);var F=s.map((function(n){return o.a.createElement(Y,{primary:!0,session_id:e.session_id,question_id:n.question_id,question_text:n.question_text,questions_picture:n.question_picture})}));return o.a.createElement("div",null,d?o.a.createElement(D,null):o.a.createElement("div",null,o.a.createElement(te,{currentPage:p+1,totalPages:s.length}),F[p]),o.a.createElement(Z,{question_id:s.length>0?s[p].question_id:"",answerChoiceHandler:function(e){v(e)},chosenAnswerId:j,isChosenFetching:C}),d?null:o.a.createElement("div",null,o.a.createElement(y,{onClick:function(){s&&p>0&&(j&&q({session_id:e.session_id,answer_id:j,question_id:s[p].question_id}),g(p-1),v(null))},disabled:x},"\u041d\u0430\u0437\u0430\u0434"),o.a.createElement(y,{primary:p===s.length-1,onClick:function(){s&&(j&&q({session_id:e.session_id,answer_id:j,question_id:s[p].question_id}),p<s.length-1?(g(p+1),v(null)):T())}},p===s.length-1?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442":"\u0412\u043f\u0435\u0440\u0435\u0434")))},ie={session_id:null},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-SESSION-ID":return{session_id:n.session_id};default:return e}},ue=function(e){return{type:"UPDATE-SESSION-ID",session_id:e}},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-QUESTIONS":return n.questions;default:return e}},fe=function(e){return{type:"UPDATE-QUESTIONS",questions:e}},de=Object(w.b)((function(e){return{session_id:e.sessionInfo.session_id,user_id:e.userInfo.user_id}}),(function(e){return{updateSessionId:function(n){e(ue(n))},updateQuestions:function(n){e(fe(n))}}}))(ae);function he(){var e=Object(s.a)(["\n    width: 100%;\n"]);return he=function(){return e},e}var me=Object(u.a)(y)(he());function be(){var e=Object(s.a)(["\n    width: 600px;\n"]);return be=function(){return e},e}var pe=u.a.img(be());function ge(){var e=Object(s.a)(["\n\n"]);return ge=function(){return e},e}var Ee=function(e){var n=Object(r.useState)(!0),t=Object(i.a)(n,2),c=t[0],a=t[1],s=Object(r.useState)([]),u=Object(i.a)(s,2),l=u[0],f=u[1],d=Object(r.useState)(null),h=Object(i.a)(d,2),m=h[0],b=h[1],p=Object(j.f)();return Object(r.useEffect)((function(){a(!0),console.log(e.sessionId),fetch("/api/result/"+e.sessionId).then((function(e){var n=e.json();return console.log(n),n})).then((function(e){return console.log("Got Result Data"),console.log(e),f(e),a(!1),e})).then((function(e){if(e)return b(e.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("b",null,e.name)),o.a.createElement(pe,{src:e.picture}),o.a.createElement(q,{align:"left"},e.text))}))),a(!1),e})).catch((function(e){console.log("Couldn't fetch the result data"),console.log(e)}))}),[e]),o.a.createElement("div",null,o.a.createElement(me,{primary:!0,onClick:function(){return p.push("/")}},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),c?o.a.createElement(D,null):o.a.createElement("div",null,o.a.createElement(q,null,"` \u0412\u044b - ",function(e){var n="";if(e){n+=e[0].name;for(var t=1;t<e.length;t++)n+=" + "+e[t].name}return n}(l),o.a.createElement("br",null),m)))},Oe=Ee=Object(u.a)(Ee)(ge()),je=t(16),ve=Object(je.b)({resultsHistory:R,userInfo:Q,sessionInfo:se,questions:le}),we=Object(je.c)(ve);function _e(){var e=Object(s.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: rgba(33, 33, 33, 0.81);\n    position: fixed;\n    .info{\n        padding: 30px;\n        margin: 110px auto;\n        width: 800px;\n    }\n    \n"]);return _e=function(){return e},e}var ye=function(e){return o.a.createElement("div",e,o.a.createElement(q,{className:"info"},"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u043e, \u0447\u0442\u043e \u0432\u0441\u0435 \u043b\u044e\u0434\u0438 \u043f\u043e \u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u044e\u0442 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0438 \u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u044e\u0442 \u0440\u0430\u0437\u043d\u044b\u0435 \u044d\u043c\u043e\u0446\u0438\u0438 \u043f\u0440\u0438 \u043e\u0434\u043d\u0438\u0445 \u0438 \u0442\u0435\u0445 \u0436\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445.",o.a.createElement("br",null),"\u0412 \u043d\u0430\u0448\u0438\u0445 \u0433\u0435\u043d\u0430\u0445 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438. \u0412 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435, \u0442\u0430\u043c \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u0440\u0432\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",o.a.createElement("br",null),"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u043d\u0435\u0440\u0432\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043f\u0440\u0438\u0441\u0443\u0449\u0438\u0445 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443, \u043c\u043e\u0436\u043d\u043e \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u0438\u043c \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u043c\u0435\u043d\u0442\u043e\u043c \u043e\u043d \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442.",o.a.createElement("br",null),o.a.createElement("br",null),"\u0414\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u043b\u0438\u0447\u043d\u044b\u0439 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u043c\u0435\u043d\u0442.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("i",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043f\u043e \u043a\u0443\u0440\u0441\u0443 \u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u041a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c.",o.a.createElement("br",null),"\u041c\u0430\u0442\u043c\u0435\u0445, \u0421\u041f\u0431\u0413\u0423, 2020 \u0433\u043e\u0434."),o.a.createElement("br",null),o.a.createElement("br",null),"\u041f\u043e \u0432\u0441\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 ",o.a.createElement("b",null,"\u043f\u043e\u0447\u0442\u0443")," katherine.inspiration@gmail.com"))},xe=ye=Object(u.a)(ye)(_e());var Se=function(e){var n=Object(r.useState)(!1),t=Object(i.a)(n,2),c=t[0],a=t[1],s=Object(r.useState)(null),u=Object(i.a)(s,2),l=u[0],d=u[1],m=Object(r.useState)(!1),b=Object(i.a)(m,2),E=b[0],v=b[1],w=Object(r.useState)(null),_=Object(i.a)(w,2),y=(_[0],_[1],Object(j.f)());return Object(r.useEffect)((function(){if(!y.location.pathname.find((function(e){return"#"===e}))){window.open("https://connect.ok.ru/oauth/authorize?client_id=512000565248&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN&response_type=token&redirect_uri=https://tempermeter-server.herokuapp.com","_self","width=800,height=600")}}),[y.location.pathname]),Object(r.useEffect)((function(){var e=y.location.pathname,n=e.findIndex((function(e){return"#"===e}));console.log(e.slice(n+1,e.length))}),[y.location.pathname]),o.a.createElement("div",{onClick:function(){E&&v(!1)}},c?o.a.createElement(ce,{showFinishConfirmation:a,sessionId:l,userId:we.getState().userInfo.user_id}):null,E?o.a.createElement(xe,null):null,o.a.createElement(f,null,o.a.createElement(h,{src:"images/Tempermeter-logo.svg",alt:"Tempermeter logo"}),o.a.createElement(p,{icon:g.a,onClick:function(){v(!0)}})),o.a.createElement(O,null,o.a.createElement(j.c,null,o.a.createElement(j.a,{exact:!0,path:"/",render:function(){return o.a.createElement(W,null)}}),o.a.createElement(j.a,{exact:!0,path:"/test/",render:function(){return o.a.createElement(de,{showFinishConfirmation:a,setSessionId:d,sessionId:l})}}),o.a.createElement(j.a,{exact:!0,path:"/result/:session_id",render:function(e){return o.a.createElement(Oe,{sessionId:e.match.params.session_id})}}),o.a.createElement(j.a,{render:function(){return o.a.createElement("div",null,"The page isn't found")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(G.a,null,o.a.createElement(w.a,{store:we},o.a.createElement(Se,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[37,1,2]]]);
//# sourceMappingURL=main.f41503c5.chunk.js.map