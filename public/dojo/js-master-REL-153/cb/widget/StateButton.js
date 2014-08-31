//>>built
require({cache:{"url:cb/widget/StateButton.html":"<span>\n    <span class=\"switch-container\" data-dojo-attach-event=\"onclick:_onClick\" data-dojo-attach-point=\"titleNode\">\n        <input ${!nameAttrSetting} type=\"${type}\" ${checkedAttrSetting} class=\"hideBlock\" data-dojo-attach-point=\"focusNode\" />\n    </span>\n    <label for=\"${id}\" id=\"${id}_label\">\n        <span class=\"dijitReset dijitInline dijitIcon\" data-dojo-attach-point=\"iconNode\"></span>\n        <span data-dojo-attach-point=\"containerNode\" class=\"label\"></span>\n    </label>\n    <span class=\"hideBlock ${baseClass}Hint\" data-dojo-attach-point=\"_hintNode\"></span>\n</span>"}});
define("cb/widget/StateButton",["dojo","dojo/_base/declare","dojo/dom-attr","dojo/dom-class","dojo/html","dijit/_Widget","dijit/form/ToggleButton","cb/widget/_HideableMixin","sp/I18nWidget","dojo/text!./StateButton.html","dojo/i18n!./nls/BigSwitch"],function(_1,_2,_3,_4,_5,_6,_7,_8,_9,_a,_b){
return _2([_7,_8],{baseClass:"state-button",templateString:_a,i18n:_b,value:false,constructor:function(){
this.watch("checked",_1.hitch(this,function(_c,_d,_e){
this._handleCheckedChange(_e);
}));
},postMixInProperties:function(){
this.inherited(arguments);
this.checkedAttrSetting=this.checked?"checked":"";
},_setHintAttr:function(_f){
this._set("hint",_f);
_5.set(this._hintNode,_f);
_4.toggle(this._hintNode,"hideBlock",!_f);
},_setValueAttr:function(_10,_11){
if(typeof _10=="string"){
this.inherited(arguments);
_10=true;
}
if(this._created){
this.set("checked",_10,_11);
}
},_handleCheckedChange:function(_12){
_1.toggleClass(this.domNode,"on",_12);
}});
});

////@ sourceURL=/_/js-master-REL-153/cb/widget/StateButton.js