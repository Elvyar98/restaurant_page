export function RenderHomePage() {
  const contentBox = document.getElementById("content");
  const homePage = document.createElement("div");
  homePage.setAttribute("id", "home");

  const contentTitle = document.createElement("h1");
  contentTitle.textContent = "Top Notch Restaurant";
  contentTitle.classList.add("content-title");

  const pageBreak = document.createElement("hr");

  const homeHistory = document.createElement("div");
  const historyText = document.createElement("p");
  historyText.textContent =
    "Top notch restaurant serve top notch food, all day and all night";

  const homeHours = document.createElement("div");
  homeHours.classList.add("home-hours");

  const hoursTitle = document.createElement("h2");
  hoursTitle.textContent = "Opening hours";

  const hoursPOne = document.createElement("p");
  hoursPOne.textContent = "Monday - Thursday: 13:00 - 22:00";

  const hoursPTwo = document.createElement("p");
  hoursPTwo.textContent = "Friday - Saturday: 16 - 03:00";

  const hoursPThree = document.createElement("p");
  hoursPThree.textContent = "Sunday: 9:00 - 13:00";

  const homeLocation = document.createElement("div");
  homeLocation.classList.add("home-location");

  const locationTitle = document.createElement("h2");
  locationTitle.textContent = "Location";

  const locationAddress = document.createElement("p");
  locationAddress.textContent = "123 44 Fjekstad, latsasvag 123";

  homePage.appendChild(contentTitle);
  homePage.appendChild(pageBreak);

  homeHistory.appendChild(historyText);

  homeHours.appendChild(hoursTitle);
  homeHours.appendChild(hoursPOne);
  homeHours.appendChild(hoursPTwo);
  homeHours.appendChild(hoursPThree);

  homeLocation.appendChild(locationTitle);
  homeLocation.appendChild(locationAddress);

  contentBox.appendChild(homePage);
  contentBox.appendChild(homeHistory);
  contentBox.appendChild(homeHours);
  contentBox.appendChild(homeLocation);
}
