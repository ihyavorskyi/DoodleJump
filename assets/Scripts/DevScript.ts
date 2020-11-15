const {ccclass, property} = cc._decorator;

@ccclass
export default class DevScript extends cc.Component {

    JumpHeight: number = 150;

    JumpTime: number = 1.4;

    DownSpeed = 10;
    
    public static lol = false; 

    x: number = null;
    y: number = null;

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
            this.moveDown = false;  
            self.node.runAction(this.jumpAction);


           /*  
            if((this.x == other.node.x && this.y == other.node.y)){
                DevScript.lol = false;
                console.log(this.x + "||||||||" + this.y)
            }else if(this.y < other.node.y){                
                DevScript.lol = true;
                this.x = other.node.x;
                this.y = other.node.y; 
            } */
       }
    }

    update (dt) {
        if(this.moveDown){
            for (let i = 0; i <= this.DownSpeed; i++) {
                this.node.y = this.node.y - 1;
            }
        }
        
        if(this.node.getNumberOfRunningActions() == 0){
            this.moveDown = true;
        }
    }
}