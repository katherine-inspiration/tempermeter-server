(this.webpackJsonptempermeter=this.webpackJsonptempermeter||[]).push([[0],{35:function(e,n,t){e.exports=t(49)},40:function(e,n,t){},41:function(e,n,t){},49:function(e,n,t){"use strict";t.r(n);var r=t(0),o=t.n(r),a=t(19),c=t.n(a),i=(t(40),t(16)),s=t(12),u=t(5),l=(t(41),t(1)),d=t(2);function f(){var e=Object(l.a)(["\n    background-color: white;\n    padding: 0px;\n    width: 100%;\n    display:block;\n    height: 100px;\n    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);\n"]);return f=function(){return e},e}var h=d.a.header(f());function b(){var e=Object(l.a)(["\n    width: 150px;\n    height: 150px;\n    position:absolute;\n    top: -30px;\n    left: 20px;\n"]);return b=function(){return e},e}var m=d.a.img(b()),g=t(32);function p(){var e=Object(l.a)(["\n    font-size: 30px;\n    color: ",";\n    position: absolute;\n    top: 30px;\n    right: 40px;\n    \n    :hover{\n        cursor: pointer;\n    }\n"]);return p=function(){return e},e}var E=Object(d.a)(g.a)(p(),(function(e){return e.secondary?"#FD759C":"#2E753E"})),O=t(34);function j(){var e=Object(l.a)(["\n    width: 1000px;\n    margin: 20px auto;\n    background-color: white;\n    padding: 20px;\n    display: block;\n    text-align: center;\n    border: 1px pink solid;\n"]);return j=function(){return e},e}var v=d.a.section(j()),_=t(6),y=t(10);function w(){var e=Object(l.a)(["\n    padding: 18px 60px;\n    background-color: ",";\n    color: ",";\n    border: 1px "," solid;\n    display: inline-block;\n    font-size:20px;\n    text-decoration: none;\n    :hover{\n        cursor:pointer;\n    }\n    :active{\n        box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.5);\n    }\n"]);return w=function(){return e},e}var x=d.a.button(w(),(function(e){return e.disabled?"#a3a3a3":e.primary?"#2E753E":e.secondary?"#FD759C":"white"}),(function(e){return e.disabled?"black":e.primary||e.secondary?"white":"#2E753E"}),(function(e){return e.disabled?"black":e.secondary?"#FD759C":"#2E753E"}));function S(){var e=Object(l.a)(["\n    color: ",";\n    font-size: 30px;\n    font-weight: bold;\n\n"]);return S=function(){return e},e}var k=d.a.h1(S(),(function(e){return e.secondary?"#FD759C":"#2E753E"}));function I(){var e=Object(l.a)(["\n    \n    border:1px "," solid;\n    padding: 20px 40px;\n    font-size: 17px;\n    border-radius: 15px;\n    display: inline-block;\n    margin: 10px auto;\n    .date{\n        color: '#4d4d4d';\n        font-style: italic;\n    }\n    .result_name{\n        font-weight:bold;\n    }\n    :hover{\n        background-color: ",";\n        color: white;\n        cursor: pointer;\n    }\n"]);return I=function(){return e},e}var C=Object(d.a)((function(e){var n=Object(r.useState)(""),t=Object(u.a)(n,2),a=t[0],c=t[1];Object(r.useEffect)((function(){console.log("Props from Results History Item"),console.log(e);var n="";if(e.result.length>0){n+=e.result[0];for(var t=1;t<e.result.length;t++)n+=" + "+e.result[t]}c(n)}),[e]);var i=new Date(e.date).toLocaleTimeString("ru-RU",{month:"long",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});return o.a.createElement("div",{onClick:e.onClick},o.a.createElement("div",{className:e.className},o.a.createElement("span",{className:"date"},i),o.a.createElement("br",null),o.a.createElement("span",{className:"result_name"},a)))}))(I(),(function(e){return e.primary?"#2E753E":"#FD759C"}),(function(e){return e.primary?"#2E753E":"#FD759C"})),N=C;function q(){var e=Object(l.a)(["\n    border: 1px "," solid;\n    background-color: ",";\n    color: ",";\n    font-size: 18px;\n    border-radius: 15px;\n    padding: 20px;\n    text-align: ",";\n"]);return q=function(){return e},e}var T=d.a.p(q(),(function(e){return e.secondary?"#FD759C":"#2E753E"}),(function(e){return e.primary?"#2E753E":e.secondary&&e.bold?"#FD759C":"white"}),(function(e){return e.primary||e.secondary&&e.bold?"white":"#4d4d4d"}),(function(e){return"left"===e.align?"left":"right"===e.align?"right":"center"}));function D(){var e=Object(l.a)(["\n    width: 150px;\n    display: inline-block;\n    \n"]);return D=function(){return e},e}var F=Object(d.a)((function(e){return o.a.createElement("div",null,o.a.createElement("img",Object.assign({alt:"Loading...",className:e.className},e,{src:"/images/preloader.svg"})))}))(D()),U=function(e){var n=Object(r.useState)(!1),t=Object(u.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)([]),s=Object(u.a)(i,2),l=s[0],d=s[1],f=Object(r.useState)([]),h=Object(u.a)(f,2),b=h[0],m=h[1],g=Object(r.useState)(!1),p=Object(u.a)(g,2),E=p[0],O=p[1],j=Object(r.useCallback)((function(){if(!E)return c(!0),console.log("fetching /api/sessions/"+e.user_id),fetch("/api/sessions/"+e.user_id).then((function(e){return e.json()})).then((function(n){return n&&e.updateResultsHistory(n),console.log(n),c(!1),n})).catch((function(e){return console.log(e)}))}),[E,e.user_id]);return Object(r.useEffect)((function(){d(e.resultsHistory)}),[e.resultsHistory]),Object(r.useEffect)((function(){j()}),[E,j]),Object(r.useEffect)((function(){console.log("Getting history items"),console.log(l),l.length>0?(m(l.map((function(n){return o.a.createElement(N,Object.assign({},n,{key:n.session_id,onClick:function(){e.history.push("/result/"+n.session_id)}}))}))),O(!0)):m(o.a.createElement(T,null,"\u0412\u0430\u0448\u0430 \u0438\u0441\u0442\u043e\u0440\u0438\u044f \u043f\u0443\u0441\u0442\u0430. \u0412\u044b \u0435\u0449\u0435 \u043d\u0438 \u0440\u0430\u0437\u0443 \u043d\u0435 \u043f\u0440\u043e\u0445\u043e\u0434\u0438\u043b\u0438 \u0442\u0435\u0441\u0442."))}),[l,e.resultsHistory,e.history]),o.a.createElement("div",null,a?o.a.createElement(F,null):b)};function A(){var e=Object(l.a)(["\n"]);return A=function(){return e},e}var P=Object(d.a)(U)(A()),H=[],R=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-RESULTS-HISTORY":return n.newState;default:return e}},L=Object(y.b)((function(e){return{user_id:e.userInfo.user_id,resultsHistory:e.resultsHistory}}),(function(e){return{updateResultsHistory:function(n){e(function(e){return{type:"UPDATE-RESULTS-HISTORY",newState:e}}(n))}}}))(P),z=t(13),G=function(e){return o.a.createElement("div",null,o.a.createElement(x,{primary:!0,as:z.b,to:"/test/",onClick:function(){fetch("/api/session/start/"+e.user_id).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e)})).catch((function(e){return console.log(e)}))}},"\u041f\u0440\u043e\u0439\u0442\u0438 \u0442\u0435\u0441\u0442"),o.a.createElement(k,{secondary:!0},"\u0418\u0441\u0442\u043e\u0440\u0438\u044f"),o.a.createElement(L,{user_id:e.user_id,history:e.history}),"}")},J={user_id:"1"},Q=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-USER-INFO":return n.userInfo;default:return e}},B=function(e){return{type:"UPDATE-USER-INFO",userInfo:{user_id:e.user_id}}},W=Object(y.b)((function(e,n){return Object(s.a)(Object(s.a)({},e.userInfo),{},{history:n.history,user_id:n.user_id})}),(function(e){return{updateUserInfo:function(n){e(B(n))}}}))(G),Y=function(e){return o.a.createElement(T,{primary:!0},e.question_text)};function K(){var e=Object(l.a)(["\n    :hover{\n        cursor:pointer;\n    }\n    \n"]);return K=function(){return e},e}var M=function(e){var n=Object(r.useState)(!1),t=Object(u.a)(n,2),a=t[0],c=t[1];return Object(r.useEffect)((function(){c(e.chosen)}),[e.chosen]),o.a.createElement(T,{secondary:!0,bold:a,className:e.className,onClick:e.onClick},e.answer_text)},V=M=Object(d.a)(M)(K());function $(){var e=Object(l.a)(["\n\n"]);return $=function(){return e},e}var X=function(e){var n=Object(r.useState)([]),t=Object(u.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)(!0),s=Object(u.a)(i,2),l=s[0],d=s[1],f=Object(r.useState)(null),h=Object(u.a)(f,2),b=h[0],m=h[1],g=Object(r.useCallback)((function(e){return console.log("Fetching answers for question "+e),e?fetch("/api/answers/"+e).then((function(e){return console.log(e),e.json()})).then((function(e){return console.log(e),c(e),d(!1),e})).catch((function(e){return console.log(e)})):[]}),[]);return Object(r.useEffect)((function(){g(e.question_id)}),[e.question_id,g]),Object(r.useEffect)((function(){m(a?a.map((function(n){return o.a.createElement(V,{answer_id:n.answer_id,answer_text:n.answer_text,onClick:function(t){e.answerChoiceHandler(n.answer_id),console.log(n.answer_id)},chosen:n.answer_id===+e.chosenAnswerId})})):null)}),[a,e.chosenAnswerId,e.answerChoiceHandler]),o.a.createElement("div",null,l||e.isChosenFetching?o.a.createElement(F,null):b)},Z=X=Object(d.a)(X)($());function ee(){var e=Object(l.a)(["\n    padding: 15px;\n    color: '#5e5e5e';\n    font-style:italic;\n    text-align: left;\n"]);return ee=function(){return e},e}var ne=function(e){return o.a.createElement("div",{className:e.className},e.currentPage,"/",e.totalPages)},te=ne=Object(d.a)(ne)(ee()),re=function(e){var n=Object(r.useState)([]),t=Object(u.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)(!1),s=Object(u.a)(i,2),l=s[0],d=s[1],f=Object(r.useState)(0),h=Object(u.a)(f,2),b=h[0],m=h[1],g=Object(r.useState)(null),p=Object(u.a)(g,2),E=p[0],O=p[1],j=Object(r.useState)(!1),v=Object(u.a)(j,2),_=v[0],y=v[1],w=Object(r.useState)(!1),S=Object(u.a)(w,2),k=S[0],I=S[1],C=Object(r.useCallback)((function(e){O(e)}),[]),N=function(e){console.log("client put body"),console.log(JSON.stringify(e)),fetch("/api/answer",{method:"PUT",body:JSON.stringify(e),headers:{"Content-Type":"application/json;charset=utf-8"}}).then((function(e){return e.json()})).then((function(e){return console.log(e),e})).catch((function(e){return console.log(e)}))},q=function(){e.showFinishConfirmation(!0)};Object(r.useEffect)((function(){e.setSessionId(e.session_id)}),[e.session_id]),Object(r.useEffect)((function(){y(0===b)}),[b]),Object(r.useEffect)((function(){d(!0),console.log("/api/session/"+e.user_id),fetch("/api/session/"+e.user_id).then((function(e){return e.json()})).then((function(n){return console.log(n),n&&e.updateSessionId(n.session_id),d(!1),n.session_id})).catch((function(e){return console.log(e)})),d(!0),console.log("Getting questions"),fetch("/api/questions").then((function(e){return console.log(e),e.json()})).then((function(n){return console.log("questions result"),console.log(n),n&&(e.updateQuestions(n),c(n)),d(!1),n})).catch((function(e){return console.log(e)}))}),[e]),Object(r.useEffect)((function(){a.length>0&&void 0!==b&&(console.log("Getting chosen answer"),console.log(a),console.log(b),function(n){if(I(!0),console.log("Trying to fetch chosen answers. Session id :"+e.sessionId+", chosen answer id: "+E+"question id: "+n),+e.sessionId&&!E)console.log("Fetching chosen answer"),fetch("/api/history/answers/"+e.sessionId+"/"+n).then((function(e){return e.json()})).then((function(e){return console.log("Got the chosen answer from history"),console.log(e),e.length>0&&O(e[0].answer_id),I(!1),e})).catch((function(e){console.log("Couldn't get the chosen answer from the server"),console.log(e)}))}(a[b].question_id))}),[e.sessionId,b,a]);var T=a.map((function(n){return o.a.createElement(Y,{primary:!0,session_id:e.session_id,question_id:n.question_id,question_text:n.question_text,questions_picture:n.question_picture})}));return o.a.createElement("div",null,l?o.a.createElement(F,null):o.a.createElement("div",null,o.a.createElement(te,{currentPage:b+1,totalPages:a.length}),T[b]),o.a.createElement(Z,{question_id:a.length>0?a[b].question_id:"",answerChoiceHandler:C,chosenAnswerId:E,isChosenFetching:k}),l?null:o.a.createElement("div",null,o.a.createElement(x,{onClick:function(){a&&b>0&&(E&&N({session_id:e.session_id,answer_id:E,question_id:a[b].question_id}),m(b-1),O(null))},disabled:_},"\u041d\u0430\u0437\u0430\u0434"),o.a.createElement(x,{primary:b===a.length-1,onClick:function(){a&&(E&&N({session_id:e.session_id,answer_id:E,question_id:a[b].question_id}),b<a.length-1?(m(b+1),O(null)):q())}},b===a.length-1?"\u0417\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442":"\u0412\u043f\u0435\u0440\u0435\u0434")))},oe={session_id:null},ae=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-SESSION-ID":return{session_id:n.session_id};default:return e}},ce=function(e){return{type:"UPDATE-SESSION-ID",session_id:e}},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"UPDATE-QUESTIONS":return n.questions;default:return e}},se=function(e){return{type:"UPDATE-QUESTIONS",questions:e}},ue=Object(y.b)((function(e){return{session_id:e.sessionInfo.session_id,user_id:e.userInfo.user_id}}),(function(e){return{updateSessionId:function(n){e(ce(n))},updateQuestions:function(n){e(se(n))}}}))(re);function le(){var e=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    background-color: rgba(33, 33, 33, 0.81);    \n    .wrapper{\n        background-color: white;\n        border: 1px black solid;\n        width: 800px;\n        margin: 200px auto;\n        padding: 20px;\n        text-align: center;\n        \n        .yes{\n            border: none;\n        }\n    }\n"]);return le=function(){return e},e}var de=function(e){var n=Object(_.f)();return o.a.createElement("div",{className:e.className},o.a.createElement("div",{className:"wrapper"},o.a.createElement("p",null," \u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u044b, \u0447\u0442\u043e \u0445\u043e\u0442\u0438\u0442\u0435 \u0437\u0430\u0432\u0435\u0440\u0448\u0438\u0442\u044c \u0442\u0435\u0441\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u0438\u0435?"),o.a.createElement(x,{secondary:!0,className:"no",onClick:function(){e.showFinishConfirmation(!1)}},"\u041d\u0435\u0442"),o.a.createElement(x,{primary:!0,className:"yes",onClick:function(){e.showFinishConfirmation(!1),fetch("/api/result/calculate/"+e.userId+"/"+e.sessionId).then((function(e){return e.json()})).then((function(t){console.log(t),n.push("/result/"+e.sessionId)})).catch((function(e){return console.log(e)}))}},"\u0414\u0430")))},fe=de=Object(d.a)(de)(le());function he(){var e=Object(l.a)(["\n    width: 100%;\n"]);return he=function(){return e},e}var be=Object(d.a)(x)(he());function me(){var e=Object(l.a)(["\n    width: 600px;\n"]);return me=function(){return e},e}var ge=d.a.img(me());function pe(){var e=Object(l.a)(["\n\n"]);return pe=function(){return e},e}var Ee=function(e){var n=Object(r.useState)(!0),t=Object(u.a)(n,2),a=t[0],c=t[1],i=Object(r.useState)([]),s=Object(u.a)(i,2),l=s[0],d=s[1],f=Object(r.useState)(null),h=Object(u.a)(f,2),b=h[0],m=h[1],g=Object(_.f)();return Object(r.useEffect)((function(){c(!0),console.log(e.sessionId),fetch("/api/result/"+e.sessionId).then((function(e){var n=e.json();return console.log(n),n})).then((function(e){return console.log("Got Result Data"),console.log(e),d(e),c(!1),e})).then((function(e){if(e)return m(e.map((function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",null,o.a.createElement("b",null,e.name)),o.a.createElement(ge,{src:e.picture}),o.a.createElement(T,{align:"left"},e.text))}))),c(!1),e})).catch((function(e){console.log("Couldn't fetch the result data"),console.log(e)}))}),[e]),o.a.createElement("div",null,o.a.createElement(be,{primary:!0,onClick:function(){return g.push("/")}},"\u0412\u0435\u0440\u043d\u0443\u0442\u044c\u0441\u044f \u043d\u0430 \u0433\u043b\u0430\u0432\u043d\u0443\u044e"),a?o.a.createElement(F,null):o.a.createElement("div",null,o.a.createElement(T,null,"` \u0412\u044b - ",function(e){var n="";if(e){n+=e[0].name;for(var t=1;t<e.length;t++)n+=" + "+e[t].name}return n}(l),o.a.createElement("br",null),b)))},Oe=Ee=Object(d.a)(Ee)(pe()),je=t(17),ve=Object(je.b)({resultsHistory:R,userInfo:Q,sessionInfo:ae,questions:ie}),_e=Object(je.c)(ve);function ye(){var e=Object(l.a)(["\n    width: 100%;\n    height: 100%;\n    background-color: rgba(33, 33, 33, 0.81);\n    position: fixed;\n    .info{\n        padding: 30px;\n        margin: 110px auto;\n        width: 800px;\n    }\n    \n"]);return ye=function(){return e},e}var we=function(e){return o.a.createElement("div",e,o.a.createElement(T,{className:"info"},"\u0418\u0437\u0432\u0435\u0441\u0442\u043d\u043e, \u0447\u0442\u043e \u0432\u0441\u0435 \u043b\u044e\u0434\u0438 \u043f\u043e \u0440\u0430\u0437\u043d\u043e\u043c\u0443 \u0440\u0435\u0430\u0433\u0438\u0440\u0443\u044e\u0442 \u043d\u0430 \u0441\u043e\u0431\u044b\u0442\u0438\u044f \u0438 \u0438\u0441\u043f\u044b\u0442\u044b\u0432\u0430\u044e\u0442 \u0440\u0430\u0437\u043d\u044b\u0435 \u044d\u043c\u043e\u0446\u0438\u0438 \u043f\u0440\u0438 \u043e\u0434\u043d\u0438\u0445 \u0438 \u0442\u0435\u0445 \u0436\u0435 \u0441\u043e\u0431\u044b\u0442\u0438\u044f\u0445.",o.a.createElement("br",null),"\u0412 \u043d\u0430\u0448\u0438\u0445 \u0433\u0435\u043d\u0430\u0445 \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u043e \u043c\u043d\u043e\u0436\u0435\u0441\u0442\u0432\u043e \u0438\u043d\u0444\u043e\u0440\u043c\u0430\u0446\u0438\u0438. \u0412 \u0442\u043e\u043c \u0447\u0438\u0441\u043b\u0435, \u0442\u0430\u043c \u0437\u0430\u043f\u0438\u0441\u0430\u043d\u044b \u043e\u0441\u043e\u0431\u0435\u043d\u043d\u043e\u0441\u0442\u0438 \u0440\u0430\u0431\u043e\u0442\u044b \u043d\u0435\u0440\u0432\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b.",o.a.createElement("br",null),"\u0412 \u0437\u0430\u0432\u0438\u0441\u0438\u043c\u043e\u0441\u0442\u0438 \u043e\u0442 \u0441\u0432\u043e\u0439\u0441\u0442\u0432 \u043d\u0435\u0440\u0432\u043d\u043e\u0439 \u0441\u0438\u0441\u0442\u0435\u043c\u044b, \u043f\u0440\u0438\u0441\u0443\u0449\u0438\u0445 \u0447\u0435\u043b\u043e\u0432\u0435\u043a\u0443, \u043c\u043e\u0436\u043d\u043e \u0433\u043e\u0432\u043e\u0440\u0438\u0442\u044c \u043e \u0442\u043e\u043c, \u043a\u0430\u043a\u0438\u043c \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u043c\u0435\u043d\u0442\u043e\u043c \u043e\u043d \u043e\u0431\u043b\u0430\u0434\u0430\u0435\u0442.",o.a.createElement("br",null),o.a.createElement("br",null),"\u0414\u0430\u043d\u043d\u044b\u0439 \u0442\u0435\u0441\u0442 \u043f\u043e\u043c\u043e\u0436\u0435\u0442 \u0432\u0430\u043c \u043e\u043f\u0440\u0435\u0434\u0435\u043b\u0438\u0442\u044c \u0441\u0432\u043e\u0439 \u043b\u0438\u0447\u043d\u044b\u0439 \u0442\u0435\u043c\u043f\u0435\u0440\u0430\u043c\u0435\u043d\u0442.",o.a.createElement("br",null),o.a.createElement("br",null),o.a.createElement("i",null,"\u041f\u0440\u0438\u043b\u043e\u0436\u0435\u043d\u0438\u0435 \u0441\u043e\u0437\u0434\u0430\u043d\u043e \u0432 \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u0435 \u0438\u043d\u0434\u0438\u0432\u0438\u0434\u0443\u0430\u043b\u044c\u043d\u043e\u0433\u043e \u0434\u043e\u043c\u0430\u0448\u043d\u0435\u0433\u043e \u0437\u0430\u0434\u0430\u043d\u0438\u044f \u043f\u043e \u043a\u0443\u0440\u0441\u0443 \u0421\u0438\u0441\u0442\u0435\u043c\u044b \u0423\u043f\u0440\u0430\u0432\u043b\u0435\u043d\u0438\u044f \u041a\u043e\u043d\u0442\u0435\u043d\u0442\u043e\u043c.",o.a.createElement("br",null),"\u041c\u0430\u0442\u043c\u0435\u0445, \u0421\u041f\u0431\u0413\u0423, 2020 \u0433\u043e\u0434."),o.a.createElement("br",null),o.a.createElement("br",null),"\u041f\u043e \u0432\u0441\u0435\u043c \u0432\u043e\u043f\u0440\u043e\u0441\u0430\u043c \u043c\u043e\u0436\u0435\u0442\u0435 \u043f\u0438\u0441\u0430\u0442\u044c \u043d\u0430 ",o.a.createElement("b",null,"\u043f\u043e\u0447\u0442\u0443")," katherine.inspiration@gmail.com"))},xe=we=Object(d.a)(we)(ye()),Se=function(e){return Object(r.useEffect)((function(){e.history.push("https://connect.ok.ru/oauth/authorize?client_id=512000565248&scope=VALUABLE_ACCESS;LONG_ACCESS_TOKEN&response_type=token&redirect_uri=https://tempermeter-server.herokuapp.com")}),[e.history]),o.a.createElement("div",null)};var ke=function(e){var n=Object(r.useState)(!1),t=Object(u.a)(n,2),a=t[0],c=t[1],l=Object(r.useState)(null),d=Object(u.a)(l,2),f=d[0],b=d[1],g=Object(r.useState)(!1),p=Object(u.a)(g,2),j=p[0],y=p[1],w=Object(r.useState)(""),x=Object(u.a)(w,2),S=(x[0],x[1]),k=Object(r.useState)(null),I=Object(u.a)(k,2),C=(I[0],I[1],Object(r.useState)(null)),N=Object(u.a)(C,2),q=N[0],T=N[1],D=Object(_.f)();return Object(r.useEffect)((function(){var e=window.location.hash.substring(1);e=e.split("&").reduce((function(e,n){var t=n.split("=");return Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},t[0],t[1]))}),{}),console.log(e),S(e)}),[]),Object(r.useEffect)((function(){console.log("Search params");var n=e.history.location.search;console.log(n),n=(n=n.substring(1,n.length)).split("&").reduce((function(e,n){var t=n.split("=");return Object(s.a)(Object(s.a)({},e),{},Object(i.a)({},t[0],t[1]))}),{}),T(n),console.log("Parsed session info"),console.log(n),e.updateUserInfo(n)}),[e]),o.a.createElement("div",{onClick:function(){j&&y(!1)}},a?o.a.createElement(fe,{showFinishConfirmation:c,sessionId:f,userId:_e.getState().userInfo.user_id}):null,j?o.a.createElement(xe,null):null,o.a.createElement(h,null,o.a.createElement(m,{src:"images/Tempermeter-logo.svg",alt:"Tempermeter logo"}),o.a.createElement(E,{icon:O.a,onClick:function(){y(!0)}})),o.a.createElement(v,null,q?o.a.createElement(_.c,null,o.a.createElement(_.a,{exact:!0,path:"/",render:function(){return o.a.createElement(W,{user_id:q.logged_user_id,history:D})}}),o.a.createElement(_.a,{path:"/auth",render:function(){return o.a.createElement(Se,{history:D})}}),o.a.createElement(_.a,{exact:!0,path:"/test/",render:function(){return o.a.createElement(ue,{history:D,showFinishConfirmation:c,setSessionId:b,sessionId:f,user_id:q.logged_user_id})}}),o.a.createElement(_.a,{exact:!0,path:"/result/:session_id",render:function(e){return o.a.createElement(Oe,{sessionId:e.match.params.session_id,history:D,user_id:q.logged_user_id})}}),o.a.createElement(_.a,{render:function(){return o.a.createElement("div",null,"The page isn't found")}})):o.a.createElement(F,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(z.a,null,o.a.createElement(y.a,{store:_e},o.a.createElement(ke,null)))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.92209257.chunk.js.map