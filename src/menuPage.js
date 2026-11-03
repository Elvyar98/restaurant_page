export function RenderMenuPage() {
  const contentBox = document.getElementById("content");
  const menuPage = document.createElement("div");
  menuPage.setAttribute("id", "menu");

  const contentTitle = document.createElement("h1");
  contentTitle.textContent = "Menu";
  contentTitle.classList.add("content-title");

  const pageBreak = document.createElement("hr");

  const starterBox = document.createElement("div");
  starterBox.classList.add("box");

  const starterTitle = document.createElement("h2");
  starterTitle.textContent = "Starters";

  const starterTextOne = document.createElement("p");
  starterTextOne.textContent = "Bruschetta       70kr";

  const starterTextTwo = document.createElement("p");
  starterTextTwo.textContent = "Toastskagen       85kr";

  const starterTextThree = document.createElement("p");
  starterTextThree.textContent = "Svamptoast       75kr";

  const mainCourse = document.createElement("div");
  mainCourse.classList.add("box");

  const mainCourseTitle = document.createElement("h2");
  mainCourseTitle.textContent = "Main Course";

  const mainCourseTextOne = document.createElement("p");
  mainCourseTextOne.textContent = "Svamprisotto     175kr";

  const mainCourseTextTwo = document.createElement("p");
  mainCourseTextTwo.textContent = "Rigatoni med oxfilé 185kr";

  const mainCourseTextThree = document.createElement("p");
  mainCourseTextThree.textContent = "Tomatsallad med bulgur 155kr";

  const dessert = document.createElement("div");
  dessert.classList.add("box");

  const dessertTitle = document.createElement("h2");
  dessertTitle.textContent = "Dessert";

  const desertTextOne = document.createElement("p");
  desertTextOne.textContent = "Kladdkaka med glass 55kr";

  const desertTextTwo = document.createElement("p");
  desertTextTwo.textContent = "Morotskaka  45kr";

  const desertTextThree = document.createElement("p");
  desertTextThree.textContent = "Pannkaka med glass 55kr";

  menuPage.appendChild(contentTitle);
  menuPage.appendChild(pageBreak);

  starterBox.appendChild(starterTitle);
  starterBox.appendChild(starterTextOne);
  starterBox.appendChild(starterTextTwo);
  starterBox.appendChild(starterTextThree);

  mainCourse.appendChild(mainCourseTitle);
  mainCourse.appendChild(mainCourseTextOne);
  mainCourse.appendChild(mainCourseTextTwo);
  mainCourse.appendChild(mainCourseTextThree);

  dessert.appendChild(dessertTitle);
  dessert.appendChild(desertTextOne);
  dessert.appendChild(desertTextTwo);
  dessert.appendChild(desertTextThree);

  contentBox.appendChild(menuPage);
  contentBox.appendChild(starterBox);
  contentBox.appendChild(mainCourse);
  contentBox.appendChild(dessert);
}
