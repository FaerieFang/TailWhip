#pragma strict

var oneTimeButton : System.Boolean;
public var active : System.Boolean;
var posTag : String;
var targetWall : GameObject;


var closePos : System.Boolean;
var closeCheck1 : System.Boolean;
var closeCheck2 : System.Boolean;

var boxEnter : System.Boolean;
var playerEnter : System.Boolean;

function Start () {
	
}

function Update () {

}

function OnTriggerEnter2D (Coll : Collider2D){
	if (Coll.gameObject.tag == posTag){
		active = true;
		boxEnter = true;
		BroadcastOpen();
		closeCheck1 = false;
	
	}
	if (Coll.gameObject.tag == "Player"){
		active = true;
		playerEnter = true;
		BroadcastOpen();
		closeCheck2 = false;
	}
}
function OnTriggerExit2D (Coll : Collider2D){
	if (Coll.gameObject.tag == posTag && !oneTimeButton){
		boxEnter = false;
		closeCheck1 = true;
		if (closeCheck1 && closeCheck2){
			active = false;
			BroadcastClose();
		}
		//active = false;
		//BroadcastClose();
	}
	if (Coll.gameObject.tag == "Player" && !oneTimeButton){
		playerEnter = false;
		closeCheck2 = true;
		//active = false;
		//BroadcastClose();
		if (closeCheck1 && closeCheck2){
			active = false;
			BroadcastClose();
		}
	}
}

function BroadcastOpen(){
	targetWall.SendMessage ("Open");	
}
function BroadcastClose(){
	targetWall.SendMessage ("Close");
}
