import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import { useHistory } from 'react-router';
import Moment from 'react-moment';
import { useProfile } from '../Account/Context.Provider';
import EditProfile from './EditProfile';
function Profile() {
   const {profile} = useProfile();
   const History = useHistory();

   if(!profile){
        History.push('/');
   }

    return (
        <Container className="profile_page mt-4">
            <Row className="profile_heding"> 
                <h3 ><span>{profile ? profile.name : ''}</span> Profile</h3>
                <p>Your Profile And Quetion Ask History Here</p>
            </Row>
            <Row className="profile mt-2">
               <Col xl="4">
                    <ul>
                        <li>User Id : <span>{profile ? profile._id : ''}</span></li>
                        <li>Name : <span>{profile ? profile.name : ''}</span></li>
                        <li>Email : <span>{profile ? profile.email : ''}</span></li>
                        <li>Join Date : <span><Moment local date={profile ? profile.crteatedAt : new Date()}/></span></li>
                        <li>Address : </li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp; City : <span>{profile ? profile.address.city : ''}</span></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp; Area : <span>{profile ? profile.address.area : ''}</span></li>
                        <li>&nbsp;&nbsp;&nbsp;&nbsp; Pin Code : <span>{profile ? profile.address.pin_code : ''}</span></li>
                    </ul>
               </Col>
            </Row>
            <Row className="profile mt-2">
                <Col xl="4" className="text-center">
                    <EditProfile id={profile._id}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Profile