function addSubject() {
    const container = document.getElementById("subject-list");

    const div = document.createElement("div");
    div.className = "subject";

    div.innerHTML = `
        <input type="number" placeholder="Credits" class="credits">
        <input type="number" placeholder="Grade Point" class="grade">
    `;

    container.appendChild(div);
}

function calculateCGPA() {
    let credits = document.querySelectorAll(".credits");
    let grades = document.querySelectorAll(".grade");

    let totalCredits = 0;
    let totalPoints = 0;

    for (let i = 0; i < credits.length; i++) {
        let c = parseFloat(credits[i].value);
        let g = parseFloat(grades[i].value);

        if (isNaN(c) || isNaN(g) || c <= 0 || g < 0) {
            alert("Please enter valid numbers for all fields.");
            return;
        }

        totalCredits += c;
        totalPoints += c * g;
    }

    let cgpa = (totalPoints / totalCredits).toFixed(2);

    document.getElementById("cgpa-result").innerText = "CGPA: " + cgpa;
}
