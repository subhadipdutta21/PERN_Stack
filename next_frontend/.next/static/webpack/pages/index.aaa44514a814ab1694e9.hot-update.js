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

  var data = [{
    "comment": "Happy wekedn  ",
    "commentator_id": null,
    "commentator_name": "subhadip dutta"
  }, {
    "comment": "good to go . ",
    "commentator_id": null,
    "commentator_name": "subhadip dutta"
  }, {
    "comment": "but you should not in this manner !! ",
    "commentator_id": null,
    "commentator_name": "subhadip dutta"
  }, {
    "comment": "but you should not in this manner !! ",
    "commentator_id": null,
    "commentator_name": "samapan bh"
  }];
  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    getComments();
  }, [postID]);

  var getComments = /*#__PURE__*/function () {
    var _ref2 = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
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
              console.log(resp.data);

            case 4:
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
        lineNumber: 56,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Input"], {
      placeholder: "Basic usage",
      key: Math.random(),
      suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["PlusOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57,
          columnNumber: 74
        }
      }),
      style: {
        marginBottom: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57,
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
            lineNumber: 62,
            columnNumber: 21
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["List"].Item.Meta, {
          avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Avatar"], {
            src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 37
            }
          }),
          title: __jsx("a", {
            href: "https://ant.design",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 36
            }
          }, item.commentator_name),
          description: item.comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 58,
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
        lineNumber: 80,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 56
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["HeartFilled"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_2__["MessageOutlined"], {
      onClick: function onClick() {
        return setShow(!show);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 81,
        columnNumber: 38
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_3__["Skeleton"], {
    loading: false,
    avatar: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: avatar,
    title: name,
    description: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 21
    }
  }))), show && commentBox());
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwiY29udGVudCIsIm5hbWUiLCJwb3N0SUQiLCJhdmF0YXIiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGF0YSIsInVzZUVmZmVjdCIsImdldENvbW1lbnRzIiwiY2xpZW50IiwicXVlcnkiLCJmZXRjaF9jb21tZW50c19xdWVyeSIsImZldGNoUG9saWN5IiwidmFyaWFibGVzIiwiaW5wdXQiLCJwb3N0X2lkIiwicmVzcCIsImNvbnNvbGUiLCJsb2ciLCJjb21tZW50Qm94Iiwid2lkdGgiLCJNYXRoIiwicmFuZG9tIiwibWFyZ2luQm90dG9tIiwiaXRlbSIsImNvbW1lbnRhdG9yX25hbWUiLCJjb21tZW50IiwibWFyZ2luVG9wIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtJQUVRQSxJLEdBQVNDLHlDLENBQVRELEk7O0FBR1IsSUFBTUUsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsT0FBNEIsUUFBNUJBLE9BQTRCO0FBQUEsTUFBbkJDLElBQW1CLFFBQW5CQSxJQUFtQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTs7QUFFNUMsTUFBTUMsTUFBTSxHQUFHLE1BQUMsMkNBQUQ7QUFBUSxPQUFHLEVBQUMsa0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUFmOztBQUY0QyxrQkFJcEJDLHNEQUFRLENBQUMsS0FBRCxDQUpZO0FBQUEsTUFJckNDLElBSnFDO0FBQUEsTUFJL0JDLE9BSitCOztBQU01QyxNQUFJQyxJQUFJLEdBQUcsQ0FDUDtBQUNJLGVBQVcsZ0JBRGY7QUFFSSxzQkFBa0IsSUFGdEI7QUFHSSx3QkFBb0I7QUFIeEIsR0FETyxFQU1QO0FBQ0ksZUFBVyxlQURm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RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkssRUFFWSxNQUFDLGlFQUFEO0FBQWlCLGFBQU8sRUFBRTtBQUFBLGVBQU10QixPQUFPLENBQUMsQ0FBQ0QsSUFBRixDQUFiO0FBQUEsT0FBMUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxNQUZaLENBRmI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQU9JLE1BQUMsNkNBQUQ7QUFBVSxXQUFPLEVBQUUsS0FBbkI7QUFBMEIsVUFBTSxNQUFoQztBQUFpQyxVQUFNLE1BQXZDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDSSxNQUFDLElBQUQ7QUFBTSxVQUFNLEVBQUVGLE1BQWQ7QUFBc0IsU0FBSyxFQUFFRixJQUE3QjtBQUFtQyxlQUFXLEVBQUVELE9BQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFESixDQVBKLENBREosRUFhS0ssSUFBSSxJQUFJZSxVQUFVLEVBYnZCLENBREo7QUFpQkgsQ0FsRkQ7O0dBQU1yQixROztLQUFBQSxRO0FBb0ZTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5hYWE0NDUxNGE4MTRhYjE2OTRlOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBIZWFydEZpbGxlZCwgTWVzc2FnZU91dGxpbmVkLCBQbHVzT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQXZhdGFyLCBDYXJkLCBJbnB1dCwgU2tlbGV0b24sIExpc3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IGNsaWVudCB9IGZyb20gJy4uL2Fwb2xsb0dxbENsaWVudCc7XHJcbmltcG9ydCB7IGZldGNoX2NvbW1lbnRzX3F1ZXJ5IH0gZnJvbSAnLi4vZ3FsUXVlcmllcyc7XHJcblxyXG5jb25zdCB7IE1ldGEgfSA9IENhcmQ7XHJcblxyXG5cclxuY29uc3QgUG9zdENhcmQgPSAoeyBjb250ZW50LCBuYW1lLCBwb3N0SUQgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGF2YXRhciA9IDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+XHJcblxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgbGV0IGRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbW1lbnRcIjogXCJIYXBweSB3ZWtlZG4gIFwiLFxyXG4gICAgICAgICAgICBcImNvbW1lbnRhdG9yX2lkXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfbmFtZVwiOiBcInN1YmhhZGlwIGR1dHRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb21tZW50XCI6IFwiZ29vZCB0byBnbyAuIFwiLFxyXG4gICAgICAgICAgICBcImNvbW1lbnRhdG9yX2lkXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfbmFtZVwiOiBcInN1YmhhZGlwIGR1dHRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb21tZW50XCI6IFwiYnV0IHlvdSBzaG91bGQgbm90IGluIHRoaXMgbWFubmVyICEhIFwiLFxyXG4gICAgICAgICAgICBcImNvbW1lbnRhdG9yX2lkXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfbmFtZVwiOiBcInN1YmhhZGlwIGR1dHRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb21tZW50XCI6IFwiYnV0IHlvdSBzaG91bGQgbm90IGluIHRoaXMgbWFubmVyICEhIFwiLFxyXG4gICAgICAgICAgICBcImNvbW1lbnRhdG9yX2lkXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfbmFtZVwiOiBcInNhbWFwYW4gYmhcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIGdldENvbW1lbnRzKClcclxuICAgIH0sIFtwb3N0SURdKVxyXG5cclxuICAgIGNvbnN0IGdldENvbW1lbnRzID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGxldCByZXNwID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcclxuICAgICAgICAgICAgcXVlcnk6IGZldGNoX2NvbW1lbnRzX3F1ZXJ5LCBmZXRjaFBvbGljeTogJ25vLWNhY2hlJywgdmFyaWFibGVzOiB7XHJcbiAgICAgICAgICAgICAgICBpbnB1dDoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc3RfaWQ6IHBvc3RJRFxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc29sZS5sb2cocmVzcC5kYXRhKVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRCb3ggPSAoKSA9PiAoXHJcbiAgICAgICAgPENhcmQgYm9yZGVyZWQ9e2ZhbHNlfSBzdHlsZT17eyB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCYXNpYyB1c2FnZVwiIGtleT17TWF0aC5yYW5kb20oKX0gc3VmZml4PXs8UGx1c091dGxpbmVkIC8+fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19IC8+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIj57aXRlbS5jb21tZW50YXRvcl9uYW1lfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5jb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA1MDAsIG1hcmdpblRvcDogMTYgfX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cInNldHRpbmdcIiAvPiwgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+LCA8TWVzc2FnZU91dGxpbmVkIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfSAvPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIGxvYWRpbmc9e2ZhbHNlfSBhdmF0YXIgYWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXRhIGF2YXRhcj17YXZhdGFyfSB0aXRsZT17bmFtZX0gZGVzY3JpcHRpb249e2NvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICB7c2hvdyAmJiBjb21tZW50Qm94KCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiXSwic291cmNlUm9vdCI6IiJ9