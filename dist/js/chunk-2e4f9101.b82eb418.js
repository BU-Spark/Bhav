(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2e4f9101"],{"0135":function(t,e,i){},2909:function(t,e,i){"use strict";function a(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}i.d(e,"a",(function(){return n}));i("a4d3"),i("e01a"),i("d28b"),i("a630"),i("e260"),i("d3b7"),i("25f0"),i("3ca3"),i("ddb0");function s(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function l(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function n(t){return a(t)||s(t)||l()}},"9c22":function(t,e,i){"use strict";i.r(e);var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("main",[i("div",{staticClass:"container"},[i("div",{staticClass:"jumbotron"},[i("h4",{staticClass:"mb-3"},[t._v("User Profile")]),i("h6",{staticClass:"mb-3"},[t._v("All Text Fields are Required")]),i("form",[i("div",{staticClass:"container"},[void 0==this.picStat?i("div",{staticClass:"uploader d-flex flex-column justify-content-center align-items-center rounded"},[i("p",[t._v(t._s(t.imageText))]),i("input",{attrs:{id:"filePhoto",type:"file",accept:"image/*"},on:{change:function(e){return t.onFileChanged(e)}}})]):i("div",{staticStyle:{"text-align":"center"}},[i("img",{staticClass:"round img",attrs:{src:t.user.profilePic[0]}}),i("span",{staticClass:" btn text-muted",on:{click:function(e){return t.deleteProfilePic()}}},[t._v("Remove")])])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-auto mb-3"},[i("label",{attrs:{for:"username"}},[t._v("Username")]),i("div",{staticClass:"input-group"},[t._m(0),i("input",{directives:[{name:"model",rawName:"v-model",value:t.uname,expression:"uname"}],staticClass:"form-control",attrs:{type:"text",id:"username",onpaste:"return false"},domProps:{value:t.uname},on:{input:[function(e){e.target.composing||(t.uname=e.target.value)},function(e){return t.checkAvailability()}]}}),i("div",{staticClass:"availability"},[t.unameempty?i("i",{staticClass:"material-icons red"},[t._v("close")]):t.available?i("i",{staticClass:"material-icons green"},[t._v("check")]):t.unavailable?i("i",{staticClass:"material-icons red"},[t._v("close")]):t._e()])]),t.unameempty?i("p",{staticClass:"red availability"},[t._v("Enter a Username")]):t.available?i("p",{staticClass:"green availability"},[t._v(" Username available! ")]):t.unavailable?i("p",{staticClass:"red availability"},[t._v(" Username unavailable! ")]):t._e()])]),i("div",{staticClass:"mb-3"},[i("label",{attrs:{for:"bio"}},[t._v("Short Introduction")]),i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.bio,expression:"bio"}],staticClass:"form-control",attrs:{rows:"5",id:"bio"},domProps:{value:t.bio},on:{input:function(e){e.target.composing||(t.bio=e.target.value)}}})]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4 mb-3"},[i("label",{attrs:{for:"city"}},[t._v("City")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",id:"city"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}})]),i("div",{staticClass:"col-md-4 mb-3"},[i("label",{attrs:{for:"state"}},[t._v("State")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.stt,expression:"stt"}],staticClass:"form-control",attrs:{type:"text",id:"state"},domProps:{value:t.stt},on:{input:function(e){e.target.composing||(t.stt=e.target.value)}}})]),i("div",{staticClass:"col-md-4 mb-3"},[i("label",{attrs:{for:"country"}},[t._v("Country")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.country,expression:"country"}],staticClass:"form-control",attrs:{type:"text",id:"country"},domProps:{value:t.country},on:{input:function(e){e.target.composing||(t.country=e.target.value)}}})])]),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-4 mb-3"},[i("label",{attrs:{for:"number"}},[t._v("Phone Number")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.number,expression:"number"}],staticClass:"form-control",attrs:{type:"text",id:"number"},domProps:{value:t.number},on:{input:function(e){e.target.composing||(t.number=e.target.value)}}})]),i("div",{staticClass:"col-md-4 mb-3"},[i("label",{attrs:{for:"affiliation"}},[t._v("Current Affiliation")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.affiliation,expression:"affiliation"}],staticClass:"form-control",attrs:{type:"text",id:"affiliation",placeholder:"University/College/Company"},domProps:{value:t.affiliation},on:{input:function(e){e.target.composing||(t.affiliation=e.target.value)}}})])]),i("h6",{staticClass:"mb-3"},[t._v("Disabilities")]),t._l(t.disabilities,(function(e){return i("p",{key:e.id},[i("span",{staticClass:"members"},[t._v(t._s(e))])])})),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-auto"},[i("label",{attrs:{for:"member"}},[t._v("Disability")]),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.disability,expression:"disability"}],staticClass:"form-control",attrs:{type:"text",id:"tag",onpaste:"return false"},domProps:{value:t.disability},on:{input:[function(e){e.target.composing||(t.disability=e.target.value)},function(e){return t.checkDisability()}]}}),i("button",{staticClass:"btn",attrs:{disabled:t.disabilityempty||t.disabilityregd},on:{click:function(e){return e.preventDefault(),t.addDisability()}}},[t._v(" Add ")]),i("div",{staticClass:"availability"},[t.disabilityempty||t.disabilityregd?i("i",{staticClass:"material-icons red"},[t._v("close")]):t.disabilitysuccess?i("i",{staticClass:"material-icons green"},[t._v("check")]):t._e()])]),t.disabilityempty?i("p",{staticClass:"red availability"},[t._v(" Enter a Disability ")]):t.disabilityregd?i("p",{staticClass:"red availability"},[t._v(" Disability already added! ")]):t.disabilitysuccess?i("p",{staticClass:"green availability"},[t._v(" Add Disability! ")]):t._e()])]),i("br"),i("h6",{staticClass:"mb-3"},[t._v("Skills")]),t._l(t.skills,(function(e){return i("p",{key:e.id},[i("span",{staticClass:"members"},[t._v(t._s(e))])])})),i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-auto"},[i("label",{attrs:{for:"member"}},[t._v("Skill")]),i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.skill,expression:"skill"}],staticClass:"form-control",attrs:{type:"text",id:"tag",onpaste:"return false"},domProps:{value:t.skill},on:{input:[function(e){e.target.composing||(t.skill=e.target.value)},function(e){return t.checkSkill()}]}}),i("button",{staticClass:"btn",attrs:{disabled:t.skillempty||t.skillregd},on:{click:function(e){return e.preventDefault(),t.addSkill()}}},[t._v(" Add ")]),i("div",{staticClass:"availability"},[t.skillempty||t.skillregd?i("i",{staticClass:"material-icons red"},[t._v("close")]):t.skillsuccess?i("i",{staticClass:"material-icons green"},[t._v("check")]):t._e()])]),t.skillempty?i("p",{staticClass:"red availability"},[t._v("Enter a Skill")]):t.skillregd?i("p",{staticClass:"red availability"},[t._v(" Skill already added! ")]):t.skillsuccess?i("p",{staticClass:"green availability"},[t._v(" Add Skill! ")]):t._e()])]),i("hr",{staticClass:"mb-4"})],2),i("button",{staticClass:"btn btn-primary btn-lg btn-block col-md-3",attrs:{disabled:t.unavailable||t.unameempty,type:"submit"},on:{click:function(e){t.updateProfile()&&t.checkAvailability()}}},[t._v(" Update ")]),t.fieldempty?i("p",{staticClass:"red availability"},[t._v(" Please fill in all data! ")]):t._e()])]),i("hr",{staticClass:"featurette-divider"}),i("footer",{staticClass:"container"},[t._m(1),i("p",[t._v(" © 2018 Humanistic Co-Design Initiative · "),i("a",[i("router-link",{attrs:{to:{name:"privacy"}}},[t._v("Privacy")])],1)])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"input-group-prepend"},[i("span",{staticClass:"input-group-text"},[t._v("@")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("p",{staticClass:"float-right"},[i("a",{attrs:{href:"#"}},[t._v("Back to top")])])}],l=(i("99af"),i("7db0"),i("b0c0"),i("2909")),n=(i("96cf"),i("1da1")),r=i("59ca"),c=i.n(r),o=i("032d"),u={name:"editprofile",computed:{user:function(){return this.$store.state.user}},methods:{updateProfile:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!=t.bio&&void 0!=t.city&&void 0!=t.stt&&void 0!=t.country&&void 0!=t.number&&void 0!=t.affiliation){e.next=5;break}return t.fieldempty=!0,e.abrupt("return");case 5:return i=o["c"].collection("users").doc(t.user.uid),e.next=8,i.update({bio:t.bio,city:t.city,stt:t.stt,country:t.country,number:t.number,affiliation:t.affiliation,uname:t.uname,tags:[t.city,t.stt,t.country,t.affiliation,t.uname].concat(Object(l["a"])(t.disabilities),Object(l["a"])(t.skills))});case 8:t.$router.push({name:"profile",params:{uname:t.uname}});case 9:case"end":return e.stop()}}),e)})))()},deleteProfilePic:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i,a,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=o["c"].collection("users").doc(t.user.uid),a=c.a.storage().ref(),s=a.child(t.user.profilePic[1]),s.delete().then((function(){})).catch((function(){})),e.next=6,i.update({profilePic:c.a.firestore.FieldValue.delete()});case 6:location.reload();case 7:case"end":return e.stop()}}),e)})))()},onFileChanged:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function i(){var a,s,l,n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return e.image=t.target.files[0],e.imageText="Uploading...",e.fileName=Date.now(),e.storagePath="profiles/"+e.user.uname+"/"+e.fileName,a=c.a.storage().ref(),s=a.child(e.storagePath),i.next=8,s.put(e.image).then((function(){e.imageText=t.target.files[0].name+" Uploaded!",e.picStat=!0}));case 8:return i.next=10,s.getDownloadURL();case 10:return l=i.sent,n=o["c"].collection("users").doc(e.user.uid),i.next=14,n.update({profilePic:[l,e.storagePath]});case 14:location.reload();case 15:case"end":return i.stop()}}),i)})))()},checkAvailability:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(void 0!=t.uname){e.next=4;break}t.unameempty=!0,e.next=8;break;case 4:return e.next=6,o["c"].collection("users").where("uname","==",t.uname).get();case 6:i=e.sent,null==t.uname||""==t.uname?t.unameempty=!0:i.empty||i.docs[0].data().uname==t.user.uname?(t.available=!0,t.unameempty=!1,t.unavailable=!1):(t.available=!1,t.unameempty=!1,t.unavailable=!0);case 8:case"end":return e.stop()}}),e)})))()},checkDisability:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=t.disabilities.find((function(e){return e==t.disability})),null==t.disability||""==t.disability?t.disabilityempty=!0:void 0==i?(t.disabilityempty=!1,t.disabilityregd=!1,t.disabilitysuccess=!0):void 0!=i&&(t.disabilityempty=!1,t.disabilityregd=!0,t.disabilitysuccess=!1);case 2:case"end":return e.stop()}}),e)})))()},addDisability:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=o["c"].collection("users").doc(t.user.uid),t.disabilities=t.user.disabilities,!t.disabilitysuccess){e.next=10;break}return t.disabilities.push(t.disability),e.next=6,i.update({disabilities:t.disabilities});case 6:t.disability=null,t.disabilitysuccess=null,e.next=11;break;case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e)})))()},checkSkill:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:i=t.skills.find((function(e){return e==t.skill})),null==t.skill||""==t.skill?t.skillempty=!0:void 0==i?(t.skillempty=!1,t.skillregd=!1,t.skillsuccess=!0):void 0!=i&&(t.skillempty=!1,t.skillregd=!0,t.skillsuccess=!1);case 2:case"end":return e.stop()}}),e)})))()},addSkill:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(i=o["c"].collection("users").doc(t.user.uid),t.skills=t.user.skills,!t.skillsuccess){e.next=10;break}return t.skills.push(t.skill),e.next=6,i.update({skills:t.skills});case 6:t.skill=null,t.skillsuccess=null,e.next=11;break;case 10:return e.abrupt("return");case 11:case"end":return e.stop()}}),e)})))()}},data:function(){return{bio:null,city:null,stt:null,country:null,number:null,affiliation:null,uname:null,available:null,unavailable:null,unameempty:null,imageText:null,image:null,storagePath:null,picStat:null,fileName:null,disabilities:null,disability:null,disabilityempty:null,disabilityregd:null,disabilitysuccess:null,skills:null,skill:null,skillempty:null,skillregd:null,skillsuccess:null,fieldempty:null}},mounted:function(){this.checkAvailability()},created:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.imageText="Click/Drag to Upload Profile Picture",t.bio=t.user.bio,t.city=t.user.city,t.stt=t.user.stt,t.country=t.user.country,t.number=t.user.number,t.affiliation=t.user.affiliation,t.uname=t.user.uname,t.disabilities=t.user.disabilities,t.skills=t.user.skills,t.picStat=t.user.profilePic;case 11:case"end":return e.stop()}}),e)})))()}},d=u,m=(i("ac39"),i("2877")),v=Object(m["a"])(d,a,s,!1,null,null,null);e["default"]=v.exports},ac39:function(t,e,i){"use strict";var a=i("0135"),s=i.n(a);s.a}}]);
//# sourceMappingURL=chunk-2e4f9101.b82eb418.js.map