#pragma strict

//life script
var controler : GameObject;
var lifeSprite : Texture;
public var maxLife : int;
public var canDamage : System.Boolean = true;
public var lifeCount : int;


function Start () {
	controler = GameObject.Find("Controler");
	yield WaitForSeconds (0.01);
	maxLife = controler.GetComponent(veriableScript).maxLife;
	lifeCount = controler.GetComponent(veriableScript).lifeCount;
}

function Update () {
	/***** LIFE COUNTER ******/
	if (lifeCount == 0){
		Death();
	}
	if (lifeCount > maxLife){
		lifeCount = maxLife;
	}
}
function OnCollisionEnter2D (coll: Collision2D) {
	//enemys
	if (coll.gameObject.tag == "enemy" && canDamage){
		lifeCount -= 1;
		canDamage = false;
		Damaged();
	}
	//+life
	if (coll.gameObject.name == "heart"){
		lifeCount += 1;
		Destroy (coll.gameObject);
	}

}
function OnGUI (){
	GUI.DrawTexture(Rect(Screen.width - 70,5,20,20), lifeSprite);
	GUI.Label(Rect(Screen.width - 64,4,20,20), lifeCount.ToString());
}

function Death (){

}

function Damaged (){
	
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = true;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = true;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = true;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = false;
	yield WaitForSeconds (0.2);
	GetComponent(SpriteRenderer).enabled = true;
	canDamage = true;
}
