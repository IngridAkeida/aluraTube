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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ _App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _src_components_CSSreset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/CSSreset */ \"./src/components/CSSreset.js\");\n/* harmony import */ var _src_components_Menu_components_DarkModeSwitch_ColorMode__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Menu/components/DarkModeSwitch/ColorMode */ \"./src/components/Menu/components/DarkModeSwitch/ColorMode.js\");\n/* harmony import */ var _src_components_Menu_components_RegisterVideo__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Menu/components/RegisterVideo */ \"./src/components/Menu/components/RegisterVideo/index.js\");\n\n\n\n\n\n\nconst theme = {\n    light: {\n        backgroundBase: \"#f9f9f9\",\n        backgroundLevel1: \"#ffffff\",\n        backgroundLevel2: \"#f0f0f0\",\n        borderBase: \"#e5e5e5\",\n        textColorBase: \"#222222\"\n    },\n    dark: {\n        backgroundBase: \"#181818\",\n        backgroundLevel1: \"#202020\",\n        backgroundLevel2: \"#313131\",\n        borderBase: \"#383838\",\n        textColorBase: \"#FFFFFF\"\n    }\n};\nfunction ProviderWrapper(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu_components_DarkModeSwitch_ColorMode__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        initialMode: \"dark\",\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\pages\\\\_app.js\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, this);\n}\nfunction MyApp({ Component , pageProps  }) {\n    const contexto = react__WEBPACK_IMPORTED_MODULE_1___default().useContext(_src_components_Menu_components_DarkModeSwitch_ColorMode__WEBPACK_IMPORTED_MODULE_4__.ColorModeContext);\n    console.log(contexto.mode);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(styled_components__WEBPACK_IMPORTED_MODULE_2__.ThemeProvider, {\n        theme: theme[contexto.mode],\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_CSSreset__WEBPACK_IMPORTED_MODULE_3__.CSSReset, {}, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\pages\\\\_app.js\",\n                lineNumber: 41,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\pages\\\\_app.js\",\n                lineNumber: 42,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Menu_components_RegisterVideo__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\pages\\\\_app.js\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\pages\\\\_app.js\",\n        lineNumber: 40,\n        columnNumber: 7\n    }, this);\n}\nfunction _App(props) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ProviderWrapper, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(MyApp, {\n            ...props\n        }, void 0, false, {\n            fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\pages\\\\_app.js\",\n            lineNumber: 53,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\pages\\\\_app.js\",\n        lineNumber: 52,\n        columnNumber: 5\n    }, this);\n}\n;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUEwQjtBQUN3QjtBQUNJO0FBQ3lEO0FBQ25DO0FBRzVFLE1BQU1NLFFBQVE7SUFDWkMsT0FBTztRQUNIQyxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7SUFDQUMsTUFBTTtRQUNGTCxnQkFBZ0I7UUFDaEJDLGtCQUFrQjtRQUNsQkMsa0JBQWtCO1FBQ2xCQyxZQUFZO1FBQ1pDLGVBQWU7SUFDbkI7QUFDRjtBQUVBLFNBQVNFLGdCQUFnQkMsS0FBSyxFQUFDO0lBQzdCLHFCQUNFLDhEQUFDWixnR0FBaUJBO1FBQUNhLGFBQWE7a0JBQzdCRCxNQUFNRSxRQUFROzs7Ozs7QUFHckI7QUFFQSxTQUFTQyxNQUFNLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFFdkMsTUFBTUMsV0FBV3JCLHVEQUFnQixDQUFDSSxzR0FBZ0JBO0lBQ2xEbUIsUUFBUUMsR0FBRyxDQUFDSCxTQUFTSSxJQUFJO0lBRXpCLHFCQUVJLDhEQUFDeEIsNERBQWFBO1FBQUNLLE9BQU9BLEtBQUssQ0FBQ2UsU0FBU0ksSUFBSSxDQUFDOzswQkFDeEMsOERBQUN2Qiw4REFBUUE7Ozs7OzBCQUNULDhEQUFDaUI7Z0JBQVcsR0FBR0MsU0FBUzs7Ozs7OzBCQUN4Qiw4REFBQ2YscUZBQWFBOzs7Ozs7Ozs7OztBQUt0QjtBQUVlLFNBQVNxQixLQUFLWCxLQUFLLEVBQUM7SUFDakMscUJBQ0UsOERBQUNEO2tCQUNDLDRFQUFDSTtZQUFPLEdBQUdILEtBQUs7Ozs7Ozs7Ozs7O0FBR3RCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9fYXBwLmpzP2UwYWQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBUaGVtZVByb3ZpZGVyIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XHJcbmltcG9ydCB7IENTU1Jlc2V0IH0gZnJvbSAnLi4vc3JjL2NvbXBvbmVudHMvQ1NTcmVzZXQnO1xyXG5pbXBvcnQgQ29sb3JNb2RlUHJvdmlkZXIsIHtDb2xvck1vZGVDb250ZXh0fSBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL0RhcmtNb2RlU3dpdGNoL0NvbG9yTW9kZVwiO1xyXG5pbXBvcnQgUmVnaXN0ZXJWaWRlbyBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvTWVudS9jb21wb25lbnRzL1JlZ2lzdGVyVmlkZW9cIjtcclxuXHJcblxyXG5jb25zdCB0aGVtZSA9IHtcclxuICBsaWdodDoge1xyXG4gICAgICBiYWNrZ3JvdW5kQmFzZTogXCIjZjlmOWY5XCIsXHJcbiAgICAgIGJhY2tncm91bmRMZXZlbDE6IFwiI2ZmZmZmZlwiLFxyXG4gICAgICBiYWNrZ3JvdW5kTGV2ZWwyOiBcIiNmMGYwZjBcIixcclxuICAgICAgYm9yZGVyQmFzZTogXCIjZTVlNWU1XCIsXHJcbiAgICAgIHRleHRDb2xvckJhc2U6IFwiIzIyMjIyMlwiLFxyXG4gIH0sXHJcbiAgZGFyazoge1xyXG4gICAgICBiYWNrZ3JvdW5kQmFzZTogXCIjMTgxODE4XCIsXHJcbiAgICAgIGJhY2tncm91bmRMZXZlbDE6IFwiIzIwMjAyMFwiLFxyXG4gICAgICBiYWNrZ3JvdW5kTGV2ZWwyOiBcIiMzMTMxMzFcIixcclxuICAgICAgYm9yZGVyQmFzZTogXCIjMzgzODM4XCIsXHJcbiAgICAgIHRleHRDb2xvckJhc2U6IFwiI0ZGRkZGRlwiLFxyXG4gIH1cclxufTtcclxuXHJcbmZ1bmN0aW9uIFByb3ZpZGVyV3JhcHBlcihwcm9wcyl7XHJcbiAgcmV0dXJuIChcclxuICAgIDxDb2xvck1vZGVQcm92aWRlciBpbml0aWFsTW9kZT17J2RhcmsnfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9Db2xvck1vZGVQcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG5cclxuICBjb25zdCBjb250ZXh0byA9IFJlYWN0LnVzZUNvbnRleHQoQ29sb3JNb2RlQ29udGV4dCk7XHJcbiAgY29uc29sZS5sb2coY29udGV4dG8ubW9kZSk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgICAgPFRoZW1lUHJvdmlkZXIgdGhlbWU9e3RoZW1lW2NvbnRleHRvLm1vZGVdfT5cclxuICAgICAgICA8Q1NTUmVzZXQgLz5cclxuICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgICAgPFJlZ2lzdGVyVmlkZW8vPlxyXG4gICAgICA8L1RoZW1lUHJvdmlkZXI+XHJcbiAgICBcclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfQXBwKHByb3BzKXtcclxuICByZXR1cm4oXHJcbiAgICA8UHJvdmlkZXJXcmFwcGVyPlxyXG4gICAgICA8TXlBcHAgey4uLnByb3BzfS8+XHJcbiAgICA8L1Byb3ZpZGVyV3JhcHBlcj5cclxuICApXHJcbn07Il0sIm5hbWVzIjpbIlJlYWN0IiwiVGhlbWVQcm92aWRlciIsIkNTU1Jlc2V0IiwiQ29sb3JNb2RlUHJvdmlkZXIiLCJDb2xvck1vZGVDb250ZXh0IiwiUmVnaXN0ZXJWaWRlbyIsInRoZW1lIiwibGlnaHQiLCJiYWNrZ3JvdW5kQmFzZSIsImJhY2tncm91bmRMZXZlbDEiLCJiYWNrZ3JvdW5kTGV2ZWwyIiwiYm9yZGVyQmFzZSIsInRleHRDb2xvckJhc2UiLCJkYXJrIiwiUHJvdmlkZXJXcmFwcGVyIiwicHJvcHMiLCJpbml0aWFsTW9kZSIsImNoaWxkcmVuIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJjb250ZXh0byIsInVzZUNvbnRleHQiLCJjb25zb2xlIiwibG9nIiwibW9kZSIsIl9BcHAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./src/components/CSSreset.js":
/*!************************************!*\
  !*** ./src/components/CSSreset.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CSSReset\": () => (/* binding */ CSSReset)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst CSSReset = styled_components__WEBPACK_IMPORTED_MODULE_0__.createGlobalStyle`\r\n  /* Reset */\r\n  * {\r\n    margin: 0;\r\n    padding: 0;\r\n    box-sizing: border-box;\r\n  }\r\n  body {\r\n    font-family: sans-serif;\r\n    background-color: ${({ theme  })=>theme.backgroundBase};\r\n    color: ${({ theme  })=>theme.textColorBase};\r\n  }\r\n  /* NextJS */\r\n  html {\r\n    display: flex;\r\n    flex-direction: column;\r\n    min-height: 100%;\r\n  }\r\n  body {\r\n    display: flex;\r\n    flex: 1;\r\n  }\r\n  #__next {\r\n    display: flex;\r\n    flex: 1;\r\n  }\r\n  /* Globals */\r\n  button,\r\n  a {\r\n    text-decoration: none;\r\n    opacity: 1;\r\n    transition: .3s;\r\n    &:hover,\r\n    &:focus {\r\n      opacity: .5;\r\n    }\r\n  }\r\n`;\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9DU1NyZXNldC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBc0Q7QUFFdEQsTUFBTUMsV0FBV0QsZ0VBQWlCLENBQUM7QUF1Q25DLFNBQVFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvQ1NTcmVzZXQuanM/YjhkMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVHbG9iYWxTdHlsZSB9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5cclxuY29uc3QgQ1NTUmVzZXQgPSBjcmVhdGVHbG9iYWxTdHlsZWBcclxuICAvKiBSZXNldCAqL1xyXG4gICoge1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgfVxyXG4gIGJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmRCYXNlfTtcclxuICAgIGNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLnRleHRDb2xvckJhc2V9O1xyXG4gIH1cclxuICAvKiBOZXh0SlMgKi9cclxuICBodG1sIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWluLWhlaWdodDogMTAwJTtcclxuICB9XHJcbiAgYm9keSB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgI19fbmV4dCB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgLyogR2xvYmFscyAqL1xyXG4gIGJ1dHRvbixcclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIG9wYWNpdHk6IDE7XHJcbiAgICB0cmFuc2l0aW9uOiAuM3M7XHJcbiAgICAmOmhvdmVyLFxyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG9wYWNpdHk6IC41O1xyXG4gICAgfVxyXG4gIH1cclxuYDtcclxuXHJcbmV4cG9ydCB7Q1NTUmVzZXR9OyJdLCJuYW1lcyI6WyJjcmVhdGVHbG9iYWxTdHlsZSIsIkNTU1Jlc2V0IiwidGhlbWUiLCJiYWNrZ3JvdW5kQmFzZSIsInRleHRDb2xvckJhc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/CSSreset.js\n");

/***/ }),

/***/ "./src/components/Menu/components/DarkModeSwitch/ColorMode.js":
/*!********************************************************************!*\
  !*** ./src/components/Menu/components/DarkModeSwitch/ColorMode.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ColorModeContext\": () => (/* binding */ ColorModeContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ColorModeContext = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1___default().createContext({\n    mode: \"\",\n    setMode: ()=>{\n        alert(\"Voc\\xea precisa me configurar primeiro!\");\n    },\n    toggleMode: ()=>{\n        alert(\"Voc\\xea precisa me configurar primeiro!\");\n    }\n});\nfunction ColorModeProvider(props) {\n    const [mode, setMode] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(props.initialMode);\n    function toggleMode() {\n        if (mode === \"dark\") setMode(\"light\");\n        if (mode === \"light\") setMode(\"dark\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ColorModeContext.Provider, {\n        value: {\n            mode: mode,\n            setMode: setMode,\n            toggleMode: toggleMode\n        },\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\DarkModeSwitch\\\\ColorMode.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ColorModeProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2gvQ29sb3JNb2RlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBO0FBQTBCO0FBRW5CLE1BQU1DLGlDQUFtQkQsMERBQW1CLENBQUM7SUFDaERHLE1BQU07SUFDTkMsU0FBUyxJQUFNO1FBQUVDLE1BQU07SUFBeUM7SUFDaEVDLFlBQVksSUFBTTtRQUFFRCxNQUFNO0lBQXlDO0FBQ3ZFLEdBQUc7QUFFSCxTQUFTRSxrQkFBa0JDLEtBQUssRUFBRTtJQUM5QixNQUFNLENBQUNMLE1BQU1DLFFBQVEsR0FBR0oscURBQWMsQ0FBQ1EsTUFBTUUsV0FBVztJQUV4RCxTQUFTSixhQUFhO1FBQ2xCLElBQUdILFNBQVMsUUFBUUMsUUFBUTtRQUM1QixJQUFHRCxTQUFTLFNBQVNDLFFBQVE7SUFDakM7SUFFQSxxQkFDSSw4REFBQ0gsaUJBQWlCVSxRQUFRO1FBQUNDLE9BQU87WUFBRVQsTUFBTUE7WUFBTUMsU0FBU0E7WUFBU0UsWUFBWUE7UUFBVztrQkFDcEZFLE1BQU1LLFFBQVE7Ozs7OztBQUczQjtBQUVBLGlFQUFlTixpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvRGFya01vZGVTd2l0Y2gvQ29sb3JNb2RlLmpzPzhlZTkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbG9yTW9kZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHtcclxuICAgIG1vZGU6IFwiXCIsXHJcbiAgICBzZXRNb2RlOiAoKSA9PiB7IGFsZXJ0KFwiVm9jw6ogcHJlY2lzYSBtZSBjb25maWd1cmFyIHByaW1laXJvIVwiKSAgfSxcclxuICAgIHRvZ2dsZU1vZGU6ICgpID0+IHsgYWxlcnQoXCJWb2PDqiBwcmVjaXNhIG1lIGNvbmZpZ3VyYXIgcHJpbWVpcm8hXCIpICB9LFxyXG59KTtcclxuXHJcbmZ1bmN0aW9uIENvbG9yTW9kZVByb3ZpZGVyKHByb3BzKSB7XHJcbiAgICBjb25zdCBbbW9kZSwgc2V0TW9kZV0gPSBSZWFjdC51c2VTdGF0ZShwcm9wcy5pbml0aWFsTW9kZSk7XHJcblxyXG4gICAgZnVuY3Rpb24gdG9nZ2xlTW9kZSgpIHtcclxuICAgICAgICBpZihtb2RlID09PSBcImRhcmtcIikgc2V0TW9kZShcImxpZ2h0XCIpO1xyXG4gICAgICAgIGlmKG1vZGUgPT09IFwibGlnaHRcIikgc2V0TW9kZShcImRhcmtcIik7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8Q29sb3JNb2RlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17eyBtb2RlOiBtb2RlLCBzZXRNb2RlOiBzZXRNb2RlLCB0b2dnbGVNb2RlOiB0b2dnbGVNb2RlIH19PlxyXG4gICAgICAgICAgICB7cHJvcHMuY2hpbGRyZW59XHJcbiAgICAgICAgPC9Db2xvck1vZGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ29sb3JNb2RlUHJvdmlkZXI7Il0sIm5hbWVzIjpbIlJlYWN0IiwiQ29sb3JNb2RlQ29udGV4dCIsImNyZWF0ZUNvbnRleHQiLCJtb2RlIiwic2V0TW9kZSIsImFsZXJ0IiwidG9nZ2xlTW9kZSIsIkNvbG9yTW9kZVByb3ZpZGVyIiwicHJvcHMiLCJ1c2VTdGF0ZSIsImluaXRpYWxNb2RlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImNoaWxkcmVuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/components/DarkModeSwitch/ColorMode.js\n");

/***/ }),

/***/ "./src/components/Menu/components/RegisterVideo/index.js":
/*!***************************************************************!*\
  !*** ./src/components/Menu/components/RegisterVideo/index.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styled_components */ \"./src/components/Menu/components/RegisterVideo/styled_components.js\");\n\n\nfunction RegisterVideo() {\n    // falta o botäo \n    //modal\n    // form\n    // precisamos controlar o state\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_styled_components__WEBPACK_IMPORTED_MODULE_1__.StyledRegisterVideo, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                className: \"add-video\",\n                children: \"+\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            className: \"close-modal\",\n                            children: \"X\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"tirulo do video\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 19,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            placeholder: \"URL\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 20,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            type: \"submit\",\n                            children: \"Cadastrar\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\RegisterVideo\\\\index.js\",\n                            lineNumber: 21,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\RegisterVideo\\\\index.js\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\RegisterVideo\\\\index.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Projects\\\\DEV\\\\myprojects\\\\imersaoAlura\\\\src\\\\components\\\\Menu\\\\components\\\\RegisterVideo\\\\index.js\",\n        lineNumber: 9,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RegisterVideo);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvUmVnaXN0ZXJWaWRlby9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFBMEQ7QUFFMUQsU0FBU0MsZ0JBQWU7SUFDdEIsaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxPQUFPO0lBQ1AsK0JBQStCO0lBQzdCLHFCQUNBLDhEQUFDRCxtRUFBbUJBOzswQkFDbEIsOERBQUNFO2dCQUFPQyxXQUFVOzBCQUFZOzs7Ozs7MEJBRzlCLDhEQUFDQzswQkFDQyw0RUFBQ0M7O3NDQUNDLDhEQUFDSDs0QkFBT0MsV0FBVTtzQ0FBYzs7Ozs7O3NDQUloQyw4REFBQ0c7NEJBQU1DLGFBQVk7Ozs7OztzQ0FDbkIsOERBQUNEOzRCQUFNQyxhQUFZOzs7Ozs7c0NBQ25CLDhEQUFDTDs0QkFBT00sTUFBSztzQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFRaEM7QUFFQSxpRUFBZVAsYUFBYUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL2luZGV4LmpzPzU0NjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgU3R5bGVkUmVnaXN0ZXJWaWRlbyB9IGZyb20gJy4vc3R5bGVkX2NvbXBvbmVudHMnO1xyXG5cclxuZnVuY3Rpb24gUmVnaXN0ZXJWaWRlbygpe1xyXG4gIC8vIGZhbHRhIG8gYm90w6RvIFxyXG4gIC8vbW9kYWxcclxuICAvLyBmb3JtXHJcbiAgLy8gcHJlY2lzYW1vcyBjb250cm9sYXIgbyBzdGF0ZVxyXG4gICAgcmV0dXJuKFxyXG4gICAgPFN0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcbiAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdhZGQtdmlkZW8nPlxyXG4gICAgICAgICtcclxuICAgICAgPC9idXR0b24+XHJcbiAgICAgIDxmb3JtPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nY2xvc2UtbW9kYWwnPlxyXG4gICAgICAgICAgICBYXHJcbiAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICBcclxuICAgICAgICAgIDxpbnB1dCBwbGFjZWhvbGRlcj0ndGlydWxvIGRvIHZpZGVvJy8+XHJcbiAgICAgICAgICA8aW5wdXQgcGxhY2Vob2xkZXI9J1VSTCcvPlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnPlxyXG4gICAgICAgICAgICBDYWRhc3RyYXJcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICA8L1N0eWxlZFJlZ2lzdGVyVmlkZW8+XHJcblxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUmVnaXN0ZXJWaWRlbzsiXSwibmFtZXMiOlsiU3R5bGVkUmVnaXN0ZXJWaWRlbyIsIlJlZ2lzdGVyVmlkZW8iLCJidXR0b24iLCJjbGFzc05hbWUiLCJmb3JtIiwiZGl2IiwiaW5wdXQiLCJwbGFjZWhvbGRlciIsInR5cGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Menu/components/RegisterVideo/index.js\n");

/***/ }),

/***/ "./src/components/Menu/components/RegisterVideo/styled_components.js":
/*!***************************************************************************!*\
  !*** ./src/components/Menu/components/RegisterVideo/styled_components.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"StyledRegisterVideo\": () => (/* binding */ StyledRegisterVideo)\n/* harmony export */ });\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);\n\nconst StyledRegisterVideo = styled_components__WEBPACK_IMPORTED_MODULE_0___default().div.withConfig({\n    displayName: \"styled_components__StyledRegisterVideo\",\n    componentId: \"sc-88f1461f-0\"\n})`\r\n  .add-video {\r\n    width: 50px;\r\n    height: 50px;\r\n    font-size: 20px;\r\n    color: inherit;\r\n    position: fixed;\r\n    bottom: 16px;\r\n    right: 16px;\r\n    border: 0;\r\n    background-color: red;\r\n    border-radius: 50%;\r\n    z-index: 99;\r\n    cursor: pointer;\r\n  }\r\n  .close-modal {\r\n    width: 25px;\r\n    height: 25px;\r\n    position: absolute;\r\n    top: 8px;\r\n    right: 16px;\r\n    color: inherit;\r\n    background-color: transparent;\r\n    border: none;\r\n    cursor: pointer;\r\n  }\r\n  button[type=\"submit\"] {\r\n    background-color: red;\r\n    padding: 8px 16px;\r\n    border: none;\r\n    border-radius: 2px;\r\n    cursor: pointer;\r\n    color: inherit;\r\n  }\r\n  form {\r\n    width: 100%;\r\n    padding: 5%;\r\n    background-color: rgba(0,0,0,0.5);\r\n    position: fixed;\r\n    top: 0; bottom: 0;\r\n    left: 0; right: 0;\r\n    z-index: 100;\r\n    display: flex;\r\n    justify-content: center;\r\n    & > div {\r\n      flex: 1;\r\n      border-radius: 8px;\r\n      max-width: 320px;\r\n      background-color: ${({ theme  })=>theme.backgroundLevel2};\r\n      display: flex;\r\n      flex-direction: column;\r\n      position: relative;\r\n      padding: 16px;\r\n      padding-top: 40px;\r\n    }\r\n  }\r\n  input {\r\n    border-radius: 2px;\r\n    border: 1px solid ${({ theme  })=>theme.borderBase};\r\n    padding: 8px 10px;\r\n    margin-bottom: 10px;\r\n    outline: none;\r\n    color: #222222;\r\n    background-color: #f9f9f9;\r\n    color: ${({ theme  })=>theme.textColorBase};\r\n    background-color: ${({ theme  })=>theme.backgroundBase};\r\n  }\r\n`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9NZW51L2NvbXBvbmVudHMvUmVnaXN0ZXJWaWRlby9zdHlsZWRfY29tcG9uZW50cy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBdUM7QUFFaEMsTUFBTUMsc0JBQXNCRCx1RUFBVTs7O0VBQUEsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL01lbnUvY29tcG9uZW50cy9SZWdpc3RlclZpZGVvL3N0eWxlZF9jb21wb25lbnRzLmpzPzQ0ZjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBTdHlsZWRSZWdpc3RlclZpZGVvID0gc3R5bGVkLmRpdmBcclxuICAuYWRkLXZpZGVvIHtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICBib3R0b206IDE2cHg7XHJcbiAgICByaWdodDogMTZweDtcclxuICAgIGJvcmRlcjogMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDk5O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAuY2xvc2UtbW9kYWwge1xyXG4gICAgd2lkdGg6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDI1cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDhweDtcclxuICAgIHJpZ2h0OiAxNnB4O1xyXG4gICAgY29sb3I6IGluaGVyaXQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbiAgYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xyXG4gICAgcGFkZGluZzogOHB4IDE2cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBjb2xvcjogaW5oZXJpdDtcclxuICB9XHJcbiAgZm9ybSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLDAsMCwwLjUpO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiAwOyBib3R0b206IDA7XHJcbiAgICBsZWZ0OiAwOyByaWdodDogMDtcclxuICAgIHotaW5kZXg6IDEwMDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgICYgPiBkaXYge1xyXG4gICAgICBmbGV4OiAxO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICAgIG1heC13aWR0aDogMzIwcHg7XHJcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYmFja2dyb3VuZExldmVsMn07XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgcGFkZGluZzogMTZweDtcclxuICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGlucHV0IHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUuYm9yZGVyQmFzZX07XHJcbiAgICBwYWRkaW5nOiA4cHggMTBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgY29sb3I6ICMyMjIyMjI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xyXG4gICAgY29sb3I6ICR7KHsgdGhlbWUgfSkgPT4gdGhlbWUudGV4dENvbG9yQmFzZX07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkeyh7IHRoZW1lIH0pID0+IHRoZW1lLmJhY2tncm91bmRCYXNlfTtcclxuICB9XHJcbmA7Il0sIm5hbWVzIjpbInN0eWxlZCIsIlN0eWxlZFJlZ2lzdGVyVmlkZW8iLCJkaXYiLCJ0aGVtZSIsImJhY2tncm91bmRMZXZlbDIiLCJib3JkZXJCYXNlIiwidGV4dENvbG9yQmFzZSIsImJhY2tncm91bmRCYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Menu/components/RegisterVideo/styled_components.js\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();