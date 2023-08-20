import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import '../../App.css'

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
  borderRadius:0,
}));

const roomsData = [
    {
        title:"Single Saring",
        filled:2,
        total:30,
        price:586,
        isDealsAvailable:true,
        numberOfDeals:2
    },
    {
        title:"Double Saring",
        filled:2,
        total:35,
        price:1068,
        isDealsAvailable:true,
        numberOfDeals:2
    },
    {
        title:"Triple Saring",
        filled:2,
        total:25,
        price:1568,
        isDealsAvailable:false,
        numberOfDeals:0
    },
    {
        title:"VIP Suit",
        filled:4,
        total:10,
        price:586,
        isDealsAvailable:false,
        numberOfDeals:0
    }
]



const Rooms = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
            roomsData.map((data:any)=>{
                return(
                    <Grid  item xs={3}>
                        
                    <Item style={{display:"flex",justifyContent:'start'}}>
                        <div style={{backgroundColor:"#E8F1FD",padding:"3px",borderRadius:'3px'}}>
                            {data.isDealsAvailable ? `${data.numberOfDeals} Deals Available`: "No Deals Available"}
                        </div>
                    </Item> 
                    <Item>{data.title}</Item>
                    <Item>{`${data.filled}/${data.total}`}</Item>
                    <Item>{`$ ${data.price} /day`}</Item>
                  </Grid>
                )
            })
        }
      </Grid>
    </Box>  )
}

export default Rooms