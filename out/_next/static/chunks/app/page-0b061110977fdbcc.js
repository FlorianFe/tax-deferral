(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{9483:function(e,n,t){Promise.resolve().then(t.bind(t,6106))},6106:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return u}});var l=t(9268),r=t(6006),i=t(2421);function s(e){let{interestRate:n,years:t,taxRate:r=.25,inflationRate:s=0}=e,a=e=>{let t=e.reduce((e,t)=>e*(1+n),1);return(1+(t-1)*(1-r))/Math.pow(1+s,e.length)},u=e=>{let t=e.reduce((e,t)=>e*(1+n*(1-r)),1);return(1+(t-1))/Math.pow(1+s,e.length)},d=e=>{let t=e.reduce((e,t)=>e*(1+n),1);return t/Math.pow(1+s,e.length)},x=(0,i.w6H)(0,t+1),o=x.map(e=>a((0,i.w6H)(0,e))),c=x.map(e=>u((0,i.w6H)(0,e))),h=x.map(e=>d((0,i.w6H)(0,e))),j=(0,i.Z$Q)((0,i.$Re)(o,c).map(e=>(e[0]-1)/(e[1]-1)))-1;console.log((0,i.$Re)(o,c));let p=(0,i.$Re)(x,o),m=(0,i.$Re)(x,c),g=(0,i.$Re)(x,h);return(0,l.jsxs)("div",{style:{width:"100%"},children:[(0,l.jsxs)("svg",{viewBox:"-5 -5 110 110",children:[(0,i.w6H)(0,50).map(e=>(0,l.jsx)("line",{x1:0,x2:100,y1:100-10*e,y2:100-10*e,stroke:"#ddd",strokeWidth:.1},e)),p.map((e,n)=>(0,l.jsx)("circle",{cx:100*e[0]/t,cy:100-10*e[1],r:.5,fill:"green"},n)),m.map((e,n)=>(0,l.jsx)("circle",{cx:100*e[0]/t,cy:100-10*e[1],r:.5,fill:"blue"},n)),g.map((e,n)=>(0,l.jsx)("circle",{cx:100*e[0]/t,cy:100-10*e[1],r:.5,fill:"orange"},n))]}),"Durch Steuerstundung hast du nach ",t," Jahren ",(0,l.jsxs)("b",{children:[(100*j).toFixed(2),"%"]})," mehr hinzugewonnen als wenn du jedes Jahr deine Gewinne realisiert h\xe4ttest!"]})}var a=t(7985);function u(){let[e,n]=(0,r.useState)(30),[t,i]=(0,r.useState)(5),[u,d]=(0,r.useState)(25),[x,o]=(0,r.useState)(2);return(0,l.jsxs)("main",{style:{display:"flex",justifyContent:"space-between"},children:[(0,l.jsx)("div",{style:{width:"700px",padding:"25px"},children:(0,l.jsx)(s,{interestRate:.01*t,years:e,taxRate:.01*u,inflationRate:.01*x})}),(0,l.jsxs)("div",{style:{width:"300px",padding:"25px"},children:["Anlagejahre: ",e,(0,l.jsx)(a.ZP,{"aria-label":"Volume",min:1,max:50,value:e,onChange:(e,t)=>{n(t)}}),"Rendite: ",t,"%",(0,l.jsx)(a.ZP,{"aria-label":"Volume",min:0,max:15,value:t,onChange:(e,n)=>{i(n)}}),"Kapitalertragssteuern: ",u,"%",(0,l.jsx)(a.ZP,{"aria-label":"Volume",min:0,max:100,value:u,onChange:(e,n)=>{d(n)}}),"Inflationsbereinigung: ",x,"%",(0,l.jsx)(a.ZP,{"aria-label":"Volume",min:0,max:10,value:x,onChange:(e,n)=>{o(n)}}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{style:{border:"1px solid #ddd",padding:"15px"},children:(0,l.jsxs)("ul",{style:{fontSize:"10pt"},children:[(0,l.jsx)("li",{style:{color:"orange"},children:" ohne Steuern"}),(0,l.jsx)("li",{style:{color:"green"},children:" mit Steuern, mit Steuerstundung"}),(0,l.jsx)("li",{style:{color:"blue"},children:" mit Steuern, ohne Steuerstundung"})]})})]})]})}}},function(e){e.O(0,[54,253,769,744],function(){return e(e.s=9483)}),_N_E=e.O()}]);