import {useContext} from 'react';
import { EmailContext } from '../index';

export function Inbox(){
    const {emailData:{mails}, markHandler} = useContext(EmailContext);

    const {unread,read} = mails.reduce((acc,curr)=> curr.read ? {...acc,read: acc.read+1} : {...acc,unread: acc.unread+1},{unread:0,read:0});

    return (
        <div>
            <h2>Inbox Page</h2>
            <p>Unread Emails : {unread}</p>
            <p>Read Emails : {read}</p>
            <ul>
                {
                    mails.map(({id, subject,read}) => (<li key={id}>
                        <p>{subject} {!read &&<button onClick={() => markHandler(id)}>Mark as Read</button>}</p>
                        </li>))
                }
            </ul>
            </div>

    )
}