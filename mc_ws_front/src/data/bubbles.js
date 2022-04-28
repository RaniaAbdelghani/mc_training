export const bubbles12 = (propositions) => ({
  1: {
    title: '1- Le contrôleur identifie les incertitudes',
    content: [
      {
        kind: 'text',
        content: "Je suis le contrôleur, mon rôle est de t'aider à utiliser ta métacognition pour faire démarrer ta curiosité et mieux apprendre."
      },
      {
        kind: 'text',
        content: "Pour cela, commence par bien lire le texte et essaie de faire le lien avec tes anciennes connaissances. Y a t-il une phrase qui te rend curieux(se)?"
      },
      {
        kind: 'text',
        content: "Tiens, je te donne des exemples de ce que, moi, j'ai identifié comme phrases qui me rendent curieux: "
      },
      {
        kind: 'list',
        items: propositions[0]
      },
      {
        kind: 'text',
        content: "Choisis celle qui t'intringue le plus en l'écrivant dans l'encadré. Tu vas ensuite aller la découvrir avec l'aide de nos autres amis métacognitifs."
      },
      {
        kind: 'help',
        content: [
          'xd',
          'ds',
          'sa'
        ]
      }
    ]
  },
  2: {
    title: '2- Le détéctive pense aux réponses possible à ses incertitudes',
    content: [
      {
        kind: 'text',
        content: "Maintenant, tu va être détective, comme moi. C'est passionnant de pouvoir aller découvrir de nouvelles choses, n'est ce pas?"
      },
      {
        kind: 'text',
        content: "Pour être un bon détective de ton apprentissage, il faut d'abord penser à toutes les réponses que tu imagines sont possibles. Cela aide ta mémoire."
      },
      {
        kind: 'text',
        content: "Pour l'écart que tu as choisi, voilà des propositions d'hypothèses à lesquelles tu peux penser: "
      },
      {
        kind: 'list',
        items: propositions[1]
      },
      {
        kind: 'text',
        content: "Choisis-en celles que tu penses sont des hypothèses possibles et écris-les moi dans l'enacdré."
      },
    ]
  },
  3: {
    title: "3- L'explorateur cherche les réponses à ses incertitudes",
    content: [
      {
        kind: 'text',
        content: "Tu as fait un bon travail! Tu va maintenant pouvoir te focaliser sur comment chercher ta réponse, tu es un.e petit.e explorateur.ice, comme moi! "
      },
      {
        kind: 'text',
        content: "Avec moi, tu vas essayer de transformer l'écart que tu as identifié avec notre ami le contrôleur en une question bien formulée. Il est important de faire cet exercice."
      },
      {
        kind: 'text',
        content: "Pour l'écart que tu as choisi, j'ai pu penser aux questions suivantes:"
      },
      {
        kind: 'list',
        items: propositions[2]
      },
      {
        kind: 'text',
        content: "Choisis-en celles que tu penses peuvent te ramener aux réponses que tu cherches et écris-les dans l'encadré. Tu peux ensuite prendre une carte et l'explorer, peut-être que tu vas trouver tes réponses."
      },
    ]
  },
  4: {
    title: "4- Le deuxième controlleur vérifie s'il a bien trouvé toutes les reponses qu'il cherchait",
    content: [
      {
        kind: 'text',
        content: "Me revoilà, ton contrôleur! T'as donc fini ton exploration. Tu es à nouveau avec moi car je veux savoir si tu penses que tu as fait des progrès."
      },
      {
        kind: 'text',
        content: `Si tu appris une nouvelle chose grâce à ta curiosité, écris-là ici, ça me ferait plaisir de la lire ! Si non, tu peux écrire "Je n'ai pas pu trouver ma réponse".`
      },
      {
        kind: 'text',
        content: "Ne t'inquiète pas, tu auras plein d'autres opportunités pour explorer les cartes."
      },
    ]
  }
})

export const bubbles3 = (propositions) => ({
  1: {
    title: '1- Le contrôleur identifie les incertitudes',
    content: [
      {
        kind: 'text',
        content: "Maintenant, tu vas faire ce cyle sans nos propositions, mes amis et moi. Mais on va te rappeler de nos rôles et comment nous utiliser."
      },
      {
        kind: 'text',
        content: "Premièrement, lis bien le texte et essaie de le lier avec tes anciennes connaissances. Quelle phrase penses-tu est importante pour toi à apprendre?"
      },
      {
        kind: 'text',
        content: "Cela peut être, par exemple, une information qui t'as surprise et que tu veux investiguer. Ça peut être aussi une nouvelle information que tu lis pour la première fois et que tu veux découvrir. "
      },
      {
        kind: 'text',
        content: "Prend donc ton temps et écris les phrases qui te rendent incertain et que tu penses sont importantes à découvrir."
      },
      
    ]
  },
  2: {
    title: '2- Le détéctive pense aux réponses possible à ses incertitudes',
    content: [
      {
        kind: 'text',
        content: "Je vois que tu as déjà franchi la première étape, bravo! Maintenant, tu va être détective et faire des hypothèses."
      },
      {
        kind: 'text',
        content: "C'est passionnant de pouvoir aller découvrir de nouvelles choses, n'est ce pas? On ne sait pas toujours tout, et c'est normal!"
      },
      {
        kind: 'text',
        content: "Mais avant tout, il faut faire des hypothèses, c'est à dire, imaginer les réponses possibles aux écarts identifiés. Cela aide énormèment ta mémoire."
      },
      {
        kind: 'text',
        content: "Alors, prend ton temps et écris moi les réponses que tu imagines pour les écarts relevés avec mon ami le contôrleur."
      },
    ]
  },
  3: {
    title: "3- L'explorateur cherche les réponses à ses incertitudes",
    content: [
      {
        kind: 'text',
        content: "Aah, nos amis étaient utiles, n'est ce pas? Tu va maintenant pouvoir te focaliser sur comment chercher ta réponse, tu es un.e petit.e explorateur.ice, comme moi!"
      },
      {
        kind: 'text',
        content: "Avec moi, tu vas essayer de transformer l'écart que tu as identifié en une question bien formulée. Il est important de faire cet exercice."
      },
      {
        kind: 'text',
        content: "Comme ça, la prochaine fois en classe, quand tu es curieux.se, tu pourras formuler la bonne question et la poser à maîtresse."
      },
      {
        kind: 'text',
        content: "Ok, maintenant écris toutes les questions qui peuvent te ramener aux réponses que tu cherches."
      },
      {
        kind: 'text',
        content: "Tu peux ensuite prendre une carte et l'explorer, peut-être que tu vas trouver tes réponses."
      },
    ]
  },
  4: {
    title: "4- Le deuxième controlleur vérifie s'il a bien trouvé toutes les reponses qu'il cherchait",
    content: [
      {
        kind: 'text',
        content: "Me revoilà! T'as donc fini ton exploration. Tu es à nouveau avec moi car je veux savoir si tu penses que tu as fait des progrès."
      },
      {
        kind: 'text',
        content: `Si tu appris une nouvelle chose grâce à ta curiosité, écris-là ici, ça me ferait plaisir de la lire ! Si non, tu peux écrire "Je n'ai pas pu trouver ma réponse". `
      },
      {
        kind: 'text',
        content: "Ne t'inquiète pas, tu auras plein d'autres opportunités pour explorer les cartes et trouver des réponses."
      },
      {
        kind: 'text',
        content: "Avant de te laisser, je voudrais partager avec toi ma propre liste d'écarts que moi j'ai trouvé: "
      },
      {
        kind: 'list',
        items: propositions
      },
      {
        kind: 'text',
        content: "Si tu penses qu'il y en a qui te correspondent, je te laisse les prendre. Mais tu dois alors finir tout le cycle comme on avait fait ensemble."
      },
    ]
  }
})

export const bubbles48 = (propositions) => ({
  1: {
    title: '1- Le contrôleur identifie les incertitudes',
    content: [
      {
        kind: 'text',
        content: "Maintenant, reprenons encore une fois ce cyle. Comme d'habitude, on va te rappeler des rôles des personnages métacognitifs et comment nous utiliser."
      },
      {
        kind: 'text',
        content: "Premièrement, lis bien le texte et essaie de le lier avec tes anciennes connaissances. Quelle phrase penses-tu est importante pour toi à apprendre?"
      },
      {
        kind: 'text',
        content: "Cela peut être, par exemple, une information qui t'as surprise et que tu veux investiguer. Ça peut être aussi une nouvelle information que tu lis pour la première fois et que tu veux découvrir."
      },
      {
        kind: 'text',
        content: "Prend donc ton temps et écris les phrases qui te rendent incertain et que tu penses sont importantes à découvrir."
      },
    ]
  },
  2: {
    title: '2- Le détéctive pense aux réponses possible à ses incertitudes',
    content: [
      {
        kind: 'text',
        content: "Je vois que tu as déjà franchi la première étape, bravo! Maintenant, tu va être détective et faire des hypothèses."
      },
      {
        kind: 'text',
        content: "C'est passionnant de pouvoir aller découvrir de nouvelles choses, n'est ce pas? On ne sait pas toujours tout, et c'est normal!"
      },
      {
        kind: 'text',
        content: "Mais avant tout, il faut faire des hypothèses, c'est à dire, imaginer les réponses possibles aux écarts identifiés. Cela aide énormèment ta mémoire."
      },
      {
        kind: 'text',
        content: "Alors, prend ton temps et écris moi les réponses que tu imagines pour les écarts relevés avec mon ami le contôrleur."
      },
    ]
  },
  3: {
    title: "3- L'explorateur cherche les réponses à ses incertitudes",
    content: [
      {
        kind: 'text',
        content: "Aah, nos amis étaient utiles, n'est ce pas? Tu va maintenant pouvoir te focaliser sur comment chercher ta réponse, tu es un.e petit.e explorateur.ice, comme moi!"
      },
      {
        kind: 'text',
        content: "Avec moi, tu vas essayer de transformer l'écart que tu as identifié en une question bien formulée. Il est important de faire cet exercice."
      },
      {
        kind: 'text',
        content: "Comme ça, la prochaine fois en classe, quand tu es curieux.se, tu pourras formuler la bonne question et la poser à maîtresse."
      },
      {
        kind: 'text',
        content: "Ok, maintenant écris toutes les questions qui peuvent te ramener aux réponses que tu cherches."
      },
      {
        kind: 'text',
        content: "Tu peux ensuite prendre une carte et l'explorer, peut-être que tu vas trouver tes réponses."
      },
    ]
  },
  4: {
    title: "4- Le deuxième controlleur vérifie s'il a bien trouvé toutes les reponses qu'il cherchait",
    content: [
      {
        kind: 'text',
        content: "Me revoilà! T'as donc fini ton exploration. Tu es à nouveau avec moi car je veux savoir si tu penses que tu as fait des progrès."
      },
      {
        kind: 'text',
        content: `Si tu appris une nouvelle chose grâce à ta curiosité, écris-là ici, ça me ferait plaisir de la lire ! Si non, tu peux écrire "Je n'ai pas pu trouver ma réponse".`
      },
      {
        kind: 'text',
        content: "Ne t'inquiète pas, tu auras plein d'autres opportunités pour explorer les cartes et trouver des réponses."
      },
      {
        kind: 'text',
        content: "Avant de te laisser, je voudrais partager avec toi ma propre liste d'écarts que moi j'ai trouvé: "
      },
      {
        kind: 'list',
        items: propositions
      },
      {
        kind: 'text',
        content: "Si tu penses qu'il y en a qui te correspondent, je te laisse les prendre.  Mais tu dois alors finir tout le cycle comme on avait fait ensemble."
      },
    ]
  }
})