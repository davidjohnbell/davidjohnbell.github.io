webpackJsonp([1],{"/iDW":function(t,e){},0:function(t,e){},1:function(t,e){},2:function(t,e){},"2mV7":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("gNcp"),i={};n.keys().forEach(function(t){"./index.js"!==t&&(i[t.replace(/(\.\/|\.js)/g,"")]=n(t).default)}),e.default=i},"6EkZ":function(t,e){},"9CTF":function(t,e){},"EdF+":function(t,e){},Ejfi:function(t,e){},FTfW:function(t,e){},H24o:function(t,e){},LIEU:function(t,e){},NHnr:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("7+uW"),i=r("u2KI"),o=r.n(i),a=r("d7EF"),s=r.n(a),c=r("W3Iv"),l=r.n(c),u=r("Gu7T"),d=r.n(u),f={data:function(){return{rules:{required:function(t){return!!t||"This field is required"},number:function(t){return!isNaN(+t)||"This field must be a number"},commaString:function(t){var e="This field must be a well-formed comma delimitted string";if(t){var r=t.match(/(\d\s?)+(\s*,\s*(\d\s?)+)*/i);r&&(e=r[0].length==t.length||e)}return e},uniqueDefinitionIdentifiers:function(t){return store.state.model.definitions.reduce(function(t,e){return t.push.apply(t,d()(e.identiiers.split(",")))},[]).map(function(t){return t.trim()}).map(function(t){return t.toLowerCase()}).indexOf(t.toLowerCase().trim())<0||"Must not contain previous identifiers"}}}},filters:{shorten:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20;return t&&t.length>=e&&(t=t.slice(0,e-3)+"..."),t},decimal:function(t,e){return"string"==typeof t?(t=+t.replace(/[^\d.]/g,""),(t=isNaN(t)?0:parseFloat(t)).toFixed(e)):"number"==typeof t?t.toFixed(e):void 0},money:function(t){var e=t.toString().split(".");return e[0]=e[0].replace(/\B(?=(\d{3})+(?!\d))/g,", "),"$ "+e.join(".")},prefix:function(t,e){return e+""+t},postfix:function(t,e){return t+""+e},buyOrSell:function(t){return t.indexOf("-")>=0?"SELL "+t.replace("-",""):"BUY "+t}},methods:{saveFile:function(t,e){var r=URL.createObjectURL(t),n=document.createElement("a");n.style="display: none",document.body.appendChild(n),n.href=r,n.download=e,n.click(),document.body.removeChild(n)},loadFile:function(t,e,r){var n=document.createElement("input");l()(t).forEach(function(t){var e=s()(t,2),r=e[0],i=e[1];n.setAttribute(r,i)}),n.onchange=function(){var t=new FileReader;t.onloadstart,l()(e).forEach(function(e){var r=s()(e,2),n=r[0],i=r[1];t[n]=i}),n.files.length>0&&t[r](n.files[0])},n.click()}}},v=o()({TEXT:"readAsText",BINARY_STRING:"readAsBinaryString"}),m={mixins:[f],computed:{groupStatus:function(){var t=this.$store.state.model,e=t.groups.length,r=t.definitions.length,n=this.$store.getters["model/totalWeight"];return"Model: "+t.metaDetails.name+" Groups: "+e+" Definitions: "+r+" Weight: "+n.toFixed(2)+"%"},portfolioStatus:function(){var t=this.$store.state.portfolio.securities.length,e=this.$store.state.portfolio.securities.reduce(function(t,e){return t+e.market_value},0);return"Securities: "+t+" Portfolio: "+this.$options.filters.money(e)}}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-footer",{staticStyle:{"font-size":"11px"},attrs:{app:"",dark:""}},[e("v-spacer"),this._v("\n    "+this._s(this.groupStatus)+"\n    "),e("v-spacer"),this._v("\n    "+this._s(this.portfolioStatus)+"\n    "),e("v-spacer"),this._v("\n    test test test\n    "),e("v-spacer")],1)},staticRenderFns:[]},h={components:{"system-bar":r("VU/8")(m,p,!1,null,null,null).exports},name:"App",data:function(){return{drawer:null,text:"",items:[{heading:"Rebalance"},{icon:"fingerprint",text:"Model",path:"/model"},{icon:"attach_money",text:"Portfolio",path:"/portfolio"},{icon:"reply_all",text:"Full Rebalance",path:"/full-rebalance"},{divider:!0},{heading:"Other"},{icon:"settings",text:"Settings"},{icon:"help",text:"Help"}]}},computed:{snackbar:function(){return this.$store.state.notification},snackVisible:{get:function(){return this.$store.state.notification.visible},set:function(t){this.$store.commit("notification/hide",null)}}},methods:{hideSnack:function(){this.$store.commit("notification/hide",null)}}},_={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{attrs:{id:"app"}},[r("v-app",{attrs:{id:"inspire"}},[r("v-navigation-drawer",{staticClass:"grey lighten-4",attrs:{fixed:"",clipped:"",app:"",floating:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[r("v-list",{staticClass:"grey lighten-4",attrs:{dense:""}},[t._l(t.items,function(e,n){return[e.heading?r("v-layout",{key:n,attrs:{row:"","align-center":""}},[r("v-flex",{attrs:{xs6:""}},[e.heading?r("v-subheader",[t._v("\n                                "+t._s(e.heading)+"\n                            ")]):t._e()],1)],1):e.divider?r("v-divider",{key:n,attrs:{dark:""}}):r("v-list-tile",{key:n,on:{click:function(r){t.$router.push(e.path)}}},[r("v-list-tile-action",[r("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),r("v-list-tile-content",[r("v-list-tile-title",{staticClass:"grey--text"},[t._v("\n                                "+t._s(e.text)+"\n                            ")])],1)],1)]})],2)],1),t._v(" "),r("v-toolbar",{attrs:{app:"","clipped-left":""}},[r("v-toolbar-side-icon",{nativeOn:{click:function(e){t.drawer=!t.drawer}}}),t._v(" "),r("span",{staticClass:"title ml-3 mr-5"},[t._v("Rebalance")]),t._v(" "),r("v-spacer")],1),t._v(" "),r("v-content",[r("v-container",{staticClass:"grey lighten-4",attrs:{fluid:"","fill-height":""}},[r("v-layout",{attrs:{column:"","fill-height":""}},[r("v-fade-transition",[r("router-view")],1)],1)],1),t._v(" "),r("v-snackbar",{attrs:{timeout:t.snackbar.timeout,color:t.snackbar.color,bottom:"",right:"","multi-line":t.snackbar.multiline},model:{value:t.snackVisible,callback:function(e){t.snackVisible=e},expression:"snackVisible"}},[t._v("\n                "+t._s(t.snackbar.text)+"\n                "),r("v-btn",{attrs:{flat:""},on:{click:t.hideSnack}},[t._v("Close")])],1)],1),t._v(" "),r("system-bar")],1)],1)},staticRenderFns:[]};var g=r("VU/8")(h,_,!1,function(t){r("6EkZ")},null,null).exports,x=r("/ocq"),b=r("Dd8w"),y=r.n(b),k=r("woOf"),$=r.n(k),w={mixins:[f],props:{group:{type:Object,default:function(){return{name:"",tag:""}}}},data:function(){return{formHasErrors:!1}},methods:{clear:function(){this.$refs.form.reset()},submit:function(){if(this.$refs.form.validate()){var t=y()({},this.group);this.$store.commit("model/addOrUpdateGroup",t),this.$store.dispatch("notification/success"),this.clear()}}}},E={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("Add Group")]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",model:{value:t.formHasErrors,callback:function(e){t.formHasErrors=e},expression:"formHasErrors"}},[r("v-text-field",{ref:"name",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Name",placeholder:"Connected Wealth",required:""},model:{value:t.group.name,callback:function(e){t.$set(t.group,"name",e)},expression:"group.name"}}),t._v(" "),r("v-text-field",{ref:"tag",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Tag",placeholder:"Risky",required:""},model:{value:t.group.tag,callback:function(e){t.$set(t.group,"tag",e)},expression:"group.tag"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:t.clear}},[t._v("clear")]),t._v(" "),r("v-btn",{attrs:{disabled:!t.formHasErrors,color:"primary"},on:{click:t.submit}},[t._v("Add")])],1)],1)},staticRenderFns:[]};var S={mixins:[f],components:{"add-group":r("VU/8")(w,E,!1,function(t){r("EdF+")},null,null).exports},data:function(){return{dialog:!1,search:"",group:{},headers:[{text:"Name",align:"left",sortable:!0,value:"name"},{text:"Tag",align:"left",sortable:!0,value:"tag"},{text:"Actions",align:"left",value:"identifiers"}]}},computed:{items:function(){return this.$store.state.model.groups.map(function(t){return $()({},t)})}},methods:{editItem:function(t){this.group=y()({},t),this.dialog=!0},addItem:function(){this.group={},this.dialog=!0},deleteItem:function(t){this.$store.commit("model/deleteGroup",t.id)}}},C={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("\n        Groups\n        "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-card-text",[r("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(" "+t._s(t._f("shorten")(e.item.name))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.tag))+" ")]),t._v(" "),r("td",[r("v-icon",{attrs:{small:""},on:{click:function(r){t.editItem(e.item)}}},[t._v("edit")]),t._v(" "),e.item.default?t._e():r("v-icon",{attrs:{small:""},on:{click:function(r){t.deleteItem(e.item)}}},[t._v("delete")])],1)]}}])},[r("template",{slot:"no-data"},[t._v("\n                Your model is currently empty\n            ")]),t._v(" "),r("template",{slot:"no-results"},[t._v('\n                Your search for "'+t._s(t.search)+'" found no results.\n            ')])],2)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-btn",{attrs:{slot:"activator",color:"primary"},on:{click:t.addItem},slot:"activator"},[t._v("Add Item")]),t._v(" "),r("add-group",{attrs:{group:t.group}})],1)],1)],1)},staticRenderFns:[]};var I=r("VU/8")(S,C,!1,function(t){r("9CTF")},null,null).exports,V={mixins:[f],props:{definition:{type:Object,default:function(){return{name:"",category:"",weight:"",identifiers:""}}}},data:function(){return{formHasErrors:!1,group:{}}},computed:{groups:function(){return this.$store.state.model.groups},totalWeight:function(){return this.$store.getters["model/totalWeight"]}},beforeMount:function(){this.group=this.$store.state.model.groups[0]},methods:{clear:function(){this.$refs.form.reset(),this.$refs.group.selectItem(this.$store.state.model.groups[0])},submit:function(){if(this.$refs.form.validate()){var t=y()({},this.definition,{groupId:this.group.id});this.$store.commit("model/addOrUpdateDefinition",t),this.$store.dispatch("notification/success"),this.clear()}}}},O={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("Add Definition / "+t._s(t.totalWeight)+"%")]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",model:{value:t.formHasErrors,callback:function(e){t.formHasErrors=e},expression:"formHasErrors"}},[r("v-text-field",{ref:"name",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Name",placeholder:"Canada Natural Resources"},model:{value:t.definition.name,callback:function(e){t.$set(t.definition,"name",e)},expression:"definition.name"}}),t._v(" "),r("v-text-field",{ref:"category",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Category",placeholder:"Equity"},model:{value:t.definition.category,callback:function(e){t.$set(t.definition,"category",e)},expression:"definition.category"}}),t._v(" "),r("v-text-field",{ref:"weight",attrs:{autocomplete:"off",rules:[t.rules.required,t.rules.number],label:"Weight (%)",placeholder:"12.37"},model:{value:t.definition.weight,callback:function(e){t.$set(t.definition,"weight",e)},expression:"definition.weight"}}),t._v(" "),r("v-text-field",{ref:"identifiers",attrs:{autocomplete:"off",rules:[t.rules.required,t.rules.commaString],label:"CUSIPs",placeholder:"14231, 25342"},model:{value:t.definition.identifiers,callback:function(e){t.$set(t.definition,"identifiers",e)},expression:"definition.identifiers"}}),t._v(" "),r("v-select",{ref:"group",attrs:{items:t.groups,"item-text":"name","item-value":"id","return-object":"",label:"Group"},model:{value:t.group,callback:function(e){t.group=e},expression:"group"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:t.clear}},[t._v("clear")]),t._v(" "),r("v-btn",{attrs:{disabled:!t.formHasErrors,color:"primary"},on:{click:t.submit}},[t._v("Add")])],1)],1)},staticRenderFns:[]};var F={mixins:[f],components:{"add-definition":r("VU/8")(V,O,!1,function(t){r("/iDW")},null,null).exports},data:function(){return{dialog:!1,search:"",definition:{},headers:[{text:"Name",align:"left",sortable:!0,value:"name"},{text:"Category",align:"left",sortable:!0,value:"category"},{text:"Weight (%)",align:"left",sortable:!0,value:"weight"},{text:"Identifiers / CUSIPs",align:"left",sortable:!0,value:"identifiers"},{text:"Actions",align:"left",value:"identifiers"}]}},computed:{items:function(){return this.$store.getters["model/getDefinitions"].map(function(t){return $()({},t)})}},methods:{editItem:function(t){this.definition=y()({},t),this.dialog=!0},addItem:function(){this.definition={},this.dialog=!0},deleteItem:function(t){this.$store.commit("model/deleteDefinition",t.id)}}},R={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("\n        Definitions\n        "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-card-text",[r("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(" "+t._s(t._f("shorten")(e.item.name))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.category))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("decimal")(e.item.weight,2))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.identifiers))+" ")]),t._v(" "),r("td",[r("v-icon",{attrs:{small:""},on:{click:function(r){t.editItem(e.item)}}},[t._v("edit")]),t._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(r){t.deleteItem(e.item)}}},[t._v("delete")])],1)]}}])},[r("template",{slot:"no-data"},[t._v("\n                Your model is currently empty\n            ")]),t._v(" "),r("template",{slot:"no-results"},[t._v('\n                Your search for "'+t._s(t.search)+'" found no results.\n            ')])],2)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-btn",{attrs:{slot:"activator",color:"primary"},on:{click:t.addItem},slot:"activator"},[t._v("Add Item")]),t._v(" "),r("add-definition",{attrs:{definition:t.definition}})],1)],1)],1)},staticRenderFns:[]};var P={mixins:[f],data:function(){return{name:"",author:"",formHasErrors:!1}},methods:{clear:function(){this.$refs.form.reset()},loadModel:function(){var t=this,e={onabort:function(){t.$store.dispatch("notification/error")},onerror:function(){t.$store.dispatch("notification/error")},onload:function(e){try{t.$store.commit("model/deserialize",e.target.result),t.name=t.$store.state.model.metaDetails.name,t.author=t.$store.state.model.metaDetails.author,t.$store.dispatch("notification/success")}catch(e){t.$store.dispatch("notification/error")}}};this.loadFile({type:"file",accept:".model"},e,v.TEXT)},saveModel:function(){if(this.$refs.form.validate()){this.submit();var t=this.name.replace(/[^A-Z0-9\-]/gi,"").toLowerCase()+".model",e=this.$store.getters["model/serialize"],r=new Blob([e],{type:"application/text"});this.saveFile(r,t)}},submit:function(){var t=new Date,e={name:this.name,author:this.author,createdAt:t.toString()};this.$store.commit("model/updateMetaDetails",e)}}},A={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("Model Details")]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",model:{value:t.formHasErrors,callback:function(e){t.formHasErrors=e},expression:"formHasErrors"}},[r("v-text-field",{ref:"name",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Name",placeholder:"Untitled-1",required:""},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}}),t._v(" "),r("v-text-field",{ref:"author",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Author",placeholder:"Anonymous",required:""},model:{value:t.author,callback:function(e){t.author=e},expression:"author"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:t.clear}},[t._v("clear")]),t._v(" "),r("v-btn",{attrs:{flat:"",color:"primary"},on:{click:t.loadModel}},[t._v("Load")]),t._v(" "),r("v-btn",{attrs:{disabled:!t.formHasErrors,color:"primary"},on:{click:t.saveModel}},[t._v("Save")])],1)],1)},staticRenderFns:[]};var j={components:{"definition-table":r("VU/8")(F,R,!1,function(t){r("FTfW")},null,null).exports,"group-table":I,"model-add-details":r("VU/8")(P,A,!1,function(t){r("H24o")},null,null).exports}},H={render:function(){var t=this.$createElement,e=this._self._c||t;return e("v-container",{attrs:{"grid-list-md":""}},[e("v-layout",{attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},[e("model-add-details")],1),this._v(" "),e("v-flex",{attrs:{xs12:""}},[e("group-table")],1),this._v(" "),e("v-flex",{attrs:{xs12:""}},[e("definition-table")],1)],1)],1)},staticRenderFns:[]};var N=r("VU/8")(j,H,!1,function(t){r("Ejfi")},null,null).exports,U=r("uXZL"),D={mixins:[f],props:{security:{type:Object,default:function(){return{name:"",account:"",security:"",symbol:"",cusip:"",market_value:"",book_value:""}}}},data:function(){return{formHasErrors:!1}},methods:{clear:function(){this.$refs.form.reset()},submit:function(){if(this.$refs.form.validate()){var t=y()({},this.security);this.$store.commit("portfolio/addOrUpdateSecurity",t),this.$store.dispatch("notification/success"),this.clear()}}}},q={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("Add Security")]),t._v(" "),r("v-card-text",[r("v-form",{ref:"form",model:{value:t.formHasErrors,callback:function(e){t.formHasErrors=e},expression:"formHasErrors"}},[r("v-text-field",{ref:"name",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Owner",placeholder:"Bruce Wayne"},model:{value:t.security.name,callback:function(e){t.$set(t.security,"name",e)},expression:"security.name"}}),t._v(" "),r("v-text-field",{ref:"account",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Account",placeholder:"55ZZZ88A"},model:{value:t.security.account,callback:function(e){t.$set(t.security,"account",e)},expression:"security.account"}}),t._v(" "),r("v-text-field",{ref:"security",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Security",placeholder:"Wayne Industries"},model:{value:t.security.security,callback:function(e){t.$set(t.security,"security",e)},expression:"security.security"}}),t._v(" "),r("v-text-field",{ref:"symbol",attrs:{autocomplete:"off",rules:[t.rules.required],label:"Symbol",placeholder:"WAYNE"},model:{value:t.security.symbol,callback:function(e){t.$set(t.security,"symbol",e)},expression:"security.symbol"}}),t._v(" "),r("v-text-field",{ref:"cusip",attrs:{autocomplete:"off",rules:[t.rules.required,t.rules.number],label:"CUSIP",placeholder:"14231"},model:{value:t.security.cusip,callback:function(e){t.$set(t.security,"cusip",e)},expression:"security.cusip"}}),t._v(" "),r("v-text-field",{ref:"book_value",attrs:{autocomplete:"off",rules:[t.rules.required,t.rules.number],label:"Book Value ($)",placeholder:"12456.22"},model:{value:t.security.book_value,callback:function(e){t.$set(t.security,"book_value",e)},expression:"security.book_value"}}),t._v(" "),r("v-text-field",{ref:"market_value",attrs:{autocomplete:"off",rules:[t.rules.required,t.rules.number],label:"Market Value ($)",placeholder:"24567.33"},model:{value:t.security.market_value,callback:function(e){t.$set(t.security,"market_value",e)},expression:"security.market_value"}})],1)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:t.clear}},[t._v("clear")]),t._v(" "),r("v-btn",{attrs:{disabled:!t.formHasErrors,color:"primary"},on:{click:t.submit}},[t._v("Add")])],1)],1)},staticRenderFns:[]};var W=r("VU/8")(D,q,!1,function(t){r("smJH")},null,null).exports,M={mixins:[f],components:{"add-security":W},data:function(){return{dialog:!1,search:"",security:{},headers:[{text:"Owner",align:"left",sortable:!0,value:"name"},{text:"Account",align:"left",sortable:!0,value:"account"},{text:"Security",align:"left",sortable:!0,value:"security"},{text:"Symbol",align:"left",sortable:!0,value:"symbol"},{text:"CUSIP",align:"left",sortable:!0,value:"cusip"},{text:"Book Value ($)",align:"left",value:"book_value"},{text:"Market Value ($)",align:"left",value:"market_value"},{text:"Actions",align:"left",value:"market_value"}]}},computed:{items:function(){return this.$store.getters["portfolio/getSecurities"].map(function(t){return $()({},t)})}},methods:{editItem:function(t){this.security=y()({},t),this.dialog=!0},addItem:function(){this.security={},this.dialog=!0},deleteItem:function(t){this.$store.commit("portfolio/deleteSecurity",t.id)},load:function(){var t=this,e={onabort:function(){t.$store.dispatch("notification/error")},onerror:function(){t.$store.dispatch("notification/error")},onload:function(e){try{var r=e.target.result,n=U.read(r,{type:"binary"}),i=n.Sheets[n.SheetNames[0]];t.$store.dispatch("portfolio/parseWorksheet",i),t.$store.dispatch("notification/success")}catch(e){t.$store.dispatch("notification/error")}}};this.loadFile({type:"file",accept:".xlsx"},e,v.BINARY_STRING)}}},T={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-title",[t._v("\n        Securities\n        "),r("v-spacer"),t._v(" "),r("v-text-field",{attrs:{"append-icon":"search",label:"Search","single-line":"","hide-details":""},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),r("v-card-text",[r("v-data-table",{attrs:{headers:t.headers,items:t.items,search:t.search},scopedSlots:t._u([{key:"items",fn:function(e){return[r("td",[t._v(" "+t._s(t._f("shorten")(e.item.name))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.account))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.security))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.symbol))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.cusip))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.book_value))+" ")]),t._v(" "),r("td",[t._v(" "+t._s(t._f("shorten")(e.item.market_value))+" ")]),t._v(" "),r("td",[r("v-icon",{attrs:{small:""},on:{click:function(r){t.editItem(e.item)}}},[t._v("edit")]),t._v(" "),r("v-icon",{attrs:{small:""},on:{click:function(r){t.deleteItem(e.item)}}},[t._v("delete")])],1)]}}])},[r("template",{slot:"no-data"},[t._v("\n                Your model is currently empty\n            ")]),t._v(" "),r("template",{slot:"no-results"},[t._v('\n                Your search for "'+t._s(t.search)+'" found no results.\n            ')])],2)],1),t._v(" "),r("v-card-actions",[r("v-spacer"),t._v(" "),r("v-btn",{attrs:{flat:""},on:{click:t.load}},[t._v("Load")]),t._v(" "),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-btn",{attrs:{slot:"activator",color:"primary"},on:{click:t.addItem},slot:"activator"},[t._v("Add Item")]),t._v(" "),r("add-security",{attrs:{security:t.security}})],1)],1)],1)},staticRenderFns:[]};var L={components:{"security-table":r("VU/8")(M,T,!1,function(t){r("LIEU")},null,null).exports},data:function(){return{excelData:Object}},methods:{}},Y={render:function(){var t=this.$createElement;return(this._self._c||t)("security-table")},staticRenderFns:[]},G=r("VU/8")(L,Y,!1,null,null,null).exports,Z={mixins:[f],props:{account:Object}},z={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-card",[r("v-card-text",{staticClass:"text-xs-center"},[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(t.account.account)+" - "+t._s(t.account.type))]),t._v(" "),r("h4",[t._v(t._s(t.account.name))])]),t._v(" "),r("v-divider",{staticClass:"mx-3"}),t._v(" "),r("v-card-text",{staticClass:"text-xs-center"},[r("h3",{staticClass:"headline mb-0"},[t._v(t._s(t._f("money")(t._f("decimal")(t.account.value,2))))])])],1)},staticRenderFns:[]},B=r("VU/8")(Z,z,!1,null,null,null).exports,K=r("Zrlr"),J=r.n(K),X=r("wxAW"),Q=r.n(X),tt=r("gRE1"),et=r.n(tt);var rt=function(){function t(e,r,n,i,o){var a=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;J()(this,t),this._security=e,this._cusip=r,this._portfolioValue=n,this._marktet_value=i,this._targetPercent=o,this._thresholdPercent=a}return Q()(t,[{key:"security",get:function(){return this._security}},{key:"cusip",get:function(){return this._cusip}},{key:"targetValue",get:function(){return this._portfolioValue*(this._targetPercent/100)}},{key:"currentValue",get:function(){return this._marktet_value}},{key:"proposedValue",get:function(){return(100-this._thresholdPercent)/100*this.targetValue}},{key:"differenceValue",get:function(){return this.proposedValue-this.currentValue}},{key:"targetPercent",get:function(){return this._targetPercent}},{key:"currentPercent",get:function(){return this._marktet_value/this._portfolioValue*100}},{key:"proposedPercent",get:function(){return this.proposedValue/this._portfolioValue*100}},{key:"differencePercent",get:function(){return this.targetPercent-this.currentPercent}}]),t}(),nt={mixins:[f],components:{"add-security":W},props:["threshold"],computed:{items:function(){var t=this.$store.getters["portfolio/getSecurities"],e=this.$store.getters["model/getDefinitions"];isNaN(+this.threshold);return function(t,e){var r=t.unmatched.map(function(r){return new rt(r.security,r.cusip,t.portfolioValue,r.market_value,0,e)}),n=et()(t.matches).map(function(r){var n=r.matches.reduce(function(t,e){return t+e.market_value},0);return new rt(r.definition.name,r.definition.identifiers,t.portfolioValue,n,r.expectedWeight,e)});return[].concat(d()(n),d()(r))}(function(t,e){var r={};t.forEach(function(t){r[t.id]={definition:t,expectedWeight:t.weight,matches:function(t,e){var r=t.identifiers.toLowerCase().split(",").map(function(t){return t.trim()});return e.filter(function(t){return r.indexOf(t.cusip.toString().toLowerCase().trim())>=0})}(t,e)}});var n=function(t){return t.reduce(function(t,e){return t+e.market_value},0)}(e),i=et()(r).reduce(function(t,e){return t.concat(e.matches)},[]),o=e.filter(function(t){return i.indexOf(t)<0});return{portfolioValue:n,matches:r,matched:i,unmatched:o}}(e,t),parseFloat(this.threshold))}},methods:{tryParse:function(t){}}},it={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-data-iterator",{attrs:{items:t.items,"content-tag":"v-layout",row:"",wrap:""},scopedSlots:t._u([{key:"item",fn:function(e){return r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-card-title",[r("h4",[t._v(t._s(e.item.security))])]),t._v(" "),r("v-divider"),t._v(" "),r("v-list",{attrs:{dense:""}},[r("v-list-tile",[r("v-list-tile-content",[t._v("CUSIPs:")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("shorten")(e.item.cusip,100)))])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-content",[t._v("Target Value ($):")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("money")(t._f("decimal")(e.item.targetValue,2))))])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-content",[t._v("Current Value ($):")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("money")(t._f("decimal")(e.item.currentValue,2))))])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-content",[t._v("Proposed Value ($):")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("money")(t._f("decimal")(e.item.proposedValue,2))))])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-content",[t._v("Difference Value ($):")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("buyOrSell")(t._f("money")(t._f("decimal")(e.item.differenceValue,2)))))])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-content",[t._v("Target Percent (%):")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("postfix")(t._f("decimal")(e.item.targetPercent,2)," %")))])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-content",[t._v("Current Percent (%):")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("postfix")(t._f("decimal")(e.item.currentPercent,2)," %")))])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-content",[t._v("Proposed Percent (%):")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("postfix")(t._f("decimal")(e.item.proposedPercent,2)," %")))])],1),t._v(" "),r("v-list-tile",[r("v-list-tile-content",[t._v("Difference Percent (%):")]),t._v(" "),r("v-list-tile-content",{staticClass:"align-end"},[t._v(t._s(t._f("postfix")(t._f("decimal")(e.item.differencePercent,2)," %")))])],1)],1)],1)],1)}}])})],1)},staticRenderFns:[]};var ot={mixins:[{computed:{accounts:function(){var t=this,e=this.$store.state.portfolio.securities.map(function(t){return t.account}).filter(function(t,e,r){return r.indexOf(t)===e}).map(function(e){return t.accountSummary(e)});return e},modelIsComplete:function(){return 100===this.$store.getters["model/totalWeight"]}},methods:{accountSummary:function(t){var e=this.$store.state.portfolio.securities.filter(function(e){return e.account===t}),r=e.reduce(function(t,e){return t+e.market_value},0),n=e[0].name,i=this.getAccountType(t);return{account:t,value:r,name:n,type:i}},getAccountType:function(t){var e="unknown",r=t.charAt(t.length-1).toLowerCase();return"ae".indexOf(r)>=0?e="Non Reg":"r"==r?e="RSP":"s"==r?e="Spousal":"v"==r?e="LIRA":"t"==r?e="RIF":"j"==r?e="TFSA":"w"==r?e="LIF":"u"==r?e="Spousal RIF":"b"==r?e="USD":"z"==r&&(e="RESP"),e}}},f],components:{"account-summary":B,"trades-table":r("VU/8")(nt,it,!1,function(t){r("YKHr")},null,null).exports},data:function(){return{threshold:0}}},at={render:function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-container",{attrs:{fluid:"","grid-list-md":""}},[r("v-layout",{attrs:{row:"",wrap:""}},[r("v-flex",{attrs:{xs12:""}},[r("v-card",[r("v-card-title",[t._v("\n                    Rebalance Paramaters\n                    "),r("v-spacer"),t._v(" "),r("v-text-field",{ref:"threshold",attrs:{autocomplete:"off",rules:[t.rules.required,t.rules.number],label:"Threshold Target (%)",placeholder:"0.0"},model:{value:t.threshold,callback:function(e){t.threshold=e},expression:"threshold"}})],1)],1)],1)],1),t._v(" "),r("v-layout",{attrs:{row:"",wrap:""}},t._l(t.accounts,function(t,e){return r("v-flex",{key:e,attrs:{xs12:"",sm6:"",md4:"",lg3:"",xl2:""}},[r("account-summary",{attrs:{account:t}})],1)})),t._v(" "),r("v-layout",{attrs:{row:"",wrap:"","justify-center":""}},[r("v-flex",{attrs:{xs12:""}},[r("trades-table",{staticClass:"ma-0 pa-0",attrs:{threshold:t.threshold}})],1)],1)],1)},staticRenderFns:[]};var st=r("VU/8")(ot,at,!1,function(t){r("npMD")},null,null).exports;n.default.use(x.a);var ct=new x.a({routes:[{path:"/model",name:"Model",component:N},{path:"/portfolio",name:"Portfolio",component:G},{path:"/full-rebalance",name:"Full Rebalance",component:st},{path:"*",redirect:"/model"}]}),lt=r("NYxO"),ut=r("2mV7");n.default.use(lt.a);var dt=new lt.a.Store({modules:ut.default,strict:!1}),ft=r("3EgV"),vt=r.n(ft);r("QCv7");n.default.config.productionTip=!1,n.default.use(vt.a),new n.default({el:"#app",router:ct,store:dt,components:{App:g},template:"<App/>"})},QCv7:function(t,e){},YKHr:function(t,e){},ZNKM:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("mvHQ"),i=r.n(n),o=r("woOf"),a=r.n(o),s=r("fZjL"),c=r.n(s),l=r("okRc"),u=r("/5sW"),d={metaDetails:{version:"1.0.0"},groups:[{id:Object(l.c)(),name:"none",tag:"ungrouped",default:!0}],definitions:[]},f={updateMetaDetails:function(t,e){c()(e).forEach(function(r){u.a.set(t.metaDetails,r,e[r])})},addOrUpdateGroup:function(t,e){Object(l.d)(e),Object(l.b)(t.groups,e)},deleteGroup:function(t,e){var r=t.groups.find(function(t){return t.default}).id,n=t.groups.find(function(t){return t.id===e});if(n&&n.id!=r){var i=t.groups.indexOf(n);t.groups.splice(i,1),t.definitions.forEach(function(t){return t.groupId=r})}},addOrUpdateDefinition:function(t,e){Object(l.d)(e),function(t,e){var r=t.find(function(t){return t.id===e.groupId})||t.find(function(t){return!0===t.default});e.groupId=r.id}(t.groups,e),Object(l.b)(t.definitions,e)},deleteDefinition:function(t,e){var r=t.definitions.find(function(t){return t.id===e});r>=0&&t.definitions.splice(r,1)},deserialize:function(t,e){var r=JSON.parse(atob(e));t.metaDetails=r.metaDetails,t.groups=r.groups,t.definitions=r.definitions}},v={getDefinitions:function(t){return t.definitions.map(function(t){return a()({},t)})},getGroups:function(t){return t.groups.map(function(t){return a()({},t)})},totalWeight:function(t){return t.definitions.reduce(function(t,e){return t+function(t){var e=t.weight||0;"string"==typeof t.weight&&(e=+t.weight.replace(/[^\d.]/g,""),e=isNaN(e)?0:parseFloat(e));return e}(e)},0)},serialize:function(t){return btoa(i()(t))}};e.default={namespaced:!0,state:d,mutations:f,actions:{},getters:v}},gNcp:function(t,e,r){var n={"./index.js":"2mV7","./model.js":"ZNKM","./notification.js":"z9hz","./portfolio.js":"lH/M"};function i(t){return r(o(t))}function o(t){var e=n[t];if(!(e+1))throw new Error("Cannot find module '"+t+"'.");return e}i.keys=function(){return Object.keys(n)},i.resolve=o,t.exports=i,i.id="gNcp"},"lH/M":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("okRc"),i=r("W3Iv"),o=r.n(i),a=r("d7EF"),s=r.n(a),c=r("Xxa5"),l=r.n(c),u=l.a.mark(d);function d(t){var e,r,n,i,o=this;return l.a.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:e=v(t),r=f(m(t),e),n=l.a.mark(function t(e){return l.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,r.filter(function(t){return t.address.row===e});case 2:case"end":return t.stop()}},t,o)}),i=e.lower.row+1;case 4:if(!(i<e.upper.row)){a.next=9;break}return a.delegateYield(n(i),"t0",6);case 6:i++,a.next=4;break;case 9:return a.abrupt("return");case 10:case"end":return a.stop()}},u,this)}function f(t,e){var r=t.filter(function(t){return t.address.row===e.lower.row}),n=t.filter(function(t){return t.address.row!==e.lower.row}),i={};return r.forEach(function(t){return i[t.address.col]=t}),n.map(function(t){return t.header=i[t.address.col],t})}function v(t){var e=t["!ref"].split(":"),r=s()(e,2),n=r[0],i=r[1];return{text:t["!ref"],lower:p(n),upper:p(i)}}function m(t){return o()(t).filter(function(t){var e=s()(t,2),r=e[0];e[1];return!r.includes("!")}).map(function(t){var e=s()(t,2),r=e[0],n=e[1];return n.address=p(r),n}).sort(function(t,e){return t.address.text-e.address.text})}function p(t){return{text:t,col:function(t){return t.replace(/[0-9]/g,"").split("").map(function(t){return t.toLowerCase().charCodeAt(0)-"a".charCodeAt(0)}).reduce(function(t,e){return t+e},0)}(t),row:function(t){return parseInt(t.replace(/[a-z]/gi,""))-1}(t)}}var h=r("/5sW"),_={securities:[]},g={addOrUpdateSecurity:function(t,e){Object(n.d)(e),Object(n.a)(e),function(t,e){var r=t.securities.filter(function(t){return t.account===e.account}).filter(function(t){return t.cusip===e.cusip}).filter(function(t){return t.id!==e.id}).pop();r&&(h.a.set(r,"quantity",r.quantity+e.quantity),h.a.set(r,"book_value",r.book_value+e.book_value),h.a.set(r,"market_value",r.market_value+e.market_value));return!!r}(t,e)||Object(n.b)(t.securities,e)},clear:function(){_.securities=[]},deleteSecurity:function(t,e){var r=t.securities.find(function(t){return t.id===e});if(r){var n=t.securities.indexOf(r);t.securities.splice(n,1)}}},x={parseWorksheet:function(t,e){t.commit("clear");for(var r=d(e),n=r.next();!n.done;)t.dispatch("parseRow",n.value),n=r.next()},parseRow:function(t,e){var r={};e.forEach(function(e){var n=void 0;switch(e.t){case"n":n=parseFloat(e.v);break;case"s":n=e.v;break;default:n=""}r[e.header.v.toLowerCase().trim().replace(" ","_")]=n,r.cusip&&t.commit("addOrUpdateSecurity",r)})}};e.default={namespaced:!0,state:_,mutations:g,actions:x,getters:{getSecurities:function(t){return t.securities},getPortfolioValue:function(t){return t.securities.reduce(function(t,e){return t+e.market_value},0)},getAccountNumbers:function(t){return t.securities.map(function(t){return t.account}).filter(function(t,e,r){return r.indexOf(t)===e})}}}},npMD:function(t,e){},okRc:function(t,e,r){"use strict";e.c=a,e.b=function(t,e){var r=t.find(function(t){return t.id===e.id});r?i()(e).forEach(function(t){return o.a.set(r,t,e[t])}):t.push(e)},e.d=function(t){t.id=t.id||a()},e.a=function(t){i()(t).forEach(function(e){if("string"==typeof t[e]&&!/[^\d.-]/gi.test(t[e])){var r=parseFloat(t[e]);t[e]=isNaN(r)?0:r}})};var n=r("fZjL"),i=r.n(n),o=r("/5sW");function a(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(t){var e=16*Math.random()|0;return("x"==t?e:3&e|8).toString(16)})}},smJH:function(t,e){},z9hz:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.default={namespaced:!0,state:{text:"I'm a snackbar!",color:"green",visible:!1,multiline:!1,timeout:3e3},mutations:{show:function(t,e){t.text=e.text||"Hi there!",t.color=e.color||"primary",t.timeout=e.timeout||t.timeout,t.multiline=e.text>50,t.visible=!0},hide:function(t,e){t.visible&&(t.visible=!1)}},actions:{defaultSnack:function(t,e){var r=e.text;t.commit("show",{text:r})},warn:function(t,e){var r=e.text;t.commit("show",{text:r,color:"warning"})},info:function(t,e){var r=e.text;t.commit("show",{text:r,color:"info"})},error:function(t){t.commit("show",{text:"Error!",color:"error"})},success:function(t){t.commit("show",{text:"Success!",color:"success"})}},getters:{}}}},["NHnr"]);
//# sourceMappingURL=app.f2761061f597422f05c1.js.map