import React from 'react'
import { useHistory } from 'react-router';
import { useProfile } from '../Account/Context.Provider'

function Dashboard() {
    const History = useHistory();
    const {profile} = useProfile();
    if(!profile){
        History.push('/login');
    }
    return (
        <div>
            
        </div>
    )
}

export default Dashboard
