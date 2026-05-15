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
  console.log('🚀 Starting multi-project build...');

  // 1. Build the root dashboard
  console.log('📦 Building dashboard...');
  execSync('npx vite build', { stdio: 'inherit' });

  // 2. Build each sub-project
  for (const project of projects) {
    console.log(`📦 Building ${project}...`);
    const projectDir = path.resolve(process.cwd(), project);
    
    // Check if node_modules exists, if not install
    if (!fs.existsSync(path.join(projectDir, 'node_modules'))) {
      console.log(`Installing dependencies for ${project}...`);
      execSync('npm install --legacy-peer-deps', { cwd: projectDir, stdio: 'inherit' });
    }

    execSync('npx vite build', { cwd: projectDir, stdio: 'inherit' });

    // 3. Move the built files to the root dist folder
    const srcDist = path.join(projectDir, 'dist');
    const destDist = path.join(process.cwd(), 'dist', project);
    
    if (fs.existsSync(destDist)) {
      fs.removeSync(destDist);
    }
    
    fs.moveSync(srcDist, destDist);
    console.log(`✅ ${project} built and moved to dist/${project}`);
  }

  console.log('✨ All projects built successfully!');
}

build().catch(err => {
  console.error('❌ Build failed:', err);
  process.exit(1);
});
