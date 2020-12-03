const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    @property(cc.Prefab)
    nlo: cc.Prefab = null;

    @property(cc.Prefab)
    nlo1: cc.Prefab = null;

    @property(cc.Prefab)
    nlo2: cc.Prefab = null;

    maxX = 210;
    minX = -210;
    maxY = 4000;
    minY = 1000;

    onLoad() {
        this.createNlo();
    }

    createNlo() {
        let nloId = Math.floor(Math.random() * 3 + 1);
        let nlo = new cc.Node;
        switch (nloId) {
            case 1:
                nlo = cc.instantiate(this.nlo);
                break;
            case 2:
                nlo = cc.instantiate(this.nlo1);
                break;
            case 3:
                nlo = cc.instantiate(this.nlo2);
                break;
        }
        nlo.setPosition(Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX),
            Math.floor(Math.random() * (this.maxY - this.minY + 1) + this.minY));
        this.node.addChild(nlo);

        console.log("Created nlo on position = " + nlo.getPosition());
    }

    update(dt) {
        if (cc.find("Game/Character").y > this.minY) {
            this.minY += 3000;
            this.maxY += 3000;
            this.createNlo();
        }
    }
}
