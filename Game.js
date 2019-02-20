const GameState = Object.freeze({
    WELCOME:   Symbol("welcome"),
    START: Symbol("start"),
    HOUSE: Symbol("house"),
    LEFT: Symbol("left"),
    COLLECT: Symbol("collect"),
    LOOK: Symbol("look"),
    NEXT: Symbol("next"),
    FENCE: Symbol("fence"),
    HIDE: Symbol("hide"),
    LAST: Symbol("last"),
    INSIDE: Symbol("inside"),
    OUTSIDE: Symbol("outside"),
    END: Symbol("end"),
    READY: Symbol("ready"),
    DOOR: Symbol("door"),
    FINISH: Symbol("finish")

});
export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOME;
    }
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOME:
            sReply = "Welcome to the Game, Type Start to play !";
            this.stateCur = GameState.START;
            break;
            case GameState.START:
            if(sInput.toLowerCase().match("start")){
                sReply = "Here's a game. You have to walk through the neighbors and collect the candies but be careful of witches or they will take away your candies. Are you afraid or not?";
                this.stateCur = GameState.HOUSE;
            }else{
                sReply = "Common buddy! At least play it once. You would like it for sure!";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.HOUSE:
            if(sInput.toLowerCase().match("not")){
                sReply = "which house do you want to enter, the one on left side or right?";
                this.stateCur = GameState.LEFT;
            }else{
                sReply = "Common buddy! At least play it once. You would like it for sure!";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.LEFT:
            if(sInput.toLowerCase().match("left")){
                sReply = "Perfect ! Now knock the door of house or think some sort of idea how to tackle with witches!";
                this.stateCur = GameState.COLLECT;
            }else{
                sReply = "Go to left door, Mr. right. Are you not hearing any voices?";
                this.stateCur = GameState.LEFT;
            }
            break;
            case GameState.COLLECT:
            if(sInput.toLowerCase().match("knock")){
                sReply = "Collect your candies! Now GO ahead but be careful of witches !";
                this.stateCur = GameState.LOOK;
            }else{
                sReply = "OOps ! you are caught. Don't think too much to make a decision. Witches are always after you, Start again!";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.LOOK:
            if(sInput.toLowerCase().match("go")){
                sReply = "There are no witches roaming, Do you want to walk to neighbor's ? yes or no";
                this.stateCur = GameState.NEXT;
            }else{
                sReply = "OOps ! you are caught. Don't think too much to make a decision. Start again";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.NEXT:
            if(sInput.toLowerCase().match("yes")){
                sReply = "Be careful, you see someone is standing near the driveway,. move back or continue walking";
                this.stateCur = GameState.FENCE;
            }else{
                sReply = "Are you afraid? Go watch pogo!";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.FENCE:
            if(sInput.toLowerCase().match("back")){
                sReply = "Okay, Hide there for little while behind the fence until they go away.";
                this.stateCur = GameState.HIDE;
            }else{
                sReply = "You are caught, start again !";
                this.stateCur = GameState.START;
            }
            break;
            case GameState.HIDE:
            if(sInput.toLowerCase().match("hide")){
                sReply = "Okay, there's no one coming, Now you can proceed to next house or you want to wait more?!";
                this.stateCur = GameState.LAST;
            }else{
                sReply = "Someone's coming from behind, Go back";
                this.stateCur = GameState.FENCE;
            }
            break;
            case GameState.LAST:
            if(sInput.toLowerCase().match("proceed")){
                sReply = "Be careful ! there are some voices coming from inside the house, Go inside or stay! ";
                this.stateCur = GameState.INSIDE;
            }else{
                sReply = "OOPS! Time is friend of no-one, They've got your candies again, start again!";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.INSIDE:
            if(sInput.toLowerCase().match("inside")){
                sReply = "Collect your candies!  Wait ! the house owner is offering you a cup of coffee. Do you want to accept it or go outside because it could be a trap?";
                this.stateCur = GameState.OUTSIDE;
            }else{
                sReply = "Witches love your candies, Your score is zero, start again!";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.OUTSIDE:
            if(sInput.toLowerCase().match("outside")){
                sReply = "Good! they wanted to disguise you but you escaped smartly. jump to next level";
                this.stateCur = GameState.END;
            }else{
                sReply = "OOps! he disguised you! you lost.";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.END:
            if(sInput.toLowerCase().match("jump")){
                sReply = "This could be little bit difficult because this house has large driveway. You have to cross it carefully, Hit Ready.";
                this.stateCur = GameState.READY;
            }else{
                sReply = "Okay! You have eaten enough candies. if you want to play again this level. Type start!";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.READY:
            if(sInput.toLowerCase().match("ready")){
                sReply = "Look at your right side, You see that your eyes glowing in the bushes? Where do you want to run. Towards door or fence?";
                this.stateCur = GameState.DOOR;
            }else{
                sReply = "Common! you can do it. You have almost made it. Hit ready.";
                this.stateCur = GameState.READY;
            }
            break;
            case GameState.DOOR:
            if(sInput.toLowerCase().match("door")){
                sReply = "Door one Or Door two?";
                this.stateCur = GameState.FINISH;
            }else{
                sReply = "OOps! you did not see the witch hiding near the fence. they have got your candies. Start again.";
                this.stateCur = GameState.WELCOME;
            }
            break;
            case GameState.FINISH:
            if(sInput.toLowerCase().match("one")){
                sReply = "You have enough candies, Happy Halloween, Enjoy your Candies.";
            }else{
                sReply = "They got you! you should have opened door one, start again.";
                this.stateCur = GameState.START;
            }
            break;
        }
                
        return([sReply]);
    }
}