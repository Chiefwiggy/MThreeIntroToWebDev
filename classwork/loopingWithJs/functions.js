let startingNumber = document.getElementById("startingNumber");
let endNumber = document.getElementById("endNumber");
let stepNumber = document.getElementById("stepNumber");
let results = document.getElementById("results");
let submitButton = document.getElementById("submitButton");
let displayEvens = document.forms["displayEvens"];

const evaluate = (start, end, step) => {
    let arr = [];
    for (let i = start; i <= end; i += step) {
        arr.push(i);
    }
    return arr;
}

function validate() {
    displayEvens.className = "needs-validation";

    let start = parseInt(startingNumber.value, 10);
    let end = parseInt(endNumber.value, 10);
    let step = parseInt(stepNumber.value, 10);

    

    if (!displayEvens.checkValidity()) {
        displayEvens.className = "was-validated";
        return false;
    }

    if (start > end) {
        results.innerText = "Starting Number cannot be larger than ending number";
    } else {


        document.getElementById("startingNumberResult").innerText = start;
        document.getElementById("endingNumberResult").innerText = end;
        document.getElementById("stepResult").innerText = step;
        let cr = document.getElementById("calculatedResults");

        let calculations = evaluate(start, end, step).map((t, i) => {
            return t;
        });

        cr.innerHTML = '<p>' + calculations.join('</p><p>') + '</p>';
    }

    results.style.display = "block";
    console.log("got here");

    

    return false;
}