const { ccclass, property } = cc._decorator;

@ccclass
export default class PlatformsCreator extends cc.Component {

    static maxX = 200;
    static minX = -200;

    static createPlatform(index: number, platformColor: cc.Prefab) {
        let platformParent = cc.find("Game/PlatformParent");
        let platform = cc.instantiate(platformColor);
        platform.setPosition(Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX), 100 * index);
        platformParent.addChild(platform);
    }
}