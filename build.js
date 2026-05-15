import { execSync } from 'child_process';
import fs from 'fs-extra';
import path from 'path';

const projects = [
  'cafe-restaurant',
  'crackers-shop',
  'flower-shop',
  'ice-cream-shop',
  'medical-clinic',
  'pro-ecommerce',
  'smart-tools',
  'sweet-shop'
];

async function build() {
  console.log('🚀 Starting Master Build Process...');
  const rootDir = process.cwd();
  const distDir = path.join(rootDir, 'dist');

  // 1. Clean and Prepare Root Dist
  console.log('🧹 Cleaning dist directory...');
  if (fs.existsSync(distDir)) {
    fs.removeSync(distDir);
  }
  fs.ensureDirSync(distDir);

  // 2. Build Dashboard (Root)
  console.log('📦 Building Portfolio Dashboard...');
  execSync('npm run build-only', { stdio: 'inherit' });
  console.log('✅ Dashboard built.');

  // 3. Build Sub-projects
  for (const project of projects) {
    console.log(`\n-----------------------------------------`);
    console.log(`📦 Building Sub-project: ${project}...`);
    const projectDir = path.join(rootDir, project);
    
    if (!fs.existsSync(projectDir)) {
      console.warn(`⚠️ Warning: Directory ${project} not found. Skipping.`);
      continue;
    }

    // Build project
    try {
      execSync('npx vite build --emptyOutDir', { cwd: projectDir, stdio: 'inherit' });
      
      const projectDist = path.join(projectDir, 'dist');
      const targetDist = path.join(distDir, project);
      
      if (fs.existsSync(projectDist)) {
        fs.moveSync(projectDist, targetDist, { overwrite: true });
        console.log(`✅ ${project} built and deployed to /${project}`);
      } else {
        console.error(`❌ Error: ${project} build did not produce a dist folder.`);
      }
    } catch (error) {
      console.error(`❌ Failed to build ${project}:`, error.message);
    }
  }

  console.log('\n-----------------------------------------');
  console.log('✨ Build process complete!');
  console.log('📂 Final dist structure:');
  const files = fs.readdirSync(distDir);
  console.log(files.join(', '));
}

build().catch(err => {
  console.error('💥 Critical Build Failure:', err);
  process.exit(1);
});
