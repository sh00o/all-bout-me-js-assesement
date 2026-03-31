const back_card = document.getElementById("back_card");
const middle_card = document.getElementById("middle_card");
const right_card = document.getElementById("right_card");
back_card.onclick = () => {
  back_card.classList.toggle("active");
};
middle_card.onclick = () => {
  middle_card.classList.toggle("active");
};
right_card.onclick = () => {
  right_card.classList.toggle("active");
};
