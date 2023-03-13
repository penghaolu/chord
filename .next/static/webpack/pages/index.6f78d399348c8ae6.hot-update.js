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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Dropdown */ \"./src/components/Dropdown.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ListBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ListBox */ \"./src/components/ListBox.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PLAYLIST_ENDPOINT = \"https://api.spotify.com/v1/me/playlists\";\nvar __N_SSP = true;\nfunction Home(param) {\n    let { providers  } = param;\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [playlistId, setPlaylistId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [tracks, setTracks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [trackDetail, setTrackDetail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _session_user;\n        if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.accessToken) {\n            setToken(session.user.accessToken);\n        }\n    }, [\n        session\n    ]);\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    const handleGetPlaylists = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(PLAYLIST_ENDPOINT, {\n            headers: {\n                Authorization: \"Bearer \" + token\n            }\n        }).then((playlistResponse)=>{\n            console.log(\"playlistResponse\", playlistResponse);\n            setPlaylist(playlistResponse.data.items);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    // const playlistChanged = val => {\n    //   console.log(val);\n    //   setPlaylist({\n    //     selectedPlaylistId: val,\n    //     listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI\n    //   });\n    // }\n    const listboxClicked = (val)=>{\n        (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"https://api.spotify.com/v1/playlists/\".concat(val, \"/tracks?limit=10\"), {\n            method: \"GET\",\n            headers: {\n                \"Authorization\": \"Bearer \" + token\n            }\n        }).then((tracksResponse)=>{\n            setTracks({\n                selectedTrack: tracks.selectedTrack,\n                listOfTracksFromAPI: tracksResponse.data.items\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 73,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: Object.values(providers).map((provider)=>{\n                    return status === \"unauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(),\n                        children: [\n                            \"Log in to \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 87,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                        children: [\n                            \"Log out of \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 91,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 84,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        onClick: handleGetPlaylists,\n                        type: \"primary\",\n                        style: {\n                            background: \"#1DB954\",\n                            margin: \"20px\"\n                        },\n                        children: \"Learn about your music taste\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        label: \"Playlist :\",\n                        items: playlist,\n                        clicked: listboxClicked\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 107,\n                        columnNumber: 9\n                    }, this),\n                    trackDetail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"YAY\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"D5XKSDM/kh1L9ecfDFL+MBNh+L8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LHdEQUFPQTs7NEJBQUk7NEJBQ3hDdUQsU0FBU1YsSUFBSTs7dUJBRGRVLFNBQVNWLElBQUk7Ozs7NEJBRzNCO2dCQUNIOzs7Ozs7MEJBRUYsOERBQUNhO2dCQUFLUCxXQUFXckQscUVBQVc7O2tDQUMxQiw4REFBQ0ksd0NBQU1BO3dCQUNMdUQsU0FBUy9CO3dCQUNUaUMsTUFBSzt3QkFDTEMsT0FBTzs0QkFBRUMsWUFBWTs0QkFBV0MsUUFBUTt3QkFBTztrQ0FFaEQ7Ozs7OztrQ0FJRCw4REFBQ3hELDJEQUFPQTt3QkFBQ3lELE9BQU07d0JBQWE3QixPQUFPbkI7d0JBQVVpRCxTQUFTM0I7Ozs7OztvQkFDckRoQiw2QkFBZSw4REFBQzRDO2tDQUFFOzs7Ozs7Ozs7Ozs7OztBQVczQixDQUFDO0dBekd1QnpEOztRQUNZUCx1REFBVUE7OztLQUR0Qk8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL2luZGV4LmpzPzQwODAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgSW50ZXIgfSBmcm9tIFwibmV4dC9mb250L2dvb2dsZVwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvSG9tZS5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRQcm92aWRlcnMsIHNpZ25Jbiwgc2lnbk91dCwgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IEJ1dHRvbiwgQ2FzY2FkZXIgfSBmcm9tIFwiYW50ZFwiO1xuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuaW1wb3J0IERyb3Bkb3duIGZyb20gXCJAL2NvbXBvbmVudHMvRHJvcGRvd25cIjtcbmltcG9ydCBMaXN0Ym94IGZyb20gXCJAL2NvbXBvbmVudHMvTGlzdEJveFwiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5jb25zdCBQTEFZTElTVF9FTkRQT0lOVCA9IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWxpc3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm92aWRlcnMgfSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxheWxpc3QsIHNldFBsYXlsaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3BsYXlsaXN0SWQsIHNldFBsYXlsaXN0SWRdID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFt0cmFja3MsIHNldFRyYWNrc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFt0cmFja0RldGFpbCwgc2V0VHJhY2tEZXRhaWxdID0gdXNlU3RhdGUobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8uYWNjZXNzVG9rZW4pIHtcbiAgICAgIHNldFRva2VuKHNlc3Npb24udXNlci5hY2Nlc3NUb2tlbik7XG4gICAgfVxuICB9LCBbc2Vzc2lvbl0pO1xuXG4gIGlmIChzdGF0dXMgPT09IFwibG9hZGluZ1wiKSB7XG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZUdldFBsYXlsaXN0cyA9ICgpID0+IHtcbiAgICBheGlvc1xuICAgICAgLmdldChQTEFZTElTVF9FTkRQT0lOVCwge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgQXV0aG9yaXphdGlvbjogXCJCZWFyZXIgXCIgKyB0b2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pXG4gICAgICAudGhlbigocGxheWxpc3RSZXNwb25zZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhcInBsYXlsaXN0UmVzcG9uc2VcIiwgcGxheWxpc3RSZXNwb25zZSlcbiAgICAgICAgc2V0UGxheWxpc3QocGxheWxpc3RSZXNwb25zZS5kYXRhLml0ZW1zKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgfSk7XG4gIH07XG4gIFxuICAvLyBjb25zdCBwbGF5bGlzdENoYW5nZWQgPSB2YWwgPT4ge1xuICAvLyAgIGNvbnNvbGUubG9nKHZhbCk7XG4gIC8vICAgc2V0UGxheWxpc3Qoe1xuICAvLyAgICAgc2VsZWN0ZWRQbGF5bGlzdElkOiB2YWwsXG4gIC8vICAgICBsaXN0T2ZQbGF5bGlzdEZyb21BUEk6IHBsYXlsaXN0Lmxpc3RPZlBsYXlsaXN0RnJvbUFQSVxuICAvLyAgIH0pO1xuICAvLyB9XG5cbiAgY29uc3QgbGlzdGJveENsaWNrZWQgPSB2YWwgPT4ge1xuICAgIGF4aW9zKGBodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9wbGF5bGlzdHMvJHt2YWx9L3RyYWNrcz9saW1pdD0xMGAsIHtcbiAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICBoZWFkZXJzOiB7XG4gICAgICAgICdBdXRob3JpemF0aW9uJyA6ICdCZWFyZXIgJyArIHRva2VuXG4gICAgICB9XG4gICAgfSlcbiAgICAudGhlbih0cmFja3NSZXNwb25zZSA9PiB7XG4gICAgICBzZXRUcmFja3Moe1xuICAgICAgICBzZWxlY3RlZFRyYWNrOiB0cmFja3Muc2VsZWN0ZWRUcmFjayxcbiAgICAgICAgbGlzdE9mVHJhY2tzRnJvbUFQSTogdHJhY2tzUmVzcG9uc2UuZGF0YS5pdGVtc1xuICAgICAgfSlcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Q3JlYXRlIE5leHQgQXBwPC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD1cIkdlbmVyYXRlZCBieSBjcmVhdGUgbmV4dCBhcHBcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICB7Lyoge3Nlc3Npb24/LnVzZXI/LmFjY2Vzc1Rva2VuICYmIChcbiAgICAgICAgPGRpdiBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fT5cbiAgICAgICAgICBBY2Nlc3MgVG9rZW46IHtzZXNzaW9uLnVzZXIuYWNjZXNzVG9rZW59XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX0gKi99XG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XG4gICAgICAgIHtPYmplY3QudmFsdWVzKHByb3ZpZGVycykubWFwKChwcm92aWRlcikgPT4ge1xuICAgICAgICAgIHJldHVybiBzdGF0dXMgPT09IFwidW5hdXRoZW50aWNhdGVkXCIgPyAoXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17cHJvdmlkZXIubmFtZX0gb25DbGljaz17KCkgPT4gc2lnbkluKCl9PlxuICAgICAgICAgICAgICBMb2cgaW4gdG8ge3Byb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Byb3ZpZGVyLm5hbWV9IG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+XG4gICAgICAgICAgICAgIExvZyBvdXQgb2Yge3Byb3ZpZGVyLm5hbWV9XG4gICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvaGVhZGVyPlxuICAgICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubWFpbn0+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVHZXRQbGF5bGlzdHN9XG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzFEQjk1NFwiLCBtYXJnaW46IFwiMjBweFwiIH19XG4gICAgICAgICAgLy8gaHJlZj1cIi9zZWxlY3QtcGxheWxpc3RcIlxuICAgICAgICA+XG4gICAgICAgICAgTGVhcm4gYWJvdXQgeW91ciBtdXNpYyB0YXN0ZVxuICAgICAgICA8L0J1dHRvbj5cbiAgICAgIFxuICAgICAgICA8TGlzdGJveCBsYWJlbD1cIlBsYXlsaXN0IDpcIiBpdGVtcz17cGxheWxpc3R9IGNsaWNrZWQ9e2xpc3Rib3hDbGlja2VkfS8+XG4gICAgICAgIHt0cmFja0RldGFpbCAmJiA8cD5ZQVk8L3A+ICB9XG4gICAgICAgIHsvKiA8QnV0dG9uXG4gICAgICAgICAgdHlwZT1cInByaW1hcnlcIlxuICAgICAgICAgIHN0eWxlPXt7IGJhY2tncm91bmQ6IFwiIzFEQjk1NFwiIH19XG4gICAgICAgICAgaHJlZj1cIi9zZWxlY3QtZnJpZW5kc1wiXG4gICAgICAgID5cbiAgICAgICAgICBDb21wYXJlIHdpdGggeW91ciBmcmllbmRzXG4gICAgICAgIDwvQnV0dG9uPiAqL31cbiAgICAgIDwvbWFpbj5cbiAgICA8Lz5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcygpIHtcbiAgY29uc3QgcHJvdmlkZXJzID0gYXdhaXQgZ2V0UHJvdmlkZXJzKCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgcHJvdmlkZXJzLFxuICAgIH0sXG4gIH07XG59XG4iXSwibmFtZXMiOlsiaW50ZXIiLCJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJzdHlsZXMiLCJzaWduSW4iLCJzaWduT3V0IiwidXNlU2Vzc2lvbiIsIkJ1dHRvbiIsIkNhc2NhZGVyIiwiYXhpb3MiLCJEcm9wZG93biIsIkxpc3Rib3giLCJQTEFZTElTVF9FTkRQT0lOVCIsIkhvbWUiLCJwcm92aWRlcnMiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInRva2VuIiwic2V0VG9rZW4iLCJwbGF5bGlzdCIsInNldFBsYXlsaXN0IiwicGxheWxpc3RJZCIsInNldFBsYXlsaXN0SWQiLCJ0cmFja3MiLCJzZXRUcmFja3MiLCJ0cmFja0RldGFpbCIsInNldFRyYWNrRGV0YWlsIiwidXNlciIsImFjY2Vzc1Rva2VuIiwiZGl2IiwiaGFuZGxlR2V0UGxheWxpc3RzIiwiZ2V0IiwiaGVhZGVycyIsIkF1dGhvcml6YXRpb24iLCJ0aGVuIiwicGxheWxpc3RSZXNwb25zZSIsImNvbnNvbGUiLCJsb2ciLCJpdGVtcyIsImNhdGNoIiwiZXJyb3IiLCJsaXN0Ym94Q2xpY2tlZCIsInZhbCIsIm1ldGhvZCIsInRyYWNrc1Jlc3BvbnNlIiwic2VsZWN0ZWRUcmFjayIsImxpc3RPZlRyYWNrc0Zyb21BUEkiLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwiT2JqZWN0IiwidmFsdWVzIiwibWFwIiwicHJvdmlkZXIiLCJidXR0b24iLCJvbkNsaWNrIiwibWFpbiIsInR5cGUiLCJzdHlsZSIsImJhY2tncm91bmQiLCJtYXJnaW4iLCJsYWJlbCIsImNsaWNrZWQiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});