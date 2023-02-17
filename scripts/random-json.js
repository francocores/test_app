const fs = require('fs');
const LoremIpsum = require("lorem-ipsum").LoremIpsum;

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

const object = [];
for (let index = 0; index < 5000; index++) {
  const id = index + 1;
  object.push({
    id: id,
    photo: `https://picsum.photos/id/${id}/500/500`,
    text: lorem.generateParagraphs(1)
  })
}

fs.writeFile('src/assets/json/images.json', JSON.stringify(object), err => {
  if (err) {
    console.error(err);
  }
});
