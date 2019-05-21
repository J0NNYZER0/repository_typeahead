const addEllipses = (str, limit) => {
  if (str.length > limit) {
    return `${str.substring(0,limit)} ...`;
  } else return str;
}

const convertDate = (date) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  date = new Date(Date.parse(date));
  const m = months[date.getMonth()],
    d = date.getDate(),
    y = date.getFullYear();

  return `${m} ${d}, ${y}`;
}

export {
  addEllipses,
  convertDate,
};
