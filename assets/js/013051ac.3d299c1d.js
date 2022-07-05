"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[26787],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=u(r),m=n,k=d["".concat(i,".").concat(m)]||d[m]||s[m]||o;return r?a.createElement(k,l(l({ref:t},c),{},{components:r})):a.createElement(k,l({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35158:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_label:"WebWorker.evaluateHandle"},l="WebWorker.evaluateHandle() method",p={unversionedId:"api/puppeteer.webworker.evaluatehandle",id:"api/puppeteer.webworker.evaluatehandle",title:"WebWorker.evaluateHandle() method",description:"The only difference between worker.evaluate and worker.evaluateHandle is that worker.evaluateHandle returns in-page object (JSHandle). If the function passed to the worker.evaluateHandle returns a Promise, then worker.evaluateHandle would wait for the promise to resolve and return its value. Shortcut for await worker.executionContext()).evaluateHandle(pageFunction, ...args)",source:"@site/../docs/api/puppeteer.webworker.evaluatehandle.md",sourceDirName:"api",slug:"/api/puppeteer.webworker.evaluatehandle",permalink:"/next/api/puppeteer.webworker.evaluatehandle",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"WebWorker.evaluateHandle"},sidebar:"sidebar",previous:{title:"WebWorker.evaluate",permalink:"/next/api/puppeteer.webworker.evaluate"},next:{title:"WebWorker.executionContext",permalink:"/next/api/puppeteer.webworker.executioncontext"}},i={},u=[{value:"Parameters",id:"parameters",level:2}],c={toc:u};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"webworkerevaluatehandle-method"},"WebWorker.evaluateHandle() method"),(0,n.kt)("p",null,"The only difference between ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluate")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," is that ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns in-page object (JSHandle). If the function passed to the ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"Promise"),", then ",(0,n.kt)("inlineCode",{parentName:"p"},"worker.evaluateHandle")," would wait for the promise to resolve and return its value. Shortcut for ",(0,n.kt)("inlineCode",{parentName:"p"},"await worker.executionContext()).evaluateHandle(pageFunction, ...args)")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Signature:")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"class WebWorker {evaluateHandle<Params extends unknown[], Func extends EvaluateFunc<Params> = EvaluateFunc<Params>>(pageFunction: Func | string, ...args: Params): Promise<HandleFor<Awaited<ReturnType<Func>>>>;}\n")),(0,n.kt)("h2",{id:"parameters"},"Parameters"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:null},"Type"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"pageFunction"),(0,n.kt)("td",{parentName:"tr",align:null},"Func ","|"," string"),(0,n.kt)("td",{parentName:"tr",align:null},"Function to be evaluated in the page context.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"args"),(0,n.kt)("td",{parentName:"tr",align:null},"Params"),(0,n.kt)("td",{parentName:"tr",align:null},"Arguments to pass to ",(0,n.kt)("code",null,"pageFunction"),".")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Returns:")),(0,n.kt)("p",null,"Promise","<",(0,n.kt)("a",{parentName:"p",href:"/next/api/puppeteer.handlefor"},"HandleFor"),"<","Awaited","<","ReturnType","<","Func",">",">",">",">"),(0,n.kt)("p",null,"Promise which resolves to the return value of ",(0,n.kt)("inlineCode",{parentName:"p"},"pageFunction"),"."))}s.isMDXComponent=!0}}]);