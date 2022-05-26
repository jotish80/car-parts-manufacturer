import React from 'react';

const AddProduct = () => {
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
                           
                            <td>Action</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <td>Cy Ganderton</td>
                            <td>Gear</td>
                            <td>$100</td>
                            
                            
                            <button className='btn btn-outline mt-1'>Add Product</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AddProduct;