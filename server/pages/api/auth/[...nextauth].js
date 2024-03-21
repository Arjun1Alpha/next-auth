"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
exports.modules = {

/***/ 8432:
/***/ ((module) => {

module.exports = require("bcryptjs");

/***/ }),

/***/ 2663:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 720:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
// EXTERNAL MODULE: ./lib/db.js
var db = __webpack_require__(8044);
// EXTERNAL MODULE: ./models/User.js
var User = __webpack_require__(199);
// EXTERNAL MODULE: external "bcryptjs"
var external_bcryptjs_ = __webpack_require__(8432);
var external_bcryptjs_default = /*#__PURE__*/__webpack_require__.n(external_bcryptjs_);
;// CONCATENATED MODULE: external "next-auth/providers/credentials"
const credentials_namespaceObject = require("next-auth/providers/credentials");
var credentials_default = /*#__PURE__*/__webpack_require__.n(credentials_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].js





/* harmony default export */ const _nextauth_ = (external_next_auth_default()({
  session: {
    strategy: "jwt"
  },
  callbacks: {
    async jwt({
      token,
      user
    }) {
      if (user?._id) token._id = user._id;
      if (user?.isAdmin) token.isAdmin = user.isAdmin;
      return token;
    },

    async session({
      session,
      token
    }) {
      if (token?._id) session.user._id = token._id;
      if (token?.isAdmin) session.user.isAdmin = token.isAdmin;
      return session;
    }

  },
  providers: [credentials_default()({
    async authorize(credentials) {
      await db/* default.connect */.Z.connect();
      const user = await User/* default.findOne */.Z.findOne({
        email: credentials.email
      });
      await db/* default.disconnect */.Z.disconnect();

      if (user && external_bcryptjs_default().compareSync(credentials.password, user.password)) {
        return {
          _id: user._id,
          name: user.name,
          email: user.email,
          isAdmin: user.isAdmin
        };
      }

      throw new Error("Invalid email or password");
    }

  })],
  secret: process.env.NEXTAUTH_SECRET
}));

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [282], () => (__webpack_exec__(720)));
module.exports = __webpack_exports__;

})();