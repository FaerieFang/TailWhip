#pragma strict


var player : GameObject;
var tog : KeyCode;
var active : System.Boolean = false;
var mySkin : GUISkin;
var miniMap : System.Boolean;
public var mEnabled : System.Boolean;

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
	
	
	//miniMap
	if (miniMap){
		if (mEnabled){
			GetComponent.<Camera>().rect = Rect(0, 0, 0.2, 0.3);
		}
		else{
			GetComponent.<Camera>().rect = Rect(-1, -1, -0.2, -0.3);
		}
	}
}

 function OnGUI(){
 	
	 	if (miniMap){
		    if(mySkin)
		       GUI.skin = mySkin;
		    var cam : Camera = transform.GetComponent.<Camera>();
		    if (mEnabled){
		    GUI.Box(Rect(cam.pixelRect.x, (Screen.height - cam.pixelRect.yMax), cam.pixelWidth, cam.pixelHeight), "");
			}
	 }
}