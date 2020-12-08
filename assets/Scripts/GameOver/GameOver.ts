import СameraСontrol from "../Game/СameraСontrol";

const { ccclass, property } = cc._decorator;

@ccclass
export default class GameOver extends cc.Component {

    @property(cc.Button)
    playAgainButton: cc.Button = null;

    @property(cc.Button)
    mainMenuButton: cc.Button = null;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    static score = 0;

    onLoad() {
        this.playAgainButton.node.on('click', this.playAgain, this);
        this.mainMenuButton.node.on('click', this.mainMenu, this);
        this.scoreLabel.string = "Score: " + GameOver.score;

    }

    playAgain() {
        СameraСontrol.newGame();
        cc.director.loadScene("Game");
    }

    mainMenu() {
        cc.director.loadScene("MainMenu");
    }
}