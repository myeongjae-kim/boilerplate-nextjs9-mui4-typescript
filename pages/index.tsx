import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import MuiLink from '@material-ui/core/Link';
import ProTip from '../src/ProTip';
import Link from '@material-ui/core/Link';
import NextLink from 'next/link';

function MadeWithLove() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Built with love by the '}
      <MuiLink color="inherit" href="https://material-ui.com/">
        Material-UI
      </MuiLink>
      {' team.'}
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box my={4}>
        <Typography variant="h4" component="h1" gutterBottom>
          Next.js v4.2.0 with TypeScript example
        </Typography>
        <NextLink href="/about">
          <Link href="#" color="secondary">
            Go to the about page
        </Link>
        </NextLink>
        <ProTip />
        <MadeWithLove />
      </Box>
    </Container>
  );
}
