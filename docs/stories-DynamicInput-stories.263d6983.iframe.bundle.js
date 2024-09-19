/*! For license information please see stories-DynamicInput-stories.263d6983.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkconcept_ui=self.webpackChunkconcept_ui||[]).push([[91],{"./src/stories/DynamicInput.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>DynamicInput_stories,primary:()=>primary});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(o){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},_typeof(o)}var _excluded=["value","width","onChange"];function ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function _defineProperty(e,r,t){return(r=function _toPropertyKey(t){var i=function _toPrimitive(t,r){if("object"!=_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _slicedToArray(r,e){return function _arrayWithHoles(r){if(Array.isArray(r))return r}(r)||function _iterableToArrayLimit(r,l){var t=null==r?null:"undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=t){var e,n,i,u,a=[],f=!0,o=!1;try{if(i=(t=t.call(r)).next,0===l){if(Object(t)!==t)return;f=!1}else for(;!(f=(e=i.call(t)).done)&&(a.push(e.value),a.length!==l);f=!0);}catch(r){o=!0,n=r}finally{try{if(!f&&null!=t.return&&(u=t.return(),Object(u)!==u))return}finally{if(o)throw n}}return a}}(r,e)||function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r,e)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}var DynamicWidthInput=function DynamicWidthInput(_ref){var value=_ref.value,width=_ref.width,onChange=_ref.onChange,rest=function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}(_ref,_excluded),inputRef=(0,react.useRef)(null),_useState2=_slicedToArray((0,react.useState)(value),2),inputValue=_useState2[0],setInputValue=_useState2[1];(0,react.useEffect)((function(){setInputValue(value)}),[value]),(0,react.useEffect)((function(){if(inputRef.current){var input=inputRef.current;input.style.width=width+"px";var inputWidth=Math.max(width,input.scrollWidth);input.style.width="".concat(inputWidth,"px")}}),[inputValue,width]);return(0,jsx_runtime.jsx)("input",function _objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?ownKeys(Object(t),!0).forEach((function(r){_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}({style:{minWidth:width},ref:inputRef,type:"text",value:inputValue,onChange:function handleChange(event){onChange&&onChange(event),setInputValue(event.target.value)},placeholder:"Type something..."},rest))};DynamicWidthInput.displayName="DynamicWidthInput",DynamicWidthInput.propTypes={value:prop_types_default().string},DynamicWidthInput.defaultProps={width:50},DynamicWidthInput.__docgenInfo={description:"",methods:[],displayName:"DynamicWidthInput",props:{width:{defaultValue:{value:"50",computed:!1},required:!1},value:{description:"",type:{name:"string"},required:!1}}};const DynamicInput=DynamicWidthInput;var _primary$parameters,_primary$parameters2;function DynamicInput_stories_typeof(o){return DynamicInput_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},DynamicInput_stories_typeof(o)}function DynamicInput_stories_ownKeys(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function DynamicInput_stories_objectSpread(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?DynamicInput_stories_ownKeys(Object(t),!0).forEach((function(r){DynamicInput_stories_defineProperty(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):DynamicInput_stories_ownKeys(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function DynamicInput_stories_defineProperty(e,r,t){return(r=function DynamicInput_stories_toPropertyKey(t){var i=function DynamicInput_stories_toPrimitive(t,r){if("object"!=DynamicInput_stories_typeof(t)||!t)return t;var e=t[Symbol.toPrimitive];if(void 0!==e){var i=e.call(t,r||"default");if("object"!=DynamicInput_stories_typeof(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(t)}(t,"string");return"symbol"==DynamicInput_stories_typeof(i)?i:i+""}(r))in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}const DynamicInput_stories={title:"components/DynamicInput",tags:["autodocs"],component:DynamicInput};var template=function template(args){return(0,jsx_runtime.jsx)(DynamicInput,DynamicInput_stories_objectSpread({},args))};template.displayName="template";var primary=template.bind({});primary.args={style:{fontSize:"20px",padding:5,lineHeight:1.75},placeholder:"A placeHolderText"},primary.parameters=DynamicInput_stories_objectSpread(DynamicInput_stories_objectSpread({},primary.parameters),{},{docs:DynamicInput_stories_objectSpread(DynamicInput_stories_objectSpread({},null===(_primary$parameters=primary.parameters)||void 0===_primary$parameters?void 0:_primary$parameters.docs),{},{source:DynamicInput_stories_objectSpread({originalSource:"args => <DynamicInput {...args} />"},null===(_primary$parameters2=primary.parameters)||void 0===_primary$parameters2||null===(_primary$parameters2=_primary$parameters2.docs)||void 0===_primary$parameters2?void 0:_primary$parameters2.source)})});var __namedExportsOrder=["primary"]},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);