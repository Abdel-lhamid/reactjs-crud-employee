import { useState } from "react";
import { Link, json, useNavigate } from "react-router-dom";

const CreateEmployee = () => {

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[salary,salarychange]=useState("");
    const[validation,valchange]=useState(false);

    const navigate = useNavigate();


    const handlesubmit = (e) =>{
        e.preventDefault();
        const employeedata= {name,email,salary,phone}

        //console.log({id,name,email,phone,salary});
        fetch("http://localhost:8000/employees",{
            method:"POST",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(employeedata)
        }).then((res)=>{
            alert('Saved!!')
            navigate('/')

        }).catch((err)=>{
            console.log(err.message);
        })

    }

    return ( 
       <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>
                    <div className="container">
                        <div className="card" style={{"textAlign":"left"}}>
                            <div className="card-title">
                                <h2>Add a new employee</h2>
                            </div>
                            <div className="card-body">

                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>ID</label>
                                            <input value={id} disabled="disabled" className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                        {name.length==0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Email</label>
                                            <input value={email} onChange={e=>emailchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Salary</label>
                                            <input value={salary} onChange={e=>salarychange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Phone</label>
                                            <input value={phone} onChange={e=>phonechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>

                                    
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                           <button className="btn btn-success" type="submit">Save</button>
                                           <Link to="/" className="btn btn-danger">Back</Link>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>
                    </form>
                </div>
                
            </div>
       </div> 
     );
}
 
export default CreateEmployee;