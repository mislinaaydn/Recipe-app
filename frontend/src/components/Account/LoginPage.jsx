import React, { useState } from "react";
import {
  TextInput,
  PasswordInput,
  Button,
  Card,
  Text,
  Group,
  Anchor,
  Center,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage() {
  const [userData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    debugger;
    try {
      const res = await axios.post(
        "http://localhost:5000/user/login",
        userData
      );
      console.log(res.data);
      localStorage.setItem("token", res.data.token);
      alert("Giriş başarılı!");
    } catch (err) {
      console.error(err);
      alert("Giriş başarısız!");
    }
  };

  return (
    <Center style={{ height: "100vh" }}>
      <Card shadow="md" padding="xl" radius="md" withBorder>
        <Text size="lg" weight={500} align="center" mb="lg">
          Giriş Yap
        </Text>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="E-posta"
            placeholder="E-posta"
            name="email"
            onChange={handleChange}
            required
            mb="sm"
          />
          <PasswordInput
            label="Şifre"
            placeholder="Şifre"
            name="password"
            onChange={handleChange}
            required
            mb="sm"
          />
          <Button fullWidth type="submit" mt="md">
            Giriş Yap
          </Button>
        </form>
        <Group position="center" mt="md">
          <Text>Hesabınız yok mu?</Text>
          <Anchor href="#" onClick={() => navigate("/register")}>
            Kayıt Olun
          </Anchor>
        </Group>
      </Card>
    </Center>
  );
}

export default LoginPage;
