const age = [10, 25 ,14, 30, 21, 51, 46, 12, 18]

const adults = age.filter((a, index, array) => {
    if (a >= 18){
        return a
    }
})

const children = age.filter((a, index, array) => {
    if (a < 18){
        return a
    }
})

console.log(adults);
console.log(children);

const students = [
    {name: 'Joao', grade: 10},
    {name: 'Jersey', grade: 5},
    {name: 'Jansen', grade: 8},
    {name: 'Henri', grade: 4},
    {name: 'July', grade: 6},
]

const aprovedStudents = students.filter(student => {
    if (student.grade >= 6)
        return student;
})

console.log(aprovedStudents);