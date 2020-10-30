webpackHotUpdate_N_E("pages/index",{

/***/ "./Components/PostCard.js":
/*!********************************!*\
  !*** ./Components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _apolloGqlClient__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../apolloGqlClient */ "./apolloGqlClient.js");




var _this = undefined,
    _jsxFileName = "D:\\PERSONAL PROJECTS\\REACT\\PERN\\next_frontend\\Components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_2__["default"])(["\n    query fetchPosts($input:FetchPostInput) {\n     fetchPosts(input: $input){  id\n       body\n       user_id\n       # likes{\n       #   liker_name\n       #   liker_id\n       #   liker_email\n       # }\n       # comments{\n       #   comment\n       #   is_deleted\n       #   commentator_name\n       # }\n       }\n   }"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var Meta = antd__WEBPACK_IMPORTED_MODULE_4__["Card"].Meta;

var PostCard = function PostCard() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var commentBox = function commentBox() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
      bordered: false,
      style: {
        width: 500
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Input"], {
      placeholder: "Basic usage",
      key: Math.random(),
      suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["PlusOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 74
        }
      }),
      style: {
        marginBottom: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, "Card content"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, "Card content"));
  };

  var data = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_5__["gql"])(_templateObject());
  Object(react__WEBPACK_IMPORTED_MODULE_6__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var resp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _apolloGqlClient__WEBPACK_IMPORTED_MODULE_7__["client"].query({
              query: data,
              fetchPolicy: 'no-cache',
              variables: {
                input: null
              }
            });

          case 2:
            resp = _context.sent;
            console.log(resp);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_6___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Card"], {
    style: {
      width: 500,
      marginTop: 16
    },
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartFilled"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      onClick: function onClick() {
        return setShow(!show);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
    loading: false,
    avatar: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 65,
        columnNumber: 33
      }
    }),
    title: "Card title",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 21
    }
  }))), show && commentBox);
};

_s(PostCard, "bXBd/WbmO9A8Q7bxaOKZvuJyGc0=");

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

/***/ }),

/***/ "./apolloGqlClient.js":
/*!****************************!*\
  !*** ./apolloGqlClient.js ***!
  \****************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");

var client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  uri: 'http://localhost:5001/',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]()
});

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ }),

/***/ "./gqlQueries/index.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vYXBvbGxvR3FsQ2xpZW50LmpzIl0sIm5hbWVzIjpbIk1ldGEiLCJDYXJkIiwiUG9zdENhcmQiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiY29tbWVudEJveCIsIndpZHRoIiwiTWF0aCIsInJhbmRvbSIsIm1hcmdpbkJvdHRvbSIsImRhdGEiLCJncWwiLCJ1c2VFZmZlY3QiLCJjbGllbnQiLCJxdWVyeSIsImZldGNoUG9saWN5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJyZXNwIiwiY29uc29sZSIsImxvZyIsIm1hcmdpblRvcCIsIkFwb2xsb0NsaWVudCIsInVyaSIsImNhY2hlIiwiSW5NZW1vcnlDYWNoZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0lBQ1FBLEksR0FBU0MseUMsQ0FBVEQsSTs7QUFJUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQUE7O0FBQUEsa0JBRUtDLHNEQUFRLENBQUMsS0FBRCxDQUZiO0FBQUEsTUFFWkMsSUFGWTtBQUFBLE1BRU5DLE9BRk07O0FBSW5CLE1BQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsV0FDZixNQUFDLHlDQUFEO0FBQU0sY0FBUSxFQUFFLEtBQWhCO0FBQXVCLFdBQUssRUFBRTtBQUFFQyxhQUFLLEVBQUU7QUFBVCxPQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE9BQ0ksTUFBQywwQ0FBRDtBQUFPLGlCQUFXLEVBQUMsYUFBbkI7QUFBaUMsU0FBRyxFQUFFQyxJQUFJLENBQUNDLE1BQUwsRUFBdEM7QUFBcUQsWUFBTSxFQUFFLE1BQUMsOERBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQUE3RDtBQUErRSxXQUFLLEVBQUU7QUFBRUMsb0JBQVksRUFBRTtBQUFoQixPQUF0RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREosRUFFSTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZKLEVBR0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFISixDQURlO0FBQUEsR0FBbkI7O0FBUUEsTUFBSUMsSUFBSSxHQUFHQywwREFBSCxtQkFBUjtBQW1CQUMseURBQVMsZ01BQUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFDYUMsdURBQU0sQ0FBQ0MsS0FBUCxDQUFhO0FBQzVCQSxtQkFBSyxFQUFFSixJQURxQjtBQUNmSyx5QkFBVyxFQUFFLFVBREU7QUFDVUMsdUJBQVMsRUFBRTtBQUM3Q0MscUJBQUssRUFBRTtBQURzQztBQURyQixhQUFiLENBRGI7O0FBQUE7QUFDQUMsZ0JBREE7QUFNTkMsbUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaOztBQU5NO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFTTixFQVRNLENBQVQ7QUFXQSxTQUNJLG1FQUNJLE1BQUMseUNBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBRVosV0FBSyxFQUFFLEdBQVQ7QUFBY2UsZUFBUyxFQUFFO0FBQXpCLEtBRFg7QUFFSSxXQUFPLEVBQUUsQ0FDTCxNQUFDLGlFQUFEO0FBQWlCLFNBQUcsRUFBQyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREssRUFFTCxNQUFDLDhEQUFEO0FBQWMsU0FBRyxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSyxFQUdMLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUhLLEVBSUwsTUFBQyxpRUFBRDtBQUFpQixhQUFPLEVBQUU7QUFBQSxlQUFNakIsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFKSyxDQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FTSSxNQUFDLDZDQUFEO0FBQVUsV0FBTyxFQUFFLEtBQW5CO0FBQTBCLFVBQU0sTUFBaEM7QUFBaUMsVUFBTSxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxJQUFEO0FBQ0ksVUFBTSxFQUFFLE1BQUMsMkNBQUQ7QUFBUSxTQUFHLEVBQUMsa0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURaO0FBRUksU0FBSyxFQUFDLFlBRlY7QUFHSSxlQUFXLEVBQUMsK0hBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVRKLENBREosRUFtQktBLElBQUksSUFBSUUsVUFuQmIsQ0FESjtBQXVCSCxDQWpFRDs7R0FBTUosUTs7S0FBQUEsUTtBQW1FU0EsdUVBQWY7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1RUE7QUFBQTtBQUFBO0FBQUE7QUFFTyxJQUFNWSxNQUFNLEdBQUcsSUFBSVMsMkRBQUosQ0FBaUI7QUFDbkNDLEtBQUcsRUFBRSx3QkFEOEI7QUFFbkNDLE9BQUssRUFBRSxJQUFJQyw0REFBSjtBQUY0QixDQUFqQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBkMDg3ZTM4ZTRmMzgzMGZiMjY1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkLCBIZWFydEZpbGxlZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIFNrZWxldG9uLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9hcG9sbG9HcWxDbGllbnQnO1xyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5cclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKCkgPT4ge1xyXG5cclxuICAgIGNvbnN0IFtzaG93LCBzZXRTaG93XSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRCb3ggPSAoKSA9PiAoXHJcbiAgICAgICAgPENhcmQgYm9yZGVyZWQ9e2ZhbHNlfSBzdHlsZT17eyB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCYXNpYyB1c2FnZVwiIGtleT17TWF0aC5yYW5kb20oKX0gc3VmZml4PXs8UGx1c091dGxpbmVkIC8+fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19IC8+XHJcbiAgICAgICAgICAgIDxwPkNhcmQgY29udGVudDwvcD5cclxuICAgICAgICAgICAgPHA+Q2FyZCBjb250ZW50PC9wPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxuXHJcbiAgICBsZXQgZGF0YSA9IGdxbGBcclxuICAgIHF1ZXJ5IGZldGNoUG9zdHMoJGlucHV0OkZldGNoUG9zdElucHV0KSB7XHJcbiAgICAgZmV0Y2hQb3N0cyhpbnB1dDogJGlucHV0KXsgIGlkXHJcbiAgICAgICBib2R5XHJcbiAgICAgICB1c2VyX2lkXHJcbiAgICAgICAjIGxpa2Vze1xyXG4gICAgICAgIyAgIGxpa2VyX25hbWVcclxuICAgICAgICMgICBsaWtlcl9pZFxyXG4gICAgICAgIyAgIGxpa2VyX2VtYWlsXHJcbiAgICAgICAjIH1cclxuICAgICAgICMgY29tbWVudHN7XHJcbiAgICAgICAjICAgY29tbWVudFxyXG4gICAgICAgIyAgIGlzX2RlbGV0ZWRcclxuICAgICAgICMgICBjb21tZW50YXRvcl9uYW1lXHJcbiAgICAgICAjIH1cclxuICAgICAgIH1cclxuICAgfWBcclxuXHJcblxyXG4gICAgdXNlRWZmZWN0KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IGRhdGEsIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLCB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXHJcblxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA1MDAsIG1hcmdpblRvcDogMTYgfX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cInNldHRpbmdcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8RWRpdE91dGxpbmVkIGtleT1cImVkaXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRGaWxsZWQgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0gLz5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBsb2FkaW5nPXtmYWxzZX0gYXZhdGFyIGFjdGl2ZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhcmQgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAge3Nob3cgJiYgY29tbWVudEJveH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyIsImltcG9ydCB7IEFwb2xsb0NsaWVudCwgSW5NZW1vcnlDYWNoZSB9IGZyb20gJ0BhcG9sbG8vY2xpZW50J1xyXG5cclxuZXhwb3J0IGNvbnN0IGNsaWVudCA9IG5ldyBBcG9sbG9DbGllbnQoe1xyXG4gICAgdXJpOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAxLycsXHJcbiAgICBjYWNoZTogbmV3IEluTWVtb3J5Q2FjaGUoKVxyXG59KTsiXSwic291cmNlUm9vdCI6IiJ9