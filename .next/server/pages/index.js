/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _src_containers_List__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/containers/List */ \"./src/containers/List/index.tsx\");\n/* harmony import */ var _src_containers_Filters__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/containers/Filters */ \"./src/containers/Filters/index.tsx\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/Home.module.css */ \"./styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-query */ \"react-query\");\n/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_APIs_ListAPI__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/APIs/ListAPI */ \"./src/APIs/ListAPI.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\nvar _jsxFileName = \"/Users/kamilcieplicki/repos/trending-gh-projects/pages/index.tsx\";\n\n\n\n\n\n\n\n\n\nconst Home = () => {\n  const params = {};\n  const {\n    isSuccess,\n    data,\n    isLoading,\n    isError\n  } = (0,react_query__WEBPACK_IMPORTED_MODULE_3__.useQuery)([\"author\"], () => (0,_src_APIs_ListAPI__WEBPACK_IMPORTED_MODULE_4__.fetchList)(params));\n\n  const renderResult = () => {\n    if (isLoading) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"render-message\",\n        children: \"Loading...\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 19,\n        columnNumber: 14\n      }, undefined);\n    }\n\n    if (isError) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: \"render-message\",\n        children: \"Something went wrong\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 14\n      }, undefined);\n    }\n\n    if (isSuccess) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_containers_List__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        data: data\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 25,\n        columnNumber: 14\n      }, undefined);\n    }\n\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.Fragment, {}, void 0, false);\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n    className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().container),\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_0___default()), {\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"title\", {\n        children: \"Github Trends\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 33,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"meta\", {\n        name: \"description\",\n        content: \"Github trending repos created with NextJS framework\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 34,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"main\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().main),\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"h1\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n        children: [\"Trending repos on \", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n          href: \"https://github.com\",\n          children: \"Github\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 40,\n          columnNumber: 29\n        }, undefined)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 39,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"div\", {\n        className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().wrapper),\n        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(_src_containers_Filters__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, undefined), renderResult()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"footer\", {\n      className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_6___default().footer),\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"a\", {\n        href: \"https://cieplicki.dev\",\n        target: \"_blank\",\n        rel: \"noopener noreferrer\",\n        children: \"Created by Kamil Cieplicki\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 50,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBLE1BQU1NLElBQWMsR0FBRyxNQUFNO0FBRTNCLFFBQU1DLE1BQU0sR0FBRyxFQUFmO0FBRUEsUUFBTTtBQUFFQyxJQUFBQSxTQUFGO0FBQWFDLElBQUFBLElBQWI7QUFBbUJDLElBQUFBLFNBQW5CO0FBQThCQyxJQUFBQTtBQUE5QixNQUEwQ1AscURBQVEsQ0FDdEQsQ0FBQyxRQUFELENBRHNELEVBQzFDLE1BQU1DLDREQUFTLENBQUNFLE1BQUQsQ0FEMkIsQ0FBeEQ7O0FBSUEsUUFBTUssWUFBWSxHQUFHLE1BQU07QUFDekIsUUFBSUYsU0FBSixFQUFlO0FBQ2IsMEJBQU87QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0Q7O0FBQ0QsUUFBSUMsT0FBSixFQUFhO0FBQ1gsMEJBQU87QUFBSyxpQkFBUyxFQUFDLGdCQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUFQO0FBQ0Q7O0FBQ0QsUUFBSUgsU0FBSixFQUFlO0FBQ2IsMEJBQU8sOERBQUMsNERBQUQ7QUFBTSxZQUFJLEVBQUVDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFBUDtBQUNEOztBQUNELHdCQUFPLDZJQUFQO0FBQ0QsR0FYRDs7QUFhQSxzQkFDRTtBQUFLLGFBQVMsRUFBRU4sMEVBQWhCO0FBQUEsNEJBQ0UsOERBQUMsa0RBQUQ7QUFBQSw4QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQU0sWUFBSSxFQUFDLGFBQVg7QUFBeUIsZUFBTyxFQUFDO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRTtBQUFNLFdBQUcsRUFBQyxNQUFWO0FBQWlCLFlBQUksRUFBQztBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQU9FO0FBQU0sZUFBUyxFQUFFQSxxRUFBakI7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUVBLHNFQUFmO0FBQUEsc0RBQ29CO0FBQUcsY0FBSSxFQUFDLG9CQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFLRTtBQUFLLGlCQUFTLEVBQUVBLHdFQUFoQjtBQUFBLGdDQUNFLDhEQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsRUFFR1MsWUFBWSxFQUZmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFrQkU7QUFBUSxlQUFTLEVBQUVULHVFQUFuQjtBQUFBLDZCQUNFO0FBQ0UsWUFBSSxFQUFDLHVCQURQO0FBRUUsY0FBTSxFQUFDLFFBRlQ7QUFHRSxXQUFHLEVBQUMscUJBSE47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQThCRCxDQW5ERDs7QUFxREEsaUVBQWVHLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGluZy1naC1wcm9qZWN0cy8uL3BhZ2VzL2luZGV4LnRzeD8wN2ZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgTmV4dFBhZ2UgfSBmcm9tICduZXh0J1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IExpc3QgZnJvbSAnLi4vc3JjL2NvbnRhaW5lcnMvTGlzdCdcbmltcG9ydCBGaWx0ZXJzIGZyb20gJy4uL3NyYy9jb250YWluZXJzL0ZpbHRlcnMnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3MnXG5pbXBvcnQgeyB1c2VRdWVyeSB9IGZyb20gXCJyZWFjdC1xdWVyeVwiO1xuaW1wb3J0IHsgZmV0Y2hMaXN0IH0gZnJvbSAnLi4vc3JjL0FQSXMvTGlzdEFQSSdcblxuY29uc3QgSG9tZTogTmV4dFBhZ2UgPSAoKSA9PiB7XG5cbiAgY29uc3QgcGFyYW1zID0ge307XG5cbiAgY29uc3QgeyBpc1N1Y2Nlc3MsIGRhdGEsIGlzTG9hZGluZywgaXNFcnJvciB9ID0gdXNlUXVlcnkoXG4gICAgW1wiYXV0aG9yXCJdLCAoKSA9PiBmZXRjaExpc3QocGFyYW1zKVxuICApO1xuXG4gIGNvbnN0IHJlbmRlclJlc3VsdCA9ICgpID0+IHtcbiAgICBpZiAoaXNMb2FkaW5nKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyZW5kZXItbWVzc2FnZVwiPkxvYWRpbmcuLi48L2Rpdj47XG4gICAgfVxuICAgIGlmIChpc0Vycm9yKSB7XG4gICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9XCJyZW5kZXItbWVzc2FnZVwiPlNvbWV0aGluZyB3ZW50IHdyb25nPC9kaXY+O1xuICAgIH1cbiAgICBpZiAoaXNTdWNjZXNzKSB7XG4gICAgICByZXR1cm4gPExpc3QgZGF0YT17ZGF0YX0gLz47XG4gICAgfVxuICAgIHJldHVybiA8PjwvPjtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+R2l0aHViIFRyZW5kczwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHaXRodWIgdHJlbmRpbmcgcmVwb3MgY3JlYXRlZCB3aXRoIE5leHRKUyBmcmFtZXdvcmtcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGV9PlxuICAgICAgICAgIFRyZW5kaW5nIHJlcG9zIG9uIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb21cIj5HaXRodWI8L2E+XG4gICAgICAgIDwvaDE+XG5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy53cmFwcGVyfT5cbiAgICAgICAgICA8RmlsdGVycyAvPlxuICAgICAgICAgIHtyZW5kZXJSZXN1bHQoKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L21haW4+XG5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyfT5cbiAgICAgICAgPGFcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9jaWVwbGlja2kuZGV2XCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxuICAgICAgICA+XG4gICAgICAgICAgQ3JlYXRlZCBieSBLYW1pbCBDaWVwbGlja2lcbiAgICAgICAgPC9hPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl0sIm5hbWVzIjpbIkhlYWQiLCJMaXN0IiwiRmlsdGVycyIsInN0eWxlcyIsInVzZVF1ZXJ5IiwiZmV0Y2hMaXN0IiwiSG9tZSIsInBhcmFtcyIsImlzU3VjY2VzcyIsImRhdGEiLCJpc0xvYWRpbmciLCJpc0Vycm9yIiwicmVuZGVyUmVzdWx0IiwiY29udGFpbmVyIiwibWFpbiIsInRpdGxlIiwid3JhcHBlciIsImZvb3RlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "./src/APIs/ListAPI.ts":
/*!*****************************!*\
  !*** ./src/APIs/ListAPI.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchList\": () => (/* binding */ fetchList)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constants */ \"./src/constants/index.ts\");\n\nconst fetchList = async params => {\n  const data = await fetch(_constants__WEBPACK_IMPORTED_MODULE_0__.GET_REPOSITORY_LIST);\n  return data.json();\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvQVBJcy9MaXN0QVBJLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFPTyxNQUFNQyxTQUFTLEdBQUcsTUFBT0MsTUFBUCxJQUErQjtBQUN0RCxRQUFNQyxJQUFJLEdBQUcsTUFBTUMsS0FBSyxDQUFDSiwyREFBRCxDQUF4QjtBQUNBLFNBQU9HLElBQUksQ0FBQ0UsSUFBTCxFQUFQO0FBQ0QsQ0FITSIsInNvdXJjZXMiOlsid2VicGFjazovL3RyZW5kaW5nLWdoLXByb2plY3RzLy4vc3JjL0FQSXMvTGlzdEFQSS50cz9mN2UzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdFVF9SRVBPU0lUT1JZX0xJU1QgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCJcblxuaW50ZXJmYWNlIExpc3RQYXJhbXMge1xuICBsYW5ndWFnZT86IHN0cmluZztcbiAgc2luY2U/OiBcImRhaWx5XCIgfCBcIndlZWtseVwiIHwgXCJtb250aGx5XCJcbn1cblxuZXhwb3J0IGNvbnN0IGZldGNoTGlzdCA9IGFzeW5jIChwYXJhbXM6IExpc3RQYXJhbXMgKSA9PiB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChHRVRfUkVQT1NJVE9SWV9MSVNUKTtcbiAgcmV0dXJuIGRhdGEuanNvbigpO1xufSJdLCJuYW1lcyI6WyJHRVRfUkVQT1NJVE9SWV9MSVNUIiwiZmV0Y2hMaXN0IiwicGFyYW1zIiwiZGF0YSIsImZldGNoIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/APIs/ListAPI.ts\n");

/***/ }),

/***/ "./src/constants/index.ts":
/*!********************************!*\
  !*** ./src/constants/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"GET_REPOSITORY_LIST\": () => (/* binding */ GET_REPOSITORY_LIST)\n/* harmony export */ });\nconst GET_REPOSITORY_LIST = \"http://localhost:8000/repositories\";//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29uc3RhbnRzL2luZGV4LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBTyxNQUFNQSxtQkFBbUIsR0FBRyxvQ0FBNUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGluZy1naC1wcm9qZWN0cy8uL3NyYy9jb25zdGFudHMvaW5kZXgudHM/NjNmZSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgR0VUX1JFUE9TSVRPUllfTElTVCA9IFwiaHR0cDovL2xvY2FsaG9zdDo4MDAwL3JlcG9zaXRvcmllc1wiIl0sIm5hbWVzIjpbIkdFVF9SRVBPU0lUT1JZX0xJU1QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/constants/index.ts\n");

/***/ }),

/***/ "./src/containers/Filters/index.tsx":
/*!******************************************!*\
  !*** ./src/containers/Filters/index.tsx ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/kamilcieplicki/repos/trending-gh-projects/src/containers/Filters/index.tsx\";\n\n\n\nconst Filters = () => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n      children: \"filters\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Filters);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9GaWx0ZXJzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBTUEsTUFBTUEsT0FBcUMsR0FBRyxNQUFNO0FBQ2xELHNCQUNFO0FBQUEsMkJBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBTkQ7O0FBUUEsaUVBQWVBLE9BQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGluZy1naC1wcm9qZWN0cy8uL3NyYy9jb250YWluZXJzL0ZpbHRlcnMvaW5kZXgudHN4PzQyYjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnVuY3Rpb25Db21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIExpc3RQcm9wcyB7XG4gIFxufVxuIFxuY29uc3QgRmlsdGVyczogRnVuY3Rpb25Db21wb25lbnQ8TGlzdFByb3BzPiA9ICgpID0+IHtcbiAgcmV0dXJuICggXG4gICAgPD5cbiAgICAgIDxkaXY+ZmlsdGVyczwvZGl2PlxuICAgIDwvPlxuICAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnM7Il0sIm5hbWVzIjpbIkZpbHRlcnMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/Filters/index.tsx\n");

/***/ }),

/***/ "./src/containers/List/index.tsx":
/*!***************************************!*\
  !*** ./src/containers/List/index.tsx ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"/Users/kamilcieplicki/repos/trending-gh-projects/src/containers/List/index.tsx\";\n\n\nconst List = props => {\n  const {\n    data\n  } = props;\n  console.log(data);\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n    children: data.map(item => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n      children: item.author\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 45\n    }, undefined))\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9MaXN0L2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFNQSxNQUFNQSxJQUFtQixHQUFJQyxLQUFELElBQXNCO0FBRWhELFFBQU07QUFBRUMsSUFBQUE7QUFBRixNQUFXRCxLQUFqQjtBQUNBRSxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsSUFBWjtBQUVBLHNCQUNFO0FBQUEsY0FDR0EsSUFBSSxDQUFDRyxHQUFMLENBQVVDLElBQUQsaUJBQTRCO0FBQUEsZ0JBQUtBLElBQUksQ0FBQ0M7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUFyQztBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQUtELENBVkQ7O0FBWUEsaUVBQWVQLElBQWYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90cmVuZGluZy1naC1wcm9qZWN0cy8uL3NyYy9jb250YWluZXJzL0xpc3QvaW5kZXgudHN4PzY0ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRkMgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIExpc3RQcm9wcyB7XG4gIHJlYWRvbmx5IGRhdGE6IFtdXG59XG4gXG5jb25zdCBMaXN0OiBGQzxMaXN0UHJvcHM+ID0gKHByb3BzOiBMaXN0UHJvcHMpID0+IHtcblxuICBjb25zdCB7IGRhdGEgfSA9IHByb3BzO1xuICBjb25zb2xlLmxvZyhkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDx1bD5cbiAgICAgIHtkYXRhLm1hcCgoaXRlbToge2F1dGhvcjogc3RyaW5nfSkgPT4gPGxpPntpdGVtLmF1dGhvcn08L2xpPil9XG4gICAgPC91bD5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0OyJdLCJuYW1lcyI6WyJMaXN0IiwicHJvcHMiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsIm1hcCIsIml0ZW0iLCJhdXRob3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/containers/List/index.tsx\n");

/***/ }),

/***/ "./styles/Home.module.css":
/*!********************************!*\
  !*** ./styles/Home.module.css ***!
  \********************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"container\": \"Home_container__bCOhY\",\n\t\"main\": \"Home_main__nLjiQ\",\n\t\"wrapper\": \"Home_wrapper__kA9A_\",\n\t\"footer\": \"Home_footer____T7K\",\n\t\"title\": \"Home_title__T09hD\",\n\t\"description\": \"Home_description__41Owk\",\n\t\"code\": \"Home_code__suPER\",\n\t\"grid\": \"Home_grid__GxQ85\",\n\t\"card\": \"Home_card___LpL1\",\n\t\"logo\": \"Home_logo__27_tb\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzLmpzIiwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdHJlbmRpbmctZ2gtcHJvamVjdHMvLi9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzPzcxMjciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY29udGFpbmVyXCI6IFwiSG9tZV9jb250YWluZXJfX2JDT2hZXCIsXG5cdFwibWFpblwiOiBcIkhvbWVfbWFpbl9fbkxqaVFcIixcblx0XCJ3cmFwcGVyXCI6IFwiSG9tZV93cmFwcGVyX19rQTlBX1wiLFxuXHRcImZvb3RlclwiOiBcIkhvbWVfZm9vdGVyX19fX1Q3S1wiLFxuXHRcInRpdGxlXCI6IFwiSG9tZV90aXRsZV9fVDA5aERcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIkhvbWVfZGVzY3JpcHRpb25fXzQxT3drXCIsXG5cdFwiY29kZVwiOiBcIkhvbWVfY29kZV9fc3VQRVJcIixcblx0XCJncmlkXCI6IFwiSG9tZV9ncmlkX19HeFE4NVwiLFxuXHRcImNhcmRcIjogXCJIb21lX2NhcmRfX19McEwxXCIsXG5cdFwibG9nb1wiOiBcIkhvbWVfbG9nb19fMjdfdGJcIlxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./styles/Home.module.css\n");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ "react-query":
/*!******************************!*\
  !*** external "react-query" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-query");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();