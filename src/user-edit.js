import React from 'react'

function UserEdit() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">User Edit</h1>
            </div>
            <div className='container'>
                <form>
                    <div className='row'>
                        <div className='col-lg-6'>
                        <label>Name</label>
                            <input type="text" className='form-control' name='name' />
                        </div>
                        <div className='col-lg-6'>
                            <label>Position</label>
                            <input type="text" className='form-control' name='position' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Office</label>
                            <input type="text" className='form-control' name='office' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Age</label>
                            <input type="number" className='form-control' name='age' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Start date</label>
                            <input type="date" className='form-control' name='date' />
                        </div>
                        <div className='col-lg-12'>
                            <label>Salary</label>
                            <input type="text" className='form-control' name='salary' />
                        </div>
                        <div className='col-lg-3'>
                            <input type="submit" className='btn btn-primary' />
                        </div>
                    </div>
                </form>
            </div>
        </>
    )
}

export default UserEdit