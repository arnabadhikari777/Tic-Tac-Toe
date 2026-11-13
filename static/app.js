let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turno = true;

let winpatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [3, 4, 5],
    [0, 4, 8],
    [6, 7, 8],
    [2, 5, 8],
    [1, 4, 7],
    [6, 4, 2],
];

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turno) {
            box.innerText = "o";
            turno = false;
        } else {
            box.innerText = "x";
            turno = true;
        }
        box.disabled = true

        checkwinwer();

    });
});

const checkwinwer = () => {
    for (let pattern of winpatterns) {
        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("win the match", pos1val)
            }
        }
        

    }
}

