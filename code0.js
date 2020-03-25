gdjs.Main_32MenuCode = {};
gdjs.Main_32MenuCode.GDRewindTextObjects1= [];
gdjs.Main_32MenuCode.GDRewindTextObjects2= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects1= [];
gdjs.Main_32MenuCode.GDPlayButtonObjects2= [];
gdjs.Main_32MenuCode.GDBackgroundObjects1= [];
gdjs.Main_32MenuCode.GDBackgroundObjects2= [];
gdjs.Main_32MenuCode.GDBrick1Objects1= [];
gdjs.Main_32MenuCode.GDBrick1Objects2= [];
gdjs.Main_32MenuCode.GDBrick2Objects1= [];
gdjs.Main_32MenuCode.GDBrick2Objects2= [];
gdjs.Main_32MenuCode.GDBrick3Objects1= [];
gdjs.Main_32MenuCode.GDBrick3Objects2= [];
gdjs.Main_32MenuCode.GDBrick4Objects1= [];
gdjs.Main_32MenuCode.GDBrick4Objects2= [];
gdjs.Main_32MenuCode.GDBrick5Objects1= [];
gdjs.Main_32MenuCode.GDBrick5Objects2= [];
gdjs.Main_32MenuCode.GDBrick6Objects1= [];
gdjs.Main_32MenuCode.GDBrick6Objects2= [];
gdjs.Main_32MenuCode.GDPlayerObjects1= [];
gdjs.Main_32MenuCode.GDPlayerObjects2= [];

gdjs.Main_32MenuCode.conditionTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition0IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition1IsTrue_0 = {val:false};
gdjs.Main_32MenuCode.condition2IsTrue_0 = {val:false};


gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});gdjs.Main_32MenuCode.eventsList0x70818c = function(runtimeScene) {

{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isMouseButtonPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Levels", true);
}}

}


}; //End of gdjs.Main_32MenuCode.eventsList0x70818c
gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects = Hashtable.newFrom({"PlayButton": gdjs.Main_32MenuCode.GDPlayButtonObjects1});gdjs.Main_32MenuCode.eventsList0x5b6d78 = function(runtimeScene) {

{

gdjs.Main_32MenuCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, false);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].setAnimation(1);
}
}
{ //Subevents
gdjs.Main_32MenuCode.eventsList0x70818c(runtimeScene);} //End of subevents
}

}


{

gdjs.Main_32MenuCode.GDPlayButtonObjects1.createFrom(runtimeScene.getObjects("PlayButton"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.cursorOnObject(gdjs.Main_32MenuCode.mapOfGDgdjs_46Main_9532MenuCode_46GDPlayButtonObjects1Objects, runtimeScene, true, true);
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayButtonObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayButtonObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayButtonObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.Main_32MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateRightKey();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].flipX(false);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.Main_32MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateLeftKey();
}
}{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].flipX(true);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.Main_32MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").simulateJumpKey();
}
}}

}


{

gdjs.Main_32MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving() ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDPlayerObjects1[k] = gdjs.Main_32MenuCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayerObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].setAnimation(1);
}
}}

}


{

gdjs.Main_32MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayerObjects1.length;i<l;++i) {
    if ( gdjs.Main_32MenuCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping() ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDPlayerObjects1[k] = gdjs.Main_32MenuCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayerObjects1.length = k;}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].setAnimation(2);
}
}}

}


{

gdjs.Main_32MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));

gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
gdjs.Main_32MenuCode.condition1IsTrue_0.val = false;
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isJumping()) ) {
        gdjs.Main_32MenuCode.condition0IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDPlayerObjects1[k] = gdjs.Main_32MenuCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayerObjects1.length = k;}if ( gdjs.Main_32MenuCode.condition0IsTrue_0.val ) {
{
for(var i = 0, k = 0, l = gdjs.Main_32MenuCode.GDPlayerObjects1.length;i<l;++i) {
    if ( !(gdjs.Main_32MenuCode.GDPlayerObjects1[i].getBehavior("PlatformerObject").isMoving()) ) {
        gdjs.Main_32MenuCode.condition1IsTrue_0.val = true;
        gdjs.Main_32MenuCode.GDPlayerObjects1[k] = gdjs.Main_32MenuCode.GDPlayerObjects1[i];
        ++k;
    }
}
gdjs.Main_32MenuCode.GDPlayerObjects1.length = k;}}
if (gdjs.Main_32MenuCode.condition1IsTrue_0.val) {
/* Reuse gdjs.Main_32MenuCode.GDPlayerObjects1 */
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].setAnimation(0);
}
}}

}


{


gdjs.Main_32MenuCode.condition0IsTrue_0.val = false;
{
gdjs.Main_32MenuCode.condition0IsTrue_0.val = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
}if (gdjs.Main_32MenuCode.condition0IsTrue_0.val) {
gdjs.Main_32MenuCode.GDPlayerObjects1.createFrom(runtimeScene.getObjects("Player"));
{for(var i = 0, len = gdjs.Main_32MenuCode.GDPlayerObjects1.length ;i < len;++i) {
    gdjs.Main_32MenuCode.GDPlayerObjects1[i].setAnimation(3);
}
}}

}


}; //End of gdjs.Main_32MenuCode.eventsList0x5b6d78


gdjs.Main_32MenuCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Main_32MenuCode.GDRewindTextObjects1.length = 0;
gdjs.Main_32MenuCode.GDRewindTextObjects2.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayButtonObjects2.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects1.length = 0;
gdjs.Main_32MenuCode.GDBackgroundObjects2.length = 0;
gdjs.Main_32MenuCode.GDBrick1Objects1.length = 0;
gdjs.Main_32MenuCode.GDBrick1Objects2.length = 0;
gdjs.Main_32MenuCode.GDBrick2Objects1.length = 0;
gdjs.Main_32MenuCode.GDBrick2Objects2.length = 0;
gdjs.Main_32MenuCode.GDBrick3Objects1.length = 0;
gdjs.Main_32MenuCode.GDBrick3Objects2.length = 0;
gdjs.Main_32MenuCode.GDBrick4Objects1.length = 0;
gdjs.Main_32MenuCode.GDBrick4Objects2.length = 0;
gdjs.Main_32MenuCode.GDBrick5Objects1.length = 0;
gdjs.Main_32MenuCode.GDBrick5Objects2.length = 0;
gdjs.Main_32MenuCode.GDBrick6Objects1.length = 0;
gdjs.Main_32MenuCode.GDBrick6Objects2.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects1.length = 0;
gdjs.Main_32MenuCode.GDPlayerObjects2.length = 0;

gdjs.Main_32MenuCode.eventsList0x5b6d78(runtimeScene);
return;

}

gdjs['Main_32MenuCode'] = gdjs.Main_32MenuCode;
