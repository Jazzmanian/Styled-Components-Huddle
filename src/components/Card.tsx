import React from "react";
import { IItem } from "../types";
import { StyledCard } from "./styles/Card.styled";

type Props = {
  item: IItem;
};

const Card = ({ item: { id, title, body, image } }: Props) => {
  return (
    <StyledCard layout={id % 2 === 0 && "row-reverse"}>
      <div>
        <h2>{title}</h2>
        <p>{body}</p>
      </div>
      <div>
        <img src={`./img/${image}`} alt="" />
      </div>
    </StyledCard>
  );
};

export default Card;
