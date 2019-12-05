// JavaScript source code
var content = [];
var count = 1;

const cells = [
    ["1", "2", "3"],
    ["4", "5", "6"],
    ["7", "8", "9"]
]

for (let i = 0; i < 3; i++) {
    content[i] = new Array;
    for (let j = 0; j < 3; j++) {
        content[i][j] = (document.getElementById(cells[i][j]).innerHTML);
    }
}

setclickevent();

function setclickevent() {
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) {
            document.getElementById(cells[i][j]).addEventListener("dblclick", function () {
                change(cells[i][j], i, j)
            }, false);
        }
}

function change(element, i, j) {
    if (content[i][j] == "") {
        if (count % 2 == 0) {
            document.getElementById(element).innerHTML = "O";
            document.getElementById(element).style.backgroundColor = 'rgba(51, 0, 153, 0.8)';
            document.getElementById(element).style.textShadow = '0px 0px 25px black';
            document.getElementById(element).style.textShadow = '0px 0px 1vw lightblue';
        } else {
            document.getElementById(element).innerHTML = "X";
            document.getElementById(element).style.backgroundColor = 'rgba(204, 0, 102, 0.8)';
            document.getElementById(element).style.textShadow = '0px 0px 25px black';
            document.getElementById(element).style.textShadow = '0px 0px 1vw pink';

        }
        content[i][j] = document.getElementById(element).innerHTML;
        count++;

    }
    check(content[i][j]);

}

function check(x) {
    var b = false;
    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++)
            if (content[i][j] == "")
                b = true;

    for (let i = 0; i < 3; i++)

        if (
            (content[i][0] == content[i][1] && content[i][1] == content[i][2] && content[i][0] != "") ||
            (content[0][i] == content[1][i] && content[1][i] == content[2][i] && content[0][i] != "") ||
            (content[0][0] == content[1][1] && content[0][0] == content[2][2] && content[0][0] != "") ||
            (content[0][2] == content[1][1] && content[1][1] == content[2][0] && content[0][2] != "")
        ) {
            restart(x);

        }
        else
            if (b == false)
                restart('');

    return false;

}

var restartbutton = document.getElementById('restart');
restartbutton.addEventListener('click', function () {
    restart();
}, false);

function restart(x) {

    if (x == "X")
        addscore("player1")
    else if (x == "O")
        addscore("player2")

    for (let i = 0; i < 3; i++)
        for (let j = 0; j < 3; j++) {

            document.getElementById(cells[i][j]).innerHTML = " ";
            document.getElementById(cells[i][j]).style.backgroundColor = "rgba(255,255,255,0.5)";
            content[i][j] = "";
        }


}

function addscore(player) {
    let score = Number(document.getElementById(player).innerHTML);
    score++;
    document.getElementById(player).innerHTML = score;

}


var resetbutton = document.getElementById('resetscore');
resetbutton.addEventListener('click', function () {
    resetscore();
}, false);

function resetscore() {
    document.getElementById("player1").innerHTML = "0";
    document.getElementById("player2").innerHTML = "0";
}