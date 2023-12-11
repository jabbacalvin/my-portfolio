"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[429,326],{7492:function(t,e,i){i.d(e,{Z:function(){return s}});var n=i(2791),r=i(5523),a=i(1440),o=i(4900),c=i(9230),l=i(184),s=function(t){var e=t.onClose,i=(0,n.useContext)(o.Z),s=i.isDarkMode,d=i.setIsDarkMode,u=(0,c.$G)().t;return(0,l.jsx)(r.Z,{control:(0,l.jsx)(a.Z,{checked:s,name:"checkedDarkMode",color:"primary",onChange:function(){e&&e(),d(!s)}}),label:u("dark_mode")})}},9429:function(t,e,i){i.r(e),i.d(e,{default:function(){return m}});i(2791);var n=i(3967),r=i(5193),a=i(9164),o=i(7924),c=i(4554),l=i(890),s=i(8419),d=i(5058),u=i(184),h=function(t){return{footer:{paddingTop:t.spacing(4),paddingBottom:t.spacing(6)}}},m=function(){var t=(0,n.Z)(),e=(0,d.Z)(h(t)),i=(0,r.Z)(t.breakpoints.down("sm"));return(0,u.jsxs)(a.Z,{children:[(0,u.jsx)(o.Z,{style:{backgroundColor:t.palette.primary.main}}),(0,u.jsxs)(c.Z,{className:e.footer,children:[i&&(0,u.jsx)(s.default,{mobile:!0}),(0,u.jsx)(l.Z,{variant:"body2",children:"\xa9 2023 Calvin Hsu"})]})]})}},8419:function(t,e,i){i.r(e),i.d(e,{default:function(){return j}});var n=i(2791),r=i(3967),a=i(3240),o=i(9580),c=i(9201),l=i(184),s=(0,c.Z)((0,l.jsx)("path",{d:"M12 1.27a11 11 0 00-3.48 21.46c.55.09.73-.28.73-.55v-1.84c-3.03.64-3.67-1.46-3.67-1.46-.55-1.29-1.28-1.65-1.28-1.65-.92-.65.1-.65.1-.65 1.1 0 1.73 1.1 1.73 1.1.92 1.65 2.57 1.2 3.21.92a2 2 0 01.64-1.47c-2.47-.27-5.04-1.19-5.04-5.5 0-1.1.46-2.1 1.2-2.84a3.76 3.76 0 010-2.93s.91-.28 3.11 1.1c1.8-.49 3.7-.49 5.5 0 2.1-1.38 3.02-1.1 3.02-1.1a3.76 3.76 0 010 2.93c.83.74 1.2 1.74 1.2 2.94 0 4.21-2.57 5.13-5.04 5.4.45.37.82.92.82 2.02v3.03c0 .27.1.64.73.55A11 11 0 0012 1.27"}),"GitHub"),d=(0,c.Z)((0,l.jsx)("path",{d:"M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"}),"LinkedIn"),u=(0,c.Z)((0,l.jsx)("path",{d:"M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"}),"Email"),h=i(1413),m=i(5987),v=i(4554),f=i(533),p=i(5058),x=["icon","href","fontSize"],g=function(t){var e=t.icon,i=t.href,n=t.fontSize,a=(0,m.Z)(t,x),c=(0,r.Z)();return(0,l.jsx)(v.Z,(0,h.Z)((0,h.Z)({display:"inline"},a),{},{component:o.E.div,whileHover:{scale:1.1},children:(0,l.jsx)(f.Z,{href:i,target:"_blank",children:(0,l.jsx)(e,{sx:{color:c.palette.text.secondary,transition:"0.1s",cursor:"pointer",fontSize:n?"".concat(n,"px"):"32px","&:hover":{color:c.palette.text.primary}}})})}))},b=i(7492),Z=i(708),w=function(t){return{socialIcon:{marginBottom:"5px"},wrapper:{display:"flex",flexDirection:"column",alignItems:"flex-end",position:"fixed",bottom:0,right:0,padding:t.spacing(2),zIndex:100},mobileWrapper:{display:"flex"}}},j=function(t){var e=t.mobile,i=(0,r.Z)(),c=(0,p.Z)(w(i)),h=(0,n.useContext)(Z.Z).isLoading,m=(0,a._)();return(0,n.useEffect)((function(){h?m.start({opacity:0,y:0}):m.start((function(t){return{opacity:1,y:0,transition:{delay:1.8+.1*t}}}))}),[h,m]),e?(0,l.jsxs)("div",{className:c.mobileWrapper,children:[(0,l.jsx)(g,{icon:s,m:1,href:"https://github.com/jabbacalvin"}),(0,l.jsx)(g,{icon:d,m:1,href:"https://www.linkedin.com/in/hsucalvin/"}),(0,l.jsx)(g,{icon:u,m:1,href:"mailto:jabbacalvin@gmail.com"})]}):(0,l.jsxs)(o.E.div,{className:c.wrapper,children:[(0,l.jsx)(o.E.div,{animate:m,custom:0,className:c.socialIcon,children:(0,l.jsx)(g,{icon:s,m:1,href:"https://github.com/jabbacalvin"})}),(0,l.jsx)(o.E.div,{animate:m,custom:1,className:c.socialIcon,children:(0,l.jsx)(g,{icon:d,m:1,href:"https://www.linkedin.com/in/hsucalvin/"})}),(0,l.jsx)(o.E.div,{animate:m,custom:2,className:c.socialIcon,children:(0,l.jsx)(g,{icon:u,m:1,href:"mailto:jabbacalvin@gmail.com"})}),(0,l.jsx)(o.E.div,{animate:m,custom:3,className:c.socialIcon,children:(0,l.jsx)(b.Z,{})})]})}},5058:function(t,e,i){var n=i(9439),r=i(2791),a=i(7847),o=i(5149);e.Z=function(t){var e=(0,o.u)();return(0,r.useMemo)((function(){var i="function"===typeof t?t(e):t,r={};return Object.entries(i).forEach((function(t){var e=(0,n.Z)(t,2),i=e[0],o=e[1],c=void 0===o?{}:o;r[i]=(0,a.iv)(c)})),r}),[t,e])}},4554:function(t,e,i){i.d(e,{Z:function(){return g}});var n=i(7462),r=i(3366),a=i(2791),o=i(3733),c=i(5675),l=i(104),s=i(8519),d=i(418),u=i(184),h=["className","component"];var m=i(5902),v=i(7107),f=i(988),p=(0,v.Z)(),x=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.themeId,i=t.defaultTheme,m=t.defaultClassName,v=void 0===m?"MuiBox-root":m,f=t.generateClassName,p=(0,c.ZP)("div",{shouldForwardProp:function(t){return"theme"!==t&&"sx"!==t&&"as"!==t}})(l.Z);return a.forwardRef((function(t,a){var c=(0,d.Z)(i),l=(0,s.Z)(t),m=l.className,x=l.component,g=void 0===x?"div":x,b=(0,r.Z)(l,h);return(0,u.jsx)(p,(0,n.Z)({as:g,ref:a,className:(0,o.Z)(m,f?f(v):v),theme:e&&c[e]||c},b))}))}({themeId:f.Z,defaultTheme:p,defaultClassName:"MuiBox-root",generateClassName:m.Z.generate}),g=x},9164:function(t,e,i){i.d(e,{Z:function(){return k}});var n=i(4942),r=i(3366),a=i(7462),o=i(2791),c=i(3733),l=i(1122),s=i(1217),d=i(4419),u=i(6083),h=i(3457),m=i(5080),v=i(184),f=["className","component","disableGutters","fixed","maxWidth","classes"],p=(0,m.Z)(),x=(0,h.Z)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState;return[e.root,e["maxWidth".concat((0,l.Z)(String(i.maxWidth)))],i.fixed&&e.fixed,i.disableGutters&&e.disableGutters]}}),g=function(t){return(0,u.Z)({props:t,name:"MuiContainer",defaultTheme:p})};var b=i(4036),Z=i(6934),w=i(1402),j=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.createStyledComponent,i=void 0===e?x:e,u=t.useThemeProps,h=void 0===u?g:u,m=t.componentName,p=void 0===m?"MuiContainer":m,b=i((function(t){var e=t.theme,i=t.ownerState;return(0,a.Z)({width:"100%",marginLeft:"auto",boxSizing:"border-box",marginRight:"auto",display:"block"},!i.disableGutters&&(0,n.Z)({paddingLeft:e.spacing(2),paddingRight:e.spacing(2)},e.breakpoints.up("sm"),{paddingLeft:e.spacing(3),paddingRight:e.spacing(3)}))}),(function(t){var e=t.theme;return t.ownerState.fixed&&Object.keys(e.breakpoints.values).reduce((function(t,i){var n=i,r=e.breakpoints.values[n];return 0!==r&&(t[e.breakpoints.up(n)]={maxWidth:"".concat(r).concat(e.breakpoints.unit)}),t}),{})}),(function(t){var e=t.theme,i=t.ownerState;return(0,a.Z)({},"xs"===i.maxWidth&&(0,n.Z)({},e.breakpoints.up("xs"),{maxWidth:Math.max(e.breakpoints.values.xs,444)}),i.maxWidth&&"xs"!==i.maxWidth&&(0,n.Z)({},e.breakpoints.up(i.maxWidth),{maxWidth:"".concat(e.breakpoints.values[i.maxWidth]).concat(e.breakpoints.unit)}))})),Z=o.forwardRef((function(t,e){var i=h(t),n=i.className,o=i.component,u=void 0===o?"div":o,m=i.disableGutters,x=void 0!==m&&m,g=i.fixed,Z=void 0!==g&&g,w=i.maxWidth,j=void 0===w?"lg":w,k=(0,r.Z)(i,f),S=(0,a.Z)({},i,{component:u,disableGutters:x,fixed:Z,maxWidth:j}),C=function(t,e){var i=t.classes,n=t.fixed,r=t.disableGutters,a=t.maxWidth,o={root:["root",a&&"maxWidth".concat((0,l.Z)(String(a))),n&&"fixed",r&&"disableGutters"]};return(0,d.Z)(o,(function(t){return(0,s.Z)(e,t)}),i)}(S,p);return(0,v.jsx)(b,(0,a.Z)({as:u,ownerState:S,className:(0,c.Z)(C.root,n),ref:e},k))}));return Z}({createStyledComponent:(0,Z.ZP)("div",{name:"MuiContainer",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState;return[e.root,e["maxWidth".concat((0,b.Z)(String(i.maxWidth)))],i.fixed&&e.fixed,i.disableGutters&&e.disableGutters]}}),useThemeProps:function(t){return(0,w.Z)({props:t,name:"MuiContainer"})}}),k=j},7924:function(t,e,i){i.d(e,{Z:function(){return b}});var n=i(3366),r=i(7462),a=i(2791),o=i(3733),c=i(4419),l=i(2065),s=i(6934),d=i(1402),u=i(5878),h=i(1217);function m(t){return(0,h.Z)("MuiDivider",t)}(0,u.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);var v=i(184),f=["absolute","children","className","component","flexItem","light","orientation","role","textAlign","variant"],p=(0,s.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:function(t,e){var i=t.ownerState;return[e.root,i.absolute&&e.absolute,e[i.variant],i.light&&e.light,"vertical"===i.orientation&&e.vertical,i.flexItem&&e.flexItem,i.children&&e.withChildren,i.children&&"vertical"===i.orientation&&e.withChildrenVertical,"right"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignRight,"left"===i.textAlign&&"vertical"!==i.orientation&&e.textAlignLeft]}})((function(t){var e=t.theme,i=t.ownerState;return(0,r.Z)({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin"},i.absolute&&{position:"absolute",bottom:0,left:0,width:"100%"},i.light&&{borderColor:e.vars?"rgba(".concat(e.vars.palette.dividerChannel," / 0.08)"):(0,l.Fq)(e.palette.divider,.08)},"inset"===i.variant&&{marginLeft:72},"middle"===i.variant&&"horizontal"===i.orientation&&{marginLeft:e.spacing(2),marginRight:e.spacing(2)},"middle"===i.variant&&"vertical"===i.orientation&&{marginTop:e.spacing(1),marginBottom:e.spacing(1)},"vertical"===i.orientation&&{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"},i.flexItem&&{alignSelf:"stretch",height:"auto"})}),(function(t){var e=t.ownerState;return(0,r.Z)({},e.children&&{display:"flex",whiteSpace:"nowrap",textAlign:"center",border:0,"&::before, &::after":{content:'""',alignSelf:"center"}})}),(function(t){var e=t.theme,i=t.ownerState;return(0,r.Z)({},i.children&&"vertical"!==i.orientation&&{"&::before, &::after":{width:"100%",borderTop:"thin solid ".concat((e.vars||e).palette.divider)}})}),(function(t){var e=t.theme,i=t.ownerState;return(0,r.Z)({},i.children&&"vertical"===i.orientation&&{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:"thin solid ".concat((e.vars||e).palette.divider)}})}),(function(t){var e=t.ownerState;return(0,r.Z)({},"right"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"90%"},"&::after":{width:"10%"}},"left"===e.textAlign&&"vertical"!==e.orientation&&{"&::before":{width:"10%"},"&::after":{width:"90%"}})})),x=(0,s.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:function(t,e){var i=t.ownerState;return[e.wrapper,"vertical"===i.orientation&&e.wrapperVertical]}})((function(t){var e=t.theme,i=t.ownerState;return(0,r.Z)({display:"inline-block",paddingLeft:"calc(".concat(e.spacing(1)," * 1.2)"),paddingRight:"calc(".concat(e.spacing(1)," * 1.2)")},"vertical"===i.orientation&&{paddingTop:"calc(".concat(e.spacing(1)," * 1.2)"),paddingBottom:"calc(".concat(e.spacing(1)," * 1.2)")})})),g=a.forwardRef((function(t,e){var i=(0,d.Z)({props:t,name:"MuiDivider"}),a=i.absolute,l=void 0!==a&&a,s=i.children,u=i.className,h=i.component,g=void 0===h?s?"div":"hr":h,b=i.flexItem,Z=void 0!==b&&b,w=i.light,j=void 0!==w&&w,k=i.orientation,S=void 0===k?"horizontal":k,C=i.role,W=void 0===C?"hr"!==g?"separator":void 0:C,y=i.textAlign,N=void 0===y?"center":y,M=i.variant,I=void 0===M?"fullWidth":M,R=(0,n.Z)(i,f),A=(0,r.Z)({},i,{absolute:l,component:g,flexItem:Z,light:j,orientation:S,role:W,textAlign:N,variant:I}),L=function(t){var e=t.absolute,i=t.children,n=t.classes,r=t.flexItem,a=t.light,o=t.orientation,l=t.textAlign,s={root:["root",e&&"absolute",t.variant,a&&"light","vertical"===o&&"vertical",r&&"flexItem",i&&"withChildren",i&&"vertical"===o&&"withChildrenVertical","right"===l&&"vertical"!==o&&"textAlignRight","left"===l&&"vertical"!==o&&"textAlignLeft"],wrapper:["wrapper","vertical"===o&&"wrapperVertical"]};return(0,c.Z)(s,m,n)}(A);return(0,v.jsx)(p,(0,r.Z)({as:g,className:(0,o.Z)(L.root,u),role:W,ref:e,ownerState:A},R,{children:s?(0,v.jsx)(x,{className:L.wrapper,ownerState:A,children:s}):null}))}));g.muiSkipListHighlight=!0;var b=g}}]);
//# sourceMappingURL=429.4645573f.chunk.js.map