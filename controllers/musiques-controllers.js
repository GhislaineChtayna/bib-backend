const uuid = require('uuid')


let MUSIQUES= [
    {
        id : '1',
        auteur : "Daft Punk",
        annee : "2013",
        titre : "Get Lucky",
        imageURL : "https://media.senscritique.com/media/000005202023/source_big/Get_Lucky_Single.jpg",
    },
     {
            id : '2',
            auteur : "David Guetta",
            annee : "1092",
            titre : "tralalala",
            imageURL : "https://images.rtl.fr/~c/770v513/funradio/www/1503307-david-guetta-lors-d-un-evenement-en-californie.jpg",
        },
        {
            id : '3',
            auteur : "Francois Juno",
            annee : "1999",
            titre : "Enfant tu deviendras grand",
            imageURL : "https://www.bide-et-musique.com/images/pochettes/17176.jpg",
        }
    

    
]

const getMusiques = (req, res) => {
    res.json({MUSIQUES})
}

const getMusiqueById=(req, res) => {
    console.log('GetMusiqueById')
    const mId = req.params.musiqueid;
    console.log({mId})
    const musique = MUSIQUES.find(m=> {
        return m.id === mId;
    })
    if (!musique) {
        return res.status(404).json({"Musique" : "Musique non trouvée pour cet Id."})
    }
    // res.send('GetMusiquesById')
    res.json({message: {musique}})
};

const createMusique = (req, res) => {
    
    const { auteur, annee, titre, imageUrl } = req.body;
    const createdMusique = {
        id: uuid.v4(),
        auteur,
        annee,
        titre,
        imageUrl
    }
    MUSIQUES.push(createdMusique)
    res.status(201).json({musique: createdMusique });

}
const updateMusique = (req, res) =>{ 
    const {auteur, annee, titre, imageUrl} = req.body
    const musiqueId = req.params.musiqueid

    const updatedMusique = MUSIQUES.find(m => {
        return (m.id === musiqueId);
    })

    const musiqueIndex = MUSIQUES.findIndex(m => m.id === musiqueId);
    updatedMusique.auteur = auteur;
    updatedMusique.annee = annee;
    updatedMusique.titre = titre;
    updatedMusique.imageUrl = imageUrl;

    MUSIQUES[musiqueIndex] = updatedMusique;

    res.status(200).json({musique : updatedMusique})
};

const deleteMusique = (req, res) => {
const musiqueId = req.params.musiqueid;

MUSIQUES = MUSIQUES.filter((m) => m.id !== musiqueId);
res.status(200).json({message : "Musique supprimée !"});
};

exports.getMusiques = getMusiques;
exports.getMusiqueById = getMusiqueById;
exports.createMusique = createMusique;
exports.updateMusique = updateMusique;
exports.deleteMusique = deleteMusique;