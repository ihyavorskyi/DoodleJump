import CharacterMoveLR from "../Character/CharacterMoveLR";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    character: cc.Node = null;
    characterScale: cc.Vec2 = null;

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.name == "Character<BoxCollider>") {
            CharacterMoveLR.isBlocked = true;
            other.node.stopAllActions();
            other.node.getComponent(cc.Collider).destroy();
            other.node.runAction(
                cc.spawn(
                    cc.rotateTo(4, 1500),
                    cc.scaleTo(4, 0, 0),
                    cc.moveTo(1, self.node.x, self.node.y)
                ));
            this.character = other.node;
            this.characterScale = other.node.getScale(cc.v2());
        }
    }

    update(dt) {
        if (this.character != null) {
            if (this.characterScale.x < 0.2 && this.characterScale.y < 0.2) {
                cc.director.loadScene("GameOver");
            }
        }

        if (this.node.getNumberOfRunningActions() == 0) {
            this.node.runAction(cc.rotateTo(10, 1000));
        }

        if (this.node.y < cc.find("Game/Main Camera").y - 600) {
            this.node.destroy();
        }
    }
}