import { Anchor, Breadcrumbs, Container, Grid, NavLink } from "@mantine/core";
import React from "react";
import CardList from "../components/Card/CardList";
import Category from "../components/Category/CategoryPage";
import SearchPage from "../components/HomePage/SearchPage";

const items = [
  { title: "Anasayfa", href: "/" },
  { title: "Favori Yemek Tariflerim", href: "/favorites" },
].map((item, index) => (
  <Anchor href={item.href} key={index}>
    {item.title}
  </Anchor>
));

function Favorites() {
  return (
    <>
      <Breadcrumbs separator="→" separatorMargin="md" mb="sm">
        {items}
      </Breadcrumbs>

      <Grid>
        <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
          <Category></Category>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 8, lg: 9 }}>
          <SearchPage></SearchPage>
          <CardList items={[0, 0, 0]}></CardList>
        </Grid.Col>
      </Grid>
    </>
  );
}
export default Favorites;
