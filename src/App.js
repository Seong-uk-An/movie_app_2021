import React from "react";
import PropTypes from "prop-types";

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://static.megamart.com/product/image/1323/13230333/13230333_6_960.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "ramyeon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f0/Samyang_foods_Samyang_Ramen_20201111_003.jpg",
    rating: 4.5,
  },
  {
    id: 3,
    name: "samgyeopsal",
    image:
      "https://pds.joins.com/news/component/htmlphoto_mmdata/201702/27/117f5b49-1d09-4550-8ab7-87c0d82614de.jpg",
    rating: 5,
  },
  {
    id: 4,
    name: "rice",
    image:
      "https://img.insight.co.kr/static/2020/02/24/700/9e774ale0511z3p146p2.jpg",
    rating: 3,
  },
  {
    id: 5,
    name: "kimbap",
    image:
      "https://recipe1.ezmember.co.kr/cache/recipe/2016/06/29/e7401296033ab8e4297cd53d71e1bba91.jpg",
    rating: 3.5,
  },
];

function Food({ nameOfDish, picture, score }) {
  return (
    <div>
      <h2>I like {nameOfDish}.</h2>
      <img src={picture} alt={nameOfDish}></img>
      <h3>score = {score} / 5</h3>
    </div>
  );
}

Food.propTypes = {
  nameOfDish: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  score: PropTypes.number.isRequired,
};

function App() {
  return (
    <div>
      {foodILike.map((dish) => (
        <Food
          key={dish.id}
          nameOfDish={dish.name}
          picture={dish.image}
          score={dish.rating}
        />
      ))}
    </div>
  );
}

export default App;
