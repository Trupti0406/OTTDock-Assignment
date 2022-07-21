let menu = document.querySelector("#menu-bar");
let navbar = document.querySelector(".navbar");

// for navbar in small screen
menu.addEventListener("click", () => {
  menu.classList.toggle("fa-times");
  navbar.classList.toggle("active");
});

// Review
// local reviews data
const reviews = [
  {
    id: 1,
    name: "Phillip Rossouw",
    job: "Vice-chairman,  Net Afrikaans",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    heading: "OTTDock offers most comprehensive end-to-end solution.",
    text: "It was a weird concept. Why would I really need to generate a random paragraph? Could I actually learn something from doing so? All these questions were running through her head as she pressed the generate button. To her surprise, she found what she least expected to see.",
  },

  {
    id: 2,
    name: "anna johnson",
    job: "Chancellor and trusty,  Web Mottrils",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    heading: "Been associated with OTTDock for over a year now, no complaints!",
    text: "There was something beautiful in his hate. It wasn't the hate itself as it was a disgusting display of racism and intolerance. It was what propelled the hate and the fact that although he had this hate, he didn't understand where it came from. It was at that moment that she realized that there was hope in changing him.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "Associate-Enigineer, BigBytes",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    heading:
      "I have tried many such platforms, OTTDock is probably the best one by far!",
    text: "Don't be scared. The things out there that are unknown aren't scary in themselves. They are just unknown at the moment. Take the time to know them before you list them as scary. Then the world will be a much less scary place for you, he didn't understand where it came from and neither did anyone else",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "Junior Developer, Smart Task",
    img: "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    heading:
      "Love the customer of OTTDock, solved my payment problem in an hour.",
    text: "He sat staring at the person in the train stopped at the station going in the opposite direction. She sat staring ahead, never noticing that she was being watched. Both trains began to move and he knew that in another timeline or in another universe, they had been happy together.",
  },
  {
    id: 5,
    name: "Sia Thomson",
    job: "Frontend developer, Big Wings LLC",
    img: "https://media.istockphoto.com/photos/all-set-for-a-productive-night-ahead-picture-id637233964?b=1&k=20&m=637233964&s=170667a&w=0&h=UR_QBjM1jaVihnmsHcobYrkD6QskSFSLMUAPYZLMHbA=",
    heading:
      "No lagging, no excessive prices, almost all shows available, it's a bingo :)",
    text: "MaryLou wore the tiara with pride. There was something that made doing anything she didn't really want to do a bit easier when she wore it. She really didn't care what those staring through the window were thinking as she vacuumed her apartment and every corner of it.",
  },
];

// Select items
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const job = document.getElementById("job");
const info = document.getElementById("info");
const heading = document.getElementById("heading");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");

// Set starting values
let currentItem = 0;
// Load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});
document.onload = currentItem;

// Show perosn based on item
function showPerson() {
  const item = reviews[currentItem];
  img.src = item.img;
  author.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
  heading.textContent = item.heading;
}

// Show next / prev person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});
