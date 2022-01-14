import React from 'react'
import { useParams } from 'react-router';

function AddProfile() {
    const {id} = useParams();
    console.log(id);
    return (
        <div>
            Add Your Profile
        </div>
    )
}

export default AddProfile
