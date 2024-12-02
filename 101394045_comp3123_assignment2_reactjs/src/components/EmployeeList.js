import React, { useEffect, useState } from "react";
import { getEmployees, deleteEmployee } from "../services/api";
import { useNavigate } from "react-router-dom";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await getEmployees();
      setEmployees(response.data);
    };
    fetchData();

    // Protect route if no token is found
    const token = localStorage.getItem("token");
    if (!token) navigate("/");
  }, [navigate]);

  const handleDelete = async (id) => {
    await deleteEmployee(id);
    setEmployees(employees.filter((emp) => emp._id !== id));
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  // Filter employees based on search term
  const filteredEmployees = employees.filter((employee) =>
    employee.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
    employee.position.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h2>Employee List</h2>
        <button onClick={handleLogout} className="btn btn-danger">Logout</button>
      </div>
      <input
        type="text"
        placeholder="Search by Department or Position"
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ margin: "10px 0", padding: "5px", width: "100%" }}
      />
      <button onClick={() => navigate("/employees/add")} className="btn btn-primary">
        Add Employee
      </button>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Department</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredEmployees.map((employee) => (
            <tr key={employee._id}>
              <td>{employee.name}</td>
              <td>{employee.position}</td>
              <td>{employee.department}</td>
              <td>
                <button onClick={() => navigate(`/employees/view/${employee._id}`)} className="btn btn-info">
                  View
                </button>
                <button onClick={() => navigate(`/employees/edit/${employee._id}`)} className="btn btn-warning">
                  Edit
                </button>
                <button onClick={() => handleDelete(employee._id)} className="btn btn-danger">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
