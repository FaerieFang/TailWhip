#pragma strict


// HOOKSHOT VERIABLES
public var contEnabled : System.Boolean = true;
var hookshotPrefab : GameObject;
var fireHook : KeyCode;
var vArray = new Array();

function Start () {

}

function Update () {
	//Hookshot Update
	if (Input.GetKeyDown(fireHook)){
		Hookshot();
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		GetComponent.<Rigidbody2D>().velocity.y = 0;
	}
	//End Hookshot update

}

//Hookshot functions
function Hookshot (){
	if (contEnabled){
		contEnabled = false;
		var clone : GameObject;
		clone = Instantiate(hookshotPrefab, transform.position, transform.rotation);
		clone.GetComponent(hookshot).first = false;
		clone.GetComponent(hookshotTwo).first = false;
		Physics2D.IgnoreCollision(clone.GetComponent.<Collider2D>(), GetComponent.<Collider2D>());
	}
}

function GoToHookshot (){
	var realHook : GameObject = GameObject.Find("Hookshot(Clone)");
	vArray = realHook.GetComponent(hookshot).yArray;
	for (var i = 0; i < vArray.length; i++) {
		transform.position = vArray[i];
		yield WaitForSeconds (0.0000001);
	}
	contEnabled = true;
}

function OnTriggerEnter2D (coll: Collider2D){
	if (coll.gameObject.name == "HookTrail(Clone)"){
		Destroy (coll.gameObject);
	}
}
//End Hookshot functions