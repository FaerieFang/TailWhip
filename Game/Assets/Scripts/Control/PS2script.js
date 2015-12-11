#pragma strict

public var first : System.Boolean;
var destroyTime : float;

function Start () {
	yield WaitForSeconds (destroyTime);
	if (!first){
		Destroy (this.gameObject);
	}
}

function Update () {

}
