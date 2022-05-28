import React, { useRef } from 'react';
import bg from '../../assets/images/bg2.jpg'
const MyProfile = () => {

    const nameRef = useRef('')
    const emailRef = useRef('')
    const phoneNumberRef = useRef('')
    const educationRef = useRef('')
    const locationRef = useRef('')

    const handleSubmit = (e, data) => {
        e.preventDefault();
          const name = nameRef.current.value;
        const email = emailRef.current.value;
        const phoneNumber = phoneNumberRef.current.value;
        const education = educationRef.current.value;
        const location = locationRef.current.value;
          console.log(name,email);

        const url =(`http://localhost:5000/review`)
        fetch(url, {
            method: 'POST',
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify({...data, name: name, email:email,phoneNumber:phoneNumber, education:education, location:location })
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
                         <h2 className='text-success text-center text-3xl font-bold mb-4'>My Profile</h2>
                    <form class="card-actions justify-end">
                        <input type="text" name='name' ref={nameRef} placeholder="Name" class="input input-bordered input-secondary w-full max-w-xs" /><br />
                        <input type="text" name='email' ref={emailRef} placeholder="Email" class="input input-bordered input-secondary w-full max-w-xs" /><br />
                        <input type="number" name='phone number' ref={phoneNumberRef} placeholder="Phone Number" class="input input-bordered input-secondary w-full max-w-xs" /><br />
                        <input class="input input-bordered input-secondary w-full max-w-xs" ref={educationRef} name='education' placeholder="Education"></input><br />
                        <input class="input input-bordered input-secondary w-full max-w-xs" ref={locationRef} name='location' placeholder="Location"></input>
                        <button onClick={handleSubmit} class="btn btn-success w-full mt-4 text-white" value='submit' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
          </div>
          </div>
    );
};

export default MyProfile;