#pragma strict

var player : GameObject;
var PS : GameObject;
var rb : Rigidbody2D;
function Start () {
	rb = player.GetComponent.<Rigidbody2D>();

}

function Update () {
	transform.position.y = player.transform.position.y;
	transform.position.x = player.transform.position.x;
	
	transform.rotation.z = player.transform.rotation.z;
	
	//changes based on movement of boat
	
	if (rb.velocity.magnitude < 1){
		PS.GetComponent.<ParticleSystem>().emissionRate = 0;
	}
	else if (rb.velocity.magnitude < 2 && rb.velocity.magnitude > 1){
		PS.GetComponent.<ParticleSystem>().emissionRate = 1;
	}
	else if (rb.velocity.magnitude > 2 && rb.velocity.magnitude <= 5){
		PS.GetComponent.<ParticleSystem>().emissionRate = 5;
	}
	else{
		PS.GetComponent.<ParticleSystem>().emissionRate = rb.velocity.magnitude * 5;
		PS.GetComponent.<ParticleSystem>().startSpeed = rb.velocity.magnitude * 0.9;
	}
}