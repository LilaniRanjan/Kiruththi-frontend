import React from "react";
import ParrotCard from './ParrotCard'
import { Grid } from "@material-ui/core";
import constants from "./ParrotConstants";

const ParrotContent = () => {
  const parrotMakerCard = (parrotMakerObj) => {
    return (
      <Grid item xs={6} sm={4}>
        <ParrotCard {...parrotMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={5}>
      {constants.map((parrotMakerObj) => parrotMakerCard(parrotMakerObj))}
    </Grid>
  );
};

export default ParrotContent;