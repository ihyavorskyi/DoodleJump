const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    leftMove = false;
    rightMove = false;

    deltaX = Math.random() * 1.5 + 1;

    onLoad() {
        Math.floor(Math.random() * 2 + 1) == 1 ? this.leftMove = true :
            this.rightMove = true;
    }


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        let leftTrue = false;
        if (other.name == "BlackHole<CircleCollider>") {
            if (this.rightMove) {
                this.rightMove = false;
                this.leftMove = true;
                leftTrue = true;
            }
            if (!leftTrue) {
                this.leftMove = false;
                this.rightMove = true;
            }
        }
    }


    update(dt) {
        if (this.leftMove) {
            this.node.x -= this.deltaX;
            if (this.node.x < -200) {
                this.leftMove = false;
                this.rightMove = true;
            }
        } else if (this.rightMove) {
            this.node.x += this.deltaX;
            if (this.node.x > 200) {
                this.leftMove = true;
                this.rightMove = false;
            }
        }
    }
}
