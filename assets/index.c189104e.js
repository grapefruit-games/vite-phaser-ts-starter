import"./vendor.0dd1e043.js";!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(s){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((s,i)=>{const o=new URL(e,r);if(self[t].moduleMap[o])return s(self[t].moduleMap[o]);const n=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),d=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(n),onerror(){i(new Error(`Failed to import: ${e}`)),a(d)},onload(){s(self[t].moduleMap[o]),a(d)}});document.head.appendChild(d)})),self[t].moduleMap={}}}("/assets/");class e extends Phaser.Scene{constructor(){super({key:"MenuScene"}),this.sprites=[]}preload(){this.startKey=this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),this.startKey.isDown=!1,this.load.image("particle","/assets/particle.302dcde6.png")}create(){this.add.text(0,0,"Press S to restart scene",{fontSize:"60px",fontFamily:"Helvetica"}),this.add.image(100,100,"particle");for(let e=0;e<300;e++){const e=Phaser.Math.Between(-64,800),t=Phaser.Math.Between(-64,600),s=this.add.image(e,t,"particle");s.setBlendMode(Phaser.BlendModes.ADD),this.sprites.push({s:s,r:2+6*Math.random()})}}update(){this.startKey.isDown&&this.scene.start(this);for(let e=0;e<this.sprites.length;e++){const t=this.sprites[e].s;t.y-=this.sprites[e].r,t.y<-256&&(t.y=700)}}}const t={title:"Tank",url:"https://github.com/digitsensitive/phaser3-typescript",version:"2.0",width:800,height:600,type:Phaser.AUTO,parent:"app",scene:[e],input:{keyboard:!0},physics:{default:"arcade",arcade:{gravity:{y:0},debug:!1}},backgroundColor:"#300000",render:{pixelArt:!1,antialias:!0}};class s extends Phaser.Game{constructor(e){super(e)}}window.addEventListener("load",(()=>{const e=new s(t);console.log(e)}));
