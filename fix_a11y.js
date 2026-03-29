const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(path.join(dir, f));
  });
}

walkDir('./frontend/src', (filePath) => {
  if (filePath.endsWith('.astro')) {
    let content = fs.readFileSync(filePath, 'utf8');
    let original = content;
    // Removals/Upscales
    content = content.replace(/text-\[9px\]/g, 'text-xs');
    content = content.replace(/text-\[10px\]/g, 'text-xs');
    content = content.replace(/text-\[11px\]/g, 'text-sm');
    content = content.replace(/text-slate-500/g, 'text-zinc-400');
    content = content.replace(/text-white\/30/g, 'text-white/50');
    
    // Some minor spacing adjustments since tracking on larger text looks weird
    content = content.replace(/tracking-\[0\.5em\]/g, 'tracking-[0.3em]');
    content = content.replace(/tracking-\[0\.4em\]/g, 'tracking-[0.2em]');

    if (content !== original) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Updated: ${filePath}`);
    }
  }
});
