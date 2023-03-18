const letterGrade = {
    "A+": 4.3, "A": 4.0, "A-": 3.7, "B+": 3.3, "B": 3.0, "B-": 2.7, "C": 2.0, "F": 0
};
const jamesDoe = ["A+", "B+", "A", "F"];

function qPoints(grades, gradesNum) {
    return grades.map(grade => gradesNum[grade] * 4);

}

function totalCridet(ary) {
    return ary.reduce((a, b) => a + b, 0);
}
function calcGpa(grades, gradesNum) {
    const qualtyPoints = qPoints(grades, gradesNum);
    const totalC = grades.length * 4;
    const totalQualtyPoints = totalCridet(qualtyPoints);
    return gpaCalc = totalQualtyPoints / totalC;
}
const jGpa = calcGpa(jamesDoe, letterGrade);
showOnHtml(`James Doe GPA is : ${jGpa}`);

function showOnHtml(gpa) {
    document.getElementById('gpa').textContent = gpa;
}
