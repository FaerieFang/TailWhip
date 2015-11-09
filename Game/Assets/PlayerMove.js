#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var rb : Rigidbody2D;

var speed : float = 10;

function Start () {
	rb = GetComponent.<Rigidbody2D>();

}

 function Update () {
 	//movement
 	if (Input.GetKey(moveUp)){
 		rb.velocity.y = speed;
		rb.MoveRotation(0);

 	}
 	
 	else if (Input.GetKey(moveDown)) {
 		rb.velocity.y = speed * -1;
 		rb.MoveRotation(180);
 	}
 	
 	else if (Input.GetKey(moveRight)){
 		rb.velocity.x = speed;
 		rb.MoveRotation(90);
 	}
 	
	else if  (Input.GetKey(moveLeft)){	
 		rb.velocity.x = speed * -1;
 		rb.MoveRotation(270);

 	}
	
 	 
 }

function FixedUpdate (){

 	if (Input.GetKey(moveUp)){
		rb.MoveRotation(0);

 	}
 	
 	else if (Input.GetKey(moveDown)) {
 		rb.MoveRotation(180);
 	}
 	
 	else if (Input.GetKey(moveRight)){
 		rb.MoveRotation(90);
 	}
 	
	else if  (Input.GetKey(moveLeft)){	
 		rb.MoveRotation(270);

 	}
	
 	 
 }