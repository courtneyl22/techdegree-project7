import React from 'react';
import '../index.css';

const NotFound = () => (
    <div className="photo-container">
        <ul>
            <li className="not-found">
                <h3>No Results Found</h3>
                <p>You search did not return any results. Please try again.</p>
            </li>
        </ul>
    </div>
)

export default NotFound;