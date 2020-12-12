window.__require=function e(t,o,r){function c(a,i){if(!o[a]){if(!t[a]){var s=a.split("/");if(s=s[s.length-1],!t[s]){var l="function"==typeof __require&&__require;if(!i&&l)return l(s,!0);if(n)return n(s,!0);throw new Error("Cannot find module '"+a+"'")}a=s}var p=o[a]={exports:{}};t[a][0].call(p.exports,function(e){return c(t[a][1][e]||e)},p,p.exports,e,t,o,r)}return o[a].exports}for(var n="function"==typeof __require&&__require,a=0;a<r.length;a++)c(r[a]);return c}({Asteroid:[function(e,t,o){"use strict";cc._RF.push(t,"dce68WK5EJNO4SC3ZE9+hMJ","Asteroid"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=(r.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){this.node.runAction(cc.rotateTo(2.5*Math.random()+1.5,720))},t.prototype.update=function(e){0==this.node.getNumberOfRunningActions()&&this.onLoad()},t=__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],BlackHoleGenerator:[function(e,t,o){"use strict";cc._RF.push(t,"dccad37brZNPKMKeFypyaAC","BlackHoleGenerator"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=r.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.blackHole=null,t.maxX=210,t.minX=-210,t.maxY=7500,t.minY=2500,t}return __extends(t,e),t.prototype.onLoad=function(){this.createBlackHole()},t.prototype.createBlackHole=function(){var e=cc.instantiate(this.blackHole);e.setPosition(Math.floor(Math.random()*(this.maxX-this.minX+1)+this.minX),Math.floor(Math.random()*(this.maxY-this.minY+1)+this.minY)),this.node.addChild(e),console.log("Created black hole on position = "+e.getPosition())},t.prototype.update=function(e){cc.find("Game/Character").y>this.minY&&(this.minY+=5e3,this.maxY+=5e3,this.createBlackHole())},__decorate([n(cc.Prefab)],t.prototype,"blackHole",void 0),t=__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],BlackHole:[function(e,t,o){"use strict";cc._RF.push(t,"7386fr4u1FGVpCG49Q0P0I9","BlackHole"),Object.defineProperty(o,"__esModule",{value:!0});var r=e("../Character/CharacterMoveLR"),c=cc._decorator,n=c.ccclass,a=(c.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.character=null,t.characterScale=null,t}return __extends(t,e),t.prototype.onCollisionEnter=function(e,t){"Character<BoxCollider>"==e.name&&(this.node.getComponent("cc.AudioSource").play(),r.default.isBlocked=!0,e.node.stopAllActions(),e.node.getComponent(cc.BoxCollider).destroy(),e.node.getComponent(cc.PolygonCollider).destroy(),e.node.runAction(cc.spawn(cc.rotateTo(4,1500),cc.scaleTo(4,0,0),cc.moveTo(1,t.node.x,t.node.y))),this.character=e.node,this.characterScale=e.node.getScale(cc.v2()))},t.prototype.update=function(e){null!=this.character&&this.characterScale.x<.2&&this.characterScale.y<.2&&cc.director.loadScene("GameOver"),0==this.node.getNumberOfRunningActions()&&this.node.runAction(cc.rotateTo(10,1e3)),this.node.y<cc.find("Game/Main Camera").y-600&&this.node.destroy()},t=__decorate([n],t)}(cc.Component));o.default=a,cc._RF.pop()},{"../Character/CharacterMoveLR":"CharacterMoveLR"}],CharacterBlaster:[function(e,t,o){"use strict";cc._RF.push(t,"20678u7/kBPjb/dwLofMS5G","CharacterBlaster"),Object.defineProperty(o,"__esModule",{value:!0});var r=e("./CharacterMoveLR"),c=cc._decorator,n=c.ccclass,a=c.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.sphere=null,t}return __extends(t,e),t.prototype.onLoad=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},t.prototype.onKeyUp=function(e){r.default.isBlocked||e.keyCode!=cc.macro.KEY.space&&e.keyCode!=cc.macro.KEY.up&&e.keyCode!=cc.macro.KEY.w||this.createSphere()},t.prototype.createSphere=function(){for(var e=-50,t=0;t<2;t++){var o=cc.instantiate(this.sphere);r.default.leftOrRight?o.setPosition(this.node.getPosition().x+20,this.node.getPosition().y+100):o.setPosition(this.node.getPosition().x-20,this.node.getPosition().y+100),this.node.parent.addChild(o),o.runAction(cc.sequence(cc.moveBy(.6,e,600),cc.scaleTo(.5,0,0),null)),e+=100}},t.prototype.update=function(e){},__decorate([a(cc.Prefab)],t.prototype,"sphere",void 0),t=__decorate([n],t)}(cc.Component);o.default=i,cc._RF.pop()},{"./CharacterMoveLR":"CharacterMoveLR"}],CharacterGoingBeyond:[function(e,t,o){"use strict";cc._RF.push(t,"c755b+Ow99FE6zFfwLGHt28","CharacterGoingBeyond"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=r.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.ScreenWidth=560,t}return __extends(t,e),t.prototype.update=function(e){this.node.x>this.ScreenWidth/2+40&&(this.node.x=-this.ScreenWidth/2-25),this.node.x<-this.ScreenWidth/2-40&&(this.node.x=this.ScreenWidth/2+25)},__decorate([n],t.prototype,"ScreenWidth",void 0),t=__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],CharacterMain:[function(e,t,o){"use strict";cc._RF.push(t,"90825T4dMtC7LyeHHid02fP","CharacterMain"),Object.defineProperty(o,"__esModule",{value:!0});var r=e("../\u0421amera\u0421ontrol"),c=cc._decorator,n=c.ccclass,a=(c.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.fakeNodeForCheckJumpTime=new cc.Node,t.inJump=!0,t.moveDown=!0,t.downSpeed=13,t.jumTime=1.2,t.jumpAction=cc.jumpBy(t.jumTime,0,0,250,1),t}return __extends(t,e),t.prototype.onCollisionEnter=function(e,t){this.inJump&&"Character<BoxCollider>"==t.name&&("PlatformGreen<BoxCollider>"==e.name||"PlatformBlue<BoxCollider>"==e.name?(this.characterAction(t),r.default.cameraUpdate(e)):"PlatformWhite<BoxCollider>"==e.name&&(this.characterAction(t),r.default.cameraUpdate(e),e.node.destroy()),this.inJump=!1,this.fakeNodeForCheckJumpTime.runAction(cc.delayTime(this.jumTime/2-.02)),this.node.getComponent("cc.AudioSource").play())},t.prototype.characterAction=function(e){e.node.stopAllActions(),e.getComponent(cc.Animation).play(),this.moveDown=!1,e.node.runAction(this.jumpAction)},t.prototype.update=function(e){if(this.moveDown)for(var t=0;t<=this.downSpeed;t++)this.node.y=this.node.y-1;0==this.node.getNumberOfRunningActions()&&(this.moveDown=!0),0==this.fakeNodeForCheckJumpTime.getNumberOfRunningActions()&&(this.inJump=!0),this.node.y<cc.find("Game/Main Camera").y-450&&cc.director.loadScene("GameOver")},t=__decorate([n],t)}(cc.Component));o.default=a,cc._RF.pop()},{"../\u0421amera\u0421ontrol":"\u0421amera\u0421ontrol"}],CharacterMoveLR:[function(e,t,o){"use strict";cc._RF.push(t,"c117e8qXZNElZcBYIbtdqNT","CharacterMoveLR"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=(r.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.Delta=8,t.leftMove=!1,t.rightMove=!1,t}var o;return __extends(t,e),o=t,t.prototype.onLoad=function(){cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},t.prototype.onKeyUp=function(e){o.isBlocked||(e.keyCode==cc.macro.KEY.left||e.keyCode==cc.macro.KEY.a?this.leftMove=!1:e.keyCode!=cc.macro.KEY.right&&e.keyCode!=cc.macro.KEY.d||(this.rightMove=!1))},t.prototype.onKeyDown=function(e){o.isBlocked||(e.keyCode==cc.macro.KEY.left||e.keyCode==cc.macro.KEY.a?(this.leftMove=!0,o.leftOrRight=!0,this.node.runAction(cc.flipX(!0))):e.keyCode!=cc.macro.KEY.right&&e.keyCode!=cc.macro.KEY.d||(this.rightMove=!0,o.leftOrRight=!1,this.node.runAction(cc.flipX(!1))))},t.prototype.update=function(e){var t=0;if(this.leftMove)t=-this.Delta;else{if(!this.rightMove)return;t=this.Delta}if(!o.isBlocked){var r=this.node.x+t;this.node.x=r}},t.prototype.onDestroy=function(){cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown,this),cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp,this)},t.isBlocked=!1,t.leftOrRight=!1,t=o=__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],Character:[function(e,t,o){"use strict";cc._RF.push(t,"dbf46/CG1pHbZ+jnAsj0U0O","Character"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=(r.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.jumTime=1.2,t.jumpAction=cc.jumpBy(t.jumTime,0,0,250,1),t}return __extends(t,e),t.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},t.prototype.onCollisionEnter=function(e,t){this.characterAction(t)},t.prototype.characterAction=function(e){e.node.stopAllActions(),e.getComponent(cc.Animation).play(),e.node.runAction(this.jumpAction)},t=__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],EnergySphere:[function(e,t,o){"use strict";cc._RF.push(t,"f4ea60kLndGw4YVJjlpptdC","EnergySphere"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=(r.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onCollisionEnter=function(e,t){"NLO<PolygonCollider>"==e.name&&(this.node.getComponent("cc.AudioSource").play(),e.node.getComponent(cc.Collider).destroy(),t.node.getComponent(cc.Collider).destroy(),t.node.stopAllActions(),e.node.runAction(cc.scaleTo(.5,0,0)),t.node.runAction(cc.spawn(cc.moveTo(.5,e.node.getPosition()),cc.sequence(cc.scaleTo(.5,1,1),cc.scaleTo(.5,0,0),null))),t.node.getComponent(cc.Animation).play())},t.prototype.update=function(e){this.node.scaleX<.1&&this.node.destroy()},t=__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],GameOver:[function(e,t,o){"use strict";cc._RF.push(t,"4c34aPOdHNJ/4sOb53mFjtl","GameOver"),Object.defineProperty(o,"__esModule",{value:!0});var r=e("../Game/\u0421amera\u0421ontrol"),c=cc._decorator,n=c.ccclass,a=c.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.playAgainButton=null,t.mainMenuButton=null,t.scoreLabel=null,t}var o;return __extends(t,e),o=t,t.prototype.onLoad=function(){this.playAgainButton.node.on("click",this.playAgain,this),this.mainMenuButton.node.on("click",this.mainMenu,this),this.scoreLabel.string="Score: "+o.score},t.prototype.playAgain=function(){r.default.newGame(),cc.director.loadScene("Game")},t.prototype.mainMenu=function(){cc.director.loadScene("MainMenu")},t.score=0,__decorate([a(cc.Button)],t.prototype,"playAgainButton",void 0),__decorate([a(cc.Button)],t.prototype,"mainMenuButton",void 0),__decorate([a(cc.Label)],t.prototype,"scoreLabel",void 0),t=o=__decorate([n],t)}(cc.Component);o.default=i,cc._RF.pop()},{"../Game/\u0421amera\u0421ontrol":"\u0421amera\u0421ontrol"}],MainMenu:[function(e,t,o){"use strict";cc._RF.push(t,"200e5mIMxhFS6Q/JB4kjD9/","MainMenu"),Object.defineProperty(o,"__esModule",{value:!0});var r=e("../Game/\u0421amera\u0421ontrol"),c=cc._decorator,n=c.ccclass,a=c.property,i=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.playGameButton=null,t.scoreLabel=null,t}var o;return __extends(t,e),o=t,t.prototype.onLoad=function(){this.playGameButton.node.on("click",this.playGame,this),cc.debug.setDisplayStats(!1),this.scoreLabel.string="Best score: "+o.score},t.prototype.playGame=function(){r.default.newGame(),cc.director.loadScene("Game")},t.score=3432,__decorate([a(cc.Button)],t.prototype,"playGameButton",void 0),__decorate([a(cc.Label)],t.prototype,"scoreLabel",void 0),t=o=__decorate([n],t)}(cc.Component);o.default=i,cc._RF.pop()},{"../Game/\u0421amera\u0421ontrol":"\u0421amera\u0421ontrol"}],Main:[function(e,t,o){"use strict";cc._RF.push(t,"b4e54evozBHJpE5vBwwxea6","Main"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=(r.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onLoad=function(){cc.director.getCollisionManager().enabled=!0},t=__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],NLOGenerator:[function(e,t,o){"use strict";cc._RF.push(t,"235083DCzBEoqQWlpa9m0Q8","NLOGenerator"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=r.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.nlo=null,t.nlo1=null,t.nlo2=null,t.maxX=210,t.minX=-210,t.maxY=4e3,t.minY=1e3,t}return __extends(t,e),t.prototype.onLoad=function(){this.createNlo()},t.prototype.createNlo=function(){var e=Math.floor(3*Math.random()+1),t=new cc.Node;switch(e){case 1:t=cc.instantiate(this.nlo);break;case 2:t=cc.instantiate(this.nlo1);break;case 3:t=cc.instantiate(this.nlo2)}t.setPosition(Math.floor(Math.random()*(this.maxX-this.minX+1)+this.minX),Math.floor(Math.random()*(this.maxY-this.minY+1)+this.minY)),this.node.addChild(t),console.log("Created nlo on position = "+t.getPosition())},t.prototype.update=function(e){cc.find("Game/Character").y>this.minY&&(this.minY+=3e3,this.maxY+=3e3,this.createNlo())},__decorate([n(cc.Prefab)],t.prototype,"nlo",void 0),__decorate([n(cc.Prefab)],t.prototype,"nlo1",void 0),__decorate([n(cc.Prefab)],t.prototype,"nlo2",void 0),t=__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],NLO:[function(e,t,o){"use strict";cc._RF.push(t,"89b760GqhNGUIlmTj/fFJpj","NLO"),Object.defineProperty(o,"__esModule",{value:!0});var r=e("../UIComponent/Score"),c=cc._decorator,n=c.ccclass,a=(c.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.leftMove=!1,t.rightMove=!1,t.maxX=100,t.minX=-100,t.deltaX=1.5*Math.random()+1,t}return __extends(t,e),t.prototype.onLoad=function(){this.maxX=this.node.x+Math.floor(70*Math.random()+1),this.minX=this.node.x-Math.floor(70*Math.random()+1),this.maxX>230&&(this.maxX=230),this.minX<-230&&(this.minX=-230),1==Math.floor(2*Math.random()+1)?this.leftMove=!0:this.rightMove=!0},t.prototype.onCollisionEnter=function(e,t){"BlackHole<CircleCollider>"==e.name&&(t.node.y+=500),"Character<PolygonCollider>"==e.name&&cc.director.loadScene("GameOver")},t.prototype.update=function(e){this.node.scaleX<.1&&(this.node.destroy(),r.default.nloScore=r.default.nloScore+100),this.leftMove?(this.node.x-=this.deltaX,this.node.x<this.minX&&(this.leftMove=!1,this.rightMove=!0)):this.rightMove&&(this.node.x+=this.deltaX,this.node.x>this.maxX&&(this.leftMove=!0,this.rightMove=!1))},t=__decorate([n],t)}(cc.Component));o.default=a,cc._RF.pop()},{"../UIComponent/Score":"Score"}],Pause:[function(e,t,o){"use strict";cc._RF.push(t,"470fcxGcTZDnJxjzjBF6Hgj","Pause"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=(r.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.paused=!1,t}return __extends(t,e),t.prototype.onLoad=function(){this.node.on("click",this.pause,this)},t.prototype.pause=function(){this.paused?(this.paused=!this.paused,cc.director.pause()):(this.paused=!this.paused,cc.director.resume())},t=__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],PlaformDestroyer:[function(e,t,o){"use strict";cc._RF.push(t,"3ebcftIRLJDvLvjeDMMyuay","PlaformDestroyer"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=(r.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.prototype.onCollisionEnter=function(e,t){"BlackHole<CircleCollider>"!=e.name&&"NLO<PolygonCollider>"!=e.name||"PlatformGreen<BoxCollider>"!=t.name&&"PlatformWhite<BoxCollider>"!=t.name||(t.node.x+=200,t.node.x>225&&(t.node.x=-225))},t.prototype.update=function(e){this.node.y<cc.find("Game/Main Camera").y-465&&this.node.destroy()},t=__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],PlarformMoveLR:[function(e,t,o){"use strict";cc._RF.push(t,"4bec2VkqDBPsJUteTX4l1sN","PlarformMoveLR"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=(r.property,function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.leftMove=!1,t.rightMove=!1,t.deltaX=1.5*Math.random()+1,t}return __extends(t,e),t.prototype.onLoad=function(){1==Math.floor(2*Math.random()+1)?this.leftMove=!0:this.rightMove=!0},t.prototype.onCollisionEnter=function(e,t){var o=!1;"BlackHole<CircleCollider>"!=e.name&&"NLO<PolygonCollider>"!=e.name||(this.rightMove&&(this.rightMove=!1,this.leftMove=!0,o=!0),o||(this.leftMove=!1,this.rightMove=!0))},t.prototype.update=function(e){this.leftMove?(this.node.x-=this.deltaX,this.node.x<-230&&(this.leftMove=!1,this.rightMove=!0)):this.rightMove&&(this.node.x+=this.deltaX,this.node.x>230&&(this.leftMove=!0,this.rightMove=!1))},t=__decorate([c],t)}(cc.Component));o.default=n,cc._RF.pop()},{}],PlatformsCreator:[function(e,t,o){"use strict";cc._RF.push(t,"eb982HTVJFKo56QiGnCT+WH","PlatformsCreator"),Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,n=r.property,a=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.characterNode=null,t.greenPlatform=null,t.whitePlatform=null,t.bluePlatform=null,t.platformMaxX=230,t.platformMinX=-230,t.platformMaxY=150,t.platformMinY=25,t.platformMaxYStep=175,t.platformMinYStep=25,t.creationLimit=2e3,t.nextLevelDifficulty=1e4,t.platformId=0,t.platformCounter=0,t}return __extends(t,e),t.prototype.onLoad=function(){var e=cc.instantiate(this.greenPlatform);e.setPosition(0,-20),this.node.addChild(e),this.creator()},t.prototype.platformSelection=function(){switch(Math.floor(10*Math.random()+1)){case 1:this.platformId=1;break;case 2:case 3:case 4:this.platformId=2;break;default:this.platformId=3}},t.prototype.creator=function(){for(var e=0;this.platformMinY<this.creationLimit+500;){switch(this.platformSelection(),this.platformId){case 1:this.createPlatform(this.whitePlatform);break;case 2:this.createPlatform(this.bluePlatform);break;case 3:this.createPlatform(this.greenPlatform)}e+=1}console.log("Created "+e+" platfom")},t.prototype.createPlatform=function(e){var t=cc.instantiate(e);t.setPosition(Math.floor(Math.random()*(this.platformMaxX-this.platformMinX+1)+this.platformMinX),Math.floor(Math.random()*(this.platformMaxY-this.platformMinY+1)+this.platformMinY)),this.platformMaxY=t.y+this.platformMaxYStep,this.platformMinY=t.y+this.platformMinYStep,this.node.addChild(t)},t.prototype.update=function(e){this.characterNode.y>this.creationLimit&&(this.creationLimit+=1500,this.creator()),this.characterNode.y>this.nextLevelDifficulty&&(this.platformMaxYStep<200?this.platformMaxYStep=this.platformMaxYStep+25:this.platformMinYStep<200&&(this.platformMinYStep=this.platformMinYStep+25),this.nextLevelDifficulty+=5e3,console.log("The next level of difficulty = "+this.nextLevelDifficulty))},__decorate([n(cc.Node)],t.prototype,"characterNode",void 0),__decorate([n(cc.Prefab)],t.prototype,"greenPlatform",void 0),__decorate([n(cc.Prefab)],t.prototype,"whitePlatform",void 0),__decorate([n(cc.Prefab)],t.prototype,"bluePlatform",void 0),t=__decorate([c],t)}(cc.Component);o.default=a,cc._RF.pop()},{}],Score:[function(e,t,o){"use strict";cc._RF.push(t,"50926irt0xNj6G4c+uShG9T","Score"),Object.defineProperty(o,"__esModule",{value:!0});var r=e("../../GameOver/GameOver"),c=e("../../MainMenu/MainMenu"),n=cc._decorator,a=n.ccclass,i=n.property,s=function(e){function t(){var t=null!==e&&e.apply(this,arguments)||this;return t.scoreLabel=null,t.characterNode=null,t.score=0,t.scoreForScreen=0,t}var o;return __extends(t,e),o=t,t.prototype.onLoad=function(){o.nloScore=0},t.prototype.update=function(e){this.score<this.characterNode.y/10&&(this.score=this.characterNode.y/10),this.scoreForScreen=this.score+o.nloScore,this.scoreLabel.string="Score: "+this.scoreForScreen.toFixed(),r.default.score=Number(this.scoreForScreen.toFixed()),c.default.score<Number(this.scoreForScreen.toFixed())&&(c.default.score=Number(this.scoreForScreen.toFixed()))},t.nloScore=0,__decorate([i(cc.Label)],t.prototype,"scoreLabel",void 0),__decorate([i(cc.Node)],t.prototype,"characterNode",void 0),t=o=__decorate([a],t)}(cc.Component);o.default=s,cc._RF.pop()},{"../../GameOver/GameOver":"GameOver","../../MainMenu/MainMenu":"MainMenu"}],"\u0421amera\u0421ontrol":[function(e,t,o){"use strict";cc._RF.push(t,"9f3bdTVg7xHZJhLw0eZ+GAX","\u0421amera\u0421ontrol"),Object.defineProperty(o,"__esModule",{value:!0});var r=e("./Character/CharacterMoveLR"),c=cc._decorator,n=c.ccclass,a=(c.property,function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return __extends(t,e),t.cameraUpdate=function(e){null==this.platformY&&(this.platformY=e.node.y),this.platformY!=e.node.y&&(this.deltaY=e.node.y-this.platformY,this.deltaY>0&&(cc.find("Game/Main Camera").runAction(cc.moveBy(.003*this.deltaY,0,this.deltaY)),cc.find("Game/Wallpapers").runAction(cc.moveBy(.003*this.deltaY,0,this.deltaY)),cc.find("Game/NodeUI").runAction(cc.moveBy(.003*this.deltaY,0,this.deltaY)),this.platformY=e.node.y))},t.newGame=function(){this.deltaY=null,this.platformY=null,r.default.isBlocked=!1},t.deltaY=null,t.platformY=null,t=__decorate([n],t)}(cc.Component));o.default=a,cc._RF.pop()},{"./Character/CharacterMoveLR":"CharacterMoveLR"}]},{},["GameOver","CharacterBlaster","CharacterGoingBeyond","CharacterMain","CharacterMoveLR","EnergySphere","Main","Asteroid","BlackHole","BlackHoleGenerator","NLO","NLOGenerator","PlaformDestroyer","PlarformMoveLR","PlatformsCreator","Pause","Score","\u0421amera\u0421ontrol","Character","MainMenu"]);