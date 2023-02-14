import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [page, setPage] = useState(5);

    useEffect(() => {
        // query paremiter

        (async () => {
            const { data } = await axios.get(`http://localhost:5000/products?limit=10`);

            if (!data?.success) return toast.error(data.error)
            setProducts(data?.data)
        })()
    }, [])

    return (
        <div className="py-5 px-5 w-screen">
            <table className="table table-compact text-center w-full">
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
            <div className='mt-5 flex justify-end'>
                {
                    [...Array(page).keys()].map(number => (
                        <div className="btn-group">
                            <button className="btn btn-sm mx-2">{number+1}</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default AllProducts;