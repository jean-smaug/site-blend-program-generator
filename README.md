[![Build Status](https://travis-ci.org/the-smaug/site-blend-program-generator.svg?branch=master)](https://travis-ci.org/the-smaug/site-blend-program-generator)

# site-blend-program-generator

## Données

- Conférence
```
{
  "day" : "dayOne" || "dayTwo",
  "description" : "Lorem ipsum dolor sit amet",
  "domain" : "tech" || "societe" || "design" || "market",
  "duration" : 15,
  "level": "beginner" || "expert",
  "room" : "Amphi X",
  "speaker" : {
    "city": "Lyon",
    "company": "Cuisine du Web",
    "gender": "male" || "female",
    "linkedin" : "linkedin.com/fe156vse1",
    "name" : "Maxime Blanc",
    "picture" : "https://cdn.pixabay.com/photo/2016/11/01/21/11/avatar-1789663_960_720.png",
    "twitter" : "twitter.com/_MaximeBlanc"
  },
  "sponsored" : true || false,
  "tags" : [ "react", "js", "front-end" ],
  "timeBegin" : "10h40",
  "title" : "React en 2017"
}
```


## Charte de codage

- les fichiers sont suffixés
  - .reducer.js => reducer
  - .action.js => action
  - .component.jsx => composants

- le nom des fichiers est en camelCase

- structure des dossiers :
  src/
    app/
      blender/      => formulaire
        ...
      smoothie/     => menu de conférence
        ...
    lib/            => manipulation de données, localStorage...

