(this["webpackJsonp03-drum-machine"]=this["webpackJsonp03-drum-machine"]||[]).push([[0],{30:function(n,e,t){},31:function(n,e,t){},40:function(n,e,t){"use strict";t.r(e);var r=t(3),o=t.n(r),c=t(19),i=t.n(c),a=(t(30),t(12)),s=t(1),u=(t(31),t(2)),l=t(5),d=t(21),p=t.n(d),b=t(20),x=t(7),f=function(n){return x.soundBanks.filter((function(e){return e.url===n}))[0]},m={Q:{1:!0,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!0,12:!1,13:!1,14:!1,15:!1,16:!1},W:{1:!0,2:!1,3:!1,4:!0,5:!1,6:!0,7:!1,8:!1,9:!1,10:!1,11:!0,12:!1,13:!0,14:!1,15:!1,16:!1},E:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},R:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},A:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},S:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!0,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!0,15:!1,16:!1},D:{1:!1,2:!0,3:!1,4:!1,5:!1,6:!1,7:!1,8:!0,9:!1,10:!0,11:!1,12:!1,13:!1,14:!1,15:!0,16:!1},F:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},Z:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},X:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},C:{1:!1,2:!1,3:!1,4:!0,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!0,13:!1,14:!1,15:!1,16:!1},V:{1:!0,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1}},j=f("nujabes"),h=function(n){return{bank:j,setBank:function(e){n((function(n){return Object(l.a)(Object(l.a)({},n),{},{bank:f(e)})}))},currentStep:0,setCurrentStep:function(e){return n((function(n){return Object(l.a)(Object(l.a)({},n),{},{currentStep:e})}))},display:"Drum Machine",setDisplay:function(e){return n((function(n){return Object(l.a)(Object(l.a)({},n),{},{display:e})}))},showFocus:!1,setShowFocus:function(e){return n((function(n){return Object(l.a)(Object(l.a)({},n),{},{showFocus:e})}))},power:!0,togglePower:function(){return n((function(n){return{power:!n.power,sequencerIsPlaying:!1}}))},sequencer:m,toggleSequencer:function(e){var t=e.button,r=e.step;n((function(n){n.sequencer[t][r]=!n.sequencer[t][r]}))},turnOffSequencer:function(e){var t=e.button,r=e.step;n((function(n){n.sequencer[t][r]=!1}))},sequencerBPM:92,setSequencerBPM:function(e){return n((function(n){return Object(l.a)(Object(l.a)({},n),{},{sequencerBPM:e})}))},sequencerIsPlaying:!1,toggleSequencerIsPlaying:function(){n((function(n){return{sequencerIsPlaying:!n.sequencerIsPlaying,currentStep:0}}))},volume:50,setVolume:function(e){return n((function(n){return Object(l.a)(Object(l.a)({},n),{},{volume:e})}))}}};h=Object(b.devtools)(h);var g,O,w,k,y,v,S,C,E,F,q,H,K,M,P,z,D,N,B,L,A,I,R,T,U,V,Q,X,J,W,Z,Y,G,$,_,nn,en,tn,rn,on,cn,an,sn,un,ln,dn,pn,bn,xn,fn,mn,jn,hn=h=p()(h),gn=t(0),On=Object(u.c)(g||(g=Object(s.a)(["\n  0%   { box-shadow: 0px 0px 12px 2px lightsalmon; }\n  50%  { box-shadow: 0px 0px 14px 3px salmon; }\n  100% { box-shadow: 0px 0px 12px 2px lightsalmon; }\n"]))),wn=u.b.div(O||(O=Object(s.a)(["\n  background-color: white;\n  border: 2px inset rgba(0, 0, 0, 0.4);\n  border-radius: 6px;\n  animation: "," 3s ease-out infinite;\n\n  &.off {\n    box-shadow: none;\n    animation: none;\n  }\n"])),On),kn=Object(u.c)(w||(w=Object(s.a)(["\n  0% { \n    color: #E1F1FF;\n    text-shadow: 2px 0 rgba(255, 0, 0, 0.9), -2px 0 rgba(0, 0, 255, 0.9),\n    1px 1px 2px white, 0 0 1em red, 0 0 0.2em blue;\n    background-color: #8C0000;\n  }\n  50% {\n    color: #FFE9E1;\n    text-shadow: 1px 0 rgba(255, 0, 0, 0.9), -1px 0 rgba(0, 0, 255, 0.9),\n    1px 1px 2px white, 0 0 1em red, 0 0 0.2em blue;\n    background-color: crimson;\n  }\n  100% {\n    color: #E1F1FF;\n    text-shadow: 2px 0 rgba(255, 0, 0, 0.9), -2px 0 rgba(0, 0, 255, 0.9),\n    1px 1px 2px white, 0 0 1em red, 0 0 0.2em blue;\n    background-color: #8C0000;\n  }\n"]))),yn=u.b.div(k||(k=Object(s.a)(['\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-family: "D7Mono";\n  font-size: 32px;\n  user-select: none;\n\n  ',"\n  animation: "," 3s ease-out infinite;\n\n  background-image: linear-gradient(\n      to top,\n      rgba(255, 255, 255, 0.2) 33.33333%,\n      rgba(255, 255, 255, 0.4) 33.33333%,\n      rgba(255, 255, 255, 0.4) 66.66666%,\n      rgba(255, 255, 255, 0.6) 66.66666%\n    ),\n    linear-gradient(\n      to right,\n      rgba(255, 0, 0, 0.7) 33.33333%,\n      rgba(0, 255, 0, 0.7) 33.33333%,\n      rgba(0, 255, 0, 0.7) 66.66666%,\n      rgba(0, 0, 255, 0.7) 66.66666%\n    );\n  background-size: 3px 3px;\n  mix-blend-mode: multiply;\n\n  &.off {\n    background-color: black;\n  }\n"])),"",kn),vn=function(){var n=hn((function(n){return n.display})),e=hn((function(n){return n.power}));return Object(gn.jsx)(wn,{className:e?null:"off",children:Object(gn.jsx)(yn,{className:e?null:"off",children:Object(gn.jsx)("div",{id:"display",children:e?n:null})})})},Sn=u.b.div(y||(y=Object(s.a)(["\n  color: #d1d1d1;\n  margin: 0;\n  font-family: 'Orbitron', sans-serif;\n  font-weight: 400;\n  font-size: 10px;\n  word-wrap: break-all;\n  user-select: none;\n\n  @media (max-width: 400px) {\n    font-size: 8px;\n  }\n"]))),Cn=u.b.div(v||(v=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),En=function(){var n=hn((function(n){return n.volume})),e=hn((function(n){return n.setVolume})),t=hn((function(n){return n.setDisplay})),o=hn((function(n){return n.showFocus})),c=Object(r.useCallback)((function(n){var r=function(n){return n<0?0:n>100?100:n}(n);t("Volume ".concat(String(r).padStart(3,"0"),"%")),e(r)}),[e,t]);return Object(r.useEffect)((function(){var e=function(e){"Y"===e.key.toUpperCase()&&c(n-1),"U"===e.key.toUpperCase()&&c(n+1)};return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}})),Object(gn.jsxs)(Cn,{children:[Object(gn.jsx)("input",{type:"range",min:0,max:100,value:n,onChange:function(n){return c(n.target.value)},className:"slider ".concat(!o&&"no-outline-on-focus"),id:"myRange"}),Object(gn.jsx)(Sn,{children:"Volume"})]})},Fn=t(8),qn=t(6),Hn=u.b.div(S||(S=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),Kn=u.b.div(C||(C=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  gap: 8px;\n"]))),Mn=u.b.button(E||(E=Object(s.a)(["\n  height: 32px;\n  width: 28px;\n  background-color: rgb(118, 118, 118);\n\n  border-radius: 4px;\n  border-style: outset;\n  border-color: rgba(255, 255, 255, 0.125);\n  border-width: 2px;\n\n  cursor: pointer;\n\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  &:hover {\n    background-color: rgba(215, 215, 215, 0.5);\n    box-shadow: 0px 0px 10px 5px rgba(215, 215, 215, 0.5);\n  }\n\n  &:disabled {\n    background-color: rgb(118, 118, 118);\n    box-shadow: none;\n    cursor: default;\n  }\n"]))),Pn=Object(u.b)(Fn.a)(F||(F=Object(s.a)(["\n  font-size: 18px;\n  color: rgb(80, 80, 80);\n  filter: drop-shadow(0px -1px 0px black);\n"]))),zn=u.b.select(q||(q=Object(s.a)(['\n  width: 100%;\n  color: rgb(209, 209, 209);\n  background-color: rgb(59, 59, 59);\n  border: 3px inset rgb(118, 118, 118);\n  font-family: "Orbitron", sans-serif;\n  border-radius: 4px;\n\n  &.off {\n    -webkit-appearance: none;\n    -moz-appearance: none;\n    color: transparent;\n  }\n']))),Dn=function(){var n=hn((function(n){return n.bank})),e=hn((function(n){return n.setBank})),t=hn((function(n){return n.power})),o=hn((function(n){return n.setDisplay})),c=hn((function(n){return n.showFocus})),i=Object(r.useCallback)((function(){var t=x.soundBanks.findIndex((function(e){return e===n})),r=0===t?x.soundBanks.length-1:t-1;e(x.soundBanks[r%x.soundBanks.length].url)}),[n,e]),a=Object(r.useCallback)((function(){var t=x.soundBanks.findIndex((function(e){return e===n}))+1;e(x.soundBanks[t%x.soundBanks.length].url)}),[n,e]);return Object(r.useEffect)((function(){o(n.name);var e=function(n){"H"===n.key.toUpperCase()&&t&&i(),"J"===n.key.toUpperCase()&&t&&a()};return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}}),[n,o,a,i,t]),Object(gn.jsxs)(Hn,{children:[Object(gn.jsxs)(Kn,{children:[Object(gn.jsx)(Mn,{onClick:i,className:!c&&"no-outline-on-focus",disabled:!t,children:Object(gn.jsx)(Pn,{icon:qn.a})}),Object(gn.jsx)(zn,{className:"".concat(!c&&"no-outline-on-focus"," ").concat(!t&&"off"),onChange:function(n){return function(n){e(n.target.value)}(n)},value:n.url,id:"bank-select",name:"bank",disabled:!t,children:Object.values(x.soundBanks).map((function(n){return Object(gn.jsx)("option",{value:n.url,children:n.name},n.url)}))}),Object(gn.jsx)(Mn,{onClick:a,className:!c&&"no-outline-on-focus",disabled:!t,children:Object(gn.jsx)(Pn,{icon:qn.b})})]}),Object(gn.jsx)(Sn,{children:"Sample Bank"})]})},Nn=u.b.div(H||(H=Object(s.a)(["\n  width: 100%;\n  height: 300px;\n  display: grid;\n  gap: 32px;\n  grid-template-rows 1fr 1fr;\n"]))),Bn=u.b.div(K||(K=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n"]))),Ln=function(){return Object(gn.jsxs)(Nn,{children:[Object(gn.jsx)(vn,{}),Object(gn.jsxs)(Bn,{children:[Object(gn.jsx)(En,{}),Object(gn.jsx)(Dn,{})]})]})},An=u.b.button(M||(M=Object(s.a)(["\n  height: 48px;\n  width: 48px;\n  background: conic-gradient(\n    #d7d7d7,\n    #c3c3c3,\n    #cccccc,\n    #c6c6c6,\n    #d7d7d7,\n    #c3c3c3,\n    #cccccc,\n    #c6c6c6,\n    #d7d7d7,\n    #c3c3c3,\n    #cccccc,\n    #c6c6c6,\n    #d7d7d7,\n    #c3c3c3,\n    #cccccc,\n    #c6c6c6,\n    #d7d7d7\n  );\n  border-radius: 100%;\n  border: 3px solid;\n  border-color: #888888;\n  color: black;\n  cursor: pointer;\n\n  &.on {\n    border-color: red;\n    color: red;\n\n    box-shadow: 0px 0px 5px 1px #ffa98f;\n  }\n"]))),In=Object(u.b)(Fn.a)(P||(P=Object(s.a)(["\n  font-size: 24px;\n"]))),Rn=function(){var n=hn((function(n){return n.power})),e=hn((function(n){return n.togglePower})),t=hn((function(n){return n.setCurrentStep})),o=hn((function(n){return n.showFocus})),c=new Audio("/drum-machine/sounds/buttons/switch-on.mp3"),i=new Audio("/drum-machine/sounds/buttons/switch-off.mp3"),a=function(){n?(t(0),i.play()):c.play(),e()};return Object(r.useEffect)((function(){var n=function(n){"O"===n.key.toUpperCase()&&a()};return document.addEventListener("keydown",n),function(){document.removeEventListener("keydown",n)}})),Object(gn.jsx)(An,{onClick:a,className:"".concat(n&&"on"," ").concat(!o&&"no-outline-on-focus"),children:Object(gn.jsx)(In,{icon:qn.e})})},Tn=u.b.h1(z||(z=Object(s.a)(['\n  color: #d1d1d1;\n  margin: 0;\n  font-family: "Orbitron", sans-serif;\n  font-weight: 700;\n  text-shadow: 0px -2px 0px #000, 0px 1px 1px #666;\n  user-select: none;\n\n  @media (max-width: 279px) {\n    font-size: 24px;\n  }\n']))),Un=u.b.span(D||(D=Object(s.a)(["\n  color: #ff0000;\n"]))),Vn=function(){return Object(gn.jsxs)(Tn,{children:[Object(gn.jsx)(Un,{children:"FCC"}),"3000"]})},Qn=u.b.div(N||(N=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: space-between;\n\n  @media (max-width: 650px) {\n    justify-content: flex-start;\n    gap: 16px;\n  }\n\n  @media (max-width: 319px) {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n"]))),Xn=function(){return Object(gn.jsxs)(Qn,{children:[Object(gn.jsx)(Rn,{}),Object(gn.jsx)(Vn,{})]})},Jn=u.b.div(B||(B=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n"]))),Wn=Object(u.b)(Sn)(L||(L=Object(s.a)(["\n  user-select: none;\n\n  @media (max-width: 400px) {\n    display: none;\n  }\n"]))),Zn=function(n){var e=n.labelText,t=n.triggerKey;return Object(gn.jsxs)(Jn,{children:[Object(gn.jsx)(Sn,{children:e}),Object(gn.jsx)(Wn,{children:t})]})},Yn=function(n){var e=n.triggerKey,t=n.volume;if(hn.getState().power)try{var r=document.querySelector("#pad-".concat(e));r.pause(),r.currentTime=0,r.volume=t/100,r.play();var o=document.querySelector("#drum-pad-".concat(e));o.classList.add("hit"),setTimeout((function(){o.classList.remove("hit")}),200)}catch(c){console.log("Failed to play..."+c)}},Gn=u.b.div(A||(A=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),$n=u.b.button(I||(I=Object(s.a)(["\n  ","\n  width: 120px;\n  height: 80px;\n  margin: auto;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgb(118, 118, 118);\n  cursor: pointer;\n\n  ","\n  border-radius: 8px;\n  border-style: outset;\n  border-color: rgba(255, 255, 255, 0.125);\n  border-width: 2px;\n\n  ","\n  color: transparent;\n\n  transition: 200ms;\n\n  &:hover {\n    background-color: rgba(215, 215, 215, 0.5);\n    box-shadow: 0px 0px 10px 5px rgba(215, 215, 215, 0.5);\n  }\n\n  &.hit {\n    background-color: salmon;\n    box-shadow: 0px 0px 10px 5px salmon;\n    transition: 0ms;\n    z-index: 1;\n  }\n\n  @media (max-width: 650px) {\n    width: 100%;\n    height: 0px;\n    padding-top: 67%;\n  }\n\n  &:disabled {\n    box-shadow: none;\n    background-color: rgb(118, 118, 118);\n    cursor: default;\n  }\n"])),"","",""),_n=function(n){var e=n.triggerKey,t=Object(r.useState)(""),o=Object(a.a)(t,2),c=o[0],i=o[1],s=hn((function(n){return n.power})),u=hn((function(n){return n.bank})),l=hn((function(n){return n.setDisplay})),d=hn((function(n){return n.volume})),p=hn((function(n){return n.showFocus})),b=Object(r.useRef)(),x=Object(r.useRef)();return Object(r.useEffect)((function(){i("/drum-machine"+"/sounds/".concat(u.url,"/").concat(u.pads[e].file))}),[u,e,d,l]),Object(gn.jsxs)(Gn,{children:[Object(gn.jsx)($n,{ref:b,className:!p&&"no-outline-on-focus",id:"drum-pad-".concat(e),onClick:function(){c?(l(u.pads[e].name),Yn({triggerKey:e,volume:d})):console.log("file not yet loaded")},disabled:!s,children:c?Object(gn.jsx)("audio",{preload:"auto",ref:x,className:"clip",id:"pad-".concat(e),src:c,children:"Your browser does not support HTML5 audio"}):null}),Object(gn.jsx)(Zn,{triggerKey:e,labelText:u.pads[e].name})]})},ne=["Q","W","E","R","A","S","D","F","Z","X","C","V"],ee=u.b.div(R||(R=Object(s.a)(["\n  display: grid;\n  grid-template-columns: repeat(4, 120px);\n  gap: 16px;\n  align-items: start;\n\n  @media (max-width: 650px) {\n    grid-template-columns: repeat(4, 1fr);\n    width: 100%;\n  }\n\n  @media (max-width: 400px) {\n    gap: 8px;\n  }\n"]))),te=function(){var n=hn((function(n){return n.bank})),e=hn((function(n){return n.setDisplay})),t=hn((function(n){return n.volume}));return Object(r.useEffect)((function(){var r=function(r){var o=r.key.toUpperCase();ne.includes(o)&&(e(n.pads[o].name),Yn({triggerKey:o,volume:t}))};return document.addEventListener("keypress",r),function(){document.removeEventListener("keypress",r)}}),[n,e,t]),Object(gn.jsx)(ee,{children:ne.map((function(n,e){return Object(gn.jsx)(_n,{triggerKey:n},"pad-".concat(n))}))})},re=u.b.div(T||(T=Object(s.a)(["\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n"]))),oe=u.b.div(U||(U=Object(s.a)(["\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 32px;\n  justify-content: space-between;\n"]))),ce=function(){return Object(gn.jsxs)(re,{children:[Object(gn.jsxs)(Xn,{children:[Object(gn.jsx)(Rn,{}),Object(gn.jsx)(Vn,{})]}),Object(gn.jsxs)(oe,{children:[Object(gn.jsx)(Ln,{}),Object(gn.jsx)(te,{})]})]})},ie=u.b.div(V||(V=Object(s.a)(['\n  display: grid;\n  grid-template-areas:\n    "settings-row-title settings-row-toggle"\n    "settings-row-description settings-row-toggle";\n  column-gap: 8px;\n']))),ae=u.b.h3(Q||(Q=Object(s.a)(["\n  margin: 0;\n"]))),se=u.b.div(X||(X=Object(s.a)(["\n  color: grey;\n  grid-area: settings-row-description;\n  margin: 0;\n"]))),ue=u.b.input(J||(J=Object(s.a)(["\n  opacity: 0;\n  width: 0;\n  height: 0;\n"]))),le=u.b.label(W||(W=Object(s.a)(["\n  position: relative;\n  display: inline-block;\n  width: 60px;\n  height: 34px;\n\n  justify-self: end;\n  align-self: center;\n\n  &:focus-within {\n    outline: 1px dotted #212121;\n    outline: 5px auto -webkit-focus-ring-color;\n  }\n"]))),de=u.b.span(Z||(Z=Object(s.a)(['\n  position: absolute;\n  cursor: pointer;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #ccc;\n  -webkit-transition: 0.1s;\n  transition: 0.1s;\n  border-radius: 34px;\n\n  &:before {\n    position: absolute;\n    content: "";\n    height: 26px;\n    width: 26px;\n    left: 4px;\n    bottom: 4px;\n    background-color: white;\n    -webkit-transition: 0.1s;\n    transition: 0.1s;\n    border-radius: 50%;\n  }\n\n  ',":checked + & {\n    background-color: #2196f3;\n  }\n\n  ",":focus + & {\n    box-shadow: 0 0 1px #2196f3;\n  }\n\n  ",":checked + &:before {\n    -webkit-transform: translateX(26px);\n    -ms-transform: translateX(26px);\n    transform: translateX(26px);\n  }\n"])),ue,ue,ue),pe=function(n){var e=n.title,t=n.description,r=n.value,o=n.onClick,c=hn((function(n){return n.showFocus}));return Object(gn.jsxs)(ie,{children:[Object(gn.jsx)(ae,{children:e}),Object(gn.jsx)(se,{children:t}),Object(gn.jsxs)(le,{className:"switch settings-row-toggle ".concat(!c&&"no-outline-on-focus-within"),children:[Object(gn.jsx)(ue,{type:"checkbox",checked:r,onChange:o}),Object(gn.jsx)(de,{className:"slider round"})]})]})},be=u.b.div(Y||(Y=Object(s.a)(["\n  width: 100vw;\n  height: 100vh;\n  position: absolute;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background-color: rgba(0, 0, 0, 0.75);\n  z-index: 9;\n"]))),xe=u.b.div(G||(G=Object(s.a)(["\n  max-width: 480px;\n  background-color: white;\n  padding: 16px;\n  border-radius: 8px;\n  margin: 16px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n"]))),fe=u.b.div($||($=Object(s.a)(["\n  padding: 0 16px;\n  display: flex;\n  flex-direction: column;\n"]))),me=u.b.button(_||(_=Object(s.a)(["\n  width: 100%;\n  padding: 16px;\n  cursor: pointer;\n  font-size: 16px;\n"]))),je=function(n){var e=n.closeModal,t=hn((function(n){return n.showFocus})),o=hn((function(n){return n.setShowFocus})),c=function(n){27===n.keyCode&&e()};return Object(r.useEffect)((function(){return document.addEventListener("keydown",c,!1),function(){document.removeEventListener("keydown",c,!1)}})),Object(gn.jsx)(be,{onClick:function(){return e()},children:Object(gn.jsxs)(xe,{onClick:function(n){return n.stopPropagation()},children:[Object(gn.jsxs)(fe,{children:[Object(gn.jsx)("h1",{children:"FCC3000 Drum Machine"}),Object(gn.jsxs)("div",{children:[Object(gn.jsx)("h3",{children:"Shortcuts"}),Object(gn.jsxs)("ul",{children:[Object(gn.jsx)("li",{children:"O - Turn power on / off"}),Object(gn.jsx)("li",{children:"Q-R, A-F, Z-V - play sounds"}),Object(gn.jsx)("li",{children:"Z, U - decrease / increase volume"}),Object(gn.jsx)("li",{children:"H, J - change sample bank"}),Object(gn.jsx)("li",{children:"N, M - decrease / increase BPM"}),Object(gn.jsx)("li",{children:"I - open / close info menu"}),Object(gn.jsx)("li",{children:"P - start / stop sequencer"})]})]}),Object(gn.jsx)(pe,{title:"Focus Indicator",description:"Disabling this setting will disable the visual focus indicator on clickable elements. This improves aesthetics of the app, at the expense of accessibility. Regardless of settings, the button to open this menu and all elements within this menu will always remain accessible.",value:t,onClick:function(){return o(!t)}}),Object(gn.jsxs)("p",{children:["View the code for this project on"," ",Object(gn.jsx)("a",{href:"https://github.com/c-ehrlich/drum-machine",children:"Github"}),"."]}),Object(gn.jsx)("p",{children:"This app does not yet work properly in Safari because it implements html5 audio differently from all other browsers in some bizarre ways. A full rewrite using the WebAudio API is coming... at some point... maybe..."})]}),Object(gn.jsx)(me,{onClick:function(){return e()},children:"Close"})]})})},he=u.b.button(nn||(nn=Object(s.a)(["\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  margin: 8px;\n  width: 32px;\n  height: 32px;\n  font-size: 16px;\n  cursor: pointer;\n  background: none;\n  border-style: outset;\n  border-color: rgba(255, 255, 255, 0.125);\n  border-width: 2px;\n  border-radius: 100%;\n  background-color: white;\n  color: black;\n\n  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.5);\n\n  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);\n\n  &:hover {\n    top: 10px;\n    box-shadow: 0 8px 10px rgba(0, 0, 0, 0.5), 0 8px 15px rgba(0, 0, 0, 0.2);\n  }\n\n"]))),ge=function(n){var e=n.openModal;return Object(gn.jsx)(he,{onClick:e,children:Object(gn.jsx)(Fn.a,{icon:qn.c})})},Oe=t(25),we=u.b.button(en||(en=Object(s.a)(["\n  height: 32px;\n  width: 100%;\n  background-color: rgb(118, 118, 118);\n  border-radius: 4px;\n  border-style: outset;\n  border-color: rgba(255, 255, 255, 0.125);\n  border-width: 2px;\n  cursor: pointer;\n\n  transition: 0ms;\n\n  &:hover {\n    background-color: rgba(215, 215, 215, 0.5);\n    box-shadow: 0px 0px 10px 5px rgba(215, 215, 215, 0.5);\n    z-index: 1;\n  }\n\n  &.play {\n    background-color: red;\n    box-shadow: 0px 0px 10px 5px red;\n    transition: 200ms;\n    z-index: 4;\n  }\n\n  &.hit {\n    background-color: rgb(215, 215, 215);\n    box-shadow: 0px 0px 6px 3px rgb(215, 215, 215);\n    transition: 0ms;\n    z-index: 2;\n  }\n\n  &.pass {\n    background-color: salmon;\n    box-shadow: 0px 0px 10px 5px salmon;\n    transition: 500ms;\n    z-index: 3;\n  }\n\n  &.pass:hover {\n    transition: 100ms;\n    box-shadow: 0px 0px 12px 6px salmon;\n    z-index: 3;\n  }\n\n  &:disabled {\n    box-shadow: none;\n    background-color: rgb(118, 118, 118);\n    cursor: default;\n  }\n\n  @media (max-width: 550px) {\n    width: 100%;\n  }\n"]))),ke=function(n){var e=n.button,t=n.step,o=hn((function(n){return n.power})),c=hn((function(n){return n.sequencer[e][t]})),i=hn((function(n){return n.toggleSequencer})),a=hn((function(n){return n.currentStep})),s=hn((function(n){return n.volume})),u=hn((function(n){return n.showFocus}));Object(r.useEffect)((function(){c&&a===t&&Yn({triggerKey:e,volume:s})}),[c,e,t,a,s]);return Object(gn.jsx)(we,{disabled:!o,onClick:function(){i({button:e,step:t})},className:"".concat(a===t?c?"play":"hit":c?"pass":null," ").concat(!u&&"no-outline-on-focus")})},ye=u.b.div(tn||(tn=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),ve=function(){var n=hn((function(n){return n.setDisplay})),e=hn((function(n){return n.sequencerBPM})),t=hn((function(n){return n.setSequencerBPM})),o=hn((function(n){return n.showFocus})),c=Object(r.useCallback)((function(e){t(e),n("".concat(String(e).padStart(3,"0")," bpm"))}),[n,t]);return Object(r.useEffect)((function(){var n=function(n){"N"===n.key.toUpperCase()&&e>50&&c(e-1),"M"===n.key.toUpperCase()&&e<180&&c(e+1)};return document.addEventListener("keypress",n),function(){document.removeEventListener("keypress",n)}}),[e,c]),Object(gn.jsxs)(ye,{children:[Object(gn.jsx)("input",{type:"range",min:50,max:180,value:e,onChange:function(n){return c(n.target.value)},className:"slider ".concat(!o&&"no-outline-on-focus"),id:"myRange"}),Object(gn.jsx)(Sn,{children:"Sequencer BPM"})]})},Se=u.b.button(rn||(rn=Object(s.a)(["\n  background-color: rgb(118, 118, 118);\n  width: 54px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  border-radius: 8px;\n  border-style: outset;\n  border-color: rgba(255, 255, 255, 0.125);\n\n  cursor: pointer;\n\n  &:hover {\n    background-color: rgba(215, 215, 215, 0.5);\n    box-shadow: 0px 0px 10px 5px rgba(215, 215, 215, 0.5);\n  }\n\n  &.playing {\n    background-color: salmon;\n    box-shadow: 0px 0px 10px 5px salmon;\n  }\n\n  &.playing:hover {\n    box-shadow: 0px 0px 12px 6px salmon;\n  }\n\n  &:disabled {\n    box-shadow: none;\n    background-color: rgb(118, 118, 118);\n    cursor: default;\n  }\n"]))),Ce=Object(u.b)(Fn.a)(on||(on=Object(s.a)(["\n  color: rgb(80, 80, 80);\n  cursor: pointer;\n  font-size: 24px;\n  filter: drop-shadow(0px -1px 0px black);\n\n  &:hover {\n    color: rgb(80, 80, 80);\n    filter: drop-shadow(0px -1px 0px black);\n  }\n\n  &.playing {\n    color: indianred;\n    filter: drop-shadow(0px -1px 0px firebrick);\n  }\n\n  &.disabled {\n    cursor: default;\n  }\n"]))),Ee=function(){var n=hn((function(n){return n.sequencerIsPlaying})),e=hn((function(n){return n.showFocus})),t=hn((function(n){return n.power})),o=hn((function(n){return n.toggleSequencerIsPlaying}));return Object(r.useEffect)((function(){var n=function(n){"P"===n.key.toUpperCase()&&t&&o()};return document.addEventListener("keypress",n),function(){document.removeEventListener("keypress",n)}}),[o,t]),Object(gn.jsx)(Se,{onClick:function(){o()},className:"".concat(n&&"playing"," ").concat(!e&&"no-outline-on-focus"),disabled:!t,children:Object(gn.jsx)(Ce,{icon:qn.d,className:"".concat(n&&"playing"," ").concat(!t&&"disabled")})})},Fe=u.b.div(cn||(cn=Object(s.a)(["\n  width: 528px;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  ","\n  gap: 25px;\n\n  @media (max-width: 650px) {\n    width: 100%;\n  }\n"])),""),qe=u.b.div(an||(an=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  gap: 32px;\n\n  @media (max-width: 650px) {\n    gap: 16px;\n  }\n"]))),He=u.b.div(sn||(sn=Object(s.a)(["\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  gap: 8px;\n"]))),Ke=u.b.div(un||(un=Object(s.a)(["\n  width: 100%;\n  display: flex;\n  gap: 16px;\n  flex-direction: row;\n  align-items: center;\n"]))),Me=u.b.div(ln||(ln=Object(s.a)(["\n  width: 100%;\n  ",'\n  display: grid;\n  grid-template-columns: auto min-content;\n  grid-template-areas:\n    "pads   delete"\n    "label  .";\n  column-gap: 16px;\n  row-gap: 0;\n\n  @media (max-width: 374px) {\n    column-gap: 8px;\n  }\n'])),""),Pe=u.b.div(dn||(dn=Object(s.a)(["\n  width: 100%;\n  display: grid;\n  grid-template-columns: repeat(16, 1fr);\n  justify-content: space-between;\n  column-gap: 8px;\n\n  @media (max-width: 550px) {\n    grid-template-columns: repeat(8, 1fr);\n    row-gap: 8px;\n  }\n\n  @media (max-width: 300px) {\n    column-gap: 4px;\n  }\n"]))),ze=u.b.button(pn||(pn=Object(s.a)(["\n  background-color: transparent;\n  margin: 0;\n  padding: 0;\n  border: 0;\n"]))),De=Object(u.b)(Fn.a)(bn||(bn=Object(s.a)(["\n  color: rgb(118, 118, 118);\n  font-size: 24px;\n  cursor: pointer;\n  ","\n  ","\n\n  &:hover {\n    color: rgb(215, 215, 215);\n  }\n\n  &.disabled {\n    color: rgb(118, 118, 118);\n    cursor: default;\n  }\n"])),"",""),Ne=function(){var n=hn((function(n){return n.bank})),e=hn((function(n){return n.currentStep})),t=hn((function(n){return n.setCurrentStep})),o=hn((function(n){return n.sequencer})),c=hn((function(n){return n.sequencerBPM})),i=hn((function(n){return n.sequencerIsPlaying})),a=hn((function(n){return n.turnOffSequencer})),s=hn((function(n){return n.power})),u=hn((function(n){return n.showFocus}));Object(r.useEffect)((function(){var n=setInterval((function(){s&&i&&t(e<=0||e>=16?1:e+1)}),1e3/c*15);return function(){return clearInterval(n)}}),[e,t,c,i,s]);return Object(gn.jsxs)(Fe,{children:[Object(gn.jsxs)(qe,{children:[Object(gn.jsx)(ve,{}),Object(gn.jsx)(Ee,{})]}),Object(gn.jsx)(He,{children:ne.map((function(e){return Object(gn.jsxs)(Me,{children:[Object(gn.jsx)(Ke,{children:Object(gn.jsx)(Pe,{children:Object(Oe.a)(Array(16).keys()).map((function(n){return Object(gn.jsx)(ke,{button:e,step:n+1},"sequencer-".concat(e,"-").concat(n+1))}))})}),Object(gn.jsx)(ze,{disabled:!s,onClick:function(){return function(n){Object.keys(o[n]).forEach((function(e){a({button:n,step:e})}))}(e)},className:"slider ".concat(!u&&"no-outline-on-focus"),children:Object(gn.jsx)(De,{icon:qn.f,className:!s&&"disabled"})}),Object(gn.jsx)(Sn,{children:n.pads[e].name},"sequencer-".concat(e))]},"sequencer-block-".concat(e))}))})]})},Be=u.b.div(xn||(xn=Object(s.a)(["\n  margin: 16px;\n  background-image: url(",");\n  background-size: cover;\n  box-shadow: 0px 0px 15px 3px black;\n\n  @media (max-width: 650px) {\n    width: 100%;\n    margin: 0;\n    background-image: none;\n    box-shadow: none;\n  }\n"])),"/drum-machine/images/wood2.jpg"),Le=u.b.div(fn||(fn=Object(s.a)(["\n  background-color: #333333;\n  background-image: linear-gradient(\n    to right bottom,\n    rgb(17, 17, 17) 12.5%,\n    rgb(67, 67, 67) 25%,\n    rgb(17, 17, 17) 50%,\n    rgb(67, 67, 67) 75%,\n    rgb(17, 17, 17) 100%\n  );\n  padding: 32px;\n  margin: 0 32px;\n\n  display: flex;\n  flex-direction: row;\n  gap: 64px;\n\n  @media (max-width: 1280px) {\n    flex-direction: column;\n  }\n\n  @media (max-width: 650px) {\n    width: 100% !important;\n    margin: 0;\n    padding: 16px;\n    box-sizing: border-box;\n  }\n\n  @media (max-width: 374px) {\n    padding: 8px;\n  }\n"]))),Ae=function(n){return Object(gn.jsx)(Be,{children:Object(gn.jsx)(Le,{children:n.children})})},Ie=t.p+"static/media/D7Mono.cea5d881.woff",Re=t.p+"static/media/D7Mono.aaf571fa.woff2",Te=Object(u.a)(mn||(mn=Object(s.a)(["\n  @font-face {\n    font-family: 'D7Mono';\n    src: local('D7 Mono '), local('D7 Mono '),\n    url(",") format('woff2'),\n    url(",") format('woff');\n    font-weight: 300;\n    font-style: normal;\n  }\n"])),Re,Ie),Ue=u.b.div(jn||(jn=Object(s.a)(["\n  min-height: 100vh;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  background-color: grey;\n  background-image: url(",");\n  background-size: cover;\n  gap: 0px;\n\n  &.modalOpen {\n    bottom: 0;\n    left: 0;\n    position: fixed;\n    right: 0;\n    top: 0;\n  }\n"])),"/drum-machine/images/wood1.jpg");var Ve=function(){var n=Object(r.useState)(!1),e=Object(a.a)(n,2),t=e[0],o=e[1];return Object(r.useEffect)((function(){var n=function(n){"I"===n.key.toUpperCase()&&o(!t)};return document.addEventListener("keypress",n),function(){document.removeEventListener("keypress",n)}})),Object(gn.jsxs)(Ue,{className:"App ".concat(t&&"modalOpen"),children:[Object(gn.jsx)(Te,{}),Object(gn.jsx)(ge,{openModal:function(){return o(!0)}}),t&&Object(gn.jsx)(je,{closeModal:function(){return o(!1)}}),Object(gn.jsxs)(Ae,{children:[Object(gn.jsx)(ce,{}),Object(gn.jsx)(Ne,{})]})]})};i.a.render(Object(gn.jsx)(o.a.StrictMode,{children:Object(gn.jsx)(Ve,{})}),document.getElementById("root"))},7:function(n){n.exports=JSON.parse('{"soundBanks":[{"name":"Nujabes","url":"nujabes","pads":{"Q":{"name":"Kick 1","file":"kick1.mp3"},"W":{"name":"Kick 2","file":"kick7.mp3"},"E":{"name":"Kick 3","file":"kick8.mp3"},"R":{"name":"Snare 1","file":"snare1.mp3"},"A":{"name":"Snare 2","file":"snare6.mp3"},"S":{"name":"Snare 3","file":"snare7.mp3"},"D":{"name":"High Hat 1","file":"highhat3.mp3"},"F":{"name":"High Hat 2","file":"highhat4.mp3"},"Z":{"name":"Open Hi Hat 1","file":"openhighhat1.mp3"},"X":{"name":"Open Hi Hat 2","file":"openhighhat2.mp3"},"C":{"name":"Percussion 1","file":"percussion1.mp3"},"V":{"name":"Percussion 2","file":"percussion4.mp3"}}},{"name":"MF Doom","url":"doom","pads":{"Q":{"name":"James","file":"James Hit.mp3"},"W":{"name":"Kick 1","file":"Kick (Fancy Clown).mp3"},"E":{"name":"Kick 2","file":"Kick (Doomsday).mp3"},"R":{"name":"Snare 1","file":"Snare (Go With The Flow).mp3"},"A":{"name":"Snare 2","file":"Snare (Doomsday).mp3"},"S":{"name":"Snare 3","file":"Snare (Figaro).mp3"},"D":{"name":"Hi Hat","file":"HiHat (Doomsday).mp3"},"F":{"name":"Rim","file":"Rim.mp3"},"Z":{"name":"Keys","file":"Keys.mp3"},"X":{"name":"Shoryuken","file":"Shoryuken.mp3"},"C":{"name":"Shaker","file":"SHAKER II.mp3"},"V":{"name":"Vox","file":"hip hop.mp3"}}},{"name":"Tyler The Creator","url":"tyler","pads":{"Q":{"name":"Horn","file":"Horn Hit.mp3"},"W":{"name":"Kick 1","file":"Kick (YONKERS).mp3"},"E":{"name":"Kick 2","file":"Loiter Squad Kick.mp3"},"R":{"name":"Snare 1","file":"EARFQUAKE Snare.mp3"},"A":{"name":"Snare 2","file":"Pharrell Snare.mp3"},"S":{"name":"Clap","file":"EARFQUAKE Reverb Clap.mp3"},"D":{"name":"Hat","file":"Tyler HH.mp3"},"F":{"name":"Hi Tom","file":"Hi Tom (See You Again).mp3"},"Z":{"name":"Tron","file":"Tron Cat Cowbell.mp3"},"X":{"name":"Four","file":"FOOR.mp3"},"C":{"name":"Yonk","file":"Hit (Yonkers).mp3"},"V":{"name":"Nikes","file":"frank ocean nikes sound.mp3"}}}]}')}},[[40,1,2]]]);
//# sourceMappingURL=main.60f445e3.chunk.js.map