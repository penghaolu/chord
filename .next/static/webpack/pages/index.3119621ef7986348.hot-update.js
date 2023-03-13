"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Dropdown */ \"./src/components/Dropdown.js\");\n/* harmony import */ var _components_ListBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ListBox */ \"./src/components/ListBox.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PLAYLIST_ENDPOINT = \"https://api.spotify.com/v1/me/playlists\";\nvar __N_SSP = true;\nfunction Home(param) {\n    let { providers  } = param;\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [tracks, setTracks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [trackDetail, setTrackDetail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _session_user;\n        if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.accessToken) {\n            setToken(session.user.accessToken);\n        }\n    }, [\n        session\n    ]);\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n            lineNumber: 28,\n            columnNumber: 12\n        }, this);\n    }\n    const handleGetPlaylists = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(PLAYLIST_ENDPOINT, {\n            headers: {\n                Authorization: \"Bearer \" + token\n            }\n        }).then((playlistResponse)=>{\n            console.log(\"playlistResponse\", playlistResponse);\n            setPlaylist(playlistResponse.data.items);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    // const playlistChanged = val => {\n    //   console.log(val);\n    //   setPlaylist({\n    //     selectedPlaylistId: val,\n    //     listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI\n    //   });\n    // }\n    const listboxClicked = (val)=>{\n        console.log(\"listboxclicked\", val);\n        (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"https://api.spotify.com/v1/playlists/\".concat(val, \"/tracks\"), {\n            method: \"GET\",\n            headers: {\n                Authorization: \"Bearer \" + token\n            }\n        }).then((tracksResponse)=>{\n            setTracks(tracksResponse.data.items);\n            console.log(\"settrack\", tracksResponse.data.items);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: Object.values(providers).map((provider)=>{\n                    return status === \"unauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(),\n                        children: [\n                            \"Log in to \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 84,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                        children: [\n                            \"Log out of \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 81,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        onClick: handleGetPlaylists,\n                        type: \"primary\",\n                        style: {\n                            background: \"#1DB954\",\n                            margin: \"20px\"\n                        },\n                        children: \"Learn about your music taste\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 95,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        label: \"Playlist :\",\n                        items: playlist,\n                        clicked: listboxClicked\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 104,\n                        columnNumber: 9\n                    }, this),\n                    tracks === null || tracks === void 0 ? void 0 : tracks.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Details, {\n                            option: item.track\n                        }, idx, false, {\n                            fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                            lineNumber: 106,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 94,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"8+wEns+EQySWs+1HIX+hfu3TWu4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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eENtRCxTQUFTVixJQUFJOzt1QkFEZFUsU0FBU1YsSUFBSTs7Ozs0QkFHM0I7Z0JBQ0g7Ozs7OzswQkFFRiw4REFBQ2E7Z0JBQUtQLFdBQVdqRCxxRUFBVzs7a0NBQzFCLDhEQUFDSSx3Q0FBTUE7d0JBQ0xtRCxTQUFTN0I7d0JBQ1QrQixNQUFLO3dCQUNMQyxPQUFPOzRCQUFFQyxZQUFZOzRCQUFXQyxRQUFRO3dCQUFPO2tDQUVoRDs7Ozs7O2tDQUlELDhEQUFDcEQsMkRBQU9BO3dCQUFDcUQsT0FBTTt3QkFBYTNCLE9BQU9qQjt3QkFBVTZDLFNBQVN6Qjs7Ozs7O29CQUNyRGxCLG1CQUFBQSxvQkFBQUEsS0FBQUEsSUFBQUEsT0FBUWlDLEdBQUcsQ0FBQyxDQUFDVyxNQUFNQyxvQkFDbEIsOERBQUNDOzRCQUFRQyxRQUFRSCxLQUFLSSxLQUFLOzJCQUFTSDs7Ozs7Ozs7Ozs7OztBQVk5QyxDQUFDO0dBeEd1QnREOztRQUNZUCx1REFBVUE7OztLQUR0Qk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FzY2FkZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvRHJvcGRvd25cIjtcbmltcG9ydCBMaXN0Ym94IGZyb20gXCJAL2NvbXBvbmVudHMvTGlzdEJveFwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5jb25zdCBQTEFZTElTVF9FTkRQT0lOVCA9IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWxpc3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm92aWRlcnMgfSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxheWxpc3QsIHNldFBsYXlsaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RyYWNrcywgc2V0VHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RyYWNrRGV0YWlsLCBzZXRUcmFja0RldGFpbF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5hY2Nlc3NUb2tlbikge1xuICAgICAgc2V0VG9rZW4oc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uXSk7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlR2V0UGxheWxpc3RzID0gKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFBMQVlMSVNUX0VORFBPSU5ULCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChwbGF5bGlzdFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWxpc3RSZXNwb25zZVwiLCBwbGF5bGlzdFJlc3BvbnNlKTtcbiAgICAgICAgc2V0UGxheWxpc3QocGxheWxpc3RSZXNwb25zZS5kYXRhLml0ZW1zKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vIGNvbnN0IHBsYXlsaXN0Q2hhbmdlZCA9IHZhbCA9PiB7XG4gIC8vICAgY29uc29sZS5sb2codmFsKTtcbiAgLy8gICBzZXRQbGF5bGlzdCh7XG4gIC8vICAgICBzZWxlY3RlZFBsYXlsaXN0SWQ6IHZhbCxcbiAgLy8gICAgIGxpc3RPZlBsYXlsaXN0RnJvbUFQSTogcGxheWxpc3QubGlzdE9mUGxheWxpc3RGcm9tQVBJXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBjb25zdCBsaXN0Ym94Q2xpY2tlZCA9ICh2YWwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImxpc3Rib3hjbGlja2VkXCIsIHZhbCk7XG4gICAgYXhpb3MoYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3BsYXlsaXN0cy8ke3ZhbH0vdHJhY2tzYCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxuICAgICAgfSxcbiAgICB9KS50aGVuKCh0cmFja3NSZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VHJhY2tzKHRyYWNrc1Jlc3BvbnNlLmRhdGEuaXRlbXMpO1xuICAgICAgY29uc29sZS5sb2coXCJzZXR0cmFja1wiLCB0cmFja3NSZXNwb25zZS5kYXRhLml0ZW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgey8qIHtzZXNzaW9uPy51c2VyPy5hY2Nlc3NUb2tlbiAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgQWNjZXNzIFRva2VuOiB7c2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9ICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiID8gKFxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Byb3ZpZGVyLm5hbWV9IG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5cbiAgICAgICAgICAgICAgTG9nIGluIHRvIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtwcm92aWRlci5uYW1lfSBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlxuICAgICAgICAgICAgICBMb2cgb3V0IG9mIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlR2V0UGxheWxpc3RzfVxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMxREI5NTRcIiwgbWFyZ2luOiBcIjIwcHhcIiB9fVxuICAgICAgICAgIC8vIGhyZWY9XCIvc2VsZWN0LXBsYXlsaXN0XCJcbiAgICAgICAgPlxuICAgICAgICAgIExlYXJuIGFib3V0IHlvdXIgbXVzaWMgdGFzdGVcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPExpc3Rib3ggbGFiZWw9XCJQbGF5bGlzdCA6XCIgaXRlbXM9e3BsYXlsaXN0fSBjbGlja2VkPXtsaXN0Ym94Q2xpY2tlZH0gLz5cbiAgICAgICAge3RyYWNrcz8ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICA8RGV0YWlscyBvcHRpb249e2l0ZW0udHJhY2t9IGtleSA9IHtpZHh9Lz5cbiAgICAgICAgKSl9XG4gICAgICAgIHsvKiA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzFEQjk1NFwiIH19XG4gICAgICAgICAgaHJlZj1cIi9zZWxlY3QtZnJpZW5kc1wiXG4gICAgICAgID5cbiAgICAgICAgICBDb21wYXJlIHdpdGggeW91ciBmcmllbmRzXG4gICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvdmlkZXJzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkJ1dHRvbiIsIkNhc2NhZGVyIiwiYXhpb3MiLCJEcm9wZG93biIsIkxpc3Rib3giLCJQTEFZTElTVF9FTkRQT0lOVCIsIkhvbWUiLCJwcm92aWRlcnMiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInRva2VuIiwic2V0VG9rZW4iLCJwbGF5bGlzdCIsInNldFBsYXlsaXN0IiwidHJhY2tzIiwic2V0VHJhY2tzIiwidHJhY2tEZXRhaWwiLCJzZXRUcmFja0RldGFpbCIsInVzZXIiLCJhY2Nlc3NUb2tlbiIsImRpdiIsImhhbmRsZUdldFBsYXlsaXN0cyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInBsYXlsaXN0UmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJjYXRjaCIsImVycm9yIiwibGlzdGJveENsaWNrZWQiLCJ2YWwiLCJtZXRob2QiLCJ0cmFja3NSZXNwb25zZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIiwidHlwZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm1hcmdpbiIsImxhYmVsIiwiY2xpY2tlZCIsIml0ZW0iLCJpZHgiLCJEZXRhaWxzIiwib3B0aW9uIiwidHJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});