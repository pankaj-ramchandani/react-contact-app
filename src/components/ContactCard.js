import React from 'react';
import user from '../images/user.png'

const ContactCard = (props) => {
    const {id, name, email} = props.contact;
    return (
        <div className='item' style={{padding: "12px 20px"}}>
            <img className='ui avatar image' src={user} alt='user'></img>
                <div className='content'>
                    <div className='header'>
                        {name}
                    </div>
                    <div>{email}</div>
                </div>
        <i className='ui right floated trash alternate outline icon' style={{color:"red", marginTop: "7px"}}></i>                
        </div>
    );
};

export default ContactCard;