"use strict";
(() => {
var exports = {};
exports.id = 895;
exports.ids = [895];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 7514:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2843);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8044);




const handler = async (req, res) => {
  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    return res.status(401).json({
      error: 'Error: Signin required'
    });
  }

  await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();

  try {
    const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.body.orderId);
    console.log("stripe made the Call! trying to update order");

    if (order) {
      if (order.isPaid) {
        return res.status(400).json({
          message: 'Error: order is already paid'
        });
      }

      order.isPaid = true;
      order.paidAt = Date.now();
      const paidOrder = await order.save();
      await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
      return res.json({
        message: 'Order paid successfully',
        order: paidOrder
      });
    } else {
      await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
      return res.status(404).json({
        message: 'Error: order not found'
      });
    }
  } catch (error) {
    return res.status(500).json({
      error
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [998], () => (__webpack_exec__(7514)));
module.exports = __webpack_exports__;

})();