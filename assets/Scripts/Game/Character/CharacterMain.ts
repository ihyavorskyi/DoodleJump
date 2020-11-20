import PlatformsCreator from "../Platform/PlatformsCreator";
import СameraСontrol from "../СameraСontrol";
const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterMain extends cc.Component {

    @property(cc.Prefab)
    greenPlatform: cc.Prefab = null;

    @property(cc.Prefab)
    whitePlatform: cc.Prefab = null;

    maxX = 200;
    minX = -200;

    downSpeed = 10;

    moveDown: boolean = true;

    jumpHeight: number = 150;
    jumpTime: number = 1.4;
    jumpAction = cc.jumpBy(this.jumpTime, 0, 0, this.jumpHeight, 1);

    whatPlatform = 1;

    plarformGenerate: boolean = true;

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {

        if (other.name == "PlatformGreen<BoxCollider>") {

            self.node.stopAllActions();
            this.moveDown = false;
            self.node.runAction(this.jumpAction);

            СameraСontrol.cameraUpdate(other);
        } else if (other.name == "PlatformWhite<BoxCollider>") {

            self.node.stopAllActions();
            this.moveDown = false;
            self.node.runAction(this.jumpAction);

            СameraСontrol.cameraUpdate(other);

            other.node.destroy();
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

        if (this.plarformGenerate) {
            this.plarformGenerate = false;
            for (let index = 1; index < 100; index++) {

                if (this.whatPlatform == 1) {
                    PlatformsCreator.createPlatform(index, this.greenPlatform);
                    this.whatPlatform = 2;
                } else {
                    PlatformsCreator.createPlatform(index, this.whitePlatform);
                    this.whatPlatform = 1;
                }
            }
        }

        //game over
        if (this.node.y < cc.find("Game/Main Camera").y - 450) {
            cc.director.loadScene("GameOver");
        }
    }
}