/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/containers/Filters/index.tsx":
/*!******************************************!*\
  !*** ./src/containers/Filters/index.tsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Users_kamilcieplicki_repos_trending_gh_projects_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/next/dist/compiled/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ \"./src/constants/index.ts\");\n/* harmony import */ var _components_RadioButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/RadioButton */ \"./src/containers/components/RadioButton.tsx\");\n/* harmony import */ var _components_RadioButton__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_components_RadioButton__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _redux_slices_filters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../redux/slices/filters */ \"./src/redux/slices/filters.ts\");\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../redux/store */ \"./src/redux/store.ts\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__);\n\n\nvar _jsxFileName = \"/Users/kamilcieplicki/repos/trending-gh-projects/src/containers/Filters/index.tsx\",\n    _templateObject,\n    _templateObject2,\n    _templateObject3,\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n // components\n\n //redux\n\n\n // styled components\n\n\nvar FiltersWrapper = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject || (_templateObject = (0,_Users_kamilcieplicki_repos_trending_gh_projects_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 100%;\\n\"])));\n_c = FiltersWrapper;\nvar RadioGroup = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].div(_templateObject2 || (_templateObject2 = (0,_Users_kamilcieplicki_repos_trending_gh_projects_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"])));\n_c2 = RadioGroup;\nvar Select = styled_components__WEBPACK_IMPORTED_MODULE_6__[\"default\"].select(_templateObject3 || (_templateObject3 = (0,_Users_kamilcieplicki_repos_trending_gh_projects_node_modules_next_dist_compiled_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\"])));\n_c3 = Select;\n\nvar FiltersComponent = function FiltersComponent(_ref) {\n  _s();\n\n  var selectedTime = _ref.selectedTime,\n      selectedLang = _ref.selectedLang,\n      languagesList = _ref.languagesList;\n  var dispatch = (0,_redux_store__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();\n\n  var selectPeriod = function selectPeriod(event, period) {\n    event.preventDefault();\n    dispatch((0,_redux_slices_filters__WEBPACK_IMPORTED_MODULE_3__.selectTime)(period));\n  };\n\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(FiltersWrapper, {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(RadioGroup, {\n      children: _constants__WEBPACK_IMPORTED_MODULE_1__.AVAILABLE_PERIODS.map(function (period, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)((_components_RadioButton__WEBPACK_IMPORTED_MODULE_2___default()), {\n          label: period,\n          value: period,\n          checked: period === selectedTime,\n          handleChange: function handleChange(e) {\n            return selectPeriod(e, period);\n          }\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 34,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 32,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(Select, {\n      children: languagesList.map(function (_ref2, index) {\n        var name = _ref2.name,\n            urlParam = _ref2.urlParam;\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_5__.jsxDEV)(\"option\", {\n          value: urlParam,\n          children: name\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 44,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 31,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(FiltersComponent, \"rgTLoBID190wEKCp9+G8W6F7A5M=\", false, function () {\n  return [_redux_store__WEBPACK_IMPORTED_MODULE_4__.useDispatch];\n});\n\n_c4 = FiltersComponent;\n/* harmony default export */ __webpack_exports__[\"default\"] = (FiltersComponent);\n\nvar _c, _c2, _c3, _c4;\n\n$RefreshReg$(_c, \"FiltersWrapper\");\n$RefreshReg$(_c2, \"RadioGroup\");\n$RefreshReg$(_c3, \"Select\");\n$RefreshReg$(_c4, \"FiltersComponent\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGFpbmVycy9GaWx0ZXJzL2luZGV4LnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7Q0FHQTs7Q0FFQTs7QUFDQTtDQUdBOzs7QUFDQSxJQUFNSyxjQUFjLEdBQUdMLDZEQUFILG1UQUFwQjtLQUFNSztBQU1OLElBQU1FLFVBQVUsR0FBR1AsNkRBQUgsNk5BQWhCO01BQU1PO0FBQ04sSUFBTUMsTUFBTSxHQUFHUixnRUFBSCw2TkFBWjtNQUFNUTs7QUFFTixJQUFNRSxnQkFBNkIsR0FBRyxTQUFoQ0EsZ0JBQWdDLE9BQTBEO0FBQUE7O0FBQUEsTUFBeERDLFlBQXdELFFBQXhEQSxZQUF3RDtBQUFBLE1BQTFDQyxZQUEwQyxRQUExQ0EsWUFBMEM7QUFBQSxNQUE1QkMsYUFBNEIsUUFBNUJBLGFBQTRCO0FBRTlGLE1BQU1DLFFBQVEsR0FBR1YseURBQVcsRUFBNUI7O0FBRUEsTUFBTVcsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsS0FBRCxFQUF1Q0MsTUFBdkMsRUFBMkU7QUFDOUZELElBQUFBLEtBQUssQ0FBQ0UsY0FBTjtBQUNBSixJQUFBQSxRQUFRLENBQUNYLGlFQUFVLENBQUNjLE1BQUQsQ0FBWCxDQUFSO0FBQ0EsR0FIRjs7QUFLQSxzQkFDRSw4REFBQyxjQUFEO0FBQUEsNEJBQ0UsOERBQUMsVUFBRDtBQUFBLGdCQUNHaEIsNkRBQUEsQ0FBc0IsVUFBQ2dCLE1BQUQsRUFBY0csS0FBZDtBQUFBLDRCQUNyQiw4REFBQyxnRUFBRDtBQUVFLGVBQUssRUFBRUgsTUFGVDtBQUdFLGVBQUssRUFBRUEsTUFIVDtBQUlFLGlCQUFPLEVBQUVBLE1BQU0sS0FBS04sWUFKdEI7QUFLRSxzQkFBWSxFQUFFLHNCQUFDVSxDQUFEO0FBQUEsbUJBQXNDTixZQUFZLENBQUNNLENBQUQsRUFBSUosTUFBSixDQUFsRDtBQUFBO0FBTGhCLFdBQ09HLEtBRFA7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEcUI7QUFBQSxPQUF0QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQVdFLDhEQUFDLE1BQUQ7QUFBQSxnQkFDR1AsYUFBYSxDQUFDTSxHQUFkLENBQWtCLGlCQUFtQ0MsS0FBbkM7QUFBQSxZQUFHRSxJQUFILFNBQUdBLElBQUg7QUFBQSxZQUFTQyxRQUFULFNBQVNBLFFBQVQ7QUFBQSw0QkFDakI7QUFBb0IsZUFBSyxFQUFFQSxRQUEzQjtBQUFBLG9CQUFzQ0Q7QUFBdEMsV0FBYUYsS0FBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURpQjtBQUFBLE9BQWxCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBNUJEOztHQUFNVjtVQUVhTjs7O01BRmJNO0FBOEJOLCtEQUFlQSxnQkFBZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29udGFpbmVycy9GaWx0ZXJzL2luZGV4LnRzeD80MmI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENoYW5nZUV2ZW50LCBGQyB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZpbHRlcnMgfSBmcm9tICcuLi8uLi9pbnRlcmZhY2VzJztcbmltcG9ydCB7IEFWQUlMQUJMRV9QRVJJT0RTIH0gZnJvbSBcIi4uLy4uL2NvbnN0YW50c1wiO1xuLy8gY29tcG9uZW50c1xuaW1wb3J0IFJhZGlvQnV0dG9uQ29tcG9uZW50IGZyb20gXCIuLi9jb21wb25lbnRzL1JhZGlvQnV0dG9uXCI7XG4vL3JlZHV4XG5pbXBvcnQgeyBMYW5ndWFnZUl0ZW0sIHNlbGVjdFRpbWUgfSBmcm9tIFwiLi4vLi4vcmVkdXgvc2xpY2VzL2ZpbHRlcnNcIjtcbmltcG9ydCB7IHVzZURpc3BhdGNoIH0gZnJvbSBcIi4uLy4uL3JlZHV4L3N0b3JlXCI7XG5cbi8vIHN0eWxlZCBjb21wb25lbnRzXG5jb25zdCBGaWx0ZXJzV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5jb25zdCBSYWRpb0dyb3VwID0gc3R5bGVkLmRpdmBgO1xuY29uc3QgU2VsZWN0ID0gc3R5bGVkLnNlbGVjdGBgO1xuXG5jb25zdCBGaWx0ZXJzQ29tcG9uZW50OiBGQzxGaWx0ZXJzPiA9ICh7c2VsZWN0ZWRUaW1lLCBzZWxlY3RlZExhbmcsIGxhbmd1YWdlc0xpc3R9OiBGaWx0ZXJzKSA9PiB7XG4gIFxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XG5cbiAgY29uc3Qgc2VsZWN0UGVyaW9kID0gKGV2ZW50OiBDaGFuZ2VFdmVudDxIVE1MSW5wdXRFbGVtZW50PiwgcGVyaW9kOiBGaWx0ZXJzWydzZWxlY3RlZFRpbWUnXSkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZGlzcGF0Y2goc2VsZWN0VGltZShwZXJpb2QpXG4gICl9O1xuXG4gIHJldHVybiAoXG4gICAgPEZpbHRlcnNXcmFwcGVyPlxuICAgICAgPFJhZGlvR3JvdXA+XG4gICAgICAgIHtBVkFJTEFCTEVfUEVSSU9EUy5tYXAoKHBlcmlvZDogYW55LCBpbmRleDogbnVtYmVyKSA9PlxuICAgICAgICAgIDxSYWRpb0J1dHRvbkNvbXBvbmVudCBcbiAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICBsYWJlbD17cGVyaW9kfSBcbiAgICAgICAgICAgIHZhbHVlPXtwZXJpb2R9IFxuICAgICAgICAgICAgY2hlY2tlZD17cGVyaW9kID09PSBzZWxlY3RlZFRpbWV9IFxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlPXsoZTogQ2hhbmdlRXZlbnQ8SFRNTElucHV0RWxlbWVudD4pID0+IHNlbGVjdFBlcmlvZChlLCBwZXJpb2QpfSAvPlxuICAgICAgICApfVxuICAgICAgPC9SYWRpb0dyb3VwPlxuICAgICAgPFNlbGVjdD5cbiAgICAgICAge2xhbmd1YWdlc0xpc3QubWFwKCh7IG5hbWUsIHVybFBhcmFtIH06IExhbmd1YWdlSXRlbSwgaW5kZXgpID0+IChcbiAgICAgICAgICA8b3B0aW9uIGtleT17aW5kZXh9IHZhbHVlPXt1cmxQYXJhbX0+e25hbWV9PC9vcHRpb24+XG4gICAgICAgICkpfVxuICAgICAgPC9TZWxlY3Q+XG4gICAgPC9GaWx0ZXJzV3JhcHBlcj5cbiAgKTtcbn1cbiBcbmV4cG9ydCBkZWZhdWx0IEZpbHRlcnNDb21wb25lbnQ7Il0sIm5hbWVzIjpbInN0eWxlZCIsIkFWQUlMQUJMRV9QRVJJT0RTIiwiUmFkaW9CdXR0b25Db21wb25lbnQiLCJzZWxlY3RUaW1lIiwidXNlRGlzcGF0Y2giLCJGaWx0ZXJzV3JhcHBlciIsImRpdiIsIlJhZGlvR3JvdXAiLCJTZWxlY3QiLCJzZWxlY3QiLCJGaWx0ZXJzQ29tcG9uZW50Iiwic2VsZWN0ZWRUaW1lIiwic2VsZWN0ZWRMYW5nIiwibGFuZ3VhZ2VzTGlzdCIsImRpc3BhdGNoIiwic2VsZWN0UGVyaW9kIiwiZXZlbnQiLCJwZXJpb2QiLCJwcmV2ZW50RGVmYXVsdCIsIm1hcCIsImluZGV4IiwiZSIsIm5hbWUiLCJ1cmxQYXJhbSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/containers/Filters/index.tsx\n");

/***/ }),

/***/ "./src/containers/components/RadioButton.tsx":
/*!***************************************************!*\
  !*** ./src/containers/components/RadioButton.tsx ***!
  \***************************************************/
/***/ (function(module) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
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
                // @ts-ignore importMeta is replaced in the loader
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
    })();


/***/ })

});