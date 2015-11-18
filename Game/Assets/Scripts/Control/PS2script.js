#pragma strict

public var first : System.Boolean;

function Start () {
	yield WaitForSeconds (0.11);
	if (!first){
		Destroy (this.gameObject);
	}
}

function Update () {

}
