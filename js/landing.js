/* SLIDER SECTION FUNCTION */

const items = document.querySelectorAll(".values figure");
const prev = document.querySelectorAll(".previous");
const next = document.querySelectorAll(".next");
const tracker = document.querySelectorAll(".values-tracker li");

const itemCounted = items.length;
let itemCount = 0;

next.forEach((btn) => {
  btn.onclick = () => {
    itemCount++;
    if (itemCount >= itemCounted) {
      itemCount = 0;
    }
    carousel();
  };
});

prev.forEach((btn) => {
  btn.onclick = () => {
    btn.onclick = () => {
      itemCount--;
      if (itemCount < 0) {
        itemCount = itemCounted - 1;
      }
      carousel();
    };
  };
});

tracker.forEach((track, index) => {
  track.onclick = () => {
    itemCount = index;
    carousel();
  };
});

const carousel = () => {
  items.forEach((item) => {
    item.classList.remove("active");
  });
  tracker.forEach((track) => {
    track.classList.remove("active");
  });
  items[itemCount].classList.add("active");
  tracker[itemCount].classList.add("active");
};
