const { ccclass, property } = cc._decorator;

@ccclass
export default class BlackHoleGenerator extends cc.Component {

    @property(cc.Prefab)
    blackHole: cc.Prefab = null;

    maxX = 180;
    minX = -180;

    maxY = 7500;
    minY = 2500;

    onLoad() {
        this.createBlackHole();
    }

    createBlackHole() {
        let hole = cc.instantiate(this.blackHole);
        hole.setPosition(Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX),
            Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY));
        this.node.addChild(hole);

        console.log("Created black hole on position = " + hole.getPosition());
    }

    update(dt) {
        if (cc.find("Game/Character").y > this.minY) {
            this.minY += 5000;
            this.maxY += 5000;
            this.createBlackHole();
        }
    }
}
