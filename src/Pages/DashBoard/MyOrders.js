import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../Firebase/firebase.init';

const MyOrders = () => {

    const [user] = useAuthState(auth);
    console.log(user);

    return (
        <div>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Cy Ganderton</td>
                            <td>Quality Control Specialist</td>
                            <button className='btn btn-outline'>Cancel</button>
                            <button className='btn btn-outline ml-2'>Pay</button>
                        </tr>
                        <tr>
                            <th>2</th>
                            <td>Hart Hagerty</td>
                            <td>Desktop Support Technician</td>
                            
                            <button className='btn btn-outline'>Cancel</button>
                            <button className='btn btn-outline ml-2'>Pay</button>
                        </tr>
                        <tr>
                            <th>3</th>
                            <td>Brice Swyre</td>
                            <td>Tax Accountant</td>
                            
                            <button className='btn btn-outline'>Cancel</button>
                            <button className='btn btn-outline ml-2'>Pay</button>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;