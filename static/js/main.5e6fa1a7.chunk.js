(this["webpackJsonpreact-tictactoe"]=this["webpackJsonpreact-tictactoe"]||[]).push([[0],{17:function(n,e,t){n.exports=t(24)},24:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),i=t(8),c=t.n(i),o=t(14),u=t(5),l=t(9),s=t(10),d=t(15),f=t(16),b=t(1),v=t(2);function m(){var n=Object(b.a)(["\n html {\n    font-family: 'Lato', 'Lucida Grande', 'Lucida Sans Unicode', Tahoma, Sans-Serif;\n    line-height: 1.5;\n    font-size: 15px;\n    font-weight: 400:\n  }\n\n  body {\n    padding: 0;\n    margin: 0;\n  }\n\n  *, *:before, *:after {\n    box-sizing: border-box;\n  }\n\n  h1 {\n    font-size: 1.2rem;\n  }\n"]);return m=function(){return n},n}var p=Object(v.a)(m()),h=function(){return a.a.createElement(p,null)};function g(){var n=Object(b.a)(["\n  width: 3rem;\n  height: 3rem;\n  font-size: 2rem;\n  text-align: center;\n  border-right: 1px solid black;\n  &:hover {\n    cursor: pointer;\n  }\n  &:last-child {\n    border-right: 0;\n  }\n"]);return g=function(){return n},n}function x(){var n=Object(b.a)(["\n  display: flex;\n  border-bottom: 1px solid black;\n  &:last-child {\n    border-bottom: 0;\n  }\n"]);return x=function(){return n},n}function j(){var n=Object(b.a)(["\n  border: 1px solid black;\n"]);return j=function(){return n},n}var k=v.b.div(j()),w=v.b.div(x()),O=v.b.div(g()),E=function(n){var e=n.board,t=n.index,r=n.onClick;return a.a.createElement(w,null,new Array(3).fill("").map((function(n,i){var c=3*(t-1)+i;return a.a.createElement(O,{key:c,onClick:function(){return r(c)}},e[c])})))},y=function(n){var e=n.board,t=n.onClick;return a.a.createElement(k,null,a.a.createElement(E,{board:e,index:1,onClick:t}),a.a.createElement(E,{board:e,index:2,onClick:t}),a.a.createElement(E,{board:e,index:3,onClick:t}))};function C(){var n=Object(b.a)(["\n  padding: 8px 16px;\n  font-size: 1.2rem;\n  font-weight: bold;\n  border-bottom: ",";\n"]);return C=function(){return n},n}function T(){var n=Object(b.a)(["\n  display: flex;\n  justify-content: center;\n"]);return T=function(){return n},n}var S=v.b.div(T()),z=v.b.div(C(),(function(n){return n.isTurn?"3px solid black":"0"})),L=function(n){var e=n.turns,t=n.turn;return a.a.createElement(S,null,e.map((function(n){var e=n===t;return a.a.createElement(z,{key:n,isTurn:e},n)})))};function R(){var n=Object(b.a)(["\n  text-align: center;\n  padding: 8px;\n"]);return R=function(){return n},n}function A(){var n=Object(b.a)(["\n  display: inline-block;\n  text-align: center;\n  font-weight: bold;\n  border: 3px solid black;\n  border-radius: 6px;\n  font-weight: bold;\n  padding: 4px 16px;\n  &:hover {\n    background: black;\n    color: white;\n    cursor: pointer;\n  }\n"]);return A=function(){return n},n}function B(){var n=Object(b.a)(["\n  padding: 16px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n"]);return B=function(){return n},n}function J(){var n=Object(b.a)([""]);return J=function(){return n},n}function W(){var n=Object(b.a)(["\n  text-align: center;\n"]);return W=function(){return n},n}function G(){var n=Object(b.a)(["\n  padding: 16px;\n"]);return G=function(){return n},n}function I(){var n=Object(b.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 100vh;\n"]);return I=function(){return n},n}var M=v.b.div(I()),U=v.b.div(G()),$=v.b.h1(W()),q=v.b.div(J()),D=v.b.div(B()),F=v.b.a(A()),H=v.b.div(R()),K=Object.freeze({circle:"\u25cb",crosse:"\xd7"}),N=Object.freeze({processing:"processing",win:"win",draw:"draw"}),P={winner:null,turn:K.circle,processing:!0,statusText:N.processing,handCount:0,isCircleTurn:!0,board:new Array(9)},Q=function(n,e,t){for(var r=t-t%3,a=r;a<r+3;a++)if(n[a]!==e)return!1;return!0},V=function(n,e,t){for(var r=t,a=0;a<3;a++){if(n[r]!==e)return!1;r=(r+3)%9}return!0},X=function(n,e,t){return!![0,2,4,6,8].includes(t)&&([0,4,8].every((function(t){return n[t]===e}))||[2,4,6].every((function(t){return n[t]===e})))},Y=function(n){Object(f.a)(t,n);var e=Object(d.a)(t);function t(n){var r;return Object(l.a)(this,t),(r=e.call(this,n)).onRestart=function(){r.setState(Object(u.a)({},P))},r.onClick=function(n){var e=r.state,t=e.board,a=e.handCount,i=e.processing,c=e.turn;if(!t[n]&&i){var u=Object(o.a)(t);u[n]=c,r.setState({board:u,handCount:a,turn:c===K.circle?K.crosse:K.circle}),!function(n,e,t){return[Q,V,X].some((function(r){return r(n,e,t)}))}(u,c,n)?function(n){return n.every((function(n){return n}))}(u)&&r.setState({processing:!1,statusText:N.draw}):r.setState({processing:!1,winner:c,statusText:c+" "+N.win})}},r.state=Object(u.a)({},P),r}return Object(s.a)(t,[{key:"render",value:function(){var n=this.state,e=n.turn,t=n.board,r=n.statusText;return a.a.createElement(M,null,a.a.createElement(q,null,a.a.createElement(h,null),a.a.createElement(U,null,a.a.createElement($,null,"Tic Tac Toe"),a.a.createElement(L,{turns:Object.values(K),turn:e})),a.a.createElement(y,{board:t,onClick:this.onClick}),a.a.createElement(D,null,a.a.createElement(H,null,r),a.a.createElement(F,{onClick:this.onRestart},"Restart"))))}}]),t}(a.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(Y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(n){n.unregister()})).catch((function(n){console.error(n.message)}))}},[[17,1,2]]]);
//# sourceMappingURL=main.5e6fa1a7.chunk.js.map