const command = [
    //Commandes Pratiques
    {name:"Team" , id:"team", description:"Permet de créer deux équipes équilibrées à partir des noms des joueurs. Cependant, le nombre de joueur doit être pair"},
    {name: "Poll", id:"poll", description:"Permet de générer un sondage fermé ou ouvert"},
    {name: "Random", id:"random", description:"Renvoie un nombre aléatoire entre deux borne définit par l'utilisateur"},
    {name: "Command	", id:"command", description:"Envoie un lien vers cette page."},
    {name: "Site", id:"site", description:"Envoi un lien vers notre site"},

    //Commandes De Modérations
    {name: "Clear", id:"clear", description:"Permet d'effacer un nombre precis de messages dans le salon textuel"},
    
    //Commandes Fun
    {name: "Pile ou Face", id:"pileface", description: "Lance un jeu de pile ou face contre le bot" },
    {name: "Juste Prix", id: "justeprix", description: "Lance le célèbre jeux du juste prix"},
    {name: "Gif", id:"gif", description:"Le bot envoie un gif aléatoire dans le salon textuel"}
];

const searchNav = document.getElementById('searchNav');
const searchBar = document.getElementById('search-bar')

searchNav.addEventListener('keyup', () => {
    let input = searchNav.value
    let result = command.filter(item => item.name.toLocaleLowerCase().includes(input.toLocaleLowerCase()));
    let suggestion = ''
    if (input!=''){
    result.forEach(resultItem => 
        suggestion += `<a class = "suggest" href ="#${resultItem.id}"> ${resultItem.name}<p>${resultItem.description}</p></a>`)
    }

    document.getElementById('suggest-div').innerHTML = suggestion
})
