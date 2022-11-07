import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider';

const CheckOut = () => {
    const {_id, title, price} = useLoaderData();
    const  {user} = useContext(AuthContext);
     

    const handlePlaceOrder = e => {
        e.preventDefault();
        const form = e.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || 'Unregistered';
        const phone = form.phone.value;
        const message = form.message.value;
        
        const order = {
            service: _id,
            serviceName: title,
            price,
            customer: name,
            email,
            phone,
            message
        }
        
        fetch('https://genius-car-server-seven-mauve.vercel.app/orders', {
            method: "POST",
            headers: {
                'content-type' : 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(order)
        })
        .then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('Check Out Succesful')
                form.reset()
            }

            console.log(data)
        })
        .catch(e => console.error(e))
    }
    return (
        <div >
            <form onSubmit={handlePlaceOrder}>
                <h2 className='text-4xl'>Your are able to order : {title}</h2>
                <h4 className='text-3xl'>Price : ${price}</h4>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2'>
                    <input name='firstName' type="text" placeholder="First Name" className="input input-bordered input-success w-full " />
                    <input name='lastName' type="text" placeholder="Last Name" className="input input-bordered input-success w-full" />
                    <input name='phone' type="text" placeholder="Your Phone" className="input input-bordered input-success w-full" />
                    <input name='email' type="text" defaultValue={user?.email} placeholder="Your Email" className="input input-bordered input-success w-full" readOnly />
                </div>
                <textarea className="textarea textarea-accent w-full my-6" name='message' placeholder="Enter you opinion"></textarea>
                <button className="btn btn-active btn-accent">Button</button>
            </form>
        </div>
    ); 
};

export default CheckOut;