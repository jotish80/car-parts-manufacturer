import React from 'react';

const ManageProducts = () => {
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
                        <label for="my-modal-3" class="btn modal-button mt-2">Delete</label>
                        <input type="checkbox" id="my-modal-3" class="modal-toggle" />
                        <div class="modal">
                        <div class="modal-box relative">
                            <label for="my-modal-3" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                            <h3 class="text-lg font-bold">Congratulations random Interner user!</h3>
                            <p class="py-4">You've been selected for a chance to get one year of subscription to use Wikipedia for free!</p>
                        </div>
                        </div>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageProducts;