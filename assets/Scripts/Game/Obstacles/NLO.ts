import Score from "../UIComponent/Score";

const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    leftMove = false;
    rightMove = false;

    maxX = 100;
    minX = -100;

    deltaX = Math.random() * 1.5 + 1;

    onLoad() {
        this.maxX = this.node.x + Math.floor(Math.random() * 70 + 1);
        this.minX = this.node.x - Math.floor(Math.random() * 70 + 1);

        if (this.maxX > 230) {
            this.maxX = 230;
        }
        if (this.minX < -230) {
            this.minX = -230;
        }

        Math.floor(Math.random() * 2 + 1) == 1 ? this.leftMove = true :
            this.rightMove = true;
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.name == "BlackHole<CircleCollider>") {
            self.node.y += 500;
        }
        if (other.name == "Character<PolygonCollider>") {
            cc.director.loadScene("GameOver");
        }
    }


    update(dt) {
        if (this.node.scaleX < 0.1) {
            this.node.destroy();
            Score.nloScore = Score.nloScore + 100;
        }
        if (this.leftMove) {
            this.node.x -= this.deltaX;
            if (this.node.x < this.minX) {
                this.leftMove = false;
                this.rightMove = true;
            }
        } else if (this.rightMove) {
            this.node.x += this.deltaX;
            if (this.node.x > this.maxX) {
                this.leftMove = true;
                this.rightMove = false;
            }
        }
    }
}
