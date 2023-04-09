import { useEffect, useState, } from "react";
import { Link, useNavigate } from "react-router-dom";

const Employeelisting = () => {
    const [employeedata,employeedatachange]= useState(null);
    const navigate = useNavigate();


    const editeEmploy=(id)=>{
        navigate("/employee/edit/"+id);

    }
    const deleteEmploy=(id)=>{
        if(window.confirm('Do you really wanna delete this!')){
            fetch("http://localhost:8000/employees/"+id,{
            method:"DELETE"
        }).then((res)=>{
            alert('DELETED!!')
            window.location.reload();

        }).catch((err)=>{
            console.log(err.message);
        })

        }
        
    }
    const loadDetail=(id)=>{
        navigate("/employee/detail/"+id);
        
    }



    
    useEffect(()=>{
        fetch("http://localhost:8000/employees").then((res=>{
            return res.json();
        })).then((resp)=>{
            employeedatachange(resp);
        }).catch((err)=>{
            console.log(err.message);
        })
    },[]) 
    return ( 
        <div className="container">
            <div className="card">
                <div className="card-title">
                    <h2>Employee Listing</h2>
                </div>
                <div className="card-body">
                    <div className="crtbtn">
                        <Link to="employee/create" className="btn btn-success">Add New (+)</Link>
                    </div>
                    <table className="table table-dark">
                        <thead className="thead-dark">
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Phone</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employeedata &&
                                employeedata.map(item=>(
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.salary} MAD</td>
                                        <td>{item.phone}</td>
                                        <td>
                                            <a onClick={()=>{editeEmploy(item.id)}} className="btn btn-success">Edit</a>
                                            <a onClick={()=>{deleteEmploy(item.id)}} className="btn btn-danger">Remove</a>
                                            <a onClick={()=>{loadDetail(item.id)}} className="btn btn-success">Details</a>
                                        </td>


                                    </tr>
                                ))
                            }
                        </tbody>

                    </table>

                </div>

            </div>

        </div>
     );
}
 
export default Employeelisting;