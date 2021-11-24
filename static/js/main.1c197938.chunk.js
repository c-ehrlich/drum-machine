(this["webpackJsonp03-drum-machine"]=this["webpackJsonp03-drum-machine"]||[]).push([[0],{15:function(e){e.exports=JSON.parse('{"Q":-1.5,"W":-1,"E":2,"R":2,"A":-2,"S":-1,"D":0,"F":-2,"Z":1,"X":1,"C":2,"V":-2}')},25:function(e,n,t){},26:function(e,n,t){},32:function(e,n,t){"use strict";t.r(n);var r=t(1),c=t.n(r),i=t(12),a=t.n(i),u=(t(25),t(26),t(4)),o=t(14),s=t.n(o),l=t(13),f=t(6),m=function(e){return f.soundBanks.filter((function(n){return n.url===e}))[0]},d={Q:{1:!0,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},W:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},E:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},R:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},A:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},S:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},D:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},F:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},Z:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},X:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},C:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1},V:{1:!1,2:!1,3:!1,4:!1,5:!1,6:!1,7:!1,8:!1,9:!1,10:!1,11:!1,12:!1,13:!1,14:!1,15:!1,16:!1}},p=m("nujabes"),j=function(e){return{bank:p,setBank:function(n){e((function(e){return Object(u.a)(Object(u.a)({},e),{},{bank:m(n)})}))},currentStep:0,setCurrentStep:function(n){return e((function(e){return Object(u.a)(Object(u.a)({},e),{},{currentStep:n})}))},display:"Drum Machine",setDisplay:function(n){return e((function(e){return Object(u.a)(Object(u.a)({},e),{},{display:n})}))},power:!0,togglePower:function(){return e((function(e){return{power:!e.power,sequencerIsPlaying:!1}}))},sequencer:d,toggleSequencer:function(n){var t=n.button,r=n.step;e((function(e){e.sequencer[t][r]=!e.sequencer[t][r]}))},turnOffSequencer:function(n){var t=n.button,r=n.step;e((function(e){e.sequencer[t][r]=!1}))},sequencerBPM:110,setSequencerBPM:function(n){return e((function(e){return Object(u.a)(Object(u.a)({},e),{},{sequencerBPM:n})}))},sequencerIsPlaying:!1,toggleSequencerIsPlaying:function(){e((function(e){return{sequencerIsPlaying:!e.sequencerIsPlaying,currentStep:0}})),console.log("TEMP toggleSequencerIsPlaying")},volume:50,setVolume:function(n){return e((function(e){return Object(u.a)(Object(u.a)({},e),{},{volume:n})}))}}};j=Object(l.devtools)(j);var b,g,O,h,x,v,k,y=j=s()(j),S=t(0),C=function(){var e=y((function(e){return e.bank})),n=y((function(e){return e.setBank})),t=y((function(e){return e.power}));return Object(S.jsxs)("div",{children:[Object(S.jsx)("label",{htmlFor:"bank-select",children:"Choose a Bank"}),Object(S.jsx)("select",{onChange:function(e){return function(e){n(e.target.value)}(e)},defaultValue:e.url,id:"bank-select",name:"bank",disabled:!t,children:Object.values(f.soundBanks).map((function(e){return Object(S.jsx)("option",{value:e.url,children:e.name},e.url)}))})]})},q=function(){var e=y((function(e){return e.display}));return Object(S.jsxs)("div",{id:"display",children:["Display: ",e]})},P=function(){var e=y((function(e){return e.power})),n=y((function(e){return e.togglePower})),t=new Audio("/drum-machine/sounds/buttons/switch-on.mp3"),r=new Audio("/drum-machine/sounds/buttons/switch-off.mp3");return Object(S.jsx)("div",{children:Object(S.jsxs)("button",{onClick:function(){e?r.play():t.play(),n()},children:["Power: ",e?"on":"off"]})})},w=t(2),H=t(3),B=t(20),D=t(15),E=H.a.h4(b||(b=Object(w.a)(['\n  width: 100%;\n  margin: 0;\n  font-family: "Amatic SC", cursive;\n  font-size: 20px;\n  background: url(',") repeat-x 0 0px;\n  display: inline-block;\n  padding: 5px 0px;\n"])),"/drum-machine/images/check.png"),I=function(e){var n=e.labelText,t=e.triggerKey,r={transform:"rotate(".concat(D[t],"deg)")};return Object(S.jsx)(E,{style:r,children:n})},R=H.a.button(g||(g=Object(w.a)(["\n  border: 1px solid black;\n  width: 200px;\n  margin: auto;\n"]))),A=function(e){var n=e.triggerKey,t=y((function(e){return e.setDisplay})),c=Object(r.useState)(""),i=Object(B.a)(c,2),a=i[0],u=i[1],o=y((function(e){return e.power})),s=y((function(e){return e.bank})),l=y((function(e){return e.volume})),f=Object(r.useRef)(),m=Object(r.useRef)(),d=Object(r.useCallback)((function(){if(o){t(s.pads[n].name);var e=m.current;e.pause(),e.currentTime=0,e.volume=l/100,e.play()}else console.log("power is off")}),[o,t,n,l,s.pads]);return Object(r.useEffect)((function(){u("/drum-machine"+"/sounds/".concat(s.url,"/").concat(s.pads[n].file));var e=function(e){e.key!==n&&e.key!==n.toLowerCase()||d()};return document.addEventListener("keypress",e),function(){document.removeEventListener("keypress",e)}}),[s,d,n]),Object(S.jsxs)("div",{children:[Object(S.jsxs)(R,{ref:f,className:"drum-pad",id:"drum-pad-".concat(n),onClick:d,disabled:!o,children:[n,Object(S.jsx)("audio",{ref:m,className:"clip",id:"pad-".concat(n),src:a,type:"audio/mpeg",children:"Your browser does not support HTML5 audio"})]}),Object(S.jsx)(I,{triggerKey:n,labelText:s.pads[n].name})]})},M=["Q","W","E","R","A","S","D","F","Z","X","C","V"],W=H.a.div(O||(O=Object(w.a)(["\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr 1fr;\n  gap: 8px;\n"]))),F=function(){return Object(S.jsx)(W,{children:M.map((function(e,n){return Object(S.jsx)(A,{triggerKey:e},"pad-".concat(e))}))})},K=function(){var e=y((function(e){return e.volume})),n=y((function(e){return e.setVolume})),t=y((function(e){return e.power}));return Object(S.jsx)("div",{children:Object(S.jsx)("div",{className:"slidecontainer",children:Object(S.jsx)("input",{type:"range",min:"1",max:"100",value:e,onChange:function(e){n(e.target.value)},className:"slider",id:"myRange",disabled:!t})})})},T=t(19),N=function(e){var n=y.getState().power,t=y.getState().sequencerIsPlaying;if(n&&t){var r=y.getState().volume,c=document.querySelector("#pad-".concat(e));c.pause(),c.currentTime=0,c.volume=r/100,c.play()}},V=function(e){var n=e.button,t=e.step,c=y((function(e){return e.sequencer[n][t]})),i=y((function(e){return e.toggleSequencer})),a=y((function(e){return e.currentStep}));Object(r.useEffect)((function(){c&&a===t&&N(n)}),[c,n,t,a]);return Object(S.jsx)("div",{children:Object(S.jsx)("button",{onClick:function(){i({button:n,step:t})},style:{backgroundColor:a===t?"#ff0000":"#ffffff"},children:Object(S.jsx)("div",{style:{backgroundColor:c?"#00ff00":"#ffffff"},children:c?"x":"o"})})})},L=function(){var e=y((function(e){return e.power})),n=y((function(e){return e.sequencerBPM})),t=y((function(e){return e.setSequencerBPM}));return Object(S.jsxs)("div",{children:[Object(S.jsx)("div",{children:n}),Object(S.jsx)("input",{type:"range",min:"50",max:"180",value:n,onChange:function(e){return t(e.target.value)},className:"slider",id:"myRange",disabled:!e})]})},Q=function(){var e=y((function(e){return e.sequencerIsPlaying})),n=y((function(e){return e.toggleSequencerIsPlaying}));return Object(S.jsx)("div",{children:Object(S.jsxs)("button",{onClick:function(){n()},children:["Sequencer: ",e?">":"||"]})})},X=H.a.div(h||(h=Object(w.a)(["\n  margin: auto;\n"]))),Z=H.a.div(x||(x=Object(w.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n"]))),J=H.a.div(v||(v=Object(w.a)(["\n  display: flex;\n  flex-direction: row;\n"]))),Y=H.a.div(k||(k=Object(w.a)(["\n  display: grid;\n  grid-template-columns: repeat(16, 20px);\n"]))),z=function(){var e=y((function(e){return e.bank})),n=y((function(e){return e.currentStep})),t=y((function(e){return e.setCurrentStep})),c=y((function(e){return e.sequencer})),i=y((function(e){return e.sequencerBPM})),a=y((function(e){return e.sequencerIsPlaying})),u=y((function(e){return e.turnOffSequencer})),o=y((function(e){return e.power}));Object(r.useEffect)((function(){var e=setInterval((function(){o&&a&&t(n<=0||n>=16?1:n+1)}),1e3/i*15);return function(){return clearInterval(e)}}),[n,t,i,a,o]);return Object(S.jsxs)(X,{children:[Object(S.jsx)(Q,{}),Object(S.jsx)(L,{}),n,M.map((function(n){return Object(S.jsxs)(Z,{children:[Object(S.jsx)("div",{children:e.pads[n].name},"sequencer-".concat(n)),Object(S.jsxs)(J,{children:[Object(S.jsx)(Y,{children:Object(T.a)(Array(16).keys()).map((function(e){return Object(S.jsx)(V,{button:n,step:e+1},"sequencer-".concat(n,"-").concat(e+1))}))}),Object(S.jsx)("button",{onClick:function(){return function(e){Object.keys(c[e]).forEach((function(n){u({button:e,step:n})}))}(n)},children:"clear"})]})]})}))]})};var U=function(){return Object(S.jsxs)("div",{className:"App",id:"drum-machine",children:[Object(S.jsx)(P,{}),Object(S.jsx)(q,{}),Object(S.jsx)(K,{}),Object(S.jsx)(C,{}),Object(S.jsx)(F,{}),Object(S.jsx)(z,{})]})},G=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,34)).then((function(n){var t=n.getCLS,r=n.getFID,c=n.getFCP,i=n.getLCP,a=n.getTTFB;t(e),r(e),c(e),i(e),a(e)}))};a.a.render(Object(S.jsx)(c.a.StrictMode,{children:Object(S.jsx)(U,{})}),document.getElementById("root")),G()},6:function(e){e.exports=JSON.parse('{"soundBanks":[{"name":"Nujabes","url":"nujabes","color":"#ff0000","pads":{"Q":{"name":"Kick 1","file":"kick1.mp3"},"W":{"name":"Kick 2","file":"kick7.mp3"},"E":{"name":"Kick 3","file":"kick8.mp3"},"R":{"name":"High Hat 1","file":"highhat3.mp3"},"A":{"name":"Snare 1","file":"snare1.mp3"},"S":{"name":"Snare 2","file":"snare6.mp3"},"D":{"name":"Snare 3","file":"snare7.mp3"},"F":{"name":"High Hat 2","file":"highhat4.mp3"},"Z":{"name":"Open Hi Hat 1","file":"openhighhat1.mp3"},"X":{"name":"Open Hi Hat 2","file":"openhighhat2.mp3"},"C":{"name":"Percussion 1","file":"percussion1.mp3"},"V":{"name":"Percussion 2","file":"percussion4.mp3"}}},{"name":"808s","url":"808s","color":"#00ff00","pads":{"Q":{"name":"808 1","file":"808 (Love Lockdown).mp3"},"W":{"name":"808 2","file":"808 (Bad News).mp3"},"E":{"name":"Kick","file":"Kick (Amazing).mp3"},"R":{"name":"Choir","file":"Choir (Say You Will).mp3"},"A":{"name":"Snare","file":"80s Snare (Paranoid).mp3"},"S":{"name":"Moog","file":"Fat Moog (Paranoid).mp3"},"D":{"name":"Effect","file":"Snare (Welcome to Heartbreak).mp3"},"F":{"name":"Beep","file":"Snare (Say You Will).mp3"},"Z":{"name":"Snare","file":"909 Snare (Paranoid).mp3"},"X":{"name":"Perc","file":"Perc (Paranoid).mp3"},"C":{"name":"Taiko","file":"Taiko Tom (Say You Will).mp3"},"V":{"name":"Hat","file":"Hat (Coldest Winter).mp3"}}},{"name":"UK Drill","url":"uk-drill","color":"#444444","pads":{"Q":{"name":"808 1","file":"Rust 808.mp3"},"W":{"name":"808 2","file":"Creed 808.mp3"},"E":{"name":"808 3","file":"Dirty 808.mp3"},"R":{"name":"808 4","file":"Aggressive 808.mp3"},"A":{"name":"Kick","file":"Rack Kick.mp3"},"S":{"name":"Woah","file":"Woah Vox.mp3"},"D":{"name":"Snare 1","file":"M1 Snare.mp3"},"F":{"name":"Snare 2","file":"Light Snare.mp3"},"Z":{"name":"Hi Hat 1","file":"Drill Hi Hat 1.mp3"},"X":{"name":"Hi Hat 2","file":"Drill Hi Hat 2.mp3"},"C":{"name":"Rim","file":"Hollow Rim.mp3"},"V":{"name":"Clap","file":"Cheap Clap.mp3"}}}]}')}},[[32,1,2]]]);
//# sourceMappingURL=main.1c197938.chunk.js.map