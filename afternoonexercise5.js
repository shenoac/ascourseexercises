var student = {
    studentName: "BMP",
    studentId: 1,
    subjects: ["purring", "sleeping", "eating"],
    major: undefined,
    isStudying: true,
    grade: 100,
    allScores: [89, 99, 100, 85],
};
function calculateGrade(student) {
    // Example: Calculate the average grade
    var total = student.allScores.reduce(function (sum, score) { return sum + score; }, 0);
    var average = total / student.allScores.length;
    return average;
}
