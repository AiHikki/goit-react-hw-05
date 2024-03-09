import defaultImg from './img/default.jpg';
import { imgBaseURL } from './movies-api';

export const createImgURL = url => {
  return url ? imgBaseURL + url : defaultImg;
};

export const formatDate = dateString => {
  const date = new Date(dateString);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${month}/${day}/${year} ${hours}:${minutes}`;
};
