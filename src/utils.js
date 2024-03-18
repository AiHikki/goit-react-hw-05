import defaultImg from './img/default.jpg';
import { imgBaseURL } from './movies-api';

export const createImgURL = url => {
  return url ? imgBaseURL + url : defaultImg;
};

export const formatDate = dateString => {
  const inputDate = new Date(dateString);
  const currentDate = new Date();
  const difference = currentDate - inputDate;

  const minutes = Math.floor(difference / (1000 * 60));
  if (minutes < 60) {
    return `${minutes} minutes ago`;
  }

  const hours = Math.floor(minutes / 60);
  if (hours < 24) {
    return `${hours === 1 ? '1 hour' : `${hours} hours`} ago`;
  }

  const days = Math.floor(hours / 24);
  if (days === 1) {
    return '1 day ago';
  } else if (days < 30) {
    return `${days} days ago`;
  }

  const months = Math.floor(days / 30);
  if (months === 1) {
    return '1 month ago';
  } else if (months < 12) {
    return `${months} months ago`;
  }

  const years = Math.floor(months / 12);
  if (years === 1) {
    return '1 year ago';
  }

  return `${years} years ago`;
};
