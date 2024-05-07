/*! For license information please see stories-ToggleableText-stories.a8d91b9a.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkconcept_ui=self.webpackChunkconcept_ui||[]).push([[837],{"./src/stories/ToggleableText.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{__namedExportsOrder:()=>__namedExportsOrder,default:()=>ToggleableText_stories,primary:()=>primary});var react=__webpack_require__("./node_modules/react/index.js"),prop_types=__webpack_require__("./node_modules/prop-types/index.js"),prop_types_default=__webpack_require__.n(prop_types),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const ToggleableText=({children,delimeter,showingNumberOfWords,element,...rest})=>{const[less,setLess]=(0,react.useState)(!0),CompressString=children.split(delimeter).slice(0,showingNumberOfWords).join(delimeter);return react.cloneElement(element,{...rest},(0,jsx_runtime.jsxs)("span",{children:[less?CompressString:children,showingNumberOfWords===children.length?null:(0,jsx_runtime.jsxs)("a",{style:{textDecoration:"underline",cursor:"pointer"},"data-href":"#",onClick:e=>{e.preventDefault(),setLess(!less)},children:["Show ",less?"More":"Less"]})]}))};ToggleableText.propTypes={children:prop_types_default().string.isRequired,showingNumberOfWords:prop_types_default().number.isRequired,delimeter:prop_types_default().string,element:prop_types_default().element,style:prop_types_default().object},ToggleableText.defaultProps={delimeter:" ",showingNumberOfWords:10,element:(0,jsx_runtime.jsx)("p",{})},ToggleableText.__docgenInfo={description:"This is a Toggleable Text Component tailored to optimize your content display for longer texts. Seamlessly integrating into your web interface or application, this component empowers users to toggle the visibility of extended text segments with a simple click. Streamline the presentation of lengthy content without sacrificing depth or detail. With an intuitive design that ensures smooth interaction, users can effortlessly expand or collapse text sections, maintaining a clean and organized layout.",methods:[],displayName:"ToggleableText",props:{delimeter:{defaultValue:{value:"' '",computed:!1},description:"the character on which the element should split",type:{name:"string"},required:!1},showingNumberOfWords:{defaultValue:{value:"10",computed:!1},description:"the number of words to show",type:{name:"number"},required:!1},element:{defaultValue:{value:"<p />",computed:!1},description:"the tag that you want to use for the text",type:{name:"element"},required:!1},children:{description:"The text for the element",type:{name:"string"},required:!0},style:{description:"style of the text",type:{name:"object"},required:!1}}};var dataset=__webpack_require__("./src/stories/dataset.js");const ToggleableText_stories={title:"components/ToggleableText",tags:["autodocs"],component:ToggleableText,argTypes:{showingNumberOfWords:{control:{type:"range",max:20,min:1,step:1}},delimeter:{control:{type:"text"}}}},template=args=>(0,jsx_runtime.jsx)(ToggleableText,{...args,children:(0,dataset.u9)()});template.displayName="template";const primary=template.bind({});primary.args={showingNumberOfWords:4,style:{...dataset.$_[3],fontSize:"20px",padding:"30px",lineHeight:1.75}},primary.parameters={...primary.parameters,docs:{...primary.parameters?.docs,source:{originalSource:"args => <ToggleableText {...args}>{allFrameworksDescriptions()}</ToggleableText>",...primary.parameters?.docs?.source}}};const __namedExportsOrder=["primary"]},"./src/stories/dataset.js":function(__unused_webpack_module,exports){exports.$9=[{name:"React",genus:"Facebook",description:"React is an open-source JavaScript library primarily used for building user interfaces (UIs) in web applications. Developed and maintained by Facebook, React allows developers to create reusable UI components and manage their dynamic behavior efficiently.",img:"https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"},{name:"Angular",genus:"Google",description:"Angular is a widely-used open-source framework for building web applications, maintained by Google and a community of developers. It allows developers to create dynamic, robust, and feature-rich single-page applications (SPAs) and other web applications.",img:"https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"},{name:"Vue",genus:"Evan You",description:"Vue.js, often referred to as Vue, is an open-source JavaScript framework for building user interfaces and dynamic web applications. Known for its simplicity and flexibility, Vue.js allows developers to create interactive and engaging front-end experiences with ease.",img:"https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"}],exports.$_=[{color:"#F6F4F3",background:"#183059"},{color:"#D3D5D4",background:"#1B3022"},{color:"#c4d6b0",background:"#477998"},{color:"#EFE7E9",background:"#98473E"},{color:"#2B2D42",background:"#8D99AE"}],exports.u9=()=>this.$9.reduce(((acc,fruit)=>acc+=`${fruit.description}. `),"")},"./node_modules/react/cjs/react-jsx-runtime.production.min.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var f=__webpack_require__("./node_modules/react/index.js"),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function q(c,a,g){var b,d={},e=null,h=null;for(b in void 0!==g&&(e=""+g),void 0!==a.key&&(e=""+a.key),void 0!==a.ref&&(h=a.ref),a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps)void 0===d[b]&&(d[b]=a[b]);return{$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}exports.Fragment=l,exports.jsx=q,exports.jsxs=q},"./node_modules/react/jsx-runtime.js":(module,__unused_webpack_exports,__webpack_require__)=>{"use strict";module.exports=__webpack_require__("./node_modules/react/cjs/react-jsx-runtime.production.min.js")}}]);