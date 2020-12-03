import CharacterMoveLR from "./CharacterMoveLR";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterBlaster extends cc.Component {

    @property(cc.Prefab)
    sphere: cc.Prefab = null;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyUp(e: KeyboardEvent) {
        if (!CharacterMoveLR.isBlocked) {
            if (e.keyCode == cc.macro.KEY.space || e.keyCode == cc.macro.KEY.up || e.keyCode == cc.macro.KEY.w) {
                this.createSphere();
            }
        }
    }

    createSphere() {
        let index = -85;

        for (let i = 0; i < 3; i++) {
            let hole = cc.instantiate(this.sphere);
            if (CharacterMoveLR.leftOrRight) {
                hole.setPosition(this.node.getPosition().x + 20, this.node.getPosition().y + 100);
            } else {
                hole.setPosition(this.node.getPosition().x - 20, this.node.getPosition().y + 100);
            }
            this.node.parent.addChild(hole);

            hole.runAction(cc.sequence(
                cc.moveBy(0.6, index, 600),
                cc.scaleTo(0.5, 0, 0),
                null
            ));

            index += 85;
        }
    }

    update(dt) { }
}