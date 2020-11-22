const { ccclass, property } = cc._decorator;

@ccclass
export default class PlaformDestroyer extends cc.Component {
    update(dt) {
        if (this.node.y < cc.find("Game/Main Camera").y - 465) {
            this.node.destroy();
        }
    }
}