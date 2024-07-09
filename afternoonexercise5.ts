type Student = {
    studentName: string;
    studentId: number;
    subjects: string[];
    major?: string;
    isStudying: boolean;
    grade: number;
    allScores: number[];
};

let student1: Student = {
    studentName: "BMP",
    studentId: 1,
    subjects: ["purring", "sleeping", "eating"],
    major: undefined,
    isStudying: true,
    grade: 100,
    allScores: [89, 99, 100, 85],
};

let student2: Student = {
    studentName: "Skratchy",
    studentId: 2,
    subjects: ["jumping", "climbing", "asking for treats"],
    major: "Being Adorable",
    isStudying: false,
    grade: 95,
    allScores: [78, 85, 92, 88],
};


function calculateGrade(student: Student) {
    let totalGrades = student.allScores.reduce((sum, score) => sum + score, 0);
    let averageGrade = totalGrades/student.allScores.length;
    return averageGrade
}


console.log (((calculateGrade(student2)) + (calculateGrade(student1))) / 2);


