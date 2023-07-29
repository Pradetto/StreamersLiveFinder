import { VStack, Text, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import WelcomeTitleHeader from './WelcomeTitleHeader';

function Welcome() {
  return (
    <VStack
      minW="full"
      minH="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap={0}
      p={4}
    >
      <WelcomeTitleHeader text="Welcome" />
      <WelcomeTitleHeader text="To" />
      <WelcomeTitleHeader text="StreamFinder" />
      <Text as="p" p={6} textAlign="center" color={'gray.700'}>
        StreamFinder is a free to use app to see your favorite streamers
        streaming on multiple apps like Twitch, Youtube and Kick. All
        information is saved on your client side browser.
      </Text>
      <Link as={RouterLink} to="/settings">
        <Button>Open Settings</Button>
      </Link>
    </VStack>
  );
}

export default Welcome;
