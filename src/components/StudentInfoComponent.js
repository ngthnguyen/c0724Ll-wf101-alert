import React, { Component } from 'react';

class StudentInfoComponent extends Component {
    render() {
        const students = [
            { id: 1, name: 'Nguyen Thai Nguyen', age: 20, address: 'TP HCM' },
            { id: 2, name: 'Nguyen Thanh Nam', age: 22, address: 'Dong Nai' },
            { id: 3, name: 'Dao Thi Hoa', age: 19, address: 'Long An' },
        ];

        return (
            <div style={{ width: '80%', margin: 'auto', marginTop: '20px' }}>
                <h2 style={{ textAlign: 'center' }}>Danh sách sinh viên</h2>
                <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '20px' }}>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.age}</td>
                                <td>{student.address}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default StudentInfoComponent;
