import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const AllProducts = () => {
    
    const [products, setProducts]=useState([]);

    useEffect(() => {
        (async()=>{
                const {data}=await axios.get(`http://localhost:5000/products`);
                
                if(!data?.success) return toast.error(data.error)
                setProducts(data?.data)
            })()
    }, [])
    
    return (
        <div>
            <div className="py-5 px-5 w-screen">
            
                <table className="table table-compact text-center w-4/5">
                    <thead>
                        <tr>
                            {/* <th>Product ID</th> */}
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Img</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                         {
                            products?.map(product => (
                                <tr>
                                    {/* <td>{product?._id}</td> */}
                                    <td>{product?.name}</td>
                                    <td>{product?.price}</td>
                                    <td><img src={product?.image} alt="" className='w-12' /></td>
                                    <td className="flex justify-center">
                                        <div className="mx-2">
                                            {/* <UpdateBillModal /> */}
                                            <label
                                                htmlFor="bill-update-modal"
                                                className="btn btn-outline btn-success btn-xs"
                                            >Edit</label>
                                        </div>
                                        <div className="mx-2">
                                            {/* <DeleteBillModal /> */}
                                            <label
                                                // onClick={() => setDeleteBill(bill)}
                                                htmlFor="bill-delete-modal"
                                                className="btn btn-outline btn-error btn-xs"
                                            >Delete</label>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        } 

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;