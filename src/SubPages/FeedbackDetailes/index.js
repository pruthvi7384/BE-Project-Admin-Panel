import React from 'react'
import { useHistory } from 'react-router';
import { useProfile } from '../../Pages/Account/Context.Provider';

function FeedbackDetailes() {
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

export default FeedbackDetailes
