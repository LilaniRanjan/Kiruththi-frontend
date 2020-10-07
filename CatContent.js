import React from "react";
import CatCard from './CatCard';
import { Grid } from "@material-ui/core";
import constants from './CatConstants';

const CatContent = () => {
  const catMakerCard = (catMakerObj) => {
    return (
      <Grid item xs={6} sm={4}>
        <CatCard {...catMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={5}>
      {constants.map((catMakerObj) => catMakerCard(catMakerObj))}
    </Grid>
  );
};

export default CatContent;