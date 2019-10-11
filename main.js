const  calcArea = (length, width) => {
  return 0.5* length * width
}
console.log()


document.querySelector('#submit-button').addEventListener('click',  () => {
  // Never trust the user. ALWAYS white list input text
  
  const i = parseInt(document.querySelector('#Area-length-input').value)
  const j = parseInt(document.querySelector('#Area-breadth-input').value)
  const ans = ` the area of triangle ${calcArea(i, j)}.`
  localStorage.setItem("ans",ans)
  document.querySelector('#display').innerHTML = ans
})

function clickCounter() {
  if(typeof(Storage) !== "submit-button") {
    if (localStorage.clickcount) {
      localStorage.clickcount = Number(localStorage.clickcount)+1;
    } else {
      localStorage.clickcount = 1;
    }
    document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
  } else {
    document.getElementById("result").innerHTML = "Opps i cant find you";
  }
}

  
const jokeURI = 'https://api.icndb.com/jokes/random?limitTo=[nerdy]'

// fetch information
const getJoke = async () => {
  try {
    const response = await fetch(jokeURI)
    const obj = await response.json()
    console.log(`FETCHED. Response JSON ${obj}`)
    const joke = obj.value.joke || 'No joke for you.'
    return joke
  } catch (error) { console.error(error) }
}

// interact with DOM
const updateWithJoke = async (event) => {
  try {
    document.querySelector('#jokeResult').innerHTML = ''
    const answer = await getJoke()
    document.querySelector('#jokeResult').innerHTML = answer
  } catch (error) { console.error(error) }
}
  document.addEventListener('click', event => {
    if (event.target && event.target.id === 'giveJoke') { updateWithJoke(event) }
  })






