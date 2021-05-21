const command = [
    //Commandes Pratiques
    {name:"Team" , id:"team", description:"Permet de créer deux équipes équilibrées à partir des noms des joueurs. Cependant, le nombre de joueur doit être pair"},
    {name: "Poll", id:"poll", description:"Permet de générer un sondage fermé ou ouvert"},
    {name: "Random", id:"random", description:"Renvoie un nombre aléatoire entre deux borne définit par l'utilisateur"},
    {name: "Command	", id:"command", description:"Envoie un lien vers cette page."},
    {name: "Site",id:"site", description:"Envoi un lien vers notre site"},

    //Commandes De Modérations
    {name: "Clear",id:"clear", description:"Permet d'effacer un nombre precis de messages dans le salon textuel"}
];

const searchNav = document.getElementById('searchNav');
const searchBar = document.getElementById('search-bar')

function suggest(item){
    let suggestion = document.createElement('div');
btnInfo.textContent = item ;
container.appendChild(suggestion);
btnInfo.className = "suggest";
}

searchNav.addEventListener('keyup', () => {
    let input = searchNav.value
    let result = command.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    let suggestion = ''
    if (input!=''){
    result.forEach(resultItem => 
        suggestion += `<a>
        <div class = "suggest" href ="#${resultItem.id}"> ${resultItem.name}</divv>
        </a>`)
    }

    document.getElementById('suggest').innerHTML = suggestion
})
