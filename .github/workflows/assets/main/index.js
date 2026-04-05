System.register("chunks:///_virtual/Bird.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(e){var t,i,n,o,r,l,s,a,c,p,u,h;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized},function(e){r=e.cclegacy,l=e._decorator,s=e.SpriteFrame,a=e.CCFloat,c=e.Collider2D,p=e.Contact2DType,u=e.Sprite,h=e.Component}],execute:function(){var v,d,g,f,m,C,y,B,T;r._RF.push({},"ca192u7f7FPFrWQv1STllZ/","Bird",void 0);var b=l.ccclass,F=l.property;e("Bird",(v=b("Bird"),d=F({type:[s]}),g=F({type:[a]}),f=F({type:s}),v((y=t((C=function(e){function t(){for(var t,i=arguments.length,r=new Array(i),l=0;l<i;l++)r[l]=arguments[l];return t=e.call.apply(e,[this].concat(r))||this,n(t,"spriteBird",y,o(t)),n(t,"scaleList",B,o(t)),n(t,"spriteFrameBirdMerah",T,o(t)),t.listToRemove=[],t.level=0,t}i(t,e);var r=t.prototype;return r.start=function(){var e=this.getComponent(c);e&&(e.on(p.BEGIN_CONTACT,this.onBeginContact,this),e.on(p.END_CONTACT,this.onEndContact,this))},r.onBeginContact=function(e,i,n){console.log("onBeginContact"),e.group==i.group&&e.node.getComponent(t).level==i.node.getComponent(t).level&&(this.levelup(),this.listToRemove.push(i.node))},r.onEndContact=function(e,t,i){console.log("onEndContact")},r.levelup=function(){this.level+1<this.spriteBird.length&&(this.level++,this.getComponent(u).spriteFrame=this.spriteBird[this.level%this.spriteBird.length],this.level<this.scaleList.length&&this.node.scale.multiplyScalar(this.scaleList[this.level]))},r.update=function(e){for(var t=0;t<this.listToRemove.length;t++)this.listToRemove[t].active=!1;this.listToRemove=[]},t}(h)).prototype,"spriteBird",[d],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),B=t(C.prototype,"scaleList",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:function(){return[]}}),T=t(C.prototype,"spriteFrameBirdMerah",[f],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=C))||m));r._RF.pop()}}}));

System.register("chunks:///_virtual/GameController.ts",["./rollupPluginModLoBabelHelpers.js","cc"],(function(t){var e,o,n,r,i,a,c,l,s,p,u,y,d;return{setters:[function(t){e=t.applyDecoratedDescriptor,o=t.inheritsLoose,n=t.initializerDefineProperty,r=t.assertThisInitialized},function(t){i=t.cclegacy,a=t._decorator,c=t.Prefab,l=t.input,s=t.Input,p=t.instantiate,u=t.RigidBody2D,y=t.ERigidBody2DType,d=t.Component}],execute:function(){var f,g,b,h,m;i._RF.push({},"b73abkkJmdHO4NcywJ10JCY","GameController",void 0);var v=a.ccclass,C=a.property;t("GameController",(f=v("GameController"),g=C({type:c}),f((m=e((h=function(t){function e(){for(var e,o=arguments.length,i=new Array(o),a=0;a<o;a++)i[a]=arguments[a];return e=t.call.apply(t,[this].concat(i))||this,n(e,"birdPrefab",m,r(e)),e}o(e,t);var i=e.prototype;return i.start=function(){console.log("start"),l.on(s.EventType.TOUCH_START,this.onTouchStart,this)},i.onTouchStart=function(t){console.log(t.getUILocation()),t.getLocationInView();var e=p(this.birdPrefab),o=t.getUILocation();e.setParent(this.node),e.setWorldPosition(o.x,o.y,0),e.getComponent(u).type=y.Dynamic,e.getComponent(u).wakeUp()},i.update=function(t){},e}(d)).prototype,"birdPrefab",[g],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),b=h))||b));i._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./Bird.ts","./GameController.ts"],(function(){return{setters:[null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});