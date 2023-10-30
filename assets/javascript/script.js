const pul=+prompt("meblegi daxil edin")
const ay =+prompt("neche ay")

const arr =[]
const obj = [{
    "money":pul,
    "monthamount": ay,
    "everymonth": arr
  }
];
function kredithesablama(pul,ay) {
    const ayapul =Math.round(pul/ay)
    for (let i = 0; i < ay; i++) {
        arr.push(ayapul)
    }
    const sonaypulu =pul-((arr.length -1) *ayapul)
    arr[arr.length -1]=sonaypulu

    return arr
}
kredithesablama(pul,ay)

console.log(obj);