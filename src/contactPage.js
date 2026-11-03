export function RenderContactPage() {
  const contentBox = document.getElementById("content");
  const contactPage = document.createElement("div");
  contactPage.classList.add("contact-page");

  const contentTitle = document.createElement("h1");
  contentTitle.textContent = "Contact Us";
  contentTitle.classList.add("content-title");

  const pageBreak = document.createElement("hr");

  const booking = document.createElement("div");
  booking.classList.add("box");

  const bookingTitle = document.createElement("h2");
  bookingTitle.textContent = "For booking";

  const bookingEmail = document.createElement("p");
  bookingEmail.textContent = "Email: totallyFake@mail.com";

  const bookingPhone = document.createElement("p");
  bookingPhone.textContent = "Phone: 123 1234 12";

  const complaint = document.createElement("div");
  complaint.classList.add("box");

  const complaintTitle = document.createElement("h2");
  complaintTitle.textContent = "For complaints";

  const complaintEmail = document.createElement("p");
  complaintEmail.textContent = "Email: soFake@mail.com";

  const complaintPhone = document.createElement("p");
  complaintPhone.textContent = "123 1234 13";

  contactPage.appendChild(contentTitle);
  contactPage.appendChild(pageBreak);

  booking.appendChild(bookingTitle);
  booking.appendChild(bookingEmail);
  booking.appendChild(bookingPhone);

  complaint.appendChild(complaintTitle);
  complaint.appendChild(complaintEmail);
  complaint.appendChild(complaintPhone);

  contentBox.appendChild(contactPage);
  contentBox.appendChild(booking);
  contentBox.appendChild(complaint);
}
