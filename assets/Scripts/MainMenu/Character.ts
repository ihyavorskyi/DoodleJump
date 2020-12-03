const { ccclass, property } = cc._decorator;

@ccclass
export default class CharacterMainMenu extends cc.Component {


    jumTime = 1.2;
    jumpAction = cc.jumpBy(this.jumTime, 0, 0, 250, 1);

    onLoad(){
        cc.director.getCollisionManager().enabled = true;
    }

    onCollisionEnter(other: cc.Collider, self: cc.Collider) {
        this.characterAction(self);
    }

    characterAction(self: cc.Collider) {
        self.node.stopAllActions();
        let jumpAnimation = self.getComponent(cc.Animation);
        jumpAnimation.play();
        self.node.runAction(this.jumpAction);
    }
}
