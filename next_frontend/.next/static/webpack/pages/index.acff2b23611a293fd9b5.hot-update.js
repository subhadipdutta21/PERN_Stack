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
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ant-design/icons */ "./node_modules/@ant-design/icons/es/index.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _apolloGqlClient__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../apolloGqlClient */ "./apolloGqlClient.js");
/* harmony import */ var _gqlQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gqlQueries */ "./gqlQueries/index.js");



var _this = undefined,
    _jsxFileName = "D:\\PERSONAL PROJECTS\\REACT\\PERN\\next_frontend\\Components\\PostCard.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





var Meta = antd__WEBPACK_IMPORTED_MODULE_3__["Card"].Meta;

var PostCard = function PostCard() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var commentBox = function commentBox() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      bordered: false,
      style: {
        width: 500
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      placeholder: "Basic usage",
      key: Math.random(),
      suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 74
        }
      }),
      style: {
        marginBottom: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 13
      }
    }, "Card content"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 13
      }
    }, "Card content"));
  };

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var resp;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _apolloGqlClient__WEBPACK_IMPORTED_MODULE_5__["client"].query({
              query: _gqlQueries__WEBPACK_IMPORTED_MODULE_6__["fetch_posts_query"],
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
  return __jsx(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
    style: {
      width: 500,
      marginTop: 16
    },
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["SettingOutlined"], {
      key: "setting",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartFilled"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      onClick: function onClick() {
        return setShow(!show);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 21
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    loading: false,
    avatar: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 33
      }
    }),
    title: "Card title",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
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

/***/ "./gqlQueries/index.js":
/*!*****************************!*\
  !*** ./gqlQueries/index.js ***!
  \*****************************/
/*! exports provided: fetch_posts_query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_posts_query", function() { return fetch_posts_query; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery fetchPosts($input:FetchPostInput) {\n fetchPosts(input: $input){  id\n   body\n   user_id\n   likes{\n     liker_name\n     liker_id\n     liker_email\n   }\n   }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var fetch_posts_query = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vZ3FsUXVlcmllcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImNvbW1lbnRCb3giLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW5Cb3R0b20iLCJ1c2VFZmZlY3QiLCJjbGllbnQiLCJxdWVyeSIsImZldGNoX3Bvc3RzX3F1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwibWFyZ2luVG9wIiwiZ3FsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtJQUNRQSxJLEdBQVNDLHlDLENBQVRELEk7O0FBSVIsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUVLQyxzREFBUSxDQUFDLEtBQUQsQ0FGYjtBQUFBLE1BRVpDLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUluQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQ2YsTUFBQyx5Q0FBRDtBQUFNLGNBQVEsRUFBRSxLQUFoQjtBQUF1QixXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsMENBQUQ7QUFBTyxpQkFBVyxFQUFDLGFBQW5CO0FBQWlDLFNBQUcsRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEVBQXRDO0FBQXFELFlBQU0sRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBN0Q7QUFBK0UsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7QUFBaEIsT0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosQ0FEZTtBQUFBLEdBQW5COztBQVNBQyx5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUNhQyx1REFBTSxDQUFDQyxLQUFQLENBQWE7QUFDNUJBLG1CQUFLLEVBQUVDLDZEQURxQjtBQUNGQyx5QkFBVyxFQUFFLFVBRFg7QUFDdUJDLHVCQUFTLEVBQUU7QUFDMURDLHFCQUFLLEVBQUU7QUFEbUQ7QUFEbEMsYUFBYixDQURiOztBQUFBO0FBQ0FDLGdCQURBO0FBTU5DLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFOTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBUU4sRUFSTSxDQUFUO0FBV0EsU0FDSSxtRUFDSSxNQUFDLHlDQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUVYLFdBQUssRUFBRSxHQUFUO0FBQWNjLGVBQVMsRUFBRTtBQUF6QixLQURYO0FBRUksV0FBTyxFQUFFLENBQ0wsTUFBQyxpRUFBRDtBQUFpQixTQUFHLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURLLEVBRUwsTUFBQyw4REFBRDtBQUFjLFNBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkssRUFHTCxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISyxFQUlMLE1BQUMsaUVBQUQ7QUFBaUIsYUFBTyxFQUFFO0FBQUEsZUFBTWhCLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkssQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0ksTUFBQyw2Q0FBRDtBQUFVLFdBQU8sRUFBRSxLQUFuQjtBQUEwQixVQUFNLE1BQWhDO0FBQWlDLFVBQU0sTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsSUFBRDtBQUNJLFVBQU0sRUFBRSxNQUFDLDJDQUFEO0FBQVEsU0FBRyxFQUFDLGtFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEWjtBQUVJLFNBQUssRUFBQyxZQUZWO0FBR0ksZUFBVyxFQUFDLCtIQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FUSixDQURKLEVBbUJLQSxJQUFJLElBQUlFLFVBbkJiLENBREo7QUF1QkgsQ0EvQ0Q7O0dBQU1KLFE7O0tBQUFBLFE7QUFpRFNBLHVFQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUVPLElBQU1ZLGlCQUFpQixHQUFHUSwwREFBSCxtQkFBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYWNmZjJiMjM2MTFhMjkzZmQ5YjUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRPdXRsaW5lZCwgTWVzc2FnZU91dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQsIEhlYXJ0RmlsbGVkLCBQbHVzT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCwgU2tlbGV0b24sIElucHV0IH0gZnJvbSAnYW50ZCc7XHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vYXBvbGxvR3FsQ2xpZW50JztcclxuaW1wb3J0IHsgZmV0Y2hfcG9zdHNfcXVlcnkgfSBmcm9tICcuLi9ncWxRdWVyaWVzJztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBjb21tZW50Qm94ID0gKCkgPT4gKFxyXG4gICAgICAgIDxDYXJkIGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3sgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmFzaWMgdXNhZ2VcIiBrZXk9e01hdGgucmFuZG9tKCl9IHN1ZmZpeD17PFBsdXNPdXRsaW5lZCAvPn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fSAvPlxyXG4gICAgICAgICAgICA8cD5DYXJkIGNvbnRlbnQ8L3A+XHJcbiAgICAgICAgICAgIDxwPkNhcmQgY29udGVudDwvcD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XHJcbiAgICAgICAgICAgIHF1ZXJ5OiBmZXRjaF9wb3N0c19xdWVyeSwgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsIHZhcmlhYmxlczoge1xyXG4gICAgICAgICAgICAgICAgaW5wdXQ6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcClcclxuXHJcbiAgICB9LCBbXSlcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDUwMCwgbWFyZ2luVG9wOiAxNiB9fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFydEZpbGxlZCAvPixcclxuICAgICAgICAgICAgICAgICAgICA8TWVzc2FnZU91dGxpbmVkIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfSAvPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIGxvYWRpbmc9e2ZhbHNlfSBhdmF0YXIgYWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPVwiQ2FyZCB0aXRsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPVwiSXQgaXMgYSBsb25nIGVzdGFibGlzaGVkIGZhY3QgdGhhdCBhIHJlYWRlciB3aWxsIGJlIGRpc3RyYWN0ZWQgYnkgdGhlIHJlYWRhYmxlIGNvbnRlbnQgb2YgYSBwYWdlIHdoZW4gbG9va2luZyBhdCBpdHMgbGF5b3V0LiBcIlxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICB7c2hvdyAmJiBjb21tZW50Qm94fVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoX3Bvc3RzX3F1ZXJ5ID0gZ3FsYFxyXG5xdWVyeSBmZXRjaFBvc3RzKCRpbnB1dDpGZXRjaFBvc3RJbnB1dCkge1xyXG4gZmV0Y2hQb3N0cyhpbnB1dDogJGlucHV0KXsgIGlkXHJcbiAgIGJvZHlcclxuICAgdXNlcl9pZFxyXG4gICBsaWtlc3tcclxuICAgICBsaWtlcl9uYW1lXHJcbiAgICAgbGlrZXJfaWRcclxuICAgICBsaWtlcl9lbWFpbFxyXG4gICB9XHJcbiAgIH1cclxufWAiXSwic291cmNlUm9vdCI6IiJ9