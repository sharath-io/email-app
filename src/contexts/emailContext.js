import {useState, useEffect, createContext} from 'react';
import { fakeFetch } from '../api/fakeFetch';

export const EmailContext = createContext();

export const EmailProvider = ({children})=>{
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

    const markHandler = (id) =>{
        const  newReadMails= emailData.mails.map((mail) => mail.id=== Number(id) ? {...mail, read: !mail.read} : mail)
        setEmailData({...emailData, mails: [...newReadMails]});
    }

    useEffect(()=>{
        getData();
    },[])
    return (
        <EmailContext.Provider value={{emailData, markHandler}}>
            {children}
        </EmailContext.Provider>
    )
}