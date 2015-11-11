#pragma strict

var speed : float;


var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;
var attack : KeyCode;

function Start () {

}

function Update () {

	/* ********MOVEMENT********* */
	if (Input.GetKey(moveUp)){
		GetComponent.<Rigidbody2D>().velocity.y = speed;
		if (Input.GetKey(moveLeft)){
			GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		}
		if (Input.GetKey(moveDown)){
			GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		}
		if (Input.GetKey(moveRight)){
			GetComponent.<Rigidbody2D>().velocity.x = speed;
		}		
	}
	else if (Input.GetKey(moveDown)){
		GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		if (Input.GetKey(moveLeft)){
			GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		}
		if (Input.GetKey(moveRight)){
			GetComponent.<Rigidbody2D>().velocity.x = speed;
		}
		if (Input.GetKey(moveUp)){
			GetComponent.<Rigidbody2D>().velocity.y = speed;
		}		
	}
	else if (Input.GetKey(moveLeft)){
		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		if (Input.GetKey(moveRight)){
			GetComponent.<Rigidbody2D>().velocity.x = speed;
		}
		if (Input.GetKey(moveDown)){
			GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		}
		if (Input.GetKey(moveUp)){
			GetComponent.<Rigidbody2D>().velocity.y = speed;
		}				
	}
	else if (Input.GetKey(moveRight)){
		GetComponent.<Rigidbody2D>().velocity.x = speed;
		if (Input.GetKey(moveLeft)){
			GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
		}
		if (Input.GetKey(moveDown)){
			GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
		}
		if (Input.GetKey(moveUp)){
			GetComponent.<Rigidbody2D>().velocity.y = speed;
		}		
	}
	else{
		GetComponent.<Rigidbody2D>().velocity.x = 0;
		GetComponent.<Rigidbody2D>().velocity.y = 0;
	}
	if (Input.GetKeyUp(moveUp)){
		GetComponent.<Rigidbody2D>().velocity.y = 0;	
	}
	else if (Input.GetKeyUp(moveDown)){
		GetComponent.<Rigidbody2D>().velocity.y = 0;	
	}
	else if (Input.GetKeyUp(moveLeft)){
		GetComponent.<Rigidbody2D>().velocity.x = 0;	
	}
	else if (Input.GetKeyUp(moveRight)){
		GetComponent.<Rigidbody2D>().velocity.x = 0;
	}
	/* ********END MOVEMENT********* */

	
	if (Input.GetKey(attack)){
		Attack();
	}

}

function Attack(){

}
 
 

