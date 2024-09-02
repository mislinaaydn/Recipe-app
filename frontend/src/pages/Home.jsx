import React, { useEffect, useState } from "react";
import CardList from "../components/Card/CardList";
import { Anchor, Breadcrumbs, Container, Grid } from "@mantine/core";
import SearchPage from "../components/HomePage/SearchPage";
import Category from "../components/Category/CategoryPage";
import { getallFood } from "../../api";

const items = [{ title: "Anasayfa", href: "/" }].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));
function Home() {
  const [allRecipes, setAllRecipes] = useState([]);

  async function getFood() {
    try {
      const response = await getallFood();
      setAllRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
      setError("Failed to fetch recipes");
    } finally {
    }
  }

  useEffect(() => {
    getFood();
  }, []);

  return (
    <>
      <div>
        <Breadcrumbs separator="→" separatorMargin="md" mb="sm">
          {items}
        </Breadcrumbs>
      </div>
      <Grid>
        <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
          <Category></Category>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
          <SearchPage></SearchPage>
          <CardList recipes={allRecipes}></CardList>
        </Grid.Col>
      </Grid>
    </>
  );
}

export default Home;
