import React, { useState, useTransition } from 'react'
import { useNavigate } from 'react-router-dom'
export default function Login() {

  const [employee, setEmployee] = useState({name:'', region:'', dosh:0})
  let navigate = useNavigate()
  const handleChange = (event)=>{
    let {name, value} = event.target;
    if(name === 'dosh')
    {
        if(value){
            value = isNaN(parseFloat(value)) ? 0 : parseFloat(value)
        }
    }
    let newemployee = {...employee, [name]:value}
    setEmployee(newemployee)
}
const handleSubmit = (event)=>{
    event.preventDefault();
    // addEmployee(employee).then(res=>navigate('/'))
}

  return (
    <div className='container m-5'>
    <h3 >Operations Analyst </h3>
    <form onSubmit={handleSubmit}>
    <div className="m-3">
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='name' value={employee.name} onChange={handleChange}
                placeholder="Enter Name" />
            </div>
            <div className="mb-4">
                <input type="text" className="form-control" 
                name='region'  value={employee.region} onChange={handleChange}
                placeholder="Enter Password" />
            </div>
         
            <div className='row text-center m-3'>
            <div className="col-12">
                <button type="submit" 
                className="btn btn-primary">Login</button>
            </div>
        </div>
        </div>
    </form>
</div>
  )
}