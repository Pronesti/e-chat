webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/array/from.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/core-js/is-iterable.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/arrayWithoutHoles.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/iterableToArray.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/nonIterableSpread.js":
false,

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/toConsumableArray.js":
false,

/***/ "./node_modules/core-js/library/fn/array/from.js":
false,

/***/ "./node_modules/core-js/library/fn/is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/_create-property.js":
false,

/***/ "./node_modules/core-js/library/modules/_is-array-iter.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-call.js":
false,

/***/ "./node_modules/core-js/library/modules/_iter-detect.js":
false,

/***/ "./node_modules/core-js/library/modules/core.is-iterable.js":
false,

/***/ "./node_modules/core-js/library/modules/es6.array.from.js":
false,

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/lib/index.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./index.css */ "./pages/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\Users\\Diego Pronesti\\Desktop\\e-chat\\client\\pages\\index.js";




var App = function App() {
  var socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3001/');
  var newChat = [];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      message = _useState2[0],
      setMessage = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([{
    msg: "Hola"
  }, {
    msg: "Todo Bien?"
  }]),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      chat = _useState4[0],
      setChat = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    socket.on('new message', function (msg) {
      writeMessage(msg);
    });
  }, []);

  var writeMessage = function writeMessage(msg) {
    //newChat = chat.concat(msg); 
    //newChat = [...chat, msg]; //this two takes inital State, but doesn not work with modified state 
    setChat(newChat); //chat.push(msg); //this mutates :( and works, but does not re-render itself
  };

  var sendMessage = function sendMessage() {
    if (message === "") {
      alert("Write something please");
    } else {
      socket.emit('send message', message);
      setMessage("");
    }

    console.log(chat);
  };

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", {
    id: "messages",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, chat.map(function (msg, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, msg.msg);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
    id: "m",
    autoComplete: "off",
    value: message,
    onChange: function onChange(e) {
      return setMessage(e.target.value);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", {
    type: "button",
    onClick: sendMessage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Send")));
};

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.5e8537fedfaa4b20fa23.hot-update.js.map