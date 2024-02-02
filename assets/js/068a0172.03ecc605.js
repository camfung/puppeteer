/*! For license information please see 068a0172.03ecc605.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[77840],{62554:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>o});var n=r(85893),d=r(11151);const i={sidebar_label:"PDFOptions"},s="PDFOptions interface",c={id:"api/puppeteer.pdfoptions",title:"PDFOptions interface",description:"Valid options to configure PDF generation via Page.pdf().",source:"@site/versioned_docs/version-21.11.0/api/puppeteer.pdfoptions.md",sourceDirName:"api",slug:"/api/puppeteer.pdfoptions",permalink:"/api/puppeteer.pdfoptions",draft:!1,unlisted:!1,tags:[],version:"21.11.0",frontMatter:{sidebar_label:"PDFOptions"},sidebar:"api",previous:{title:"PDFMargin",permalink:"/api/puppeteer.pdfmargin"},next:{title:"Permission",permalink:"/api/puppeteer.permission"}},l={},o=[{value:"Signature:",id:"signature",level:4},{value:"Properties",id:"properties",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pdfoptions-interface",children:"PDFOptions interface"}),"\n",(0,n.jsxs)(t.p,{children:["Valid options to configure PDF generation via ",(0,n.jsx)(t.a,{href:"/api/puppeteer.page.pdf",children:"Page.pdf()"}),"."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"export interface PDFOptions\n"})}),"\n",(0,n.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Property"}),(0,n.jsx)(t.th,{children:"Modifiers"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{children:"Description"}),(0,n.jsx)(t.th,{children:"Default"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"displayHeaderFooter"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Whether to show the header and footer."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"footerTemplate"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:["HTML template for the print footer. Has the same constraints and support for special classes as ",(0,n.jsx)(t.a,{href:"/api/puppeteer.pdfoptions",children:"PDFOptions.headerTemplate"}),"."]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"format"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.paperformat",children:"PaperFormat"})}),(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("code",{children:"letter"}),"."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"headerTemplate"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("p",{children:"HTML template for the print header. Should be valid HTML with the following classes used to inject values into them:"}),(0,n.jsxs)("p",{children:["- ",(0,n.jsx)("code",{children:"date"})," formatted print date"]}),(0,n.jsxs)("p",{children:["- ",(0,n.jsx)("code",{children:"title"})," document title"]}),(0,n.jsxs)("p",{children:["- ",(0,n.jsx)("code",{children:"url"})," document location"]}),(0,n.jsxs)("p",{children:["- ",(0,n.jsx)("code",{children:"pageNumber"})," current page number"]}),(0,n.jsxs)("p",{children:["- ",(0,n.jsx)("code",{children:"totalPages"})," total pages in the document"]})]}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"height"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"string | number"}),(0,n.jsx)(t.td,{children:"Sets the height of paper. You can pass in a number or a string with a unit."}),(0,n.jsx)(t.td,{})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"landscape"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Whether to print in landscape orientation."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"margin"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/api/puppeteer.pdfmargin",children:"PDFMargin"})}),(0,n.jsx)(t.td,{children:"Set the PDF margins."}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("code",{children:"undefined"})," no margins are set."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"omitBackground"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Hides default white background and allows generating pdfs with transparency."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"outline"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Generate document outline."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"pageRanges"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsxs)(t.td,{children:["Paper ranges to print, e.g. ",(0,n.jsx)("code",{children:"1-5, 8, 11-13"}),"."]}),(0,n.jsx)(t.td,{children:"The empty string, which means all pages are printed."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"path"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"string"}),(0,n.jsx)(t.td,{children:"The path to save the file to."}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("code",{children:"undefined"}),", which means the PDF will not be written to disk."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"preferCSSPageSize"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsxs)(t.td,{children:["Give any CSS ",(0,n.jsx)("code",{children:"@page"})," size declared in the page priority over what is declared in the ",(0,n.jsx)("code",{children:"width"})," or ",(0,n.jsx)("code",{children:"height"})," or ",(0,n.jsx)("code",{children:"format"})," option."]}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)("code",{children:"false"}),", which will scale the content to fit the paper size."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"printBackground"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsxs)(t.td,{children:["Set to ",(0,n.jsx)("code",{children:"true"})," to print background graphics."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"scale"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsxs)(t.td,{children:["Scales the rendering of the web page. Amount must be between ",(0,n.jsx)("code",{children:"0.1"})," and ",(0,n.jsx)("code",{children:"2"}),"."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"1"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"tagged"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"boolean"}),(0,n.jsx)(t.td,{children:"Generate tagged (accessible) PDF."}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"false"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"timeout"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"number"}),(0,n.jsxs)(t.td,{children:["Timeout in milliseconds. Pass ",(0,n.jsx)("code",{children:"0"})," to disable timeout."]}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"30_000"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"width"}),(0,n.jsx)(t.td,{children:(0,n.jsx)("code",{children:"optional"})}),(0,n.jsx)(t.td,{children:"string | number"}),(0,n.jsx)(t.td,{children:"Sets the width of paper. You can pass in a number or a string with a unit."}),(0,n.jsx)(t.td,{})]})]})]})]})}function a(e={}){const{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},75251:(e,t,r)=>{var n=r(67294),d=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,r){var n,i={},o=null,h=null;for(n in void 0!==r&&(o=""+r),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(h=t.ref),t)s.call(t,n)&&!l.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:d,type:e,key:o,ref:h,props:i,_owner:c.current}}t.Fragment=i,t.jsx=o,t.jsxs=o},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var n=r(67294);const d={},i=n.createContext(d);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);