import { Box, Image, Text, VStack, HStack } from '@chakra-ui/react';
import ONLINEIMG from '../../assets/live-streaming-online.svg';
import OFFLINEIMG from '../../assets/live-streaming-offline.svg';

// type Props = {};
// props: Props
function StreamerContainer() {
  return (
    <VStack w="100%" p={2}>
      <Box display="flex" justifyContent="space-between" w="full" alignItems='center'>
        <HStack alignItems='flex-start'>
          <Image
          boxSize='50px'
            src="https://static-cdn.jtvnw.net/jtv_user_pictures/7ed5e0c6-0191-4eef-8328-4af6e4ea5318-profile_image-70x70.png"
            borderRadius="50%"
          />
          <VStack alignItems='flex-start' gap={0}>
            <Text maxW='217px' fontSize='md' fontWeight='bold' isTruncated>Kawalan Studio(Cred)</Text>
            <Text maxW='217px' fontSize='sm' isTruncated>Halo: The Master Chief Collection</Text>
          </VStack>
        </HStack>
        <HStack gap={0} mb={1}>
          <Image src={ONLINEIMG} m={0} p={0} />
          <Text p={0} m={0}>
            100,000
          </Text>
        </HStack>
      </Box>
    </VStack>
  );
}

export default StreamerContainer;
