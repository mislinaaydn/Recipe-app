import { Container, Group, Text, ActionIcon } from "@mantine/core";
import {
  IconBrandYoutube,
  IconBrandInstagram,
  IconBrandX,
} from "@tabler/icons-react";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <div className={styles.footer}>
      <Text className={styles.title}>Yemek Tarifleri</Text>

      <Group className={styles.socialIcons}>
        <IconBrandYoutube stroke={2} />

        <IconBrandInstagram stroke={2} />

        <IconBrandX stroke={2} />
      </Group>
    </div>
  );
}

export default Footer;
