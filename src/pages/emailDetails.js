import { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmailContext } from "../contexts/emailContext";

export function EmailDetails(){
    const {mailDetailId} = useParams();
    const {emailData: {mails, sentMails}} = useContext(EmailContext);

    const clickedMail = sentMails.find(mail => mail.id === Number(mailDetailId));
    const displayMail = mails.find(mail => mail.subject === clickedMail.subject.slice(4));
   

    return (
        <div>
           <h1>Email Details</h1>
           {displayMail!==undefined && <div> 
            <p>from : {displayMail.sender}</p>
           <p>Message : {displayMail.message}</p>
           </div>
    }

        </div>
    )
}