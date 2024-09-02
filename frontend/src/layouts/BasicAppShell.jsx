import React from "react";
import {
  AppShell,
  Burger,
  Button,
  Group,
  NavLink,
  UnstyledButton,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useEffect, useState } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import AppHeader from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import styles from "../components/Header/Header.module.css";
export function BasicAppShell() {
  const location = useLocation();
  const navigate = useNavigate();
  const [opened, { toggle }] = useDisclosure();
  const [pathname, setPathname] = useState(location.pathname);
  useEffect(() => {
    navigate(pathname);
  }, [pathname]);

  function handleRoute(route) {
    setPathname(route);
    toggle();
  }

  return (
    <AppShell
      header={{ height: 80 }}
      navbar={{
        width: 300,
        breakpoint: "sm",
        collapsed: { desktop: true, mobile: !opened },
      }}
      className="header"
      padding="md"
    >
      <AppShell.Header>
        <AppHeader></AppHeader>
        <Group
          hiddenFrom="sm"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100%",
            padding: 10,
          }}
        >
          <div>--Yemek Tarifleri--</div>

          <div style={{ display: "flex" }}>
            <Button onClick={() => navigate("/login")}>Giriş</Button>
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              size="sm"
            />
          </div>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar py="md" px={4}>
        <UnstyledButton
          className={styles.controlnav}
          onClick={() => handleRoute("/")}
        >
          Anasayfa
        </UnstyledButton>
        <UnstyledButton
          className={styles.controlnav}
          onClick={() => handleRoute("/favorites")}
        >
          Favoriler
        </UnstyledButton>
        <UnstyledButton
          className={styles.controlnav}
          onClick={() => handleRoute("/my-recipe")}
        >
          Benim Tariflerim
        </UnstyledButton>
      </AppShell.Navbar>
      <AppShell.Main>
        <Outlet></Outlet>
      </AppShell.Main>
      <Footer></Footer>
    </AppShell>
  );
}
