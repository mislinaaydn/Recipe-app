import React, { useState } from "react";
import {
  Button,
  Container,
  Grid,
  TextInput,
  NumberInput,
  Flex,
} from "@mantine/core";
import QuillEditor from "../Quill";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // React Router için
import styles from "./Food.module.css";

function AddRecipePage() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [category, setCategory] = useState("");
  const [prepTime, setPrepTime] = useState(0);
  const [cookTime, setCookTime] = useState(0);
  const [servings, setServings] = useState(1);

  const [imageUrl, setImageUrl] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const handleAddIngredient = () => {
    if (ingredientInput.trim() !== "") {
      setIngredients([...ingredients, ingredientInput.trim()]);
      setIngredientInput(""); // Formu temizle
    }
  };

  const handleAddInstruction = () => {
    if (instructionInput.trim() !== "") {
      setInstructions([...instructions, instructionInput.trim()]);
      setInstructionInput(""); // Formu temizle
    }
  };

  const navigate = useNavigate(); // React Router için

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    const foodData = {
      foodName: title,
      description: description,
      category: category,
      ingredients: ingredients,
      instructions: instructions,
      preparationTime: prepTime,
      cookingTime: cookTime,
      servings: servings,
      imageUrl: imageUrl, // Resim URL'sini ekliyoruz
    };

    try {
      const response = await axios.post(
        "http://localhost:5000/food/createFood",
        foodData
      );

      // Başarı mesajını ayarla
      setSuccessMessage("Tarif başarıyla eklendi!");
      // Formu sıfırla
      setTitle("");
      setDescription("");
      setIngredients("");
      setInstructions("");
      setCategory("");
      setPrepTime(0);
      setCookTime(0);
      setServings(1);
      setImageUrl("");
    } catch (error) {
      console.error(
        "Error:",
        error.response ? error.response.data : error.message
      );
      setMessage("Tarif eklendi.");
    }
  };

  return (
    <Container className={styles.container} mt={10}>
      <h1>Yeni Tarif Ekle</h1>
      {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid.Col span={12}>
            <label>
              Yemek Adı <span style={{ color: "red" }}>*</span>
            </label>
            <TextInput
              placeholder="Yemeğin adını girin"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <label>
              Açıklama <span style={{ color: "red" }}>*</span>
            </label>
            <TextInput
              placeholder="Yemeğin açıklamasını girin"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Grid.Col>
          <Grid.Col span={12}>
            <label>
              Kategori <span style={{ color: "red" }}>*</span>
            </label>
            <TextInput
              placeholder="Yemeğin kategorisini girin"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <label>
              Malzemeler <span style={{ color: "red" }}>*</span>
            </label>
            <TextInput
              placeholder="Malzemeleri aralarına virgül koyarak girin"
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <label>
              Yapılış <span style={{ color: "red" }}>*</span>
            </label>
            <TextInput
              placeholder="Yemeğin yapılışını aralarına virgül koyarak girin"
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            />
          </Grid.Col>
          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <label>
              Hazırlık Süresi (dk) <span style={{ color: "red" }}>*</span>
            </label>
            <NumberInput
              placeholder="25"
              value={prepTime}
              onChange={(value) => setPrepTime(value)}
              min={0}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <label>
              Pişirme Süresi (dk) <span style={{ color: "red" }}>*</span>
            </label>
            <NumberInput
              placeholder="60"
              value={cookTime}
              onChange={(value) => setCookTime(value)}
              min={0}
            />
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4, lg: 4 }}>
            <label>
              Kaç Kişilik <span style={{ color: "red" }}>*</span>
            </label>
            <NumberInput
              placeholder="5"
              value={servings}
              onChange={(value) => setServings(value)}
              min={1}
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <label>
              Yemeğinizin fotoğraf URL'sini ekleyiniz{" "}
              <span style={{ color: "red" }}>*</span>
            </label>
            <TextInput
              placeholder="Fotoğraf URL'sini girin"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              required
            />
          </Grid.Col>

          <Grid.Col span={12}>
            <Flex justify="flex-start">
              <Button
                type="submit"
                size="sm"
                mt="md"
                onClick={() => navigate("/")}
              >
                Tarifi Ekle
              </Button>
            </Flex>
          </Grid.Col>
        </Grid>
      </form>
    </Container>
  );
}

export default AddRecipePage;
