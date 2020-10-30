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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])( /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            fetchPosts();

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })), []);

  var fetchPosts = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2() {
      var resp;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _apolloGqlClient__WEBPACK_IMPORTED_MODULE_3__["client"].query({
                query: _gqlQueries__WEBPACK_IMPORTED_MODULE_5__["fetch_posts_query"],
                fetchPolicy: 'no-cache',
                variables: {
                  input: null
                }
              });

            case 2:
              resp = _context2.sent;
              console.log(resp);

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function fetchPosts() {
      return _ref2.apply(this, arguments);
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
        lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOlsiSG9tZSIsInVzZUVmZmVjdCIsImZldGNoUG9zdHMiLCJjbGllbnQiLCJxdWVyeSIsImZldGNoX3Bvc3RzX3F1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInJlc3AiLCJjb25zb2xlIiwibG9nIiwibWFwIiwiaXRtIiwiaWR4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBRWpCQyx5REFBUyxnTUFBQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ1JDLHNCQUFVOztBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEdBQUQsSUFHTixFQUhNLENBQVQ7O0FBS0EsTUFBTUEsVUFBVTtBQUFBLGlNQUFHO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQ0VDLHVEQUFNLENBQUNDLEtBQVAsQ0FBYTtBQUM5QkEscUJBQUssRUFBRUMsNkRBRHVCO0FBQ0pDLDJCQUFXLEVBQUUsVUFEVDtBQUNxQkMseUJBQVMsRUFBRTtBQUM1REMsdUJBQUssRUFBRTtBQURxRDtBQURoQyxlQUFiLENBREY7O0FBQUE7QUFDWEMsa0JBRFc7QUFNakJDLHFCQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFOaUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBVlAsVUFBVTtBQUFBO0FBQUE7QUFBQSxLQUFoQjs7QUFTQSxTQUNFLG1FQUVJLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLENBQWIsRUFBZ0IsQ0FBaEIsRUFBbUIsQ0FBbkIsRUFBc0IsQ0FBdEIsRUFBeUIsRUFBekIsRUFBNkIsQ0FBN0IsRUFBZ0MsQ0FBaEMsRUFBbUMsQ0FBbkMsRUFBc0NVLEdBQXRDLENBQTBDLFVBQUNDLEdBQUQsRUFBTUMsR0FBTjtBQUFBLFdBQ3hDLG1FQUNFLE1BQUMsNERBQUQ7QUFBVSxTQUFHLEVBQUVBLEdBQWY7QUFBb0Isb0JBQWMsRUFBRTtBQUFBLGVBQU1KLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRyxHQUFaLENBQU47QUFBQSxPQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREYsQ0FEd0M7QUFBQSxHQUExQyxDQUZKLENBREY7QUFXRCxDQTNCRDs7R0FBTWQsSTs7S0FBQUEsSTtBQTZCU0EsbUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDE1ZDNjN2E3MmYxNTQ4YWZmZmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9hcG9sbG9HcWxDbGllbnQnO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvUG9zdENhcmQnO1xuaW1wb3J0IHsgZmV0Y2hfcG9zdHNfcXVlcnkgfSBmcm9tICcuLi9ncWxRdWVyaWVzJztcblxuY29uc3QgSG9tZSA9ICgpID0+IHtcblxuICB1c2VFZmZlY3QoYXN5bmMgKCkgPT4ge1xuICAgIGZldGNoUG9zdHMoKVxuXG4gIH0sIFtdKVxuXG4gIGNvbnN0IGZldGNoUG9zdHMgPSBhc3luYyAoKSA9PiB7XG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5xdWVyeSh7XG4gICAgICBxdWVyeTogZmV0Y2hfcG9zdHNfcXVlcnksIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLCB2YXJpYWJsZXM6IHtcbiAgICAgICAgaW5wdXQ6IG51bGxcbiAgICAgIH1cbiAgICB9KVxuICAgIGNvbnNvbGUubG9nKHJlc3ApXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICB7XG4gICAgICAgIFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA3LCA5OSwgNiwgNCwgMl0ubWFwKChpdG0sIGlkeCkgPT4gKFxuICAgICAgICAgIDw+XG4gICAgICAgICAgICA8UG9zdENhcmQga2V5PXtpZHh9IHNob3dDb21tZW50SWR4PXsoKSA9PiBjb25zb2xlLmxvZyhpZHgpfSAvPlxuICAgICAgICAgIDwvPlxuICAgICAgICApKVxuICAgICAgfVxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJzb3VyY2VSb290IjoiIn0=