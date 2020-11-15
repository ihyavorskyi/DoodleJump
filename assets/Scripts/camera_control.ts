import DevScript from "./DevScript";

const {ccclass, property} = cc._decorator;

@ccclass
export default class NewClass extends cc.Component {

    update (dt) {
        let CharacterNode = cc.find("Game/Character");
        let WallpapersNode = cc.find("Game/Wallpapers");

        let targetPosition = CharacterNode.getPosition();
        let currentPosition = this.node.getPosition();
        currentPosition.lerp( targetPosition, 0.1, currentPosition );
        currentPosition.x = cc.misc.clampf(targetPosition.x, 0, 0);
        currentPosition.y = cc.misc.clampf(targetPosition.y+250, targetPosition.y-450, targetPosition.y+450);
    
        //if(CharacterNode.getNumberOfRunningActions() != 0){
        //    if(DevScript.lol){
                this.node.setPosition(currentPosition);
                WallpapersNode.setPosition(currentPosition);     
          //  }
        //}
    }
}
