(this.webpackJsonptempermeter=this.webpackJsonptempermeter||[]).push([[0],{38:function(e,n,t){e.exports=t(52)},43:function(e,n,t){},44:function(e,n,t){},52:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),c=t(19),a=t.n(c),i=(t(43),t(20)),s=t(14),u=t(5),l=(t(44),t(1)),f=t(2);function d(){var e=Object(l.a)(["\n    background-color: white;\n    padding: 0px;\n    width: 100%;\n    display:block;\n    height: 100px;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n"]);return d=function(){return e},e}var h=f.a.header(d());function b(){var e=Object(l.a)(["\n    width: 150px;\n    height: 150px;\n    position:absolute;\n    top: -30px;\n    left: 20px;\n"]);return b=function(){return e},e}var m=f.a.img(b()),p=t(34);function g(){var e=Object(l.a)(["\n    font-size: 30px;\n    color: ",";\n    position: absolute;\n    top: 30px;\n    right: 40px;\n    \n    :hover{\n        cursor: pointer;\n    }\n"]);return g=function(){return e},e}var E=Object(f.a)(p.a)(g(),(function(e){return e.secondary?"#FD759C":"#2E753E"})),O=t(36);function j(){var e=Object(l.a)(["\n    width: 1000px;\n    margin: 20px auto;\n    background-color: white;\n    padding: 20px;\n    display: block;\n    text-align: center;\n    border: 1px pink solid;\n"]);return j=function(){return e},e}var v=f.a.section(j()),w=t(6),y=t(11);function _(){var e=Object(l.a)(["\n    padding: 18px 60px;\n    background-color: ",";\n    color: ",";\n    border: 1px "," solid;\n    display: inline-block;\n    font-size:20px;\n    text-decoration: none;\n    :hover{\n        cursor:pointer;\n    }\n    :active{\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);\n    }\n"]);return _=function(){return e},e}var x=f.a.button(_(),(function(e){return e.disabled?"#a3a3a3":e.primary?"#2E753E":e.secondary?"#FD759C":"white"}),(function(e){return e.disabled?"black":e.primary||e.secondary?"white":"#2E753E"}),(function(e){return e.disabled?"black":e.secondary?"#FD759C":"#2E753E"}));function S(){var e=Object(l.a)(["\n    color: ",";\n    font-size: 30px;\n    font-weight: bold;\n\n"]);return S=function(){return e},e}var I=f.a.h1(S(),(function(e){return e.secondary?"#FD759C":"#2E753E"}));function k(){var e=Object(l.a)(["\n    \n    border:1px "," solid;\n    padding: 20px 40px;\n    font-size: 17px;\n    border-radius: 15px;\n    display: inline-block;\n    margin: 10px auto;\n    .date{\n        color: '#4d4d4d';\n        font-style: italic;\n    }\n    .result_name{\n        font-weight:bold;\n    }\n    :hover{\n        background-color: ",";\n        color: white;\n        cursor: pointer;\n    }\n"]);return k=function(){return e},e}var C=Object(f.a)((function(e){var n=Object(r.useState)(""),t=Object(u.a)(n,2),c=t[0],a=t[1];Object(r.useEffect)((function(){console.log("Props from Results History Item"),console.log(e);var n="";if(e.result.length>0){n+=e.result[0];for(var t=1;t<e.result.length;t++)n+=" + "+e.result[t]}a(n)}),[e]);var i=new Date(e.date).toLocaleTimeString("ru-RU",{month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});return o.a.createElement("div",{onClick:e.onClick},o.a.createElement("div",{className:e.className},o.a.createElement("span",{className:"date"},i),o.a.createElement("br",null),o.a.createElement("span",{className:"result_name"},c)))}))(k(),(function(e){return e.primary?"#2E753E":"#FD759C"}),(function(e){return e.primary?"#2E753E":"#FD759C"})),N=C;function q(){var e=Object(l.a)(["\n    border: 1px "," solid;\n    background-color: ",";\n    color: ",";\n    font-size: 18px;\n    border-radius: 15px;\n    padding: 20px;\n    text-align: ",";\n"]);return q=function(){return e},e}var T=f.a.p(q(),(function(e){return e.secondary?"#FD759C":"#2E753E"}),(function(e){return e.primary?"#2E753E":e.secondary&&e.bold?"#FD759C":"white"}),(function(e){return e.primary||e.secondary&&e.bold?"white":"#4d4d4d"}),(function(e){return"left"===e.align?"left":"right"===e.align?"right":"center"}));function D(){var e=Object(l.a)(["\n    width: 150px;\n    display: inline-block;\n    \n"]);return D=function(){return e},e}var F=Object(f.a)((function(e){return o.a.createElement("div",null,o.a.createElement("img",Object.assign({className:e.className},e,{src:"/images/preloader.svg"})))}))(D()),U=function(e){var n=Object(r.useState)(!1),t=Object(u.a)(n,2),c=t[0],a=t[1],i=Object(r.useState)([]),s=Object(u.a)(i,2),l=s[0],f=s[1],d=Object(r.useState)([]),h=Object(u.a)(d,2),b=h[0],m=h[1],p=Object(r.useState)(!1),g=Object(u.a)(p,2),E=g[0],O=g[1],j=Object(w.f)();return Object(r.useEffect)((function(){f(e.resultsHistory)}),[e.resultsHistory]),Object(r.useEffect)((function(){!function(){if(!E)a(!0),console.log("fetching /api/sessions/"+e.user_id),fetch("/api/sessions/"+e.user_id).then((function(e){return e.json()})).then((function(n){return n&&e.updateResultsHistory(n),console.log(n),a(!1),n})).catch((function(e){return console.log(e)}))}()}),[E]),Object(r.useEffect)((function(){console.log("Getting history items"),console.log(l),l.length>0?(m(l.map((function(e){return o.a.createElement(N,Object.assign({},e,{key:e.session_id,onClick:function(){j.push("/result/"+e.session_id)}}))}))),O(!0),console.log(b)):m(o.a.createElement(T,null,"\u0412\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0443\u0441\u0442\u0430. \u0412\u044b \u0435\u0449\u0435 \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u0438 \u0442\u0435\u0441\u0442."))}),[l,e.resultsHistory]),o.a.createElement("div",null,c?o.a.createElement(F,null):b)};function A(){var e=Object(l.a)(["\n"]);return A=function(){return e},e}var P=Object(f.a)(U)(A()),H=t(37),R=[],z=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,n=arguments.length>1?arguments[1]:void 0;Object(H.a)(e);switch(n.type){case"UPDATE-RESULTS-HISTORY":return n.newState;default:return e}},G=Object(y.b)((function(e){return{user_id:e.userInfo.user_id,resultsHistory:e.resultsHistory}}),(function(e){return{updateResultsHistory:function(n){e(function(e){return{type:"UPDATE-RESULTS-HISTORY",newState:e}}(n))}}}))(P),L=t(10),J=function(e){return Object(r.useEffect)((function(){console.log("Search params"),console.log(e.history.location.search)}),[e]),o.a.createElement("div",null,o.a.createElement(x,{primary:!0,as:L.b,to:"/test/",onClick:function(){fetch("/api/session/start/"+e.user_id).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"),o.a.createElement(I,{secondary:!0},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"),o.a.createElement(G,{user_id:e.user_id}))},Q={user_id:"1"},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Q,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-USER-INFO":return n.userInfo;default:return e}},W=function(e){return{type:"UPDATE-USER-INFO",userInfo:{user_id:e.user_id}}},Y=Object(y.b)((function(e,n){return Object(s.a)(Object(s.a)({},e.userInfo),{},{history:n.history})}),(function(e){return{updateUserInfo:function(n){e(W(n))}}}))(J),K=function(e){return o.a.createElement(T,{primary:!0},e.question_text)};function M(){var e=Object(l.a)(["\n    :hover{\n        cursor:pointer;\n    }\n    \n"]);return M=function(){return e},e}var V=function(e){var n=Object(r.useState)(!1),t=Object(u.a)(n,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){a(e.chosen),console.log(e)}),[e.chosen]),o.a.createElement(T,{secondary:!0,bold:c,className:e.className,onClick:e.onClick},e.answer_text)},$=V=Object(f.a)(V)(M());function X(){var e=Object(l.a)(["\n\n"]);return X=function(){return e},e}var Z=function(e){var n=Object(r.useState)([]),t=Object(u.a)(n,2),c=t[0],a=t[1],i=Object(r.useState)(!0),s=Object(u.a)(i,2),l=s[0],f=s[1],d=Object(r.useState)(null),h=Object(u.a)(d,2),b=h[0],m=h[1];Object(r.useEffect)((function(){p(e.question_id)}),[e.question_id]),Object(r.useEffect)((function(){m(c?c.map((function(n){return o.a.createElement($,{answer_id:n.answer_id,answer_text:n.answer_text,onClick:function(t){e.answerChoiceHandler(n.answer_id),console.log(n.answer_id)},chosen:n.answer_id===+e.chosenAnswerId})})):null)}),[c,e.chosenAnswerId]);var p=function(n){return console.log("props"),console.log(e),console.log("Fetching answers for question "+n),n?fetch("/api/answers/"+n).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e),a(e),f(!1),e})).catch((function(e){return console.log(e)})):[]};return o.a.createElement("div",null,l||e.isChosenFetching?o.a.createElement(F,null):b)},ee=Z=Object(f.a)(Z)(X());function ne(){var e=Object(l.a)(["\n    padding: 15px;\n    color: '#5e5e5e';\n    font-style:italic;\n    text-align: left;\n"]);return ne=function(){return e},e}var te=function(e){return o.a.createElement("div",{className:e.className},e.currentPage,"/",e.totalPages)},re=te=Object(f.a)(te)(ne());function oe(){var e=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: rgba(33, 33, 33, 0.81);    \n    .wrapper{\n        background-color: white;\n        border: 1px black solid;\n        width: 800px;\n        margin: 200px auto;\n        padding: 20px;\n        text-align: center;\n        \n        .yes{\n            border: none;\n        }\n    }\n"]);return oe=function(){return e},e}var ce=function(e){var n=Object(w.f)();return o.a.createElement("div",{className:e.className},o.a.createElement("div",{className:"wrapper"},o.a.createElement("p",null," \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435?"),o.a.createElement(x,{secondary:!0,className:"no",onClick:function(){e.showFinishConfirmation(!1)}},"\u041d\u0435\u0442"),o.a.createElement(x,{primary:!0,className:"yes",onClick:function(){e.showFinishConfirmation(!1),fetch("/api/result/calculate/"+e.userId+"/"+e.sessionId).then((function(e){return e.json()})).then((function(t){console.log(t),n.push("/result/"+e.sessionId)})).catch((function(e){return console.log(e)}))}},"\u0414\u0430")))},ae=ce=Object(f.a)(ce)(oe()),ie=function(e){var n=Object(r.useState)(!1),t=Object(u.a)(n,2),c=(t[0],t[1],Object(r.useState)([])),a=Object(u.a)(c,2),i=a[0],s=a[1],l=Object(r.useState)(!1),f=Object(u.a)(l,2),d=f[0],h=f[1],b=Object(r.useState)(0),m=Object(u.a)(b,2),p=m[0],g=m[1],E=Object(r.useState)(null),O=Object(u.a)(E,2),j=O[0],v=O[1],w=Object(r.useState)(!1),y=Object(u.a)(w,2),_=y[0],S=y[1],I=Object(r.useState)(!1),k=Object(u.a)(I,2),C=k[0],N=k[1],q=function(e){console.log("client put body"),console.log(JSON.stringify(e)),fetch("/api/answer",{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e)}))},T=function(){e.showFinishConfirmation(!0)};Object(r.useEffect)((function(){e.setSessionId(e.session_id)}),[e.session_id]),Object(r.useEffect)((function(){S(0===p)}),[p]),Object(r.useEffect)((function(){h(!0),console.log("/api/session/"+e.user_id),fetch("/api/session/"+e.user_id).then((function(e){return e.json()})).then((function(n){return console.log(n),n&&e.updateSessionId(n.session_id),h(!1),n.session_id})).catch((function(e){return console.log(e)})),h(!0),console.log("Getting questions"),fetch("/api/questions").then((function(e){return console.log(e),e.json()})).then((function(n){return console.log("questions result"),console.log(n),n&&(e.updateQuestions(n),s(n)),h(!1),n})).catch((function(e){return console.log(e)}))}),[e]),Object(r.useEffect)((function(){i.length>0&&void 0!==p&&(console.log("Getting chosen answer"),console.log(i),console.log(p),function(n){if(N(!0),console.log("Trying to fetch chosen answers. Session id :"+e.sessionId+", chosen answer id: "+j+"question id: "+n),+e.sessionId&&!j)console.log("Fetching chosen answer"),fetch("/api/history/answers/"+e.sessionId+"/"+n).then((function(e){return e.json()})).then((function(e){return console.log("Got the chosen answer from history"),console.log(e),e.length>0&&v(e[0].answer_id),N(!1),e})).catch((function(e){console.log("Couldn't get the chosen answer from the server"),console.log(e)}))}(i[p].question_id))}),[e.sessionId,p,i]);var D=i.map((function(n){return o.a.createElement(K,{primary:!0,session_id:e.session_id,question_id:n.question_id,question_text:n.question_text,questions_picture:n.question_picture})}));return o.a.createElement("div",null,d?o.a.createElement(F,null):o.a.createElement("div",null,o.a.createElement(re,{currentPage:p+1,totalPages:i.length}),D[p]),o.a.createElement(ee,{question_id:i.length>0?i[p].question_id:"",answerChoiceHandler:function(e){v(e)},chosenAnswerId:j,isChosenFetching:C}),d?null:o.a.createElement("div",null,o.a.createElement(x,{onClick:function(){i&&p>0&&(j&&q({session_id:e.session_id,answer_id:j,question_id:i[p].question_id}),g(p-1),v(null))},disabled:_},"\u041d\u0430\u0437\u0430\u0434"),o.a.createElement(x,{primary:p===i.length-1,onClick:function(){i&&(j&&q({session_id:e.session_id,answer_id:j,question_id:i[p].question_id}),p<i.length-1?(g(p+1),v(null)):T())}},p===i.length-1?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442":"\u0412\u043f\u0435\u0440\u0435\u0434")))},se={session_id:null},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-SESSION-ID":return{session_id:n.session_id};default:return e}},le=function(e){return{type:"UPDATE-SESSION-ID",session_id:e}},fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-QUESTIONS":return n.questions;default:return e}},de=function(e){return{type:"UPDATE-QUESTIONS",questions:e}},he=Object(y.b)((function(e){return{session_id:e.sessionInfo.session_id,user_id:e.userInfo.user_id}}),(function(e){return{updateSessionId:function(n){e(le(n))},updateQuestions:function(n){e(de(n))}}}))(ie);function be(){var e=Object(l.a)(["\n    width: 100%;\n"]);return be=function(){return e},e}var me=Object(f.a)(x)(be());function pe(){var e=Object(l.a)(["\n    width: 600px;\n"]);return pe=function(){return e},e}var ge=f.a.img(pe());function Ee(){var e=Object(l.a)(["\n\n"]);return Ee=function(){return e},e}var Oe=function(e){var n=Object(r.useState)(!0),t=Object(u.a)(n,2),c=t[0],a=t[1],i=Object(r.useState)([]),s=Object(u.a)(i,2),l=s[0],f=s[1],d=Object(r.useState)(null),h=Object(u.a)(d,2),b=h[0],m=h[1],p=Object(w.f)();return Object(r.useEffect)((function(){a(!0),console.log(e.sessionId),fetch("/api/result/"+e.sessionId).then((function(e){var n=e.json();return console.log(n),n})).then((function(e){return console.log("Got Result Data"),console.log(e),f(e),a(!1),e})).then((function(e){if(e)return m(e.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("b",null,e.name)),o.a.createElement(ge,{src:e.picture}),o.a.createElement(T,{align:"left"},e.text))}))),a(!1),e})).catch((function(e){console.log("Couldn't fetch the result data"),console.log(e)}))}),[e]),o.a.createElement("div",null,o.a.createElement(me,{primary:!0,onClick:function(){return p.push("/")}},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),c?o.a.createElement(F,null):o.a.createElement("div",null,o.a.createElement(T,null,"` \u0412\u044b - ",function(e){var n="";if(e){n+=e[0].name;for(var t=1;t<e.length;t++)n+=" + "+e[t].name}return n}(l),o.a.createElement("br",null),b)))},je=Oe=Object(f.a)(Oe)(Ee()),ve=t(17),we=Object(ve.b)({resultsHistory:z,userInfo:B,sessionInfo:ue,questions:fe}),ye=Object(ve.c)(we);function _e(){var e=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: rgba(33, 33, 33, 0.81);\n    position: fixed;\n    .info{\n        padding: 30px;\n        margin: 110px auto;\n        width: 800px;\n    }\n    \n"]);return _e=function(){return e},e}var xe=function(e){return o.a.createElement("div",e,o.a.createElement(T,{className:"info"},"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u043e, \u0447\u0442\u043e \u0432\u0441\u0435 \u043b\u044e\u0434\u0438 \u043f\u043e \u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u044e\u0442 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0438 \u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u044e\u0442 \u0440\u0430\u0437\u043d\u044b\u0435 \u044d\u043c\u043e\u0446\u0438\u0438 \u043f\u0440\u0438 \u043e\u0434\u043d\u0438\u0445 \u0438 \u0442\u0435\u0445 \u0436\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445.",o.a.createElement("br",null),"\u0412 \u043d\u0430\u0448\u0438\u0445 \u0433\u0435\u043d\u0430\u0445 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438. \u0412 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435, \u0442\u0430\u043c \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u0440\u0432\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",o.a.createElement("br",null),"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u043d\u0435\u0440\u0432\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043f\u0440\u0438\u0441\u0443\u0449\u0438\u0445 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443, \u043c\u043e\u0436\u043d\u043e \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u0438\u043c \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u043c\u0435\u043d\u0442\u043e\u043c \u043e\u043d \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442.",o.a.createElement("br",null),o.a.createElement("br",null),"\u0414\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u043b\u0438\u0447\u043d\u044b\u0439 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u043c\u0435\u043d\u0442.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("i",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043f\u043e \u043a\u0443\u0440\u0441\u0443 \u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u041a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c.",o.a.createElement("br",null),"\u041c\u0430\u0442\u043c\u0435\u0445, \u0421\u041f\u0431\u0413\u0423, 2020 \u0433\u043e\u0434."),o.a.createElement("br",null),o.a.createElement("br",null),"\u041f\u043e \u0432\u0441\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 ",o.a.createElement("b",null,"\u043f\u043e\u0447\u0442\u0443")," katherine.inspiration@gmail.com"))},Se=xe=Object(f.a)(xe)(_e()),Ie=function(e){return Object(r.useEffect)((function(){e.history.push("https://connect.ok.ru/oauth/authorize?client_id=512000565248&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN&response_type=token&redirect_uri=https://tempermeter-server.herokuapp.com")}),[e.history]),o.a.createElement("div",null)};var ke=function(e){var n=Object(r.useState)(!1),t=Object(u.a)(n,2),c=t[0],a=t[1],l=Object(r.useState)(null),f=Object(u.a)(l,2),d=f[0],b=f[1],p=Object(r.useState)(!1),g=Object(u.a)(p,2),j=g[0],y=g[1],_=Object(r.useState)(""),x=Object(u.a)(_,2),S=(x[0],x[1]),I=Object(r.useState)(null),k=Object(u.a)(I,2),C=(k[0],k[1],Object(w.f)());return Object(r.useEffect)((function(){var e=window.location.hash.substring(1);e=e.split("&").reduce((function(e,n){var t=n.split("=");return Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},t[0],t[1]))}),{}),console.log(e),S(e)}),[window.location]),o.a.createElement("div",{onClick:function(){j&&y(!1)}},c?o.a.createElement(ae,{showFinishConfirmation:a,sessionId:d,userId:ye.getState().userInfo.user_id}):null,j?o.a.createElement(Se,null):null,o.a.createElement(h,null,o.a.createElement(m,{src:"images/Tempermeter-logo.svg",alt:"Tempermeter logo"}),o.a.createElement(E,{icon:O.a,onClick:function(){y(!0)}})),o.a.createElement(v,null,o.a.createElement(w.c,null,o.a.createElement(w.a,{exact:!0,path:"/",render:function(){return o.a.createElement(Y,{history:C})}}),o.a.createElement(w.a,{path:"/auth",render:function(){return o.a.createElement(Ie,{history:C})}}),o.a.createElement(w.a,{exact:!0,path:"/test/",render:function(){return o.a.createElement(he,{history:C,showFinishConfirmation:a,setSessionId:b,sessionId:d})}}),o.a.createElement(w.a,{exact:!0,path:"/result/:session_id",render:function(e){return o.a.createElement(je,{sessionId:e.match.params.session_id,history:C})}}),o.a.createElement(w.a,{render:function(){return o.a.createElement("div",null,"The page isn't found")}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(L.a,null,o.a.createElement(y.a,{store:ye},o.a.createElement(ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[38,1,2]]]);
//# sourceMappingURL=main.79cd0b66.chunk.js.map