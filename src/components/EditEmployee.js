import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const EditEmployee = () => {
    
    const { employeeid } = useParams();
   // const [employeedata, employeedatachange] = useState({});

    useEffect(() => {
        fetch("http://localhost:8000/employees/" + employeeid).then((res) => {
            return res.json();
        }).then((resp) => {
            idchange(resp.id);
            namechange(resp.name);
            emailchange(resp.email);
            phonechange(resp.phone);
            salarychange(resp.salary);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[email,emailchange]=useState("");
    const[phone,phonechange]=useState("");
    const[salary,salarychange]=useState("");
    const[validation,valchange]=useState(false);

    const navigate = useNavigate();


    const handlesubmit = (e) =>{
        e.preventDefault();
        const employeedata= {id,name,email,salary,phone}

        //console.log({id,name,email,phone,salary});
        fetch("http://localhost:8000/employees/"+employeeid,{
            method:"PUT",
            headers:{"content-type":"application/json"},
            body:JSON.stringify(employeedata)
        }).then((res)=>{
            alert('updated!!')
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
                                <h2>Edit employee</h2>
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
                                        {/*name.length==0 &&*/ validation && <span className="text-danger">Enter the name</span>}
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

export default EditEmployee;