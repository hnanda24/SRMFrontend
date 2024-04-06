import React, { useState } from 'react';

const Forces = () => {

    const [batallionName, setBatallionName] = useState('');
    const [message, setMessage] = useState('');

    const changeBatallionName = (event) => setBatallionName(event.target.value);

    async function handleSubmit(event) {
        event.preventDefault();

        let data = await fetch('http://localhost:5000/api/auth/add-batallion', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 'batallionName': batallionName })
        });

        let response = await data.json();
        console.log(response);

        if (data.status === 200) {
            setMessage('Batallion Added');
            setTimeout(() => {
                setMessage('');
            }, 2000);
        } else {
            setMessage('Error adding Batallion');
            setTimeout(() => {
                setMessage('');
            }, 2000);
        }

    }

    return (

        <>
            <div className="text-yellow-700">{message}</div>
            <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center h-screen bg-yellow-200">
                <input
                    type='text'
                    placeholder='Enter Batallion Name'
                    onChange={changeBatallionName}
                    className="border-b-2 border-yellow-700 focus:outline-none focus:border-yellow-900 bg-transparent my-2 p-2 rounded-lg text-xl text-gray-800 placeholder-gray-600"
                />
                <button
                    className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg mt-4"
                >
                    Submit
                </button>
            </form>
        </>

    )
}

export default Forces;
