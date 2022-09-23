Mind Reader

About:

A mind reader asks a user to choose a number between 01-99 and then guides them through steps to guess their number
The steps always lead you to a number that is a factor of 9
Then every number between 1-100 is asigned a symbol
All factors of 9 are assigned the same symbol
The last view shows the symbol assigned to the factors of 9 and asks if it was the symbol next to your number (it always is)
INIT: Create my variables

View number (integer)

Header text

Next/reveal button (event listeners) properties: clicked or unclicked

Example text

Helper text

Reset/Go button (event listeners) properties: clicked or unclicked

Symbols properties: randomized, answer symbol

FUNCTIONALITY:

FUNCTION init: let viewNumber = 0; create eventListeners create originalState = view(0); render FUNCTION

FUNCTION updateView: if nextButton clicked run nextView if go render (look in state and pick out what goes on page)

FUNCTION randomizeSymbols: (run in init) randomize list of 9 new list loop from 0-100 to create an element in JS if i % 9 === 0 assign answerSymbol if i % 9 != 0 assign randomSymbol

FUNCTION nextView: increment view number by 1

FUNCTION reset: set viewNmber = 0

FUNCTION showSymbols:

let state = { views: [

{headerText: "I can read your mind",
nextButton: null,
helperText: null,
goButton: buttonShowGo
}, 

{headerText: "Pick a number from 01-99",
nextButtonVisibility: true,
helperText: "when you have your number click next",
goButtonVisibility: 
},

{headerText: "Add both digits together to get a new number",
nextButton: buttonShowNext,
helperText: "Ex: 14 is 1 + 4 = 5 <br> click next to proceed",
goButton: buttonShowReset
},

{headerText: "Subtract you new number from the original number",
nextButton: buttonShowNext,
helperText: "Ex: 14 - 5 = 9 <br> click next to proceed",
goButton: buttonShowReset
},

{headerText: null,
symbols: showSymbols,
nextButton: buttonShowReveal,
helperText: "Find your new number. <br> Note the symbol beside the number."
goButton: buttonShowReset
}

{headerText: answerSymbol,
nextButton: null,
helperText: "Your symbol is: <br> answerSymbol,
goButton: buttonShowReset
}
 ]

currentView: 0
symbols:
answerSymbol:
}

state.views[state.currentView]

[

]
