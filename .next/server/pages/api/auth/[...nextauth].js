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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/spotify */ \"next-auth/providers/spotify\");\n/* harmony import */ var next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    providers: [\n        next_auth_providers_spotify__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.SPOTIFY_API_CLIENT_ID,\n            clientSecret: process.env.SPOTIFY_API_CLIENT_SECRET,\n            scope: \"user-top-read user-read-recently-played user-library-read playlist-read-private playlist-read-collaborative user-follow-read user-read-playback-state user-read-currently-playing\"\n        })\n    ],\n    session: {\n        jwt: true\n    },\n    callbacks: {\n        async jwt ({ token , account , user  }) {\n            if (account && user) {\n                return {\n                    ...token,\n                    accessToken: account.access_token,\n                    refreshToken: account.refresh_token,\n                    username: account.providerAccountId,\n                    accessTokenExpires: account.expires_at * 1000\n                };\n            }\n            return token;\n        },\n        async session ({ session , token  }) {\n            if (token.accessToken) {\n                session.user.accessToken = token.accessToken;\n                session.user.username = token.username;\n            }\n            return session;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBaUM7QUFDeUI7QUFFbkQsTUFBTUUsY0FBYztJQUN6QkMsV0FBVztRQUNURixrRUFBZUEsQ0FBQztZQUNkRyxVQUFVQyxRQUFRQyxHQUFHLENBQUNDLHFCQUFxQjtZQUMzQ0MsY0FBY0gsUUFBUUMsR0FBRyxDQUFDRyx5QkFBeUI7WUFDbkRDLE9BQ0U7UUFDSjtLQUNEO0lBQ0RDLFNBQVM7UUFBRUMsS0FBSyxJQUFJO0lBQUM7SUFDckJDLFdBQVc7UUFDVCxNQUFNRCxLQUFJLEVBQUVFLE1BQUssRUFBRUMsUUFBTyxFQUFFQyxLQUFJLEVBQUUsRUFBRTtZQUNsQyxJQUFJRCxXQUFXQyxNQUFNO2dCQUNuQixPQUFPO29CQUNMLEdBQUdGLEtBQUs7b0JBQ1JHLGFBQWFGLFFBQVFHLFlBQVk7b0JBQ2pDQyxjQUFjSixRQUFRSyxhQUFhO29CQUNuQ0MsVUFBVU4sUUFBUU8saUJBQWlCO29CQUNuQ0Msb0JBQW9CUixRQUFRUyxVQUFVLEdBQUc7Z0JBQzNDO1lBQ0YsQ0FBQztZQUNELE9BQU9WO1FBQ1Q7UUFDQSxNQUFNSCxTQUFRLEVBQUVBLFFBQU8sRUFBRUcsTUFBSyxFQUFFLEVBQUU7WUFDaEMsSUFBSUEsTUFBTUcsV0FBVyxFQUFFO2dCQUNyQk4sUUFBUUssSUFBSSxDQUFDQyxXQUFXLEdBQUdILE1BQU1HLFdBQVc7Z0JBQzVDTixRQUFRSyxJQUFJLENBQUNLLFFBQVEsR0FBR1AsTUFBTU8sUUFBUTtZQUN4QyxDQUFDO1lBRUQsT0FBT1Y7UUFDVDtJQUNGO0FBQ0YsRUFBRTtBQUVGLGlFQUFlWCxnREFBUUEsQ0FBQ0UsWUFBWUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3Nwb3RpZnktbmV0d29yay8uL3NyYy9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLmpzPzc4YWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gXCJuZXh0LWF1dGhcIjtcbmltcG9ydCBTcG90aWZ5UHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvc3BvdGlmeVwiO1xuXG5leHBvcnQgY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIFNwb3RpZnlQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuU1BPVElGWV9BUElfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5TUE9USUZZX0FQSV9DTElFTlRfU0VDUkVULFxuICAgICAgc2NvcGU6XG4gICAgICAgIFwidXNlci10b3AtcmVhZCB1c2VyLXJlYWQtcmVjZW50bHktcGxheWVkIHVzZXItbGlicmFyeS1yZWFkIHBsYXlsaXN0LXJlYWQtcHJpdmF0ZSBwbGF5bGlzdC1yZWFkLWNvbGxhYm9yYXRpdmUgdXNlci1mb2xsb3ctcmVhZCB1c2VyLXJlYWQtcGxheWJhY2stc3RhdGUgdXNlci1yZWFkLWN1cnJlbnRseS1wbGF5aW5nXCIsXG4gICAgfSksXG4gIF0sXG4gIHNlc3Npb246IHsgand0OiB0cnVlIH0sXG4gIGNhbGxiYWNrczoge1xuICAgIGFzeW5jIGp3dCh7IHRva2VuLCBhY2NvdW50LCB1c2VyIH0pIHtcbiAgICAgIGlmIChhY2NvdW50ICYmIHVzZXIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAuLi50b2tlbixcbiAgICAgICAgICBhY2Nlc3NUb2tlbjogYWNjb3VudC5hY2Nlc3NfdG9rZW4sXG4gICAgICAgICAgcmVmcmVzaFRva2VuOiBhY2NvdW50LnJlZnJlc2hfdG9rZW4sXG4gICAgICAgICAgdXNlcm5hbWU6IGFjY291bnQucHJvdmlkZXJBY2NvdW50SWQsXG4gICAgICAgICAgYWNjZXNzVG9rZW5FeHBpcmVzOiBhY2NvdW50LmV4cGlyZXNfYXQgKiAxMDAwLFxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRva2VuO1xuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24sIHRva2VuIH0pIHtcbiAgICAgIGlmICh0b2tlbi5hY2Nlc3NUb2tlbikge1xuICAgICAgICBzZXNzaW9uLnVzZXIuYWNjZXNzVG9rZW4gPSB0b2tlbi5hY2Nlc3NUb2tlbjtcbiAgICAgICAgc2Vzc2lvbi51c2VyLnVzZXJuYW1lID0gdG9rZW4udXNlcm5hbWU7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBOZXh0QXV0aChhdXRoT3B0aW9ucyk7XG4iXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJTcG90aWZ5UHJvdmlkZXIiLCJhdXRoT3B0aW9ucyIsInByb3ZpZGVycyIsImNsaWVudElkIiwicHJvY2VzcyIsImVudiIsIlNQT1RJRllfQVBJX0NMSUVOVF9JRCIsImNsaWVudFNlY3JldCIsIlNQT1RJRllfQVBJX0NMSUVOVF9TRUNSRVQiLCJzY29wZSIsInNlc3Npb24iLCJqd3QiLCJjYWxsYmFja3MiLCJ0b2tlbiIsImFjY291bnQiLCJ1c2VyIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3NfdG9rZW4iLCJyZWZyZXNoVG9rZW4iLCJyZWZyZXNoX3Rva2VuIiwidXNlcm5hbWUiLCJwcm92aWRlckFjY291bnRJZCIsImFjY2Vzc1Rva2VuRXhwaXJlcyIsImV4cGlyZXNfYXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/auth/[...nextauth].js\n");

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