import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
    height: 100,
    lineHeight: '60px',
  }));
  
//   const darkTheme = createTheme({ palette: { mode: 'dark' } });
  const lightTheme = createTheme({ palette: { mode: 'light' } });

const PaperComp = () => {

    const roomStatusCard=[
        {
            title:"Booked Rooms",
            total:360
        },
        {
            title:"Non Booked Rooms",
            total:106
        },
        {
            title:"Cleaning Rooms",
            total:12
        },
        {
            title:"Rooms Under Maintenance",
            total:3
        },
        {
            title:"Cleaning Rooms",
            total:12
        },
        {
            title:"Rooms Under Maintenance",
            total:3
        }
    ]
    
  return (
    <Grid spacing={2}>
      {[lightTheme].map((theme, index) => (
        <Grid key={index}>
          <ThemeProvider theme={theme}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: { md: '1fr 1fr' },
                gap: 5,
              }}
            >
              {roomStatusCard.map((cardData) => (
                <Item sx={{display:'flex',justifyContent:'center',flexDirection:'column',padding:"5px"}} key={cardData.title} elevation={3}>
                  <h3>{cardData.title}</h3>
                  <h1>{cardData.total}</h1>
                </Item>
              ))}
            </Box>
          </ThemeProvider>
        </Grid>
      ))}
    </Grid>
  )
}

export default PaperComp