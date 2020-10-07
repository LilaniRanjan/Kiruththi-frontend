import React,{ useState, useEffect, Fragment } from 'react';
import { makeStyles, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead,InputAdornment, TableRow, Paper, Grid,InputBase,TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import petFoodService from '../Services/petFoodService';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  grid: {
      margin: '35px 150px 20px 50px',
      padding: '10px 10px 10px 10px',
      backgroundColor: "#424242"
  },
  paper: {
    padding: '10px 10px 10px 10px', 
    margin: '10px 10px 10px 10px',
    position: 'inherit'
  },
  search: {
    position: 'relative',
    align:'left',
    },
});





function FoodData(Title, Price, 	Description, AvatarUrl ,ImageUrl) {
  return {Title, Price, Description,AvatarUrl,ImageUrl };
}

const rows = [
  FoodData('', '', '',  '',''),
  FoodData('', '',  '',  '',''),
  FoodData('', '',  '',  '',''),
 
  
];

export default function FoodDetails() {
  const classes = useStyles();

  const [FoodDetails,setFoodDetails ] = useState([]);


  useEffect(() => {
      petFoodService.fetchPetFood()
        .then((res)=>{
          setFoodDetails(res.data)
          console.log(res.data)
        })
  },[])



 
//   useEffect(() => {
//     petFoodService.deletePetFood()
//       .then((res)=>{
//         setdeletePetFood(res.data)
//         console.log(res.data)
//       })
// },[])














  return (
      <div>
        {console.log(FoodDetails)}
    <Grid className={classes.grid}>
      <Paper className = {classes.paper}>
        <h1>AllFoodDetails</h1>
        <div className={classes.search}>
            <div className={classes.searchIcon} style = {{float: 'right'}}>
            
            
            <TextField
        // className={classes.margin}
        id="input-with-icon-textfield"
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            
            </InputAdornment>
          ),
        }}
      />
              
            </div>
        </div>
        
        <TableContainer>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
          <TableCell align="left"><b>Actions</b></TableCell>
            <TableCell align="left"><b>Title</b></TableCell>
            <TableCell align="left"><b>Price</b></TableCell>
            <TableCell align="left"><b>Description</b></TableCell>
            {/* <TableCell align="left"><b>AvatarUrl</b></TableCell> 
             <TableCell align="left"><b>ImageUrl</b></TableCell>  */}
          </TableRow>
        </TableHead>
        <TableBody>

          {FoodDetails.map((row) => (

          // key={row.id}>
          //   <TableCell component="th" scope="row">
          //     {row.id}

            <TableRow>
              
              <TableCell>
              
             

              <IconButton>
              <DeleteIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              
              </IconButton>
              
              

            
              <IconButton href="/Edit" >
                <EditIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              </IconButton>

              
              </TableCell>
              
              <TableCell align="left">{row.title}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.description}</TableCell>
              {/* <TableCell align="left">{row.avatarUrl}</TableCell>
              <TableCell align="left">{row.imageUrl}</TableCell> */}
            
            </TableRow>
          ))}
          
        </TableBody>
      </Table>

     
    </TableContainer>

    
    
      </Paper>
    </Grid>
    </div>
    
  );
}
