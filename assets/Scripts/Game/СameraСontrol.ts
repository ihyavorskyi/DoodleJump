const { ccclass, property } = cc._decorator;

@ccclass
export default class СameraСontrol extends cc.Component {

    static deltaY: number = null;
    static platformY: number = null;

    public static cameraUpdate(other: cc.Collider) {

        if (this.platformY == null) {
            this.platformY = other.node.y;
        }

        if (this.platformY != other.node.y) {

            this.deltaY = other.node.y - this.platformY;

            if (this.deltaY > 0) {

                cc.find("Game/Main Camera").runAction(cc.moveBy(0.003 * this.deltaY, 0, this.deltaY));
                cc.find("Game/Wallpapers").runAction(cc.moveBy(0.003 * this.deltaY, 0, this.deltaY));
                cc.find("Game/NodeUI").runAction(cc.moveBy(0.003 * this.deltaY, 0, this.deltaY));
                this.platformY = other.node.y;
            }
        }
    }

    public static newGame() {
        this.deltaY = null;
        this.platformY = null;
    }
}