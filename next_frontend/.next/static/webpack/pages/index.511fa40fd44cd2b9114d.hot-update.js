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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apolloGqlClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apolloGqlClient */ "./apolloGqlClient.js");
/* harmony import */ var _Components_PostCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Components/PostCard */ "./Components/PostCard.js");
/* harmony import */ var _gqlQueries__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gqlQueries */ "./gqlQueries/index.js");



var _this = undefined,
    _jsxFileName = "D:\\PERSONAL PROJECTS\\REACT\\PERN\\next_frontend\\pages\\index.js",
    _s = $RefreshSig$();

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





var Home = function Home() {
  _s();

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
              return _apolloGqlClient__WEBPACK_IMPORTED_MODULE_3__["client"].query({
                query: _gqlQueries__WEBPACK_IMPORTED_MODULE_5__["fetch_posts_query"],
                fetchPolicy: 'no-cache',
                variables: {
                  input: null
                }
              });

            case 3:
              resp = _context.sent;
              console.log(resp);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);

            case 10:
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

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, [1, 2, 3, 4, 5, 6, 7, 7, 99, 6, 4, 2].map(function (itm, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(_Components_PostCard__WEBPACK_IMPORTED_MODULE_4__["default"], {
      key: idx,
      showCommentIdx: function showCommentIdx() {
        return console.log(idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJjbGllbnQiLCJxdWVyeSIsImZldGNoX3Bvc3RzX3F1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRtIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWpCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsY0FBVTtBQUVWLFdBQU87QUFBQSxhQUFNQSxVQUFVLEVBQWhCO0FBQUEsS0FBUDtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUEsVUFBVTtBQUFBLGdNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFHSUMsdURBQU0sQ0FBQ0MsS0FBUCxDQUFhO0FBQzlCQSxxQkFBSyxFQUFFQyw2REFEdUI7QUFDSkMsMkJBQVcsRUFBRSxVQURUO0FBQ3FCQyx5QkFBUyxFQUFFO0FBQzVEQyx1QkFBSyxFQUFFO0FBRHFEO0FBRGhDLGVBQWIsQ0FISjs7QUFBQTtBQUdUQyxrQkFIUztBQVFmQyxxQkFBTyxDQUFDQyxHQUFSLENBQVlGLElBQVo7QUFSZTtBQUFBOztBQUFBO0FBQUE7QUFBQTtBQVNDQyxxQkFBTyxDQUFDQyxHQUFSOztBQVREO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQUg7O0FBQUEsb0JBQVZULFVBQVU7QUFBQTtBQUFBO0FBQUEsS0FBaEI7O0FBYUEsU0FDRSxtRUFFSSxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxDQUFiLEVBQWdCLENBQWhCLEVBQW1CLENBQW5CLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLENBQTdCLEVBQWdDLENBQWhDLEVBQW1DLENBQW5DLEVBQXNDVSxHQUF0QyxDQUEwQyxVQUFDQyxHQUFELEVBQU1DLEdBQU47QUFBQSxXQUN4QyxtRUFDRSxNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFmO0FBQW9CLG9CQUFjLEVBQUU7QUFBQSxlQUFNSixPQUFPLENBQUNDLEdBQVIsQ0FBWUcsR0FBWixDQUFOO0FBQUEsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRHdDO0FBQUEsR0FBMUMsQ0FGSixDQURGO0FBV0QsQ0FoQ0Q7O0dBQU1kLEk7O0tBQUFBLEk7QUFrQ1NBLG1FQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjUxMWZhNDBmZDQ0Y2QyYjkxMTRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vYXBvbGxvR3FsQ2xpZW50JztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1Bvc3RDYXJkJztcbmltcG9ydCB7IGZldGNoX3Bvc3RzX3F1ZXJ5IH0gZnJvbSAnLi4vZ3FsUXVlcmllcyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBmZXRjaFBvc3RzKClcblxuICAgIHJldHVybiAoKSA9PiBmZXRjaFBvc3RzKClcbiAgfSwgW10pXG5cbiAgY29uc3QgZmV0Y2hQb3N0cyA9IGFzeW5jICgpID0+IHtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgICAgcXVlcnk6IGZldGNoX3Bvc3RzX3F1ZXJ5LCBmZXRjaFBvbGljeTogJ25vLWNhY2hlJywgdmFyaWFibGVzOiB7XG4gICAgICAgICAgaW5wdXQ6IG51bGxcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gICAgfSBjYXRjaCAoZXJyb3IpIHsgY29uc29sZS5sb2coZXJyb3IpIH1cblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBbMSwgMiwgMywgNCwgNSwgNiwgNywgNywgOTksIDYsIDQsIDJdLm1hcCgoaXRtLCBpZHgpID0+IChcbiAgICAgICAgICA8PlxuICAgICAgICAgICAgPFBvc3RDYXJkIGtleT17aWR4fSBzaG93Q29tbWVudElkeD17KCkgPT4gY29uc29sZS5sb2coaWR4KX0gLz5cbiAgICAgICAgICA8Lz5cbiAgICAgICAgKSlcbiAgICAgIH1cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZTsiXSwic291cmNlUm9vdCI6IiJ9