import СameraСontrol from "../Game/СameraСontrol";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MainMenu extends cc.Component {

    @property(cc.Button)
    playGameButton: cc.Button = null;

    
    current: any;

 


    onLoad() {
        this.playGameButton.node.on('click', this.playGame, this);
        cc.debug.setDisplayStats(false);
    }

    playGame() {
        СameraСontrol.newGame();
        cc.director.loadScene("Game");
    }
}