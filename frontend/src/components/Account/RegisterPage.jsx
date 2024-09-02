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

function RegisterPage() {
  const [userData, setFormData] = useState({
    username: "",
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
    try {
      const res = await axios.post(
        "http://localhost:5000/user/register",
        userData
      );
      console.log(res.data);
      alert("Kayıt başarılı!");
      navigate("/login");
    } catch (err) {
      console.error(err);
      alert("Kayıt başarısız!");
    }
  };

  return (
    <Center style={{ height: "100vh" }}>
      <Card shadow="md" padding="xl" radius="md" withBorder>
        <Text size="lg" weight={500} align="center" mb="lg">
          Kayıt Ol
        </Text>
        <form onSubmit={handleSubmit}>
          <TextInput
            label="Kullanıcı Adı"
            placeholder="Kullanıcı Adı"
            name="username"
            onChange={handleChange}
            required
            mb="sm"
          />
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
            Kayıt Ol
          </Button>
        </form>
        <Group position="center" mt="md">
          <Text>Hesabınız var mı?</Text>
          <Anchor href="#" onClick={() => navigate("/login")}>
            Giriş Yapın
          </Anchor>
        </Group>
      </Card>
    </Center>
  );
}

export default RegisterPage;
