import"./vendor.0dd1e043.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const a=new URL(e,location),A=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,o)=>{const r=new URL(e,a);if(self[t].moduleMap[r])return s(self[t].moduleMap[r]);const d=new Blob([`import * as m from '${r}';`,`${t}.moduleMap['${r}']=m;`],{type:"text/javascript"}),i=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(d),onerror(){o(new Error(`Failed to import: ${e}`)),A(i)},onload(){s(self[t].moduleMap[r]),A(i)}});document.head.appendChild(i)})),self[t].moduleMap={}}}("/assets/");class e extends Phaser.Scene{constructor(){super({key:"MenuScene"}),this.sprites=[]}preload(){this.startKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.startKey.isDown=!1,this.load.image("particle","data:image/png;base64,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")}create(){this.add.text(0,0,"Press S to restart scene",{fontSize:"60px",fontFamily:"Helvetica"}),this.add.image(100,100,"particle");for(let e=0;e<300;e++){const e=Phaser.Math.Between(-64,800),t=Phaser.Math.Between(-64,600),s=this.add.image(e,t,"particle");s.setBlendMode(Phaser.BlendModes.ADD),this.sprites.push({s:s,r:2+6*Math.random()})}}update(){this.startKey.isDown&&this.scene.start(this);for(let e=0;e<this.sprites.length;e++){const t=this.sprites[e].s;t.y-=this.sprites[e].r,t.y<-256&&(t.y=700)}}}const t={title:"Tank",url:"https://github.com/digitsensitive/phaser3-typescript",version:"2.0",width:800,height:600,type:Phaser.AUTO,parent:"app",scene:[e],input:{keyboard:!0},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},backgroundColor:"#300000",render:{pixelArt:!1,antialias:!0}};class s extends Phaser.Game{constructor(e){super(e)}}window.addEventListener("load",(()=>{const e=new s(t);console.log(e)}));
