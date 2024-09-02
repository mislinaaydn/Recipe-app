import React, { useEffect, useState } from "react";
import { fetchCategoriesWithFoods } from "../../../api";
import { Accordion, Grid, Anchor, Text, Card } from "@mantine/core";
import { Link } from "react-router-dom";
import styles from "./CategoryPage.module.css";

function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadCategories = async () => {
      try {
        const data = await fetchCategoriesWithFoods();
        setCategories(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadCategories();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <Grid>
      <Grid.Col span={{ base: 12, md: 4, lg: 3 }}>
        <Accordion transitionDuration={500} className={styles.Accordion}>
          {categories.map((category) => (
            <Accordion.Item key={category._id} value={category._id}>
              <Accordion.Control>{category.name}</Accordion.Control>
              <Accordion.Panel>
                <Grid>
                  {category.foods.map((food) => (
                    <Grid.Col key={food._id} span={12}>
                      <Anchor component={Link} to={`/foods/${food._id}`}>
                        <Card shadow="xs" padding="xs">
                          <Text weight={500}>{food.name}</Text>
                        </Card>
                      </Anchor>
                    </Grid.Col>
                  ))}
                </Grid>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>
      </Grid.Col>
    </Grid>
  );
}

export default CategoryPage;
