import React, { useState } from 'react';

const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);
    const [employeeId, setEmployeeId] = useState('');

    const apiRootUrl = 'https://app-taskapp-backend-rayan-anb7fefwgnfebvc9.centralindia-01.azurewebsites.net';

    const listEmployees = async () => {
        const response = await fetch(`${apiRootUrl}/employees`);
        const data = await response.json();
        setEmployees(data);
    };

    const searchEmployee = async () => {
        const response = await fetch(`${apiRootUrl}/employees/${employeeId}`);
        const data = await response.json();
        setEmployees(data);
    };

    const displayEmployees = (employees) => {
        if (employees.length === 0) {
            return <p>No data found</p>;
        }
        return (
            <table border="1">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>EmployeeId</th>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>DateOfBirth</th>
                        <th>DateOfJoining</th>
                        <th>Department</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.Id}>
                            <td>{employee.Id}</td>
                            <td>{employee.EmployeeId}</td>
                            <td>{employee.FirstName}</td>
                            <td>{employee.LastName}</td>
                            <td>{employee.DateOfBirth?.split('T')[0]}</td>
                            <td>{employee.DateOfJoining?.split('T')[0]}</td>
                            <td>{employee.DepartmentName}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    return (
        <div style={{ padding: '20px' }}>
            <button onClick={listEmployees}>List All Employees</button>
            <input
                type="text"
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
                placeholder="Employee ID (e.g. E001)"
            />
            <button onClick={searchEmployee}>Search Employee</button>
            <div style={{ marginTop: '20px' }}>
                {displayEmployees(employees)}
            </div>
        </div>
    );
};

export default EmployeeList;