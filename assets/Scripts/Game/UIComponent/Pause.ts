const { ccclass, property } = cc._decorator;

@ccclass
export default class Pause extends cc.Component {

    paused: boolean = false;

    onLoad() {
        this.node.on('click', this.pause, this);
    }

    pause() {
        if (this.paused) {
            this.paused = !this.paused;
            cc.director.pause();
        } else {
            this.paused = !this.paused;
            cc.director.resume();
        }
    }
}
