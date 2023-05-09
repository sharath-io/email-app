import {useState, useEffect} from 'react';
import {fakeFetch} from '../api/fakeFetch';

export function Inbox(){
    const [emailData, setEmailData] = useState({mails:[], sentMails:[]});

    const getData = async () =>{
        try{
            const {status,data} = await fakeFetch('https://example.com/api/allemails');
            if(status === 200){
                setEmailData({mails: data.emails, sentMails:data.sentEmails});
            }
        }catch(e){
            console.error(e);
        }
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <div>
            <h2>Inbox Page</h2>
            <ul>
                {
                    emailData.mails.map(({id, subject,read}) => (<li key={id}>
                        <p>{subject}{!read &&<button>Mark as Read</button>}</p>
                        
                        </li>))
                }
            </ul>
            </div>

    )
}