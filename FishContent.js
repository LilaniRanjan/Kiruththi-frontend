import React from "react";
import FishCard from './FishCard';
import { Grid } from "@material-ui/core";
import constants from './FishConstants';

const FishContent = () => {
  const fishMakerCard = (fishMakerObj) => {
    return (
      <Grid item xs={6} sm={4}>
        <FishCard {...fishMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={5}>
      {constants.map((fishMakerObj) => fishMakerCard(fishMakerObj))}
    </Grid>
  );
};

export default FishContent;