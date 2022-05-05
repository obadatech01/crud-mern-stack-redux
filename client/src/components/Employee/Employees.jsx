import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getEmployees } from '../../actions/employeeAction';
import Employee from './Employee';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Employees = () => {
  const dispatch = useDispatch();
  const employees = useSelector((state) => state);

  useEffect(() => {
    dispatch(getEmployees());
  }, [dispatch]);


  return (
    <>
      <div className="container-xl">
        <div className="table-responsive">
          <div className="table-wrapper">
            <div className="table-title">
              <div className="row">
                <div className="col-sm-6">
                  <h2>Manage <b>Employees</b></h2>
                </div>
                <div className="col-sm-6">
                  <Link to='/employee/add' className="btn btn-success" data-toggle="modal"><i className="material-icons">&#xE147;</i> <span>Add New Employee</span></Link>
                </div>
              </div>
            </div>
            <Table responsive striped bordered hover variant="light">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th>Phone</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {!employees.length && (
                  <tr>
                    <th className="text-center" colSpan="6"><span className="bg-danger p-1 rounded text-light">No Records Found</span></th>
                  </tr>
                ) }
                {employees.length && employees.map((employee, i) => (
                  <Employee key={employee._id} index={i+1} employee={employee} />
                ))}
              </tbody>  
            </Table>            
          </div>
        </div>
      </div>       
    </>
  )
}

export default Employees;