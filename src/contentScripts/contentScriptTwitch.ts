console.log("Content Script Twitch Loaded");

window.onload = (): void => {
  // Parse access_token from the URL
  const hashFragment = window.location.hash.substring(1);
  const params = new URLSearchParams(hashFragment);
  const accessToken = params.get('access_token');

  // Send access_token to background script
  if (accessToken) {
    console.log("Sending access token to background script: ", accessToken);
    chrome.runtime.sendMessage({ token: accessToken });
  }
}
