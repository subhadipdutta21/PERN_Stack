webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/PostCard.js":
/*!********************************!*\
  !*** ./Components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
var _this = undefined,
    _jsxFileName = "D:\\PERSONAL PROJECTS\\REACT\\PERN\\next_frontend\\Components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;



var Meta = antd__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta;

var PostCard = function PostCard() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: 500,
      marginTop: 16
    },
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartFilled"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutlined"], {
      onClick: function onClick() {
        return setShow(!show);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 21
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    loading: false,
    avatar: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 29
      }
    }),
    title: "Card title",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 21
    }
  }))), show && __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    bordered: false,
    style: {
      width: 500
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Basic usage",
    key: Math.random(),
    suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["PlusOutlined"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 82
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 21
    }
  }), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 21
    }
  }, "Card content"), __jsx("p", {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 21
    }
  }, "Card content")));
};

_s(PostCard, "NKb1ZOdhT+qUsWLXSgjSS2bk2C4=");

_c = PostCard;
/* harmony default export */ __webpack_exports__["default"] = (PostCard);

var _c;

$RefreshReg$(_c, "PostCard");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsIndpZHRoIiwibWFyZ2luVG9wIiwiTWF0aCIsInJhbmRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7SUFDUUEsSSxHQUFTQyx5QyxDQUFURCxJOztBQUlSLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLEdBQU07QUFBQTs7QUFBQSxrQkFFS0Msc0RBQVEsQ0FBQyxLQUFELENBRmI7QUFBQSxNQUVaQyxJQUZZO0FBQUEsTUFFTkMsT0FGTTs7QUFJbkIsU0FDSSxtRUFDSSxNQUFDLHlDQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUVDLFdBQUssRUFBRSxHQUFUO0FBQWNDLGVBQVMsRUFBRTtBQUF6QixLQURYO0FBRUksV0FBTyxFQUFFLENBQ0wsTUFBQyxpRUFBRDtBQUFpQixTQUFHLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURLLEVBRUwsTUFBQyw4REFBRDtBQUFjLFNBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkssRUFHTCxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISyxFQUlMLE1BQUMsaUVBQUQ7QUFBaUIsYUFBTyxFQUFFO0FBQUEsZUFBTUYsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSyxDQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTSSxNQUFDLDZDQUFEO0FBQVUsV0FBTyxFQUFFLEtBQW5CO0FBQTBCLFVBQU0sTUFBaEM7QUFBaUMsVUFBTSxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxJQUFEO0FBQ0ksVUFBTSxFQUNGLE1BQUMsMkNBQUQ7QUFBUSxTQUFHLEVBQUMsa0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZSO0FBSUksU0FBSyxFQUFDLFlBSlY7QUFLSSxlQUFXLEVBQUMsK0hBTGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVRKLENBREosRUFvQktBLElBQUksSUFDRCxNQUFDLHlDQUFEO0FBQU0sWUFBUSxFQUFFLEtBQWhCO0FBQXVCLFNBQUssRUFBRTtBQUFFRSxXQUFLLEVBQUU7QUFBVCxLQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQywwQ0FBRDtBQUFPLGVBQVcsRUFBQyxhQUFuQjtBQUFpQyxPQUFHLEVBQUVFLElBQUksQ0FBQ0MsTUFBTCxFQUF0QztBQUFxRCxVQUFNLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixFQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsb0JBRkosRUFHSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQUhKLENBckJSLENBREo7QUE2QkgsQ0FqQ0Q7O0dBQU1QLFE7O0tBQUFBLFE7QUFtQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJhMWYxMmRmNWZiZWY5ZWQ1ZWY5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkLCBIZWFydEZpbGxlZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIFNrZWxldG9uLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcblxyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDUwMCwgbWFyZ2luVG9wOiAxNiB9fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFydEZpbGxlZCAvPixcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfS8+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17ZmFsc2V9IGF2YXRhciBhY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJJdCBpcyBhIGxvbmcgZXN0YWJsaXNoZWQgZmFjdCB0aGF0IGEgcmVhZGVyIHdpbGwgYmUgZGlzdHJhY3RlZCBieSB0aGUgcmVhZGFibGUgY29udGVudCBvZiBhIHBhZ2Ugd2hlbiBsb29raW5nIGF0IGl0cyBsYXlvdXQuIFwiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAge3Nob3cgJiZcclxuICAgICAgICAgICAgICAgIDxDYXJkIGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3sgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCYXNpYyB1c2FnZVwiIGtleT17TWF0aC5yYW5kb20oKX0gc3VmZml4PXs8UGx1c091dGxpbmVkIC8+fSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNhcmQgY29udGVudDwvcD5cclxuICAgICAgICAgICAgICAgICAgICA8cD5DYXJkIGNvbnRlbnQ8L3A+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmQ+fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==