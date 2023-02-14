import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { toast } from "react-toastify";

const AllProducts = () => {

    const [products, setProducts] = useState([]);
    const [limit, setLimit] = useState(5);
    const [pageNumber, setPageNumber] = useState(0);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get(`http://localhost:5000/products?limit=${limit}&pageNumber=${pageNumber}`);
            if (!data?.success) {
                setProducts([]);
                return toast.error(data.error)
            }
            setProducts(data?.data)
        })()
    }, [limit, pageNumber])

    return (
        <div className="py-5 px-5 w-screen">
            <table className="table table-compact text-center w-full">
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Price</th>
                        <th>Img</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products?.length ? products?.map(product => (
                            <tr>
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
                        )) : (<div>
                            <h2 className="text-red-700 text-center text-5xl font-bold">No Products Found</h2>
                        </div>)
                    }
                </tbody>
            </table>
            <div className='mt-5 flex justify-end'>
                {
                    [...Array(3).keys()]
                        .map(number => (
                            <div className="btn-group">
                                <button
                                    onClick={() => setPageNumber(number)}
                                    className={`btn btn-sm mx-2 ${pageNumber === number ? "btn-primary" : "btn"}`}
                                >{number + 1}</button>
                            </div>
                        ))
                }
                <select
                    onChange={(e) => setLimit(e.target.value)}
                    className="btn btn-secondary btn-sm mx-2">
                    <option value="5">5</option>
                    <option value="10">10</option>
                    <option value="15">15</option>
                </select>
            </div>
        </div>
    );
};

export default AllProducts;