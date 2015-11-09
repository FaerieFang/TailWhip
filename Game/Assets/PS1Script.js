#pragma strict

var player : GameObject;
var PS : GameObject;
var rb = player.GetComponent.<Rigidbody2D>();
function Start () {
	

}

function Update () {
	transform.position.y = player.transform.position.y;
	transform.position.x = player.transform.position.x;
	
	transform.rotation = player.transform.rotation;
	
	//changes based on movement of boat
	

	PS.GetComponent.<ParticleSystem>().emissionRate = rb.velocity.magnitude * 5;
	PS.GetComponent.<ParticleSystem>().startSpeed = rb.velocity.magnitude * 3;
}