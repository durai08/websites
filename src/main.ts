import './style.css'

const projects = [
  {
    name: 'Cafe & Restaurant',
    path: '/cafe-restaurant/index.html',
    image: '/images/cafe-hero.jpg',
    tag: 'Hospitality',
    description: 'A premium dining experience with elegant design and seamless reservation features.'
  },
  {
    name: 'Crackers Shop',
    path: '/crackers-shop/index.html',
    image: '/images/crackers-hero.jpg',
    tag: 'E-commerce',
    description: 'Festive firecrackers shop with vibrant animations and dynamic product showcases.'
  },
  {
    name: 'Flower Shop',
    path: '/flower-shop/index.html',
    image: '/images/flower-hero.jpg',
    tag: 'Boutique',
    description: 'Elegant floral arrangements presented with high-end aesthetic and smooth transitions.'
  },
  {
    name: 'Ice Cream Shop',
    path: '/ice-cream-shop/index.html',
    image: '/images/icecream-hero.jpg',
    tag: 'Dessert',
    description: 'Cool and refreshing interface for a premium ice cream parlor with delightful visuals.'
  },
  {
    name: 'Medical Clinic',
    path: '/medical-clinic/index.html',
    image: '/images/clinic-hero.jpg',
    tag: 'Healthcare',
    description: 'Professional healthcare services portal designed for trust and accessibility.'
  },
  {
    name: 'Pro E-commerce',
    path: '/pro-ecommerce/index.html',
    image: '/images/ecom-hero.jpg',
    tag: 'Retail',
    description: 'State-of-the-art shopping platform with advanced product filtering and modern UI.'
  },
  {
    name: 'Smart Tools',
    path: '/smart-tools/index.html',
    image: '/images/tools-globe.jpg',
    tag: 'Utilities',
    description: 'A suite of powerful utility tools for modern professionals and developers.'
  },
  {
    name: 'Sweet Shop',
    path: '/sweet-shop/index.html',
    image: '/images/sweet-macaron.jpg',
    tag: 'Confectionery',
    description: 'Delicious sweets and treats showcased with mouth-watering photography.'
  }
];

const app = document.querySelector<HTMLDivElement>('#app')!;

app.innerHTML = `
  <div class="container">
    <header>
      <h1>Durai's Digital Portfolio</h1>
      <p class="subtitle">A collection of premium web applications designed for excellence and performance.</p>
    </header>

    <div class="project-grid">
      ${projects.map((project, index) => `
        <a href="${project.path}" class="project-card" data-animate style="transition-delay: ${index * 0.1}s">
          <img src="${project.image}" alt="${project.name}" class="card-image">
          <div class="card-content">
            <span class="card-tag">${project.tag}</span>
            <h2 class="card-title">${project.name}</h2>
            <p class="card-description">${project.description}</p>
            <div class="card-footer">
              Explore Project
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </div>
          </div>
        </a>
      `).join('')}
    </div>
  </div>
`;

// Intersection Observer for scroll animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, observerOptions);

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
