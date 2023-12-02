import { format, formatDistanceToNowStrict } from "date-fns";

export const createMarkup = (htmlString) => {
  return { __html: htmlString };
};

export const formatDistanceToNow = (date) => {
  const publishedDate = new Date(date);
  let timeAgo = formatDistanceToNowStrict(publishedDate, { addSuffix: true });

  timeAgo = timeAgo
    .replace("about ", "")
    .replace("over ", "")
    .replace("almost ", "");

  return timeAgo;
};

export const formatDate = (date) => {
  const formatDate = new Date(date);
  return format(formatDate, 'MMMM dd, yyyy');
};
