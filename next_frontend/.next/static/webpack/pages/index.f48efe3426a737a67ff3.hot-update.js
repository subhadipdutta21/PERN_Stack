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

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      posts = _useState[0],
      setPosts = _useState[1];

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
              (resp === null || resp === void 0 ? void 0 : (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.fetchPosts) ? setPosts[resp === null || resp === void 0 ? void 0 : (_resp$data2 = resp.data) === null || _resp$data2 === void 0 ? void 0 : _resp$data2.fetchPosts] : antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('something went wrong!');
              _context.next = 12;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              console.log(_context.t0);
              antd__WEBPACK_IMPORTED_MODULE_2__["message"].error('Could not fetch posts');

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 8]]);
    }));

    return function fetchPosts() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, posts.map(function (itm, idx) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_Components_PostCard__WEBPACK_IMPORTED_MODULE_5__["default"], {
      key: idx,
      showCommentIdx: function showCommentIdx() {
        return console.log(idx);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }));
  }));
};

_s(Home, "bG8V4duoIfO0BEPgauWMVT5Qvyw=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwicG9zdHMiLCJzZXRQb3N0cyIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJjbGllbnQiLCJxdWVyeSIsImZldGNoX3Bvc3RzX3F1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsIm1lc3NhZ2UiLCJlcnJvciIsIm1hcCIsIml0bSIsImlkeCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUFBLGtCQUVTQyxzREFBUSxDQUFDLEVBQUQsQ0FGakI7QUFBQSxNQUVWQyxLQUZVO0FBQUEsTUFFSEMsUUFGRzs7QUFJakJDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxjQUFVLEdBREksQ0FHZDtBQUNELEdBSlEsRUFJTixFQUpNLENBQVQ7O0FBTUEsTUFBTUEsVUFBVTtBQUFBLGdNQUFHO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBR0lDLHVEQUFNLENBQUNDLEtBQVAsQ0FBYTtBQUM5QkEscUJBQUssRUFBRUMsNkRBRHVCO0FBQ0pDLDJCQUFXLEVBQUUsVUFEVDtBQUNxQkMseUJBQVMsRUFBRTtBQUM1REMsdUJBQUssRUFBRTtBQURxRDtBQURoQyxlQUFiLENBSEo7O0FBQUE7QUFHVEMsa0JBSFM7QUFRZkMscUJBQU8sQ0FBQ0MsR0FBUixDQUFZRixJQUFaO0FBQ0EsZUFBQUEsSUFBSSxTQUFKLElBQUFBLElBQUksV0FBSiwwQkFBQUEsSUFBSSxDQUFFRyxJQUFOLDBEQUFZVixVQUFaLElBQXlCRixRQUFRLENBQUNTLElBQUQsYUFBQ0EsSUFBRCxzQ0FBQ0EsSUFBSSxDQUFFRyxJQUFQLGdEQUFDLFlBQVlWLFVBQWIsQ0FBakMsR0FBNERXLDRDQUFPLENBQUNDLEtBQVIsQ0FBYyx1QkFBZCxDQUE1RDtBQVRlO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBV0NKLHFCQUFPLENBQUNDLEdBQVI7QUFBb0JFLDBEQUFPLENBQUNDLEtBQVIsQ0FBYyx1QkFBZDs7QUFYckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVlosVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFlQSxTQUNFLG1FQUVJSCxLQUFLLENBQUNnQixHQUFOLENBQVUsVUFBQ0MsR0FBRCxFQUFNQyxHQUFOO0FBQUEsV0FDUixtRUFDRSxNQUFDLDREQUFEO0FBQVUsU0FBRyxFQUFFQSxHQUFmO0FBQW9CLG9CQUFjLEVBQUU7QUFBQSxlQUFNUCxPQUFPLENBQUNDLEdBQVIsQ0FBWU0sR0FBWixDQUFOO0FBQUEsT0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURGLENBRFE7QUFBQSxHQUFWLENBRkosQ0FERjtBQVdELENBcENEOztHQUFNcEIsSTs7S0FBQUEsSTtBQXNDU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZjQ4ZWZlMzQyNmE3MzdhNjdmZjMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tICdhbnRkJztcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vYXBvbGxvR3FsQ2xpZW50JztcbmltcG9ydCBQb3N0Q2FyZCBmcm9tICcuLi9Db21wb25lbnRzL1Bvc3RDYXJkJztcbmltcG9ydCB7IGZldGNoX3Bvc3RzX3F1ZXJ5IH0gZnJvbSAnLi4vZ3FsUXVlcmllcyc7XG5cbmNvbnN0IEhvbWUgPSAoKSA9PiB7XG5cbiAgY29uc3QgW3Bvc3RzLCBzZXRQb3N0c10gPSB1c2VTdGF0ZShbXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGZldGNoUG9zdHMoKVxuXG4gICAgLy8gcmV0dXJuICgpID0+IGZldGNoUG9zdHMoKVxuICB9LCBbXSlcblxuICBjb25zdCBmZXRjaFBvc3RzID0gYXN5bmMgKCkgPT4ge1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xuICAgICAgICBxdWVyeTogZmV0Y2hfcG9zdHNfcXVlcnksIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLCB2YXJpYWJsZXM6IHtcbiAgICAgICAgICBpbnB1dDogbnVsbFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc29sZS5sb2cocmVzcClcbiAgICAgIHJlc3A/LmRhdGE/LmZldGNoUG9zdHMgPyBzZXRQb3N0c1tyZXNwPy5kYXRhPy5mZXRjaFBvc3RzXSA6IG1lc3NhZ2UuZXJyb3IoJ3NvbWV0aGluZyB3ZW50IHdyb25nIScpXG5cbiAgICB9IGNhdGNoIChlcnJvcikgeyBjb25zb2xlLmxvZyhlcnJvcik7IG1lc3NhZ2UuZXJyb3IoJ0NvdWxkIG5vdCBmZXRjaCBwb3N0cycpIH1cblxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAge1xuICAgICAgICBwb3N0cy5tYXAoKGl0bSwgaWR4KSA9PiAoXG4gICAgICAgICAgPD5cbiAgICAgICAgICAgIDxQb3N0Q2FyZCBrZXk9e2lkeH0gc2hvd0NvbW1lbnRJZHg9eygpID0+IGNvbnNvbGUubG9nKGlkeCl9IC8+XG4gICAgICAgICAgPC8+XG4gICAgICAgICkpXG4gICAgICB9XG4gICAgPC8+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7Il0sInNvdXJjZVJvb3QiOiIifQ==