document.addEventListener("DOMContentLoaded", loadStudents);

function loadStudents() {
  var studentTable = document.getElementById("studentTable");
  studentTable.innerHTML = `
        <tr>
            <th>Name</th>
            <th>ID</th>
            <th>Course</th>
            <th>Grade</th>
            <th>Actions</th>
        </tr>`; // Reset table

  var students = JSON.parse(localStorage.getItem("students")) || [];

  students.forEach((student, index) => {
    var row = studentTable.insertRow(-1);
    row.insertCell(0).innerText = student.name;
    row.insertCell(1).innerText = student.id;
    row.insertCell(2).innerText = student.course || "None";
    row.insertCell(3).innerText = student.grade || "Pending";
    row.insertCell(4).innerHTML = `
            <button onclick="editStudent(${index})">Edit</button>
            <button onclick="deleteStudent(${index})" style="background-color:red;">Delete</button>`;
  });
}

function addStudent() {
  var name = document.getElementById("studentName").value;
  var id = document.getElementById("studentID").value;
  var course = prompt("Enter course:");
  var grade = prompt("Enter grade:");

  var students = JSON.parse(localStorage.getItem("students")) || [];
  students.push({ name, id, course, grade });

  localStorage.setItem("students", JSON.stringify(students));
  loadStudents();
}

function deleteStudent(index) {
  var students = JSON.parse(localStorage.getItem("students")) || [];
  students.splice(index, 1);
  localStorage.setItem("students", JSON.stringify(students));
  loadStudents();
}

function editStudent(index) {
  var students = JSON.parse(localStorage.getItem("students")) || [];

  var updatedName = prompt("Edit Name:", students[index].name);
  var updatedID = prompt("Edit ID:", students[index].id);
  var updatedCourse = prompt("Edit Course:", students[index].course);
  var updatedGrade = prompt("Edit Grade:", students[index].grade);

  students[index] = {
    name: updatedName,
    id: updatedID,
    course: updatedCourse,
    grade: updatedGrade,
  };

  localStorage.setItem("students", JSON.stringify(students));
  loadStudents();
}

function logout() {
  window.location.href = "/project.html";
}
