const { ccclass, property } = cc._decorator;

@ccclass
export default class Score extends cc.Component {

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    @property(cc.Node)
    characterNode: cc.Node = null;

    score: number = 0;

    update(dt) {

        if (this.score < this.characterNode.y)
            this.score = this.characterNode.y;

        this.scoreLabel.string = "Score: " + this.score.toFixed();
    }
}
