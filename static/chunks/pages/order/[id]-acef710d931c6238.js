(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[441],{5281:function(e,s,r){"use strict";r.r(s);var a=r(29),t=r(7794),i=r.n(t),l=r(1163),d=r(7294),c=r(5939),n=r(810),o=r(5893),h=function(){var e=(0,d.useState)(!0),s=e[0],r=e[1],t=(0,d.useState)({}),h=t[0],m=t[1],u=(0,l.useRouter)().query.id;(0,d.useEffect)(function(){var e,s=(e=(0,a.Z)(i().mark(function e(){var s,a;return i().wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,n.Yu)("/api/orders/".concat(u));case 3:if(!(s=e.sent).error){e.next=9;break}return console.log(s.error),e.abrupt("return");case 9:return e.next=11,s.json();case 11:a=e.sent,console.log(a),r(!1),m(a);case 15:e.next=20;break;case 17:e.prev=17,e.t0=e.catch(0),console.log(e.t0);case 20:case"end":return e.stop()}},e,null,[[0,17]])})),function(){return e.apply(this,arguments)});(!h._id||h._id&&h._id!==u)&&s()},[h,u]);var x=h.shippingAddress,j=h.orderItems,N=h.itemsPrice,p=h.shippingPrice,b=h.totalPrice,v=h.paidAt;return(0,o.jsxs)("div",{className:"order-details-container",children:[(0,o.jsx)("h1",{className:"order-details-title",children:"Order Details"}),(0,o.jsx)("h2",{className:"order-details-id",children:"ID: ".concat(u)}),s?(0,o.jsx)(c.aN,{}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("h2",{className:"order-details-subtitle",children:"Shipping Address"}),(0,o.jsxs)("p",{className:"order-details-address",children:[x.fullName,", ",x.address,", ",x.city,", ",x.postalCode,", ",x.country]}),(0,o.jsx)("h2",{className:"order-details-subtitle",children:"Payment"}),(0,o.jsxs)("div",{className:"order-details-payment",children:["Paid with Stripe at ",v.replace(/T.*/i,"")]}),(0,o.jsx)("h2",{className:"order-details-subtitle",children:"Order Items"}),(0,o.jsx)("div",{className:"order-details-table-container",children:(0,o.jsxs)("table",{className:"order-details-table",children:[(0,o.jsx)("thead",{className:"order-details-table-head",children:(0,o.jsxs)("tr",{children:[(0,o.jsx)("th",{className:"order-details-table-column-title",children:"Item"}),(0,o.jsx)("th",{className:"order-details-table-column-title",children:"Quantity"}),(0,o.jsx)("th",{className:"order-details-table-column-title",children:"Price"}),(0,o.jsx)("th",{className:"order-details-table-column-title",children:"Subtotal"})]})}),(0,o.jsx)("tbody",{className:"order-details-table-body",children:j.map(function(e){return(0,o.jsxs)("tr",{className:"border-b",children:[(0,o.jsx)("td",{children:(0,o.jsxs)("a",{className:"order-details-image-container",children:[(0,o.jsx)("img",{src:e.image,alt:e.name,width:50,height:50}),"\xa0",e.name]})}),(0,o.jsx)("td",{className:"order-details-table-column-item",children:e.quantity}),(0,o.jsxs)("td",{className:"order-details-table-column-item",children:["$",e.price]}),(0,o.jsxs)("td",{className:"order-details-table-column-item",children:["$",e.quantity*e.price]})]},e._id)})})]})}),(0,o.jsxs)("div",{className:"order-details-card",children:[(0,o.jsx)("h2",{className:"order-details-subtitle",children:"Order Summary"}),(0,o.jsxs)("ul",{className:"order-details-summary",children:[(0,o.jsx)("li",{children:(0,o.jsxs)("div",{className:"order-details-summary-item",children:[(0,o.jsx)("div",{children:"Items"}),(0,o.jsxs)("div",{children:["$",N]})]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("div",{className:"order-details-summary-item",children:[(0,o.jsx)("div",{children:"Shipping"}),(0,o.jsxs)("div",{children:["$",p]})]})}),(0,o.jsx)("li",{children:(0,o.jsxs)("div",{className:"order-details-summary-item bold",children:[(0,o.jsx)("div",{children:"Total"}),(0,o.jsxs)("div",{children:["$",b]})]})})]})]})]})]})};h.auth=!0,s.default=h},840:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/order/[id]",function(){return r(5281)}])}},function(e){e.O(0,[774,888,179],function(){return e(e.s=840)}),_N_E=e.O()}]);