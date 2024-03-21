"use strict";
(() => {
var exports = {};
exports.id = 349;
exports.ids = [349];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_Order__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2843);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8044);




const deleteHandler = async (req, res) => {
  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    return res.status(401).json({
      error: "Error: Signin required"
    });
  }

  await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
  const order = await _models_Order__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(req.body.orderId);

  if (order) {
    await order.remove();
    await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    res.send({
      message: "Order Deleted"
    });
  } else {
    await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    res.status(404).send({
      message: "Order Not Found"
    });
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (deleteHandler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [998], () => (__webpack_exec__(1021)));
module.exports = __webpack_exports__;

})();