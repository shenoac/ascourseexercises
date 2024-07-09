type Student = {
    studentName: string;
    studentId: number;
    subjects: string[];
    major?: string; // Optional property
    isStudying: boolean;
    grade: number;
    uniqueSymbol: symbol;
};

let student: Student = {
    studentName: "BMP",
    studentId: 1,
    subjects: ["purring", "sleeping", "eating"],
    major: undefined, // Optional, can be omitted
    isStudying: true,
    grade: 100,
    uniqueSymbol: Symbol("key")
};

console.log(student.studentName, student.studentId, student.subjects, student.isStudying, student.grade);
