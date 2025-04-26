document.addEventListener("DOMContentLoaded", loadStudentData);

function loadStudentData() {
  var studentName = document.getElementById("studentName");
  var studentID = document.getElementById("studentID");
  var studentCourse = document.getElementById("studentCourse");
  var gradeTable = document.getElementById("gradeTable");

  var students = JSON.parse(localStorage.getItem("students")) || [];
  var loggedInStudentID = localStorage.getItem("loggedInStudentID");

  var loggedInStudent = students.find(
    (student) => student.id === loggedInStudentID
  );

  if (loggedInStudent) {
    studentName.innerText = loggedInStudent.name;
    studentID.innerText = loggedInStudent.id;
    studentCourse.innerText = loggedInStudent.course;

    var row = gradeTable.insertRow(-1);
    row.insertCell(0).innerText = loggedInStudent.course;
    row.insertCell(1).innerText = loggedInStudent.grade || "Pending";
  }
}

function logout() {
  localStorage.removeItem("loggedInStudentID");
  window.location.href = "/project.html";
}
