const P = window.PROFILE;
const ICONS = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2 4.2 5 4.4"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 13c0-1.7 1-2.6 2.3-2.6S16.5 11.3 16.5 13V16"/>',
  github: '<path d="M9 19c-4 1.200-4-2-6-2.500m12 4.500v-3.100a2.700 2.700 0 0 0-.8-2.100c2.600-.3 5.300-1.300 5.300-5.800a4.500 4.500 0 0 0-1.200-3.100 4.200 4.200 0 0 0-.1-3.100s-1-.3-3.200 1.200a11 11 0 0 0-5.800 0C6.900 3.400 5.900 3.700 5.900 3.700a4.200 4.200 0 0 0-.1 3.100A4.500 4.500 0 0 0 4.600 9.900c0 4.500 2.700 5.500 5.300 5.800a2.700 2.700 0 0 0-.8 2.100V21"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.700 0l3-3a4 4 0 0 0-5.700-5.700l-1 1M14 10a4 4 0 0 0-5.700 0l-3 3a4 4 0 0 0 5.700 5.700l1-1"/>'
};
const svg = k => `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[k] || ICONS.link}</svg>`;

document.title = P.name;
document.getElementById("name").textContent = P.name;
document.getElementById("tagline").textContent = P.tagline;

const av = document.getElementById("avatar");
if (P.avatar) av.innerHTML = `<img src="${encodeURI(P.avatar)}" alt="">`;
else av.textContent = P.name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();

const nav = document.getElementById("links");
for (const l of P.links) {
  const a = document.createElement("a");
  a.href = l.url;
  a.target = "_blank";
  a.rel = "noopener noreferrer";
  a.innerHTML = `${svg(l.icon)}<span></span>`;
  a.querySelector("span").textContent = l.label;
  nav.appendChild(a);
}
