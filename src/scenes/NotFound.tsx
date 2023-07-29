import { Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <>
      <Box>Not Found</Box>
      <Link to="/">GO HOME</Link>
    </>
  );
}

export default NotFound;
