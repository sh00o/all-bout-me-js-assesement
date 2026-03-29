const back_card = document.getElementById("back_card");
const middle_card = document.getElementById("middle_card");
back_card.onclick = () => {
  back_card.classList.toggle("move-front-cards");
  middle_card.classList.toggle("middle_card");
};
