import React, { useContext, useState } from "react";
import {
  Card,
  Image,
  Text,
  Group,
  Tooltip,
  Flex,
  Avatar,
  Button,
} from "@mantine/core";
import { AiFillFire, AiFillEdit } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import styles from "./Card.module.css";

function RecipeCard({ isMe, recipe }) {
  const navigate = useNavigate();
  const [hovered, setHovered] = useState(false);
  const handleCardClick = () => {
    navigate(`/detail/${recipe._id}`);
  };

  return (
    <Card
      shadow="md"
      radius="md"
      withBorder
      className={styles.card}
      onClick={handleCardClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ cursor: "pointer" }}
    >
      <Card.Section>
        <Image
          src={recipe.image[0]} // Resim URL'si
          height={100}
          className={styles.imageCard}
          alt={recipe.foodName} // Resim alt text
          style={{
            opacity: hovered ? 0.5 : 1,
            transition: "opacity 0.05s ease",
          }}
        />
      </Card.Section>

      {hovered && (
        <Button
          variant="light"
          color="black"
          fullWidth
          mt="md"
          radius="md"
          style={{
            position: "absolute",
            bottom: 110,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        >
          Detaylara Git
        </Button>
      )}

      <Group m={5} justify="center">
        <Text fw={400} className={styles.title}>
          {recipe.foodName} {/* Yemek ismi */}
        </Text>
      </Group>

      <Group className={styles.groupContainer}>
        <Tooltip label="Favorilere ekle">
          <div>
            <AiFillFire className={styles.AiFillFire} />
          </div>
        </Tooltip>

        <Flex align="center" className={styles.avatarWrapper}>
          {isMe ? (
            <Tooltip label="Düzenle">
              <div>
                <AiFillEdit className={styles.AiFillEdit} />
              </div>
            </Tooltip>
          ) : (
            <>
              <Avatar variant="transparent" radius="sm" color="black" src="" />
              <Text fw={300} className={styles.person}></Text>
            </>
          )}
        </Flex>
      </Group>
    </Card>
  );
}

export default RecipeCard;
