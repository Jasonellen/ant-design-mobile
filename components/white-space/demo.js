webpackJsonp([25],{9:function(n,a,s){"use strict";s(14),s(13)},13:function(n,a){},14:function(n,a){},20:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0});var e=s(5),p=t(e),o=s(1),c=t(o);a["default"]=function(n){var a=n.type,s=n.className,t=void 0===s?"":s;return c["default"].createElement("i",(0,p["default"])({},n,{className:(t+" anticon anticon-"+a).trim()}))},n.exports=a["default"]},21:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),u=s(7),l=t(u),i=s(6),r=t(i),k=s(1),d=t(k),f=s(3),g=t(f),m=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.style,c=a.onClick,u=(0,g["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:u,style:o,onClick:c})},a}(d["default"].Component);a["default"]=m,m.defaultProps={prefixCls:"am-whitespace",size:"md"},n.exports=a["default"]},22:function(n,a,s){"use strict";s(9),s(50)},23:function(n,a,s){"use strict";s(29)},26:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=void 0;var e=s(8),p=t(e),o=s(4),c=t(o),u=s(7),l=t(u),i=s(6),r=t(i),k=s(1),d=t(k),f=s(3),g=t(f),m=function(n){function a(){return(0,c["default"])(this,a),(0,l["default"])(this,n.apply(this,arguments))}return(0,r["default"])(a,n),a.prototype.render=function(){var n,a=this.props,s=a.prefixCls,t=a.size,e=a.className,o=a.children,c=a.style,u=(0,g["default"])((n={},(0,p["default"])(n,""+s,!0),(0,p["default"])(n,s+"-"+t,!0),(0,p["default"])(n,e,!!e),n));return d["default"].createElement("div",{className:u,style:c},o)},a}(d["default"].Component);a["default"]=m,m.defaultProps={prefixCls:"am-wingblank",size:"lg"},n.exports=a["default"]},27:function(n,a,s){"use strict";s(9),s(53)},28:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}a.__esModule=!0;var e=s(35),p=t(e),o=s(34),c=t(o);a["default"]=function(){function n(n,a){var s=[],t=!0,e=!1,p=void 0;try{for(var o,u=(0,c["default"])(n);!(t=(o=u.next()).done)&&(s.push(o.value),!a||s.length!==a);t=!0);}catch(l){e=!0,p=l}finally{try{!t&&u["return"]&&u["return"]()}finally{if(e)throw p}}return s}return function(a,s){if(Array.isArray(a))return a;if((0,p["default"])(Object(a)))return n(a,s);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}()},29:function(n,a){},31:function(n,a){"use strict";function s(n,a){var s={},t={};return Object.keys(n).forEach(function(e){a.indexOf(e)!==-1?s[e]=n[e]:t[e]=n[e]}),[s,t]}Object.defineProperty(a,"__esModule",{value:!0}),a["default"]=s,n.exports=a["default"]},34:function(n,a,s){n.exports={"default":s(36),__esModule:!0}},35:function(n,a,s){n.exports={"default":s(37),__esModule:!0}},36:function(n,a,s){s(32),s(24),n.exports=s(38)},37:function(n,a,s){s(32),s(24),n.exports=s(39)},38:function(n,a,s){var t=s(43),e=s(52);n.exports=s(18).getIterator=function(n){var a=e(n);if("function"!=typeof a)throw TypeError(n+" is not iterable!");return t(a.call(n))}},39:function(n,a,s){var t=s(60),e=s(25)("iterator"),p=s(46);n.exports=s(18).isIterable=function(n){var a=Object(n);return void 0!==a[e]||"@@iterator"in a||p.hasOwnProperty(t(a))}},45:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){return"string"==typeof n}function p(n){return e(n.type)&&B(n.props.children)?v["default"].cloneElement(n,{},n.props.children.split("").join(" ")):e(n)?(B(n)&&(n=n.split("").join(" ")),v["default"].createElement("span",null,n)):n}Object.defineProperty(a,"__esModule",{value:!0});var o=s(5),c=t(o),u=s(8),l=t(u),i=s(28),r=t(i),k=s(4),d=t(k),f=s(7),g=t(f),m=s(6),h=t(m),y=s(1),v=t(y),b=s(3),x=t(b),E=s(15),T=t(E),S=s(20),_=t(S),W=s(31),M=t(W),w=s(48),z=t(w),C=/^[\u4e00-\u9fa5]{2}$/,B=C.test.bind(C),P=function(n){function a(){return(0,d["default"])(this,a),(0,g["default"])(this,n.apply(this,arguments))}return(0,h["default"])(a,n),a.prototype.render=function(){var n,a=(0,M["default"])(this.props,["children","className","prefixCls","type","size","inline","disabled","htmlType","icon","loading","touchFeedback","activeStyle"]),s=(0,r["default"])(a,2),t=s[0],e=t.children,o=t.className,u=t.prefixCls,i=t.type,k=t.size,d=t.inline,f=t.disabled,g=t.htmlType,m=t.icon,h=t.loading,y=t.touchFeedback,b=t.activeStyle,E=s[1],S=(n={},(0,l["default"])(n,o,o),(0,l["default"])(n,u,!0),(0,l["default"])(n,u+"-primary","primary"===i),(0,l["default"])(n,u+"-ghost","ghost"===i),(0,l["default"])(n,u+"-warning","warning"===i),(0,l["default"])(n,u+"-small","small"===k),(0,l["default"])(n,u+"-loading",h),(0,l["default"])(n,u+"-inline",d),(0,l["default"])(n,u+"-disabled",f),n),W=(0,T["default"])({},this.props.style);y&&(W=(0,T["default"])(W,b),S[u+"-active"]=!0);var w=h?"loading":m,z=v["default"].Children.map(e,p);return v["default"].createElement("button",(0,c["default"])({},E,{style:W,type:g||"button",className:(0,x["default"])(S),disabled:f}),w?v["default"].createElement(_["default"],{type:w}):null,z)},a}(v["default"].Component);P.defaultProps={prefixCls:"am-button",size:"large",inline:!1,disabled:!1,loading:!1},a["default"]=(0,z["default"])(P),n.exports=a["default"]},48:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}function e(n){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",s=u["default"].createClass({displayName:"TouchableFeedbackComponent",statics:{myName:a||"TouchableFeedbackComponent"},getDefaultProps:function(){return{activeStyle:{}}},getInitialState:function(){return{touchFeedback:!1}},onTouchStart:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onTouchEnd:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},onTouchCancel:function(n){this.props.onTouchCancel&&this.props.onTouchCancel(n),this.setTouchFeedbackState(!1)},onMouseDown:function(n){this.props.onTouchStart&&this.props.onTouchStart(n),this.setTouchFeedbackState(!0)},onMouseUp:function(n){this.props.onTouchEnd&&this.props.onTouchEnd(n),this.setTouchFeedbackState(!1)},setTouchFeedbackState:function(n){this.setState({touchFeedback:n})},render:function(){var a={};return this.props.activeStyle&&(a=l?{onTouchStart:this.onTouchStart,onTouchEnd:this.onTouchEnd,onTouchCancel:this.onTouchCancel}:{onMouseDown:this.onMouseDown,onMouseUp:this.state.touchFeedback?this.onMouseUp:void 0,onMouseLeave:this.state.touchFeedback?this.onMouseUp:void 0}),u["default"].createElement(n,(0,o["default"])({},this.props,{touchFeedback:this.state.touchFeedback},a))}});return s}Object.defineProperty(a,"__esModule",{value:!0});var p=s(5),o=t(p);a["default"]=e;var c=s(1),u=t(c),l="undefined"!=typeof window&&"ontouchstart"in window;n.exports=a["default"]},49:function(n,a,s){"use strict";s(9),s(23),s(63)},50:function(n,a){},53:function(n,a){},63:function(n,a){},818:function(n,a,s){"use strict";function t(n){return n&&n.__esModule?n:{"default":n}}var e=(s(27),s(26)),p=t(e),o=(s(49),s(45)),c=t(o),u=(s(22),s(21)),l=t(u),i=s(1),r=t(i),k=s(2);t(k);n.exports={content:[["p","\u4e0a\u4e0b\u7559\u767d ",["code","<WhiteSpace size='md' />"]]],meta:{order:0,title:"\u57fa\u672c",filename:"components/white-space/demo/basic.md",id:"components-white-space-demo-basic"},toc:["ul"],highlightedCode:["pre",{lang:"jsx",highlighted:'<span class="token keyword" >import</span> <span class="token punctuation" >{</span> WhiteSpace<span class="token punctuation" >,</span> WingBlank<span class="token punctuation" >,</span> Button <span class="token punctuation" >}</span> <span class="token keyword" >from</span> <span class="token string" >\'antd-mobile\'</span><span class="token punctuation" >;</span>\n\n<span class="token keyword" >const</span> WhiteSpaceExample <span class="token operator" >=</span> React<span class="token punctuation" >.</span><span class="token function" >createClass</span><span class="token punctuation" >(</span><span class="token punctuation" >{</span>\n  <span class="token function" >render</span><span class="token punctuation" >(</span><span class="token punctuation" >)</span> <span class="token punctuation" >{</span>\n    <span class="token keyword" >return</span> <span class="token punctuation" >(</span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >className</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>button-container<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xs<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4e0b\u7559\u767dxs<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xs<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1Px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sm<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4e0b\u7559\u767dsm<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>sm<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1Px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span><span class="token function" >\u4e0a\u4e0b\u7559\u767dmd</span><span class="token punctuation" >(</span>\u9ed8\u8ba4<span class="token punctuation" >)</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1Px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4e0b\u7559\u767dlg<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>lg<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1Px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WingBlank</span><span class="token punctuation" >></span></span>\n          <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>Button</span> <span class="token attr-name" >type</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>primary<span class="token punctuation" >"</span></span><span class="token punctuation" >></span></span>\u4e0a\u4e0b\u7559\u767dxl<span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>Button</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>WingBlank</span><span class="token punctuation" >></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpace</span> <span class="token attr-name" >size</span><span class="token attr-value" ><span class="token punctuation" >=</span><span class="token punctuation" >"</span>xl<span class="token punctuation" >"</span></span> <span class="token punctuation" >/></span></span>\n        <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>div</span> <span class="token attr-name" >style</span><span class="token script language-javascript" ><span class="token punctuation" >=</span><span class="token punctuation" >{</span><span class="token punctuation" >{</span> borderTop<span class="token punctuation" >:</span> <span class="token string" >\'1Px solid #108ee9\'</span> <span class="token punctuation" >}</span><span class="token punctuation" >}</span></span> <span class="token punctuation" >/></span></span>\n      <span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;/</span>div</span><span class="token punctuation" >></span></span>\n    <span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n  <span class="token punctuation" >}</span><span class="token punctuation" >,</span>\n<span class="token punctuation" >}</span><span class="token punctuation" >)</span><span class="token punctuation" >;</span>\n\nReactDOM<span class="token punctuation" >.</span><span class="token function" >render</span><span class="token punctuation" >(</span><span class="token tag" ><span class="token tag" ><span class="token punctuation" >&lt;</span>WhiteSpaceExample</span> <span class="token punctuation" >/></span></span><span class="token punctuation" >,</span> mountNode<span class="token punctuation" >)</span><span class="token punctuation" >;</span>'}],preview:function(){var n=r["default"].createClass({displayName:"WhiteSpaceExample",render:function(){return r["default"].createElement("div",{className:"button-container"},r["default"].createElement(l["default"],{size:"xs"}),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dxs")),r["default"].createElement(l["default"],{size:"xs"}),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}),r["default"].createElement(l["default"],{size:"sm"}),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dsm")),r["default"].createElement(l["default"],{size:"sm"}),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}),r["default"].createElement(l["default"],null),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dmd(\u9ed8\u8ba4)")),r["default"].createElement(l["default"],null),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}),r["default"].createElement(l["default"],{size:"lg"}),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dlg")),r["default"].createElement(l["default"],{size:"lg"}),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}),r["default"].createElement(l["default"],{size:"xl"}),r["default"].createElement(p["default"],null,r["default"].createElement(c["default"],{type:"primary"},"\u4e0a\u4e0b\u7559\u767dxl")),r["default"].createElement(l["default"],{size:"xl"}),r["default"].createElement("div",{style:{borderTop:"1Px solid #108ee9"}}))}});return r["default"].createElement(n,null)}}},936:function(n,a,s){n.exports={basic:s(818)}}});