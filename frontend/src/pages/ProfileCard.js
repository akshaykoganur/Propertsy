import React, { useState } from 'react'

function ProfileCard(props) {
    return (
        <div className="card" style={{ width: "20rem", margin: "2%" }}>

            <div className="card-body align-text-center">
                <h4 className="card-title">{props.userProfile.name}</h4>
                <h4 className="card-title">{props.userProfile.email}</h4>
                <h4 className="card-title">{props.userProfile.contactno}</h4>
            </div>
        </div>
    )
}

export default ProfileCard;