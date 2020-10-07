import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import DogFood from './DogFood';
import CatFood from './CatFood';
import RabbitFood from "./RabbitFood";
import FishFood from './FishFood';
import ParrotFood from './ParrotFood'



function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
    backgroundColor: theme.palette.background.paper,
    display: 'flex',
    height: 300,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>

    <Grid container spacing={1}>
        <Grid item xs={2}>
            <Tabs
            orientation="vertical"
            variant="scrollable"
            value={value}
            onChange={handleChange}
            aria-label="Vertical tabs example"
            className={classes.tabs}
      >
            {/* <Tab label="PETS" {...a11yProps(0)} /> */}
            <Tab label="Dog" {...a11yProps(0)} />
            <Tab label="Cat" {...a11yProps(1)} />
            <Tab label="Rabbit" {...a11yProps(2)} />
            <Tab label="Fish" {...a11yProps(3)} />
            <Tab label="Parrot" {...a11yProps(4)} />
            
            </Tabs>


        </Grid>
        <Grid item xs={10}>
            <TabPanel value={value} index={0}>
                <DogFood/>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <CatFood/>
            </TabPanel>
            <TabPanel value={value} index={2}>
                <RabbitFood/>
            </TabPanel>
            <TabPanel value={value} index={3}>
                 <FishFood/>
            </TabPanel>
            <TabPanel value={value} index={4}>
                <ParrotFood/>
            </TabPanel>
            {/* <TabPanel value={value} index={5}>
        
            </TabPanel>
            <TabPanel value={value} index={6}> */}
        
            {/* </TabPanel> */}

            

        </Grid>
    </Grid>
        
      

     
    </div>
  );
}
