import React from "react";
import DogCard from './DogCard'
import { Grid } from "@material-ui/core";
import constants from "./DogConstants";

const DogContent = () => {
  const dogMakerCard = (dogMakerObj) => {
    return (
      <Grid item xs={6} sm={4}>
        <DogCard {...dogMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={5}>
      {constants.map((dogMakerObj) => dogMakerCard(dogMakerObj))}
    </Grid>
  );
};

export default DogContent;