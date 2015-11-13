#pragma strict

var virtical : System.Boolean;
var button : GameObject;
var moved : int = 0;

function Start () {

}

function Update () {

}



function Open(){

	while (moved <= 50 && button.GetComponent(buttonScript).active){
		if (virtical){
			transform.position.y = transform.position.y + .1;
		}
		else if (!virtical){
			transform.position.x = transform.position.x + .1;
		}
		yield WaitForSeconds(0.01);
		//i += 1;
		moved += 1;
	}
}

function Close(){

	while (moved >= 0 && !button.GetComponent(buttonScript).active){
		if (virtical){
			transform.position.y = transform.position.y - .1;
		}
		else if (!virtical){
			transform.position.x = transform.position.x - .1;
		}
		yield WaitForSeconds(0.01);
		//i += 1;
		moved -= 1;
	}


}