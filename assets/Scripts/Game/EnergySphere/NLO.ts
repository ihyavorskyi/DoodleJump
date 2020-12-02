const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {
    update(dt) {
        if (this.node.scaleX < 0.1) {
            this.node.destroy();
            console.log("NLO Destroyed");
        }
    }
}
