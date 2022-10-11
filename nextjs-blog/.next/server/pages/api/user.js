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
exports.id = "pages/api/user";
exports.ids = ["pages/api/user"];
exports.modules = {

/***/ "(api)/./src/constants/userDetail.js":
/*!*************************************!*\
  !*** ./src/constants/userDetail.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"userDetail\": () => (/* binding */ userDetail)\n/* harmony export */ });\nconst userDetail = {\n    name: \"Jimmy Choi\",\n    age: 12,\n    height: 100,\n    weight: 120\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvY29uc3RhbnRzL3VzZXJEZXRhaWwuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFPLE1BQU1BLFVBQVUsR0FBRztJQUN0QkMsSUFBSSxFQUFFLFlBQVk7SUFDbEJDLEdBQUcsRUFBRyxFQUFFO0lBQ1JDLE1BQU0sRUFBRyxHQUFHO0lBQ1pDLE1BQU0sRUFBRyxHQUFHO0NBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29uc3RhbnRzL3VzZXJEZXRhaWwuanM/NWE0NiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdXNlckRldGFpbCA9IHtcclxuICAgIG5hbWU6ICdKaW1teSBDaG9pJyxcclxuICAgIGFnZSA6IDEyLFxyXG4gICAgaGVpZ2h0IDogMTAwLFxyXG4gICAgd2VpZ2h0IDogMTIwXHJcbn0iXSwibmFtZXMiOlsidXNlckRldGFpbCIsIm5hbWUiLCJhZ2UiLCJoZWlnaHQiLCJ3ZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./src/constants/userDetail.js\n");

/***/ }),

/***/ "(api)/./src/pages/api/user.js":
/*!*******************************!*\
  !*** ./src/pages/api/user.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var constants_userDetail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! constants/userDetail */ \"(api)/./src/constants/userDetail.js\");\n\nfunction handler(req, res) {\n    res.status(200).json(constants_userDetail__WEBPACK_IMPORTED_MODULE_0__.userDetail);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3VzZXIuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBaUQ7QUFFbEMsU0FBU0MsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRTtJQUN0Q0EsR0FBRyxDQUFDQyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0wsNERBQVUsQ0FBQztBQUNwQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL3BhZ2VzL2FwaS91c2VyLmpzP2FiMDgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlckRldGFpbCB9IGZyb20gXCJjb25zdGFudHMvdXNlckRldGFpbFwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgICByZXMuc3RhdHVzKDIwMCkuanNvbih1c2VyRGV0YWlsKVxyXG59Il0sIm5hbWVzIjpbInVzZXJEZXRhaWwiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwic3RhdHVzIiwianNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/user.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/user.js"));
module.exports = __webpack_exports__;

})();