webpackJsonp([0,2,3,4],{"4VQz":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("我是第一个子组件")])},staticRenderFns:[]},r=n("VU/8")({data:function(){return{}}},i,!1,null,null,null);e.default=r.exports},mplb:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n("4VQz"),r=n("oDBg"),s=n("y675"),a={data:function(){return{active:0,noBack:!0,step1:"step1",step2:"step2",step3:"step3",currentStep:"step1"}},methods:{next:function(){this.active++,this.noBack=!1,4==this.active&&(this.active=3),this.goWhere()},back:function(){this.active--,2==this.active&&(this.active=1),0==this.active&&(this.noBack=!0),this.goWhere()},goWhere:function(){0==this.active?this.currentStep=i.default:1==this.active?this.currentStep=r.default:2==this.active?this.currentStep=s.default:3==this.active&&(this.currentStep=s.default)}},components:{step1:i.default,step2:r.default,step3:s.default}},c={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-container",[n("el-header",[n("el-steps",{attrs:{active:t.active,"align-center":""}},[n("el-step",{attrs:{title:"Step 1",description:"Upload your image",icon:"el-icon-upload"}}),t._v(" "),n("el-step",{attrs:{title:"Step 2",description:"Set some parameters",icon:"el-icon-edit"}}),t._v(" "),n("el-step",{attrs:{title:"Step 3",description:"Download your awesome wallpaper",icon:"el-icon-picture"}})],1)],1),t._v(" "),n("el-main",[n(t.currentStep,{tag:"i"})],1),t._v(" "),n("el-footer",[n("el-row",{attrs:{type:"flex",justify:"center"}},[n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{disabled:t.noBack},on:{click:t.back}},[t._v("Back")])],1),t._v(" "),n("el-col",{attrs:{span:4}},[n("el-button",{attrs:{type:"primary"},on:{click:t.next}},[t._v(t._s(this.active<2?"Next":"Download"))])],1)],1)],1)],1)},staticRenderFns:[]},l=n("VU/8")(a,c,!1,null,null,null);e.default=l.exports},oDBg:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("el-input",{attrs:{placeholder:"请输入内容"},model:{value:t.input,callback:function(e){t.input=e},expression:"input"}})},staticRenderFns:[]},r=n("VU/8")({data:function(){return{input:""}}},i,!1,null,null,null);e.default=r.exports},tKM7:function(t,e){},y675:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("我是第三个子组件")])},staticRenderFns:[]};var r=n("VU/8")({data:function(){return{}}},i,!1,function(t){n("tKM7")},null,null);e.default=r.exports}});
//# sourceMappingURL=0.7caab5640002d82a6c1f.js.map