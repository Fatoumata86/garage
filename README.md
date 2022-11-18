# Garage

Créer une base de données `garage` qui ajoutera et récupérera des voitures dans la base de données. A partir de l’étape 3, penser à vérifier le fonctionnement de votre requête en regardant dans MongoDB Compass.

## Installation

Dans le dossier `database`, créer un dossier `garage`

Puis dans le terminal :

```bash
npm init
npm install mongoose
```

## Etape 1 : Connexion

-   Créer un fichier `db.js`
-   Importer le module `mongoose` et afficher dans la console si la connexion à la base de données `garage` a été effectuée.

💡 La documentation [Mongoose.connect](https://mongoosejs.com/docs/connections.html#callback) peut vous être utile !

## Etape 2 : Modèle

Créer un modèle Mongoose de `Car`.

## Etape 3 : Ajout d’une voiture

-   Avec la méthode `create` de Mongoose, ajouter une voiture avec les valeurs :
    -   marque `Renault`,
    -   modèle `Espace`
    -   et d’année `1999`
-   Une fois que ça fonctionne, ajouter 2 autres voitures avec les valeurs :
    -   marque `Renault` et `Peugeot`,
    -   modèle `Scenic` et `308`
    -   et d’année `2004` et `2017`

## Etape 4 : Récupération d’une voiture

Afin de simplifier chaque action, vous pouvez copier/coller le code des 2 premières étapes dans chaque fichier pour les étapes suivantes.

-   Dans MongoDB Compass (ou Robo3T), copier l’ID de la voiture `Renault Espace`
-   Avec la méthode `findById` de Mongoose, afficher dans la console la `Renault Espace`

## Etape 5 : Modification d’une voiture

-   Avec la méthode `update` de Mongoose, modifier l’année de mise en circulation de la `Renault Espace` de `1999` à `2000`

## Etape 6 : Effacer une voiture

-   Avec la méthode `deleteMany` de Mongoose, effacer les 2 voitures de marques `Renault`

## Bonus : Ajout de plusieurs voitures

-   Avec la méthode `insertMany` de Mongoose, ajouter deux voitures de :
    -   marque `Aston Martin` et `Range Rover`,
    -   modèle `DB9` et `Discovery Sport`
    -   et d’année `2010` et `2017`
-   Rechercher les voitures sorties apres `2015`
-   Rechercher les voitures qui ont un `o` dans leur modèle
