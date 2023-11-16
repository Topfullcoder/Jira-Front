import React, { useState, useEffect } from "react";
import { Card, Input } from "antd";
import "./ticketbar.css";

const gridStyle: React.CSSProperties = {
  width: "90%",
  textAlign: "center",
};

interface AppProps {
  title: string;
}

const App: React.FC<AppProps> = ({ title }) => {
  const [cardtitle, setCardtitle] = useState(title);
  const handle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setCardtitle(value);
  };
  return (
    <Card
      className="app-card-header"
      title={
        <Input
          placeholder="Borderless"
          bordered={false}
          value={cardtitle}
          onChange={handle}
        />
      }
      type="inner"
      style={{ width: "20%" }}
    >
      <div className="card-children">
        <Card.Grid style={gridStyle}>1</Card.Grid>
        <Card.Grid style={gridStyle}>2</Card.Grid>
        <Card.Grid style={gridStyle}>3</Card.Grid>
        <Card.Grid style={gridStyle}>4</Card.Grid>
        <Card.Grid style={gridStyle}>5</Card.Grid>
        <Card.Grid style={gridStyle}>6</Card.Grid>
        <Card.Grid style={gridStyle}>7</Card.Grid>
      </div>
    </Card>
  );
};

export default App;
