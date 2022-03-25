const express = require("express");
const cors = require("cors");

const app = express();


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["All your hard work will soon pay off.",
					 "A lifetime friend shall soon be made.",
					 "A person is never to old to learn.",
           "A smooth long journey! Great expectations.",
           "Expect much of yourself and little of others."


  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});

app.get("/api/weather", (req, res) => {
  const weather = ["Today is 80 degrees in Dallas.",
        "Today is 48 degrees in Lehi, UT.",
        "Today is 54 degrees in New York City"
];

let randomIndex = Math.floor(Math.random() * weather.length);
let randomWeather = weather[randomIndex];

  res.status(200).send(randomWeather)

});

app.get("/api/mood", (req, res) => {
  const moodRes = "Thanks for telling us your mood!";

  res.status(200).send(moodRes)

});

app.get("/api/cartoon", (req, res) => {
  const cartoonRes = "Thanks for telling us your favorite cartoon!";

  res.status(200).send(cartoonRes)
});

app.listen(4000, () => console.log("Server running on 4000"));
