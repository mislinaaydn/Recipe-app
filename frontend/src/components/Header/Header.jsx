import { AppShell, Burger, Button, Group, UnstyledButton } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import styles from "./Header.module.css";
import { useNavigate } from "react-router-dom";

export function Header() {
  const [opened, { toggle }] = useDisclosure();
  const navigate = useNavigate();

  return (
    <Group h="100%" px="md" visibleFrom="sm">
      <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
      <Group justify="space-between" style={{ flex: 1 }}>
        <Group>
          <span>
            <h3>Yemek Tarifleri </h3>
          </span>
        </Group>
        <Group ml="xl" gap={0} visibleFrom="sm">
          <UnstyledButton
            className={styles.control}
            onClick={() => navigate("/")}
          >
            Anasayfa
          </UnstyledButton>
          <UnstyledButton
            className={styles.control}
            onClick={() => navigate("/favorites")}
          >
            Favoriler
          </UnstyledButton>
          <UnstyledButton
            className={styles.control}
            onClick={() => navigate("/my-recipe")}
          >
            Benim Tariflerim
          </UnstyledButton>
        </Group>
        <Group></Group>
      </Group>
    </Group>
  );
}
export default Header;
