"use strict";
(() => {
var exports = {};
exports.id = 475;
exports.ids = [475];
exports.modules = {

/***/ 5245:
/***/ ((module) => {

module.exports = require("canvas-confetti");

/***/ }),

/***/ 8174:
/***/ ((module) => {

module.exports = require("stripe");

/***/ }),

/***/ 6201:
/***/ ((module) => {

module.exports = import("react-hot-toast");;

/***/ }),

/***/ 4740:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* unused harmony exports getImage, getData, postData, putData, deleteData, paymentNotification, runFireworks */
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5245);
/* harmony import */ var canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(canvas_confetti__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const getImage = item => {
  return item.image[0].asset._ref.replace("image-", "https://cdn.sanity.io/images/y64aoq1q/production/").replace("-webp", ".webp");
};
const getData = async endpoint => {
  const res = await fetch(endpoint);
  return res;
};
const postData = async (endpoint, post) => {
  const res = await fetch(endpoint, {
    method: "POST",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res;
};
const putData = async (endpoint, post) => {
  const res = await fetch(endpoint, {
    method: "PUT",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res;
};
const deleteData = async (endpoint, post) => {
  const res = await fetch(endpoint, {
    method: "DELETE",
    body: JSON.stringify(post),
    headers: {
      "Content-Type": "application/json"
    }
  });
  return res;
};
const paymentNotification = (paymentStatus, orderid) => {
  if (paymentStatus === "cancel") {
    toast.error("Payment Canceled!");
    toast(orderid);
  }

  if (paymentStatus === "success") {
    toast.success("Payment Successful!");
  }
};
const runFireworks = () => {
  var duration = 5 * 1000;
  var animationEnd = Date.now() + duration;
  var defaults = {
    startVelocity: 30,
    spread: 360,
    ticks: 60,
    zIndex: 0
  };

  function randomInRange(min, max) {
    return Math.random() * (max - min) + min;
  }

  var interval = setInterval(function () {
    var timeLeft = animationEnd - Date.now();

    if (timeLeft <= 0) {
      return clearInterval(interval);
    }

    var particleCount = 50 * (timeLeft / duration); // since particles fall down, start a bit higher than random

    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.3),
        y: Math.random() - 0.2
      }
    }));
    confetti(Object.assign({}, defaults, {
      particleCount,
      origin: {
        x: randomInRange(0.7, 0.9),
        y: Math.random() - 0.2
      }
    }));
  }, 250);
};
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 3266:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8174);
/* harmony import */ var stripe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(stripe__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4740);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_utils__WEBPACK_IMPORTED_MODULE_1__]);
_lib_utils__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


const stripe = new (stripe__WEBPACK_IMPORTED_MODULE_0___default())("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");
async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const params = {
        submit_type: 'pay',
        mode: 'payment',
        payment_method_types: ['card'],
        billing_address_collection: 'auto',
        shipping_options: [{
          shipping_rate: 'shr_1Lv1wQFzRgi0pLUVRjlviJbV'
        }],
        line_items: req.body.cartItems.map(item => {
          const img = item.image[0].asset._ref;
          const newImage = img.replace("image-", "https://cdn.sanity.io/images/y64aoq1q/production/").replace("-webp", ".webp");
          const newItem = {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.name,
                images: [newImage]
              },
              unit_amount: Math.floor(item.price * 100)
            },
            adjustable_quantity: {
              enabled: true,
              minimum: 1
            },
            quantity: item.quantity
          };
          return newItem;
        }),
        success_url: `${req.headers.origin}/success?status=success&orderid=${req.body.orderId}`,
        cancel_url: `${req.headers.origin}/?status=canceled&orderid=${req.body.orderId}`
      }; // Create Checkout Sessions from body params.

      const session = await stripe.checkout.sessions.create(params);
      res.status(200).json(session);
    } catch (error) {
      res.status(error.statusCode || 500).json(error.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(3266));
module.exports = __webpack_exports__;

})();