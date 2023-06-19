import assert from 'assert'

interface Student {
    id: number;
    name: string;
    courses: string[];
}

// function findDuplicateCourses(students: Student[]): string[] {
//     const courseCount: AccType = students
//         .flatMap((student) => student.courses) // Flatten all courses into a single array
//         .reduce((counts: AccType, course: string) => {
//             counts[course] = (counts[course] || 0) + 1; // Count the occurrence of each course
//             return counts;
//         }, {});

//     return Object.keys(courseCount).filter((course) => courseCount[course] > 1);
// }

type CourseCount = {
    [key: string]: number
}

function findDuplicateCourses(students: Student[]): string[] {
    const results: CourseCount = students
        .flatMap((c) => c.courses)
        .reduce((acc: CourseCount, course: string) => {
            acc[course] = (acc[course] || 0) + 1
            return acc
        }, {})
    return Object.keys(results).filter((key) => results[key] > 1)
}

const students: Student[] = [
    { id: 1, name: "Alice", courses: ["Math", "Science", "History"] },
    { id: 2, name: "Bob", courses: ["Math", "English"] },
    { id: 3, name: "Charlie", courses: ["Science", "History"] },
    { id: 4, name: "David", courses: ["Math", "Physics"] },
    { id: 5, name: "Eve", courses: ["History", "English"] },
];

assert.deepEqual(findDuplicateCourses(students), ["Math", "Science", "History", "English"])

console.info('success')
