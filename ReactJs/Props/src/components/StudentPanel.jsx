class Student {
  constructor(name, course) {
    this.name = name;
    this.course = course;
  }
}

export function StudentPanel() {
  const students = [
    new Student("Ali", "Java"),
    new Student("Tayyab", "JavaScript"),
  ];

  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        <div>
          {students.map((student) => {
            return (
              <>
                <div className="bg-gray-200 p-10 rounded-lg mt-5">
                  <div>Name: {student.name}</div>
                  <div>Course: {student.course}</div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
