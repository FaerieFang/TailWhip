#pragma strict

var moveUp : KeyCode;
var moveDown : KeyCode;
var moveLeft : KeyCode;
var moveRight : KeyCode;

var Projectile : Rigidbody2D;

var speed : float = 5;

function Start () {

}

 function Update () {
 	//movement
 	if (Input.GetKey(moveUp)){
 		GetComponent.<Rigidbody2D>().velocity.y = speed;
 		GetComponent.<Rigidbody2D>().velocity.x = 0;
 	}
 	else if (Input.GetKey(moveDown)) {
 		GetComponent.<Rigidbody2D>().velocity.y = speed * -1;
 		GetComponent.<Rigidbody2D>().velocity.x = 0;
 	}
 	else if (Input.GetKey(moveRight)){
 		GetComponent.<Rigidbody2D>().velocity.x = speed;
 		GetComponent.<Rigidbody2D>().velocity.y = 0;
 	}
	else if  (Input.GetKey(moveLeft)){	
 		GetComponent.<Rigidbody2D>().velocity.x = speed * -1;
  		GetComponent.<Rigidbody2D>().velocity.y = 0;
 	}
 /**	
 	else if (Input.GetKeyUp(moveUp)){
 		rigidbody2D.velocity.y = 0;
 	}
  	else if (Input.GetKeyUp(moveDown)){
 		rigidbody2D.velocity.y = 0;
 	}
  	else if (Input.GetKeyUp(moveLeft)){
 		rigidbody2D.velocity.x = 0;
 	}
  	else if (Input.GetKeyUp(moveRight)){
 		rigidbody2D.velocity.x = 0;
 	}
 **/	
 	else{
 		GetComponent.<Rigidbody2D>().velocity.x = 0;	
 		GetComponent.<Rigidbody2D>().velocity.y = 0;	
 	}
 	
 	

 	//point twards camra
     var pos = Camera.main.WorldToScreenPoint(transform.position);
     var dir = Input.mousePosition - pos;
     var angle = Mathf.Atan2(dir.y, dir.x) * Mathf.Rad2Deg;
     transform.rotation = Quaternion.AngleAxis(angle, Vector3.forward); 
 }
 
function OnCollisionEnter2D(coll: Collision2D) {
	if (coll.gameObject.tag == "enemy"){
		Application.LoadLevel (Application.loadedLevel);
	}
}
 