export const bubbles12 = (propositions) => ({
  1: {
    title: '1- Le contrôleur identifie les incertitudes',
    content: [
      {
        kind: 'text',
        content: "Je suis le contrôleur, mon rôle est de t'aider à utiliser ta métacognition pour décider quelle(s) nouvelle(s) information(s) tu dois apprendre."
      },
      {
        kind: 'text',
        content: "Pour cela, je te conseille de commencer par bien lire le texte et essayer de faire le lien avec tes anciennes connaissances. Y a t-il une partie ou une phrase qui n'est pas très claire pour toi et qui te rend curieux(se)?"
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
        content: "Tu peux choisir celle qui t'intringue le plus en l'écrivant dans l'encadré, ou choisir une autre de ton propre choix. Tu vas ensuite essayer de découvrir cette information avec tes autres amis métacognitifs."
      }
 
    ]
  },
  2: {
    title: '2- Le détéctive pense aux réponses possible à ses incertitudes',
    content: [
      {
        kind: 'text',
        content: "Maintenant, il est temps de devenir détective de ton apprentissage. C'est passionnant de pouvoir aller découvrir de nouvelles choses, n'est ce pas?"
      },
      {
        kind: 'text',
        content: "Pour être un bon détective de ton apprentissage, il faut d'abord penser aux réponses possibles qui peuvent répondre à l'incertitude que tu a identifiée avec mon ami le contrôleur. Cela est un bon exercice pour ta mémoire."
      },
      {
        kind: 'text',
        content: "Voilà des propositions d'hypothèses que j'ai formulées pour répondre à mes incertitudes:"
      },
      {
        kind: 'list',
        items: propositions[1]
      },
      {
        kind: 'text',
        content: "Tu peux choisir une proposition de cette liste ou écrire ta propre hypothèse. Ta réponse doit être en accord avec ce que t'as écrit dans la première étape."
      }
      ,
      
    ]
  },
  3: {
    title: "3- L'explorateur cherche les réponses à ses incertitudes",
    content: [
      {
        kind: 'text',
        content: "Tu as déjà fini deux étapes, bravo! Tu vas maintenant pouvoir te focaliser sur comment chercher ta réponse, tu es un.e petit.e explorateur.ice, comme moi!"
      },
      {
        kind: 'text',
        content: "Nous allons maintenant essayer de transformer l'incertitude que tu as identifiée en une question. Il est important de faire cet exercice car ça te permet de trouver les réponses que tu cherches et qui te rendent curieux(se)."
      },
      {
        kind: 'text',
        content: "Voici quelques questions que je trouve importantes:"
      },
      {
        kind: 'list',
        items: propositions[2]
      },
      {
        kind: 'text',
        content: "Choisis la question qui peut te diriger vers l'information que tu cherches, ou formule ta propre question et écris-la dans l'encadré."
      },
      ,
      
    ]
  },
  4: {
    title: "4- Le deuxième contrôleur vérifie s'il a bien trouvé toutes les reponses qu'il cherchait",
    content: [
      {
        kind: 'text',
        content: "Me revoilà, ton contrôleur! Tu as maintenant fini ton exploration. Tu es à nouveau avec moi car je veux savoir si tu penses que tu as fait des progrès d'apprentissage grâce à ta curiosité.  "
      },
      {
        kind: 'text',
        content: `Pour cela, voici trois réponses à des questions diffèrentes. Cela peut t'aider à voir si les hypothèses que tu as posées sont vraies ou fausses.`
      },
      {
        kind: 'text',
        content: `Si tu trouves celle qui correspond à ta question, écris-là dans l'encadré. Si non, tu peux écrire "Je n'ai pas pu trouver la réponse à ma question".`
      },
      {
        kind: 'list',
        items: propositions[3]
      },
      {
        kind: 'text',
        content: "Ne t'inquiète pas, tu auras plein d'autres opportunités pour trouver tes réponses."
      },
      ,
      
    ]
  }
})

export const bubbles3 = (propositions) => ({
  1: {
    title: '1- Le contrôleur identifie les incertitudes',
    content: [
      {
        kind: 'text',
        content: "Maintenant, tu vas essayer de faire ce cyle de métacognition sans nos propositions. On va quand même te rappeler nos missions et nos rôles pour t'aider. Si tu te retrouves bloqué, tu peux demander notre aide pour te donner des propositions. "
      },
      {
        kind: 'text',
        content: "Premièrement, lis bien le texte et essaie de trouver des liens avec tes anciennes connaissances. Y a t-il une partie qui te rend curieux(se) et que tu veux explorer plus?"
      },
      {
        kind: 'text',
        content: "Cela peut être, par exemple, une information qui t'as surprise ou une nouvelle information que tu lis pour la première fois et que tu veux découvrir."
      },
      {
        kind: 'text',
        content: "Prend ton temps et écris les phrases qui te rendent incertain et que tu veux découvrir plus dans l'encadré."
      },
      {
        kind: 'help',
        content: propositions[0]
      }
      
    ]
  },
  2: {
    title: '2- Le détéctive pense aux réponses possible à ses incertitudes',
    content: [
      {
        kind: 'text',
        content: "Je vois que tu as déjà franchi la première étape, bravo! Maintenant, tu va devenir un détective en faisant des hypothèses."
      },
      {
        kind: 'text',
        content: "C'est passionnant de pouvoir aller découvrir de nouvelles choses, n'est ce pas? On ne sait pas toujours tout, et c'est normal!"
      },
      {
        kind: 'text',
        content: "Mais avant de se lancer dans des recherches, il faut faire des hypothèses comme on l'a appris. C'est à dire, imaginer les réponses possibles aux incertitudes identifiés notre mon ami le contrôleur. Comme on l'a vu, cela aide énormèment ta mémoire et ton attention."
      },
      {
        kind: 'text',
        content: "Prend donc ton temps pour écrire les réponses que tu imagines sont possibles à l'incertitude relevée avec mon ami le contôrleur."
      },
      {
        kind: 'help',
        content: propositions[1]
      }
    ]
  },
  3: {
    title: "3- L'explorateur cherche les réponses à ses incertitudes",
    content: [
      {
        kind: 'text',
        content: "Aah, nos amis étaient utiles, n'est ce pas? Maintenant que tu as tes incertitudes et tes hypothèses, tu vas pouvoir te focaliser sur comment chercher ta réponse, tu es un.e petit.e explorateur.ice, comme moi! "
      },
      {
        kind: 'text',
        content: "Maintenant, on va essayer de transformer l'incertitude que tu as identifié en une question bien formulée. Il est important de faire cet exercice."
      },
      {
        kind: 'text',
        content: "Comme ça, la prochaine fois en classe, quand tu es curieux.se, tu pourras formuler la bonne question et la poser à maîtresse."
      },
      {
        kind: 'text',
        content: "Et c'est parti, tu peux écrire toutes les questions qui t'intéressent dans cet encadré."
      },
      {
        kind: 'help',
        content: propositions[2]
      }
    ]
  },
  4: {
    title: "4- Le deuxième contrôleur vérifie s'il a bien trouvé toutes les reponses qu'il cherchait",
    content: [
      {
        kind: 'text',
        content: "Me revoilà! T'as donc fini ton exploration. Tu es à nouveau avec moi car je veux savoir si tu penses que tu as fait des progrès grâce à ta curiosité.  "
      },
      {
        kind: 'text',
        content: `Pour cela, je te propose cette liste avec des informations qui peuvent être des réponses à ta question.`
      },
      {
        kind: 'list',
        items: propositions[3]
      },
      {
        kind: 'text',
        content: `Si tu trouves la réponse que tu cherchais dans cette liste, écris-la dans l'encadré, sinon, écris "je ne trouve pas ma réponse".`
      },
      {
        kind: 'text',
        content: `Ne t'inquiète pas, tu auras plein d'autres occasions pour trouver les informations que tu cherches.`
      }
      
    ]
  }
})

export const bubbles48 = (propositions) => ({
  1: {
    title: '1- Le contrôleur identifie les incertitudes',
    content: [
      {
        kind: 'text',
        content: "Maintenant, reprenons encore une fois ce cyle. Comme d'habitude, on va te rappeler des rôles des personnages métacognitifs et comment les utiliser. "
      },
      {
        kind: 'text',
        content: "Premièrement, lis bien le texte et essaie de le lier avec tes anciennes connaissances. Y a t'il une partie qui te pousse à demander plus d'informations ?"
      },
      {
        kind: 'text',
        content: "Cela peut être, par exemple, une information qui t'as surprise et que tu veux investiguer. Ou aussi une nouvelle information que tu lis pour la première fois et que tu veux découvrir."
      },
      {
        kind: 'text',
        content: "Prend ton temps et écris les phrases qui suscitent ta curiosité dans l'encadré"
      },
      {
        kind: 'help',
        content: propositions[0]
      }
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
        content: "Mais avant tout, il faut faire des hypothèses, c'est à dire, imaginer les réponses possibles aux incertitudes identifiées. Cela aide énormèment ta mémoire et ton attention, tu t'en souviens ?"
      },
      {
        kind: 'text',
        content: "Alors, prend ton temps et écris moi les réponses que tu imagines pour les incertitudes relevées avec mon ami le contôrleur."
      },
      {
        kind: 'help',
        content: propositions[1]
      }
    ]
  },
  
  3: {
    title: "3- L'explorateur cherche les réponses à ses incertitudes",
    content: [
      {
        kind: 'text',
        content: "Aah, nos amis étaient utiles, n'est ce pas? Tu va maintenant pouvoir te focaliser sur comment chercher ta réponse, tu es un.e petit.e explorateur.ice, comme moi! "
      },
      {
        kind: 'text',
        content: "Avec moi, tu vas essayer de transformer l'incertitude que tu as identifiée en une question bien formulée. Il est important de faire cet exercice."
      },
      {
        kind: 'text',
        content: "Comme ça, la prochaine fois en classe, quand tu es curieux.se, tu pourras formuler la bonne question et la poser à maîtresse."
      },
      {
        kind: 'text',
        content: "C'est parti, tu peux maintenant écrire toutes les questions qui t'intéressent dans cet encadré."
      },
      {
        kind: 'help',
        content: propositions[2]
      }
    ]
  },
  4: {
    title: "4- Le deuxième contrôleur vérifie s'il a bien trouvé toutes les reponses qu'il cherchait",
    content: [
      {
        kind: 'text',
        content: "Me revoilà! T'as donc fini ton exploration. Tu es à nouveau avec moi car je veux savoir si tu penses que tu as fait des progrès d'apprentissage grâce à ta curiosité."
      },
      {
        kind: 'text',
        content: `Pour cela, je vais te proposer des informations qui peuvent être des réponses à ta question, Cela t'aidera à confirmer ou rejeter l'hypothèse que tu as faite.`
      },
      {
        kind: 'list',
        items: propositions[3]
      },
      {
        kind: 'text',
        content: `Si tu trouves la réponse que tu cherchais, écris-la dans l'encadré, sinon, tu peux écrire "Je n'ai pas pu trouver ma réponse".`
      },
      {
        kind: 'text',
        content: `Ne t'inquiète pas, tu auras plein d'autres opportunités pour explorer les cartes et trouver des réponses.`
      }
      
    ]
  }
})