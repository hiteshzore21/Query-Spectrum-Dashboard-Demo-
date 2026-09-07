document.addEventListener('DOMContentLoaded', () => {
  initMenu();
  const search=document.getElementById('projectSearch'), type=document.getElementById('typeFilter'), status=document.getElementById('statusFilter');
  const params=new URLSearchParams(location.search);
  if(params.get('search')) search.value=params.get('search');
  if(params.get('recent')) search.value='';
  if(params.get('focus')) setTimeout(()=>search.focus(),100);
  const render=()=>{
    const q=search.value.toLowerCase().trim(), t=type.value, s=status.value;
    const filtered=getProjects().filter(p=>{
      const hay=[p.projectId,p.surveyType,p.market,p.ir,p.loi,p.status,p.targeting.join(' '),p.surveys.map(x=>x.name).join(' ')].join(' ').toLowerCase();
      return (!q||hay.includes(q))&&(!t||p.surveyType===t)&&(!s||p.status===s);
    });
    document.getElementById('resultCount').textContent=`${filtered.length} project${filtered.length===1?'':'s'} found`;
    document.getElementById('projectsTable').innerHTML=filtered.map(p=>`<tr><td><strong>${escapeHtml(p.projectId)}</strong></td><td>${escapeHtml(p.surveyType)}</td><td>${escapeHtml(p.market)}</td><td>${escapeHtml(p.ir)}</td><td>${escapeHtml(p.loi)}</td><td><span class="status ${statusClass(p.status)}">${escapeHtml(p.status)}</span></td><td>${escapeHtml(p.createdAt)}</td><td><a class="view-link" href="project-details.html?id=${encodeURIComponent(p.projectId)}">View →</a></td></tr>`).join('');
    document.getElementById('emptyState').classList.toggle('hidden',filtered.length!==0);
  };
  [search,type,status].forEach(el=>el.addEventListener('input',render));
  document.getElementById('clearFilters').addEventListener('click',()=>{search.value='';type.value='';status.value='';render()});
  render();
});