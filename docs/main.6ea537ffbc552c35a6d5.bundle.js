(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1083:function(module,exports){function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=function(){return[]},webpackEmptyContext.resolve=webpackEmptyContext,module.exports=webpackEmptyContext,webpackEmptyContext.id=1083},1085:function(module,exports,__webpack_require__){var map={"./story.tsx":1086};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1085},1086:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),react__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__),_storybook_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(210),_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(157),_readme_raw_md__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(480);__webpack_require__(1087);const opts={notes:{markdown:_readme_raw_md__WEBPACK_IMPORTED_MODULE_3__.a}};Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)("Hooks|useBreakpoint",module).add("Default",()=>{const value=Object(_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__.a)("none",[["micro","is micro"],["mobile","is mobile"],["tablet","is tablet"],["small","is small"],["medium","is medium"],["large","is large"]]);return console.log(Object(_useBreakpoint__WEBPACK_IMPORTED_MODULE_2__.a)()),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"Example code",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("pre",null,"const value = useBreakpoint('none', [\n    ['micro', 'is micro'],\n    ['mobile', 'is mobile'],\n    ['tablet', 'is tablet'],\n    ['small', 'is small'],\n    ['medium', 'is medium'],\n    ['large', 'is large']\n])"),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,"`",value,"` is the current value. Resize to change."),react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div",null,react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br",null),"For more info please see ",react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong",null,"Notes")," tab."))},opts)}.call(this,__webpack_require__(201)(module))},1087:function(module,__webpack_exports__,__webpack_require__){"use strict";var _usr_local_lib_node_modules_mhy_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(481),_usr_local_lib_node_modules_mhy_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_usr_local_lib_node_modules_mhy_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__),_usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_cjs_js_ref_7_1_usr_local_lib_node_modules_mhy_node_modules_sass_loader_dist_cjs_js_ref_7_2_story_css__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(322),options={insert:"head",singleton:!1};_usr_local_lib_node_modules_mhy_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_cjs_js_ref_7_1_usr_local_lib_node_modules_mhy_node_modules_sass_loader_dist_cjs_js_ref_7_2_story_css__WEBPACK_IMPORTED_MODULE_1__.a,options),_usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_cjs_js_ref_7_1_usr_local_lib_node_modules_mhy_node_modules_sass_loader_dist_cjs_js_ref_7_2_story_css__WEBPACK_IMPORTED_MODULE_1__.a.locals},157:function(module,__webpack_exports__,__webpack_require__){"use strict";(function(global){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(0),___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(88);let cachedProplessValue={};const calculateProplessValue=function calculateProplessValue(iw,ih){const key=`${iw}${ih}`;if(cachedProplessValue[key])return cachedProplessValue[key];const isLandscape=iw>ih,proplessValue={isLandscape:isLandscape,isPortrait:!isLandscape,isHDPI:"undefined"!=typeof window&&window.devicePixelRatio>1,innerWidth:iw,innerHeight:ih,media:{}};for(const[k,[from,to]]of Object.entries(___WEBPACK_IMPORTED_MODULE_1__.g.breakpoints)){if(!0===from)continue;const[firstLetter,secondLetter,...restLetter]=k,isOrientedLandscape=___WEBPACK_IMPORTED_MODULE_1__.c===firstLetter,isOrientedPortrait=___WEBPACK_IMPORTED_MODULE_1__.e===firstLetter,isOriented=isOrientedLandscape||isOrientedPortrait;proplessValue["is"+(isOriented?`${firstLetter}${secondLetter.toUpperCase()}${restLetter.join("")}`:`${firstLetter.toUpperCase()}${secondLetter}${restLetter.join("")}`)]=iw>from&&iw<=to&&(!isOriented||isOrientedLandscape&&isLandscape||isOrientedPortrait&&!isLandscape),proplessValue.media[k]=`(min-width: ${from}px) and (max-width: ${to}px)`}return cachedProplessValue[key]=proplessValue,proplessValue},getInnerWidth=()=>"undefined"!=typeof window?window.innerWidth:global.innerWidth||1920,getInnerHeight=()=>"undefined"!=typeof window?window.innerHeight:global.innerHeight||1080;let cachedIw=getInnerWidth(),cachedIh=getInnerHeight();__webpack_exports__.a=function useBreakpoint(defaultValue,breakpointValues){const[[innerWidth,innerHeight],setInnerWidth]=Object(react__WEBPACK_IMPORTED_MODULE_0__.useState)([cachedIw,cachedIh]);return Object(___WEBPACK_IMPORTED_MODULE_1__.h)(()=>{cachedIw=getInnerWidth(),cachedIh=getInnerHeight(),setInnerWidth([cachedIw,cachedIh])}),Object(react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>function calculateValue(defaultValue){let breakpointValues=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],iw=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"undefined"!=typeof window&&window.innerWidth,ih=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"undefined"!=typeof window&&window.innerHeight;if(void 0===defaultValue&&!breakpointValues.length)return calculateProplessValue(iw,ih);const isLandscape=iw>ih;if(!breakpointValues||!breakpointValues.length)return defaultValue;"string"==typeof breakpointValues[0]&&(breakpointValues=[breakpointValues]);for(const[key,value]of breakpointValues){if(!___WEBPACK_IMPORTED_MODULE_1__.g.breakpoints[key])continue;const bp=___WEBPACK_IMPORTED_MODULE_1__.g.breakpoints[key];if((!isLandscape||key[0]!==___WEBPACK_IMPORTED_MODULE_1__.e)&&((isLandscape||key[0]!==___WEBPACK_IMPORTED_MODULE_1__.c)&&iw>=bp[0]&&iw<=bp[1]))return value}return defaultValue}(defaultValue,breakpointValues,innerWidth,innerHeight),[innerWidth,innerHeight,defaultValue])}}).call(this,__webpack_require__(45))},322:function(module,__webpack_exports__,__webpack_require__){"use strict";var _usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(482),_usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(_usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__),_usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(483),___CSS_LOADER_EXPORT___=__webpack_require__.n(_usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__)()(_usr_local_lib_node_modules_mhy_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);___CSS_LOADER_EXPORT___.push([module.i,"body{box-sizing:border-box;margin:0;display:flex;align-items:center;justify-content:center}","",{version:3,sources:["webpack://./src/story.css"],names:[],mappings:"AAAA,KACC,qBAAA,CACA,QAAA,CACA,YAAA,CACA,kBAAA,CACA,sBAAA",sourcesContent:["body {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}"],sourceRoot:""}]),__webpack_exports__.a=___CSS_LOADER_EXPORT___},480:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a="# Intro\n\nReact `useBreakpoint` hook to have different values for a variable\nbased on a breakpoints.\n\n# Setup\n\nBy default you don't need to do anything. The following default values\nare being used.\n\n```js\nconst breakpoints = {\n    micro: [0, 375],\n    mobile: [376, 639],\n    tablet: [640, 1023],\n    small: [1024, 1439],\n    medium: [1440, 1919],\n    large: [1920, 10000]\n}\n```\n\n## Override default settings\n\n```js\nimport { setup, breakpoints } from '@w11r/use-breakpoint'\n\nsetup({\n    breakpoints: {\n        // Extend default values\n        ...breakpoints,\n        alienDevice: [342, 43534] // from, to\n    }\n})\n```\n\n# Usage\n\n```js\nuseBreakpoint(defaultValue, breakpointValues)\n\n// breakpointValues: array of breakpoint based values\n[\n  ['mobile', 300],\n  ['tablet', 400]\n]\n\n// In case you have a single breakpoint value, `['mobile', 300]`\nis enough instead of `[['mobile', 300]]`\n```\n\nComponent example\n\n```jsx\nimport useBreakpoint from '@w11r/use-breakpoint'\n\nconst MyCmp = () => {\n    const columns = useBreakpoint([1,2], ['mobile', [2,1]])\n    \n    return <Grid cols={columns} />\n}\n\n// Or using inline\nconst MyCmp = () => {\n    return <Grid cols={useBreakpoint([1,2], ['mobile', [2,1]])} />\n}\n```\n\n> _Rules-of-Hooks_ are still true in this case as well. Make sure\n> your component will __ALWAYS__ run it without any condition!\n\n## Modifiers\n\nAll breakpoint names coming with modifiers included.\n\n### Orientation prefix\n\n- `` (none): all\n- `-`: Landscape\n- `|`: Portrait\n\n### Range suffix\n\nYou can also control your value to behave as `and up` and `and down`.\n\n- `` (none): all\n- `+`: `and up`\n- `-`: `and down`\n\n### Examples\n\n- `['|mobile', 300]`: on mobile, on portrait\n- `['|mobile+', 300]`: on mobile and up, on portrait\n- `['mobile+', 300]`: on mobile and up, both portrait and landscape\n- `['mobile', 300]`: on mobile, both portrait and landscape\n- `['tablet-', 300]`: on tablet and below, both portrait and landscape\n- `['mobile-', 300]`: on mobile and down, both portrait and landscape\n\n# FAQ\n\n## Which rule is being prioritized\n\nThe hook uses _eager_ evaluation, so the first truthy breakpoint value\ngets returned.\n"},486:function(module,exports,__webpack_require__){__webpack_require__(487),__webpack_require__(644),__webpack_require__(645),__webpack_require__(805),__webpack_require__(1023),__webpack_require__(1056),module.exports=__webpack_require__(1084)},554:function(module,exports){},88:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"f",(function(){return UP})),__webpack_require__.d(__webpack_exports__,"b",(function(){return DOWN})),__webpack_require__.d(__webpack_exports__,"c",(function(){return LANDSCAPE})),__webpack_require__.d(__webpack_exports__,"e",(function(){return PORTRAIT})),__webpack_require__.d(__webpack_exports__,"d",(function(){return LIGHT})),__webpack_require__.d(__webpack_exports__,"a",(function(){return DARK})),__webpack_require__.d(__webpack_exports__,"g",(function(){return options})),__webpack_require__.d(__webpack_exports__,"h",(function(){return useResize}));var useBreakpoint=__webpack_require__(157),react=__webpack_require__(0);function useResize(callback){let throttle=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;console.log("useResize"),Object(react.useEffect)(()=>{let timeout;const handleResize=()=>{clearTimeout(timeout),timeout=setTimeout(callback,throttle)};return window.addEventListener("resize",handleResize),()=>window.removeEventListener("resize",handleResize)},[])}function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const UP="+",DOWN="-",LANDSCAPE="-",PORTRAIT="|",LIGHT="(",DARK=")";let options;!function setup(opts){Object.entries(opts.breakpoints).forEach(_ref=>{let[name,[from,to]]=_ref;return[["",[from,to]],[UP,[from,1e4]],[DOWN,[0,to]]].forEach(_ref2=>{let[symbol,fromTo]=_ref2;return["",LANDSCAPE,PORTRAIT,LIGHT,DARK].forEach(prefix=>{opts.breakpoints[`${prefix}${name}${symbol}`]=fromTo})})}),_extends(opts.breakpoints,{[LANDSCAPE]:[!0],[PORTRAIT]:[!0],[LIGHT]:[!0],[DARK]:[!0]}),options=opts}({breakpoints:{micro:[0,375],mi:[0,375],mobile:[376,639],m:[376,639],tablet:[640,1023],t:[640,1023],small:[1024,1439],s:[1024,1439],medium:[1440,1919],med:[1440,1919],large:[1920,1e4],l:[1920,1e4],device:[0,1023],d:[0,1023],smallDevice:[0,639],sd:[0,639]},shorthands:{dark:"@media screen and (prefers-color-scheme: dark)",light:"@media screen and (prefers-color-scheme: light)",hdpi:"@media screen and (min-resolution: 192dpi)"}});useBreakpoint.a}},[[486,1,2]]]);
//# sourceMappingURL=main.6ea537ffbc552c35a6d5.bundle.js.map