import { Text } from '@chakra-ui/react';

type Props = { text: string };

function WelcomeTitleHeader({ text }: Props) {
  return (
    <Text as="h1" fontSize="xx-large" fontWeight="bold">
      {text}
    </Text>
  );
}

export default WelcomeTitleHeader;
