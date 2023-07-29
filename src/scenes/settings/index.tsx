import { VStack, Button, Link } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import SettingsTitleHeader from './SettingsTitleHeader';

function Settings() {
  return (
    <VStack h="400px" display="flex" justifyContent="space-between" p={4}>
      <VStack>
        <SettingsTitleHeader streamService="Twitch" isAuth={false} />
        <SettingsTitleHeader streamService="Youtube" isAuth={false} />
      </VStack>
      <Link as={RouterLink} to="/streamers">
        <Button mb={8}>View Streamers</Button>
      </Link>
    </VStack>
  );
}

export default Settings;
