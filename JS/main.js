const nextButton = document.getElementById("nextButton");
const resetButton = document.getElementById("resetButton");

const headerText = document.getElementById("headerText");
const helperText = document.getElementById("helperText");


var view = 0;


let views= [
    {
      headerText: "I can read your mind",
      helperText: "",
    },

    {
      headerText: "Pick a number from 01-99",
      helperText: "when you have your number click next",
    },

    {
      headerText: "Add both digits together to get a new number",
      helperText: "Ex: 14 is 1 + 4 = 5 <br> click next to proceed",
    },

    {
      headerText: "Subtract your new number from the original number",
      helperText: "Ex: 14 - 5 = 9 <br> click next to proceed",
    },

    {
       headerText: "0 - % <br> 1 - @ <br> 2 - $ <br> 3 - B <br> 4 - % <br> 5 - # <br> 6 - ! <br> 7 - M <br> 8 - ? <br> 9 - % <br> 10 - & <br> 11 - @ <br> 12 - $ <br> 13 - B <br> 14 - % <br> 15 - # <br> 16 - ! <br> 17 - M <br> 18 - % <br> 19 - ? <br> 20 - & <br> 21 - @ <br> 22 - $ <br> 23 - B <br> 24 - % <br> 25 - # <br> 26 - ! <br> 27 - % <br> 28 - M <br> 29 - ? <br> 30 - & <br> 31 - @ <br> 32 - $ <br> 33 - B <br> 34 - % <br> 35 - # <br> 36 - % <br> 37 - ! <br> 38 - M <br> 39 - ? <br> 40 - & <br> 41 - @ <br> 42 - $ <br> 43 - B <br> 44 - % <br> 45 - % <br> 46 - ! <br> 47 - M <br> 48 - ? <br> 49 - $ <br> 50 - B <br> 51 - % <br> 52 - # <br> 53 - ! <br> 54 - % <br> 55 - M <br> 56 - ? <br> 57 - & <br> 58 - @ <br> 59 - $ <br> 60 - B <br> 61 - % <br> 62 - # <br> 63 - % <br> 64- ! <br> 65 - M <br> 66 - ? <br> 67 - & <br> 68 - @ <br> 69 - $ <br> 70 - B <br> 71 - % <br> 72 - % <br> 73 - # <br> 74 - ! <br> 75 - M <br> 76 - ? <br> 77 - & <br> 78 - @ <br> 79 - $ <br> 80 - B <br> 81 - % <br> 82 - % <br> 83 - # <br> 84 - ! <br> 85 - M <br> 86 - ? <br> 87 - & <br> 88 - @ <br> 89 - $ <br> 90 - % <br> 91 - B <br> 92 - % <br> 93 - # <br> 94 - ! <br> 95 - M <br> 96 - ? <br> 97 - & <br> 98 - @ <br> 99 - % <br>",
       helperText: "Find your new number. <br> Note the symbol beside the number",
    },

    {
      headerText: "%",
      helperText: "%:",
    },
    ]

nextButton.addEventListener("click", () => {

  if (view === 0) {
    headerText.innerHTML = views[1].headerText;
    helperText.innerHTML = views[1].helperText;
    resetButton.classList.remove('d-none');
    resetButton.classList.add('d-block');
  } 
    
  else if (view === 1) {
    headerText.innerHTML = views[2].headerText;
    helperText.innerHTML = views[2].helperText;
  }

  else if (view === 2) {
    headerText.innerHTML = views[3].headerText;
    helperText.innerHTML = views[3].helperText;
  }
    
  else if (view === 3) {
    headerText.innerHTML = views[4].headerText;
    helperText.innerHTML = views[4].helperText;
  }
   
  else if (view === 4) {
    headerText.innerHTML = views[5].headerText;
    helperText.innerHTML = views[5].helperText;
  }
  view += 1;
});

resetButton.addEventListener("click", () => {
  if (view > 0) {
    view = 0;
      headerText.innerHTML = views[0].headerText;
      helperText.innerHTML = views[0].helperText;
    } 
  return view;
});

