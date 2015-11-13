#pragma strict

var oneTimeButton : System.Boolean;
public var active : System.Boolean;
var posTag : String;
var targetWall : GameObject;

function Start () {
	
}

function Update () {
	
}

function OnTriggerEnter2D (Coll : Collider2D){
	if (Coll.gameObject.tag == posTag){
		active = true;
		BroadcastOpen();
	}
	if (Coll.gameObject.tag == "Player"){
		active = true;
		BroadcastOpen();
	}
}
function OnTriggerExit2D (Coll : Collider2D){
	if (Coll.gameObject.tag == posTag && !oneTimeButton){
		active = false;
		BroadcastClose();
	}
	if (Coll.gameObject.tag == "Player" && !oneTimeButton){
		active = false;
		BroadcastClose();
	}
}

function BroadcastOpen(){
	targetWall.SendMessage ("Open");	
}
function BroadcastClose(){
	targetWall.SendMessage ("Close");
}
