import { useEffect, useState } from "react";
import { Link,useParams } from "react-router-dom";

const EmployeeDetails = () => {
    const {employeeid} = useParams();
    const [employeedata, employeedatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employees/" + employeeid).then((res) => {
            return res.json();
        }).then((resp) => {
            employeedatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])
    console.log(employeedata);
    return (
        <div>
            

               <div className="container">
                
            <div className="card row" style={{ "textAlign": "left" }}>
                <div className="card-title">
                    <h2>Employee Create</h2>
                </div>
                <div className="card-body"></div>

                {employeedata &&
                    <div>
                        <h2>The Employee name is : <b>{employeedata.name}</b>  ({employeedata.id})</h2>
                        <h2>Salary is :<b>{employeedata.salary}</b> MAD </h2>
                        <h3>Contact Details</h3>
                        <h5>Email is : {employeedata.email}</h5>
                        <h5>Phone is : {employeedata.phone}</h5>
                        <Link className="btn btn-danger" to="/">Back to Listing</Link>
                    </div>
                }
            </div>
            </div>
            
        </div >
    );
}

export default EmployeeDetails;