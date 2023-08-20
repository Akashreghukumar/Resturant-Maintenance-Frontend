import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import FoodCard from '../../../SharedComponents/FoodCard';

const FooditemsGrid = () => {

const Item = styled(Paper)(({ theme }) => ({
    // backgroundColor: '#1A2027', 
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    }));

const foodItems=[
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },
    {
        image:"https://www.eatingwell.com/thmb/PNxn0MIxGHZJ-3M21nLD-fWhJro=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/3858974-8388170461744aaba5f922951d2d19db.jpg",
        name:"Sanwidth",
        Description:"Chicken mixed with apple",
        price:"100",
    },

]


  return (

<Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        {
            foodItems.map((foodItem:any)=>{
                return(
                    <Grid item xs={4}>
                       <FoodCard name={foodItem.name} 
                       price={foodItem.price}
                       image={foodItem.image}
                       description={foodItem.description}
                       />
                  </Grid>
                )
            })
        }

      </Grid>
    </Box>

  )
}

export default FooditemsGrid