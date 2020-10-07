import React from 'react';
import { makeStyles, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead,InputAdornment, TableRow, Paper, Grid,InputBase,TextField} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

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





function PharmacyData(id, username, email,  role) {
  return {id, username, email, role };
}

const rows = [
  PharmacyData('id1', 'uaername', '@mail',  'admin'),
  PharmacyData('id2', 'username',  '@mail',  'user'),
  PharmacyData('id2', 'username',  '@mail',  'admin'),
 
  
];

export default function PharmacyDetails() {
  const classes = useStyles();
  
  
  return (
      <div>
    <Grid className={classes.grid}>
      <Paper className = {classes.paper}>
        <h1>PharmacyDetails</h1>
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
            <TableCell align="left"><b>AvatarUrl</b></TableCell>
            <TableCell align="left"><b>ImageUrl</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              
              <TableCell>
              <Checkbox
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
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
              <TableCell align="left">{row.avatarurl}</TableCell>
              <TableCell align="left">{row.imageurl}</TableCell>
            
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
