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

    platformMaxX = 200;
    platformMinX = -200;
    platformMaxY = 150;
    platformMinY = 25;

    platformMaxYStep = 200;
    platformMinYStep = 200;

    creationLimit = 2000;

    nextLevelDifficulty = 5000;

    platformId = 0;
    platformCounter = 0;

    onLoad() {
        let platform = cc.instantiate(this.greenPlatform);
        platform.setPosition(0, 0);
        this.node.addChild(platform);

        this.creator();
    }

    platformSelection() {
        let randomPlatform = Math.floor(Math.random() * 10 + 1);
        switch (randomPlatform) {
            case 1:
                this.platformId = 1;
                console.log("WHITE PLATFORM");
                break;
            case 2: case 3: case 4:
                this.platformId = 2;
                console.log("BLUE PLATFORM");
                break;
            default:
                this.platformId = 3;
                console.log("GREEN PLATFORM");
                break;
        }
    }



    creator() {
        let platformCount = 0;

        while (this.platformMinY < this.creationLimit + 500) {
            this.platformSelection();

            switch (this.platformId) {
                case 1:
                    this.createPlatform(this.whitePlatform);
                    break;
                case 2:
                    this.createPlatform(this.bluePlatform);
                    break;
                case 3:
                    this.createPlatform(this.greenPlatform);
                    break;
            }
            platformCount += 1;
        }
        console.log("Created " + platformCount + " platfom");
    }

    createPlatform(platformColor: cc.Prefab) {
        let platform = cc.instantiate(platformColor);
        platform.setPosition(Math.floor(Math.random() * (this.platformMaxX - this.platformMinX + 1) + this.platformMinX),
            Math.floor(Math.random() * (this.platformMaxY - this.platformMinY + 1) + this.platformMinY));

        this.platformMaxY = platform.y + this.platformMaxYStep;
        this.platformMinY = platform.y + this.platformMinYStep;

        this.node.addChild(platform);
    }


    update(dt) {

        if (this.characterNode.y > this.creationLimit) {
            this.creationLimit += 1500;
            this.creator();
        }

        if (this.characterNode.y > this.nextLevelDifficulty) {

            if (this.platformMaxYStep < 200) {
                this.platformMaxYStep = this.platformMaxYStep + 25;
            } else if (this.platformMinYStep < 200) {
                this.platformMinYStep = this.platformMinYStep + 25;
            }
            this.nextLevelDifficulty += 500;
            console.log("The next level of difficulty = " + this.nextLevelDifficulty);
        }
    }
}