import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

const information = [
  {
    tag: 'Name',
    value: 'Sergio A. Segura Fernández',
  },
  {
    tag: 'Email',
    value: 'sasegura.fernandez87@gmail.com',
  },
];

const Information = (props: any) => {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {information.map((info) => (
          <Grid item container spacing={2} xs={12} justifyContent="center">
            <Grid item>
              <Typography component="h2" variant="h6" color="text.primary">
                {info.tag}:
              </Typography>
            </Grid>
            <Grid item>
              <Typography component="h2" variant="h6" color="text.primary">
                {info.value}
              </Typography>
            </Grid>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Information;
