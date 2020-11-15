const {ccclass, property} = cc._decorator;

@ccclass
export default class CharacterMoveLR extends cc.Component {

    left: boolean = false;
    right: boolean = false;
    
    @property
    Delta: number = 3;

    onLoad () {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown, this)
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp, this)        
    }

    start () {

    }

    onKeyUp(e: KeyboardEvent) {
        if(e.keyCode == cc.macro.KEY.left || e.keyCode == cc.macro.KEY.a){
            this.left = false;
        }else if(e.keyCode == cc.macro.KEY.right || e.keyCode == cc.macro.KEY.d){
            this.right = false;
        }
    }

    onKeyDown(e: KeyboardEvent) {
        if(e.keyCode == cc.macro.KEY.left || e.keyCode == cc.macro.KEY.a){
            this.left = true;
        }else if(e.keyCode == cc.macro.KEY.right || e.keyCode == cc.macro.KEY.d){
            this.right = true;
        } 
    }
    update (dt) {
        
        let delta = 0;
        if(this.left){
            delta = -this.Delta;
        }else if (this.right){
            delta = this.Delta
        }else return;

        let position = this.node.x + delta;
        this.node.x = position;
    }

    onDestroy(){
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN,this.onKeyDown, this)
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP,this.onKeyUp, this)
    }    
}