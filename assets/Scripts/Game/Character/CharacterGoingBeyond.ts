const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterGoingBeyond extends cc.Component {

    @property
    ScreenWidth = 560;

    update(dt) {
        if (this.node.x > this.ScreenWidth / 2 + 40) {
            this.node.x = -this.ScreenWidth / 2 - 25;
        }
        if (this.node.x < -this.ScreenWidth / 2 - 40) {
            this.node.x = this.ScreenWidth / 2 + 25;
        }
    }
}