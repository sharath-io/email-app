const formatDate = (date) =>{
    const dateObj = new Date(date);

    const day = String(dateObj.getDate()).padStart(2,'0');
    const month = String(dateObj.getMonth()).padStart(2,'0');
    const year = dateObj.getFullYear();

    const hours = String(dateObj.getHours()%12 || 12).padStart(2,'0');
    const minutes = String(dateObj.getMinutes()).padStart(2,'0')

    const ampm = dateObj.getHours() >= 12 ? "pm" : "am";
    
  return `${day}/${month}/${year} ${hours}:${minutes} ${ampm}`
  }

  export default formatDate