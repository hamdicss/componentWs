import React from 'react'
import hamdi from './hamdi.jpg'
const ProfilePhoto = () => {
    return (
        <div >
            <div>
                <img src={hamdi} alt="img"  width="300" style={{borderRadius:"50%"}}
            height="300" roundedCircle="true"/>
            </div>

        </div>
    )
}

export default ProfilePhoto
