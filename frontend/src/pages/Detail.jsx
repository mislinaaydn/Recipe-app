import React from "react";
import DetailPage from "../components/Food/Detail/DetailPage";
import { Anchor, Breadcrumbs } from "@mantine/core";
import Comment from "../components/Food/Comment/Comment";

function Detail() {
  const items = [
    { title: "Anasayfa", href: "/" },
    { title: "Yemek Tarifleri", href: "/" },
    { title: "Detay", href: "/" },
  ].map((item, index) => (
    <Anchor href={item.href} key={index}>
      {item.title}
    </Anchor>
  ));
  return (
    <div>
      <Breadcrumbs separator="→" separatorMargin="md" mb="sm">
        {items}
      </Breadcrumbs>
      <DetailPage></DetailPage>
      <Comment></Comment>
    </div>
  );
}

export default Detail;
