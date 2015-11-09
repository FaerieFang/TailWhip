#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var rb : Rigidbody2D;
var turnSpe : float;

var speed : float = 10;

function Start () {
	rb = GetComponent.<Rigidbody2D>();

}

 function Update () {
 	//movement
 	if (Input.GetKey(moveUp)){
 		rb.velocity = transform.up * speed;

 	}
 	
 	else if (Input.GetKey(moveDown)) {
 		rb.velocity = transform.up * (speed*-0.5);
 	}
 	
 	if (Input.GetKey(moveRight)){
 		rb.rotation += turnSpe * -1;

 	}
 	
	else if  (Input.GetKey(moveLeft)){	
		rb.rotation += turnSpe;
 	}
	
 	 
 }


 	 
 