import * as React from 'react'
import { Message } from 'semantic-ui-react'


const Error404 = () => (
    <div>
        <Message
            error
            header='404'
            list={[
                'We all know 404 defines, required resource not found',
                'Meanwhile you may explore our Home page',
            ]}
        />


        <div className="alert alert-danger">
            <h4>We all know 404 defines, required resource not found</h4>
            <a href="/login">Meanwhile you may explore our Home page 1.</a>
        </div>


      
    </div>
);

export default Error404;

