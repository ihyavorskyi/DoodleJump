const { ccclass, property } = cc._decorator;

@ccclass
export default class PlatformsCreator extends cc.Component {

    @property(cc.Node)
    characterNode: cc.Node = null;

    @property(cc.Prefab)
    greenPlatform: cc.Prefab = null;

    @property(cc.Prefab)
    whitePlatform: cc.Prefab = null;

    @property(cc.Prefab)
    bluePlatform: cc.Prefab = null;

    maxX = 200;
    minX = -200;
    platformMaxY = 150;
    platformMinY = 25;

    platformCount = 0;

    isPlatformCreate: boolean = true;

    creationLimit = 10000;


    onLoad() {
        let platform = cc.instantiate(this.greenPlatform);
        platform.setPosition(0, 0);
        this.node.addChild(platform);

        this.creator();
    }

    creator() {
        while (this.platformMinY < this.creationLimit + 500) {
            this.createPlatform(this.whitePlatform);
        }
        console.log("Created " + this.platformCount + " platfom");
        this.platformCount = 0;

        /*  if (this.isPlatformCreate) {
             this.isPlatformCreate = false;
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
         } */
    }

    createPlatform(platformColor: cc.Prefab) {
        let platform = cc.instantiate(platformColor);
        platform.setPosition(Math.floor(Math.random() * (this.maxX - this.minX + 1) + this.minX),
            Math.floor(Math.random() * (this.platformMaxY - this.platformMinY + 1) + this.platformMinY));

        this.platformCount += 1;

        this.platformMaxY = platform.y + 150;
        this.platformMinY = platform.y + 25;

        this.node.addChild(platform);
    }
    

    update(dt) {
        if (this.characterNode.y > this.creationLimit) {
            this.creationLimit += 1500;
            this.creator();
        }
    }
}