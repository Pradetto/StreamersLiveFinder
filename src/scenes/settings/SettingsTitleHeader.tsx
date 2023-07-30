import { Text, Button } from '@chakra-ui/react';

type Props = {
  streamService: string;
  isAuth: boolean;
};

function SettingsTitleHeader({ streamService, isAuth }: Props) {
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
    } else if (streamService === 'Youtube') {
      console.log('Initialize Youtube OAuth')
    }

  }
  return (
    <>
      <Text as="h1" fontSize="xx-large" fontWeight="bold">
        Connect to {streamService}
      </Text>
      {isAuth ? (
        <Button colorScheme="green">Signed In</Button>
      ) : (
        <Button colorScheme="red" onClick={handleOAuth}>OAuth</Button>
      )}
    </>
  );
}

export default SettingsTitleHeader;
