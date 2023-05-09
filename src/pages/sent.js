import { useContext } from "react";
import {NavLink} from 'react-router-dom';

import {EmailContext} from '../index';
export function Sent(){
    const {emailData:{sentMails}} = useContext(EmailContext);
    return (
        <div>
            <h2>Sent </h2>
            <ul>
                {
                    sentMails.map(({id,subject})=> <li key={id}>
                        <NavLink to={`/emailDetails/${id}`}><p>{subject.slice(3)}</p></NavLink>
                        </li>)
                }
            </ul>
        </div>
    )
}