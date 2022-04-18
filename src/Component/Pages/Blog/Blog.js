import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div>
            <h4 className='ans-header text-center mt-5 mb-3'>Question And Answer</h4>
            <div className='qus-ans-container'>
                <div>

                    <h4>1. Differece Between Authorization and Authentication</h4>
                    <p>Authentication is the process to verifies who the user is. and the other hand Authorization determines what resources a user can access the application. Authentication is visible to and partially changeable by the users. Authorization isn't visible to or changeable by the users.Authorization always takes place after authentication and Authentication is the first step of a good identity and access management process.</p>
                </div>
                <div>
                    <h4>2. Why you using Firebase? what other options do you have to implement authentication?</h4>
                    <p>I am using firebase for making web site login sysytem and its easy and more secure for the sequrity purpose. we can implement many thing by the authentication . Those are : Password Requirements,Transferring the Data, Hashing Passwords etc</p>
                </div>
                <div>
                    <h4>3. What others Services does firebase Provide other then authentication?</h4>
                    <p>There are many services which Firebase provides, Most useful of them are:
                        <br />
                        1. Cloud Firestore
                        <br />
                        2. Cloud Functions
                        <br />
                        3. Hosting
                        <br />
                        4. Cloud Storage
                        <br />
                        5. Google Analytics
                        <br />
                        6. Predictions
                        <br />
                        7. Cloud Messaging
                        <br />
                        8. Dynamic Links
                        <br />
                        9. Remote Config</p>
                </div>

            </div>
        </div>
    );
};

export default Blog;