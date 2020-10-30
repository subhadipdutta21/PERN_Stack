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

var PostCard = function PostCard(_ref) {
  _s();

  var content = _ref.content,
      loading = _ref.loading;

  var avatar = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 20
    }
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var commentBox = function commentBox() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      bordered: false,
      style: {
        width: 500
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Basic usage",
      key: Math.random(),
      suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["PlusOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 74
        }
      }),
      style: {
        marginBottom: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 13
      }
    }), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 13
      }
    }, "Card content"), __jsx("p", {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 13
      }
    }, "Card content"));
  };

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
        lineNumber: 27,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartFilled"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutlined"], {
      onClick: function onClick() {
        return setShow(!show);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 21
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    loading: loading,
    avatar: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: avatar,
    title: "Card title",
    description: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 21
    }
  }))), show && commentBox());
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

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _apolloGqlClient__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apolloGqlClient */ "./apolloGqlClient.js");
/* harmony import */ var _Components_PostCard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/PostCard */ "./Components/PostCard.js");
/* harmony import */ var _gqlQueries__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../gqlQueries */ "./gqlQueries/index.js");



var _this = undefined,
    _jsxFileName = "D:\\PERSONAL PROJECTS\\REACT\\PERN\\next_frontend\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;






var Home = function Home() {
  _s();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      loading = _useState2[0],
      setLoading = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchPosts(); // return () => fetchPosts()
  }, []);

  var fetchPosts = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _resp$data, _resp$data2, resp;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _apolloGqlClient__WEBPACK_IMPORTED_MODULE_4__["client"].query({
                query: _gqlQueries__WEBPACK_IMPORTED_MODULE_6__["fetch_posts_query"],
                fetchPolicy: 'no-cache',
                variables: {
                  input: null
                }
              });

            case 3:
              resp = _context.sent;
              console.log(resp);
              (resp === null || resp === void 0 ? void 0 : (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.fetchPosts) ? setPosts(resp === null || resp === void 0 ? void 0 : (_resp$data2 = resp.data) === null || _resp$data2 === void 0 ? void 0 : _resp$data2.fetchPosts) : antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('something went wrong!');
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Could not fetch posts');

            case 12:
              _context.prev = 12;
              setLoading(false);
              return _context.finish(12);

            case 15:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8, 12, 15]]);
    }));

    return function fetchPosts() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, posts.map(function (itm, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: itm.id,
      content: itm.body,
      loading: loading,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }));
  }));
};

_s(Home, "RbKeE0iIFzYv1PT2nn3dHnXn06o=");

_c = Home;
/* harmony default export */ __webpack_exports__["default"] = (Home);

var _c;

$RefreshReg$(_c, "Home");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiTWV0YSIsIkNhcmQiLCJQb3N0Q2FyZCIsImNvbnRlbnQiLCJsb2FkaW5nIiwiYXZhdGFyIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImNvbW1lbnRCb3giLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW5Cb3R0b20iLCJtYXJnaW5Ub3AiLCJIb21lIiwicG9zdHMiLCJzZXRQb3N0cyIsInNldExvYWRpbmciLCJ1c2VFZmZlY3QiLCJmZXRjaFBvc3RzIiwiY2xpZW50IiwicXVlcnkiLCJmZXRjaF9wb3N0c19xdWVyeSIsImZldGNoUG9saWN5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJyZXNwIiwiY29uc29sZSIsImxvZyIsImRhdGEiLCJtZXNzYWdlIiwiZXJyb3IiLCJtYXAiLCJpdG0iLCJpZHgiLCJpZCIsImJvZHkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBRVFBLEksR0FBU0MseUMsQ0FBVEQsSTs7QUFHUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUEwQjtBQUFBOztBQUFBLE1BQXZCQyxPQUF1QixRQUF2QkEsT0FBdUI7QUFBQSxNQUFkQyxPQUFjLFFBQWRBLE9BQWM7O0FBQ3ZDLE1BQU1DLE1BQU0sR0FBRyxNQUFDLDJDQUFEO0FBQVEsT0FBRyxFQUFDLGtFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBZjs7QUFEdUMsa0JBR2ZDLHNEQUFRLENBQUMsS0FBRCxDQUhPO0FBQUEsTUFHaENDLElBSGdDO0FBQUEsTUFHMUJDLE9BSDBCOztBQUt2QyxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQ2YsTUFBQyx5Q0FBRDtBQUFNLGNBQVEsRUFBRSxLQUFoQjtBQUF1QixXQUFLLEVB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LENBQVlGLElBQVo7QUFDQSxlQUFBQSxJQUFJLFNBQUosSUFBQUEsSUFBSSxXQUFKLDBCQUFBQSxJQUFJLENBQUVHLElBQU4sMERBQVlWLFVBQVosSUFBeUJILFFBQVEsQ0FBQ1UsSUFBRCxhQUFDQSxJQUFELHNDQUFDQSxJQUFJLENBQUVHLElBQVAsZ0RBQUMsWUFBWVYsVUFBYixDQUFqQyxHQUE0RFcsNENBQU8sQ0FBQ0MsS0FBUixDQUFjLHVCQUFkLENBQTVEO0FBUmU7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFVQ0oscUJBQU8sQ0FBQ0MsR0FBUjtBQUFvQkUsMERBQU8sQ0FBQ0MsS0FBUixDQUFjLHVCQUFkOztBQVZyQjtBQUFBO0FBV1BkLHdCQUFVLENBQUMsS0FBRCxDQUFWO0FBWE87O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVkUsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFlQSxTQUNFLG1FQUVJSixLQUFLLENBQUNpQixHQUFOLENBQVUsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsV0FDUixtRUFDRSxNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFRCxHQUFHLENBQUNFLEVBQW5CO0FBQXVCLGFBQU8sRUFBRUYsR0FBRyxDQUFDRyxJQUFwQztBQUEwQyxhQUFPLEVBQUVqQyxPQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEUTtBQUFBLEdBQVYsQ0FGSixDQURGO0FBV0QsQ0FyQ0Q7O0dBQU1XLEk7O0tBQUFBLEk7QUF1Q1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjgyMWRlYWFkODBmODJhOGE4NjMzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0T3V0bGluZWQsIEhlYXJ0RmlsbGVkLCBNZXNzYWdlT3V0bGluZWQsIFBsdXNPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIElucHV0LCBTa2VsZXRvbiB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBjb250ZW50LCBsb2FkaW5nIH0pID0+IHtcclxuICAgIGNvbnN0IGF2YXRhciA9IDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+XHJcblxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgY29uc3QgY29tbWVudEJveCA9ICgpID0+IChcclxuICAgICAgICA8Q2FyZCBib3JkZXJlZD17ZmFsc2V9IHN0eWxlPXt7IHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkJhc2ljIHVzYWdlXCIga2V5PXtNYXRoLnJhbmRvbSgpfSBzdWZmaXg9ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUgfX0gLz5cclxuICAgICAgICAgICAgPHA+Q2FyZCBjb250ZW50PC9wPlxyXG4gICAgICAgICAgICA8cD5DYXJkIGNvbnRlbnQ8L3A+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNTAwLCBtYXJnaW5Ub3A6IDE2IH19XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXNzYWdlT3V0bGluZWQgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9IC8+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17bG9hZGluZ30gYXZhdGFyIGFjdGl2ZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9e2F2YXRhcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9XCJDYXJkIHRpdGxlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvbnRlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgIHtzaG93ICYmIGNvbW1lbnRCb3goKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyIsImltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vYXBvbGxvR3FsQ2xpZW50JztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1Bvc3RDYXJkJztcbmltcG9ydCB7IGZldGNoX3Bvc3RzX3F1ZXJ5IH0gZnJvbSAnLi4vZ3FsUXVlcmllcyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSlcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUG9zdHMoKVxuXG4gICAgLy8gcmV0dXJuICgpID0+IGZldGNoUG9zdHMoKVxuICB9LCBbXSlcblxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGZldGNoX3Bvc3RzX3F1ZXJ5LCBmZXRjaFBvbGljeTogJ25vLWNhY2hlJywgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaW5wdXQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gICAgICByZXNwPy5kYXRhPy5mZXRjaFBvc3RzID8gc2V0UG9zdHMocmVzcD8uZGF0YT8uZmV0Y2hQb3N0cykgOiBtZXNzYWdlLmVycm9yKCdzb21ldGhpbmcgd2VudCB3cm9uZyEnKVxuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgY29uc29sZS5sb2coZXJyb3IpOyBtZXNzYWdlLmVycm9yKCdDb3VsZCBub3QgZmV0Y2ggcG9zdHMnKSB9XG4gICAgZmluYWxseSB7IHNldExvYWRpbmcoZmFsc2UpIH1cblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBwb3N0cy5tYXAoKGl0bSwgaWR4KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e2l0bS5pZH0gY29udGVudD17aXRtLmJvZHl9IGxvYWRpbmc9e2xvYWRpbmd9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==