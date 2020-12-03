const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

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
            console.log("NLO Destroyed");
        }
    }
}
