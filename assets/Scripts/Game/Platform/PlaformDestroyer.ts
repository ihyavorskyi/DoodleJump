const { ccclass, property } = cc._decorator;

@ccclass
export default class PlaformDestroyer extends cc.Component {

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        if (other.name == "BlackHole<CircleCollider>" || other.name == "NLO<PolygonCollider>") {
            if (self.name == "PlatformGreen<BoxCollider>" || self.name == "PlatformWhite<BoxCollider>") {
                self.node.x += 200;
                if (self.node.x > 225) {
                    self.node.x = -225;
                }
            }
        }
    }

    update(dt) {
        if (this.node.y < cc.find("Game/Main Camera").y - 465) {
            this.node.destroy();
        }
    }
}