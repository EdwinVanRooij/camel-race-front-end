<div id="dice-container">
    <div id="dice">
    <div class="face front"></div>
    <div class="face back"></div>
    <div class="face left"></div>
    <div class="face bottom"></div>
    <div class="face top"></div>
    <div class="face right"></div>
    </div>
    </div>








#dice {
    position: absolute;
    width: 100px; height: 100px;

    -moz-backface-visibility: hidden;
    -webkit-backface-visibility: hidden;
    -ms-backface-visibility: hidden;
    -o-backface-visibility: hidden;
    backface-visibility: hidden;

    -webkit-transform-style: preserve-3d;
    -moz-transform-style: preserve-3d;
    -ms-transform-style: preserve-3d;
    -o-transform-style: preserve-3d;
    transform-style: preserve-3d;
}

#dice .face {
    background: url(https://guimagames.azurewebsites.net/images/dice.png) no-repeat;
    background-size: 300px 200px;
    color: white;
    font-size: 20px;
    position: absolute;
    width: 100px; height: 100px;
    display: block;
}

#dice .front {
    -webkit-transform: perspective(000px) rotateX(0) translateZ(50px);
    -moz-transform: perspective(000px) rotateX(0) translateZ(50px);
    -ms-transform: perspective(000px) rotateX(0) translateZ(50px);
    -o-transform: perspective(000px) rotateX(0) translateZ(50px);
    transform: perspective(000px) rotateX(0) translateZ(50px);
}

#dice .back {
    background-position: -100px 0;
    -webkit-transform: perspective(000px) rotateY(180deg) translateZ(50px);
    -moz-transform: perspective(000px) rotateY(180deg) translateZ(50px);
    -ms-transform: perspective(000px) rotateY(180deg) translateZ(50px);
    -o-transform:  perspective(000px) rotateY(180deg) translateZ(50px);
    transform: perspective(000px) rotateY(180deg) translateZ(50px);
}

#dice .left {
    background-position: -200px 0;
    -webkit-transform: perspective(000px) rotateY(90deg) translateZ(50px);
    -moz-transform: perspective(000px) rotateY(90deg) translateZ(50px);
    -ms-transform: perspective(000px) rotateY(90deg) translateZ(50px);
    -o-transform: perspective(000px) rotateY(90deg) translateZ(50px);
    transform: perspective(000px) rotateY(90deg) translateZ(50px);
}

#dice .bottom {
    background-position: 0 -100px;
    -webkit-transform: perspective(000px) rotateX(-90deg)  translateZ(50px);
    -moz-transform: perspective(000px) rotateX(-90deg)  translateZ(50px);
    -ms-transform: perspective(000px) rotateX(-90deg)  translateZ(50px);
    -o-transform: perspective(000px) rotateX(-90deg)  translateZ(50px);
    transform: perspective(000px) rotateX(-90deg)  translateZ(50px);
}

#dice .top {
    background-position: -100px -100px;
    -webkit-transform:perspective(000px) rotateX(90deg) translateZ(50px);
    -moz-transform:perspective(000px) rotateX(90deg) translateZ(50px);
    -ms-transform:perspective(000px) rotateX(90deg) translateZ(50px);
    -o-transform:perspective(000px) rotateX(90deg) translateZ(50px);
    transform:perspective(000px) rotateX(90deg) translateZ(50px);
}

#dice .right {
    background-position: -200px -100px;
    -webkit-transform:perspective(000px) rotateY(-90deg)  translateZ(50px);
    -moz-transform:perspective(000px) rotateY(-90deg)  translateZ(50px);
    -ms-transform:perspective(000px) rotateY(-90deg)  translateZ(50px);
    -o-transform:perspective(000px) rotateY(-90deg)  translateZ(50px);
    transform:perspective(000px) rotateY(-90deg)  translateZ(50px);
}




var element = document.getElementById("dice-container");

var dice = {
		position0: { y: 0, rotateX: 0, rotateY: 0 },
		position1: { y: 0, rotateX: -900, rotateY: -180},
		position2: { y: 0, rotateX: -1080, rotateY: -180},
		position3: { y: 0, rotateX: -1080, rotateY: -90},
		position4: { y: 0, rotateX: -990, rotateY: -270},
		position5: { y: 0, rotateX: -810, rotateY: -90},
		position6: { y: 0, rotateX: -1080, rotateY: -270},

		roll: function(number) {

      if (!dice.element) {
				dice.element = document.getElementById("dice");
      }

			$(dice.element).transition(dice['position' + number], 1000, 'linear');
		}
	};

dice.roll(6);
