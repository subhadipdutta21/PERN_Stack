webpackHotUpdate_N_E("pages/index",{

/***/ "./gqlQueries/index.js":
/*!*****************************!*\
  !*** ./gqlQueries/index.js ***!
  \*****************************/
/*! exports provided: fetch_posts_query, fetch_comments_query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_posts_query", function() { return fetch_posts_query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_comments_query", function() { return fetch_comments_query; });
/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/client */ "./node_modules/@apollo/client/index.js");


function _templateObject2() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery fetchCommentsOnPostID($input: FetchCommentInput!) {\n  fetchCommentsOnPostID(input: $input) {    \n    commentator_id\n    commentator_name\n    commentator_email\n    comment\n    is_deleted\n  }\n}"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\nquery fetchPosts($input:FetchPostInput) {\n fetchPosts(input: $input){  \n    id\n   body\n   user_id\n   name\n   likes{\n     liker_name\n     liker_id\n     liker_email\n   }\n   }\n}"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}


var fetch_posts_query = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject());
var fetch_comments_query = Object(_apollo_client__WEBPACK_IMPORTED_MODULE_1__["gql"])(_templateObject2());

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZ3FsUXVlcmllcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJmZXRjaF9wb3N0c19xdWVyeSIsImdxbCIsImZldGNoX2NvbW1lbnRzX3F1ZXJ5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxpQkFBaUIsR0FBR0MsMERBQUgsbUJBQXZCO0FBZ0JBLElBQU1DLG9CQUFvQixHQUFHRCwwREFBSCxvQkFBMUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjAwNDY5ODdlMzFhMmU2YmYyNzMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdxbCB9IGZyb20gJ0BhcG9sbG8vY2xpZW50JztcclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaF9wb3N0c19xdWVyeSA9IGdxbGBcclxucXVlcnkgZmV0Y2hQb3N0cygkaW5wdXQ6RmV0Y2hQb3N0SW5wdXQpIHtcclxuIGZldGNoUG9zdHMoaW5wdXQ6ICRpbnB1dCl7ICBcclxuICAgIGlkXHJcbiAgIGJvZHlcclxuICAgdXNlcl9pZFxyXG4gICBuYW1lXHJcbiAgIGxpa2Vze1xyXG4gICAgIGxpa2VyX25hbWVcclxuICAgICBsaWtlcl9pZFxyXG4gICAgIGxpa2VyX2VtYWlsXHJcbiAgIH1cclxuICAgfVxyXG59YFxyXG5cclxuXHJcbmV4cG9ydCBjb25zdCBmZXRjaF9jb21tZW50c19xdWVyeSA9IGdxbGBcclxucXVlcnkgZmV0Y2hDb21tZW50c09uUG9zdElEKCRpbnB1dDogRmV0Y2hDb21tZW50SW5wdXQhKSB7XHJcbiAgZmV0Y2hDb21tZW50c09uUG9zdElEKGlucHV0OiAkaW5wdXQpIHsgICAgXHJcbiAgICBjb21tZW50YXRvcl9pZFxyXG4gICAgY29tbWVudGF0b3JfbmFtZVxyXG4gICAgY29tbWVudGF0b3JfZW1haWxcclxuICAgIGNvbW1lbnRcclxuICAgIGlzX2RlbGV0ZWRcclxuICB9XHJcbn1gXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=