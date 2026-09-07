const STORAGE_KEY = 'querySpectrumProjects';

const seedProjects = [
  {projectId:"QS1754",surveyType:"B2B",market:"US, UK",ir:"60%",loi:"15 mins",targeting:["Business Pros","Creative Pros","Marketing Pros","Creators","Photo Hobbyists (Genpop)","Students (Genpop)"],status:"Active",createdAt:"Today",surveys:[{name:"US - Marketing Pros",url:"https://survey.queryspectrum.com/surveyInitiate.php?gid=MTIyNzgtMTY4ODQ=&pid="}]},
  {projectId:"QS1753",surveyType:"B2C",market:"US",ir:"45%",loi:"10 mins",targeting:["Consumers","Parents","Online Shoppers"],status:"Active",createdAt:"Yesterday",surveys:[{name:"US - General Consumers",url:"https://example.com/survey/qs1753"}]},
  {projectId:"QS1752",surveyType:"B2B",market:"UK",ir:"55%",loi:"20 mins",targeting:["IT Decision Makers","Business Pros"],status:"Completed",createdAt:"2 days ago",surveys:[{name:"UK - IT Leaders",url:"https://example.com/survey/qs1752"}]},
  {projectId:"QS1751",surveyType:"B2C",market:"US, CA",ir:"70%",loi:"12 mins",targeting:["Creators","Students","Young Professionals"],status:"Active",createdAt:"3 days ago",surveys:[{name:"North America - Creators",url:"https://example.com/survey/qs1751"}]},
  {projectId:"QS1750",surveyType:"B2B",market:"US",ir:"52%",loi:"18 mins",targeting:["Marketing Pros","Creative Pros"],status:"Active",createdAt:"4 days ago",surveys:[{name:"US - Creative Leaders",url:"https://example.com/survey/qs1750"}]},
  {projectId:"QS1749",surveyType:"B2C",market:"UK, DE",ir:"64%",loi:"9 mins",targeting:["Consumers","Photo Hobbyists (Genpop)"],status:"Paused",createdAt:"5 days ago",surveys:[{name:"EU - Hobbyists",url:"https://example.com/survey/qs1749"}]},
  {projectId:"QS1748",surveyType:"B2B",market:"CA",ir:"48%",loi:"16 mins",targeting:["Business Pros","Finance Pros"],status:"Active",createdAt:"6 days ago",surveys:[{name:"Canada - Business Pros",url:"https://example.com/survey/qs1748"}]},
  {projectId:"QS1747",surveyType:"B2C",market:"US",ir:"58%",loi:"14 mins",targeting:["Students","Gen Z","Creators"],status:"Completed",createdAt:"1 week ago",surveys:[{name:"US - Student Study",url:"https://example.com/survey/qs1747"}]},
  {projectId:"QS1746",surveyType:"B2B",market:"US, UK",ir:"62%",loi:"22 mins",targeting:["HR Pros","Business Pros","Managers"],status:"Active",createdAt:"1 week ago",surveys:[{name:"US/UK - HR Professionals",url:"https://example.com/survey/qs1746"}]},
  {projectId:"QS1745",surveyType:"B2C",market:"AU",ir:"41%",loi:"8 mins",targeting:["Online Shoppers","Parents"],status:"Active",createdAt:"8 days ago",surveys:[{name:"Australia - Shoppers",url:"https://example.com/survey/qs1745"}]},
  {projectId:"QS1744",surveyType:"B2B",market:"DE, FR",ir:"50%",loi:"17 mins",targeting:["Technology Pros","Marketing Pros"],status:"Active",createdAt:"9 days ago",surveys:[{name:"Europe - Technology Pros",url:"https://example.com/survey/qs1744"}]},
  {projectId:"QS1743",surveyType:"B2C",market:"US, UK",ir:"67%",loi:"11 mins",targeting:["Creators","Photo Hobbyists (Genpop)"],status:"Completed",createdAt:"10 days ago",surveys:[{name:"US/UK - Creators",url:"https://example.com/survey/qs1743"}]},
  {projectId:"QS1742",surveyType:"B2B",market:"US",ir:"54%",loi:"19 mins",targeting:["Sales Pros","Business Pros"],status:"Active",createdAt:"11 days ago",surveys:[{name:"US - Sales Professionals",url:"https://example.com/survey/qs1742"}]},
  {projectId:"QS1741",surveyType:"B2C",market:"IN",ir:"73%",loi:"7 mins",targeting:["Students","Young Professionals"],status:"Paused",createdAt:"12 days ago",surveys:[{name:"India - Young Professionals",url:"https://example.com/survey/qs1741"}]},
  {projectId:"QS1740",surveyType:"B2B",market:"UK",ir:"47%",loi:"13 mins",targeting:["Creative Pros","Marketing Pros"],status:"Active",createdAt:"2 weeks ago",surveys:[{name:"UK - Creative Pros",url:"https://example.com/survey/qs1740"}]}
];

function getProjects() {
  try { const saved = JSON.parse(localStorage.getItem(STORAGE_KEY)); return Array.isArray(saved) ? saved : seedProjects; }
  catch { return seedProjects; }
}
function saveProjects(projects) { localStorage.setItem(STORAGE_KEY, JSON.stringify(projects)); }
function escapeHtml(v='') { return String(v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c])); }
function escapeAttr(v='') { return escapeHtml(v).replace(/`/g,'&#096;'); }
function statusClass(status) { return String(status).toLowerCase(); }
function showToast(message) { const t=document.getElementById('toast'); if(!t)return; t.textContent=message; t.classList.add('show'); setTimeout(()=>t.classList.remove('show'),2500); }
function initMenu() {
  const sidebar=document.getElementById('sidebar'), overlay=document.getElementById('overlay'), btn=document.getElementById('menuBtn');
  if(!btn)return;
  const close=()=>{sidebar.classList.remove('open');overlay.classList.remove('show')};
  btn.addEventListener('click',()=>{sidebar.classList.toggle('open');overlay.classList.toggle('show')});
  overlay.addEventListener('click',close);
  document.querySelectorAll('.nav-item').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<900)close()}));
}