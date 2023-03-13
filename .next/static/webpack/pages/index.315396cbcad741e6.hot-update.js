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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Dropdown */ \"./src/components/Dropdown.js\");\n/* harmony import */ var _components_ListBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ListBox */ \"./src/components/ListBox.js\");\n/* harmony import */ var _components_Details__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/Details */ \"./src/components/Details.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nconst PLAYLIST_ENDPOINT = \"https://api.spotify.com/v1/me/playlists\";\nvar __N_SSP = true;\nfunction Home(param) {\n    let { providers  } = param;\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [tracks, setTracks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [trackDetail, setTrackDetail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _session_user;\n        if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.accessToken) {\n            setToken(session.user.accessToken);\n        }\n    }, [\n        session\n    ]);\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    const handleGetPlaylists = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"].get(PLAYLIST_ENDPOINT, {\n            headers: {\n                Authorization: \"Bearer \" + token\n            }\n        }).then((playlistResponse)=>{\n            console.log(\"playlistResponse\", playlistResponse);\n            setPlaylist(playlistResponse.data.items);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    // const playlistChanged = val => {\n    //   console.log(val);\n    //   setPlaylist({\n    //     selectedPlaylistId: val,\n    //     listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI\n    //   });\n    // }\n    const listboxClicked = (val)=>{\n        console.log(\"listboxclicked\", val);\n        (0,axios__WEBPACK_IMPORTED_MODULE_7__[\"default\"])(\"https://api.spotify.com/v1/playlists/\".concat(val, \"/tracks\"), {\n            method: \"GET\",\n            headers: {\n                Authorization: \"Bearer \" + token\n            }\n        }).then((tracksResponse)=>{\n            setTracks(tracksResponse.data.items);\n            console.log(\"settrack\", tracksResponse.data.items);\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 72,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),\n                children: Object.values(providers).map((provider)=>{\n                    return status === \"unauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(),\n                        children: [\n                            \"Log in to \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 85,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                        children: [\n                            \"Log out of \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 89,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_8___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        onClick: handleGetPlaylists,\n                        type: \"primary\",\n                        style: {\n                            background: \"#1DB954\",\n                            margin: \"20px\"\n                        },\n                        children: \"Learn about your music taste\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 96,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        label: \"Playlist :\",\n                        items: playlist,\n                        clicked: listboxClicked\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 105,\n                        columnNumber: 9\n                    }, this),\n                    tracks === null || tracks === void 0 ? void 0 : tracks.map((item, idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Details__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                            option: item.track\n                        }, idx, false, {\n                            fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                            lineNumber: 107,\n                            columnNumber: 11\n                        }, this))\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"8+wEns+EQySWs+1HIX+hfu3TWu4=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUk7NEJBQ3hDb0QsU0FBU1YsSUFBSTs7dUJBRGRVLFNBQVNWLElBQUk7Ozs7NEJBRzNCO2dCQUNIOzs7Ozs7MEJBRUYsOERBQUNhO2dCQUFLUCxXQUFXbEQscUVBQVc7O2tDQUMxQiw4REFBQ0ksd0NBQU1BO3dCQUNMb0QsU0FBUzdCO3dCQUNUK0IsTUFBSzt3QkFDTEMsT0FBTzs0QkFBRUMsWUFBWTs0QkFBV0MsUUFBUTt3QkFBTztrQ0FFaEQ7Ozs7OztrQ0FJRCw4REFBQ3JELDJEQUFPQTt3QkFBQ3NELE9BQU07d0JBQWEzQixPQUFPakI7d0JBQVU2QyxTQUFTekI7Ozs7OztvQkFDckRsQixtQkFBQUEsb0JBQUFBLEtBQUFBLElBQUFBLE9BQVFpQyxHQUFHLENBQUMsQ0FBQ1csTUFBTUMsb0JBQ2xCLDhEQUFDeEQsMkRBQU9BOzRCQUFDeUQsUUFBUUYsS0FBS0csS0FBSzsyQkFBT0Y7Ozs7Ozs7Ozs7Ozs7QUFZNUMsQ0FBQztHQXhHdUJ0RDs7UUFDWVIsdURBQVVBOzs7S0FEdEJRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9pbmRleC5qcz80MDgwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IEludGVyIH0gZnJvbSBcIm5leHQvZm9udC9nb29nbGVcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL0hvbWUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0UHJvdmlkZXJzLCBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIENhc2NhZGVyIH0gZnJvbSBcImFudGRcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBEcm9wZG93biBmcm9tIFwiQC9jb21wb25lbnRzL0Ryb3Bkb3duXCI7XG5pbXBvcnQgTGlzdGJveCBmcm9tIFwiQC9jb21wb25lbnRzL0xpc3RCb3hcIjtcbmltcG9ydCBEZXRhaWxzIGZyb20gXCJAL2NvbXBvbmVudHMvRGV0YWlsc1wiO1xuXG5jb25zdCBpbnRlciA9IEludGVyKHsgc3Vic2V0czogW1wibGF0aW5cIl0gfSk7XG5jb25zdCBQTEFZTElTVF9FTkRQT0lOVCA9IFwiaHR0cHM6Ly9hcGkuc3BvdGlmeS5jb20vdjEvbWUvcGxheWxpc3RzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoeyBwcm92aWRlcnMgfSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24sIHN0YXR1cyB9ID0gdXNlU2Vzc2lvbigpO1xuICBjb25zdCBbdG9rZW4sIHNldFRva2VuXSA9IHVzZVN0YXRlKFwiXCIpO1xuICBjb25zdCBbcGxheWxpc3QsIHNldFBsYXlsaXN0XSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RyYWNrcywgc2V0VHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RyYWNrRGV0YWlsLCBzZXRUcmFja0RldGFpbF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5hY2Nlc3NUb2tlbikge1xuICAgICAgc2V0VG9rZW4oc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uXSk7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlR2V0UGxheWxpc3RzID0gKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFBMQVlMSVNUX0VORFBPSU5ULCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChwbGF5bGlzdFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWxpc3RSZXNwb25zZVwiLCBwbGF5bGlzdFJlc3BvbnNlKTtcbiAgICAgICAgc2V0UGxheWxpc3QocGxheWxpc3RSZXNwb25zZS5kYXRhLml0ZW1zKTtcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAgIH0pO1xuICB9O1xuXG4gIC8vIGNvbnN0IHBsYXlsaXN0Q2hhbmdlZCA9IHZhbCA9PiB7XG4gIC8vICAgY29uc29sZS5sb2codmFsKTtcbiAgLy8gICBzZXRQbGF5bGlzdCh7XG4gIC8vICAgICBzZWxlY3RlZFBsYXlsaXN0SWQ6IHZhbCxcbiAgLy8gICAgIGxpc3RPZlBsYXlsaXN0RnJvbUFQSTogcGxheWxpc3QubGlzdE9mUGxheWxpc3RGcm9tQVBJXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBjb25zdCBsaXN0Ym94Q2xpY2tlZCA9ICh2YWwpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImxpc3Rib3hjbGlja2VkXCIsIHZhbCk7XG4gICAgYXhpb3MoYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3BsYXlsaXN0cy8ke3ZhbH0vdHJhY2tzYCwge1xuICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxuICAgICAgfSxcbiAgICB9KS50aGVuKCh0cmFja3NSZXNwb25zZSkgPT4ge1xuICAgICAgc2V0VHJhY2tzKHRyYWNrc1Jlc3BvbnNlLmRhdGEuaXRlbXMpO1xuICAgICAgY29uc29sZS5sb2coXCJzZXR0cmFja1wiLCB0cmFja3NSZXNwb25zZS5kYXRhLml0ZW1zKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPkNyZWF0ZSBOZXh0IEFwcDwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9XCJHZW5lcmF0ZWQgYnkgY3JlYXRlIG5leHQgYXBwXCIgLz5cbiAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuICAgICAgey8qIHtzZXNzaW9uPy51c2VyPy5hY2Nlc3NUb2tlbiAmJiAoXG4gICAgICAgIDxkaXYgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX0+XG4gICAgICAgICAgQWNjZXNzIFRva2VuOiB7c2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VufVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9ICovfVxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICB7T2JqZWN0LnZhbHVlcyhwcm92aWRlcnMpLm1hcCgocHJvdmlkZXIpID0+IHtcbiAgICAgICAgICByZXR1cm4gc3RhdHVzID09PSBcInVuYXV0aGVudGljYXRlZFwiID8gKFxuICAgICAgICAgICAgPGJ1dHRvbiBrZXk9e3Byb3ZpZGVyLm5hbWV9IG9uQ2xpY2s9eygpID0+IHNpZ25JbigpfT5cbiAgICAgICAgICAgICAgTG9nIGluIHRvIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKSA6IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtwcm92aWRlci5uYW1lfSBvbkNsaWNrPXsoKSA9PiBzaWduT3V0KCl9PlxuICAgICAgICAgICAgICBMb2cgb3V0IG9mIHtwcm92aWRlci5uYW1lfVxuICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L2hlYWRlcj5cbiAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgb25DbGljaz17aGFuZGxlR2V0UGxheWxpc3RzfVxuICAgICAgICAgIHR5cGU9XCJwcmltYXJ5XCJcbiAgICAgICAgICBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMxREI5NTRcIiwgbWFyZ2luOiBcIjIwcHhcIiB9fVxuICAgICAgICAgIC8vIGhyZWY9XCIvc2VsZWN0LXBsYXlsaXN0XCJcbiAgICAgICAgPlxuICAgICAgICAgIExlYXJuIGFib3V0IHlvdXIgbXVzaWMgdGFzdGVcbiAgICAgICAgPC9CdXR0b24+XG5cbiAgICAgICAgPExpc3Rib3ggbGFiZWw9XCJQbGF5bGlzdCA6XCIgaXRlbXM9e3BsYXlsaXN0fSBjbGlja2VkPXtsaXN0Ym94Q2xpY2tlZH0gLz5cbiAgICAgICAge3RyYWNrcz8ubWFwKChpdGVtLCBpZHgpID0+IChcbiAgICAgICAgICA8RGV0YWlscyBvcHRpb249e2l0ZW0udHJhY2t9IGtleT17aWR4fSAvPlxuICAgICAgICApKX1cbiAgICAgICAgey8qIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMURCOTU0XCIgfX1cbiAgICAgICAgICBocmVmPVwiL3NlbGVjdC1mcmllbmRzXCJcbiAgICAgICAgPlxuICAgICAgICAgIENvbXBhcmUgd2l0aCB5b3VyIGZyaWVuZHNcbiAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm92aWRlcnMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiQnV0dG9uIiwiQ2FzY2FkZXIiLCJheGlvcyIsIkRyb3Bkb3duIiwiTGlzdGJveCIsIkRldGFpbHMiLCJQTEFZTElTVF9FTkRQT0lOVCIsIkhvbWUiLCJwcm92aWRlcnMiLCJkYXRhIiwic2Vzc2lvbiIsInN0YXR1cyIsInRva2VuIiwic2V0VG9rZW4iLCJwbGF5bGlzdCIsInNldFBsYXlsaXN0IiwidHJhY2tzIiwic2V0VHJhY2tzIiwidHJhY2tEZXRhaWwiLCJzZXRUcmFja0RldGFpbCIsInVzZXIiLCJhY2Nlc3NUb2tlbiIsImRpdiIsImhhbmRsZUdldFBsYXlsaXN0cyIsImdldCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidGhlbiIsInBsYXlsaXN0UmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiaXRlbXMiLCJjYXRjaCIsImVycm9yIiwibGlzdGJveENsaWNrZWQiLCJ2YWwiLCJtZXRob2QiLCJ0cmFja3NSZXNwb25zZSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIiwidHlwZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm1hcmdpbiIsImxhYmVsIiwiY2xpY2tlZCIsIml0ZW0iLCJpZHgiLCJvcHRpb24iLCJ0cmFjayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});