webpackJsonp([40],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},19:function(n,a){"use strict";function s(n){var a={};return Object.keys(n).forEach(function(s){0===s.indexOf("data-")&&(a[s]=n[s])}),a}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},20:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var p=s(5),e=t(p),o=s(1),c=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,e["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},21:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(8),e=t(p),o=s(4),c=t(o),l=s(7),u=t(l),i=s(6),k=t(i),r=s(1),d=t(r),f=s(3),m=t(f),g=function(n){function a(){return(0,c["default"])(this,a),(0,u["default"])(this,n.apply(this,arguments))}return(0,k["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,p=a.className,o=a.style,c=a.onClick,l=(0,m["default"])((n={},(0,e["default"])(n,""+s,!0),(0,e["default"])(n,s+"-"+t,!0),(0,e["default"])(n,p,!!p),n));return d["default"].createElement("div",{className:l,style:o,onClick:c})},a}(d["default"].Component);a["default"]=g,g.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,s){"use strict";s(9),s(50)},23:function(n,a,s){"use strict";s(29)},29:function(n,a){},50:function(n,a){},335:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var p=s(5),e=t(p),o=s(8),c=t(o),l=s(4),u=t(l),i=s(7),k=t(i),r=s(6),d=t(r),f=s(1),m=t(f),g=s(3),v=t(g),h=s(19),y=t(h),E=s(20),N=t(E),b=function(n){function a(s){(0,u["default"])(this,a);var t=(0,k["default"])(this,n.call(this,s));return t.state={show:!0},t}return(0,d["default"])(a,n),a.prototype.onClick=function s(){var n=this.props,a=n.mode,s=n.onClick;s&&s(),"closable"===a&&this.setState({show:!1})},a.prototype.render=function(){var n,a=this,s=this.props,t=s.prefixCls,p=s.children,o=s.mode,l=s.type,u=s.onClick,i=s.className,k=(0,v["default"])((n={},(0,c["default"])(n,t,!0),(0,c["default"])(n,i,!!i),n)),r=void 0;switch(o){case"closable":r=m["default"].createElement("div",{className:t+"-operation",onClick:function(){return a.onClick()}},m["default"].createElement(N["default"],{type:"cross"}));break;case"link":r=m["default"].createElement("div",{className:t+"-operation",onClick:u},m["default"].createElement(N["default"],{type:"right"}));break;default:r=null}var d="";switch(l){case"success":d="check-circle";break;case"error":d="cross-circle";break;case"warn":d="exclamation-circle";break;case"question":d="question-circle";break;case"info":default:d="info-circle"}var f=l?m["default"].createElement("div",{className:t+"-icon"},m["default"].createElement(N["default"],{type:d})):null;return this.state.show?m["default"].createElement("div",(0,e["default"])({},(0,y["default"])(this.props),{className:k}),f,m["default"].createElement("div",{className:t+"-content"},p),r):null},a}(m["default"].Component);a["default"]=b,b.defaultProps={prefixCls:"am-notice-bar",mode:"",onClick:function(){}},n.exports=a["default"]},336:function(n,a,s){"use strict";s(9),s(23),s(1167)},744:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(336),s(335)),e=t(p),o=(s(22),s(21)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p","\u662f\u5426\u663e\u793a\u5173\u95ed\u6309\u94ae\uff0c\u70b9\u51fb\u5173\u95ed\u56fe\u6807\u540e\uff0c\u9690\u85cf\u8be5\u680f\u3002"]],meta:{order:0,title:"\u53ef\u5173\u95ed",filename:"components/notice-bar/demo/closable.md",id:"components-notice-bar-demo-closable"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NoticeBar<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> NoticeBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >onClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token function" >alert</span><span class="token punctuation" >(</span><span class="token string" >\'clicked\'</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>closable<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token keyword" >this</span><span class="token punctuation" >.</span>onClick<span class="token punctuation" >}</span></span><span class="token punctuation" >></span></span>\n          \u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token number" >1</span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>closable<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"NoticeBarExample",onClick:function(){alert("clicked")},render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"closable",onClick:this.onClick},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f41"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{type:"info",mode:"closable"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}))}});return u["default"].createElement(n,null)}}},745:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(336),s(335)),e=t(p),o=(s(22),s(21)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p","\u663e\u793a\u6210\u529f, \u9519\u8bef, \u4fe1\u606f, \u8b66\u544a, \u95ee\u9898 \u56fe\u6807"]],meta:{order:2,title:"\u56fe\u6807\u540d\u79f0",filename:"components/notice-bar/demo/icon.md",id:"components-notice-bar-demo-icon"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NoticeBar<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> NoticeBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>warn<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>closable<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>success<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>error<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>link<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>question<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=u["default"].createClass({displayName:"NoticeBarExample",render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{type:"info"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{type:"warn"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"closable",type:"success"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{type:"error"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"link",type:"question"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}))}});return u["default"].createElement(n,null)}}},746:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var p=(s(336),s(335)),e=t(p),o=(s(22),s(21)),c=t(o),l=s(1),u=t(l),i=s(2);t(i);n.exports={content:[["p","\u662f\u5426\u663e\u793a\u8df3\u8f6c\u7bad\u5934\u56fe\u6807\uff0c\u70b9\u51fb\u4e4b\u540e\u4f1a\u8df3\u8f6c\u5230\u522b\u7684\u9875\u9762\u3002"]],meta:{order:1,title:"\u8df3\u8f6c",filename:"components/notice-bar/demo/link.md",id:"components-notice-bar-demo-link"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> NoticeBar<span class="token punctuation" >,</span> WhiteSpace <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >function</span> <span class="token function" >linkClick</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n  <span class="token comment" spellcheck="true">// \u8fd9\u91cc\u914d\u7f6e\u8df3\u8f6c</span>\n<span class="token punctuation" >}</span>\n\n<span class="token keyword" >const</span> NoticeBarExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>link<span class="token punctuation" >"</span></span> <span class="token attr-name" >onClick</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span>linkClick<span class="token punctuation" >}</span></span> <span class="token attr-name" >data-seed</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>logId<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n          \u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBar</span> <span class="token attr-name" >mode</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>link<span class="token punctuation" >"</span></span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>info<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>NoticeBar</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>NoticeBarExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){function n(){}var a=u["default"].createClass({displayName:"NoticeBarExample",render:function(){return u["default"].createElement("div",null,u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"link",onClick:n,"data-seed":"logId"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}),u["default"].createElement(e["default"],{mode:"link",type:"info"},"\u56fd\u5e86\u671f\u95f4\u4f59\u989d\u5b9d\u6536\u76ca\u548c\u8f6c\u51fa\u5230\u8d26\u65f6\u95f4"),u["default"].createElement(c["default"],{size:"lg"}))}});return u["default"].createElement(a,null)}}},914:function(n,a,s){n.exports={closable:s(744),icon:s(745),link:s(746)}},1167:function(n,a){}});