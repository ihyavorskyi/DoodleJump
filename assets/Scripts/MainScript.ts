const {ccclass, property} = cc._decorator;

@ccclass
export default class MainScript extends cc.Component {

    onLoad () {
        //cc.director.getPhysicsManager().enabled = true;
        cc.director.getCollisionManager().enabled = true;
        cc.director.getCollisionManager().enabledDebugDraw = true;
        cc.director.getCollisionManager().enabledDrawBoundingBox = true;
    }

    start () {}

    //update (dt) {}
}