const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    leftMove = false;
    rightMove = false;


    onLoad() {
        Math.floor(Math.random() * (2 - 1 + 1) + 1) == 1 ? this.leftMove = true :
            this.rightMove = true;
    }

    update(dt) {
        if (this.leftMove) {
            this.node.x -= 1;
            if (this.node.x < -200) {
                this.leftMove = false;
                this.rightMove = true;
            }
        } else if (this.rightMove) {
            this.node.x += 1;
            if (this.node.x > 200) {
                this.leftMove = true;
                this.rightMove = false;
            }
        }
    }
}
