import axios from 'axios';

const KEY = 'AIzaSyBYARUA5-oHUCtUs5-fcbClO5lG4Vv-E2M';

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
   }
});