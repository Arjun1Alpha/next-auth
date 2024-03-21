"use strict";
(() => {
var exports = {};
exports.id = 451;
exports.ids = [451];
exports.modules = {

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 5179:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1649);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8044);




async function handler(req, res) {
  if (req.method !== "PUT") {
    return res.status(400).send({
      message: `${req.method} not supported`
    });
  }

  const session = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_0__.getSession)({
    req
  });

  if (!session) {
    return res.status(401).send({
      message: "Signin required"
    });
  }

  const {
    user
  } = session;
  const {
    name
  } = req.body;

  if (!name) {
    res.status(422).json({
      message: "Validation error"
    });
    return;
  }

  await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
  const toUpdateUser = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findById */ .Z.findById(user._id);
  toUpdateUser.name = name;
  await toUpdateUser.save();
  await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
  res.send({
    message: "User updated"
  });
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [282], () => (__webpack_exec__(5179)));
module.exports = __webpack_exports__;

})();