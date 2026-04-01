const back_card = document.getElementById("back_card");
const middle_card = document.getElementById("middle_card");
const front_card = document.getElementById("front_card");
back_card.onclick = () => {
  back_card.classList.toggle("active");
  middle_card.classList.toggle("move");
  front_card.classList.toggle("move");
};
middle_card.onclick = () => {
  front_card.classList.toggle("move");
};
front_card.onclick = () => {
  front_card.classList.toggle("active");
};
