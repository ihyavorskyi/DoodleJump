import СameraСontrol from "../Game/СameraСontrol";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    @property(cc.Button)
    playGameButton: cc.Button = null;
    
    current: any;

    @property(cc.Label)
    scoreLabel: cc.Label = null;

    static score = 3432; 

    onLoad() {
        this.playGameButton.node.on('click', this.playGame, this);
        cc.debug.setDisplayStats(false);
        this.scoreLabel.string = "Record: " + MainMenu.score;
    }

    playGame() {
        СameraСontrol.newGame();
        cc.director.loadScene("Game");
    }
}