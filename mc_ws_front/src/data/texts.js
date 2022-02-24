import { bubbles12, bubbles3, bubbles48 } from "./bubbles"

const texts = [
  {
    content: "Un robot est une machine dotée de moteurs qui lui permettent de bouger et/ou agir sur son environnement, de capteurs qui lui permettent de percevoir son propre état et son environnement, et d’un système électronique ou informatique qui contrôle ce qu’effectue le robot en fonction de ce qu’il perçoit.",
    bubbles: bubbles12([
      [
        "Les diffèrents robots",
        "Les robots d'intervention",
        "Les robots domestiques"
      ],
      [
        "Quelle est la diffèrence entre ces trois types de robots?",
        "Pourquoi les appelle-t-on des robots d'intervention?",
        "À quoi servent les robots domestiques?"
      ],
      [
        "Les robots diffèrent selon leur domaine d'activité",
        "Les robots d'intervention remplacent l'homme",
        "Les robots domestiques agissent comme l'homme"
      ]
    ])
  },
  {
    content: "Les ancètres des robots sont les automates, qui sont des machines effectuant une tâche précise et toujours de la même manière. Contrairement à un automate, un même robot se comportera de manière différente selon ce qui se passe dans son environnement. Ses somportements dépendent de ses propriétés en termes de: autonomie, adaptabilité et apprentissage.",
    bubbles: bubbles12([
      [
        "Le robot se comporte de manière diffèrente",
        "L'apprentissage des robots",
        "L'autonomie des robots"
      ],
      [
        "Le robot s'adapte à son environnement grâce à ses moteurs.",
        "Un robot ne peut pas apprendre, c'est une machine",
        "Un robot autonome fonctionne sans l'aide d'un humain"
      ],
      [
        "Comment fait un robot pour adapter ses comportements?",
        "Qu'est ce qui aide le robot à apprendre?",
        "Que veut dire 'autonomie'?"
      ]
    ])
  },
  {
    content: "En 1912, des ingénieurs américains fabriquèrent le premier robot. C’était une machine électrique à roues dont le mécanisme la faisait s’orienter automatiquement vers la lumière. Le but de la construction était au départ militaire : on cherchait à trouver un moyen pour toucher automatiquement les cibles éclairées. Mais ce robot a aussi permis aux biologistes de comprendre comment les insectes se déplacent autour de la lumière !",
    bubbles: bubbles3([
      "Orientation automatique vers la lumière",
      "But militaire des robots",
      "Les insectes et la lumière"
    ])
  },
  {
    content: "Un robot peut apprendre à se déplacer par essai-erreur : il essaie des mouvements au hasard et mémorise les plus efficaces. Ensuite, il tente de modifier ces mouvements, identifie les meilleurs, puis recommence. Les mouvements trouvés par le robot peuvent être à la fois très efficaces et très différents des solutions qu’un humain aurait pu imaginer.",
    bubbles: bubbles48([
      "La mémoire des robots",
      "Les meilleurs mouvements",
      "Les mouvements diffèrents"
    ])
  },
  {
    content: "Les robots sont cruciaux pour l’exploration des endroits où l’homme ne peut pas aller, par exemple l’espace et les planètes du Système solaire. En 1997, un robot atterrit sur la planète Mars : il fonctionne avec l’énergie qu’il capte grâce à ses panneaux solaires ; il envoie à la Terre des milliers de clichés et provoque l'enthousiasme du grand public. Ce robot navigue en partie de manière autonome car, étant donné la distance avec la Terre, il est très difficile de le téléguider.",
    bubbles: bubbles48([
      "Les panneaux solaires",
      "Les robots téléguidés",
      "La distance entre Mars et la Terre"
    ])
  },
  {
    content: "L'AIBO est un robot autonome dont le comportement se développe progressivement en fonction des interactions sociales qu’il a avec les humains. Il peut apprendre des numéros acrobatiques ou encore reconnaître de nouveaux objets ; il est doté d’un système de « motivations internes », qui le poussent par exemple à développer des stratégies pour trouver sa station de recharge quand ses batteries sont presque vides, ou d’attirer l’attention des humains quand il est en manque de « relations sociales ».",
    bubbles: bubbles48([
      "Le développement progressif des comportements",
      "Les interactions sociales avec des humains",
      "La motivation interne"
    ])
  },
  {
    content: "Dans tous les robots, il y a un mécanisme qui leur permet de décider quelle action faire en réponse à ce qu’ils perçoivent autour d’eux. Certains robots essaient en plus d'imiter le cerveau humain: ils sont capables de mémoriser, de résoudre des problèmes, d’apprendre, de répondre quand on leur parle ou même de devenir des champions d'échecs. Il y a donc dans les robots différentes formes d’intelligence artificielle (IA).",
    bubbles: bubbles48([
      "Imiter le cerveau humain",
      "Résolution de problème",
      "Robot champion d'échecs  "
    ])
  },
  {
    content: "Pour qu’il apprenne à reconnaître un chat par exemple, l’ordinateur du robot apprend par essai-erreur. Il gaut lui donner des milliers d’exemples d’images de chats, associées au mot « chat ». Cela va lui permettre de détecter les formes de tête ou de corps qui les distinguent le plus des autres animaux ou des objets. C’est seulement après avoir fait des calculs sur ces milliers d’images que le robot reconnaîtra ensuite un chat. Les humains sont bien plus rapides, ils n’ont souvent besoin de ne voir qu’un ou deux chats pour les reconnaître !",
    bubbles: bubbles48([
      "Milliers de tentatives",
      "Apprentissage par essai-erreur",
      "Détecter des formes"
    ])
  },
]

export default texts