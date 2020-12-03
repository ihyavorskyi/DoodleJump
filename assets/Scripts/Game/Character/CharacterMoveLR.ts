const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterMoveLR extends cc.Component {

    Delta: number = 8;

    leftMove: boolean = false;
    rightMove: boolean = false;

    static isBlocked = false;

    static leftOrRight = false;

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
    }

    onKeyDown(e: KeyboardEvent) {
        if (!CharacterMoveLR.isBlocked) {
            if (e.keyCode == cc.macro.KEY.left || e.keyCode == cc.macro.KEY.a) {
                this.leftMove = true;
                CharacterMoveLR.leftOrRight = true;
                this.node.runAction(cc.flipX(true));
            } else if (e.keyCode == cc.macro.KEY.right || e.keyCode == cc.macro.KEY.d) {
                this.rightMove = true;
                CharacterMoveLR.leftOrRight = false;
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