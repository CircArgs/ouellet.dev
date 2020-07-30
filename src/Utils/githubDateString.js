const githubDateString = (str) => {
  const date = new Date(str);

  const dateTimeFormat = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });

  const [
    { value: month },
    ,
    { value: day },
    ,
    { value: year },
  ] = dateTimeFormat.formatToParts(date);

  return `${month}-${day}-${year}`;
};

export default githubDateString;
