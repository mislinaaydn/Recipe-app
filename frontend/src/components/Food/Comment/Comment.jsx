import {
  Avatar,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Grid,
  Image,
  Rating,
  Spoiler,
  Text,
  Textarea,
} from "@mantine/core";
import React, { useState } from "react";
import styles from "./Comment.module.css";

function Comment() {
  const [rating, setRating] = useState(50);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    console.log("Rating:", rating);
    console.log("Comment:", comment);

    useEffect(() => {
      const fetchComment = async () => {
        try {
          const response = await getSingleFood(id);
          setComment(response.data); // data.data yerine data kullanımı
          console.log(response.data); // Gelen veriyi kontrol edin
        } catch (error) {
          console.error("Failed to fetch comment:", error);
        }
      };

      fetchComment();
    }, [id]);

    if (!comment) {
      return <div>Loading...</div>; // Yükleniyor mesajı
    }
  };
  return (
    <>
      <Container>
        <Grid>
          <Grid.Col
            span={{ base: 12, md: 6, lg: 7 }}
            className={styles.ContentGrid}
          >
            <h2 className={styles.Content}>Yorum Yapın</h2>

            <Textarea
              placeholder="Yemek hakkında düşüncelerinizi paylaşın..."
              value={comment}
              minRows={5}
              autosize
              onChange={(event) => setComment(event.currentTarget.value)}
            />

            <Grid align="center" display={Flex} m={10}>
              <Grid.Col span={{ base: 12, md: 6, lg: 3 }}>
                <Text fw={500}>Değerlendiriniz:</Text>
              </Grid.Col>
              <Grid.Col span={{ base: 12, md: 6, lg: 9 }}>
                <Rating defaultValue={2} />
              </Grid.Col>
            </Grid>

            <Grid.Col span={{ base: 12, md: 12, lg: 4 }} p={0} mt={20} mb={15}>
              <Button className={styles.buton} onClick={handleSubmit}>
                Gönder
              </Button>
            </Grid.Col>
          </Grid.Col>
        </Grid>
        <Grid>
          <Grid.Col
            span={{ base: 12, md: 12, lg: 12 }}
            className={styles.ContentGrid}
            display={Flex}
            p={0}
          >
            <h2>Yemek Hakkındaki Yorumlar</h2>
            <Spoiler
              mt={20}
              maxHeight={220}
              showLabel="Devamını göster"
              hideLabel="Kapat "
            >
              <Grid>
                <Grid.Col span={12} className={styles.borderLine}>
                  <Text>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Mollitia ipsam odit tempora maxime. Eligendi eveniet,
                    pariatur similique nisi, excepturi ex odit sequi voluptatum
                    sed nobis illum omnis aperiam natus harum?
                  </Text>
                  <Grid mt={10} align="center">
                    <Grid.Col style={{ display: "flex", alignItems: "center" }}>
                      <Avatar
                        variant="transparent"
                        radius="sm"
                        color="black"
                        src=""
                      />
                      <span style={{ marginLeft: "5px" }}>
                        Petek Mislina Aydın
                      </span>
                      <Rating defaultValue={2} ml={30} />
                    </Grid.Col>
                  </Grid>
                </Grid.Col>{" "}
              </Grid>
            </Spoiler>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  );
}

export default Comment;
