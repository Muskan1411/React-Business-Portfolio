import React, { useState } from 'react';

const Contact = () => {
    const [ contactObj, setContactObj ] = useState({
        fullName: '',
        email: '',
        phone: '',
        message: ''
    })

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setContactObj((prevValue) => {
            return { 
                ...prevValue,
                [name]: value 
            }
        })
    }

    const handleSubmit = () => {
        alert('Thank You! Your response is captured.');
        setContactObj(() =>{
            return {
                fullName: '',
                email: '',
                phone: '',
                message: ''
            }
        })
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container contact_div">
                <div className="row">
                    <div className="col-md-6 col-10 mx-auto">
                        <form>
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Name</label>
                                <input type="text" class="form-control" name="fullName" value={contactObj.fullName} onChange={handleInputChange} placeholder="Enter your name"/>
                            </div> 
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                <input type="email" class="form-control" name="email" value={contactObj.email} onChange={handleInputChange} placeholder="Enter your email"/>
                            </div> 
                            <div class="mb-3">
                                <label for="exampleFormControlInput1" class="form-label">Phone</label>
                                <input type="number" class="form-control" name="phone" value={contactObj.phone} onChange={handleInputChange} placeholder="Enter your phone no"/>
                            </div> 
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                                <textarea class="form-control" rows="3" name="message" onChange={handleInputChange}>{contactObj.message}</textarea>
                            </div>
                            <div class="col-12">
                                <buttton class="btn btn-primary" type="submit" onClick={handleSubmit}>Submit Form</buttton>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;