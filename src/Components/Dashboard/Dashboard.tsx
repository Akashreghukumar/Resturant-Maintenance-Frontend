import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Doughnutchart from '../../SharedComponents/Doughnutchart';
import '../../App.css'
import PaperComp from '../../SharedComponents/Paper';
import Overview from '../Overview/Overview';
import Rooms from '../Rooms/Rooms';
import Table from '../../SharedComponents/Table';

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const Dashboard = () => {
  return (
    <div>
    <Box sx={{ flexGrow: 1,mt:13 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Item className="center">
            <Overview/>
          </Item>
        </Grid>
        <Grid  item xs={12}>
          <Item className="center">
            <Rooms/>
          </Item>
        </Grid>
        <Grid  item xs={12}  >
          <Item sx={{p:2}}>
            <Table/>
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
             <div>
                <h2>Room Status</h2>
            </div>
            <div>
            <Doughnutchart/>
            </div>
             </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>   <PaperComp/></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>con 5</Item>
        </Grid>
      </Grid>
    </Box>
    </div>
  )
}

export default Dashboard