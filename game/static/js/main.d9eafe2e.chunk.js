(this.webpackJsonpgame=this.webpackJsonpgame||[]).push([[0],{12:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),r=n(6),c=n.n(r),o=(n(12),n(1));n(5);function u(){return l.a.createElement(l.a.Fragment,null,"###############")}function m(){return l.a.createElement(l.a.Fragment,null,"#####",l.a.createElement("em",null,"....."),"#####")}function i(){return l.a.createElement(l.a.Fragment,null,"#",l.a.createElement("br",null),"#",l.a.createElement("br",null),"#",l.a.createElement("br",null),"#",l.a.createElement("br",null),"#")}function E(){return l.a.createElement(l.a.Fragment,null,"#",l.a.createElement("br",null),l.a.createElement("em",null,".",l.a.createElement("br",null),".",l.a.createElement("br",null),"."),l.a.createElement("br",null),"#")}function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("em",null,"............."),l.a.createElement("br",null),l.a.createElement("em",null,"......"),"o",l.a.createElement("em",null,"......"),l.a.createElement("br",null),l.a.createElement("em",null,"....."),"-|-",l.a.createElement("em",null,"....."),l.a.createElement("br",null),l.a.createElement("em",null,"....."),"/",l.a.createElement("em",null,"."),"\\",l.a.createElement("em",null,"....."),l.a.createElement("br",null),l.a.createElement("em",null,"............."))}function p(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("em",null,".............",l.a.createElement("br",null),".............",l.a.createElement("br",null),".............",l.a.createElement("br",null),".............",l.a.createElement("br",null),"............."))}function b(){return l.a.createElement(l.a.Fragment,null,"#############",l.a.createElement("br",null),"#############",l.a.createElement("br",null),"#############",l.a.createElement("br",null),"#############",l.a.createElement("br",null),"#############")}function d(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("em",null,"............."),l.a.createElement("br",null),l.a.createElement("em",null,"....."),"xxx",l.a.createElement("em",null,"....."),l.a.createElement("br",null),l.a.createElement("em",null,"....."),"xXx",l.a.createElement("em",null,"....."),l.a.createElement("br",null),l.a.createElement("em",null,"....."),"xxx",l.a.createElement("em",null,"....."),l.a.createElement("br",null),l.a.createElement("em",null,"............."))}function f(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("rtd",null,l.a.createElement("strong",null,"~~~~~~~~~~~~~",l.a.createElement("br",null),"~~~~~~~~~~~~~",l.a.createElement("br",null),"~~~~~~~~~~~~~",l.a.createElement("br",null),"~~~~~~~~~~~~~",l.a.createElement("br",null),"~~~~~~~~~~~~~",l.a.createElement("br",null))))}function g(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("rtd",null,"~~~~~~~~~~~~~",l.a.createElement("br",null),"~~~~~~o~~~~~~",l.a.createElement("br",null),"~~~~~-|-~~~~~",l.a.createElement("br",null),"~~~~~/~\\~~~~~",l.a.createElement("br",null),"~~~~~~~~~~~~~",l.a.createElement("br",null)))}function v(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("rtd",null,l.a.createElement("em",null,".."),"nepritel!",l.a.createElement("em",null,".."),l.a.createElement("br",null),l.a.createElement("em",null,"......"),"o",l.a.createElement("em",null,"."),"|",l.a.createElement("em",null,"...."),l.a.createElement("br",null),l.a.createElement("em",null,"....."),"-|-+",l.a.createElement("em",null,"...."),l.a.createElement("br",null),l.a.createElement("em",null,"....."),"/",l.a.createElement("em",null,"."),"\\",l.a.createElement("em",null,"....."),l.a.createElement("br",null),l.a.createElement("em",null,"............."),l.a.createElement("br",null)))}var j=function(e){var t=e.roomItem,n=e.gameMap,a=e.gameMapWidth,r=e.gameMapHeight,c=(e.actualPositionOfPlayerX,e.actualPositionOfPlayerY,e.positionOfLavaX,e.positionOfLavaY,e.tempGameMap,e.findPositionOfDeadlyLava,e.setGameMap,t.positionX),o=t.positionY-1,j=t.positionX,O=t.positionY+1,h=t.positionX+1,M=t.positionY,y=t.positionX-1,k=t.positionY,S=!1,w=!1,N=!1,z=!1,P=function(e){return" "!==e};return" "!==t.content&&n.map((function(e,t){e.map((function(e,n){t===o&&n===c&&P(e)&&t>=0&&(S=!0),t===O&&n===j&&P(e)&&t<=r&&(w=!0),t===M&&n===h&&P(e)&&n<=a&&(N=!0),t===k&&n===y&&P(e)&&n>=0&&(z=!0)}))})),l.a.createElement("div",null,l.a.createElement("div",{className:"noWrap"},S?l.a.createElement(m,null):l.a.createElement(u,null)),l.a.createElement("div",{style:{display:"flex"}},l.a.createElement("span",{className:"noWrap"},z?l.a.createElement(E,null):l.a.createElement(i,null)),l.a.createElement("span",{className:"noWrap"},"@"===t.content?l.a.createElement(s,null):"\u2020"===t.content?l.a.createElement(g,null):"#"===t.content?l.a.createElement(p,null):"X"===t.content?l.a.createElement(d,null):"~"===t.content?l.a.createElement(f,null):"!"===t.content?l.a.createElement(v,null):l.a.createElement(b,null)),l.a.createElement("span",{className:"noWrap"},N?l.a.createElement(E,null):l.a.createElement(i,null))),l.a.createElement("div",null,w?l.a.createElement(m,null):l.a.createElement(u,null)))};var O=function(e){var t=e.gameMap,n=e.handleMovePerson,r=e.gameMapWidth,c=e.gameMapHeight,o=(e.setPrewiewMode,e.prewiewMode,e.setGameModeToGame);return Object(a.useEffect)((function(){var e=setTimeout((function(){o()}),1400);return function(){return clearTimeout(e)}}),[]),l.a.createElement("div",null,l.a.createElement("table",null,l.a.createElement("tbody",null,t.map((function(e,a){return l.a.createElement("tr",{key:a},e.map((function(e,o){return l.a.createElement("td",{key:o,onClick:function(t){return n(a,o,e)}},l.a.createElement(j,Object.assign({roomItem:{content:e,positionX:o,positionY:a}},{gameMap:t,gameMapWidth:r,gameMapHeight:c})))})))})))),l.a.createElement("button",{onClick:o},"ZA\u010c\xcdT"))};var h=function(e){var t=e.levelIndex,n=e.gameMap,a=e.actualPositionOfPersonX,r=e.actualPositionOfPersonY,c=e.gameMapWidth,o=e.gameMapHeight;return l.a.createElement(l.a.Fragment,null,l.a.createElement("p",null,l.a.createElement("strong",null,"Bludi\u0161t\u011b ",t+1)),n.map((function(e,t){return l.a.createElement("div",{key:t},e.map((function(e,u){return a===u&&r===t?l.a.createElement(j,Object.assign({key:u,roomItem:{content:e,positionX:u,positionY:t}},{gameMap:n,gameMapWidth:c,gameMapHeight:o})):null})))})))};var M=function(e){var t=e.levelIndex,n=e.setGameModeToPreview;return l.a.createElement("div",null,l.a.createElement("p",null,"V\xfdtej ve h\u0159e BLUDI\u0160T\u011a, ",l.a.createElement("br",null)," po zm\xe1\u010dknut\xed tla\u010d\xedtka START za\u010dne hra. ",l.a.createElement("br",null)," M\xe1\u0161 trochu \u010dasu na zapamatov\xe1n\xed mapy.",l.a.createElement("br",null),"C\xedl jsou ",l.a.createElement("u",null,"k\u0159\xed\u017eky"),".",l.a.createElement("br",null),l.a.createElement("strong",null,"Hodn\u011b \u0161t\u011bst\xed")),l.a.createElement("p",null,"Level ",t+1),l.a.createElement("button",{className:"buttonStart",onClick:n},"START"))},y=n(2);var k=function(){var e=Object(a.useState)([[]]),t=Object(o.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)(0),u=Object(o.a)(c,2),m=u[0],i=u[1],E=Object(a.useState)(0),s=Object(o.a)(E,2),p=s[0],b=s[1],d=Object(a.useState)(void 0),f=Object(o.a)(d,2),g=f[0],v=f[1],j=Object(a.useState)(void 0),k=Object(o.a)(j,2),S=k[0],w=k[1],N=Object(a.useState)(null),z=Object(o.a)(N,2),P=z[0],x=z[1],X=Object(a.useState)(void 0),I=Object(o.a)(X,2),G=I[0],T=I[1],W=Object(a.useState)(void 0),F=Object(o.a)(W,2),A=F[0],R=F[1],C=Object(a.useState)(null),D=Object(o.a)(C,2),V=D[0],Y=D[1],H=Object(a.useState)(null),J=Object(o.a)(H,2),K=J[0],Z=J[1],L=Object(a.useState)(!1),B=Object(o.a)(L,2),q=B[0],U=B[1],$=Object(a.useState)(null),Q=Object(o.a)($,2),_=Q[0],ee=(Q[1],Object(a.useState)(null)),te=Object(o.a)(ee,2),ne=te[0],ae=(te[1],Object(a.useState)([])),le=Object(o.a)(ae,2),re=le[0],ce=le[1],oe=Object(a.useState)(0),ue=Object(o.a)(oe,2),me=ue[0],ie=ue[1],Ee=Object(a.useState)("INTRO"),se=Object(o.a)(Ee,2),pe=se[0],be=se[1],de=Object(a.useState)(!1),fe=Object(o.a)(de,2),ge=fe[0],ve=fe[1],je=Object(a.useState)(!1),Oe=Object(o.a)(je,2),he=Oe[0],Me=Oe[1],ye=Object(a.useState)(!1),ke=Object(o.a)(ye,2),Se=ke[0],we=(ke[1]," "),Ne=["##@\n# X","@# ###\n#### X","##@##\n  # #\n  #\n  ###\n X#  ","#@ X\n~###","#@~#X\n###~#\n ####\n#####","@"];Object(a.useEffect)((function(){x(Math.floor(2*Math.random()+1))}),[m,p]),console.log("tu",P);var ze=function(e,t){var a=" ";return n.map((function(n,l){n.map((function(n,r){e===r&&t===l&&(a=n)}))})),a},Pe=function(){U(!1),be("INTRO");var e=Ne[me].split("\n");e=e.map((function(e){return e.split("")}));T(e[0].length),R(e.length),function(e){e.map((function(e,t){e.map((function(e,n){"X"===e&&(Y(n),Z(t))}))}))}(e),function(e){e.map((function(e,t){e.map((function(e,n){"@"===e&&(i(n),b(t))}))}))}(e),function(e){e.map((function(e,t){e.map((function(e,n){"!"===e&&(v(n),w(t))}))}))}(e),r(e),Ge(e)},xe=function(){U(!1),V===m&&K===p&&ie(me+1)};Object(a.useEffect)((function(){Pe()}),[me]);var Xe=function(e,t,a){if(Re(e,t,a)){var l=n.map((function(n,a){return n.map((function(n,l){return e===a&&t===l?"@":"@"===n?"#":n}))}));r(l),i(t),b(e),document.querySelector("#audioMove").play()}},Ie=function(){return m===g&&p<S?(console.log("s"),"s"):m>g&&p===S?(console.log("v"),"v"):m===g&&p>S?(console.log("j"),"j"):m<g&&p===S?(console.log("z"),"z"):m>g&&p<S?(console.log("sv"),"sv"):m>g&&p>S?(console.log("jv"),"jv"):m<g&&p>S?(console.log("jz"),"jz"):m<g&&p<S?(console.log("sz"),"sz"):void 0};Object(a.useEffect)((function(){if(re.some((function(e){return e.cellIndex===m&&e.rowIndex===p}))){U(!0);var e=n.map((function(e,t){return e.map((function(e,t){return"@"===e?"\u2020":e}))}));r(e)}}),[m,p]);var Ge=function(e){var t=[];e.map((function(e,n){e.map((function(e,a){"~"===e&&t.push({cellIndex:a,rowIndex:n})}))})),ce(t)},Te=function(e){q||Xe(p-1,m,ze(m,p-1))},We=function(e){q||Xe(p+1,m,ze(m,p+1))},Fe=function(e){q||Xe(p,m+1,ze(m+1,p))},Ae=function(e){q||Xe(p,m-1,ze(m-1,p))},Re=function(e,t,n,a){return document.querySelector("#audioMove").play(),Ce(e,t)&&("#"===n||"X"===n||"~"===n||"!"===n)&&!(m===V&&p===K)&&!(m===_&&p===ne)&&"GAME"===pe},Ce=function(e,t){return(m-1===t||m+1===t)&&p===e||(p-1===e||p+1===e)&&m===t};return Object(a.useEffect)((function(){ve("GAME"===pe&&(m!==V||p!==K)&&me!==Ne.length)}),[pe,p,m]),m===V&&p===K?(we="Zm\xe1\u010dkni R pro dal\u0161\xed bludi\u0161t\u011b",document.querySelector("#audioEnd").play()):we=" ",Object(a.useEffect)((function(){me+1===Ne.length&&"GAME"===pe&&Me(!0)}),[pe]),l.a.createElement("div",{className:"App"},l.a.createElement(y.a,{keyName:"up,w",onKeyDown:Te}),l.a.createElement(y.a,{keyName:"down,s",onKeyDown:We}),l.a.createElement(y.a,{keyName:"right,d",onKeyDown:Fe}),l.a.createElement(y.a,{keyName:"left,a",onKeyDown:Ae}),l.a.createElement(y.a,{keyName:"e",onKeyDown:Pe}),l.a.createElement(y.a,{keyName:"r",onKeyDown:xe}),l.a.createElement(y.a,{keyName:"l",onKeyDown:Ie}),l.a.createElement(y.a,{keyName:"k",onKeyDown:function(){var e=Ie(),t=P;"sv"===e&&1===t?(1,console.log("chci na S, random play z SV")):"jv"===e&&1===t?(1,console.log("chci na J, random play z JV")):"jz"===e&&1===t?(1,console.log("chci na J, random play z JZ")):"sz"===e&&1===t?(1,console.log("chci na S, random play z SZ")):"sv"===e&&2===t?(1,console.log("chci na V, random play z SV")):"jv"===e&&2===t?(1,console.log("chci na V, random play z JV")):("jz"===e&&2===t||"sz"===e&&2===t)&&(1,console.log("chci na Z, random play z JZ"))}}),"INTRO"===pe&&l.a.createElement(M,{levelIndex:me,setGameModeToPreview:function(){be("PREVIEW")}}),"PREVIEW"===pe&&l.a.createElement(O,{gameMap:n,handleMovePerson:Xe,gameMapHeight:A,gameMapWidth:G,gameMode:pe,setGameModeToGame:function(){be("GAME")}}),"GAME"===pe&&l.a.createElement(h,{levelIndex:me,gameMap:n,actualPositionOfPersonX:m,actualPositionOfPersonY:p,gameMapWidth:G,gameMapHeight:A}),Se&&l.a.createElement("p",null,l.a.createElement("strong",null,"Uho\u0159el jsi v l\xe1v\u011b")),he&&l.a.createElement("p",null,l.a.createElement("strong",null,"No V\xfdborn\u011b, ",l.a.createElement("br",null)," dohr\xe1l jsi mou hru.")),ge&&l.a.createElement("p",null,"Zm\xe1\u010dkni E pro restart bludi\u0161t\u011b"),l.a.createElement("p",null,l.a.createElement("strong",null,we)),"GAME"===pe&&l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:"buttonReduct",onClick:Pe},l.a.createElement("strong",null,"E"))),l.a.createElement("td",null),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("button",{className:"arrow",onClick:Te},"nahoru")),l.a.createElement("td",null)),l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("button",{className:"arrow",onClick:Ae},"doleva")),l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("button",{className:"arrow",onClick:Fe},"doprava"))),l.a.createElement("tr",null,l.a.createElement("td",null),l.a.createElement("td",null,l.a.createElement("button",{className:"arrow",onClick:We},"dol\u016f")),l.a.createElement("td",null))),"GAME"===pe&&l.a.createElement("button",{className:"buttonReduct",onClick:xe},l.a.createElement("strong",null,"R")),l.a.createElement("p",null,l.a.createElement("a",{href:"https://teo.jacon.cz/index.php/9905"},"zpet na uvodni stranku")),l.a.createElement("audio",{src:"move.mp3",id:"audioMove"}),l.a.createElement("audio",{src:"end.mp3",id:"audioEnd"}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},5:function(e,t,n){},7:function(e,t,n){e.exports=n(15)}},[[7,1,2]]]);
//# sourceMappingURL=main.d9eafe2e.chunk.js.map