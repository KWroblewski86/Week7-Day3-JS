// const res = fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
// .then((res) => {return res.json()})
// .then((data) => {console.log(`Simple Fetch- `, data)})

// const getPokemonFetch = async () => {
//     const resp = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
//     const dat = await resp.json();
//     console.log(`Async / await / fetch -`, dat);
//     return dat
// }
// getPokemonFetch()


let getData = async () => {
    let apokemon = document.getElementById('myPokemon').value
    console.log(apokemon)
    let response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${apokemon}`);
    if (response.status == 200){
        console.log('Async / await / Axios', response.data)
        return response.data
    }
    return 'API call is not working!'
}
getData()

let loadData = async () => {
    let data = await getData();
    console.log(data)
    let image = document.createElement("img")
    image.src= data.sprites.front_default
    let new_row = `<tr><td scope='row'> <div id="myImage"></div>${data.name}</td></tr>`;
    document.getElementById("pokemonBody").insertAdjacentHTML('afterbegin', new_row);
    document.getElementById("myImage").appendChild(image)
}

let clearData = () => {
    document.getElementById('pokemonBody').innerHTML='';
}

