"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[842],{513:function(n,t,e){e.d(t,{Df:function(){return o},Eb:function(){return p},Hu:function(){return d},Pg:function(){return f},Ph:function(){return s}});var r=e(861),a=e(687),u=e.n(a),c=e(666);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="0fbb8248b721fef023169dd87d6a1387",o=function(){var n=(0,r.Z)(u().mark((function n(){var t,e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/week?api_key=".concat(i));case 2:return t=n.sent,e=t.data,n.abrupt("return",e.results);case 5:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US&page=1&include_adult=false"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.cast);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(u().mark((function n(t){var e,r;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(i,"&language=en-US"));case 2:return e=n.sent,r=e.data,n.abrupt("return",r.results);case 5:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},307:function(n,t,e){e.d(t,{Z:function(){return d}});var r,a,u=e(689),c=e(87),i=e(168),o=e(32),s=o.Z.ul(r||(r=(0,i.Z)(["\n  margin-top: 12px;\n"]))),f=o.Z.li(a||(a=(0,i.Z)(["\n  font-weight: 500;\n  font-size: 14px;\n\n  border-radius: 14px;\n\n  :not(:last-child) {\n    margin-bottom: 6px;\n  }\n\n  a:hover,\n  a:focus {\n    background-color: #ffc700;\n    color: #111111;\n  }\n\n  a {\n    display: block;\n    padding: 16px 16px;\n  }\n"]))),p=e(184),d=function(n){var t=n.movies,e=(0,u.TH)();return(0,p.jsx)(s,{children:t.map((function(n){var t=n.id,r=n.original_title;return(0,p.jsx)(f,{children:(0,p.jsx)(c.rU,{state:{from:e},to:"/movies/".concat(t),children:r})},t)}))})}},842:function(n,t,e){e.r(t);var r=e(439),a=e(791),u=e(513),c=e(307),i=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],o=t[1];return(0,a.useEffect)((function(){(0,u.Df)("").then(o)}),[]),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(c.Z,{movies:e})]})}}}]);
//# sourceMappingURL=842.c0b9fc2f.chunk.js.map