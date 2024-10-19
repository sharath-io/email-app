import formatDate from "../utils/formatDate";

const MailComponent = ({ mail }) => {
  const {
    from: { name, email },
    date,
    subject,
    short_description,
  } = mail;


  const formattedDate = formatDate(date);
  
  return (
    <div className="m-5 p-5 bg-white rounded-lg">
      <h1>
        From: {name} {email}
      </h1>
      <h2>Subject: {subject}</h2>
      <p>Description: - {short_description}</p>
      <p>Time : {formattedDate}</p>
    </div>
  );
};
export default MailComponent;
