const {ccclass, property} = cc._decorator;

@ccclass
export default class DevScript extends cc.Component {

    JumpHeight: number = 150;

    JumpTime: number = 1.4;

    DownSpeed = 8;
    

    moveDown: boolean = true;
    curCol: boolean = false;
    jumpAction = cc.jumpBy(this.JumpTime, 0, 0, this.JumpHeight, 1);

    onLoad () {
        /*var node = new cc.Node("New Sprite");
        var sprite = node.addComponent(cc.Sprite);
        var url = cc.url.raw("Textures/Platform.png");
        sprite.spriteFrame = new cc.SpriteFrame(url); 
        node.setPosition(0, 0);
        this.node.parent.addChild(node);  */   
   /*      let otherNode = this.node;
        otherNode.setPosition(0,0);
        this.node.addChild(otherNode); */
    }

    start () {

    }

    
    onCollisionEnter(other: cc.Collider, self: cc.Collider) {

        if(other.name == "New Sprite<BoxCollider>"){
        self.node.stopAllActions();
        //other.node.parent.runAction(cc.moveBy(1,0,-120))
        this.moveDown = false;  
        
        let actionSequence = cc.sequence(
            this.jumpAction,
        null);

        self.node.runAction(actionSequence);
        //cc.find("Canvas/New Node").runAction(cc.moveBy(0.1,0,-75));
        //console.log(other.name);
       }
    }

  /*onCollisionExit(other: cc.Collider,self: cc.Collider){
        console.log("Done colliding");
    } */

    update (dt) {
        if(this.moveDown){
            for (let i = 0; i <= this.DownSpeed; i++) {
                this.node.y = this.node.y - 1;
            }
        }
        
        if(this.node.getNumberOfRunningActions() == 0){
            this.moveDown = true;
        }
      /*   if(this.node.y > 0){
            this.nodeAll.y -=50;
        } */
    }
}