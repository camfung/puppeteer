"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40430],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),s=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,h=c["".concat(o,".").concat(m)]||c[m]||u[m]||l;return a?n.createElement(h,p(p({ref:t},d),{},{components:a})):n.createElement(h,p({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},112:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const l={sidebar_label:"JSHandle"},p="JSHandle class",i={unversionedId:"api/puppeteer.jshandle",id:"api/puppeteer.jshandle",title:"JSHandle class",description:"Represents an in-page JavaScript object. JSHandles can be created with the page.evaluateHandle method.",source:"@site/../docs/api/puppeteer.jshandle.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle",permalink:"/next/api/puppeteer.jshandle",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"JSHandle"},sidebar:"sidebar",previous:{title:"JSCoverageOptions.resetOnNavigation",permalink:"/next/api/puppeteer.jscoverageoptions.resetonnavigation"},next:{title:"JSHandle.asElement",permalink:"/next/api/puppeteer.jshandle.aselement"}},o={},s=[{value:"Remarks",id:"remarks",level:2},{value:"Example",id:"example",level:2},{value:"Methods",id:"methods",level:2}],d={toc:s};function u(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"jshandle-class"},"JSHandle class"),(0,r.kt)("p",null,"Represents an in-page JavaScript object. JSHandles can be created with the ",(0,r.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.evaluatehandle"},"page.evaluateHandle")," method."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Signature:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"export declare class JSHandle<T = unknown> \n")),(0,r.kt)("h2",{id:"remarks"},"Remarks"),(0,r.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,r.kt)("inlineCode",{parentName:"p"},"JSHandle")," class."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const windowHandle = await page.evaluateHandle(() => window);\n")),(0,r.kt)("p",null,"JSHandle prevents the referenced JavaScript object from being garbage-collected unless the handle is ",(0,r.kt)("a",{parentName:"p",href:"/next/api/puppeteer.jshandle.dispose"},"disposed"),". JSHandles are auto- disposed when their origin frame gets navigated or the parent context gets destroyed."),(0,r.kt)("p",null,"JSHandle instances can be used as arguments for , ",(0,r.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.evaluate"},"Page.evaluate()"),", and ",(0,r.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.evaluatehandle"},"Page.evaluateHandle()"),"."),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Method"),(0,r.kt)("th",{parentName:"tr",align:null},"Modifiers"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.aselement"},"asElement()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.dispose"},"dispose()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Stops referencing the element handle, and resolves when the object handle is successfully disposed of.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.evaluate"},"evaluate(pageFunction, args)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method passes this handle as the first argument to ",(0,r.kt)("code",null,"pageFunction"),". If ",(0,r.kt)("code",null,"pageFunction")," returns a Promise, then ",(0,r.kt)("code",null,"handle.evaluate")," would wait for the promise to resolve and return its value.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.evaluatehandle"},"evaluateHandle(pageFunction, args)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"This method passes this handle as the first argument to ",(0,r.kt)("code",null,"pageFunction"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.executioncontext"},"executionContext()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Returns the execution context the handle belongs to.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.getproperties"},"getProperties()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The method returns a map with property names as keys and JSHandle instances for the property values.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.getproperty"},"getProperty(propertyName)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Fetches a single property from the referenced object.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.getproperty_1"},"getProperty(propertyName)")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.jsonvalue"},"jsonValue()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null})),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("a",{parentName:"td",href:"/next/api/puppeteer.jshandle.tostring"},"toString()")),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Returns a string representation of the JSHandle.")))))}u.isMDXComponent=!0}}]);