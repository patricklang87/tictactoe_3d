(this.webpackJsonptictactoe_3d=this.webpackJsonptictactoe_3d||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t),n.d(t,"parseRotationValues",(function(){return N}));var l=n(2),a=n.n(l),o=n(9),c=n.n(o),r=(n(14),n(3)),s=n(5),u=n(6),i=n(1),d=n(8),m=n(7),v=(n(15),n(0)),g=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var l;return Object(s.a)(this,n),(l=t.call(this,e)).onClick=l.onClick.bind(Object(i.a)(l)),l.updateCube=l.updateCube.bind(Object(i.a)(l)),l.checkFoWinner=l.checkForWinner.bind(Object(i.a)(l)),l.acknowledgeWinner=l.acknowledgeWinner.bind(Object(i.a)(l)),l.reset=l.reset.bind(Object(i.a)(l)),l.startWinningRotation=l.startWinningRotation.bind(Object(i.a)(l)),l.state={cubeState:[[[null,null,null],[null,null,null],[null,null,null]],[[null,null,null],[null,null,null],[null,null,null]],[[null,null,null],[null,null,null],[null,null,null]]],player1IsNext:!0},l}return Object(u.a)(n,[{key:"acknowledgeWinner",value:function(){var e;return e=this.state.player1IsNext?"player1":"player2",document.getElementsByTagName("BODY")[0].style.backgroundColor="player1"===e?"green":"hotpink",e}},{key:"checkForWinner",value:function(){var e,t=this.state.cubeState,n=Object(r.a)(t);try{for(n.s();!(e=n.n()).done;){var l,a=e.value,o=Object(r.a)(a);try{for(o.s();!(l=o.n()).done;){var c=l.value;if(null!=c[0]&&c[0]===c[1]&&c[0]===c[2])return this.acknowledgeWinner()}}catch(m){o.e(m)}finally{o.f()}if(null!=a[0][0]&&a[0][0]===a[1][1]&&a[0][0]===a[2][2]||null!=a[0][2]&&a[0][2]===a[1][1]&&a[0][2]===a[2][0])return this.acknowledgeWinner();for(var s=0;s<3;s++)if(null!=a[0][s]&&a[0][s]===a[1][s]&&a[0][s]===a[2][s])return this.acknowledgeWinner()}}catch(m){n.e(m)}finally{n.f()}for(var u=0;u<3;u++)for(var i=0;i<3;i++)if(null!=t[0][u][i]&&t[0][u][i]===t[1][u][i]&&t[0][u][i]===t[2][u][i])return this.acknowledgeWinner();for(var d=0;d<3;d++){if(null!=t[0][0][d]&&t[0][0][d]===t[1][1][d]&&t[0][0][d]===t[2][2][d]||null!=t[2][0][d]&&t[2][0][d]===t[1][1][d]&&t[2][0][d]===t[0][2][d])return this.acknowledgeWinner();if(null!=t[0][d][0]&&t[0][d][0]===t[1][d][1]&&t[0][d][0]===t[2][d][2]||null!=t[2][d][0]&&t[2][d][0]===t[1][d][1]&&t[2][d][0]===t[0][d][2])return this.acknowledgeWinner();if(null!=t[0][0][0]&&t[0][0][0]===t[1][1][1]&&t[0][0][0]===t[2][2][2]||null!=t[0][0][2]&&t[0][0][2]===t[1][1][1]&&t[0][0][2]===t[2][2][0]||null!=t[2][0][0]&&t[2][0][0]===t[1][1][1]&&t[2][0][0]===t[0][2][2]||null!=t[2][0][2]&&t[2][0][2]===t[1][1][1]&&t[2][0][0]===t[0][2][0])return this.acknowledgeWinner()}}},{key:"reset",value:function(){this.setState({cubeState:[[[null,null,null],[null,null,null],[null,null,null]],[[null,null,null],[null,null,null],[null,null,null]],[[null,null,null],[null,null,null],[null,null,null]]],player1IsNext:!0});var e,t=document.getElementsByClassName("side"),n=Object(r.a)(t);try{for(n.s();!(e=n.n()).done;){e.value.style.backgroundColor="yellow"}}catch(l){n.e(l)}finally{n.f()}document.getElementsByTagName("BODY")[0].style.backgroundColor="white",document.getElementsByClassName("cube")[0].classList.remove("rotation"),document.getElementsByClassName("reset")[0].style.visibility="hidden"}},{key:"startWinningRotation",value:function(){var e=N()[0],t=N()[1],n=document.createElement("style");n.id="rotationCss";var l="\n        @keyframes loop {\n          from {transform: rotateX(".concat(t,"deg) rotateY").concat(e,"deg)}\n          to {transform: rotateX(").concat(t+360,"deg) rotateY(").concat(e+360,"deg)}\n        }");n.innerHTML=l,document.getElementsByTagName("HTML")[0].append(n),document.getElementsByClassName("cube")[0].classList.add("rotation")}},{key:"updateCube",value:function(e,t,n){console.log("oldCube: ",this.state.cubeState),console.log(e,t,n);var l=this.state.cubeState;return l[e][t][n]=this.state.player1IsNext?"player1":"player2",console.log("newCube: ",l),this.checkFoWinner()&&(this.startWinningRotation(),document.getElementsByClassName("reset")[0].style.visibility="visible"),l}},{key:"onClick",value:function(e,t,n){this.setState({cubeState:this.updateCube(e,t,n),player1IsNext:!0!==this.state.player1IsNext})}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++){var n="board"+t;e.push(Object(v.jsx)(y,{id:n,handleClick:this.onClick,currentCube:this.state.cubeState,player1IsNext:this.state.player1IsNext},t))}return Object(v.jsxs)("div",{className:"wrapper",id:"wrapper",children:[Object(v.jsx)("div",{className:"cube",children:e}),Object(v.jsx)("div",{className:"reset",onClick:this.reset,children:Object(v.jsx)("p",{children:"Play Again"})})]})}}]),n}(a.a.Component),y=function(e){Object(d.a)(n,e);var t=Object(m.a)(n);function n(e){var l;return Object(s.a)(this,n),(l=t.call(this,e)).onClick=l.onClick.bind(Object(i.a)(l)),l.createSides=l.createSides.bind(Object(i.a)(l)),l}return Object(u.a)(n,[{key:"onClick",value:function(e){var t=e.target.parentNode,n=t.id[4],l=t.id[5],a=t.id[6];console.log("onClick values: ",e.target,e.target.parentNode,n,l,a),null==this.props.currentCube[n][l][a]&&this.props.handleClick(n,l,a)}},{key:"colorTiles",value:function(){var e,t=this.props.currentCube,n=document.getElementsByClassName("deepTile"),l=Object(r.a)(n);try{for(l.s();!(e=l.n()).done;){var a=e.value,o=a.id,c=o[4],s=o[5],u=o[6];if(null!=t[c][s][u]){var i=void 0;"player1"===t[c][s][u]&&(i="limegreen"),"player2"===t[c][s][u]&&(i="hotpink");var d,m=a.childNodes,v=Object(r.a)(m);try{for(v.s();!(d=v.n()).done;){d.value.style.backgroundColor=i}}catch(g){v.e(g)}finally{v.f()}}}}catch(g){l.e(g)}finally{l.f()}}},{key:"createSides",value:function(e){for(var t=[],n=0;n<6;n++){var l="".concat(e).concat(n),a=Object(v.jsx)("div",{className:"side"},l);t.push(a)}return t}},{key:"render",value:function(){for(var e=[],t=0;t<3;t++){for(var n=[],l=0;l<3;l++){var a="tile".concat(this.props.id[5]).concat(t).concat(l),o=this.createSides(a);this.colorTiles(),n.push(Object(v.jsx)("div",{className:"deepTile",id:a,onClick:this.onClick,children:o},a))}e.push(n)}return Object(v.jsx)("div",{className:"board",children:e})}}]),n}(a.a.Component),h=g,b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,l=t.getFID,a=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),l(e),a(e),o(e),c(e)}))},f=!1,p=null,E=null,L=0,k=0,N=function(){var e=-30,t=-30,n=document.getElementsByClassName("cube")[0].style.transform;if(n){var l=n.split(" ")[0],a=n.split(" ")[1];t=l.slice(8,l.length-4),e=a.slice(8,a.length-4)}return[t,e]},T=function(e){var t=e.touches?e.touches[0].clientX:e.clientX,n=e.touches?e.touches[0].clientY:e.clientY;p=t,E=n;var l=N();k=l[0],L=l[1],f=!0},B=function(e){var t=e.touches?e.touches[0].clientX:e.clientX,n=e.touches?e.touches[0].clientY:e.clientY,l=document.getElementsByClassName("cube")[0];if(!0===f){var a=t-p+Number(k),o=E-n+Number(L),c="rotateY(".concat(a,"deg) rotateX(").concat(o,"deg)");l.style.transform=c,console.log(c)}},C=function(){f=!1,p=null,E=null},j=!1,O=function(){j=!0,document.getElementsByTagName("HTML")[0].removeEventListener("mousedown",T),document.getElementsByTagName("HTML")[0].removeEventListener("mousemove",B),document.getElementsByTagName("HTML")[0].removeEventListener("mouseup",C),document.getElementsByTagName("HTML")[0].removeEventListener("touchstart",T),document.getElementsByTagName("HTML")[0].removeEventListener("touchend",B),document.getElementsByTagName("HTML")[0].removeEventListener("touchmove",C)},w=function(){j=!1,document.getElementsByTagName("HTML")[0].addEventListener("mousedown",T),document.getElementsByTagName("HTML")[0].addEventListener("mousemove",B),document.getElementsByTagName("HTML")[0].addEventListener("mouseup",C),document.getElementsByTagName("HTML")[0].addEventListener("touchstart",T),document.getElementsByTagName("HTML")[0].addEventListener("touchend",B),document.getElementsByTagName("HTML")[0].addEventListener("touchmove",C)},I=null,M=function(e){clearInterval(I),I=setInterval((function(){if(!0!==j)clearInterval(I);else{var t=document.getElementById("wrapper"),n=e.target.value,l="".concat(n,"px");t.style.perspective=l}}),5),console.log("isSliderClicked: ",j)};document.getElementById("slider").addEventListener("mousedown",O),document.getElementById("slider").addEventListener("mouseup",w),document.getElementById("slider").addEventListener("mousemove",M),document.getElementById("slider").addEventListener("touchstart",O),document.getElementById("slider").addEventListener("touchend",w),document.getElementById("slider").addEventListener("touchmove",M),document.getElementById("slider").addEventListener("click",(function(e){var t=document.getElementById("wrapper"),n=e.target.value,l="".concat(n,"px");t.style.perspective=l})),document.getElementsByTagName("HTML")[0].addEventListener("click",(function(){console.log(document.getElementsByClassName("cube")[0].style.transform)})),document.getElementsByTagName("HTML")[0].addEventListener("mousedown",T),document.getElementsByTagName("HTML")[0].addEventListener("mousemove",B),document.getElementsByTagName("HTML")[0].addEventListener("mouseup",C),document.getElementsByTagName("HTML")[0].addEventListener("touchstart",T),document.getElementsByTagName("HTML")[0].addEventListener("touchmove",B),document.getElementsByTagName("HTML")[0].addEventListener("touchend",C),c.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(h,{})}),document.getElementById("root")),b()}},[[17,1,2]]]);
//# sourceMappingURL=main.ca2b9962.chunk.js.map