import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { updateEmployee, getEmployeeById } from "../services/api";

const EditEmployee = () => {
  const { id } = useParams();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [position, setPosition] = useState("");
  const [department, setDepartment] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployee = async () => {
      try {
        const response = await getEmployeeById(id);
        const employee = response.data;
        setFirstName(employee.first_name);
        setLastName(employee.last_name);
        setPosition(employee.position);
        setDepartment(employee.department);
      } catch (error) {
        console.error("Failed to fetch employee", error);
      }
    };
    fetchEmployee();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedEmployee = { first_name, last_name, position, department };
      await updateEmployee(id, updatedEmployee);
      navigate("/employees");
    } catch (error) {
      console.error("Failed to update employee", error);
    }
  };

  return (
    <div>
      <h2>Edit Employee</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
          required
        />
        <button type="submit">Update Employee</button>
      </form>
    </div>
  );
};

export default EditEmployee;
