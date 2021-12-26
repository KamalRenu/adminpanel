import React from 'react'

function ProductCreate() {
    return (
        <>
            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                <h1 className="h3 mb-0 text-gray-800">Create Product</h1>
            </div>
            <div className='container'>
                <form>
                    <div className='row'>
                    <div className='col-lg-6'>
                            <label>Product Name</label>
                            <input type="text" className='form-control' name='prName' />
                        </div>
                        <div className='col-lg-6'>
                            <label>Model</label>
                            <input type="text" className='form-control' name='model' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Company</label>
                            <input type="text" className='form-control' name='company' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Serial No</label>
                            <input type="number" className='form-control' name='sno' />
                        </div>
                        <div className='col-lg-4'>
                            <label>Manufacturing date</label>
                            <input type="date" className='form-control' name='mdate'  />
                        </div>
                        <div className='col-lg-12'>
                            <label>Price</label>
                            <input type="text" className='form-control' name='price' />
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

export default ProductCreate