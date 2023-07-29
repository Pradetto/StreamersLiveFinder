// interface StreamerInfo {
//   image: string;
//   streamerName: string;
//   game: string;
//   viewerCount: string;
// }

// Decide how I want to store the key values of the streamer info in the chrome.storage API
// https://developer.chrome.com/docs/extensions/reference/storage/

export const getFromStorage = <T>(key: string): Promise<T> =>
  new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    chrome.storage.local.get([key], (result) => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve(result[key] as T);
    });
  });

// Look at how I will handle the value
export const setToStorage = (key: string, value: any): Promise<void> =>
  new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    chrome.storage.local.set({ [key]: value }, () => {
      if (chrome.runtime.lastError) {
        return reject(chrome.runtime.lastError);
      }
      resolve();
    });
  });
