import СameraСontrol from "../Game/СameraСontrol";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    @property(cc.Button)
    playGameButton: cc.Button = null;

    onLoad() {
        cc.debug.setDisplayStats(false);
        this.playGameButton.node.on('click', this.playGame, this);
    }

    playGame() {
        СameraСontrol.newGame();
        cc.director.loadScene("Game");
    }
}