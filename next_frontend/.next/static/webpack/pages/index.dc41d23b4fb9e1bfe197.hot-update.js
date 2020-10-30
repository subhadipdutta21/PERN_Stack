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

var PostCard = function PostCard(_ref) {
  _s();

  var content = _ref.content,
      name = _ref.name,
      postID = _ref.postID;

  var avatar = __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 20
    }
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])([]),
      comments = _useState2[0],
      setComments = _useState2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getComments();
  }, [postID]);

  var getComments = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var _resp$data, _resp$data2, _resp$data3;

      var resp;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _apolloGqlClient__WEBPACK_IMPORTED_MODULE_5__["client"].query({
                query: _gqlQueries__WEBPACK_IMPORTED_MODULE_6__["fetch_comments_query"],
                fetchPolicy: 'no-cache',
                variables: {
                  input: {
                    post_id: postID
                  }
                }
              });

            case 2:
              resp = _context.sent;
              console.log(resp === null || resp === void 0 ? void 0 : (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.fetchCommentsOnPostID);
              (resp === null || resp === void 0 ? void 0 : (_resp$data2 = resp.data) === null || _resp$data2 === void 0 ? void 0 : _resp$data2.fetchCommentsOnPostID) ? setComments(resp === null || resp === void 0 ? void 0 : (_resp$data3 = resp.data) === null || _resp$data3 === void 0 ? void 0 : _resp$data3.fetchCommentsOnPostID) : antd__WEBPACK_IMPORTED_MODULE_3__["message"].error('Something went wrong!');

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function getComments() {
      return _ref2.apply(this, arguments);
    };
  }();

  var commentBox = function commentBox() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Card"], {
      bordered: false,
      style: {
        width: 500
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      placeholder: "Basic usage",
      key: Math.random(),
      suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 74
        }
      }),
      style: {
        marginBottom: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 13
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"], {
      itemLayout: "horizontal",
      dataSource: data,
      renderItem: function renderItem(item) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 21
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
          avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
            src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 44,
              columnNumber: 37
            }
          }),
          title: __jsx("a", {
            href: "https://ant.design",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 36
            }
          }, item.commentator_name),
          description: item.comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 25
          }
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 13
      }
    }));
  };

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
        lineNumber: 60,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 56
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartFilled"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      onClick: function onClick() {
        return setShow(!show);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 38
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    loading: false,
    avatar: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: avatar,
    title: name,
    description: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }))), show && commentBox());
};

_s(PostCard, "ocrleVP4L+Sd0pzLFeKFC0dLHTI=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwiY29udGVudCIsIm5hbWUiLCJwb3N0SUQiLCJhdmF0YXIiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiY29tbWVudHMiLCJzZXRDb21tZW50cyIsInVzZUVmZmVjdCIsImdldENvbW1lbnRzIiwiY2xpZW50IiwicXVlcnkiLCJmZXRjaF9jb21tZW50c19xdWVyeSIsImZldGNoUG9saWN5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJwb3N0X2lkIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJkYXRhIiwiZmV0Y2hDb21tZW50c09uUG9zdElEIiwibWVzc2FnZSIsImVycm9yIiwiY29tbWVudEJveCIsIndpZHRoIiwiTWF0aCIsInJhbmRvbSIsIm1hcmdpbkJvdHRvbSIsIml0ZW0iLCJjb21tZW50YXRvcl9uYW1lIiwiY29tbWVudCIsIm1hcmdpblRvcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFFUUEsSSxHQUFTQyx5QyxDQUFURCxJOztBQUdSLElBQU1FLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLE9BQTRCLFFBQTVCQSxPQUE0QjtBQUFBLE1BQW5CQyxJQUFtQixRQUFuQkEsSUFBbUI7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7O0FBRTVDLE1BQU1DLE1BQU0sR0FBRyxNQUFDLDJDQUFEO0FBQVEsT0FBRyxFQUFDLGtFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBZjs7QUFGNEMsa0JBSXBCQyxzREFBUSxDQUFDLEtBQUQsQ0FKWTtBQUFBLE1BSXJDQyxJQUpxQztBQUFBLE1BSS9CQyxPQUorQjs7QUFBQSxtQkFNWkYsc0RBQVEsQ0FBQyxFQUFELENBTkk7QUFB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QUFBQSxNQURLLEVBQzhCLE1BQUMsOERBQUQ7QUFBYyxTQUFHLEVBQUMsTUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUQ5QixFQUVMLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZLLEVBRVksTUFBQyxpRUFBRDtBQUFpQixhQUFPLEVBQUU7QUFBQSxlQUFNM0IsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGWixDQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSSxNQUFDLDZDQUFEO0FBQVUsV0FBTyxFQUFFLEtBQW5CO0FBQTBCLFVBQU0sTUFBaEM7QUFBaUMsVUFBTSxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxJQUFEO0FBQU0sVUFBTSxFQUFFRixNQUFkO0FBQXNCLFNBQUssRUFBRUYsSUFBN0I7QUFBbUMsZUFBVyxFQUFFRCxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixDQURKLEVBYUtLLElBQUksSUFBSW9CLFVBQVUsRUFidkIsQ0FESjtBQWlCSCxDQTlERDs7R0FBTTFCLFE7O0tBQUFBLFE7QUFnRVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmRjNDFkMjNiNGZiOWUxYmZlMTk3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFZGl0T3V0bGluZWQsIEhlYXJ0RmlsbGVkLCBNZXNzYWdlT3V0bGluZWQsIFBsdXNPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIElucHV0LCBTa2VsZXRvbiwgTGlzdCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vYXBvbGxvR3FsQ2xpZW50JztcclxuaW1wb3J0IHsgZmV0Y2hfY29tbWVudHNfcXVlcnkgfSBmcm9tICcuLi9ncWxRdWVyaWVzJztcclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IGNvbnRlbnQsIG5hbWUsIHBvc3RJRCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgYXZhdGFyID0gPEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz5cclxuXHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q29tbWVudHMoKVxyXG4gICAgfSwgW3Bvc3RJRF0pXHJcblxyXG4gICAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogZmV0Y2hfY29tbWVudHNfcXVlcnksIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLCB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdF9pZDogcG9zdElEXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwPy5kYXRhPy5mZXRjaENvbW1lbnRzT25Qb3N0SUQpXHJcbiAgICAgICAgcmVzcD8uZGF0YT8uZmV0Y2hDb21tZW50c09uUG9zdElEID8gc2V0Q29tbWVudHMocmVzcD8uZGF0YT8uZmV0Y2hDb21tZW50c09uUG9zdElEKSA6IG1lc3NhZ2UuZXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tbWVudEJveCA9ICgpID0+IChcclxuICAgICAgICA8Q2FyZCBib3JkZXJlZD17ZmFsc2V9IHN0eWxlPXt7IHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkJhc2ljIHVzYWdlXCIga2V5PXtNYXRoLnJhbmRvbSgpfSBzdWZmaXg9ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUgfX0gLz5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2RhdGF9XHJcbiAgICAgICAgICAgICAgICByZW5kZXJJdGVtPXtpdGVtID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TGlzdC5JdGVtLk1ldGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF2YXRhcj17PEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17PGEgaHJlZj1cImh0dHBzOi8vYW50LmRlc2lnblwiPntpdGVtLmNvbW1lbnRhdG9yX25hbWV9PC9hPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uPXtpdGVtLmNvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDUwMCwgbWFyZ2luVG9wOiAxNiB9fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LCA8RWRpdE91dGxpbmVkIGtleT1cImVkaXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRGaWxsZWQgLz4sIDxNZXNzYWdlT3V0bGluZWQgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9IC8+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17ZmFsc2V9IGF2YXRhciBhY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgYXZhdGFyPXthdmF0YXJ9IHRpdGxlPXtuYW1lfSBkZXNjcmlwdGlvbj17Y29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgIHtzaG93ICYmIGNvbW1lbnRCb3goKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=