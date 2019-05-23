import htmlToText from 'html-to-text';
import { POST_INTRO_LENGTH } from './constants';

export const isResponseOk = status => status >= 200 && status < 300;

export const convertToText = htmlString => htmlToText.fromString(htmlString);

export const getIntro = (content) => {
  if (content.length <= POST_INTRO_LENGTH) {
    return content;
  }
  return `${content.substring(0, POST_INTRO_LENGTH)}...`;
};
