module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Components/PostCard.js":
/*!********************************!*\
  !*** ./Components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ant-design/icons */ "@ant-design/icons");
/* harmony import */ var _ant_design_icons__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _apolloGqlClient__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apolloGqlClient */ "./apolloGqlClient.js");
/* harmony import */ var _gqlQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gqlQueries */ "./gqlQueries/index.js");
var _jsxFileName = "D:\\PERSONAL PROJECTS\\REACT\\PERN\\next_frontend\\Components\\PostCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;





const {
  Meta
} = antd__WEBPACK_IMPORTED_MODULE_1__["Card"];

const PostCard = ({
  content,
  name,
  postID
}) => {
  const avatar = __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
    src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 20
    }
  });

  const {
    0: show,
    1: setShow
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: comments,
    1: setComments
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(() => {
    getComments();
  }, [postID]);

  const getComments = async () => {
    var _resp$data, _resp$data2, _resp$data3;

    let resp = await _apolloGqlClient__WEBPACK_IMPORTED_MODULE_3__["client"].query({
      query: _gqlQueries__WEBPACK_IMPORTED_MODULE_4__["fetch_comments_query"],
      fetchPolicy: 'no-cache',
      variables: {
        input: {
          post_id: postID
        }
      }
    });
    console.log(resp === null || resp === void 0 ? void 0 : (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.fetchCommentsOnPostID);
    (resp === null || resp === void 0 ? void 0 : (_resp$data2 = resp.data) === null || _resp$data2 === void 0 ? void 0 : _resp$data2.fetchCommentsOnPostID) ? setComments(resp === null || resp === void 0 ? void 0 : (_resp$data3 = resp.data) === null || _resp$data3 === void 0 ? void 0 : _resp$data3.fetchCommentsOnPostID) : antd__WEBPACK_IMPORTED_MODULE_1__["message"].error('Something went wrong!');
  };

  const commentBox = () => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    bordered: false,
    style: {
      width: 500
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36,
      columnNumber: 9
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Input"], {
    placeholder: "Basic usage",
    key: Math.random(),
    suffix: __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["PlusOutlined"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37,
        columnNumber: 74
      }
    }),
    style: {
      marginBottom: 15
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 13
    }
  }), __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"], {
    itemLayout: "horizontal",
    dataSource: comments,
    renderItem: item => __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item, {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 21
      }
    }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["List"].Item.Meta, {
      avatar: __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Avatar"], {
        src: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 37
        }
      }),
      title: __jsx("a", {
        href: "https://ant.design",
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 36
        }
      }, item.commentator_name),
      description: item.comment,
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 25
      }
    })),
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 13
    }
  }));

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Card"], {
    style: {
      width: 500,
      marginTop: 16
    },
    actions: [__jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["SettingOutlined"], {
      key: "setting",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["EditOutlined"], {
      key: "edit",
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 60,
        columnNumber: 56
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["HeartFilled"], {
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 21
      }
    }), __jsx(_ant_design_icons__WEBPACK_IMPORTED_MODULE_0__["MessageOutlined"], {
      onClick: () => setShow(!show),
      __self: undefined,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 38
      }
    })],
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 13
    }
  }, __jsx(antd__WEBPACK_IMPORTED_MODULE_1__["Skeleton"], {
    loading: false,
    avatar: true,
    active: true,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64,
      columnNumber: 17
    }
  }, __jsx(Meta, {
    avatar: avatar,
    title: name,
    description: content,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65,
      columnNumber: 21
    }
  }))), show && commentBox());
};

/* harmony default export */ __webpack_exports__["default"] = (PostCard);

/***/ }),

/***/ "./apolloGqlClient.js":
/*!****************************!*\
  !*** ./apolloGqlClient.js ***!
  \****************************/
/*! exports provided: client */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "client", function() { return client; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const client = new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["ApolloClient"]({
  uri: 'http://localhost:5001/',
  cache: new _apollo_client__WEBPACK_IMPORTED_MODULE_0__["InMemoryCache"]()
});

/***/ }),

/***/ "./gqlQueries/index.js":
/*!*****************************!*\
  !*** ./gqlQueries/index.js ***!
  \*****************************/
/*! exports provided: fetch_posts_query, fetch_comments_query */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_posts_query", function() { return fetch_posts_query; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch_comments_query", function() { return fetch_comments_query; });
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @apollo/client */ "@apollo/client");
/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_apollo_client__WEBPACK_IMPORTED_MODULE_0__);

const fetch_posts_query = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query fetchPosts($input:FetchPostInput) {
 fetchPosts(input: $input){  
    id
   body
   user_id
   name
   likes{
     liker_name
     liker_id
     liker_email
   }
   }
}`;
const fetch_comments_query = _apollo_client__WEBPACK_IMPORTED_MODULE_0__["gql"]`
query fetchCommentsOnPostID($input: FetchCommentInput!) {
  fetchCommentsOnPostID(input: $input) {    
    commentator_id
    commentator_name
    commentator_email
    comment
    is_deleted
  }
}`;

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apolloGqlClient__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../apolloGqlClient */ "./apolloGqlClient.js");
/* harmony import */ var _Components_PostCard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/PostCard */ "./Components/PostCard.js");
/* harmony import */ var _gqlQueries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../gqlQueries */ "./gqlQueries/index.js");
var _jsxFileName = "D:\\PERSONAL PROJECTS\\REACT\\PERN\\next_frontend\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;






const Home = ({
  posts
}) => {
  console.log(posts);
  return posts.map((itm, idx) => __jsx(_Components_PostCard__WEBPACK_IMPORTED_MODULE_3__["default"], {
    key: itm.id,
    content: itm.body,
    name: itm.name,
    postID: itm.id,
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 29
    }
  }));
};

async function getStaticProps() {
  console.log('clled server side');
  let posts = [];

  try {
    var _resp$data, _resp$data2;

    const resp = await _apolloGqlClient__WEBPACK_IMPORTED_MODULE_2__["client"].query({
      query: _gqlQueries__WEBPACK_IMPORTED_MODULE_4__["fetch_posts_query"],
      fetchPolicy: 'no-cache',
      variables: {
        input: null
      }
    });
    console.log(resp);
    (resp === null || resp === void 0 ? void 0 : (_resp$data = resp.data) === null || _resp$data === void 0 ? void 0 : _resp$data.fetchPosts) ? posts = resp === null || resp === void 0 ? void 0 : (_resp$data2 = resp.data) === null || _resp$data2 === void 0 ? void 0 : _resp$data2.fetchPosts : null;
  } catch (error) {
    console.log(error);
    antd__WEBPACK_IMPORTED_MODULE_0__["message"].error('Could not fetch posts');
  }

  return {
    props: {
      posts
    }
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ "@ant-design/icons":
/*!************************************!*\
  !*** external "@ant-design/icons" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@ant-design/icons");

/***/ }),

/***/ "@apollo/client":
/*!*********************************!*\
  !*** external "@apollo/client" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@apollo/client");

/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vQ29tcG9uZW50cy9Qb3N0Q2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hcG9sbG9HcWxDbGllbnQuanMiLCJ3ZWJwYWNrOi8vLy4vZ3FsUXVlcmllcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAYW50LWRlc2lnbi9pY29uc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBhcG9sbG8vY2xpZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYW50ZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiXSwibmFtZXMiOlsiTWV0YSIsIkNhcmQiLCJQb3N0Q2FyZCIsImNvbnRlbnQiLCJuYW1lIiwicG9zdElEIiwiYXZhdGFyIiwic2hvdyIsInNldFNob3ciLCJ1c2VTdGF0ZSIsImNvbW1lbnRzIiwic2V0Q29tbWVudHMiLCJ1c2VFZmZlY3QiLCJnZXRDb21tZW50cyIsInJlc3AiLCJjbGllbnQiLCJxdWVyeSIsImZldGNoX2NvbW1lbnRzX3F1ZXJ5IiwiZmV0Y2hQb2xpY3kiLCJ2YXJpYWJsZXMiLCJpbnB1dCIsInBvc3RfaWQiLCJjb25zb2xlIiwibG9nIiwiZGF0YSIsImZldGNoQ29tbWVudHNPblBvc3RJRCIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbW1lbnRCb3giLCJ3aWR0aCIsIk1hdGgiLCJyYW5kb20iLCJtYXJnaW5Cb3R0b20iLCJpdGVtIiwiY29tbWVudGF0b3JfbmFtZSIsImNvbW1lbnQiLCJtYXJnaW5Ub3AiLCJBcG9sbG9DbGllbnQiLCJ1cmkiLCJjYWNoZSIsIkluTWVtb3J5Q2FjaGUiLCJmZXRjaF9wb3N0c19xdWVyeSIsImdxbCIsIkhvbWUiLCJwb3N0cyIsIm1hcCIsIml0bSIsImlkeCIsImlkIiwiYm9keSIsImdldFN0YXRpY1Byb3BzIiwiZmV0Y2hQb3N0cyIsInByb3BzIl0s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RDtBQUVjRCxtRUFBZixFOzs7Ozs7Ozs7OztBQ3BDQSw4Qzs7Ozs7Ozs7Ozs7QUNBQSwyQzs7Ozs7Ozs7Ozs7QUNBQSxpQzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvaW5kZXguanNcIik7XG4iLCJpbXBvcnQgeyBFZGl0T3V0bGluZWQsIEhlYXJ0RmlsbGVkLCBNZXNzYWdlT3V0bGluZWQsIFBsdXNPdXRsaW5lZCwgU2V0dGluZ091dGxpbmVkIH0gZnJvbSAnQGFudC1kZXNpZ24vaWNvbnMnO1xyXG5pbXBvcnQgeyBBdmF0YXIsIENhcmQsIElucHV0LCBTa2VsZXRvbiwgTGlzdCwgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgY2xpZW50IH0gZnJvbSAnLi4vYXBvbGxvR3FsQ2xpZW50JztcclxuaW1wb3J0IHsgZmV0Y2hfY29tbWVudHNfcXVlcnkgfSBmcm9tICcuLi9ncWxRdWVyaWVzJztcclxuXHJcbmNvbnN0IHsgTWV0YSB9ID0gQ2FyZDtcclxuXHJcblxyXG5jb25zdCBQb3N0Q2FyZCA9ICh7IGNvbnRlbnQsIG5hbWUsIHBvc3RJRCB9KSA9PiB7XHJcblxyXG4gICAgY29uc3QgYXZhdGFyID0gPEF2YXRhciBzcmM9XCJodHRwczovL3pvcy5hbGlwYXlvYmplY3RzLmNvbS9ybXNwb3J0YWwvT0RUTGNqeEFmdnFieEhuVlhDWVgucG5nXCIgLz5cclxuXHJcbiAgICBjb25zdCBbc2hvdywgc2V0U2hvd10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgICBjb25zdCBbY29tbWVudHMsIHNldENvbW1lbnRzXSA9IHVzZVN0YXRlKFtdKVxyXG5cclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgZ2V0Q29tbWVudHMoKVxyXG4gICAgfSwgW3Bvc3RJRF0pXHJcblxyXG4gICAgY29uc3QgZ2V0Q29tbWVudHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgbGV0IHJlc3AgPSBhd2FpdCBjbGllbnQucXVlcnkoe1xyXG4gICAgICAgICAgICBxdWVyeTogZmV0Y2hfY29tbWVudHNfcXVlcnksIGZldGNoUG9saWN5OiAnbm8tY2FjaGUnLCB2YXJpYWJsZXM6IHtcclxuICAgICAgICAgICAgICAgIGlucHV0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdF9pZDogcG9zdElEXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZyhyZXNwPy5kYXRhPy5mZXRjaENvbW1lbnRzT25Qb3N0SUQpXHJcbiAgICAgICAgcmVzcD8uZGF0YT8uZmV0Y2hDb21tZW50c09uUG9zdElEID8gc2V0Q29tbWVudHMocmVzcD8uZGF0YT8uZmV0Y2hDb21tZW50c09uUG9zdElEKSA6IG1lc3NhZ2UuZXJyb3IoJ1NvbWV0aGluZyB3ZW50IHdyb25nIScpXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29tbWVudEJveCA9ICgpID0+IChcclxuICAgICAgICA8Q2FyZCBib3JkZXJlZD17ZmFsc2V9IHN0eWxlPXt7IHdpZHRoOiA1MDAgfX0+XHJcbiAgICAgICAgICAgIDxJbnB1dCBwbGFjZWhvbGRlcj1cIkJhc2ljIHVzYWdlXCIga2V5PXtNYXRoLnJhbmRvbSgpfSBzdWZmaXg9ezxQbHVzT3V0bGluZWQgLz59IHN0eWxlPXt7IG1hcmdpbkJvdHRvbTogMTUgfX0gLz5cclxuICAgICAgICAgICAgPExpc3RcclxuICAgICAgICAgICAgICAgIGl0ZW1MYXlvdXQ9XCJob3Jpem9udGFsXCJcclxuICAgICAgICAgICAgICAgIGRhdGFTb3VyY2U9e2NvbW1lbnRzfVxyXG4gICAgICAgICAgICAgICAgcmVuZGVySXRlbT17aXRlbSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPExpc3QuSXRlbS5NZXRhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdmF0YXI9ezxBdmF0YXIgc3JjPVwiaHR0cHM6Ly96b3MuYWxpcGF5b2JqZWN0cy5jb20vcm1zcG9ydGFsL09EVExjanhBZnZxYnhIblZYQ1lYLnBuZ1wiIC8+fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9ezxhIGhyZWY9XCJodHRwczovL2FudC5kZXNpZ25cIj57aXRlbS5jb21tZW50YXRvcl9uYW1lfTwvYT59XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbj17aXRlbS5jb21tZW50fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGlzdC5JdGVtPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICApXHJcblxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiA1MDAsIG1hcmdpblRvcDogMTYgfX1cclxuICAgICAgICAgICAgICAgIGFjdGlvbnM9e1tcclxuICAgICAgICAgICAgICAgICAgICA8U2V0dGluZ091dGxpbmVkIGtleT1cInNldHRpbmdcIiAvPiwgPEVkaXRPdXRsaW5lZCBrZXk9XCJlZGl0XCIgLz4sXHJcbiAgICAgICAgICAgICAgICAgICAgPEhlYXJ0RmlsbGVkIC8+LCA8TWVzc2FnZU91dGxpbmVkIG9uQ2xpY2s9eygpID0+IHNldFNob3coIXNob3cpfSAvPlxyXG4gICAgICAgICAgICAgICAgXX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPFNrZWxldG9uIGxvYWRpbmc9e2ZhbHNlfSBhdmF0YXIgYWN0aXZlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxNZXRhIGF2YXRhcj17YXZhdGFyfSB0aXRsZT17bmFtZX0gZGVzY3JpcHRpb249e2NvbnRlbnR9IC8+XHJcbiAgICAgICAgICAgICAgICA8L1NrZWxldG9uPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcblxyXG4gICAgICAgICAgICB7c2hvdyAmJiBjb21tZW50Qm94KCl9XHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQb3N0Q2FyZDsiLCJpbXBvcnQgeyBBcG9sbG9DbGllbnQsIEluTWVtb3J5Q2FjaGUgfSBmcm9tICdAYXBvbGxvL2NsaWVudCdcclxuXHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgQXBvbGxvQ2xpZW50KHtcclxuICAgIHVyaTogJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAwMS8nLFxyXG4gICAgY2FjaGU6IG5ldyBJbk1lbW9yeUNhY2hlKClcclxufSk7IiwiaW1wb3J0IHsgZ3FsIH0gZnJvbSAnQGFwb2xsby9jbGllbnQnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoX3Bvc3RzX3F1ZXJ5ID0gZ3FsYFxyXG5xdWVyeSBmZXRjaFBvc3RzKCRpbnB1dDpGZXRjaFBvc3RJbnB1dCkge1xyXG4gZmV0Y2hQb3N0cyhpbnB1dDogJGlucHV0KXsgIFxyXG4gICAgaWRcclxuICAgYm9keVxyXG4gICB1c2VyX2lkXHJcbiAgIG5hbWVcclxuICAgbGlrZXN7XHJcbiAgICAgbGlrZXJfbmFtZVxyXG4gICAgIGxpa2VyX2lkXHJcbiAgICAgbGlrZXJfZW1haWxcclxuICAgfVxyXG4gICB9XHJcbn1gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGZldGNoX2NvbW1lbnRzX3F1ZXJ5ID0gZ3FsYFxyXG5xdWVyeSBmZXRjaENvbW1lbnRzT25Qb3N0SUQoJGlucHV0OiBGZXRjaENvbW1lbnRJbnB1dCEpIHtcclxuICBmZXRjaENvbW1lbnRzT25Qb3N0SUQoaW5wdXQ6ICRpbnB1dCkgeyAgICBcclxuICAgIGNvbW1lbnRhdG9yX2lkXHJcbiAgICBjb21tZW50YXRvcl9uYW1lXHJcbiAgICBjb21tZW50YXRvcl9lbWFpbFxyXG4gICAgY29tbWVudFxyXG4gICAgaXNfZGVsZXRlZFxyXG4gIH1cclxufWBcclxuIiwiaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gJ2FudGQnO1xuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9hcG9sbG9HcWxDbGllbnQnO1xuaW1wb3J0IFBvc3RDYXJkIGZyb20gJy4uL0NvbXBvbmVudHMvUG9zdENhcmQnO1xuaW1wb3J0IHsgZmV0Y2hfcG9zdHNfcXVlcnkgfSBmcm9tICcuLi9ncWxRdWVyaWVzJztcblxuY29uc3QgSG9tZSA9ICh7IHBvc3RzIH0pID0+IHtcbiAgY29uc29sZS5sb2cocG9zdHMpXG5cbiAgcmV0dXJuIChcbiAgICBwb3N0cy5tYXAoKGl0bSwgaWR4KSA9PiA8UG9zdENhcmQga2V5PXtpdG0uaWR9IGNvbnRlbnQ9e2l0bS5ib2R5fSBuYW1lPXtpdG0ubmFtZX0gcG9zdElEPXtpdG0uaWR9IC8+KVxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XG5cbiAgY29uc29sZS5sb2coJ2NsbGVkIHNlcnZlciBzaWRlJylcbiAgbGV0IHBvc3RzID0gW11cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwID0gYXdhaXQgY2xpZW50LnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBmZXRjaF9wb3N0c19xdWVyeSwgZmV0Y2hQb2xpY3k6ICduby1jYWNoZScsIHZhcmlhYmxlczoge1xuICAgICAgICBpbnB1dDogbnVsbFxuICAgICAgfVxuICAgIH0pXG4gICAgY29uc29sZS5sb2cocmVzcClcbiAgICByZXNwPy5kYXRhPy5mZXRjaFBvc3RzID8gcG9zdHMgPSByZXNwPy5kYXRhPy5mZXRjaFBvc3RzIDogbnVsbFxuXG4gIH0gY2F0Y2ggKGVycm9yKSB7IGNvbnNvbGUubG9nKGVycm9yKTsgbWVzc2FnZS5lcnJvcignQ291bGQgbm90IGZldGNoIHBvc3RzJykgfVxuXG4gIHJldHVybiB7XG4gICAgcHJvcHM6IHtcbiAgICAgIHBvc3RzXG4gICAgfSxcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb21lOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhbnQtZGVzaWduL2ljb25zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhcG9sbG8vY2xpZW50XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFudGRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==