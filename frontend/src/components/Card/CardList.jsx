import React, { useEffect } from "react";
import RecipeCard from "./Card";
import { Grid } from "@mantine/core";

function CardList({ recipes }) {
  return (
    <>
      <Grid style={{ marginTop: 20 }}>
        {recipes &&
          recipes.length > 0 &&
          recipes?.map((recipe, index) => (
            <Grid.Col span={{ base: 12, md: 6, lg: 3 }} key={index}>
              <RecipeCard recipe={recipe}></RecipeCard>
            </Grid.Col>
          ))}
      </Grid>
    </>
  );
}

export default CardList;
