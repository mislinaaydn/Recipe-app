import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleFood } from "../../../../api";
import { Button, Container, Grid, Image, Text } from "@mantine/core";
import { FaClock, FaHourglassEnd, FaUsers, FaUserAlt } from "react-icons/fa";
import styles from "../Food.module.css";

function DetailPage() {
  const { id } = useParams();
  const [food, setFood] = useState(null);

  useEffect(() => {
    const fetchFood = async () => {
      try {
        const response = await getSingleFood(id);
        setFood(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch food:", error);
      }
    };

    fetchFood();
  }, [id]);

  const stripTags = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
  };

  if (!food) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Grid mt={20}>
        <Grid.Col
          span={{ base: 12, md: 12, lg: 7 }}
          className={styles.ContentGrid}
        >
          <Image
            radius="md"
            className={styles.Images}
            src={food.image ? food.image[0] : ""}
            alt={food.foodName || "Food Image"}
          />
        </Grid.Col>

        <Grid.Col span={{ base: 12, md: 12, lg: 5 }} p={20}>
          <Text className={styles.title} fw={550}>
            {food.foodName}
          </Text>
          <Text>{food.description}</Text>
          <Grid mt={20}>
            <Grid.Col span={4} className={styles.centerAlign}>
              <Grid.Col span={12} className={styles.icon}>
                <FaHourglassEnd />
              </Grid.Col>
              <Grid.Col span={12}>
                <Text align="center">Yapım süresi</Text>
                <Text align="center" className={styles.detail}>
                  {food.preparationTime}
                </Text>
              </Grid.Col>
            </Grid.Col>

            <Grid.Col span={4} className={styles.centerAlign}>
              <Grid.Col span={12} className={styles.icon}>
                <FaClock />
              </Grid.Col>
              <Grid.Col span={12}>
                <Text align="center">Pişirme süresi</Text>
                <Text align="center" className={styles.detail}>
                  {food.cookingTime}
                </Text>
              </Grid.Col>
            </Grid.Col>

            <Grid.Col span={4} className={styles.centerAlign}>
              <Grid.Col span={12} className={styles.icon}>
                <FaUsers />
              </Grid.Col>
              <Grid.Col span={12}>
                <Text align="center">Kaç kişilik</Text>
                <Text align="center" className={styles.detail}>
                  {food.servings}
                </Text>
              </Grid.Col>
            </Grid.Col>
          </Grid>

          <Grid.Col span={12} className={styles.iconPerson} mt={30}>
            <FaUserAlt />
            <Text className={styles.personName} ml={10}>
              {food.author}
            </Text>
          </Grid.Col>
        </Grid.Col>
      </Grid>

      <Container mt={20}>
        <Grid>
          <Grid.Col span={{ base: 12, md: 6, lg: 9 }} p={0}>
            <h2>Nasıl Yapılır ?</h2>
            <div>{stripTags(food.instructions)}</div>
          </Grid.Col>
          <Grid.Col
            span={{ base: 12, md: 6, lg: 3 }}
            className={styles.ContentGrid}
          >
            <div className={styles.Content}>
              <h2>Malzemeler</h2>
              <div>{stripTags(food.ingredients)}</div>
            </div>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default DetailPage;
