// script.js
// video game store website - Retromon Games

// variables to store the value of displayed info for the checks in the while loops, for not repeating displayed content
let currentQuote
let currentPinball
let currentInventory

// function to show the quotes
function displayVideoGameQuotes() {
    // handle to the videoGamesQuotes id
    const videoGameQuotes = document.querySelector('#videoGameQuotes')

    // fade out/in for the quote transitions
    videoGameQuotes.style.opacity = '0'
    setTimeout(function () {
        videoGameQuotes.style.opacity = '1'

        // array of quotes to display
        const quotes = [
            "I love this store, this is easily my favorite gamestore. The staff is wonderful, very friendly and extremely helpful.",
            "Fantastic selection at this shop from vintage games and systems to movies and collectibles. They also pay very fairly for used gaming equipment.",
            "This place is so well organized and priced. The staff are absolutely top notch. Sometimes I just come back  here just to witness what awesome customer service is like.",
            "Friendly staff, great looking store and it has a lot to offer!",
            "The team here is one of the most passionate and knowledgeable games stores around.",
            "Excellent service, excellent pricing. Make you feel like one of the family! Purchase came by mail and was packed with love and care. Can’t wait to purchase more in the future!",
            "Great place for the whole family.  The staff are extremely helpful and friendly, plus their prices are very reasonable."
        ]

        // get a random number to index into the quotes array
        let random = Math.floor(Math.random() * quotes.length)

        // take the quote at the determined position and place it in a variable
        let displayedQuote = quotes[random]

        // used for testing to make sure the quote does not repeat
        // console.log(displayedQuote)

        while (displayedQuote == currentQuote) {
            random = Math.floor(Math.random() * quotes.length)
            displayedQuote = quotes[random]
        }

        // store value of displayedQuote into currentQuote for the next check when the function is called again
        currentQuote = displayedQuote

        // set the innertext to the stored quote
        videoGameQuotes.innerText = `"${displayedQuote}"`
    }, 1000)
}

// function to show the pinball section
function displayPinball() {
    //get a handle to the div where the info will be added
    const pinballInfo = document.querySelector('#pinballInfo')

    //clears the innerHTML for the div so that it does not stack
    clear('#pinballInfo')

    // array of arrays containing a description and image path
    const pinballInfoArray = [
        ['Come see our pinball selection and play as much as you want for a small entry fee, or enter one of our tournaments that take place on the 2nd Tuesday of the month.', 'img/senad-palic-faB6AmHR5eM-unsplash.jpg'],
        ['Our store features a rotating assortment of 20 pinball machines. Even Batman approves!', 'img/senad-palic-gbDFDPmBrG8-unsplash.jpg'],
        ['Our machines have a 98% uptime, so you\'ll rarely miss out on playing your favorites. Check our our full list of games.', 'img/thomas-millot-CbxaLzCVsCM-unsplash.jpg'],
        ['Come see our pinball selection and play as much as you want for a small entry fee, or enter one of our tournaments that take place on the 2nd Tuesday of the month.', 'img/louie-castro-garcia-UitmwXNMHiE-unsplash.jpg'],
        ['Our machines have a 98% uptime, so you\'ll rarely miss out on playing your favorites. Check our our full list of games and feel free to ask about upcoming machine rotations!', 'img/kyle-johnson-7dy20Hc1wWE-unsplash.jpg']
    ]

    // get random number based off of length of the array
    let randomPinballInfo = Math.floor(Math.random() * pinballInfoArray.length)

    // while loop to compare the stored first value in the random array. If they are equal, random number again until it is not the same
    while (pinballInfoArray[randomPinballInfo][0] == currentPinball) {
        randomPinballInfo = Math.floor(Math.random() * pinballInfoArray.length)
    }

    // store the new first value of the chosen array into current variable for next comparison when the function is run
    currentPinball = pinballInfoArray[randomPinballInfo][0]

    // create an image element and description using the random number
    let pinballImage = document.createElement('img')
    pinballImage.setAttribute('src', pinballInfoArray[randomPinballInfo][1])
    pinballImage.setAttribute('class', 'my-4')
    pinballInfo.appendChild(pinballImage)

    let pinballDescription = document.createElement('p')
    pinballDescription.setAttribute('class', 'font-monospace')
    pinballDescription.innerText = `${pinballInfoArray[randomPinballInfo][0]}`
    pinballInfo.appendChild(pinballDescription)
}

// display inventory function
function displayInventory() {
    const inventory = document.querySelector('#inventory')

    clear('#inventory')

    const inventoryArray = [
        ['NES Classics', 'We have a large selection of Nintendo Entertainment System games. Stop by to check them out!', 'img/mario.jpg'],
        ['N64 Greats', 'Your favorite Nintendo 64 games are in stock at our physical location. Please stop by to see what we have available!', 'img/n64.jpg'],
        ['CIB Pokemon', 'Our store currently has some Complete In Box Pokemon games for the GameBoy. These are becoming increasingly rare and are in great condition!', 'img/pokemon.jpg'],
        ['Modded Handheld Consoles', 'We provide backlight modification services for your favorite handhelds as well as replacement shells, buttons, lenses, and other parts to customize your console!', 'img/handhelds.jpg']
    ]

    let randomInventory = Math.floor(Math.random() * inventoryArray.length)

    while (inventoryArray[randomInventory][0] == currentInventory) {
        randomInventory = Math.floor(Math.random() * inventoryArray.length)
    }

    currentInventory = inventoryArray[randomInventory][0]

    // create the elements on the page for the inventory
    let inventoryImage = document.createElement('img')
    inventoryImage.setAttribute('src', inventoryArray[randomInventory][2])
    inventoryImage.setAttribute('class', 'my-4')
    inventory.appendChild(inventoryImage)

    let inventoryTitle = document.createElement('h3')
    inventoryTitle.innerText = `${inventoryArray[randomInventory][0]}`
    inventoryTitle.setAttribute('class', 'my-4')
    inventory.appendChild(inventoryTitle)

    let inventoryDescription = document.createElement('p')
    inventoryDescription.innerText = `${inventoryArray[randomInventory][1]}`
    inventoryDescription.setAttribute('class', 'my-4 font-monospace')
    inventory.appendChild(inventoryDescription)
}

// function that we can call to clear the innerHTML
function clear(info) {
    const panel = document.querySelector(info)
    panel.innerHTML = ''
}

// call the functions the first time
displayVideoGameQuotes()
displayPinball()
displayInventory()

// timers for calling the functions again for changing the sections at 10 and 8 second intervals
const quotesTimer = setInterval(displayVideoGameQuotes, 8000)
const pinballTimer = setInterval(displayPinball, 10000)
const inventoryTimer = setInterval(displayInventory, 4000)

// handle to the button in the navbar
const newQuoteButton = document.querySelector('#newQuoteButton')
// if button is clicked, it will call the function to change the quote. This does not affect the timing of the interval switching
newQuoteButton.addEventListener('click', function () {
    displayVideoGameQuotes()
})
