'use strict'

class Stickman{
	consturctor(){
		this.stickmanState = 0;	
		this.head = document.createElement("div");
		this.head.id = "head";
		this.neck = document.createElement("div");
		this.neck.id = "neck";
		this.body = document.createElement("div");
		this.body.id = "body";
		this.larm = document.createElement("div");
		this.larm.id = "larm";
		this.rarm = document.createElement("div");
		this.rarm.id = "rarm";
		this.lleg = document.createElement("div");
		this.lleg.id = "lleg";
		this.rleg = document.createElement("div");
		this.rleg.id = "rleg";
	}

	

	plotStickman(stickmanState){
			if (stickmanState == 1){
		    head.style.visibility = "visible";        
		} else if (stickmanState == 2){
		    neck.style.visibility = "visible"; 
		} else if (stickmanState == 3){
		    body.style.visibility = "visible";
		} else if (stickmanState == 4){
		    larm.style.visibility = "visible";
		}else if (stickmanState == 5){
		    rarm.style.visibility = "visible";
		}else if (stickmanState == 6){
		    lleg.style.visibility = "visible";
		}else if (stickmanState == 7){
		    rleg.style.visibility = "visible"; 
		}
	}
}
