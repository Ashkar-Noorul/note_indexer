import React from "react";
import { Card, useAccordionButton } from "react-bootstrap";

function CustomToggle({ children, eventKey }) {
  const decoratedOnClick = useAccordionButton(eventKey, () =>
    console.log("totally custom!")
  );

  return <Card.Text onClick={decoratedOnClick}>{children}</Card.Text>;
}

export default CustomToggle;
