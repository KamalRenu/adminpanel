import React from 'react'
import {Link} from 'react-router-dom'

function UserList() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User List</h1>
                <Link to="/create-user" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                    className="fas fa-download fa-sm text-white-50"></i> Create User</Link>
            </div>
            <div class="card shadow mb-4">
                <div class="card-header py-3">
                    <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                </div>
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Salary date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tfoot>
                                <tr>
                                    <th>Name</th>
                                    <th>Position</th>
                                    <th>Office</th>
                                    <th>Age</th>
                                    <th>Start date</th>
                                    <th>Salary</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>
                            <tbody>
                                <tr>
                                <td>Kamal</td>
                                        <td>Developer</td>
                                        <td>Soft Tech</td>
                                        <td>24</td>
                                        <td>12/20/2021</td>
                                        <td>300000</td>
                                        <td>
                                            <Link to="/user-edit"><button className='btn btn-primary btn-sm'>Edit</button></Link>
                                            <Link to="/user-delete"><button className='btn btn-danger btn-sm'>Delete</button></Link>
                                        </td>
                                </tr>
                                </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserList