import СameraСontrol from "./СameraСontrol";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DevScript extends cc.Component {

    downSpeed = 10;

    moveDown: boolean = true;

    jumpHeight: number = 150;
    jumpTime: number = 1.4;
    jumpAction = cc.jumpBy(this.jumpTime, 0, 0, this.jumpHeight, 1);

    onLoad() {
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

    start() { }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {

        if (other.name == "New Sprite<BoxCollider>") {            

            self.node.stopAllActions();
            this.moveDown = false;
            self.node.runAction(this.jumpAction);

            СameraСontrol.cameraUpdate(other);
        }
    }

    update(dt) {
        if (this.moveDown) {
            for (let i = 0; i <= this.downSpeed; i++) {
                this.node.y = this.node.y - 1;
            }
        }

        if (this.node.getNumberOfRunningActions() == 0) {
            this.moveDown = true;
        }
    }
}