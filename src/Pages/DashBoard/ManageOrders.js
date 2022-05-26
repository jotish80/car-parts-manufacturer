import React from 'react';

const ManageOrders = () => {
    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>User</th>
                            <th>Ordered Items</th>
                            <th>Price</th>
                            <th>Delivery Status</th>
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>Cy Ganderton</td>
                            <td>Gear</td>
                            <td>$100</td>
                            <td>
                                <select>
                                    <option>Paid</option>
                                    <option>Unpaid</option>
                                    <option>Pending</option>
                                    <option>Shipped</option>
                                </select>
                            </td>
                            
                            <button className='btn btn-outline mt-1'>Cancel</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;