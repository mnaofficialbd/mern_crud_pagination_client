import React from 'react';

const AllProducts = () => {
    /* 
         const url = "http://localhost:8080/api/bill-list";
        const { data: res } = axios.get(url, data);
        console.log(res.message); 
     */
    return (
        <div>
            <div className="py-5 px-5 min-h-screen w-full">
            
                <table className="table table-compact text-center mx-auto">
                    <thead>
                        <tr>
                            <th>Billing ID</th>
                            <th>Full Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Paid Amount</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>id</td>
                            <td>name</td>
                            <td>email</td>
                            <td>phone</td>
                            <td>amount</td>
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
                        {/* {
                            bills?.map(bill => (
                                <tr>
                                    <td>{bill?._id}</td>
                                    <td>{bill?.name}</td>
                                    <td>{bill?.email}</td>
                                    <td>{bill?.phone}</td>
                                    <td>{bill?.amount}</td>
                                    <td className="flex justify-center">
                                        <div className="mx-2">
                                            <UpdateBillModal />
                                            <label
                                                htmlFor="bill-update-modal"
                                                className="btn btn-outline btn-success btn-xs"
                                            >Edit</label>
                                        </div>
                                        <div className="mx-2">
                                            <DeleteBillModal />
                                            <label
                                                // onClick={() => setDeleteBill(bill)}
                                                htmlFor="bill-delete-modal"
                                                className="btn btn-outline btn-error btn-xs"
                                            >Delete</label>
                                        </div>
                                    </td>
                                </tr>
                            ))
                        } */}

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllProducts;