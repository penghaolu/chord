"use strict";
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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/spotify":
/*!**********************************************!*\
  !*** external "next-auth/providers/spotify" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/spotify");

/***/ }),

/***/ "(api)/./src/pages/api/auth/[...nextauth].js":
/*!*********************************************!*\
  !*** ./src/pages/api/auth/[...nextauth].js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.SPOTIFY_API_CLIENT_ID,\n            clientSecret: process.env.SPOTIFY_API_CLIENT_SECRET,\n            scope: \"user-top-read\"\n        })\n    ],\n    session: {\n        jwt: true\n    },\n    callbacks: {\n        async jwt ({ token , account , user  }) {\n            if (account && user) {\n                return {\n                    ...token,\n                    accessToken: account.access_token,\n                    refreshToken: account.refresh_token,\n                    username: account.providerAccountId,\n                    accessTokenExpires: account.expires_at * 1000\n                };\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token.accessToken) {\n                session.user.accessToken = token.accessToken;\n                session.user.username = token.username;\n            }\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDeUI7QUFFbkQsTUFBTUUsY0FBYztJQUN6QkMsV0FBVztRQUNURixrRUFBZUEsQ0FBQztZQUNkRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtZQUMzQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyx5QkFBeUI7WUFDbkRDLE9BQU87UUFDVDtLQUNEO0lBQ0RDLFNBQVM7UUFBRUMsS0FBSyxJQUFJO0lBQUM7SUFDckJDLFdBQVc7UUFDVCxNQUFNRCxLQUFJLEVBQUVFLE1BQUssRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtZQUNsQyxJQUFJRCxXQUFXQyxNQUFNO2dCQUNuQixPQUFPO29CQUNMLEdBQUdGLEtBQUs7b0JBQ1JHLGFBQWFGLFFBQVFHLFlBQVk7b0JBQ2pDQyxjQUFjSixRQUFRSyxhQUFhO29CQUNuQ0MsVUFBVU4sUUFBUU8saUJBQWlCO29CQUNuQ0Msb0JBQW9CUixRQUFRUyxVQUFVLEdBQUc7Z0JBQzNDO1lBQ0YsQ0FBQztZQUNELE9BQU9WO1FBQ1Q7UUFDQSxNQUFNSCxTQUFRLEVBQUVBLFFBQU8sRUFBRUcsTUFBSyxFQUFFLEVBQUU7WUFDaEMsSUFBSUEsTUFBTUcsV0FBVyxFQUFFO2dCQUNyQk4sUUFBUUssSUFBSSxDQUFDQyxXQUFXLEdBQUdILE1BQU1HLFdBQVc7Z0JBQzVDTixRQUFRSyxJQUFJLENBQUNLLFFBQVEsR0FBR1AsTUFBTU8sUUFBUTtZQUN4QyxDQUFDO1lBRUQsT0FBT1Y7UUFDVDtJQUNGO0FBQ0YsRUFBRTtBQUVGLGlFQUFlWCxnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnktbmV0d29yay8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBTcG90aWZ5UHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvc3BvdGlmeVwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIFNwb3RpZnlQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuU1BPVElGWV9BUElfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5TUE9USUZZX0FQSV9DTElFTlRfU0VDUkVULFxuICAgICAgc2NvcGU6IFwidXNlci10b3AtcmVhZFwiLFxuICAgIH0pLFxuICBdLFxuICBzZXNzaW9uOiB7IGp3dDogdHJ1ZSB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgYWNjb3VudCwgdXNlciB9KSB7XG4gICAgICBpZiAoYWNjb3VudCAmJiB1c2VyKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4udG9rZW4sXG4gICAgICAgICAgYWNjZXNzVG9rZW46IGFjY291bnQuYWNjZXNzX3Rva2VuLFxuICAgICAgICAgIHJlZnJlc2hUb2tlbjogYWNjb3VudC5yZWZyZXNoX3Rva2VuLFxuICAgICAgICAgIHVzZXJuYW1lOiBhY2NvdW50LnByb3ZpZGVyQWNjb3VudElkLFxuICAgICAgICAgIGFjY2Vzc1Rva2VuRXhwaXJlczogYWNjb3VudC5leHBpcmVzX2F0ICogMTAwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0b2tlbjtcbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uLCB0b2tlbiB9KSB7XG4gICAgICBpZiAodG9rZW4uYWNjZXNzVG9rZW4pIHtcbiAgICAgICAgc2Vzc2lvbi51c2VyLmFjY2Vzc1Rva2VuID0gdG9rZW4uYWNjZXNzVG9rZW47XG4gICAgICAgIHNlc3Npb24udXNlci51c2VybmFtZSA9IHRva2VuLnVzZXJuYW1lO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9LFxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiU3BvdGlmeVByb3ZpZGVyIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJTUE9USUZZX0FQSV9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJTUE9USUZZX0FQSV9DTElFTlRfU0VDUkVUIiwic2NvcGUiLCJzZXNzaW9uIiwiand0IiwiY2FsbGJhY2tzIiwidG9rZW4iLCJhY2NvdW50IiwidXNlciIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzX3Rva2VuIiwicmVmcmVzaFRva2VuIiwicmVmcmVzaF90b2tlbiIsInVzZXJuYW1lIiwicHJvdmlkZXJBY2NvdW50SWQiLCJhY2Nlc3NUb2tlbkV4cGlyZXMiLCJleHBpcmVzX2F0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/auth/[...nextauth].js"));
module.exports = __webpack_exports__;

})();