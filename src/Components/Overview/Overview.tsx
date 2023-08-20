import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  color: theme.palette.text.secondary,
  borderRadius:0,
  boxShadow:'none'

//   backgroundColor:"turquoise",
  
}));

const Overview = () => {
  return (
    <Box  sx={{ flexGrow: 1 }}>
        <Grid xs={12}>
            <Item><h2>Overview</h2></Item>
        </Grid>
    <Grid container style={{display:'flex',justifyContent:"space-evenly"}} spacing={0}>
      <Grid item >
        <Item>Today's Check In <h1>21</h1></Item>
      </Grid>
      <Grid item >
        <Item>Today's Check out <h1>26</h1></Item>
      </Grid>
      <Grid item >
        <Item>Total in Hotel <h1>60</h1></Item>
      </Grid>
      <Grid item >
      <Item>Total Available Rooms <h1>20</h1></Item>
      </Grid>
      <Grid item >
      <Item>Total Occupied Rooms <h1>90</h1></Item>
      </Grid>
    </Grid>
  </Box>
  )
}

export default Overview