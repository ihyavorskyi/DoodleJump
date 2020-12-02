const { ccclass, property } = cc._decorator;

@ccclass
export default class Sphere extends cc.Component {

    onLoad() {
        this.node.runAction(cc.sequence(
            cc.moveBy(0.5, 0, 500),
            cc.scaleTo(0.5, 0, 0),
            null
        ));
    }


    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.name == "NLO1<PolygonCollider>") {
            self.node.stopAllActions();
            other.node.runAction(cc.scaleTo(0.5, 0, 0));
            self.node.runAction(cc.spawn(
                cc.moveTo(0.5, other.node.getPosition()),
                cc.sequence(
                    cc.scaleTo(0.5, 1, 1),
                    cc.scaleTo(0.5, 0, 0),
                    null)
            ));
            let animation = self.node.getComponent(cc.Animation);
            animation.play();
        }
    }


    update(dt) {
        if (this.node.scaleX < 0.1) {
            this.node.destroy();
            console.log("DESTROED Bullet");
        }
    }
}
