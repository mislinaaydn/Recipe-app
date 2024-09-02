import React from "react";
import { IconSearch } from "@tabler/icons-react";
import { Input } from "@mantine/core";
import styles from "./SearchPage.module.css";
import { Select } from "@mantine/core";

function SearchPage() {
  return (
    <div className={styles.searchpage}>
      <Input
        className={styles.search}
        placeholder="yemek yemek yemek "
        leftSection={<IconSearch size={16} />}
      />
      <Select
        placeholder="Seç"
        className={styles.filter}
        data={["En Yeniler", "En Eskiler"]}
      />
    </div>
  );
}

export default SearchPage;
