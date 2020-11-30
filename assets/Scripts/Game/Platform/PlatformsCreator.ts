const { ccclass, property } = cc._decorator;

@ccclass
export default class PlatformsCreator extends cc.Component {

    @property(cc.Prefab)
    greenPlatform: cc.Prefab = null;

    @property(cc.Prefab)
    whitePlatform: cc.Prefab = null;

    maxX = 200;
    minX = -200;

    plarformCreate: boolean = true;


    onLoad() {
        if (this.plarformCreate) {
            this.plarformCreate = false;
            let platformId = 1;
            for (let index = 1; index < 100; index++) {

                if (platformId == 1) {
                    this.createPlatform(index, this.greenPlatform);
                    platformId = 2;
                } else {
                    this.createPlatform(index, this.whitePlatform);
                    platformId = 1;
                }
            }
        }
    }

    createPlatform(index: number, platformColor: cc.Prefab) {
        let platform = cc.instantiate(platformColor);
        platform.setPosition(Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX), 100 * index);
        this.node.addChild(platform);
    }
}