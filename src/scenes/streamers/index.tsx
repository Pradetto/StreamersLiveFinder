// type Props = {}

import { VStack, Text, HStack, IconButton, Link } from '@chakra-ui/react';
import { SettingsIcon } from '@chakra-ui/icons';
import StreamerContainer from '../../components/streamerContainer';
import { Link as RouterLink } from 'react-router-dom';

// props: Props

function Streamers() {
  return (
    <VStack>
      <HStack w='100%' display='flex' justifyContent='space-between' p={2} bgColor='green.400'>
        <Link as={RouterLink} to='/'>
            <Text as="h1" fontSize="xx-large" fontWeight="bold">
            View Streamers
            </Text>
        </Link>
        <Link as={RouterLink} to='/settings'>
        <IconButton aria-label="Settings Button" icon={<SettingsIcon />} />
        </Link>
      </HStack>
      <StreamerContainer />
      <StreamerContainer />
      <StreamerContainer />
      <StreamerContainer />
      <StreamerContainer />
      <StreamerContainer />
      <StreamerContainer />
      <StreamerContainer />
      <StreamerContainer />
      <StreamerContainer />
    </VStack>
  );
}

export default Streamers;
