const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterMoveLR extends cc.Component {

    Delta: number = 6;

    leftMove: boolean = false;
    rightMove: boolean = false;

    static isBlocked: boolean = false;

    leftOrRight = 2;

    @property(cc.Prefab)
    sphere: cc.Prefab = null;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }

    onKeyUp(e: KeyboardEvent) {
        if (!CharacterMoveLR.isBlocked) {
            if (e.keyCode == cc.macro.KEY.left || e.keyCode == cc.macro.KEY.a) {
                this.leftMove = false;
            } else if (e.keyCode == cc.macro.KEY.right || e.keyCode == cc.macro.KEY.d) {
                this.rightMove = false;
            }
        }
        if (e.keyCode == cc.macro.KEY.space || e.keyCode == cc.macro.KEY.up || e.keyCode == cc.macro.KEY.w) {
            let hole = cc.instantiate(this.sphere);
            // hole.runAction(cc.moveBy(0.5, 0, 500));

            if (this.leftOrRight == 1) {
                hole.setPosition(this.node.getPosition().x + 20, this.node.getPosition().y + 100);
            } else if (this.leftOrRight == 2) {
                hole.setPosition(this.node.getPosition().x - 20, this.node.getPosition().y + 100);
            }
            this.node.parent.addChild(hole);
        }
    }

    onKeyDown(e: KeyboardEvent) {
        if (!CharacterMoveLR.isBlocked) {
            if (e.keyCode == cc.macro.KEY.left || e.keyCode == cc.macro.KEY.a) {
                this.leftMove = true;
                this.leftOrRight = 1;
                this.node.runAction(cc.flipX(true));
            } else if (e.keyCode == cc.macro.KEY.right || e.keyCode == cc.macro.KEY.d) {
                this.rightMove = true;
                this.leftOrRight = 2;
                this.node.runAction(cc.flipX(false));
            }
        }
    }
    update(dt) {

        let delta = 0;
        if (this.leftMove) {
            delta = -this.Delta;
        } else if (this.rightMove) {
            delta = this.Delta
        } else return;

        if (!CharacterMoveLR.isBlocked) {
            let position = this.node.x + delta;
            this.node.x = position;
        }
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
    }
}