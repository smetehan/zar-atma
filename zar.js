document.querySelector(".btnstart").addEventListener("click", () => {
  let zarone = Math.floor(Math.random() * 6) + 1;

  console.log(zarone);
  let zartwo = Math.floor(Math.random() * 6) + 1;
  console.log(zartwo);

  if (zarone === 1) {
    document.querySelector("#zar-one").style.display = "block";
    switch (zartwo) {
      case 1:
        document.querySelector("#zar-one-t").style.display = "block";
        break;
      case 2:
        document.querySelector("#zar-two-t").style.display = "block";
        break;
      case 3:
        document.querySelector("#zar-three-t").style.display = "block";
        break;
      case 4:
        document.querySelector("#zar-four-t").style.display = "block";
        break;
      case 5:
        document.querySelector("#zar-five-t").style.display = "block";
        break;
      case 6:
        document.querySelector("#zar-six-t").style.display = "block";
        break;
      default:
        break;
    }
    document.querySelector(".btnstart").style.display = "none";
    document.querySelector(".btnreset").style.display = "block";
  } else if (zarone === 2) {
    document.querySelector("#zar-two").style.display = "block";
    switch (zartwo) {
      case 1:
        document.querySelector("#zar-one-t").style.display = "block";
        break;
      case 2:
        document.querySelector("#zar-two-t").style.display = "block";
        break;
      case 3:
        document.querySelector("#zar-three-t").style.display = "block";
        break;
      case 4:
        document.querySelector("#zar-four-t").style.display = "block";
        break;
      case 5:
        document.querySelector("#zar-five-t").style.display = "block";
        break;
      case 6:
        document.querySelector("#zar-six-t").style.display = "block";
        break;
      default:
        break;
    }
    document.querySelector(".btnstart").style.display = "none";
    document.querySelector(".btnreset").style.display = "block";
  } else if (zarone === 3) {
    document.querySelector("#zar-three").style.display = "block";
    switch (zartwo) {
      case 1:
        document.querySelector("#zar-one-t").style.display = "block";
        break;
      case 2:
        document.querySelector("#zar-two-t").style.display = "block";
        break;
      case 3:
        document.querySelector("#zar-three-t").style.display = "block";
        break;
      case 4:
        document.querySelector("#zar-four-t").style.display = "block";
        break;
      case 5:
        document.querySelector("#zar-five-t").style.display = "block";
        break;
      case 6:
        document.querySelector("#zar-six-t").style.display = "block";
        break;
      default:
        break;
    }
    document.querySelector(".btnstart").style.display = "none";
    document.querySelector(".btnreset").style.display = "block";
  } else if (zarone === 4) {
    document.querySelector("#zar-four").style.display = "block";
    switch (zartwo) {
      case 1:
        document.querySelector("#zar-one-t").style.display = "block";
        break;
      case 2:
        document.querySelector("#zar-two-t").style.display = "block";
        break;
      case 3:
        document.querySelector("#zar-three-t").style.display = "block";
        break;
      case 4:
        document.querySelector("#zar-four-t").style.display = "block";
        break;
      case 5:
        document.querySelector("#zar-five-t").style.display = "block";
        break;
      case 6:
        document.querySelector("#zar-six-t").style.display = "block";
        break;
      default:
        break;
    }
    document.querySelector(".btnstart").style.display = "none";
    document.querySelector(".btnreset").style.display = "block";
  } else if (zarone === 5) {
    document.querySelector("#zar-five").style.display = "block";

    switch (zartwo) {
      case 1:
        document.querySelector("#zar-one-t").style.display = "block";
        break;
      case 2:
        document.querySelector("#zar-two-t").style.display = "block";
        break;
      case 3:
        document.querySelector("#zar-three-t").style.display = "block";
        break;
      case 4:
        document.querySelector("#zar-four-t").style.display = "block";
        break;
      case 5:
        document.querySelector("#zar-five-t").style.display = "block";
        break;
      case 6:
        document.querySelector("#zar-six-t").style.display = "block";
        break;
      default:
        break;
    }
    document.querySelector(".btnstart").style.display = "none";
    document.querySelector(".btnreset").style.display = "block";
  } else if (zarone === 6) {
    document.querySelector("#zar-six").style.display = "block";
    switch (zartwo) {
      case 1:
        document.querySelector("#zar-one-t").style.display = "block";
        break;
      case 2:
        document.querySelector("#zar-two-t").style.display = "block";
        break;
      case 3:
        document.querySelector("#zar-three-t").style.display = "block";
        break;
      case 4:
        document.querySelector("#zar-four-t").style.display = "block";
        break;
      case 5:
        document.querySelector("#zar-five-t").style.display = "block";
        break;
      case 6:
        document.querySelector("#zar-six-t").style.display = "block";
        break;
      default:
        break;
    }
    document.querySelector(".btnstart").style.display = "none";
    document.querySelector(".btnreset").style.display = "block";
  }
});

document.querySelector(".btnreset").addEventListener("click", () => {
  document.querySelector(".btnreset").style.display = "none";
  document.querySelector(".btnstart").style.display = "block";
  document.querySelector("#zar-one").style.display = "none";
  document.querySelector("#zar-two").style.display = "none";
  document.querySelector("#zar-three").style.display = "none";
  document.querySelector("#zar-four").style.display = "none";
  document.querySelector("#zar-five").style.display = "none";
  document.querySelector("#zar-six").style.display = "none";
  document.querySelector("#zar-one-t").style.display = "none";
  document.querySelector("#zar-two-t").style.display = "none";
  document.querySelector("#zar-three-t").style.display = "none";
  document.querySelector("#zar-four-t").style.display = "none";
  document.querySelector("#zar-five-t").style.display = "none";
  document.querySelector("#zar-six-t").style.display = "none";
});
