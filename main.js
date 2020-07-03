// NOTE: A "users" array is already loaded.
// See the "./data/users.js" script tag in index.html.

// The following line is here just to show you that the
// "users" array has already been loaded and is ready to go.
console.log(users)

// Append the katas to this element:
const main = document.querySelector('main')

function printKata (kataNumber, object) {
    // For the usage of the DETAILS and SUMMARY tags
    // in HTML, see: http://mdn.io/details-element
    const detailsElement = document.createElement('details')
    main.append(detailsElement)
    //
    const summaryElement = document.createElement('summary')
    summaryElement.append("KATA " + kataNumber)
    detailsElement.append(summaryElement)
    //
    // http://mdn.io/json.stringify
    const stringifiedObject = JSON.stringify(object)
    detailsElement.append(stringifiedObject)
}

const greenEyes1 = users.filter(user => user.eyeColor === "green")

printKata(0, greenEyes1)

const isActive1 = users.filter(user => user.isActive = "true") 

printKata(1, isActive1)

const Email1 = users.map(user => user.email)

printKata(2, Email1)

const Ovation = users.some(users => users.company = "OVATION")

printKata(3, Ovation)

const age1 = users.find(users => users.age > 38)

printKata(4, age1)

const isActive2 = users.filter(user => user.isActive = "true").find(users => users.age > 38)

printKata(5, isActive2)

const Zenco = users.filter(user => user.company = "ZENCO").map(users => users.balance)

printKata(6, Zenco)

const fugiat1 = users.filter(user => user.tags.includes("fugiat")).map(users => users.age)

printKata(7, fugiat1)