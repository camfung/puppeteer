"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[16059],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=c(r),d=a,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||l;return r?n.createElement(k,i(i({ref:t},s),{},{components:r})):n.createElement(k,i({ref:t},s))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var c=2;c<l;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11476:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_label:"Page.click"},i="Page.click() method",o={unversionedId:"api/puppeteer.page.click",id:"api/puppeteer.page.click",title:"Page.click() method",description:"This method fetches an element with selector, scrolls it into view if needed, and then uses Page.mouse to click in the center of the element. If there's no element matching selector, the method throws an error.",source:"@site/../docs/api/puppeteer.page.click.md",sourceDirName:"api",slug:"/api/puppeteer.page.click",permalink:"/next/api/puppeteer.page.click",draft:!1,tags:[],version:"current",frontMatter:{sidebar_label:"Page.click"},sidebar:"sidebar",previous:{title:"Page.browserContext",permalink:"/next/api/puppeteer.page.browsercontext"},next:{title:"Page.close",permalink:"/next/api/puppeteer.page.close"}},p={},c=[{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}],s={toc:c};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pageclick-method"},"Page.click() method"),(0,a.kt)("p",null,"This method fetches an element with ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", scrolls it into view if needed, and then uses ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.page.mouse"},"Page.mouse")," to click in the center of the element. If there's no element matching ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),", the method throws an error."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Signature:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class Page {click(selector: string, options?: {\n        delay?: number;\n        button?: MouseButton;\n        clickCount?: number;\n    }): Promise<void>;}\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"selector"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"A ",(0,a.kt)("code",null,"selector")," to search for element to click. If there are multiple elements satisfying the ",(0,a.kt)("code",null,"selector"),", the first will be clicked")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"options"),(0,a.kt)("td",{parentName:"tr",align:null},"{ delay?: number; button?: ",(0,a.kt)("a",{parentName:"td",href:"/next/api/puppeteer.mousebutton"},"MouseButton"),"; clickCount?: number; }"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("i",null,"(Optional)")," ",(0,a.kt)("code",null,"Object"))))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Returns:")),(0,a.kt)("p",null,"Promise","<","void",">"),(0,a.kt)("p",null,"Promise which resolves when the element matching ",(0,a.kt)("inlineCode",{parentName:"p"},"selector")," is successfully clicked. The Promise will be rejected if there is no element matching ",(0,a.kt)("inlineCode",{parentName:"p"},"selector"),"."),(0,a.kt)("h2",{id:"remarks"},"Remarks"),(0,a.kt)("p",null,"Bear in mind that if ",(0,a.kt)("inlineCode",{parentName:"p"},"click()")," triggers a navigation event and there's a separate ",(0,a.kt)("inlineCode",{parentName:"p"},"page.waitForNavigation()")," promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"const [response] = await Promise.all([\npage.waitForNavigation(waitOptions),\npage.click(selector, clickOptions),\n]);\n")),(0,a.kt)("p",null,"Shortcut for ",(0,a.kt)("a",{parentName:"p",href:"/next/api/puppeteer.frame.click"},"page.mainFrame().click(selector","[",", options","]",")"),"."))}u.isMDXComponent=!0}}]);