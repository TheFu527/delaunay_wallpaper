webpackJsonp([0,2,3,4],{"4VQz":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"#","list-type":"picture",accept:"image/jpeg, image/png","on-preview":t.handlePreview,"on-remove":t.handleRemove,"file-list":t.fileList,"auto-upload":!1,limit:1,"on-exceed":t.handleExceed,"on-change":t.loadUrlFromFileConfirmed}},[i("el-button",{attrs:{slot:"trigger",size:"small",type:"primary"},slot:"trigger"},[t._v("Select")]),t._v(" "),i("div",{staticClass:"el-upload__tip",attrs:{slot:"tip"},slot:"tip"},[t._v("Only support jpg/png")])],1)],1),t._v(" "),i("el-dialog",{attrs:{visible:t.dialogVisible},on:{"update:visible":function(e){t.dialogVisible=e}}},[i("img",{attrs:{width:"100%",src:t.dialogImageUrl,alt:""}})])],1)},staticRenderFns:[]},a=i("VU/8")({data:function(){return{dialogImageUrl:"",dialogVisible:!1,disabled:!1,fileList:[]}},methods:{handleRemove:function(t){},handlePreview:function(t){this.dialogImageUrl=t.url,this.dialogVisible=!0},handleExceed:function(t,e){this.$message.warning("Limit to select 1 file.")},loadUrlFromFileConfirmed:function(t){this.$emit("getData",t,1)}}},s,!1,null,null,null);e.default=a.exports},mplb:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("4VQz"),a=i("oDBg"),n=i("y675"),l={name:"Steps",components:{step1:s.default,step2:a.default,step3:n.default},data:function(){return{active:0,noBack:!0,step1:"step1",step2:"step2",step3:"step3",currentStep:"step1",image:"",pointsNum:""}},methods:{next:function(){this.active++,this.noBack=!1,4==this.active&&(this.active=3),console.log("this.image"),console.log(this.image),console.log(this.pointsNum),this.goWhere()},back:function(){this.active--,2==this.active&&(this.active=1),0==this.active&&(this.noBack=!0),this.goWhere()},goWhere:function(){0==this.active?this.currentStep=s.default:1==this.active?this.currentStep=a.default:2==this.active?this.currentStep=n.default:3==this.active&&(this.currentStep=n.default)},getData:function(t,e){var i=this;if(console.log(t),console.log(e),1==e){var s=new FileReader;s.readAsDataURL(t.raw),s.onload=function(){i.image=s.result},console.log("image.result"),console.log(this.image)}else 2==e&&(this.pointsNum=t)}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-container",[i("el-header",{attrs:{height:"150px"}},[i("el-row",{staticClass:"row-bg",attrs:{type:"flex",justify:"center"}},[i("el-steps",{attrs:{active:t.active,"align-center":""}},[i("el-step",{attrs:{title:"Step 1",description:"Upload your image",icon:"el-icon-upload"}}),t._v(" "),i("el-step",{attrs:{title:"Step 2",description:"Set some parameters",icon:"el-icon-edit"}}),t._v(" "),i("el-step",{attrs:{title:"Step 3",description:"Download your awesome wallpaper",icon:"el-icon-picture"}})],1)],1)],1),t._v(" "),i("el-main",[i(t.currentStep,{tag:"component",attrs:{image:t.image},on:{getData:t.getData}})],1),t._v(" "),i("el-footer",[i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-button",{attrs:{disabled:t.noBack},on:{click:t.back}},[t._v("Back")]),t._v(" "),i("el-col",{attrs:{span:4,type:"flex",justify:"center"}}),t._v(" "),i("el-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v(t._s(this.active<2?"Next":"Download"))])],1)],1)],1)],1)},staticRenderFns:[]},r=i("VU/8")(l,o,!1,null,null,null);e.default=r.exports},oDBg:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("el-row",{attrs:{type:"flex",justify:"center"}},[i("el-col",{attrs:{span:12}},[i("div",{staticClass:"block"},[i("span",{staticClass:"demonstration"},[t._v("How many points do you want?")]),t._v(" "),i("el-slider",{attrs:{min:3,max:1e3,"show-input":""},on:{change:t.returnPointsNum},model:{value:t.pointsNum,callback:function(e){t.pointsNum=e},expression:"pointsNum"}})],1)])],1)],1)},staticRenderFns:[]},a=i("VU/8")({data:function(){return{input:"",pointsNum:500}},methods:{returnPointsNum:function(t){this.$emit("getData",t,2)}}},s,!1,null,null,null);e.default=a.exports},y675:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("span",{staticClass:"demonstration"},[this._v("Your wallpaper")]),this._v(" "),e("el-image",{attrs:{src:this.image}},[e("div",{staticClass:"image-slot",attrs:{slot:"placeholder"},slot:"placeholder"},[this._v("\n      Loading\n      "),e("span",{staticClass:"dot"},[this._v("...")])])])],1)},staticRenderFns:[]},a=i("VU/8")({props:["image"],data:function(){return{imageData:[]}}},s,!1,null,null,null);e.default=a.exports}});
//# sourceMappingURL=0.a948d694fe5c6457787f.js.map