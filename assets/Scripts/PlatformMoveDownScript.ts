const {ccclass, property} = cc._decorator;

@ccclass
export default class PlatformMoveDownScript extends cc.Component {

    @property
    PlatformMoveDownSpeed = 5;

    // onLoad () {}

    start () {

    }

    update (dt) {
        //this.node.y -= this.PlatformMoveDownSpeed;

        if(this.node.y <= -600){
            this.node.y = 830;
        }
    }
}
