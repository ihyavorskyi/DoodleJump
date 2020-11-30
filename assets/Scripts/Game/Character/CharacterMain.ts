import PlatformsCreator from "../Platform/PlatformsCreator";
import СameraСontrol from "../СameraСontrol";
const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterMain extends cc.Component {

    fakeNodeForCheckJumpTime = new cc.Node;

    inJump = true;

    moveDown = true;
    downSpeed = 13;

    jumTime = 1.2;

    jumpAction = cc.jumpBy(this.jumTime, 0, 0, 250, 1);

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
            this.fakeNodeForCheckJumpTime.runAction(cc.delayTime(this.jumTime / 2 - 0.02));
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

        if (this.fakeNodeForCheckJumpTime.getNumberOfRunningActions() == 0) {
            this.inJump = true;
        }

        //game over
        if (this.node.y < cc.find("Game/Main Camera").y - 450) {
            cc.director.loadScene("GameOver");
        }
    }
}