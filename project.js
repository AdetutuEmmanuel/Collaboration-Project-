// prompt("What is your name?")

const button = document.getElementById("btn");
const input = document.getElementsByClassName("input");

const inputBehavior = () => {
      let email = email.value;
      firstName = firstName.value;
      lastName = lastName.value;
      middleName = middleName.value;
      contact = contact.value;
      gender = gender.value;
      let emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
     
      passwordFunc();
}

const passwordFunc = () => {
      let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i;
      display = show.value;
      password = password.value;
      if (passwordRegex.test(password) == false)
      {
            display.style.color = "red";
            display.innerText = "input proper text"
      }
}
const emailFunc = () => {
      let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/i;
      display = show.value;
      password = password.value;
      if (passwordRegex.test(password) == false)
      {
            display.style.color = "red";
            display.innerText = "input proper text"
      }
}

// if (firstName.value == false || middleName.value == false || lastName.value == false || contact.value == false || email.value == false || password.value == false || gender.value == false) 
//       {
//             input.style.outline = "red";        
//       }