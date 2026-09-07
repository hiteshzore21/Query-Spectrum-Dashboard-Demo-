document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  const projects=getProjects();
  const active=projects.filter(p=>p.status==='Active').length;
  const recent=projects.slice(0,12).length;
  const b2b=projects.filter(p=>p.surveyType==='B2B').length;
  const b2c=projects.filter(p=>p.surveyType==='B2C').length;
  const stats=[['Total Projects',128,'Across all research programs','blue'],['Active Projects',94,'Currently in field','green'],['Recent Projects',recent,'Added in recent activity','violet'],['B2B Projects',68,'Business-to-business studies','amber'],['B2C Projects',60,'Consumer research studies','rose']];
  document.getElementById('statsGrid').innerHTML=stats.map(([title,num,sub,c])=>`<article class="stat-card"><div class="stat-icon ${c}">${title[0]}</div><div><span>${title}</span><strong>${num}</strong><small>${sub}</small></div></article>`).join('');
  document.getElementById('recentTable').innerHTML=projects.slice(0,5).map(row).join('');
  document.getElementById('dashboardSearch').addEventListener('submit',e=>{e.preventDefault();const q=document.getElementById('searchInput').value.trim();location.href='projects.html?search='+encodeURIComponent(q)});
});
function row(p){return `<tr><td><strong>${escapeHtml(p.projectId)}</strong></td><td>${escapeHtml(p.surveyType)}</td><td>${escapeHtml(p.market)}</td><td>${escapeHtml(p.ir)}</td><td>${escapeHtml(p.loi)}</td><td><span class="status ${statusClass(p.status)}">${escapeHtml(p.status)}</span></td><td>${escapeHtml(p.createdAt)}</td><td><a class="view-link" href="project-details.html?id=${encodeURIComponent(p.projectId)}">View →</a></td></tr>`}