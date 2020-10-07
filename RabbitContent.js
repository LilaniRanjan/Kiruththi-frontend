import React from "react";
import { Grid } from "@material-ui/core";
import RabbitCard from "./RabbitCard";
import constants from "./RabbitConstants";


const RabbitContent = () => {
  const rabbitMakerCard = (rabbitMakerObj) => {
    return (
      <Grid item xs={6} sm={4}>
        <RabbitCard {...rabbitMakerObj} />
      </Grid>
    );
  };

  return (
    <Grid container spacing={5}>
      {constants.map((rabbitMakerObj) => rabbitMakerCard(rabbitMakerObj))}
    </Grid>
  );
};

export default RabbitContent;