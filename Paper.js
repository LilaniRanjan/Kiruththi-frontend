import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(12),
      width: theme.spacing(150),
      height: theme.spacing(30),
    },
    // paper:{
    //   backgroundColor:'#0040ff'

    // }
  },
}));

export default function SimplePaper() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={5} 
      style ={{backgroundColor:'#000000'}}
      // className={classes.paper}
      />
      {/* <Paper /> */}
      {/* <Paper elevation={3} /> */}
    
    </div>
  );
}