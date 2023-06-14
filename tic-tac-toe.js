let count = 0;
document.getElementById("b1").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b1").innerHTML = "X";
        count++;
        check();
    }
    else {
        document.getElementById("b1").innerHTML = "O";
        count = 0;
        check();
    }

}, { once: true });

document.getElementById("b2").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b2").innerHTML = "X";
        count++;
        check();
    }
    else {
        document.getElementById("b2").innerHTML = "O"
        count = 0;
        check();
    }
}, { once: true });

document.getElementById("b3").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b3").innerHTML = "X"
        count++;
        check();
    }
    else {
        document.getElementById("b3").innerHTML = "O"
        count = 0;
        check();
    }
    
}, { once: true });

document.getElementById("b4").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b4").innerHTML = "X"
        count++;
        check();
    }
    else {
        document.getElementById("b4").innerHTML = "O"
        count = 0;
        check();
    }
}, { once: true });

document.getElementById("b5").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b5").innerHTML = "X"
        count++;
        check();
    }
    else {
        document.getElementById("b5").innerHTML = "O"
        count = 0;
        check();
    }
}, { once: true });

document.getElementById("b6").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b6").innerHTML = "X"
        count++;
        check();
    }
    else {
        document.getElementById("b6").innerHTML = "O"
        count = 0;
        check();
    }

}, { once: true });

document.getElementById("b7").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b7").innerHTML = "X"
        count++;
        check();
    }
    else {
        document.getElementById("b7").innerHTML = "O"
        count = 0;
        check();
    }
}, { once: true });

document.getElementById("b8").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b8").innerHTML = "X"
        count++;
        check();
    }
    else {
        document.getElementById("b8").innerHTML = "O"
        count = 0;
        check();
    }
}, { once: true });

document.getElementById("b9").addEventListener("click", function flag() {
    if (count == 0) {
        document.getElementById("b9").innerHTML = "X"
        count++;
        check();
    }
    else {
        document.getElementById("b9").innerHTML = "O"
        count = 0;
        check();
    }
}, { once: true });



let a, b, c, d, e, f, g, h, i;

function check() {
    a = document.getElementById('b1').textContent;
    b = document.getElementById('b2').textContent;
    c = document.getElementById('b3').textContent;
    d = document.getElementById('b4').textContent;
    e = document.getElementById('b5').textContent;
    f = document.getElementById('b6').textContent;
    g = document.getElementById('b7').textContent;
    h = document.getElementById('b8').textContent;
    i = document.getElementById('b9').textContent;
    if ((a=="X"&&b=="X"&&c=="X")||(d=="X"&&e=="X"&&f=="X")||(g=="X"&&h=="X"&&i=="X")||(a=="X"&&d=="X"&&g=="X")||(b=="X"&&e=="X"&&h=="X")||(c=="X"&&f=="X"&&i=="X")||(a=="X"&&e=="X"&&i=="X")||(c=="X"&&e=="X"&&g=="X")){
        alert("player 1 won the game");
        location.reload();
    }
    else if ((a=="O"&&b=="O"&&c=="O")||(d=="O"&&e=="O"&&f=="O")||(g=="O"&&h=="O"&&i=="O")||(a=="O"&&d=="O"&&g=="O")||(b=="O"&&e=="O"&&h=="O")||(c=="O"&&f=="O"&&i=="O")||(a=="O"&&e=="O"&&i=="O")||(c=="O"&&e=="O"&&g=="O")){
        alert("player 2 won the game");
        location.reload();
    }
    else if ((a=="O"||a=="X")&&(b=="O"||b=="X")&&(c=="O"||c=="X")&&(d=="O"||d=="X")&&(e=="O"||e=="X")&&(f=="O"||f=="X")&&(g=="O"||g=="X")&&(h=="O"||h=="X")&&(i=="O"||i=="X")) {
        alert("Match Tie");
        location.reload();
        
    }
}