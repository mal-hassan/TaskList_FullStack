import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('http://localhost:8081/tasks')
            .then(res => res.json())
            .then(data => setData(data))
            .catch(err => console.log(err));
    }, [])
    return (
        <><div>
            <h1>Task App</h1>
        </div><div className="container">
                <table className="table-container">
                    <thead className="table">
                        <tr className="table">
                            <th className="table">ID</th>
                            <th className="table">Task</th>
                            <th className="table">Description</th>
                            <th className="table">Status</th>
                        </tr>
                    </thead>
                    <tbody className="table">
                        {data.map((d, i) => (
                            <tr key={i} className="table">
                                <td className="table">{d.id}</td>
                                <td className="table">{d.task_name}</td>
                                <td className="table">{d.description}</td>
                                <td className="table">{d.status}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div></>
    )
}

export default App;