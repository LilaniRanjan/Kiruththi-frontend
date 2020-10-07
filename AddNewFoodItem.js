import React,{Component} from "react";
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit} from '@fortawesome/free-solid-svg-icons';
import CardActions from '@material-ui/core/CardActions';
import TextField from '@material-ui/core/TextField';
import FormControl from "@material-ui/core/FormControl";
import Button from "@material-ui/core/Button";
import Box from '@material-ui/core/Box';
import SaveIcon from '@material-ui/icons/Save';
import ListAltOutlinedIcon from '@material-ui/icons/ListAltOutlined';
import RotateLeftOutlinedIcon from '@material-ui/icons/RotateLeftOutlined';
import petFoodService from '../Services/petFoodService';

const style = {
  papersty: {
    minWidth: 275,
    backgroundColor:'#212121',
    marginTop: 20,
  },
  cardsty: {
    minWidth: 270,
    backgroundColor:'#fafafa',
    margin: 20
  }
}

export default class AddNewFoodItem extends Component {
   constructor(props){
     super(props);
     this.state = {
        title: '',
        price:'',
        description:'',
        avatarUrl:'',
        imageUrl:'',
        animalType:''
    };
    this.saveFood = this.saveFood.bind(this);
   }

   saveFood = (e) => {
    e.preventDefault();
    let food = {title: this.state.title, price: this.state.price, description: this.state.description, avatarUrl: this.state.avatarUrl, imageUrl: this.state.imageUrl, animalType: this.state.animalType};
    petFoodService.createPetFoods(food)
        .then(res => {
            this.setState({message : 'User added successfully.'});
            // this.props.history.push('/food');
        });
}

onChange = (e) =>
    this.setState({ [e.target.name]: e.target.value });





  handleSubmit(event) {
    alert('Pet details are submitted' );
    event.preventDefault();
  }

  render(){

    return(
      <>
        <Grid container spacing={3}>
          <Grid item xs={1}/>
          <Grid item xs={10}>
            <form onSubmit={this.handleSubmit}>
            <Grid container>
              <Grid item xs={2}/>
              <Grid item xs={8}>
                <CardContent style={style.cardsty}>
                  <CardActions>
                    <CardContent>
                      <FontAwesomeIcon icon={faEdit}/>Add New food ilems
                      <br/>
                      <br/>
                      <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="Title"
                            name="title"
                            label="Food Title"
                            value={this.state.title}
                            onChange={this.onChange}
                            helperText="Enter food's Title"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="price"
                            name="price"
                            label="Food price"
                            value={this.state.price}
                            onChange={this.onChange}
                            helperText="Enter food's price"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="description"
                            name="description"
                            label="Food description"
                            value={this.state.description}
                            onChange={this.onChange}
                            helperText="about food item"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="avatarUrl"
                            name="avatarUrl"
                            label="Food avatarUrl"
                            value={this.state.avatarUrl}
                            onChange={this.onChange}
                            helperText="Enter food's avatarUrl"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="animalType"
                            name="animalType"
                            label="Food animalType"
                            value={this.state.animalType}
                            onChange={this.onChange}
                            helperText="Enter food's avatarUrl"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth>
                          <TextField
                            required
                            id="imageUrl"
                            name="imageUrl"
                            label="Food imageUrl"
                            value={this.state.imageUrl}
                            onChange={this.onChange}
                            helperText="Enter food's imageUrl"
                            variant="outlined"
                          />
                        </FormControl>
                      </Grid>
                      </Grid>
                    </CardContent>

                  </CardActions>
                  <CardActions>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" 
                          value="submit"
                          type="submit"
                          color="primary"
                          onClick={this.saveFood}
                          startIcon={<SaveIcon />}>
                            <span>Save</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>
                      <Box>
                        <Box ml={2}>
                        <FormControl>
                          <Button href="" variant="contained" color="primary"
                          startIcon={<RotateLeftOutlinedIcon />}>
                            <span>Reset</span>
                          </Button>
                        </FormControl>
                        </Box>
                      </Box>

                    </CardActions>
                </CardContent>
              </Grid>
              <Grid item xs={2}/>
            </Grid>
            </form>
          </Grid>
          <Grid item xs={1}/>
        </Grid>
      </>
    )
  }
}
