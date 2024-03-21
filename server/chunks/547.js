"use strict";
exports.id = 547;
exports.ids = [547];
exports.modules = {

/***/ 5547:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ useStateContext),
/* harmony export */   "s": () => (/* binding */ StateContext)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6201);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([react_hot_toast__WEBPACK_IMPORTED_MODULE_1__]);
react_hot_toast__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const StateContext = ({
  children
}) => {
  const {
    0: showCart,
    1: setShowCart
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: cartItems,
    1: setCartItems
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]);
  const {
    0: totalPrice,
    1: setTotalPrice
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: totalQuantities,
    1: setTotalQuantities
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
  const {
    0: qty,
    1: setQty
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(1);
  const {
    0: inCheckoutProcess,
    1: setInCheckoutProcess
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  const {
    0: lightTheme,
    1: setLightTheme
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
  let foundProduct;
  let index;

  const round = number => {
    return Math.round((number + Number.EPSILON) * 100) / 100;
  };

  const onAdd = (product, quantity) => {
    const checkProductInCart = cartItems.find(item => item._id === product._id);
    setTotalPrice(prevTotalPrice => round(prevTotalPrice + product.price * quantity));
    setTotalQuantities(prevTotalQuantities => prevTotalQuantities + quantity);

    if (checkProductInCart) {
      const updatedCardItems = cartItems.map(cartProduct => {
        if (cartProduct._id === product._id) return _objectSpread(_objectSpread({}, cartProduct), {}, {
          quantity: cartProduct.quantity + quantity
        });
      });
      setCartItems(updatedCardItems);
    } else {
      product.quantity = quantity;
      setCartItems([...cartItems, _objectSpread({}, product)]);
    }

    react_hot_toast__WEBPACK_IMPORTED_MODULE_1__.toast.success(`${qty} ${product.name} added to the cart.`);
  };

  const onRemove = product => {
    foundProduct = cartItems.find(item => item._id === product._id);
    const newCartItems = cartItems.filter(item => item._id !== product._id);
    setCartItems(newCartItems);
    setTotalPrice(prev => round(prev - foundProduct.price * foundProduct.quantity));
    setTotalQuantities(prev => prev - foundProduct.quantity);
  };

  const toggleCartItemQuantity = (id, value) => {
    foundProduct = cartItems.find(item => item._id === id);
    index = cartItems.findIndex(product => product._id === id);
    let newCartItems = cartItems.filter(item => item._id !== id);

    if (value === "inc") {
      newCartItems.splice(index, 0, _objectSpread(_objectSpread({}, foundProduct), {}, {
        quantity: foundProduct.quantity + 1
      }));
      setCartItems(newCartItems);
      setTotalPrice(prev => round(prev + foundProduct.price));
      setTotalQuantities(prev => prev + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        newCartItems.splice(index, 0, _objectSpread(_objectSpread({}, foundProduct), {}, {
          quantity: foundProduct.quantity - 1
        }));
        setCartItems(newCartItems);
        setTotalPrice(prev => round(prev - foundProduct.price));
        setTotalQuantities(prev => prev - 1);
      }
    }
  };

  const incQty = () => {
    setQty(prev => prev + 1);
  };

  const decQty = () => {
    setQty(prevQty => {
      if (prevQty > 1) return prevQty - 1;else return 1;
    });
  }; // useEffect(()=>{
  // 	setTotalPrice(prev=>(Math.round((prev + Number.EPSILON) * 100) / 100))
  // },[totalPrice])


  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx(Context.Provider, {
    value: {
      showCart,
      cartItems,
      totalPrice,
      totalQuantities,
      qty,
      inCheckoutProcess,
      lightTheme,
      incQty,
      decQty,
      onAdd,
      setShowCart,
      toggleCartItemQuantity,
      onRemove,
      setQty,
      setCartItems,
      setTotalPrice,
      setTotalQuantities,
      setInCheckoutProcess,
      setLightTheme
    },
    children: children
  });
};
const useStateContext = () => (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(Context);
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;