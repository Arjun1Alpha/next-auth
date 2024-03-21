"use strict";
exports.id = 756;
exports.ids = [756];
exports.modules = {

/***/ 7756:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Aj": () => (/* binding */ runFireworks),
/* harmony export */   "Bk": () => (/* binding */ paymentNotification),
/* harmony export */   "SR": () => (/* binding */ deleteData),
/* harmony export */   "Yu": () => (/* binding */ getData),
/* harmony export */   "fP": () => (/* binding */ putData),
/* harmony export */   "gJ": () => (/* binding */ getImage),
/* harmony export */   "qC": () => (/* binding */ postData)
/* harmony export */ });
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
    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].error("Payment Canceled!");
    (0,react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"])(orderid);
  }

  if (paymentStatus === "success") {
    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__["default"].success("Payment Successful!");
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

    canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default()(Object.assign({}, defaults, {
      particleCount,
      origin: {
        x: randomInRange(0.1, 0.3),
        y: Math.random() - 0.2
      }
    }));
    canvas_confetti__WEBPACK_IMPORTED_MODULE_0___default()(Object.assign({}, defaults, {
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

/***/ })

};
;