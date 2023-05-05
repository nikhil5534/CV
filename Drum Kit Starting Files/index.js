var nbButton =document.querySelectorAll(".drum").length;
for (var i = 0 ;i<nbButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
    var tap= this.innerHTML;
    switch (tap) {
        case "w":
            var w = new Audio('sounds/tom-1.mp3');
            w.play();
            break;
        case "a":
            var a = new Audio('sounds/tom-2.mp3');
            a.play();
            break;
        case "s":
            var s = new Audio('sounds/tom-3.mp3');
            s.play();
            break;
        case "d":
            var d = new Audio('sounds/tom-4.mp3');
            d.play();
            break;
        case "j":
            var j = new Audio('sounds/snare.mp3');
            j.play();
            break;
        case "k":
            var k = new Audio('sounds/crash.mp3');
            k.play();
            break;
        case "l":
            var l = new Audio('sounds/kick-bass.mp3');
            l.play();
            break;
        default:
            
    }
    var keyboardInput = document.getElementById('keyboard-input');
    document.addEventListener('keypress',(Event)=> {
        if (Event.key =="w") {
            var w = new Audio('sounds/tom-1.mp3');
            w.play();
        }
        if (Event.key =="a") {
            var a = new Audio('sounds/tom-2.mp3');
            a.play();
        }
        if (Event.key =="s") {
            var s = new Audio('sounds/tom-3.mp3');
            s.play();
        }
        if (Event.key =="d") {
            var d = new Audio('sounds/tom-4.mp3');
            d.play();
        }
        if (Event.key =="j") {
            var j = new Audio('sounds/snare.mp3');
            j.play();
        }
        if (Event.key =="k") {
            var k = new Audio('sounds/crash.mp3');
            k.play();
        }
        if (Event.key =="l") {
             var l = new Audio('sounds/kick-bass.mp3');
            l.play();
        }
        
       
    })

});

}
