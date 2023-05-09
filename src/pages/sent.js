import { useContext } from "react";
import {EmailContext} from '../index';
export function Sent(){
    const {emailData:{sentMails}} = useContext(EmailContext);
    return (
        <div>
            <h2>Sent </h2>
            <ul>
                {
                    sentMails.map(({id,subject})=> <li><p>{subject.slice(3)}</p></li>)
                }
            </ul>
        </div>
    )
}