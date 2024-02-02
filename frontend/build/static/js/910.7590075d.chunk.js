"use strict";(self.webpackChunklaghata_frontend=self.webpackChunklaghata_frontend||[]).push([[910],{5920:(n,e,t)=>{t.d(e,{Z:()=>A});var i,r,s,a,o,d,c,l,p,x,h,u,g,f,v,m=t(168),b=t(2791),Z=t(8789),j=t(3584),w=t(7692),y=t(3198),P=t(184);const k=Z.ZP.div(i||(i=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n"]))),C=Z.ZP.div(r||(r=(0,m.Z)(["\n  width: 290px;\n  height: 400px;\n  border: 1px solid #000;\n  background-color: #f5f5f3;\n  border-radius: 10px;\n  transition: all 0.5s ease;\n\n  border: 1px solid;\n  z-index: 99999;\n  position: relative;\n"]))),I=Z.ZP.div(s||(s=(0,m.Z)(["\n  height: 340px;\n  overflow-x: hidden;\n  overflow-y: auto;\n\n  ::-webkit-scrollbar {\n    width: 8px;\n    height: 8px;\n  }\n\n  ::-webkit-scrollbar-thumb {\n    background: white;\n    border-radius: 50px;\n  }\n\n  ::-webkit-scrollbar-track {\n    background: #f5f0ed;\n    border-radius: 50px;\n    border-top-right-radius: 25px;\n    border-top-left-radius: 25px;\n  }\n"]))),z=Z.ZP.div(a||(a=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 9px 10px;\n"]))),D=Z.ZP.div(o||(o=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  padding-top: 13px;\n"]))),S=Z.ZP.div(d||(d=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]))),U=Z.ZP.div(c||(c=(0,m.Z)(["\n  /* max-height: 345px; */\n"]))),O=Z.ZP.div(l||(l=(0,m.Z)(["\n  background-color: #fff;\n  width: fit-content;\n  border-radius: 25px;\n  padding: 10px 12px;\n  font-size: 15px;\n  font-weight: 400;\n"]))),M=Z.ZP.div(p||(p=(0,m.Z)(["\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  gap: 6px;\n  padding-top: 13px;\n"]))),N=Z.ZP.div(x||(x=(0,m.Z)(["\n  background-color: #fff;\n  width: 80%;\n  border-radius: 25px;\n  padding: 10px 12px;\n  font-size: 15px;\n  font-weight: 400;\n"]))),R=Z.ZP.img(h||(h=(0,m.Z)(["\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n"]))),_=Z.ZP.textarea(u||(u=(0,m.Z)(["\n  position: absolute;\n  bottom: 7px;\n  left: 5px;\n  padding-left: 9px;\n  padding-top: 10px;\n  width: 85%;\n  height: 40px;\n  outline: none;\n  border-radius: 25px;\n  border: 1px solid #000;\n  background-color: transparent;\n"]))),E=Z.ZP.button(g||(g=(0,m.Z)(["\n  position: absolute;\n  bottom: 7px;\n  right: 5px;\n  height: 40px;\n  width: 10%;\n  border-radius: 50%;\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.5s ease;\n  border: 1px solid;\n\n  :hover {\n    border: none;\n    transform: scale(0.9);\n  }\n\n  .sendIcon {\n    font-size: 22px;\n    color: #242526;\n  }\n"]))),Q=Z.ZP.div(f||(f=(0,m.Z)(["\n  background: #000;\n  color: #f5f0ed;\n  padding: 7px 10px;\n  border-radius: 25px;\n  opacity: 0;\n  cursor: pointer;\n  transition: all 0.4s ease;\n  font-size: 15px;\n\n  :hover {\n    opacity: 1;\n  }\n"]))),T=Z.ZP.button(v||(v=(0,m.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 9px;\n  background-color: transparent;\n  border: none;\n  border-radius: 50%;\n  height: 80px;\n  cursor: pointer;\n  transition: all 0.33s ease;\n\n  :hover {\n    .msg-display {\n      opacity: 1;\n    }\n  }\n\n  img {\n    width: 60px;\n    height: 60px;\n    border-radius: 50%;\n  }\n"]))),A=n=>{let{picture:e,renterUsername:t,openChat:i,setOpenChat:r,currentUserName:s,currentUserPicture:a,currentUserId:o,renterId:d}=n;const[c,l]=(0,b.useState)(""),{currentChatMembers:p,setCurrentChatMembers:x,message:h,setMessage:u,chatConversation:g,setChatConversation:f,notification:v,setNotification:m,socket:Z}=(0,b.useContext)(y.p),A=(0,b.useRef)(),J=(0,b.useRef)(!1);(0,b.useEffect)((()=>{if(!1===J.current){return(async()=>{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({senderId:o,receiverId:d,createAt:Date.now()})};try{const e=await fetch("".concat("http://3.98.131.146","/api/conversation"),n),t=await e.json();201===t.status&&x(t.data)}catch(e){console.log(e.stack)}})(),()=>{J.current=!0}}}),[o,d]),(0,b.useEffect)((()=>{try{(async()=>{const n=await fetch("".concat("http://3.98.131.146","/api/conversation/").concat(o)),e=await n.json();if(e.data.length>0){const n=e.data.find((n=>n.members[0]===o&&n.members[1]===d||n.members[1]===o&&n.members[0]===d));x(n)}})()}catch(n){console.log(n.stack)}}),[]),(0,b.useEffect)((()=>{Z&&(Z.emit("welcome-message",{currentUserName:s,renterUsername:t}),Z.emit("initialisation-add-user",o),Z.on("welcome-response",(n=>{l(n)})))}),[Z,s,o]),(0,b.useEffect)((()=>{(async()=>{try{const n=await fetch("".concat("http://3.98.131.146","/api/messages/").concat(null===p||void 0===p?void 0:p._id)),e=await n.json();e.data.length>0&&f(e.data)}catch(n){console.log(n.stack)}})()}),[p]),(0,b.useEffect)((()=>{Z&&Z.on("getMessage",(n=>{var e,t;!0===(null===p||void 0===p||null===(e=p.members)||void 0===e?void 0:e.includes(n.senderId))&&!0===(null===p||void 0===p||null===(t=p.members)||void 0===t?void 0:t.includes(n.sendToId))?f([...g,n]):i||v.includes(n)||m([...v,n])}))}),[Z,g,v,i]);const L=async n=>{n.preventDefault();const e={senderId:o,conversationId:null===p||void 0===p?void 0:p._id,receiverId:d,text:h,createAt:Date.now()};Z.emit("sendMessage",e),u("");try{const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)};(await fetch("".concat("http://3.98.131.146","/api/message"),n)).ok&&f([...g,e])}catch(t){console.log(t.stack)}};let F=(0,j.Z)((()=>{r(!1)}));return(0,b.useEffect)((()=>{var n;null===(n=A.current)||void 0===n||n.scrollIntoView({behavior:"smooth"})}),[g]),(0,P.jsxs)(k,{ref:F,children:[i&&(0,P.jsxs)(C,{children:[(0,P.jsxs)(I,{children:[0===g.length&&(0,P.jsxs)(M,{children:[(0,P.jsx)(R,{src:e,alt:"userProfile"}),(0,P.jsx)(N,{children:c.text})]}),(0,P.jsx)(U,{children:g.map(((n,t)=>(0,P.jsx)(z,{ref:A,children:n.senderId!==o&&n.senderId===d?(0,P.jsxs)(D,{children:[(0,P.jsx)(O,{children:n.text},t),(0,P.jsx)(R,{src:e,alt:"RenterProfile"})]}):n.senderId===o&&n.receiverId===d&&(0,P.jsxs)(S,{children:[(0,P.jsx)(R,{src:a,alt:"userProfile"}),(0,P.jsx)(O,{children:n.text})]})},t)))})]}),(0,P.jsxs)("form",{onSubmit:L,children:[(0,P.jsx)(_,{value:h,placeholder:"Message",onChange:n=>u(n.target.value),onKeyDown:n=>"Enter"===n.key?L(n):null}),(0,P.jsx)(E,{type:"submit",children:(0,P.jsx)(w.PRb,{className:"sendIcon"})})]})]}),(0,P.jsxs)(T,{onClick:()=>{r(!i)},children:[(0,P.jsxs)(Q,{className:"msg-display",children:["Hey i'm ",t,"!"]}),(0,P.jsx)("img",{src:e,alt:"renter picture"})]})]})}},5524:(n,e,t)=>{t.d(e,{Z:()=>Z});var i,r,s,a,o,d,c=t(168),l=t(2791),p=t(8789),x=t(4373),h=t(184);const u=p.ZP.div(i||(i=(0,c.Z)(["\n  height: 100%;\n  position: relative;\n"]))),g=p.ZP.div(r||(r=(0,c.Z)(["\n  width: 100%;\n  height: 100%;\n  border-radius: 25px;\n  background-position: center;\n  background-size: cover;\n"]))),f=p.ZP.div(s||(s=(0,c.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  left: 17px;\n  font-size: 45px;\n  color: #fff;\n  cursor: pointer;\n"]))),v=p.ZP.div(a||(a=(0,c.Z)(["\n  position: absolute;\n  top: 50%;\n  transform: translate(0, -50%);\n  right: 17px;\n  font-size: 45px;\n  color: #fff;\n  cursor: pointer;\n"]))),m=p.ZP.div(o||(o=(0,c.Z)(["\n  display: flex;\n  justify-content: center;\n  position: absolute;\n  top: 99%;\n  left: 50%;\n  transform: translate(-50%, -99%);\n"]))),b=p.ZP.div(d||(d=(0,c.Z)(["\n  margin: 0 7px;\n  cursor: pointer;\n  font-size: 50px;\n  color: #f5f0ed;\n"]))),Z=n=>{let{slides:e}=n;const[t,i]=(0,l.useState)(0);return(0,h.jsx)(h.Fragment,{children:(0,h.jsxs)(u,{children:[(0,h.jsx)(f,{onClick:()=>{i(0===t?e.length-1:t-1)},children:(0,h.jsx)(x.u1R,{})}),(0,h.jsx)(v,{onClick:()=>{t===e.length-1?i(0):i(t+1)},children:(0,h.jsx)(x.hjJ,{})}),(0,h.jsx)(g,{style:{backgroundImage:"url(".concat(e[t],")")}}),(0,h.jsx)(m,{children:e.map(((n,e)=>(0,h.jsx)(b,{onClick:()=>(n=>{i(n)})(e),children:"\u25e6"},e)))})]})})}},4889:(n,e,t)=>{t.r(e),t.d(e,{default:()=>Bn});var i=t(168),r=t(2791),s=t(7689),a=t(1087),o=t(1933),d=t(8789),c=t(5524);const l=t.p+"static/media/beachsurf.fe4f5e79f208b1f2f3e7.jpg",p=t.p+"static/media/cyclists.36bf851c795eb82b3b05.jpg",x=t.p+"static/media/snow1.03cd97b5dbd12ec67b85.jpg";var h,u,g=t(783),f=t(6420),v=t(1951),m=t(7577),b=t(3584),Z=(t(2978),t(666),t(4067)),j=t(184);const w=d.ZP.input(h||(h=(0,i.Z)(["\n  padding: 7px;\n  width: 90%;\n  font-size: 17px;\n  border-radius: 5px;\n  border: 1px solid;\n  outline: none;\n  color: #242526;\n"]))),y=d.ZP.div(u||(u=(0,i.Z)(["\n  .calender {\n    width: 90%;\n  }\n"]))),P=n=>{let{reservations:e}=n;const{dateRange:t,setDateRange:i}=(0,r.useContext)(Z.z),[s,a]=(0,r.useState)(!1);let o=(0,b.Z)((()=>{a(!1)}));const d=e.map((n=>{const e=n.bookingDate[0].startDate.slice(0,10),t=n.bookingDate[0].endDate.slice(0,10),i=new Date(e),r=new Date(t);return(0,m.pC)(i,r)})).flat(1);return(0,j.jsxs)("div",{children:[(0,j.jsx)(w,{value:"".concat((0,v.default)(t[0].startDate,"MM/dd/yyyy")," to ").concat((0,v.default)(t[0].endDate,"MM/dd/yyyy")),readOnly:!0,onClick:()=>a(!s)}),(0,j.jsx)(y,{ref:o,children:s&&(0,j.jsx)(f.C0,{onChange:n=>i([n.selection]),ranges:t,editableDateInputs:!0,moveRangeOnFirstSelection:!1,months:1,minDate:new Date,disabledDates:[...d],direction:"horizontal",className:"calender"})})]})};var k,C,I,z,D,S,U,O=t(5920),M=t(6355);const N=d.ZP.div(k||(k=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  border-top: 1px solid #242526;\n  padding-top: 12px;\n  margin: 10px 0 25px 0;\n"]))),R=d.ZP.div(C||(C=(0,i.Z)(["\n  display: flex;\n  align-items: flex-start;\n  gap: 7px;\n  padding-bottom: 12px;\n"]))),_=d.ZP.div(I||(I=(0,i.Z)(["\n  img {\n    width: 70px;\n    height: 70px;\n    border-radius: 50%;\n  }\n"]))),E=d.ZP.div(z||(z=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),Q=d.ZP.div(D||(D=(0,i.Z)(["\n  display: flex;\n  gap: 2px;\n"]))),T=d.ZP.div(S||(S=(0,i.Z)(["\n  display: flex;\n  gap: 8px;\n  align-items: center;\n\n  p {\n    font-size: 13px;\n  }\n"]))),A=d.ZP.div(U||(U=(0,i.Z)([""]))),J=n=>{let{review:e}=n;const t=Array(Number(e.rating)).fill(0);return(0,j.jsxs)(N,{children:[(0,j.jsxs)(R,{children:[(0,j.jsx)(_,{children:(0,j.jsx)("img",{src:e.clientPicture,alt:"user Profile"})}),(0,j.jsxs)(E,{children:[(0,j.jsxs)(T,{children:[(0,j.jsx)("h4",{children:e.clientUsername}),(0,j.jsx)("p",{children:e.createdAt.slice(4,15)})]}),(0,j.jsx)(Q,{children:t.map(((n,e)=>(0,j.jsx)(M.QJe,{},e)))})]})]}),(0,j.jsx)(A,{children:(0,j.jsx)("div",{children:e.review})})]})};var L,F,K,B,H=t(3101);const V=d.ZP.form(L||(L=(0,i.Z)(["\n  margin: 20px 0;\n"]))),W=d.ZP.textarea(F||(F=(0,i.Z)(["\n  margin: 15px 0;\n  min-width: 100%;\n  max-width: 100%;\n  border-radius: 5px;\n  outline: none;\n  height: 70px;\n  padding: 9px;\n  font-size: 16px;\n"]))),Y=d.ZP.div(K||(K=(0,i.Z)(["\n  padding-left: 2px;\n  display: flex;\n  gap: 5px;\n"]))),$=d.ZP.button(B||(B=(0,i.Z)(["\n  padding: 10px 25px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid;\n  border-radius: 5px;\n  transition: background 0.5s ease-in-out;\n\n  :hover {\n    background-color: #dadce1;\n  }\n"]))),q=n=>{let{setReviews:e,currentUserId:t,listingId:i,reviews:s,user:a}=n;const[o,d]=(0,r.useState)(void 0),[c,l]=(0,r.useState)({review:"",clientUsername:null===a||void 0===a?void 0:a.username,clientId:t,clientPicture:null===a||void 0===a?void 0:a.picture,listingId:i,rating:0,createdAt:new Date(Date.now()).toString()}),[p,x]=(0,r.useState)(!1);return(0,j.jsxs)(V,{onSubmit:async n=>{n.preventDefault();try{x(!0),e([c,...s]),l((n=>({...n,review:"",rating:0})));const n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)};fetch("".concat("http://3.98.131.146","/api/add-review"),n).ok,x(!1)}catch(t){console.log(t.stack),x(!1)}},children:[(0,j.jsx)(Y,{children:Array(5).fill(0).map(((n,e)=>(0,j.jsx)(M.QJe,{style:{cursor:"pointer"},color:(o||c.rating)>e?"#000":"grey",value:c.rating,name:"rating",onClick:n=>l((n=>({...n,rating:e+1}))),onMouseOver:()=>d(e+1),onMouseLeave:()=>d(void 0)},e)))}),(0,j.jsx)(W,{value:c.review,name:"review",placeholder:"Write your review here!",onChange:n=>l((e=>({...e,[n.target.name]:n.target.value})))}),(0,j.jsx)($,{type:"submit",disabled:0===c.rating&&""===c.review.trim(),children:p?(0,j.jsx)(H.p2,{height:"30",width:"30",color:"#000",ariaLabel:"circles-loading",wrapperClass:"spinner",visible:!0}):"Send Review"})]})};var G=t(8179);const X=n=>{let{currentUserId:e,listingId:t,reviewsIds:i}=n;const{user:s}=(0,r.useContext)(G.E),[a,o]=(0,r.useState)([]);return(0,r.useEffect)((()=>{try{(async()=>{if(i.length>0){const n=await fetch("".concat("http://3.98.131.146","/api/reviews/listing/").concat(t));if(n.ok){const e=await n.json();e.data.length>0&&o(e.data)}}})()}catch(n){console.log(n.stack)}}),[t]),(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h2",{children:"Reviews"}),s&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)("h4",{children:"Your Review Is Important For Us"}),(0,j.jsx)(q,{setReviews:o,reviews:a,currentUserId:e,listingId:t,user:s})]}),(0,j.jsx)("div",{children:a&&a.map((n=>(0,j.jsx)(J,{review:n},n._id)))})]})};var nn,en,tn,rn,sn,an,on,dn,cn,ln,pn,xn,hn,un,gn,fn,vn,mn,bn,Zn,jn,wn=t(3198),yn=t(6742);const Pn=d.ZP.div(nn||(nn=(0,i.Z)(["\n  min-height: 100vh;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  position: relative;\n\n  .spinner {\n    height: 60vh;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n"]))),kn=d.ZP.div(en||(en=(0,i.Z)(["\n  padding-bottom: 100px;\n"]))),Cn=d.ZP.div(tn||(tn=(0,i.Z)(["\n  position: fixed;\n  bottom: 24px;\n  right: 24px;\n"]))),In=d.ZP.div(rn||(rn=(0,i.Z)(["\n  display: flex;\n  max-width: 1300px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 700px) {\n    flex-direction: column-reverse;\n    gap: 20px;\n  }\n"]))),zn=d.ZP.div(sn||(sn=(0,i.Z)(["\n  height: 160px;\n  position: relative;\n\n  h2 {\n    position: absolute;\n    top: 50px;\n    left: 20px;\n    font-size: 35px;\n    font-weight: 900;\n    text-transform: capitalize;\n    color: #242526;\n  }\n"]))),Dn=d.ZP.img(an||(an=(0,i.Z)(["\n  height: 160px;\n  width: 100%;\n  object-fit: cover;\n  opacity: 0.7;\n"]))),Sn=d.ZP.div(on||(on=(0,i.Z)(["\n  margin-top: 30px;\n  width: 85%;\n  height: 450px;\n  margin: 0 auto;\n\n  @media screen and (max-width: 700px) {\n    height: 250px;\n  }\n"]))),Un=d.ZP.div(dn||(dn=(0,i.Z)(["\n  flex: 0.7;\n  width: 80%;\n  margin: 30px auto 0 auto;\n\n  @media screen and (max-width: 700px) {\n    margin: 30px auto 10px auto;\n  }\n"]))),On=d.ZP.div(cn||(cn=(0,i.Z)(["\n  flex: 0.3;\n  margin: 30px auto 0 auto;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  gap: 40px;\n\n  @media screen and (max-width: 700px) {\n    width: 80%;\n  }\n"]))),Mn=d.ZP.div(ln||(ln=(0,i.Z)(["\n  margin: 30px auto;\n  width: 85%;\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n\n  span {\n    font-weight: 600;\n  }\n"]))),Nn=d.ZP.div(pn||(pn=(0,i.Z)(["\n  p {\n    white-space: wrap;\n    overflow: hidden;\n  }\n"]))),Rn=d.ZP.div(xn||(xn=(0,i.Z)([""]))),_n=d.ZP.div(hn||(hn=(0,i.Z)([""]))),En=d.ZP.div(un||(un=(0,i.Z)(["\n  display: flex;\n  gap: 7px;\n\n  p {\n    font-size: 35px;\n    font-weight: 500;\n    color: #242526;\n  }\n\n  span {\n    padding-top: 3px;\n  }\n"]))),Qn=d.ZP.div(gn||(gn=(0,i.Z)(["\n  display: flex;\n  align-items: center;\n  gap: 20px;\n  border-top: 1px solid;\n  width: 96%;\n  padding-top: 15px;\n  padding-left: 5px;\n\n  @media screen and (max-width: 700px) {\n    gap: 40px;\n  }\n"]))),Tn=d.ZP.img(fn||(fn=(0,i.Z)(["\n  width: 150px;\n  height: 150px;\n  border-radius: 10px;\n\n  @media screen and (max-width: 1000px) {\n    width: 130px;\n    height: 130px;\n  }\n"]))),An=d.ZP.div(vn||(vn=(0,i.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: space-between;\n  justify-content: space-between;\n  gap: 25px;\n\n  .navlink {\n    text-decoration: none;\n  }\n"]))),Jn=d.ZP.div(mn||(mn=(0,i.Z)(["\n  font-size: 25px;\n  font-weight: 700;\n  color: #242526;\n  text-transform: capitalize;\n"]))),Ln=d.ZP.button(bn||(bn=(0,i.Z)(["\n  padding: 10px 25px;\n  cursor: pointer;\n  font-size: 14px;\n  font-weight: 500;\n  background: transparent;\n  border: 1px solid;\n  transition: background 0.5s ease-in-out;\n\n  :hover {\n    background-color: #dadce1;\n  }\n\n  @media screen and (max-width: 700px) {\n    padding: 10px 35px;\n  }\n"]))),Fn=d.ZP.div(Zn||(Zn=(0,i.Z)([""]))),Kn=d.ZP.button(jn||(jn=(0,i.Z)(["\n  width: 90%;\n  padding: 10px 20px;\n  font-size: 17px;\n  background: #000;\n  color: #f5f0ed;\n  border-radius: 5px;\n  transition: background 0.4s ease-in-out;\n  margin-top: 15px;\n  cursor: pointer;\n\n  :hover {\n    background: #f5f0ed;\n    color: #000;\n  }\n"]))),Bn=()=>{const{openChat:n,setOpenChat:e}=(0,r.useContext)(wn.p),{user:t}=(0,r.useContext)(G.E),{id:i}=(0,s.UO)(),d=(0,s.s0)(),h=(0,o.useQueryClient)(),{data:u}=(0,o.useQuery)(["listing",i],(()=>(0,yn.km)(i)),{initialData:()=>{var n;const e=null===(n=h.getQueryData("listings"))||void 0===n?void 0:n.find((n=>n.id===parseInt(i)));return e?{data:e}:void 0}}),f=null===u||void 0===u?void 0:u.renterId,{data:v}=(0,o.useQuery)(["renter",f],(()=>(0,yn.kn)(f)),{enabled:!!f}),{data:b}=(0,o.useQuery)(["reservations",i],(()=>(0,yn.gK)(i)));return(0,j.jsx)(Pn,{children:u&&v&&b?(0,j.jsxs)(kn,{children:[(0,j.jsxs)(zn,{children:[(0,j.jsx)(Dn,{src:"surf"===u.category?l:"bike"===u.category?p:"Snow"===u.category?x:g,alt:"banner"}),(0,j.jsx)("h2",{children:u.name})]}),(0,j.jsxs)(In,{children:[(0,j.jsxs)(Un,{children:[(0,j.jsx)(Sn,{children:(0,j.jsx)(c.Z,{slides:u.imageSrc})}),(0,j.jsxs)(Mn,{children:[(0,j.jsxs)(Nn,{children:[(0,j.jsx)("span",{children:"Description: "}),(0,j.jsx)("p",{children:u.description})]}),(0,j.jsxs)(Rn,{children:[(0,j.jsx)("span",{children:"Model: "}),u.model]}),(0,j.jsxs)(_n,{children:[(0,j.jsx)("span",{children:"Size: "}),u.size]}),(0,j.jsx)(X,{currentUserId:null===t||void 0===t?void 0:t._id,listingId:i,reviewsIds:u.reviewsIds})]})]}),(0,j.jsxs)(On,{children:[(0,j.jsxs)(En,{children:[(0,j.jsxs)("p",{children:["$",u.price]}),(0,j.jsx)("span",{children:"/Day"})]}),(0,j.jsxs)(Fn,{children:[(0,j.jsx)(P,{reservations:b}),(0,j.jsx)(a.OL,{to:"/listing/".concat(u._id,"/booking"),onClick:m.k3,children:(0,j.jsx)(Kn,{children:"Book"})})]}),(0,j.jsxs)(Qn,{children:[(0,j.jsx)(a.OL,{to:"/renter/".concat(v._id),className:"navlink",children:(0,j.jsx)(Tn,{src:v.picture,alt:"renter picture"})}),(0,j.jsxs)(An,{children:[(0,j.jsx)(a.OL,{to:"/renter/".concat(v._id),className:"navlink",children:(0,j.jsx)(Jn,{children:v.username})}),(0,j.jsx)(Ln,{onClick:()=>{t?e(!0):d("/login")},children:"Contact"})]})]})]})]}),t&&(0,j.jsx)(Cn,{children:(0,j.jsx)(O.Z,{picture:v.picture,renterUsername:v.username,renterId:v._id,openChat:n,setOpenChat:e,currentUserName:null===t||void 0===t?void 0:t.username,currentUserPicture:null===t||void 0===t?void 0:t.picture,currentUserId:null===t||void 0===t?void 0:t._id})})]}):(0,j.jsx)(H.p2,{height:"40",width:"40",color:"#01010",ariaLabel:"circles-loading",wrapperClass:"spinner",visible:!0})})}}}]);
//# sourceMappingURL=910.7590075d.chunk.js.map