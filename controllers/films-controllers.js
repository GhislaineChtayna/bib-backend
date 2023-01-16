

let FILMS= [
    {
        id : '1',
        auteur : "James Cameron",
        annee : "2022",
        titre : "Avatar : la voie de l'eau",
        imageURL : "https://th.bing.com/th/id/R.a064f407763bf03abaf8553282452478?rik=8qip5E2ngeEjsA&pid=ImgRaw&r=0",
    },
     {
            id : '2',
            auteur : "Martin McDonagh",
            annee : "2022",
            titre : "Les Banshees d'Inisherin",
            imageURL : "https://th.bing.com/th?id=OIF.Uqd1SBTidCW1Vq6f%2bTqhng&pid=ImgDet&rs=1",
        },
        {
            id : '3',
            auteur : "Christian Duguay",
            annee : "2022",
            titre : "Tempête",
            imageURL : "https://fr.web.img5.acsta.net/c_310_420/pictures/22/10/24/17/14/4700907.jpg",
        },
        {
          id : '4',
          auteur : "Gerard Johnstone",
          annee : "2022",
          titre : "M3GAN",
          imageURL : "https://fr.web.img4.acsta.net/c_310_420/pictures/22/11/09/16/59/0189590.jpg",
        },
        {
          id : '5',
          auteur : "Franc RODDAM",
          annee : "1999",
          titre : "Cleopatra",
          imageURL : "https://th.bing.com/th/id/OIP.eR91dmGtEqZzkgW4QhsRKQHaFm?w=225&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
        },
      
  
    

    
]

const getFilms = (req, res) => {
    res.json({FILMS})
}

const getFilmById=(req, res) => {
    console.log('GetFilmById')
    const fId = req.params.filmid;
    console.log({fId})
    const film = FILMS.find(f=> {
        return f.id === fId;
    })
    if (!film) {
        return res.status(404).json({"Film" : "Film non trouvé pour cet Id."})
    }
    // res.send('GetFilmsById')
    res.json({message: {film}})
}


exports.getFilms = getFilms;
exports.getFilmById = getFilmById;