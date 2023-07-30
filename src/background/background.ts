import { setToStorage } from "../utils/storage";

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  const redirectURI = import.meta.env.VITE_APP_TWITCH_REDIRECT_URL;
  if (changeInfo.url && changeInfo.url.includes(redirectURI)) {
    const url = new URL(changeInfo.url);
    const hashFragment = url.hash.substring(1);
    const params = new URLSearchParams(hashFragment);
    const accessToken = params.get('access_token');

    if (accessToken) {
      setToStorage('twitch_access_token', accessToken).then(() => {
        console.log('Access token saved');
      }).catch((error) => {
        console.error('Failed to save access token: ', error);
      });
      
      chrome.tabs.remove(tabId); // Close the tab outside the promise chain
    }
  }
});
