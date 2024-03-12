import * as React from 'react';
import { Avatar } from '@mui/material';

export default function UsersList() {
  return (
    <div className='app_chat_user_main'>
        <div className='app_chat_users_list'>
            <div className='app_chat_user'>
                <div className='app_chat_logo'>
                    <Avatar />
                    <div className='app_chat_name_message'>
                        <div className='app_chat_name'><h5>Smarak</h5></div>
                        <div className='app_chat_message'>
                            <h5>{'Hey There I am usinhg Whatsapp !'}</h5> 
                        </div>
                    </div>
                </div>
                
                <div className='app_chat_time'>
                    <div className='app_chag_time'> <h5>07:30</h5></div>
                </div>
            </div>   
            
        </div>
        <hr style={{width: '100%', height: '0.5px', backgroundColor: 'white', border: 'none'}} />
        
    </div>
  )
}
