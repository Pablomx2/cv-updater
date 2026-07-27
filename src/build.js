/* Rebuilds ../cv-updater.html from app.template.html + seed.json.
   Run:  node src/build.js   (from the CV Updater folder) */
const fs = require('fs'), p = require('path');
const d = p.join(__dirname);
const out = fs.readFileSync(p.join(d,'app.template.html'),'utf8')
  .replace('__SEED_JSON__', fs.readFileSync(p.join(d,'seed.json'),'utf8').trim());
fs.writeFileSync(p.join(d,'..','cv-updater.html'), out);
console.log('built cv-updater.html', (out.length/1024).toFixed(1) + 'KB');
