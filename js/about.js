/* QUESTION AND ANSWER SECTION FUNCTIONALITY */

const questions = document.querySelectorAll(".question");
questions.forEach((questionContainer) => {
  const questionToggle = questionContainer.querySelector(
    ".question-article .answer-toggle"
  );
  questionToggle.onclick = () => {
    questionToggle.classList.toggle("active");
    const answer = questionContainer.querySelector(".answer");
    answer.classList.toggle("active");
  };
});

/* COUNTRY PROGRAMMES (READ MORE) POPUP FUNCTIONALITY */

const readMoreBtns = document.querySelectorAll(".programmes article button");

readMoreBtns.forEach((btn) => {
  btn.onclick = () => {
    body.classList.add("covered");
    const informationParent = btn.parentElement;
    const moreTitle = informationParent.querySelector(
      "figure figcaption h3"
    ).innerText;
    const moreInfo = informationParent.querySelector(
      "figure figcaption p"
    ).innerText;
    popup(moreTitle, moreInfo);
  };
});

const moreInfoPopupContainer = document.querySelector(
  ".more_info-popup-container"
);
const moreInfoPopup = document.querySelector(".more_info-popup");

const popup = (title, info) => {
  moreInfoPopup.querySelector("section h3").innerText = title;
  moreInfoPopup.querySelector("p").textContent = info;
  moreInfoPopupContainer.classList.add("active");
  const closeBtn = moreInfoPopup.querySelector("section button");
  closeBtn.onclick = () => {
    moreInfoPopupContainer.classList.remove("active");
    body.classList.remove("covered");
  };
};
