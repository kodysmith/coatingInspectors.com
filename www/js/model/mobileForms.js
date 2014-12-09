// Fetching HTML Elements in Variables by ID.
var x = document.getElementById("mobileForms");
var createform = document.createElement('form'); // Create New Element Form
createform.setAttribute("action", ""); // Setting Action Attribute on Form
createform.setAttribute("method", "post"); // Setting Method Attribute on Form
x.appendChild(createform);

var logoImage = document.createElement('img'); // Heading of Form
logoImage.src = "./assets/img/coatingInspectors.comLogoSmall.jpg";
logoImage.style.height = 4 + "%";
createform.appendChild(logoImage);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var contactLabel = document.createElement('label'); // Create Label for Name Field
contactLabel.innerHTML = "Contact : "; // Set Field Labels
createform.appendChild(contactLabel);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var inputElement = document.createElement('input'); // Create Input Field for Name
inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "dname");
createform.appendChild(inputElement);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var companyLabel = document.createElement('label'); // Create Label for Name Field
companyLabel.innerHTML = "Company : "; // Set Field Labels
createform.appendChild(companyLabel);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var companyElement = document.createElement('input'); // Create Input Field for Name
companyElement.setAttribute("type", "text");
companyElement.setAttribute("name", "dname");
createform.appendChild(companyElement);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var phoneLabel = document.createElement('label'); // Create Label for Name Field
phoneLabel.innerHTML = "Phone Number : "; // Set Field Labels
createform.appendChild(phoneLabel);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var inputElement = document.createElement('input'); // Create Input Field for Name
inputElement.setAttribute("type", "text");
inputElement.setAttribute("name", "dname");
createform.appendChild(inputElement);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var emailLabel = document.createElement('label'); // Create Label for E-mail Field
emailLabel.innerHTML = "Email Address : ";
createform.appendChild(emailLabel);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var emailElement = document.createElement('input'); // Create Input Field for E-mail
emailElement.setAttribute("type", "text");
emailElement.setAttribute("name", "demail");
createform.appendChild(emailElement);

var emailBreak = document.createElement('br');
createform.appendChild(emailBreak);

var messageLabel = document.createElement('label'); // Append Textarea
messageLabel.innerHTML = "Project Description : ";
createform.appendChild(messageLabel);

var lineBreak = document.createElement('br');
createform.appendChild(lineBreak);

var messageElement = document.createElement('textarea');
messageElement.setAttribute("name", "dmessage");
createform.appendChild(messageElement);

var messageBreak = document.createElement('br');
createform.appendChild(messageBreak);

var submitElement = document.createElement('input'); // Append Submit Button
submitElement.setAttribute("type", "submit");
submitElement.setAttribute("name", "dsubmit");
submitElement.setAttribute("value", "Submit");
createform.appendChild(submitElement);