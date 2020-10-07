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





function DoctorData(id, username, email,  role) {
  return {id, username, email, role };
}

const rows = [
    DoctorData('id1', 'uaername', '@mail',  'admin'),
    DoctorData('id2', 'username',  '@mail',  'user'),
    DoctorData('id2', 'username',  '@mail',  'admin'),
 
  
];

export default function DoctorDetails() {
  const classes = useStyles();
  
  
  return (
      <div>
    <Grid className={classes.grid}>
      <Paper className = {classes.paper}>
        <h1>Doctor'sDetails</h1>
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
            <TableCell align="left"><b>Doctor'sName</b></TableCell>
            <TableCell align="left"><b>Doctor'sAddress</b></TableCell>
            <TableCell align="left"><b>Doctor'sContactNumber</b></TableCell>
            <TableCell align="left"><b>Doctor'sPosition</b></TableCell>
            <TableCell align="left"><b>Doctor'sAvatarPhoto</b></TableCell>
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
              
              <TableCell align="left">{row.doctorname}</TableCell>
              <TableCell align="left">{row.doctoraddress}</TableCell>
              <TableCell align="left">{row.doctorcontactnumber}</TableCell>
              <TableCell align="left">{row.doctorpisition}</TableCell>
              <TableCell align="left">{row.doctoravatarphoto}</TableCell>
            
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
