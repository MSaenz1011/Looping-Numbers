import React, { useState } from "react";

/// Mostrar una lista en base a un arreglo

function App() {
  const [list, setList] = useState(["Javascript", "CSS", "HTLM", "React"]);

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Las tecnologias del Front</h1>
      <ul style={styles.list}>
        {list.map((element) => (
          <li>{element}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    marginTop: "100px",
  },
  list: {
    fontSize: "20px",
    flexGrow: 6,
  },
};

export default App;
