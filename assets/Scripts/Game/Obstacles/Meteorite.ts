const { ccclass, property } = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    onLoad() {
        let animation = this.node.getComponent(cc.Animation);
        animation.play().repeatCount = Infinity;
        this.node.runAction(cc.moveBy(5, 0, -500));
    }

    start() {

    }

    update(dt) { }
}
