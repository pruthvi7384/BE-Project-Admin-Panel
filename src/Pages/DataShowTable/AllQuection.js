import React from 'react'
import { useHistory } from 'react-router';
import { useProfile } from '../Account/Context.Provider';

function AllQuection() {
    const {profile} = useProfile();
    const History = useHistory();
    if(!profile){
        History.push('/login');
    }
    return (
        <div>
            
        </div>
    )
}

export default AllQuection
