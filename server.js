const http = require("http")
const server = http.createServer()
const port = 8000
const mongoose = require('mongoose');
const carsModel = require("./models/carsModel");

// const car = new carsModel({
//     brand : "Renault",
//     model : "Espace",
//     year : "1999",
// })

// Ajouter d'une voiture
// car.save().then((newCar) => {
//     console.log("Nouvelle car !", newCar)
// }).catch((error) => {
//     console.error("Erreur MongoDB", error)
// })

// Ajouter plusieurs voitures
// carsModel.insertMany([
//     {brand: "Renault", model: "Scenic", year: "2004"},
//     {brand: "Peugeot", model: "308", year: "2017"}
// ]).then((newCars) => {
//     console.log("Nouvelle cars !", newCars)
// }).catch((error) => {
//     console.error("Erreur MongoDB", error)
// })

// Récuperer une voiture par son _id
// carsModel.findById('616abed4146d91efa63a0f4f').then((carsModel) => {
//     console.log(carsModel);
// }).catch((error) => {
//     console.error(error);
// });

// Modifier une voiture
// carsModel.updateOne(
//     {_id: '616abed4146d91efa63a0f4f'},
//     {
//         $set: {
//             year: '2000',
//         }
//     },
//     {
//         upsert: true
//     }
// ).then((updatedcarsModel) => {
//     console.log(updatedcarsModel);
// }).catch((error) => {
//     console.error(error);
// });

// Effacer plusieurs voitures
// carsModel.deleteMany({brand: 'Renault'})
// .then((deletedcarsModel) => {
//     console.log(deletedcarsModel);
// }).catch((error) => {
//     console.error(error);
// });

// Bonus : Ajouter plusieurs voitures
// carsModel.insertMany([
//     {brand: "Aston Martin", model: "DB9", year: "2010"},
//     {brand: "Range Rover", model: "Discovery Sport", year: "2017"}
// ]).then((newCars) => {
//     console.log("Nouvelle cars !", newCars)
// }).catch((error) => {
//     console.error("Erreur MongoDB", error)
// });

// Bonus : Rechercher les voitures sorties apres
// carsModel.find({
//     year :  {
//                 $gt: 2015
//             }})
//             .then((carsModel) => {
//                 console.log(carsModel);
//             })
//             .catch((error) => {
//                 console.error(error);
// });

// Bonus : Rechercher les voitures qui ont un o dans leur modèle
carsModel.find({
    model : /o/})
            .then((carsModel) => {
                console.log(carsModel);
            })
            .catch((error) => {
                console.error(error);
});

mongoose.connect('mongodb://localhost:27017/garage', (error) => {
    if (error) {
        console.error(error);
        process.exit(1);
    }
    console.log('MongoDB connected Successfully');
});

server.listen(port, () => {
    console.log(`The server started on port ${port}`);
});