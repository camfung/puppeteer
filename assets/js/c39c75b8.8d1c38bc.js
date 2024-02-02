/*! For license information please see c39c75b8.8d1c38bc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[30904],{9003:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=r(85893),n=r(11151);const a={sidebar_label:"Page.waitForTimeout"},o="Page.waitForTimeout() method",s={id:"api/puppeteer.page.waitfortimeout",title:"Page.waitForTimeout() method",description:"Warning: This API is now obsolete.",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.page.waitfortimeout.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitfortimeout",permalink:"/api/puppeteer.page.waitfortimeout",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"Page.waitForTimeout"},sidebar:"api",previous:{title:"Page.waitForSelector",permalink:"/api/puppeteer.page.waitforselector"},next:{title:"Page.waitForXPath",permalink:"/api/puppeteer.page.waitforxpath"}},l={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"pagewaitfortimeout-method",children:"Page.waitForTimeout() method"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"Warning: This API is now obsolete."}),"\n",(0,i.jsxs)(t.p,{children:["Replace with ",(0,i.jsx)(t.code,{children:"new Promise(r => setTimeout(r, milliseconds));"}),"."]}),"\n",(0,i.jsx)(t.p,{children:"Causes your script to wait for the given number of milliseconds."}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  waitForTimeout(milliseconds: number): Promise<void>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"milliseconds"}),(0,i.jsx)(t.td,{children:"number"}),(0,i.jsx)(t.td,{children:"the number of milliseconds to wait."})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,i.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,i.jsxs)(t.p,{children:["It's generally recommended to not wait for a number of seconds, but instead use ",(0,i.jsx)(t.a,{href:"/api/puppeteer.frame.waitforselector",children:"Frame.waitForSelector()"}),", ",(0,i.jsx)(t.a,{href:"/api/puppeteer.frame.waitforxpath",children:"Frame.waitForXPath()"})," or ",(0,i.jsx)(t.a,{href:"/api/puppeteer.frame.waitforfunction",children:"Frame.waitForFunction()"})," to wait for exactly the conditions you want."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Wait for 1 second:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"await page.waitForTimeout(1000);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},75251:(e,t,r)=>{var i=r(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var i,a={},c=null,p=null;for(i in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(p=t.ref),t)o.call(t,i)&&!l.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:p,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>s,a:()=>o});var i=r(67294);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);