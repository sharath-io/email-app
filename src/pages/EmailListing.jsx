import { useEffect, useState } from "react";

import MailComponent from "../Components/MailComponent";

const EmailListing = () => {
  const [emails, setEmails] = useState([]);

  const getMails = async () => {
    try {
      const res = await fetch("https://flipkart-email-mock.vercel.app");
      const resJSON = await res.json();
      setEmails(resJSON.list);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMails();
  }, []);

  return (
    <div>
      <h1>Emails</h1>
      <ul>
        {emails?.map((mail) => (
          <li key={mail.id}>
            <MailComponent mail={mail} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EmailListing;
