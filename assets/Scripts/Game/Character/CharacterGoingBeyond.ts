const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterGoingBeyond extends cc.Component {

    @property
    ScreenWidth = 500;

    update(dt) {
        if (this.node.x > this.ScreenWidth / 2 + 15) {
            this.node.x = -this.ScreenWidth / 2;
        }
        if (this.node.x < -this.ScreenWidth / 2 - 15) {
            this.node.x = this.ScreenWidth / 2;
        }
    }
}