import { Anchor, Breadcrumbs } from "@mantine/core";
import React from "react";
import AddRecipePage from "../components/Food/AddRecipePage";

function AddRecipe() {
  const items = [
    { title: "Anasayfa", href: "/" },
    { title: "Yemek Tarifleri", href: "/" },
    { title: "Ekle", href: "/" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <>
      <Breadcrumbs separator="→" separatorMargin="md" mb="sm">
        {items}
      </Breadcrumbs>
      <AddRecipePage></AddRecipePage>
    </>
  );
}

export default AddRecipe;
