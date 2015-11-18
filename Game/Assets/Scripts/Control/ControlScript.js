#pragma strict

var paused : System.Boolean;
var MiniMap : GameObject;
public var backCount : int;

function Start () {

}

function Update () {


}

 function OnGUI () {
 
 	//In Game GUI
 	if (GUI.Button (Rect (Screen.width - 70,5,60,20), "Pause")) {
		paused = !paused;
		if (paused){
			Time.timeScale = 0;
		}
		else{
			Time.timeScale = 1;
		}
	}
 
 
	//Pause Menu
   	if(paused) {
	    // Make a background box
	    GUI.Box (Rect (10,10,150,90), "Paused");
	 
	    // Make the first button
	    if (MiniMap.GetComponent(camScript).mEnabled){
	    	if (GUI.Button (Rect (20,40,130,20), "MiniMap Off")) {
	    		MiniMap.GetComponent(camScript).mEnabled = !MiniMap.GetComponent(camScript).mEnabled;
	    	}
	    }
	    else if (!MiniMap.GetComponent(camScript).mEnabled){
	    	if (GUI.Button (Rect (20,40,130,20), "Minimap On")) {
	    		MiniMap.GetComponent(camScript).mEnabled = !MiniMap.GetComponent(camScript).mEnabled;
	    	}
   		}
 	}
 }