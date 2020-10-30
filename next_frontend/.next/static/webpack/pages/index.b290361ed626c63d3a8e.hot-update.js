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
          }, item.title),
          description: "Ant Design, a design language for background applications, is refined by Ant UED Team",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyJdLCJuYW1lcyI6WyJNZXRhIiwiQ2FyZCIsIlBvc3RDYXJkIiwiY29udGVudCIsIm5hbWUiLCJhdmF0YXIiLCJ1c2VTdGF0ZSIsInNob3ciLCJzZXRTaG93IiwiZGF0YSIsImNvbW1lbnRCb3giLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW5Cb3R0b20iLCJpdGVtIiwidGl0bGUiLCJtYXJnaW5Ub3AiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0lBRVFBLEksR0FBU0MseUMsQ0FBVEQsSTs7QUFHUixJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUF1QjtBQUFBOztBQUFBLE1BQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBRXBDLE1BQU1DLE1BQU0sR0FBRyxNQUFDLDJDQUFEO0FBQVEsT0FBRyxFQUFDLGtFQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFBZjs7QUFGb0Msa0JBSVpDLHNEQUFRLENBQUMsS0FBRCxDQUpJO0FBQUEsTUFJN0JDLElBSjZCO0FBQUEsTUFJdkJDLE9BSnVCOztBQU1wQyxNQUFJQyxJQUFJLEdBQUcsQ0FDUDtBQUNJLGVBQVcsZ0JBRGY7QUFFSSxzQkFBa0IsSUFGdEI7QUFHSSx3QkFBb0I7QUFIeEIsR0FETyxFQU1QO0FBQ0ksZUFBVyxlQURmO0FBRUksc0JBQWtCLElBRnRCO0FBR0ksd0JBQW9CO0FBSHhCLEdBTk8sRUFXUDtBQUNJLGVBQVcsdUNBRGY7QUFFSSxzQkFBa0IsSUFGdEI7QUFHSSx3QkFBb0I7QUFIeEIsR0FYTyxFQWdCUDtBQUNJLGVBQVcsdUNBRGY7QUFFSSxzQkFBa0IsSUFGdEI7QUFHSSx3QkFBb0I7QUFIeEIsR0FoQk8sQ0FBWDs7QUF1QkEsTUFBTUMsVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQSxXQUNmLE1BQUMseUNBQUQ7QUFBTSxjQUFRLEVBQUUsS0FBaEI7QUFBdUIsV0FBSyxFQUFFO0FBQUVDLGFBQUssRUFBRTtBQUFULE9BQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsT0FDSSxNQUFDLDBDQUFEO0FBQU8saUJBQVcsRUFBQyxhQUFuQjtBQUFpQyxTQUFHLEVBQUVDLElBQUksQ0FBQ0MsTUFBTCxFQUF0QztBQUFxRCxZQUFNLEVBQUUsTUFBQyw4REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBQTdEO0FBQStFLFdBQUssRUFBRTtBQUFFQyxvQkFBWSxFQUFFO0FBQWhCLE9BQXRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESixFQUVJLE1BQUMseUNBQUQ7QUFDSSxnQkFBVSxFQUFDLFlBRGY7QUFFSSxnQkFBVSxFQUFFTCxJQUZoQjtBQUdJLGdCQUFVLEVBQUUsb0JBQUFNLElBQUk7QUFBQSxlQUNaLE1BQUMseUNBQUQsQ0FBTSxJQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FDSSxNQUFDLHlDQUFELENBQU0sSUFBTixDQUFXLElBQVg7QUFDSSxnQkFBTSxFQUFFLE1BQUMsMkNBQUQ7QUFBUSxlQUFHLEVBQUMsa0VBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURaO0FBRUksZUFBSyxFQUFFO0FBQUcsZ0JBQUksRUFBQyxvQkFBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBQThCQSxJQUFJLENBQUNDLEtBQW5DLENBRlg7QUFHSSxxQkFBVyxFQUFDLHVGQUhoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREosQ0FEWTtBQUFBLE9BSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSixDQURlO0FBQUEsR0FBbkI7O0FBb0JBLFNBQ0ksbUVBQ0ksTUFBQyx5Q0FBRDtBQUNJLFNBQUssRUFBRTtBQUFFTCxXQUFLLEVBQUUsR0FBVDtBQUFjTSxlQUFTLEVBQUU7QUFBekIsS0FEWDtBQUVJLFdBQU8sRUFBRSxDQUNMLE1BQUMsaUVBQUQ7QUFBaUIsU0FBRyxFQUFDLFNBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFESyxFQUM4QixNQUFDLDhEQUFEO0FBQWMsU0FBRyxFQUFDLE1BQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFEOUIsRUFFTCxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGSyxFQUVZLE1BQUMsaUVBQUQ7QUFBaUIsYUFBTyxFQUFFO0FBQUEsZUFBTVQsT0FBTyxDQUFDLENBQUNELElBQUYsQ0FBYjtBQUFBLE9BQTFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFGWixDQUZiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FPSSxNQUFDLDZDQUFEO0FBQVUsV0FBTyxFQUFFLEtBQW5CO0FBQTBCLFVBQU0sTUFBaEM7QUFBaUMsVUFBTSxNQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0ksTUFBQyxJQUFEO0FBQU0sVUFBTSxFQUFFRixNQUFkO0FBQXNCLFNBQUssRUFBRUQsSUFBN0I7QUFBbUMsZUFBVyxFQUFFRCxPQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBREosQ0FQSixDQURKLEVBYUtJLElBQUksSUFBSUcsVUFBVSxFQWJ2QixDQURKO0FBaUJILENBbEVEOztHQUFNUixROztLQUFBQSxRO0FBb0VTQSx1RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5iMjkwMzYxZWQ2MjZjNjNkM2E4ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRWRpdE91dGxpbmVkLCBIZWFydEZpbGxlZCwgTWVzc2FnZU91dGxpbmVkLCBQbHVzT3V0bGluZWQsIFNldHRpbmdPdXRsaW5lZCB9IGZyb20gJ0BhbnQtZGVzaWduL2ljb25zJztcclxuaW1wb3J0IHsgQXZhdGFyLCBDYXJkLCBJbnB1dCwgU2tlbGV0b24sIExpc3QgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuY29uc3QgeyBNZXRhIH0gPSBDYXJkO1xyXG5cclxuXHJcbmNvbnN0IFBvc3RDYXJkID0gKHsgY29udGVudCwgbmFtZSB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgYXZhdGFyID0gPEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz5cclxuXHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBsZXQgZGF0YSA9IFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIFwiY29tbWVudFwiOiBcIkhhcHB5IHdla2VkbiAgXCIsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfaWRcIjogbnVsbCxcclxuICAgICAgICAgICAgXCJjb21tZW50YXRvcl9uYW1lXCI6IFwic3ViaGFkaXAgZHV0dGFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbW1lbnRcIjogXCJnb29kIHRvIGdvIC4gXCIsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfaWRcIjogbnVsbCxcclxuICAgICAgICAgICAgXCJjb21tZW50YXRvcl9uYW1lXCI6IFwic3ViaGFkaXAgZHV0dGFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbW1lbnRcIjogXCJidXQgeW91IHNob3VsZCBub3QgaW4gdGhpcyBtYW5uZXIgISEgXCIsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfaWRcIjogbnVsbCxcclxuICAgICAgICAgICAgXCJjb21tZW50YXRvcl9uYW1lXCI6IFwic3ViaGFkaXAgZHV0dGFcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBcImNvbW1lbnRcIjogXCJidXQgeW91IHNob3VsZCBub3QgaW4gdGhpcyBtYW5uZXIgISEgXCIsXHJcbiAgICAgICAgICAgIFwiY29tbWVudGF0b3JfaWRcIjogbnVsbCxcclxuICAgICAgICAgICAgXCJjb21tZW50YXRvcl9uYW1lXCI6IFwic2FtYXBhbiBiaFwiXHJcbiAgICAgICAgfVxyXG4gICAgXVxyXG5cclxuICAgIGNvbnN0IGNvbW1lbnRCb3ggPSAoKSA9PiAoXHJcbiAgICAgICAgPENhcmQgYm9yZGVyZWQ9e2ZhbHNlfSBzdHlsZT17eyB3aWR0aDogNTAwIH19PlxyXG4gICAgICAgICAgICA8SW5wdXQgcGxhY2Vob2xkZXI9XCJCYXNpYyB1c2FnZVwiIGtleT17TWF0aC5yYW5kb20oKX0gc3VmZml4PXs8UGx1c091dGxpbmVkIC8+fSBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDE1IH19IC8+XHJcbiAgICAgICAgICAgIDxMaXN0XHJcbiAgICAgICAgICAgICAgICBpdGVtTGF5b3V0PVwiaG9yaXpvbnRhbFwiXHJcbiAgICAgICAgICAgICAgICBkYXRhU291cmNlPXtkYXRhfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIj57aXRlbS50aXRsZX08L2E+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb249XCJBbnQgRGVzaWduLCBhIGRlc2lnbiBsYW5ndWFnZSBmb3IgYmFja2dyb3VuZCBhcHBsaWNhdGlvbnMsIGlzIHJlZmluZWQgYnkgQW50IFVFRCBUZWFtXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgKVxyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIDxDYXJkXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogNTAwLCBtYXJnaW5Ub3A6IDE2IH19XHJcbiAgICAgICAgICAgICAgICBhY3Rpb25zPXtbXHJcbiAgICAgICAgICAgICAgICAgICAgPFNldHRpbmdPdXRsaW5lZCBrZXk9XCJzZXR0aW5nXCIgLz4sIDxFZGl0T3V0bGluZWQga2V5PVwiZWRpdFwiIC8+LFxyXG4gICAgICAgICAgICAgICAgICAgIDxIZWFydEZpbGxlZCAvPiwgPE1lc3NhZ2VPdXRsaW5lZCBvbkNsaWNrPXsoKSA9PiBzZXRTaG93KCFzaG93KX0gLz5cclxuICAgICAgICAgICAgICAgIF19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxTa2VsZXRvbiBsb2FkaW5nPXtmYWxzZX0gYXZhdGFyIGFjdGl2ZT5cclxuICAgICAgICAgICAgICAgICAgICA8TWV0YSBhdmF0YXI9e2F2YXRhcn0gdGl0bGU9e25hbWV9IGRlc2NyaXB0aW9uPXtjb250ZW50fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9Ta2VsZXRvbj5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG5cclxuICAgICAgICAgICAge3Nob3cgJiYgY29tbWVudEJveCgpfVxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7Il0sInNvdXJjZVJvb3QiOiIifQ==