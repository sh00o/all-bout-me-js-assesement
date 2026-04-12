const back_card = document.getElementById("back_card");
const middle_card = document.getElementById("middle_card");
const front_card = document.getElementById("front_card");
back_card.onclick = () => {
  back_card.classList.toggle("active");
  middle_card.classList.toggle("move");
  front_card.classList.toggle("move");
};
middle_card.onclick = () => {
  back_card.classList.remove("active")
  middle_card.classList.remove("move")
  middle_card.classList.toggle("active")
  front_card.classList.toggle("move");
  console.log("DOMER")
};
front_card.onclick = () => {
  middle_card.classList.toggle("active")
  front_card.classList.toggle("active");
  front_card.classList.remove("move");
   console.log("DOMER")
};
