const P = window.PROFILE;
const ICONS = {
  instagram: '<rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".6" fill="currentColor"/>',
  youtube: '<rect x="2.5" y="5.5" width="19" height="13" rx="4"/><path d="M10 9.5v5l4.5-2.5z" fill="currentColor"/>',
  tiktok: '<path d="M14 3v11.5a3.5 3.5 0 1 1-3.5-3.5M14 3c.4 2.6 2 4.2 5 4.4"/>',
  x: '<path d="M4 4l16 16M20 4L4 20"/>',
  linkedin: '<rect x="3" y="3" width="18" height="18" rx="3"/><path d="M8 10.5V16M8 7.8v.1M12 16v-5.5M12 13c0-1.7 1-2.6 2.3-2.6S16.5 11.3 16.5 13V16"/>',
  github: '<path d="M9 19c-4 1.2-4-2-6-2.5m12 4.5v-3.1a2.7 2.7 0 0 0-.8-2.1c2.6-.3 5.3-1.3 5.3-5.8a4.5 4.5 0 0 0-1.2-3.1 4.2 4.2 0 0 0-.1-3.1s-1-.3-3.2 1.2a11 11 0 0 0-5.8 0C6.9 3.4 5.9 3.7 5.9 3.7a4.2 4.2 0 0 0-.1 3.1A4.5 4.5 0 0 0 4.6 9.9c0 4.5 2.7 5.5 5.3 5.8a2.7 2.7 0 0 0-.8 2.1V21"/>',
  substack: '<path d="M5 4h14M5 8h14M5 12v8l7-4 7 4v-8z"/>',
  pinterest: '<circle cx="12" cy="12" r="9"/><path d="M11 8.5c2.5-1 4.5.5 4 3-.4 2-2 3-3.3 2.3M11.5 10l-2 9"/>',
  facebook: '<path d="M14 8h2.5V4.5H14A3.5 3.5 0 0 0 10.5 8v2.5H8V14h2.5v6.5H14V14h2.3l.7-3.5H14V8.5z"/>',
  threads: '<path d="M17.5 9.5C17 6.5 15 5 12 5c-3.3 0-5.5 2.5-5.5 7s2.2 7 5.5 7c2.8 0 4.5-1.5 4.5-3.5 0-2.2-2-3-4.2-3-1.7 0-2.8.8-2.8 2 0 1 .9 1.7 2.2 1.7 2 0 3.2-1.5 3.2-4.5"/>',
  link: '<path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/>'
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
