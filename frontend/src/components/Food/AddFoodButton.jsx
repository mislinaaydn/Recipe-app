import { Button } from "@mantine/core";
import React from "react";
import styles from "./Food.module.css";
import { useNavigate } from "react-router-dom";

function AddFood() {
  const navigate = useNavigate();
  return (
    <>
      <div>
        <div className={styles.add}>
          <Button
            className={styles.AddButton}
            onClick={() => navigate("/add-food")}
          >
            Tarif Ekle
          </Button>
        </div>
      </div>
    </>
  );
}

export default AddFood;
