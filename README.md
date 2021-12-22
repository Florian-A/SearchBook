# Search Book

Preuve de concepte d'une application multiplateforme (Android, iPhone, web, ordinateur de bureau) de recherche de livres.

## Couche technique :

L'application est entièrement programmé via le framework React Native et l'environement Electron.

Elle utilise la blibliothèque Redux.

L'ensemble des requête sont envoyés à l'API de Google de livre (https://www.googleapis.com/books/v1/).

Un seul code source permet de générer les 4 versions de l'application (Web, Desktop, Android, iOS).

## Utilisation en mode développement :

Pour lancer l'application sur les plateformes différentes à la racine du projet :
- `yarn run android` 
- `yarn run ios`
- `yarn run web`
- `yarn run electron`

## Résultat :

| Application Android  |
| - |
| ![android](./conception/android.gif) |

| Application iOS  |
| - |
| ![ios](./conception/ios.png) |

| Navigateur web  |
| - |
| ![web](./conception/chrome.png) |

| Application ordinateur de bureau (Electron)  |
| - |
| ![electron](./conception/electron.png) |
