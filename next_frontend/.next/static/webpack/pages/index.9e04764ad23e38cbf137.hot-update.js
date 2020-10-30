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
/* harmony import */ var _gqlQueries__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../gqlQueries */ "./gqlQueries/index.js");




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
            return _gqlQueries__WEBPACK_IMPORTED_MODULE_7__["client"].query({
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
        lineNumber: 55,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["HeartFilled"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_3__["MessageOutlined"], {
      onClick: function onClick() {
        return setShow(!show);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 21
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Skeleton"], {
    loading: false,
    avatar: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_4__["Avatar"], {
      src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 33
      }
    }),
    title: "Card title",
    description: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. ",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwidXNlU3RhdGUiLCJzaG93Iiwic2V0U2hvdyIsImNvbW1lbnRCb3giLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW5Cb3R0b20iLCJkYXRhIiwiZ3FsIiwidXNlRWZmZWN0IiwiY2xpZW50IiwicXVlcnkiLCJmZXRjaFBvbGljeSIsInZhcmlhYmxlcyIsImlucHV0IiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUNRQSxJLEdBQVNDLHlDLENBQVRELEk7O0FBSVIsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUFBLGtCQUVLQyxzREFBUSxDQUFDLEtBQUQsQ0FGYjtBQUFBLE1BRVpDLElBRlk7QUFBQSxNQUVOQyxPQUZNOztBQUluQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQ2YsTUFBQyx5Q0FBRDtBQUFNLGNBQVEsRUFBRSxLQUFoQjtBQUF1QixXQUFLLEVBQUU7QUFBRUMsYUFBSyxFQUFFO0FBQVQsT0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUNJLE1BQUMsMENBQUQ7QUFBTyxpQkFBVyxFQUFDLGFBQW5CO0FBQWlDLFNBQUcsRUFBRUMsSUFBSSxDQUFDQyxNQUFMLEVBQXRDO0FBQXFELFlBQU0sRUFBRSxNQUFDLDhEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFBN0Q7QUFBK0UsV0FBSyxFQUFFO0FBQUVDLG9CQUFZLEVBQUU7QUFBaEIsT0FBdEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURKLEVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFGSixFQUdJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsc0JBSEosQ0FEZTtBQUFBLEdBQW5COztBQVFBLE1BQUlDLElBQUksR0FBR0MsMERBQUgsbUJBQVI7QUFtQkFDLHlEQUFTLGdNQUFDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBQ2FDLGtEQUFNLENBQUNDLEtBQVAsQ0FBYTtBQUFFQSxtQkFBSyxFQUFFSixJQUFUO0FBQWVLLHlCQUFXLEVBQUUsVUFBNUI7QUFBd0NDLHVCQUFTLEVBQUM7QUFDOUVDLHFCQUFLLEVBQUc7QUFEc0U7QUFBbEQsYUFBYixDQURiOztBQUFBO0FBQ0FDLGdCQURBO0FBSU5DLG1CQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjs7QUFKTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxHQUFELElBT04sRUFQTSxDQUFUO0FBU0EsU0FDSSxtRUFDSSxNQUFDLHlDQUFEO0FBQ0ksU0FBSyxFQUFFO0FBQUVaLFdBQUssRUFBRSxHQUFUO0FBQWNlLGVBQVMsRUFBRTtBQUF6QixLQURYO0FBRUksV0FBTyxFQUFFLENBQ0wsTUFBQyxpRUFBRDtBQUFpQixTQUFHLEVBQUMsU0FBckI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQURLLEVBRUwsTUFBQyw4REFBRDtBQUFjLFNBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkssRUFHTCxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFISyxFQUlMLE1BQUMsaUVBQUQ7QUFBaUIsYUFBTyxFQUFFO0FBQUEsZUFBTWpCLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BSkssQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBU0ksTUFBQyw2Q0FBRDtBQUFVLFdBQU8sRUFBRSxLQUFuQjtBQUEwQixVQUFNLE1BQWhDO0FBQWlDLFVBQU0sTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsSUFBRDtBQUNJLFVBQU0sRUFBRSxNQUFDLDJDQUFEO0FBQVEsU0FBRyxFQUFDLGtFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEWjtBQUVJLFNBQUssRUFBQyxZQUZWO0FBR0ksZUFBVyxFQUFDLCtIQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FUSixDQURKLEVBbUJLQSxJQUFJLElBQUlFLFVBbkJiLENBREo7QUF1QkgsQ0EvREQ7O0dBQU1KLFE7O0tBQUFBLFE7QUFpRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjllMDQ3NjRhZDIzZTM4Y2JmMTM3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0T3V0bGluZWQsIE1lc3NhZ2VPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkLCBIZWFydEZpbGxlZCwgUGx1c091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIFNrZWxldG9uLCBJbnB1dCB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgeyBncWwgfSBmcm9tICdAYXBvbGxvL2NsaWVudCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9ncWxRdWVyaWVzJztcclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBjb21tZW50Qm94ID0gKCkgPT4gKFxyXG4gICAgICAgIDxDYXJkIGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3sgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmFzaWMgdXNhZ2VcIiBrZXk9e01hdGgucmFuZG9tKCl9IHN1ZmZpeD17PFBsdXNPdXRsaW5lZCAvPn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fSAvPlxyXG4gICAgICAgICAgICA8cD5DYXJkIGNvbnRlbnQ8L3A+XHJcbiAgICAgICAgICAgIDxwPkNhcmQgY29udGVudDwvcD5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcblxyXG4gICAgbGV0IGRhdGEgPSBncWxgXHJcbiAgICBxdWVyeSBmZXRjaFBvc3RzKCRpbnB1dDpGZXRjaFBvc3RJbnB1dCkge1xyXG4gICAgIGZldGNoUG9zdHMoaW5wdXQ6ICRpbnB1dCl7ICBpZFxyXG4gICAgICAgYm9keVxyXG4gICAgICAgdXNlcl9pZFxyXG4gICAgICAgIyBsaWtlc3tcclxuICAgICAgICMgICBsaWtlcl9uYW1lXHJcbiAgICAgICAjICAgbGlrZXJfaWRcclxuICAgICAgICMgICBsaWtlcl9lbWFpbFxyXG4gICAgICAgIyB9XHJcbiAgICAgICAjIGNvbW1lbnRze1xyXG4gICAgICAgIyAgIGNvbW1lbnRcclxuICAgICAgICMgICBpc19kZWxldGVkXHJcbiAgICAgICAjICAgY29tbWVudGF0b3JfbmFtZVxyXG4gICAgICAgIyB9XHJcbiAgICAgICB9XHJcbiAgIH1gXHJcblxyXG5cclxuICAgIHVzZUVmZmVjdChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgcmVzcCA9IGF3YWl0IGNsaWVudC5xdWVyeSh7IHF1ZXJ5OiBkYXRhLCBmZXRjaFBvbGljeTogJ25vLWNhY2hlJywgdmFyaWFibGVzOntcclxuICAgICAgICAgICAgaW5wdXQgOiBudWxsXHJcbiAgICAgICAgfSB9KVxyXG4gICAgICAgIGNvbnNvbGUubG9nKHJlc3ApXHJcblxyXG5cclxuICAgIH0sIFtdKVxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA1MDAsIG1hcmdpblRvcDogMTYgfX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cInNldHRpbmdcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8RWRpdE91dGxpbmVkIGtleT1cImVkaXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRGaWxsZWQgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPE1lc3NhZ2VPdXRsaW5lZCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0gLz5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBsb2FkaW5nPXtmYWxzZX0gYXZhdGFyIGFjdGl2ZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT1cIkNhcmQgdGl0bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj1cIkl0IGlzIGEgbG9uZyBlc3RhYmxpc2hlZCBmYWN0IHRoYXQgYSByZWFkZXIgd2lsbCBiZSBkaXN0cmFjdGVkIGJ5IHRoZSByZWFkYWJsZSBjb250ZW50IG9mIGEgcGFnZSB3aGVuIGxvb2tpbmcgYXQgaXRzIGxheW91dC4gXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAge3Nob3cgJiYgY29tbWVudEJveH1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=