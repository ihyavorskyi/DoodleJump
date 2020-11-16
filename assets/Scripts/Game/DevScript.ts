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
        //Platform crate
        /* let parentNode = cc.find("Game/New Node");
        let node = new cc.Node("New Sprite");

        var sprite = node.addComponent(cc.Sprite);
        sprite.spriteFrame = new cc.SpriteFrame(cc.url.raw("Textures/Platform.png"));

        let boxCollider = node.addComponent(cc.BoxCollider);
        boxCollider.offset = new cc.Vec2(0, 4);
        boxCollider.size = new cc.Size(130, 8);

        node.setPosition(10, 150);

        parentNode.addChild(node); */

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

        //game over
        if(this.node.y < cc.find("Game/Main Camera").y - 450){
            cc.director.loadScene("GameOver");
        }
    }
}