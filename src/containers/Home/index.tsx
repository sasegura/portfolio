import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Typography from '@mui/material/Typography';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
import { useNavigate } from 'react-router-dom';

const tiers = [
  {
    title: 'TODO-List',
    description: 'Simple Todo List project using Redux ToolKit',
    features: ['list', 'add', 'delete', 'toogle'],
    buttonText: 'See more',
    buttonVariant: 'outlined',
    link: '/todo-list',
  },
  // {
  //   title: 'Pro',
  //   subheader: 'Most popular',
  //   description: '15',
  //   features: [
  //     '20 users included',
  //     '10 GB of storage',
  //     'Help center access',
  //     'Priority email support',
  //   ],
  //   buttonText: 'Get started',
  //   buttonVariant: 'contained',
  //   link: '/home',
  // },
  // {
  //   title: 'Enterprise',
  //   description: '30',
  //   features: [
  //     '50 users included',
  //     '30 GB of storage',
  //     'Help center access',
  //     'Phone & email support',
  //   ],
  //   buttonText: 'Contact us',
  //   buttonVariant: 'outlined',
  //   link: '/home',
  // },
];

function PricingContent() {
  const navigate = useNavigate();
  return (
    <React.Fragment>
      <GlobalStyles
        styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }}
      />
      <CssBaseline />

      {/* Hero unit */}
      <Container
        disableGutters
        maxWidth="md"
        component="main"
        sx={{ pt: 8, pb: 6 }}
      >
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Porfolio
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Example cases developed by Sergio A. Segura Fernandez
        </Typography>
        <Typography
          variant="h5"
          align="center"
          color="text.secondary"
          component="p"
        >
          Casos de ejemplos desarrollados por Sergio A. Segura Fernández
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography
                      component="h2"
                      variant="h6"
                      color="text.primary"
                    >
                      {tier.description}
                    </Typography>
                  </Box>
                  <ul>
                    <Typography
                      component="li"
                      variant="subtitle1"
                      align="center"
                    >
                      <strong>features:</strong>
                      {String(tier.features)}
                    </Typography>
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                    onClick={() => navigate(tier.link)}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}
