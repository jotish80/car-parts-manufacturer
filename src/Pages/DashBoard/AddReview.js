import React, { useRef } from 'react';
import bg from '../../assets/images/bg1.jpg'
import axios from 'axios';
const AddReview = () => {
    
    const nameRef = useRef('')
    const numberRef = useRef('')
    const descriptionRef = useRef('')

    const handleSubmit =  async (e, data)  => {
        console.log(data)
        e.preventDefault();
        const name = nameRef.current.value;
        const number = numberRef.current.value;
        const description = descriptionRef.current.value;

                console.log(name, number, description);

       const url =(`http://localhost:5000/review`)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({...data, name: name, rating:number, description: description})
        })

        .then(res => res.json())
        .then(data=> console.log(data))

         
    }

       const myStyle = {
        backgroundImage:
            `url(${bg})`,
        height: '85vh',
         
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat', 
        opacity: '0.8' ,
        objectFit: 'cover' 
    };
    return (
        <div style={myStyle}>
        <div className='flex justify-center align-center mt-16'>
                <div class="card w-96 bg-base-100 shadow-xl mt-16">
                <div class="card-body">
                         <h2 className='text-primary text-center text-3xl font-bold mb-4'>Add Review</h2>
                    <form class="card-actions justify-end">
                        <input type="text" name='name' ref={nameRef} placeholder="Your Name Please" class="input input-bordered input-accent w-full max-w-xs" /><br />
                        <input type="number" name='number' ref={numberRef} placeholder="Rate Our Site" class="input input-bordered input-success w-full max-w-xs" /><br />
                        <textarea class="textarea textarea-success w-[320px]" ref={descriptionRef} name='description' placeholder="Description"></textarea>
                        <button onClick={handleSubmit} class="btn btn-primary w-full mt-4 text-white" value='submit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
          </div>
          </div>
    );
};

export default AddReview;