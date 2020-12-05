const { ccclass, property } = cc._decorator;

@ccclass
export default class Asteroid extends cc.Component {

    onLoad() {
        this.node.runAction(cc.rotateTo(Math.random() * (3 - 1.5 + 1) + 1.5, 720));
    }


    update(dt) {
        if (this.node.getNumberOfRunningActions() == 0) {
            this.onLoad();
        }
    }
}
