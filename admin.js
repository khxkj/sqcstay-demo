(function(){
var D={
 _title:{en:'SQC Stay Admin (Demo)',ar:'لوحة إدارة إس كيو سي ستاي (تجريبية)'},
 strip:{en:'Demo admin dashboard — data is stored only in this browser (localStorage).',ar:'لوحة إدارة تجريبية — البيانات محفوظة في هذا المتصفح فقط.'},
 badge:{en:'Demo',ar:'تجريبي'},adminSub:{en:'Admin (demo)',ar:'الإدارة (تجريبي)'},
 loginT:{en:'Sign in',ar:'تسجيل الدخول'},credsT:{en:'Demo login',ar:'بيانات الدخول التجريبية'},userL:{en:'Username',ar:'اسم المستخدم'},passL:{en:'Password',ar:'كلمة المرور'},
 loginErr:{en:'Wrong demo credentials. Use admin / demo1234.',ar:'بيانات غير صحيحة. استخدم admin / demo1234.'},loginB:{en:'Sign in',ar:'دخول'},
 loginNote:{en:'Demo only — not a secure login.',ar:'للعرض فقط — ليس تسجيل دخول آمناً.'},logout:{en:'Log out',ar:'خروج'},
 occT:{en:'Occupancy calendar',ar:'تقويم الإشغال'},occLeg:{en:'booked units / 75 (pending + confirmed)',ar:'الوحدات المحجوزة / 75 (قيد الانتظار + مؤكد)'},
 unitsT:{en:'Unit status board',ar:'لوحة حالة الوحدات'},unitsSample:{en:'Sample unit numbers & split',ar:'أرقام وتوزيع الوحدات تجريبية'},unitsHint:{en:'Tap a unit to change its status.',ar:'اضغط على الوحدة لتغيير حالتها.'},
 available:{en:'Available',ar:'متاحة'},occupied:{en:'Occupied',ar:'مشغولة'},cleaning:{en:'Cleaning',ar:'تنظيف'},maintenance:{en:'Maintenance',ar:'صيانة'},
 bkT:{en:'Bookings',ar:'الحجوزات'},search:{en:'Search name / phone / ref',ar:'بحث بالاسم / الجوال / المرجع'},all:{en:'All statuses',ar:'كل الحالات'},
 pending:{en:'Pending',ar:'قيد الانتظار'},confirmed:{en:'Confirmed',ar:'مؤكد'},cancelled:{en:'Cancelled',ar:'ملغي'},reset:{en:'Reset demo data',ar:'إعادة ضبط البيانات'},
 studio:{en:'Studio',ar:'استوديو'},apartment:{en:'Apartment',ar:'شقة'},
 sTotal:{en:'Total bookings',ar:'إجمالي الحجوزات'},sPend:{en:'Pending',ar:'قيد الانتظار'},sConf:{en:'Confirmed',ar:'مؤكدة'},sCanc:{en:'Cancelled',ar:'ملغاة'},
 sTonight:{en:'Booked tonight',ar:'محجوز الليلة'},sArr:{en:'Arrivals (7 days)',ar:'الوصول (7 أيام)'},
 nights:{en:'nights',ar:'ليالٍ'},guests:{en:'guests',ar:'ضيوف'},sampleTag:{en:'sample',ar:'تجريبي'},newTag:{en:'new',ar:'جديد'},
 del:{en:'Delete',ar:'حذف'},none:{en:'No bookings match.',ar:'لا توجد حجوزات مطابقة.'},onDay:{en:'Night of',ar:'ليلة'},clear:{en:'✕ clear',ar:'✕ إلغاء'},
 confirmReset:{en:'Reset all demo bookings and unit statuses?',ar:'إعادة ضبط جميع الحجوزات وحالات الوحدات التجريبية؟'},confirmDel:{en:'Delete this demo booking?',ar:'حذف هذا الحجز التجريبي؟'}
};
var $=function(id){return document.getElementById(id)},lang=SQC.getLang(),AKEY='sqcstay_demo_auth',UKEY='sqcstay_demo_units';
var MONTHS={en:['January','February','March','April','May','June','July','August','September','October','November','December'],ar:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']};
var DOW={en:['Su','Mo','Tu','We','Th','Fr','Sa'],ar:['أحد','إثن','ثلا','أرب','خمي','جمع','سبت']};
var t0=new Date(),today=new Date(t0.getFullYear(),t0.getMonth(),t0.getDate()),TODAY=SQC.ymd(today);
var view=new Date(today.getFullYear(),today.getMonth(),1),dayFilter=null;
var STATES=['available','occupied','cleaning','maintenance'];

function units(){var u;try{u=JSON.parse(localStorage.getItem(UKEY)||'null')}catch(e){u=null}
  if(!Array.isArray(u)||u.length!==75){u=[];for(var f=1;f<=5;f++)for(var n=1;n<=15;n++){var i=u.length;u.push({no:f*100+n,type:i<45?'studio':'apartment',st:i%9===2?'occupied':i%17===5?'cleaning':i===38?'maintenance':'available'})}localStorage.setItem(UKEY,JSON.stringify(u))}return u}
function active(b){return b.status==='pending'||b.status==='confirmed'}
function onNight(b,s){return active(b)&&b.checkIn<=s&&b.checkOut>s}

function setLang(l){lang=SQC.applyLang(D,l);document.querySelectorAll('[data-lang]').forEach(function(b){b.textContent=lang==='ar'?'English':'العربية'});if(authed())draw()}
document.querySelectorAll('[data-lang]').forEach(function(b){b.addEventListener('click',function(){setLang(lang==='ar'?'en':'ar')})});
function authed(){return sessionStorage.getItem(AKEY)==='1'}
function gate(){$('login').style.display=authed()?'none':'grid';$('dash').classList.toggle('on',authed());if(authed())draw()}
$('loginForm').addEventListener('submit',function(e){e.preventDefault();var ok=$('lu').value.trim().toLowerCase()==='admin'&&$('lp').value==='demo1234';
  $('lp').closest('.field').classList.toggle('bad',!ok);if(ok){sessionStorage.setItem(AKEY,'1');gate()}});
$('logout').addEventListener('click',function(){sessionStorage.removeItem(AKEY);gate()});

function draw(){stats();occ();unitsDraw();list()}
function stats(){var L=SQC.all(),c=function(s){return L.filter(function(b){return b.status===s}).length};
  var tn=L.filter(function(b){return onNight(b,TODAY)}).length,wk=SQC.ymd(SQC.addDays(today,7));
  var arr=L.filter(function(b){return active(b)&&b.checkIn>=TODAY&&b.checkIn<=wk}).length;
  var S=[[D.sTotal,L.length,''],[D.sPend,c('pending'),''],[D.sConf,c('confirmed'),''],[D.sCanc,c('cancelled'),''],[D.sTonight,tn+' / 75',Math.round(tn/75*100)+'%'],[D.sArr,arr,'']];
  $('stats').innerHTML=S.map(function(s){return '<div class="stat"><span>'+s[0][lang]+'</span><b>'+s[1]+'</b>'+(s[2]?'<small>'+s[2]+'</small>':'')+'</div>'}).join('');}
function occ(){var L=SQC.all(),g=$('occ'),h='';
  $('oMonth').textContent=MONTHS[lang][view.getMonth()]+' '+view.getFullYear();
  DOW[lang].forEach(function(d){h+='<div class="cal-dow">'+d+'</div>'});
  for(var i=0;i<view.getDay();i++)h+='<div></div>';
  var dim=new Date(view.getFullYear(),view.getMonth()+1,0).getDate();
  for(var d=1;d<=dim;d++){var s=SQC.ymd(new Date(view.getFullYear(),view.getMonth(),d)),n=L.filter(function(b){return onNight(b,s)}).length;
    var lv=n===0?'':n<=2?'l1':n<=5?'l2':n<=10?'l3':'l4';
    h+='<button type="button" class="occ-d '+lv+(s===TODAY?' today':'')+(s===dayFilter?' sel':'')+'" data-d="'+s+'"><b>'+d+'</b><small>'+n+'/75</small></button>'}
  g.innerHTML=h}
$('occ').addEventListener('click',function(e){var b=e.target.closest('.occ-d');if(!b)return;dayFilter=dayFilter===b.dataset.d?null:b.dataset.d;occ();list()});
$('oPrev').addEventListener('click',function(){view=new Date(view.getFullYear(),view.getMonth()-1,1);occ()});
$('oNext').addEventListener('click',function(){view=new Date(view.getFullYear(),view.getMonth()+1,1);occ()});
function unitsDraw(){$('units').innerHTML=units().map(function(u,i){return '<button type="button" class="u '+u.st+'" data-i="'+i+'" title="'+D[u.type][lang]+' · '+D[u.st][lang]+'">'+u.no+'<small>'+(u.type==='studio'?(lang==='ar'?'استوديو':'Studio'):(lang==='ar'?'شقة':'Apt'))+'</small></button>'}).join('')}
$('units').addEventListener('click',function(e){var b=e.target.closest('.u');if(!b)return;var u=units(),x=u[+b.dataset.i];x.st=STATES[(STATES.indexOf(x.st)+1)%4];localStorage.setItem(UKEY,JSON.stringify(u));unitsDraw()});
function list(){var q=$('q').value.trim().toLowerCase(),fs=$('fs').value;
  var L=SQC.all().filter(function(b){return(fs==='all'||b.status===fs)&&(!q||(b.name+' '+b.phone+' '+b.ref).toLowerCase().indexOf(q)>-1)&&(!dayFilter||onNight(b,dayFilter))});
  var cd=$('clearDay');cd.style.display=dayFilter?'':'none';if(dayFilter)cd.textContent=D.onDay[lang]+' '+SQC.fmtDate(dayFilter,lang)+'  '+D.clear[lang];
  if(!L.length){$('list').innerHTML='<div class="empty">'+D.none[lang]+'</div>';return}
  $('list').innerHTML=L.map(function(b){var e=SQC.esc;
    return '<div class="bk" data-id="'+e(b.id)+'"><div><div class="nm">'+e(b.name)+(b.sample?'<span class="samp">'+D.sampleTag[lang]+'</span>':'<span class="samp" style="background:#DDEBD8;color:#3c6233">'+D.newTag[lang]+'</span>')+'</div><div class="sub" dir="ltr" style="text-align:start">'+e(b.phone)+' · '+e(b.ref)+'</div></div>'
    +'<div><div>'+D[b.unit][lang]+'</div><div class="sub">'+b.guests+' '+D.guests[lang]+'</div></div>'
    +'<div><div>'+SQC.fmtDate(b.checkIn,lang)+(lang==='ar'?' ← ':' → ')+SQC.fmtDate(b.checkOut,lang)+'</div><div class="sub">'+SQC.nights(b.checkIn,b.checkOut)+' '+D.nights[lang]+'</div></div>'
    +'<div><span class="st '+b.status+'">'+D[b.status][lang]+'</span></div>'
    +'<div class="act"><select aria-label="status" data-act="st">'+['pending','confirmed','cancelled'].map(function(s){return '<option value="'+s+'"'+(s===b.status?' selected':'')+'>'+D[s][lang]+'</option>'}).join('')+'</select><button type="button" class="del" data-act="del">'+D.del[lang]+'</button></div></div>'}).join('')}
$('list').addEventListener('change',function(e){if(e.target.dataset.act!=='st')return;SQC.update(e.target.closest('.bk').dataset.id,{status:e.target.value});draw()});
$('list').addEventListener('click',function(e){if(e.target.dataset.act!=='del')return;if(confirm(D.confirmDel[lang])){SQC.remove(e.target.closest('.bk').dataset.id);draw()}});
$('q').addEventListener('input',list);$('fs').addEventListener('change',list);
$('clearDay').addEventListener('click',function(){dayFilter=null;occ();list()});
$('reset').addEventListener('click',function(){if(confirm(D.confirmReset[lang])){SQC.reset();localStorage.removeItem(UKEY);dayFilter=null;draw()}});
window.addEventListener('storage',function(){if(authed())draw()});
setLang(lang);gate();
})();
