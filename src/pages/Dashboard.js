import React, {useState} from 'react';
import Chartsmall from ""

function Dashboard() {
  return (
    <section style={styles.container}>
      <h1>Dashboard</h1>
      <p>Place charts here</p>
    </section>
  );
}
export default Dashboard;
const styles = {
  container: {
    display: "flex,",
    flexDirection: "column",
    height: "100vh",
    width: "100%",
  },
};
