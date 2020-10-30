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
      name = _ref.name;

  var avatar = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 20
    }
  });

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
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

  var commentBox = function commentBox() {
    return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
      bordered: false,
      style: {
        width: 500
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
      placeholder: "Basic usage",
      key: Math.random(),
      suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["PlusOutlined"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 74
        }
      }),
      style: {
        marginBottom: 15
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 13
      }
    }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
      itemLayout: "horizontal",
      dataSource: data,
      renderItem: function renderItem(item) {
        return __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 21
          }
        }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
          avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
            src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 37
            }
          }),
          title: __jsx("a", {
            href: "https://ant.design",
            __self: _this,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 47,
              columnNumber: 36
            }
          }, item.commentator_name),
          description: comment,
          __self: _this,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 25
          }
        }));
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 13
      }
    }));
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
        lineNumber: 62,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutlined"], {
      key: "edit",
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 56
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartFilled"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutlined"], {
      onClick: function onClick() {
        return setShow(!show);
      },
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 38
      }
    })],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    loading: false,
    avatar: true,
    active: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: avatar,
    title: name,
    description: content,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwiY29udGVudCIsIm5hbWUiLCJhdmF0YXIiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGF0YSIsImNvbW1lbnRCb3giLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW5Cb3R0b20iLCJpdGVtIiwiY29tbWVudGF0b3JfbmFtZSIsImNvbW1lbnQiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBRVFBLEksR0FBU0MseUMsQ0FBVEQsSTs7QUFHUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBRXBDLE1BQU1DLE1BQU0sR0FBRyxNQUFDLDJDQUFEO0FBQVEsT0FBRyxFQUFDLGtFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBZjs7QUFGb0Msa0JBSVpDLHNEQUFRLENBQUMsS0FBRCxDQUpJO0FBQUEsTUFJN0JDLElBSjZCO0FBQUEsTUFJdkJDLE9BSnVCOztBQU1wQyxNQUFJQyxJQUFJLEdBQUcsQ0FDUDtBQUNJLGVBQVcsZ0JBRGY7QUFFSSxzQkFBa0IsSUFGdEI7QUFHSSx3QkFBb0I7QUFIeEIsR0FETyxFQU1QO0FBQ0ksZUFBVyxlQURmO0FBRUksc0JBQWtCLElBRnRCO0FBR0ksd0JBQW9CO0FBSHhCLEdBTk8sRUFXUDtBQUNJLGVBQVcsdUNBRGY7QUFFSSxzQkFBa0IsSUFGdEI7QUFHSSx3QkFBb0I7QUFIeEIsR0FYTyxFQWdCUDtBQUNJLGVBQVcsdUNBRGY7QUFFSSxzQkFBa0IsSUFGdEI7QUFHSSx3QkFBb0I7QUFIeEIsR0FoQk8sQ0FBWDs7QUF1QkEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUNmLE1BQUMseUNBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBaEI7QUFBdUIsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDBDQUFEO0FBQU8saUJBQVcsRUFBQyxhQUFuQjtBQUFpQyxTQUFHLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxFQUF0QztBQUFxRCxZQUFNLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTdEO0FBQStFLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCLE9BQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJLE1BQUMseUNBQUQ7QUFDSSxnQkFBVSxFQUFDLFlBRGY7QUFFSSxnQkFBVSxFQUFFTCxJQUZoQjtBQUdJLGdCQUFVLEVBQUUsb0JBQUFNLElBQUk7QUFBQSxlQUNaLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSSxNQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDSSxnQkFBTSxFQUFFLE1BQUMsMkNBQUQ7QUFBUSxlQUFHLEVBQUMsa0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURaO0FBRUksZUFBSyxFQUFFO0FBQUcsZ0JBQUksRUFBQyxvQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThCQSxJQUFJLENBQUNDLGdCQUFuQyxDQUZYO0FBR0kscUJBQVcsRUFBRUMsT0FIakI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKLENBRFk7QUFBQSxPQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkosQ0FEZTtBQUFBLEdBQW5COztBQW9CQSxTQUNJLG1FQUNJLE1BQUMseUNBQUQ7QUFDSSxTQUFLLEVBQUU7QUFBRU4sV0FBSyxFQUFFLEdBQVQ7QUFBY08sZUFBUyxFQUFFO0FBQXpCLEtBRFg7QUFFSSxXQUFPLEVBQUUsQ0FDTCxNQUFDLGlFQUFEO0FBQWlCLFNBQUcsRUFBQyxTQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BREssRUFDOEIsTUFBQyw4REFBRDtBQUFjLFNBQUcsRUFBQyxNQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRDlCLEVBRUwsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRkssRUFFWSxNQUFDLGlFQUFEO0FBQWlCLGFBQU8sRUFBRTtBQUFBLGVBQU1WLE9BQU8sQ0FBQyxDQUFDRCxJQUFGLENBQWI7QUFBQSxPQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BRlosQ0FGYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBT0ksTUFBQyw2Q0FBRDtBQUFVLFdBQU8sRUFBRSxLQUFuQjtBQUEwQixVQUFNLE1BQWhDO0FBQWlDLFVBQU0sTUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNJLE1BQUMsSUFBRDtBQUFNLFVBQU0sRUFBRUYsTUFBZDtBQUFzQixTQUFLLEVBQUVELElBQTdCO0FBQW1DLGVBQVcsRUFBRUQsT0FBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQURKLENBUEosQ0FESixFQWFLSSxJQUFJLElBQUlHLFVBQVUsRUFidkIsQ0FESjtBQWlCSCxDQWxFRDs7R0FBTVIsUTs7S0FBQUEsUTtBQW9FU0EsdUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2I3ZDQyY2M2ZDE0YzY0Nzc5YmYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVkaXRPdXRsaW5lZCwgSGVhcnRGaWxsZWQsIE1lc3NhZ2VPdXRsaW5lZCwgUGx1c091dGxpbmVkLCBTZXR0aW5nT3V0bGluZWQgfSBmcm9tICdAYW50LWRlc2lnbi9pY29ucyc7XHJcbmltcG9ydCB7IEF2YXRhciwgQ2FyZCwgSW5wdXQsIFNrZWxldG9uLCBMaXN0IH0gZnJvbSAnYW50ZCc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IGNvbnRlbnQsIG5hbWUgfSkgPT4ge1xyXG5cclxuICAgIGNvbnN0IGF2YXRhciA9IDxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+XHJcblxyXG4gICAgY29uc3QgW3Nob3csIHNldFNob3ddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gICAgbGV0IGRhdGEgPSBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbW1lbnRcIjogXCJIYXBweSB3ZWtlZG4gIFwiLFxyXG4gICAgICAgICAgICBcImNvbW1lbnRhdG9yX2lkXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfbmFtZVwiOiBcInN1YmhhZGlwIGR1dHRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb21tZW50XCI6IFwiZ29vZCB0byBnbyAuIFwiLFxyXG4gICAgICAgICAgICBcImNvbW1lbnRhdG9yX2lkXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfbmFtZVwiOiBcInN1YmhhZGlwIGR1dHRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb21tZW50XCI6IFwiYnV0IHlvdSBzaG91bGQgbm90IGluIHRoaXMgbWFubmVyICEhIFwiLFxyXG4gICAgICAgICAgICBcImNvbW1lbnRhdG9yX2lkXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfbmFtZVwiOiBcInN1YmhhZGlwIGR1dHRhXCJcclxuICAgICAgICB9LFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgXCJjb21tZW50XCI6IFwiYnV0IHlvdSBzaG91bGQgbm90IGluIHRoaXMgbWFubmVyICEhIFwiLFxyXG4gICAgICAgICAgICBcImNvbW1lbnRhdG9yX2lkXCI6IG51bGwsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfbmFtZVwiOiBcInNhbWFwYW4gYmhcIlxyXG4gICAgICAgIH1cclxuICAgIF1cclxuXHJcbiAgICBjb25zdCBjb21tZW50Qm94ID0gKCkgPT4gKFxyXG4gICAgICAgIDxDYXJkIGJvcmRlcmVkPXtmYWxzZX0gc3R5bGU9e3sgd2lkdGg6IDUwMCB9fT5cclxuICAgICAgICAgICAgPElucHV0IHBsYWNlaG9sZGVyPVwiQmFzaWMgdXNhZ2VcIiBrZXk9e01hdGgucmFuZG9tKCl9IHN1ZmZpeD17PFBsdXNPdXRsaW5lZCAvPn0gc3R5bGU9e3sgbWFyZ2luQm90dG9tOiAxNSB9fSAvPlxyXG4gICAgICAgICAgICA8TGlzdFxyXG4gICAgICAgICAgICAgICAgaXRlbUxheW91dD1cImhvcml6b250YWxcIlxyXG4gICAgICAgICAgICAgICAgZGF0YVNvdXJjZT17ZGF0YX1cclxuICAgICAgICAgICAgICAgIHJlbmRlckl0ZW09e2l0ZW0gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaXN0Lkl0ZW0uTWV0YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXZhdGFyPXs8QXZhdGFyIHNyYz1cImh0dHBzOi8vem9zLmFsaXBheW9iamVjdHMuY29tL3Jtc3BvcnRhbC9PRFRMY2p4QWZ2cWJ4SG5WWENZWC5wbmdcIiAvPn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXs8YSBocmVmPVwiaHR0cHM6Ly9hbnQuZGVzaWduXCI+e2l0ZW0uY29tbWVudGF0b3JfbmFtZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249e2NvbW1lbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaXN0Lkl0ZW0+XHJcbiAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgIDwvQ2FyZD5cclxuICAgIClcclxuXHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICA8Q2FyZFxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDUwMCwgbWFyZ2luVG9wOiAxNiB9fVxyXG4gICAgICAgICAgICAgICAgYWN0aW9ucz17W1xyXG4gICAgICAgICAgICAgICAgICAgIDxTZXR0aW5nT3V0bGluZWQga2V5PVwic2V0dGluZ1wiIC8+LCA8RWRpdE91dGxpbmVkIGtleT1cImVkaXRcIiAvPixcclxuICAgICAgICAgICAgICAgICAgICA8SGVhcnRGaWxsZWQgLz4sIDxNZXNzYWdlT3V0bGluZWQgb25DbGljaz17KCkgPT4gc2V0U2hvdyghc2hvdyl9IC8+XHJcbiAgICAgICAgICAgICAgICBdfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8U2tlbGV0b24gbG9hZGluZz17ZmFsc2V9IGF2YXRhciBhY3RpdmU+XHJcbiAgICAgICAgICAgICAgICAgICAgPE1ldGEgYXZhdGFyPXthdmF0YXJ9IHRpdGxlPXtuYW1lfSBkZXNjcmlwdGlvbj17Y29udGVudH0gLz5cclxuICAgICAgICAgICAgICAgIDwvU2tlbGV0b24+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuXHJcbiAgICAgICAgICAgIHtzaG93ICYmIGNvbW1lbnRCb3goKX1cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFBvc3RDYXJkOyJdLCJzb3VyY2VSb290IjoiIn0=