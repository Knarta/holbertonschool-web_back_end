export default function updateStudentGradeByCity(students, city, newGrades) {
    return students
     .filter((students) => students.location === city)
     .map((student) => {
        const newGrades = newGrades.find((grade) => grade.studentId === student.id);
        const grade = !newGrades ? 'N/A' : newGrades.grade;
        return { ...student, grade };
     });
}