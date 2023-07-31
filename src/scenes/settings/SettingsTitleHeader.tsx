import { Text, Button } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { getFromStorage } from '../../utils/storage';

type Props = {
  streamService: string;
};

function SettingsTitleHeader({ streamService }: Props) {
  const [isAuth, setIsAuth] = useState<boolean>(false)

    useEffect(() => {
    const tokenKey = streamService === 'Twitch' ? 'twitch_access_token' : 'youtube_access_token';
    
    getFromStorage<string>(tokenKey)
      .then((token) => {
        if (token) {
          setIsAuth(true);
        } else {
          setIsAuth(false);
        }
      })
      .catch((error) => {
        console.error(`Failed to get ${streamService} access token: `, error);
        setIsAuth(false);
      });
  }, [streamService]);

  const handleOAuth = () => {
    if (streamService === 'Twitch'){
      const clientID = import.meta.env.VITE_APP_TWITCH_CLIENT_ID
      const redirectURI = import.meta.env.VITE_APP_TWITCH_REDIRECT_URL
      console.log(clientID)
      console.log(redirectURI)
      const scopes = encodeURIComponent('user_read')
      const twitchOAuthURL = `https://id.twitch.tv/oauth2/authorize?client_id=${clientID}&redirect_uri=${redirectURI}&response_type=token&scope=${scopes}`;

      // window.location.href = twitchOAuthURL;
      chrome.tabs.create({ url: twitchOAuthURL, active:false });
      setIsAuth(true)
    } else if (streamService === 'Youtube') {
      console.log('Initialize Youtube OAuth')
      setIsAuth(true)
    }
  }

  const handleSignOut = () => {
    if (streamService === 'Twitch'){
      console.log('Sign Out Twitch')
      setIsAuth(false)
    } else if (streamService === 'Youtube'){
      console.log('Sign Out Youtube')
      setIsAuth(false)
    }
  }

  return (
    <>
      <Text as="h1" fontSize="xx-large" fontWeight="bold">
        Connect to {streamService}
      </Text>
      <Button colorScheme={isAuth ? "green" : "red"} onClick={isAuth ? handleSignOut : handleOAuth}>
        {isAuth ? 'Signed In' : 'OAuth'}
      </Button>
    </>
  );
}

export default SettingsTitleHeader;
