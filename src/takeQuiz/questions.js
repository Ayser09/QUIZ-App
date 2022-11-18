const questions = [
    {
      text: "Why did Laika become famous in 1957?",
      options: [
        {
          id: 0,
          text:
            "First animal to orbit the Earth (not the first dog in spacethough)",
          isCorrect: true
        },
        {
          id: 1,
          text:
            "First dog is one of the richest animals in the world today witha total worth of $400 million.",
          isCorrect: false
        },
        {
          id: 2,
          text:
            "The biggest dog in the world was a Great Dane called Zeus whoreached a whopping 1.118m (44 inches).",
          isCorrect: false
        },
        { id: 3, text: "The World's First Talking Dog.", isCorrect: false },
        {
          id: 4,
          text:
            "World's first sky-diving anti-poaching dog by Guinness WorldRecords.",
          isCorrect: false
        }
      ]
    },
    {
      text:
        "What dog breed are famous for having a blue black tongue (sometimes called purple)?",
      options: [
        { id: 0, text: "Beagle", isCorrect: false },
        { id: 1, text: "German Shepard", isCorrect: false },
        { id: 2, text: "Doberman", isCorrect: false },
        { id: 3, text: "Chow Chow", isCorrect: true },
        { id: 4, text: "Jack Russel Terrier", isCorrect: false }
      ]
    },
    {
      text:
        "What breed of dog was the sheriff’s dog Flash in The Dukes of Hazzard?",
      options: [
        { id: 0, text: "English Setter", isCorrect: false },
        { id: 1, text: "Great Dane", isCorrect: false },
        { id: 2, text: "Akita Inu", isCorrect: false },
        { id: 3, text: "Cocker Speniel", isCorrect: false },
        { id: 4, text: "Basset Hound", isCorrect: true }
      ]
    },
    {
      text: "How old was the oldest dog ever recorded when he died?",
      options: [
        {
          id: 0,
          text: "38. The record was held by Roger who died in 1924.",
          isCorrect: false
        },
        {
          id: 1,
          text: "42. The record was held by Brownie who died in 1982.",
          isCorrect: false
        },
        {
          id: 2,
          text: "34. The record was held by Gogi who died in 2003.",
          isCorrect: false
        },
        {
          id: 3,
          text: "29. The record was held by Bluey who died in 1939.",
          isCorrect: true
        },
        {
          id: 4,
          text: "24. The record was held by Pumpkin who died in 1978.",
          isCorrect: false
        }
      ]
    },
    {
      text:
        "According to the AKC, what is the most popular dog breed in America, having held the title since 1991?",
      options: [
        { id: 0, text: "Border Collie", isCorrect: false },
        { id: 1, text: "Golden Retriever", isCorrect: false },
        { id: 2, text: "Pitbull Terrier", isCorrect: false },
        { id: 3, text: "Cocker Speniel", isCorrect: false },
        { id: 4, text: "Labrador Retriever", isCorrect: true }
      ]
    },
    {
      text:
        "In 2019, what became was the most popular breed in the UK, holding off strong competition from the Cockapoo?",
      options: [
        { id: 0, text: "Australian Shepard", isCorrect: false },
        { id: 1, text: "Poddle", isCorrect: false },
        { id: 2, text: "Staffordshire Bull Terrier", isCorrect: true },
        { id: 3, text: "Golden Retriever", isCorrect: false },
        { id: 4, text: "Siberian Husky", isCorrect: false }
      ]
    },
    {
      text: "How many teeth does a fully grown adult dog normally have?",
      options: [
        { id: 0, text: "32", isCorrect: false },
        { id: 1, text: "44", isCorrect: false },
        { id: 2, text: "36", isCorrect: false },
        { id: 3, text: "42", isCorrect: true },
        { id: 4, text: "28", isCorrect: false }
      ]
    },
    {
      text: "How do dogs sweat?",
      options: [
        { id: 0, text: "Through sweat glands in their mouth", isCorrect: false },
        { id: 1, text: "Through sweat glands in their nose", isCorrect: false },
        { id: 2, text: "Through sweat glands in their skin ", isCorrect: false },
        { id: 3, text: "Through sweat glands in their ears", isCorrect: false },
        { id: 4, text: "Through sweat glands in their pads", isCorrect: true }
      ]
    },
    {
      text: "Are dogs herbivores, omnivores or carnivores?",
      options: [
        { id: 0, text: "Herbivores", isCorrect: false },
        { id: 1, text: "Omnivores", isCorrect: true },
        { id: 2, text: "Carnivores", isCorrect: false },
        { id: 3, text: "They eat just sweet", isCorrect: false },
        { id: 4, text: "They eat just fruit", isCorrect: false }
      ]
    },
    {
      text:
        "True or false, a Greyhound would beat a Cheetah in a long-distance race?",
      options: [
        { id: 0, text: "True", isCorrect: true },
        { id: 1, text: "False", isCorrect: false }
      ]
    }
  ];

  export default questions;
