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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSP\": function() { return /* binding */ __N_SSP; },\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Home.module.css */ \"./src/styles/Home.module.css\");\n/* harmony import */ var _styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ \"./node_modules/antd/es/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/Dropdown */ \"./src/components/Dropdown.js\");\n/* harmony import */ var _components_Dropdown__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_components_Dropdown__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_ListBox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/ListBox */ \"./src/components/ListBox.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nconst PLAYLIST_ENDPOINT = \"https://api.spotify.com/v1/me/playlists\";\nvar __N_SSP = true;\nfunction Home(param) {\n    let { providers  } = param;\n    _s();\n    const { data: session , status  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const [token, setToken] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [playlist, setPlaylist] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [playlistId, setPlaylistId] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [tracks, setTracks] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [trackDetail, setTrackDetail] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        var _session_user;\n        if (session === null || session === void 0 ? void 0 : (_session_user = session.user) === null || _session_user === void 0 ? void 0 : _session_user.accessToken) {\n            setToken(session.user.accessToken);\n        }\n    }, [\n        session\n    ]);\n    if (status === \"loading\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, this);\n    }\n    const handleGetPlaylists = ()=>{\n        axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"].get(PLAYLIST_ENDPOINT, {\n            headers: {\n                Authorization: \"Bearer \" + token\n            }\n        }).then((playlistResponse)=>{\n            console.log(\"playlistResponse\", playlistResponse);\n            setPlaylist(playlistResponse.data.items);\n        }).catch((error)=>{\n            console.log(error);\n        });\n    };\n    // const playlistChanged = val => {\n    //   console.log(val);\n    //   setPlaylist({\n    //     selectedPlaylistId: val,\n    //     listOfPlaylistFromAPI: playlist.listOfPlaylistFromAPI\n    //   });\n    // }\n    const listboxClicked = (val)=>{\n        console.log(\"listboxclicked\", val);\n        (0,axios__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(\"https://api.spotify.com/v1/playlists/\".concat(val, \"/tracks\"), {\n            method: \"GET\",\n            headers: {\n                \"Authorization\": \"Bearer \" + token\n            }\n        }).then((tracksResponse)=>{\n            setTracks({\n                selectedTrack: tracks.selectedTrack,\n                listOfTracksFromAPI: tracksResponse.data.items\n            });\n        });\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_1___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        children: \"Create Next App\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 75,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create next app\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 76,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 77,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: Object.values(providers).map((provider)=>{\n                    return status === \"unauthenticated\" ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signIn)(),\n                        children: [\n                            \"Log in to \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 88,\n                        columnNumber: 13\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: ()=>(0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.signOut)(),\n                        children: [\n                            \"Log out of \",\n                            provider.name\n                        ]\n                    }, provider.name, true, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 92,\n                        columnNumber: 13\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: (_styles_Home_module_css__WEBPACK_IMPORTED_MODULE_7___default().main),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(antd__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                        onClick: handleGetPlaylists,\n                        type: \"primary\",\n                        style: {\n                            background: \"#1DB954\",\n                            margin: \"20px\"\n                        },\n                        children: \"Learn about your music taste\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_ListBox__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                        label: \"Playlist :\",\n                        items: playlist,\n                        clicked: listboxClicked\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 108,\n                        columnNumber: 9\n                    }, this),\n                    trackDetail && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"YAY\"\n                    }, void 0, false, {\n                        fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                        lineNumber: 109,\n                        columnNumber: 25\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/jialin/Documents/GitHub/chord/src/pages/index.js\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"D5XKSDM/kh1L9ecfDFL+MBNh+L8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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MUIsOERBQUNXO3dCQUEyQkMsU0FBUyxJQUFNekQsd0RBQU9BOzs0QkFBSTs0QkFDeEN1RCxTQUFTVixJQUFJOzt1QkFEZFUsU0FBU1YsSUFBSTs7Ozs0QkFHM0I7Z0JBQ0g7Ozs7OzswQkFFRiw4REFBQ2E7Z0JBQUtQLFdBQVdyRCxxRUFBVzs7a0NBQzFCLDhEQUFDSSx3Q0FBTUE7d0JBQ0x1RCxTQUFTL0I7d0JBQ1RpQyxNQUFLO3dCQUNMQyxPQUFPOzRCQUFFQyxZQUFZOzRCQUFXQyxRQUFRO3dCQUFPO2tDQUVoRDs7Ozs7O2tDQUlELDhEQUFDeEQsMkRBQU9BO3dCQUFDeUQsT0FBTTt3QkFBYTdCLE9BQU9uQjt3QkFBVWlELFNBQVMzQjs7Ozs7O29CQUNyRGhCLDZCQUFlLDhEQUFDNEM7a0NBQUU7Ozs7Ozs7Ozs7Ozs7O0FBVzNCLENBQUM7R0ExR3VCekQ7O1FBQ1lQLHVEQUFVQTs7O0tBRHRCTyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBJbnRlciB9IGZyb20gXCJuZXh0L2ZvbnQvZ29vZ2xlXCI7XG5pbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Ib21lLm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IGdldFByb3ZpZGVycywgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgQnV0dG9uLCBDYXNjYWRlciB9IGZyb20gXCJhbnRkXCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQgRHJvcGRvd24gZnJvbSBcIkAvY29tcG9uZW50cy9Ecm9wZG93blwiO1xuaW1wb3J0IExpc3Rib3ggZnJvbSBcIkAvY29tcG9uZW50cy9MaXN0Qm94XCI7XG5cbmNvbnN0IGludGVyID0gSW50ZXIoeyBzdWJzZXRzOiBbXCJsYXRpblwiXSB9KTtcbmNvbnN0IFBMQVlMSVNUX0VORFBPSU5UID0gXCJodHRwczovL2FwaS5zcG90aWZ5LmNvbS92MS9tZS9wbGF5bGlzdHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSh7IHByb3ZpZGVycyB9KSB7XG4gIGNvbnN0IHsgZGF0YTogc2Vzc2lvbiwgc3RhdHVzIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IFt0b2tlbiwgc2V0VG9rZW5dID0gdXNlU3RhdGUoXCJcIik7XG4gIGNvbnN0IFtwbGF5bGlzdCwgc2V0UGxheWxpc3RdID0gdXNlU3RhdGUoW10pO1xuICBjb25zdCBbcGxheWxpc3RJZCwgc2V0UGxheWxpc3RJZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW3RyYWNrcywgc2V0VHJhY2tzXSA9IHVzZVN0YXRlKFtdKTtcbiAgY29uc3QgW3RyYWNrRGV0YWlsLCBzZXRUcmFja0RldGFpbF0gPSB1c2VTdGF0ZShudWxsKTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5hY2Nlc3NUb2tlbikge1xuICAgICAgc2V0VG9rZW4oc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuKTtcbiAgICB9XG4gIH0sIFtzZXNzaW9uXSk7XG5cbiAgaWYgKHN0YXR1cyA9PT0gXCJsb2FkaW5nXCIpIHtcbiAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuICB9XG5cbiAgY29uc3QgaGFuZGxlR2V0UGxheWxpc3RzID0gKCkgPT4ge1xuICAgIGF4aW9zXG4gICAgICAuZ2V0KFBMQVlMSVNUX0VORFBPSU5ULCB7XG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICBBdXRob3JpemF0aW9uOiBcIkJlYXJlciBcIiArIHRva2VuLFxuICAgICAgICB9LFxuICAgICAgfSlcbiAgICAgIC50aGVuKChwbGF5bGlzdFJlc3BvbnNlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwicGxheWxpc3RSZXNwb25zZVwiLCBwbGF5bGlzdFJlc3BvbnNlKVxuICAgICAgICBzZXRQbGF5bGlzdChwbGF5bGlzdFJlc3BvbnNlLmRhdGEuaXRlbXMpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKChlcnJvcikgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICB9KTtcbiAgfTtcbiAgXG4gIC8vIGNvbnN0IHBsYXlsaXN0Q2hhbmdlZCA9IHZhbCA9PiB7XG4gIC8vICAgY29uc29sZS5sb2codmFsKTtcbiAgLy8gICBzZXRQbGF5bGlzdCh7XG4gIC8vICAgICBzZWxlY3RlZFBsYXlsaXN0SWQ6IHZhbCxcbiAgLy8gICAgIGxpc3RPZlBsYXlsaXN0RnJvbUFQSTogcGxheWxpc3QubGlzdE9mUGxheWxpc3RGcm9tQVBJXG4gIC8vICAgfSk7XG4gIC8vIH1cblxuICBjb25zdCBsaXN0Ym94Q2xpY2tlZCA9IHZhbCA9PiB7XG4gICAgY29uc29sZS5sb2coXCJsaXN0Ym94Y2xpY2tlZFwiLCB2YWwpXG4gICAgYXhpb3MoYGh0dHBzOi8vYXBpLnNwb3RpZnkuY29tL3YxL3BsYXlsaXN0cy8ke3ZhbH0vdHJhY2tzYCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0F1dGhvcml6YXRpb24nIDogJ0JlYXJlciAnICsgdG9rZW5cbiAgICAgIH1cbiAgICB9KVxuICAgIC50aGVuKHRyYWNrc1Jlc3BvbnNlID0+IHtcbiAgICAgIHNldFRyYWNrcyh7XG4gICAgICAgIHNlbGVjdGVkVHJhY2s6IHRyYWNrcy5zZWxlY3RlZFRyYWNrLFxuICAgICAgICBsaXN0T2ZUcmFja3NGcm9tQVBJOiB0cmFja3NSZXNwb25zZS5kYXRhLml0ZW1zXG4gICAgICB9KVxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5DcmVhdGUgTmV4dCBBcHA8L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXh0IGFwcFwiIC8+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cbiAgICAgIHsvKiB7c2Vzc2lvbj8udXNlcj8uYWNjZXNzVG9rZW4gJiYgKFxuICAgICAgICA8ZGl2IHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19PlxuICAgICAgICAgIEFjY2VzcyBUb2tlbjoge3Nlc3Npb24udXNlci5hY2Nlc3NUb2tlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfSAqL31cbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAge09iamVjdC52YWx1ZXMocHJvdmlkZXJzKS5tYXAoKHByb3ZpZGVyKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHN0YXR1cyA9PT0gXCJ1bmF1dGhlbnRpY2F0ZWRcIiA/IChcbiAgICAgICAgICAgIDxidXR0b24ga2V5PXtwcm92aWRlci5uYW1lfSBvbkNsaWNrPXsoKSA9PiBzaWduSW4oKX0+XG4gICAgICAgICAgICAgIExvZyBpbiB0byB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8YnV0dG9uIGtleT17cHJvdmlkZXIubmFtZX0gb25DbGljaz17KCkgPT4gc2lnbk91dCgpfT5cbiAgICAgICAgICAgICAgTG9nIG91dCBvZiB7cHJvdmlkZXIubmFtZX1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9oZWFkZXI+XG4gICAgICA8bWFpbiBjbGFzc05hbWU9e3N0eWxlcy5tYWlufT5cbiAgICAgICAgPEJ1dHRvblxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdldFBsYXlsaXN0c31cbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMURCOTU0XCIsIG1hcmdpbjogXCIyMHB4XCIgfX1cbiAgICAgICAgICAvLyBocmVmPVwiL3NlbGVjdC1wbGF5bGlzdFwiXG4gICAgICAgID5cbiAgICAgICAgICBMZWFybiBhYm91dCB5b3VyIG11c2ljIHRhc3RlXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgXG4gICAgICAgIDxMaXN0Ym94IGxhYmVsPVwiUGxheWxpc3QgOlwiIGl0ZW1zPXtwbGF5bGlzdH0gY2xpY2tlZD17bGlzdGJveENsaWNrZWR9Lz5cbiAgICAgICAge3RyYWNrRGV0YWlsICYmIDxwPllBWTwvcD4gIH1cbiAgICAgICAgey8qIDxCdXR0b25cbiAgICAgICAgICB0eXBlPVwicHJpbWFyeVwiXG4gICAgICAgICAgc3R5bGU9e3sgYmFja2dyb3VuZDogXCIjMURCOTU0XCIgfX1cbiAgICAgICAgICBocmVmPVwiL3NlbGVjdC1mcmllbmRzXCJcbiAgICAgICAgPlxuICAgICAgICAgIENvbXBhcmUgd2l0aCB5b3VyIGZyaWVuZHNcbiAgICAgICAgPC9CdXR0b24+ICovfVxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKCkge1xuICBjb25zdCBwcm92aWRlcnMgPSBhd2FpdCBnZXRQcm92aWRlcnMoKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwcm92aWRlcnMsXG4gICAgfSxcbiAgfTtcbn1cbiJdLCJuYW1lcyI6WyJpbnRlciIsIkhlYWQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInN0eWxlcyIsInNpZ25JbiIsInNpZ25PdXQiLCJ1c2VTZXNzaW9uIiwiQnV0dG9uIiwiQ2FzY2FkZXIiLCJheGlvcyIsIkRyb3Bkb3duIiwiTGlzdGJveCIsIlBMQVlMSVNUX0VORFBPSU5UIiwiSG9tZSIsInByb3ZpZGVycyIsImRhdGEiLCJzZXNzaW9uIiwic3RhdHVzIiwidG9rZW4iLCJzZXRUb2tlbiIsInBsYXlsaXN0Iiwic2V0UGxheWxpc3QiLCJwbGF5bGlzdElkIiwic2V0UGxheWxpc3RJZCIsInRyYWNrcyIsInNldFRyYWNrcyIsInRyYWNrRGV0YWlsIiwic2V0VHJhY2tEZXRhaWwiLCJ1c2VyIiwiYWNjZXNzVG9rZW4iLCJkaXYiLCJoYW5kbGVHZXRQbGF5bGlzdHMiLCJnZXQiLCJoZWFkZXJzIiwiQXV0aG9yaXphdGlvbiIsInRoZW4iLCJwbGF5bGlzdFJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsIml0ZW1zIiwiY2F0Y2giLCJlcnJvciIsImxpc3Rib3hDbGlja2VkIiwidmFsIiwibWV0aG9kIiwidHJhY2tzUmVzcG9uc2UiLCJzZWxlY3RlZFRyYWNrIiwibGlzdE9mVHJhY2tzRnJvbUFQSSIsInRpdGxlIiwibWV0YSIsIm5hbWUiLCJjb250ZW50IiwibGluayIsInJlbCIsImhyZWYiLCJoZWFkZXIiLCJjbGFzc05hbWUiLCJPYmplY3QiLCJ2YWx1ZXMiLCJtYXAiLCJwcm92aWRlciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJtYWluIiwidHlwZSIsInN0eWxlIiwiYmFja2dyb3VuZCIsIm1hcmdpbiIsImxhYmVsIiwiY2xpY2tlZCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});