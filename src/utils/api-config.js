import { config } from 'dotenv';

config();

const hostName = window.location.hostname;

export let apiUrls = 'https://jamhurican.herokuapp.com/api/v1/';

if (hostName !== 'localhost') {
  apiUrls = 'https://jamhurican.herokuapp.com/api/v1/';
} else {
  apiUrls = 'http://localhost:8000/api/v1/';
}
