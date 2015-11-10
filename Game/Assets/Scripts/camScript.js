#pragma strict


var player : GameObject;
var tog : KeyCode;
var active : System.Boolean = false;
var mySkin : GUISkin;
var miniMap : System.Boolean;

function Start () {

}

function Update () {

 	if (Input.GetKeyDown(tog)){
		active = !active;

	}
	if (active){
	
		transform.position.y = player.transform.position.y;
		transform.position.x = player.transform.position.x;
	}
}

 function OnGUI(){
 	if (miniMap){
	    if(mySkin)
	       GUI.skin = mySkin;
	    var cam : Camera = transform.GetComponent.<Camera>();
	    GUI.Box(Rect(cam.pixelRect.x, (Screen.height - cam.pixelRect.yMax), cam.pixelWidth, cam.pixelHeight), "");
	}
 }