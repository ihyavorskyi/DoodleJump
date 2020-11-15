const { ccclass, property } = cc._decorator;

@ccclass
export default class PlatformMoveDownScript extends cc.Component {

    @property
    PlatformMoveDownSpeed = 5;

    r_move: boolean = true;
    l_move: boolean = false;


    // onLoad () {}

    start() {

    }

    update(dt) {
        //this.node.y -= this.PlatformMoveDownSpeed;

        if (this.r_move) {
            this.node.x += 2;
            if (this.node.x > 250) {
                this.r_move = false;
                this.l_move = true;
            }
        }
        if (this.l_move) {
            this.node.x -= 2;
            if (this.node.x < -250) {
                this.r_move = true;
                this.l_move = false;
            }
        }
        if (this.node.y <= -600) {
            this.node.y = 830;
        }
    }
}
