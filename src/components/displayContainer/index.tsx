import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

function DisplayContainer() {
  const boxWidth = '400px';
  const boxHeight = '400px';
  return (
    <Box minW={boxWidth} maxW={boxWidth} minH={boxHeight} bg="lightblue">
      <Outlet />
    </Box>
  );
}

export default DisplayContainer;
