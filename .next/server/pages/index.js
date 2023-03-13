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

/***/ "./src/styles/Home.module.css":
/*!************************************!*\
  !*** ./src/styles/Home.module.css ***!
  \************************************/
/***/ ((module) => {

eval("// Exports\nmodule.exports = {\n\t\"main\": \"Home_main__EtNt2\",\n\t\"description\": \"Home_description__Qwq1f\",\n\t\"code\": \"Home_code__aGV0U\",\n\t\"grid\": \"Home_grid__c_g6N\",\n\t\"card\": \"Home_card__7oz7W\",\n\t\"center\": \"Home_center__V0nxp\",\n\t\"logo\": \"Home_logo__80mSr\",\n\t\"thirteen\": \"Home_thirteen__ocdUI\",\n\t\"rotate\": \"Home_rotate__99GkW\",\n\t\"content\": \"Home_content___fOQz\",\n\t\"vercelLogo\": \"Home_vercelLogo__lhIxO\"\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc3R5bGVzL0hvbWUubW9kdWxlLmNzcy5qcyIsIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3BvdGlmeS1uZXR3b3JrLy4vc3JjL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3M/NThkZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IHtcblx0XCJtYWluXCI6IFwiSG9tZV9tYWluX19FdE50MlwiLFxuXHRcImRlc2NyaXB0aW9uXCI6IFwiSG9tZV9kZXNjcmlwdGlvbl9fUXdxMWZcIixcblx0XCJjb2RlXCI6IFwiSG9tZV9jb2RlX19hR1YwVVwiLFxuXHRcImdyaWRcIjogXCJIb21lX2dyaWRfX2NfZzZOXCIsXG5cdFwiY2FyZFwiOiBcIkhvbWVfY2FyZF9fN296N1dcIixcblx0XCJjZW50ZXJcIjogXCJIb21lX2NlbnRlcl9fVjBueHBcIixcblx0XCJsb2dvXCI6IFwiSG9tZV9sb2dvX184MG1TclwiLFxuXHRcInRoaXJ0ZWVuXCI6IFwiSG9tZV90aGlydGVlbl9fb2NkVUlcIixcblx0XCJyb3RhdGVcIjogXCJIb21lX3JvdGF0ZV9fOTlHa1dcIixcblx0XCJjb250ZW50XCI6IFwiSG9tZV9jb250ZW50X19fZk9RelwiLFxuXHRcInZlcmNlbExvZ29cIjogXCJIb21lX3ZlcmNlbExvZ29fX2xoSXhPXCJcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/styles/Home.module.css\n");

/***/ }),

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\n\n\nfunction Home({ providers  }) {\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.useSession)();\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n            lineNumber: 12,\n            columnNumber: 12\n        }, this);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 18,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 20,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 21,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 17,\n                columnNumber: 7\n            }, this),\n            session?.user?.accessToken && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: [\n                    \"Access Token: \",\n                    session.user.accessToken\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 24,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n                children: Object.values(providers).map((provider)=>{\n                    return status === \"unauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signIn)(),\n                        children: [\n                            \"Log in to \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 29,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.signOut)(),\n                        children: [\n                            \"Log out of \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 33,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/penghaolu/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 26,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\nasync function getServerSideProps() {\n    const providers = await (0,next_auth_react__WEBPACK_IMPORTED_MODULE_2__.getProviders)();\n    return {\n        props: {\n            providers\n        }\n    };\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFLTUE7QUFMdUI7QUFFaUI7QUFDOEI7QUFJN0QsU0FBU08sS0FBSyxFQUFFQyxVQUFTLEVBQUUsRUFBRTtJQUMxQyxNQUFNLEVBQUVDLE1BQU1DLFFBQU8sRUFBRUMsT0FBTSxFQUFFLEdBQUdMLDJEQUFVQTtJQUU1QyxJQUFJSyxXQUFXLFdBQVc7UUFDeEIscUJBQU8sOERBQUNDO3NCQUFJOzs7Ozs7SUFDZCxDQUFDO0lBRUQscUJBQ0U7OzBCQUNFLDhEQUFDWCxrREFBSUE7O2tDQUNILDhEQUFDWTtrQ0FBTTs7Ozs7O2tDQUNQLDhEQUFDQzt3QkFBS0MsTUFBSzt3QkFBY0MsU0FBUTs7Ozs7O2tDQUNqQyw4REFBQ0Y7d0JBQUtDLE1BQUs7d0JBQVdDLFNBQVE7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFLQyxLQUFJO3dCQUFPQyxNQUFLOzs7Ozs7Ozs7Ozs7WUFFdkJULFNBQVNVLE1BQU1DLDZCQUNkLDhEQUFDVDs7b0JBQUk7b0JBQWVGLFFBQVFVLElBQUksQ0FBQ0MsV0FBVzs7Ozs7OzswQkFFOUMsOERBQUNDO2dCQUFLQyxXQUFXckIscUVBQVc7MEJBQ3pCc0IsT0FBT0MsTUFBTSxDQUFDakIsV0FBV2tCLEdBQUcsQ0FBQyxDQUFDQyxXQUFhO29CQUMxQyxPQUFPaEIsV0FBVyxrQ0FDaEIsOERBQUNpQjt3QkFBMkJDLFNBQVMsSUFBTXpCLHVEQUFNQTs7NEJBQUk7NEJBQ3hDdUIsU0FBU1osSUFBSTs7dUJBRGJZLFNBQVNaLElBQUk7Ozs7NkNBSTFCLDhEQUFDYTt3QkFBMkJDLFNBQVMsSUFBTXhCLHdEQUFPQTs7NEJBQUk7NEJBQ3hDc0IsU0FBU1osSUFBSTs7dUJBRGRZLFNBQVNaLElBQUk7Ozs7NEJBRzNCO2dCQUNIOzs7Ozs7OztBQUlSLENBQUM7QUFFTSxlQUFlZSxxQkFBcUI7SUFDekMsTUFBTXRCLFlBQVksTUFBTUwsNkRBQVlBO0lBRXBDLE9BQU87UUFDTDRCLE9BQU87WUFDTHZCO1FBQ0Y7SUFDRjtBQUNGLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcG90aWZ5LW5ldHdvcmsvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm92aWRlcnMgfSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuXG4gIGlmIChzdGF0dXMgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7c2Vzc2lvbj8udXNlcj8uYWNjZXNzVG9rZW4gJiYgKFxuICAgICAgICA8ZGl2PkFjY2VzcyBUb2tlbjoge3Nlc3Npb24udXNlci5hY2Nlc3NUb2tlbn08L2Rpdj5cbiAgICAgICl9XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAge09iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIiA/IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtwcm92aWRlci5uYW1lfSBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+XG4gICAgICAgICAgICAgIExvZyBpbiB0byB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17cHJvdmlkZXIubmFtZX0gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5cbiAgICAgICAgICAgICAgTG9nIG91dCBvZiB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm92aWRlcnMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJzdHlsZXMiLCJnZXRQcm92aWRlcnMiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkhvbWUiLCJwcm92aWRlcnMiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsImRpdiIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJ1c2VyIiwiYWNjZXNzVG9rZW4iLCJtYWluIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwicHJvcHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n");

/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

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
var __webpack_exports__ = (__webpack_exec__("./src/pages/index.js"));
module.exports = __webpack_exports__;

})();