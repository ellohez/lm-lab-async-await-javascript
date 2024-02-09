import fetch from "node-fetch";

const jsonTypicode = "https://jsonplaceholder.typicode.com/todos/1";

// Refactored to use the modern async await instead of
// .then() and .catch()
const fetchData = async (apiEndPoint) => {
  try {
    const response = await fetch(apiEndPoint);
    const json = await response.json();
    console.log(json);
  } catch(error) {
    console.log(error);
  };
};

fetchData(jsonTypicode);

// Extension - Fun Cat Fact!
const catFactEndPoint = "https://cat-fact.herokuapp.com/facts/random";
fetchData(catFactEndPoint);

