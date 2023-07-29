import { setToStorage } from "../utils/storage";

chrome.runtime.onInstalled.addListener(() => {
  chrome.webRequest.onBeforeRequest.addListener(
    (details) => {
      const url = new URL(details.url);
      const hashFragment = url.hash.substring(1);
      const params = new URLSearchParams(hashFragment);
      const accessToken = params.get('access_token');

      if (accessToken) {
        // Save accessToken to chrome.storage using your utility function
        setToStorage('twitch_access_token', accessToken).then(() => {
          console.log('Access token saved');
        }).catch((error) => {
          console.error('Failed to save access token: ', error);
        });
      }
    },
    { urls: [import.meta.env.VITE_APP_TWITCH_REDIRECT_URL] }
  );
});