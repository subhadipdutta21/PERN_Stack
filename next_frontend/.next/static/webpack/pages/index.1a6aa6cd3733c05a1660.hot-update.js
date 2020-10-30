webpackHotUpdate_N_E("pages/index",{

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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    fetchPosts();
    return function () {
      return fetchPosts();
    };
  }, []);

  var fetchPosts = /*#__PURE__*/function () {
    var _ref = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var resp;
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
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Could not fetch posts');

            case 11:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function fetchPosts() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, [1, 2, 3, 4, 5, 6, 7, 7, 99, 6, 4, 2].map(function (itm, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: idx,
      showCommentIdx: function showCommentIdx() {
        return console.log(idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 13
      }
    }));
  }));
};

_s(Home, "OD7bBpZva5O2jO+Puf00hKivP7c=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJjbGllbnQiLCJxdWVyeSIsImZldGNoX3Bvc3RzX3F1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwibWVzc2FnZSIsImVycm9yIiwibWFwIiwiaXRtIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWpCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsY0FBVTtBQUVWLFdBQU87QUFBQSxhQUFNQSxVQUFVLEVBQWhCO0FBQUEsS0FBUDtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUEsVUFBVTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHSUMsdURBQU0sQ0FBQ0MsS0FBUCxDQUFhO0FBQzlCQSxxQkFBSyxFQUFFQyw2REFEdUI7QUFDSkMsMkJBQVcsRUFBRSxVQURUO0FBQ3FCQyx5QkFBUyxFQUFFO0FBQzVEQyx1QkFBSyxFQUFFO0FBRHFEO0FBRGhDLGVBQWIsQ0FISjs7QUFBQTtBQUdUQyxrQkFIUztBQVFmQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFSZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNDQyxxQkFBTyxDQUFDQyxHQUFSO0FBQW9CQywwREFBTyxDQUFDQyxLQUFSLENBQWMsdUJBQWQ7O0FBVHJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZYLFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBYUEsU0FDRSxtRUFFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DLENBQW5DLEVBQXNDWSxHQUF0QyxDQUEwQyxVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxXQUN4QyxtRUFDRSxNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFmO0FBQW9CLG9CQUFjLEVBQUU7QUFBQSxlQUFNTixPQUFPLENBQUNDLEdBQVIsQ0FBWUssR0FBWixDQUFOO0FBQUEsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRHdDO0FBQUEsR0FBMUMsQ0FGSixDQURGO0FBV0QsQ0FoQ0Q7O0dBQU1oQixJOztLQUFBQSxJO0FBa0NTQSxtRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYTZhYTZjZDM3MzNjMDVhMTY2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2Fwb2xsb0dxbENsaWVudCc7XG5pbXBvcnQgUG9zdENhcmQgZnJvbSAnLi4vQ29tcG9uZW50cy9Qb3N0Q2FyZCc7XG5pbXBvcnQgeyBmZXRjaF9wb3N0c19xdWVyeSB9IGZyb20gJy4uL2dxbFF1ZXJpZXMnO1xuXG5jb25zdCBIb21lID0gKCkgPT4ge1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgZmV0Y2hQb3N0cygpXG5cbiAgICByZXR1cm4gKCkgPT4gZmV0Y2hQb3N0cygpXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICAgIHF1ZXJ5OiBmZXRjaF9wb3N0c19xdWVyeSwgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsIHZhcmlhYmxlczoge1xuICAgICAgICAgIGlucHV0OiBudWxsXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjb25zb2xlLmxvZyhyZXNwKVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7IGNvbnNvbGUubG9nKGVycm9yKTsgbWVzc2FnZS5lcnJvcignQ291bGQgbm90IGZldGNoIHBvc3RzJykgfVxuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAgIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA3LCA5OSwgNiwgNCwgMl0ubWFwKChpdG0sIGlkeCkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UG9zdENhcmQga2V5PXtpZHh9IHNob3dDb21tZW50SWR4PXsoKSA9PiBjb25zb2xlLmxvZyhpZHgpfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=