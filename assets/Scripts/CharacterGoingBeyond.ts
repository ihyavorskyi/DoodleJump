const {ccclass, property} = cc._decorator;

@ccclass
export default class CharacterGoingBeyond extends cc.Component {

    @property
    ScreenSize = 500;

    // onLoad () {}

    // start () {}

    update (dt) {
        if(this.node.x > this.ScreenSize/2){
            this.node.x = -this.ScreenSize/2;
        }
        if(this.node.x < -this.ScreenSize/2){
            this.node.x = this.ScreenSize/2;
        }
    }
}