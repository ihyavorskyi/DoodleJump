import PlatformsCreator from "../Platform/PlatformsCreator";
import СameraСontrol from "../СameraСontrol";
const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterMain extends cc.Component {

    @property(cc.Prefab)
    greenPlatform: cc.Prefab = null;

    @property(cc.Prefab)
    whitePlatform: cc.Prefab = null;

    costilNode = new cc.Node;

    inJump = true;

    moveDown = true;
    downSpeed = 10;

    jumpAction = cc.jumpBy(2.33, 0, 0, 250, 1);

    platformId = 1;

    plarformGenerate: boolean = true;

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {

        if (this.inJump) {
            if (other.name == "PlatformGreen<BoxCollider>") {
                this.characterAction(self);
                СameraСontrol.cameraUpdate(other);

            } else if (other.name == "PlatformWhite<BoxCollider>") {
                this.characterAction(self);
                СameraСontrol.cameraUpdate(other);
                other.node.destroy();
            }
            this.inJump = false;
            this.costilNode.runAction(cc.delayTime(1.15));
        }
    }

    characterAction(self: cc.Collider) {
        self.node.stopAllActions();

        let jumpAnimation = self.getComponent(cc.Animation);
        jumpAnimation.play();
        this.moveDown = false;
        self.node.runAction(this.jumpAction);
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

        if (this.costilNode.getNumberOfRunningActions() == 0) {
            this.inJump = true;
        }

        if (this.plarformGenerate) {
            this.plarformGenerate = false;
            for (let index = 1; index < 100; index++) {

                if (this.platformId == 1) {
                    PlatformsCreator.createPlatform(index, this.greenPlatform);
                    this.platformId = 2;
                } else {
                    PlatformsCreator.createPlatform(index, this.whitePlatform);
                    this.platformId = 1;
                }
            }
        }

        //game over
        if (this.node.y < cc.find("Game/Main Camera").y - 450) {
            cc.director.loadScene("GameOver");
        }
    }
}