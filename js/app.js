(() => {
"use strict";
const courses = Array.isArray(window.LEARNHUB_COURSES) ? window.LEARNHUB_COURSES : [];
const $ = id => document.getElementById(id);
const STORE = "learnhub-premium-v1";
const state = { courseId:null, lessons:[], index:0, category:"All", query:"", sort:"featured", collapsed:new Set() };
let toastTimer;
function readStore(){try{return JSON.parse(localStorage.getItem(STORE))||{done:[],bookmarks:[],theme:"dark"};}catch{return {done:[],bookmarks:[],theme:"dark"};}}
let store=readStore();
function saveStore(){try{localStorage.setItem(STORE,JSON.stringify(store));}catch{}}
function safe(value=""){return String(value).replace(/[&<>"']/g,ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));}
function allLessons(course){return (course.modules||[]).flatMap(module=>(module.lessons||[]).map(lesson=>({...lesson,moduleId:module.id,moduleTitle:module.title})));}
function currentCourse(){return courses.find(course=>course.id===state.courseId);}
function key(){const lesson=state.lessons[state.index];return lesson?`${state.courseId}::${lesson.id}`:"";}
function isDone(id){return store.done.includes(id);}
function isBookmarked(id){return store.bookmarks.includes(id);}
function courseProgress(course){const list=allLessons(course);const done=list.filter(l=>isDone(`${course.id}::${l.id}`)).length;return {done,total:list.length,pct:list.length?Math.round(done/list.length*100):0};}
function notify(message){const el=$("toast");el.textContent=message;el.classList.add("show");clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove("show"),2100);}
function renderLibrary(){
 const categories=["All",...new Set(courses.map(c=>c.category||"Other"))];
 $("categoryFilters").innerHTML=categories.map(cat=>`<button class="filter-chip ${state.category===cat?"active":""}" data-category="${safe(cat)}">${safe(cat)}</button>`).join("");
 document.querySelectorAll("[data-category]").forEach(btn=>btn.addEventListener("click",()=>{state.category=btn.dataset.category;renderLibrary();}));
 let list=courses.filter(c=>(state.category==="All"||c.category===state.category)&&[c.title,c.category,c.description].join(" ").toLowerCase().includes(state.query.toLowerCase()));
 if(state.sort==="az")list.sort((a,b)=>a.title.localeCompare(b.title));
 if(state.sort==="lessons")list.sort((a,b)=>allLessons(b).length-allLessons(a).length);
 if(state.sort==="featured")list.sort((a,b)=>Number(!!b.featured)-Number(!!a.featured));
 $("courseCount").textContent=list.length;$("heroCourseCount").textContent=courses.length;
 $("heroLessonCount").textContent=courses.reduce((sum,c)=>sum+allLessons(c).length,0);
 $("emptyState").classList.toggle("hidden",list.length>0);
 $("courseGrid").innerHTML=list.map(course=>{
  const progress=courseProgress(course),count=allLessons(course).length;
  return `<article class="course-card" data-course="${safe(course.id)}" tabindex="0" role="button" aria-label="Open ${safe(course.title)}">
   <div class="course-cover" style="background:${course.cover||"linear-gradient(135deg,#34345f,#7557a8)"}"><span class="cover-icon">${safe(course.icon||"📘")}</span><span class="cover-tag">${safe(course.category||"COURSE")}</span><span class="cover-decoration">LEARN</span></div>
   <div class="course-content"><span class="course-category">${safe(course.category||"Course")}</span><h3>${safe(course.title)}</h3><p>${safe(course.description||"")}</p>
   <div class="course-card-bottom"><span>▤ ${count} lessons · ${progress.pct}% complete</span><b>Explore course ↗</b></div><div class="course-progress-mini"><i style="width:${progress.pct}%"></i></div></div></article>`;
 }).join("");
 document.querySelectorAll("[data-course]").forEach(card=>{const open=()=>openCourse(card.dataset.course,0);card.addEventListener("click",open);card.addEventListener("keydown",e=>{if(e.key==="Enter"||e.key===" "){e.preventDefault();open();}});});
}
function openCourse(id,index){
 const course=courses.find(c=>c.id===id);if(!course)return;
 state.courseId=id;state.lessons=allLessons(course);if(!state.lessons.length){notify("This course has no lessons yet.");return;}
 state.index=Math.max(0,Math.min(index,state.lessons.length-1));$("libraryView").classList.add("hidden");$("learningView").classList.remove("hidden");document.body.classList.remove("focus-mode");
 $("sidebarCourseTitle").textContent=course.title;renderNavigation(course);renderLesson();window.scrollTo({top:0,behavior:"smooth"});
}
function renderNavigation(course){
 let number=0;
 $("lessonNavigation").innerHTML=(course.modules||[]).map((module,mi)=>{
  const collapsed=state.collapsed.has(module.id);
  const lessons=(module.lessons||[]).map(lesson=>{
   const n=number++,done=isDone(`${course.id}::${lesson.id}`),active=state.lessons[state.index]?.id===lesson.id;
   return `<button class="lesson-nav-item ${active?"active":""} ${done?"done":""}" data-lesson-index="${n}"><span class="nav-number">${done?"✓":String(n+1).padStart(2,"0")}</span><span>${safe(lesson.title)}</span></button>`;
  }).join("");
  return `<div class="module-block"><button class="module-heading ${collapsed?"collapsed":""}" data-module="${safe(module.id)}"><span>${safe(module.title)}</span><span>⌄</span></button><div class="module-lessons ${collapsed?"collapsed":""}">${lessons}</div></div>`;
 }).join("");
 document.querySelectorAll("[data-lesson-index]").forEach(btn=>btn.addEventListener("click",()=>{state.index=Number(btn.dataset.lessonIndex);renderLesson();closeSidebar();}));
 document.querySelectorAll("[data-module]").forEach(btn=>btn.addEventListener("click",()=>{const id=btn.dataset.module;state.collapsed.has(id)?state.collapsed.delete(id):state.collapsed.add(id);renderNavigation(course);}));
 updateProgress();
}
function videoId(material){
 if(material.videoId)return material.videoId.trim();
 const raw=material.url||"";
 try{const url=new URL(raw);if(url.hostname.includes("youtu.be"))return url.pathname.split("/").filter(Boolean)[0]||"";if(url.hostname.includes("youtube.com"))return url.searchParams.get("v")||url.pathname.split("/").filter(Boolean).pop()||"";}catch{}
 return "";
}
function renderMaterials(items=[]){
 if(!items.length)return `<article class="material-card"><p class="empty-material">No lesson materials have been added yet. Add a YouTube video, notes or PDF in js/courses-data.js.</p></article>`;
 return items.map(item=>{
  if(item.type==="youtube"){
   const id=videoId(item);if(!/^[A-Za-z0-9_-]{6,}$/.test(id))return `<article class="material-card"><h2 class="material-title">▶ ${safe(item.title||"Video lesson")}</h2><p class="empty-material">Video ID is missing or invalid. Check js/courses-data.js.</p></article>`;
   return `<article class="material-card"><h2 class="material-title"><span class="material-title-icon">▶</span>${safe(item.title||"Video lesson")}</h2><iframe class="video-frame" src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(id)}" title="${safe(item.title||"YouTube video")}" loading="lazy" referrerpolicy="strict-origin-when-cross-origin" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe><p class="video-caption">Video hosted by YouTube · Playback requires an internet connection</p></article>`;
  }
  if(item.type==="notes")return `<article class="material-card"><h2 class="material-title"><span class="material-title-icon">▤</span>${safe(item.title||"Lesson notes")}</h2><div class="notes-content">${item.content||"<p>No notes added yet.</p>"}</div></article>`;
  if(item.type==="documents"){
   const docs=Array.isArray(item.documents)?item.documents:[];
   return `<article class="material-card"><h2 class="material-title"><span class="material-title-icon">⇩</span>${safe(item.title||"Downloadable documents")}</h2>${docs.length?docs.map(doc=>`<div class="document-item"><div class="document-info"><span class="document-icon">PDF</span><div><strong>${safe(doc.title||"Study document")}</strong><small>${safe(doc.size||"Downloadable file")}</small></div></div><a class="download-link" href="${safe(doc.file||"#")}" download>↓ Download</a></div>`).join(""):"<p class='empty-material'>No PDF files added yet.</p>"}</article>`;
  }
  return "";
 }).join("");
}
function renderLesson(){
 const course=currentCourse(),lesson=state.lessons[state.index];if(!course||!lesson)return;
 $("breadcrumbCourse").textContent=course.title;$("lessonKicker").textContent=`${lesson.moduleTitle} · LESSON ${state.index+1}`;
 $("lessonTitle").textContent=lesson.title;$("lessonDescription").textContent=lesson.description||"";
 $("materialList").innerHTML=renderMaterials(lesson.materials);
 const done=isDone(key());$("completeCheckbox").checked=done;$("completedBadge").classList.toggle("hidden",!done);
 $("bookmarkBtn").classList.toggle("bookmarked",isBookmarked(key()));$("bookmarkBtn").textContent=isBookmarked(key())?"★":"☆";
 $("prevLesson").disabled=state.index===0;$("nextLesson").disabled=state.index===state.lessons.length-1;
 $("lessonPosition").textContent=`${state.index+1} / ${state.lessons.length}`;
 const next=state.lessons[state.index+1];$("nextUp").classList.toggle("hidden",!next);if(next)$("nextUpTitle").textContent=next.title;
 renderNavigation(course);window.scrollTo({top:0,behavior:"smooth"});
}
function updateProgress(){
 const course=currentCourse();if(!course)return;const p=courseProgress(course);
 $("progressText").textContent=`${p.pct}% complete`;$("progressCount").textContent=`${p.done}/${p.total}`;$("courseProgressBar").style.width=p.pct+"%";
}
function setDone(checked){const id=key();store.done=checked?[...new Set([...store.done,id])]:store.done.filter(x=>x!==id);saveStore();$("completedBadge").classList.toggle("hidden",!checked);renderNavigation(currentCourse());renderLibrary();notify(checked?"Lesson marked complete":"Lesson marked incomplete");}
function backToLibrary(){closeSidebar();$("learningView").classList.add("hidden");$("libraryView").classList.remove("hidden");document.body.classList.remove("focus-mode");renderLibrary();window.scrollTo({top:0,behavior:"smooth"});}
function closeSidebar(){$("courseSidebar").classList.remove("open");$("sidebarScrim").classList.remove("open");}
function openSidebar(){$("courseSidebar").classList.add("open");$("sidebarScrim").classList.add("open");}
function moveLesson(delta){const next=state.index+delta;if(next>=0&&next<state.lessons.length){state.index=next;renderLesson();}}
function init(){
 $("year").textContent=new Date().getFullYear();if(store.theme==="light")document.body.classList.add("light");
 renderLibrary();
 $("searchInput").addEventListener("input",e=>{state.query=e.target.value;renderLibrary();});
 $("sortSelect").addEventListener("change",e=>{state.sort=e.target.value;renderLibrary();});
 $("clearFilters").addEventListener("click",()=>{state.category="All";state.query="";$("searchInput").value="";renderLibrary();});
 $("themeBtn").addEventListener("click",()=>{document.body.classList.toggle("light");store.theme=document.body.classList.contains("light")?"light":"dark";saveStore();});
 $("backLibrary").addEventListener("click",backToLibrary);$("crumbLibrary").addEventListener("click",backToLibrary);
 $("homeLink").addEventListener("click",e=>{e.preventDefault();backToLibrary();});$("footerHome").addEventListener("click",e=>{e.preventDefault();backToLibrary();});
 $("prevLesson").addEventListener("click",()=>moveLesson(-1));$("nextLesson").addEventListener("click",()=>moveLesson(1));$("nextUpBtn").addEventListener("click",()=>moveLesson(1));
 $("completeCheckbox").addEventListener("change",e=>setDone(e.target.checked));
 $("bookmarkBtn").addEventListener("click",()=>{const id=key();store.bookmarks=isBookmarked(id)?store.bookmarks.filter(x=>x!==id):[...store.bookmarks,id];saveStore();$("bookmarkBtn").classList.toggle("bookmarked",isBookmarked(id));$("bookmarkBtn").textContent=isBookmarked(id)?"★":"☆";notify(isBookmarked(id)?"Lesson bookmarked":"Bookmark removed");});
 $("focusBtn").addEventListener("click",()=>{document.body.classList.toggle("focus-mode");notify(document.body.classList.contains("focus-mode")?"Focus mode on":"Focus mode off");});
 $("mobileContents").addEventListener("click",openSidebar);$("mobileMenuBtn").addEventListener("click",()=>{if(!$("learningView").classList.contains("hidden"))openSidebar();else $("library").scrollIntoView({behavior:"smooth"});});
 $("sidebarScrim").addEventListener("click",closeSidebar);
 $("collapseAllBtn").addEventListener("click",()=>{const c=currentCourse();if(!c)return;const all=(c.modules||[]).map(m=>m.id);const allCollapsed=all.every(id=>state.collapsed.has(id));state.collapsed=allCollapsed?new Set():new Set(all);$("collapseAllBtn").textContent=allCollapsed?"Collapse all":"Expand all";renderNavigation(c);});
 document.addEventListener("keydown",e=>{if(e.key==="/"&&!/input|textarea/i.test(document.activeElement.tagName)){e.preventDefault();$("searchInput").focus();}if(e.key==="Escape")closeSidebar();});
}
document.addEventListener("DOMContentLoaded",init);
})();