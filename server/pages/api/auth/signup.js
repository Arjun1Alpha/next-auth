"use strict";
(() => {
var exports = {};
exports.id = 11;
exports.ids = [11];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 8252:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8432);
/* harmony import */ var bcryptjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcryptjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(199);
/* harmony import */ var _lib_db__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8044);




const handler = async (req, res) => {
  if (req.method !== "POST") {
    return res.status(405).send({
      message: `${req.method} not supported`
    });
  }

  const {
    name,
    email,
    password
  } = req.body;

  if (!name || !email || !email.includes("@") || !password || password.trim().length < 5) {
    return res.status(422).json({
      error: "Validation error"
    });
  }

  await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].connect */ .Z.connect();
  const existingUser = await _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"].findOne */ .Z.findOne({
    email: email
  });

  if (existingUser) {
    await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
    res.status(422).json({
      error: "User already exists!"
    });
    return;
  }

  try {
    const newUser = new _models_User__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z({
      name,
      email,
      password: bcryptjs__WEBPACK_IMPORTED_MODULE_0___default().hashSync(password),
      isAdmin: false
    });
    await newUser.save();
    await _lib_db__WEBPACK_IMPORTED_MODULE_2__/* ["default"].disconnect */ .Z.disconnect();
  } catch (error) {
    res.status(422).json({
      error
    });
    return;
  }

  res.status(201).json({
    msg: "Created user!"
  });
  return;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [282], () => (__webpack_exec__(8252)));
module.exports = __webpack_exports__;

})();