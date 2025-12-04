function processStudents(students) {

  const filtered = students.filter(student => student.marks > 60);

  const sorted = filtered.sort((a, b) => b.marks - a.marks);

  const names = sorted.map(student => student.name);

  return names;
}
