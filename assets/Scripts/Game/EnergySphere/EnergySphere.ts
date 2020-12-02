const { ccclass, property } = cc._decorator;

@ccclass
export default class Sphere extends cc.Component {

    onLoad() { }

    start() {

    }

    update(dt) {

        if (this.node.getNumberOfRunningActions() == 0) {
            this.node.destroy();
        }
    }
}
