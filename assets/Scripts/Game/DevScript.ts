const { ccclass, property } = cc._decorator;

@ccclass
export default class DevScript extends cc.Component {

    downSpeed = 10;

    deltaY: number = null;
    platformY: number = null;

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

    start() {

    }


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {

        if (other.name == "New Sprite<BoxCollider>") {

            if (this.platformY == null) {
                this.platformY = other.node.y;
            }

            self.node.stopAllActions();
            this.moveDown = false;
            self.node.runAction(this.jumpAction);


            if (this.platformY != other.node.y) {

                this.deltaY = other.node.y - this.platformY;

                if (this.deltaY > 0) {

                    cc.find("Game/Main Camera").runAction(cc.moveBy(0.2, 0, this.deltaY));
                    cc.find("Game/Wallpapers").runAction(cc.moveBy(0.2, 0, this.deltaY));

                    this.platformY = other.node.y;
                }
            }
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