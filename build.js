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

  // Ensure root dist is clean
  const rootDist = path.join(process.cwd(), 'dist');
  if (fs.existsSync(rootDist)) {
    fs.removeSync(rootDist);
  }

  // 1. Build the root dashboard
  console.log('📦 Building dashboard...');
  execSync('npx vite build', { stdio: 'inherit' });

  // 2. Build each sub-project
  for (const project of projects) {
    console.log(`📦 Building ${project}...`);
    const projectDir = path.resolve(process.cwd(), project);
    
    // We assume dependencies are already installed in the root workspace
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
