import React, { useEffect, useState } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);

  // Fetch API
  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((data) => {
        setStudents(data);
      })
      .catch((error) => {
        console.error("Error fetching students:", error);
      });
  }, []);

  return (
    <div>
      <h1>Students List</h1>

      {students.map((student) => (
        <div
          key={student._id}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "8px",
          }}
        >
          <h3>{student.name}</h3>
          <p>Email: {student.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Students;