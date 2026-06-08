const data = require('./thayyilsports_bestselling.json');
const { processJerseyData } = require('./utils/jerseyProcessor.js');

const processed = processJerseyData(data);
const testCricket = processed.find(j => j.id === 'india-cricket-test-jersey-polo-embroidery-premium');
const cskFirst = processed.filter(j => j.name.includes('Chennai')).slice(0,1);

console.log('Test Cricket Jersey:');
console.log(JSON.stringify(testCricket, null, 2));
console.log('\nFirst CSK Jersey:');
console.log(JSON.stringify(cskFirst[0], null, 2));
console.log('\nFirst 10 IPL jerseys:');
processed.filter(j => j.mainCategory === 'IPL').slice(0,10).forEach((j, i) => {
  console.log(`${i+1}. ${j.name} (${j.subCategory}, featured: ${j.featured})`);
});
