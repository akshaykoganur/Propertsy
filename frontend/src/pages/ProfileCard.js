import React from 'react'
import Person from '../Images/person.png';

function ProfileCard(props) {
    return (
        <div className="card" style={{ width: "200%", margin: "2%",alignContent:'center', alignItems:'center' }}>

            <div className="card-body align-text-center" style={{alignContent:'center', alignItems:'center'}}>
                <img src={Person} alt={""}/>
                <h4 className="card-title">{props.userProfile.name}</h4>
                <h4 className="card-title">{props.userProfile.email}</h4>
                <h4 className="card-title">{props.userProfile.contactno}</h4>
            </div>
        </div>
    )
}

export default ProfileCard;