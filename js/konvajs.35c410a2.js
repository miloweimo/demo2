(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["konvajs"],{"5be6":function(e,t,a){"use strict";a.r(t);var s=a("7265"),i=function(){var e=this,t=e._self._c;return t("div",[[t("portal",{attrs:{to:"app-header"}},[t(s["a"],{staticClass:"mr-2",on:{click:function(t){return e.handleAdd()}}},[e._v(" 线 ")]),t(s["a"],{staticClass:"mr-2",on:{click:function(t){return e.handleAdd("box")}}},[e._v(" 框 ")]),t(s["a"],{staticClass:"mr-2",on:{click:function(t){return e.handleAdd("image")}}},[e._v(" 图片 ")]),t(s["a"],{staticClass:"mr-2",on:{click:function(t){return e.handleDelete(e.selectedShapeName)}}},[e._v(" 删除 ")]),t("a",{staticClass:"mr-2",attrs:{href:"javascript:location.reload()"}},[e._v("Reload")])],1)],[t("v-stage",{ref:"stage",staticStyle:{border:"1px solid"},attrs:{config:e.stageSize},on:{mousemove:e.handleStageMouseMove,mouseout:e.handleStageMouseOut,mousedown:e.handleStageMouseDown,touchstart:e.handleStageMouseDown}},[t("v-layer",[e._l(e.shapeList.filter(e=>"image"===e.type),(function(e){return t("v-image",{key:e.name,attrs:{config:e}})})),e._l(e.shapeList.filter(e=>"circle"===e.type),(function(e){return t("v-circle",{key:e.name,attrs:{config:e}})})),e._l(e.shapeList.filter(e=>"rect"===e.type),(function(e){return t("v-rect",{key:e.name,attrs:{config:e}})})),e._l(e.shapeList.filter(e=>"line"===e.type),(function(e){return t("v-line",{key:e.name,attrs:{config:e}})})),e._l(e.shapeList.filter(e=>"text"===e.type),(function(e){return t("v-text",{key:e.name,attrs:{config:e}})})),t("v-transformer",{ref:"transformer"})],2)],1),t("div",[e._v(" 外面 ")])]],2)},n=[];a("0894");const r=window.innerWidth,o=window.innerHeight,l=new window.Image;l.src=a("6b5b");var g={data(){return{stageSize:{width:r,height:o-100},image:l,selectedShapeName:"",shapeList:[{type:"text",name:"mytext",draggable:!0,text:"hello",x:100,y:10,fontSize:20,fill:"tomato"},{type:"text",name:"text",draggable:!0,text:"里面",y:10,fontSize:20,fill:"purple"},{type:"circle",name:"circle",draggable:!0,x:100,y:100,radius:50,fill:"tomato"},{type:"rect",name:"rect",draggable:!0,x:100,y:100,width:100,height:50,stroke:"black"},{type:"image",name:"image",draggable:!0,x:200,y:100,image:l,scaleX:1,scaleY:1,rotation:0},{type:"line",name:"line",draggable:!0,x:100,y:100,points:[0,0,150,-30],stroke:"green",strokeWidth:15},{type:"line",name:"line1",draggable:!0,x:200,y:100,points:[0,0,150,100],stroke:"orange",strokeWidth:15}]}},methods:{writeMessage(e){const t=this.shapeList.find(e=>"mytext"===e.name);t&&(t.text=e)},handleStageMouseOut(){this.writeMessage("Mouseout Stage")},handleStageMouseMove(){const e=this.$refs.stage.getNode().getPointerPosition(),t=e.x,a=e.y;this.writeMessage("x: "+t+", y: "+a)},handleStageMouseDown(e){if(this.writeMessage("Click Stage"),e.target===e.target.getStage())return this.selectedShapeName="",void this.updateTransformer();const t="Transformer"===e.target.getParent().className;if(t)return;const a=e.target.name();this.selectedShapeName=a||"",this.updateTransformer()},updateTransformer(){const e=this.$refs.transformer.getNode(),t=e.getStage(),{selectedShapeName:a}=this,s=t.findOne("."+a);s!==e.node()&&(s?e.nodes([s]):e.nodes([]))},handleAdd(e="line"){"line"===e&&(this.writeMessage("Add line"),this.shapeList.push({type:"line",name:""+(new Date).getUTCMilliseconds(),draggable:!0,x:0,y:20,points:[0,0,150,0],stroke:"black",strokeWidth:15})),"box"===e&&(this.writeMessage("Add Box"),this.shapeList.push({type:"rect",name:""+(new Date).getUTCMilliseconds(),draggable:!0,x:0,y:0,width:100,height:50,stroke:"black"})),"image"===e&&(this.writeMessage("Add image"),this.shapeList.push({type:"image",name:""+(new Date).getUTCMilliseconds(),draggable:!0,x:0,y:0,image:l,scaleX:1,scaleY:1,rotation:0}))},handleDelete(e){e&&(this.writeMessage("Delete "+e),this.shapeList=this.shapeList.filter(t=>t.name!==e),this.selectedShapeName="")}}},d=g,c=a("2be6"),h=Object(c["a"])(d,i,n,!1,null,null,null);t["default"]=h.exports},"6b5b":function(e,t,a){e.exports=a.p+"img/cake.b93062bf.jpg"}}]);
//# sourceMappingURL=konvajs.35c410a2.js.map