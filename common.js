/* SQC Stay DEMO — shared helpers (i18n + localStorage). Demo only. */
(function(){
  var KEY='sqcstay_demo_bookings', LKEY='sqcstay_demo_lang';
  function pad(n){return (n<10?'0':'')+n}
  function ymd(d){return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate())}
  function parse(s){var p=s.split('-');return new Date(+p[0],+p[1]-1,+p[2])}
  function addDays(d,n){var x=new Date(d.getFullYear(),d.getMonth(),d.getDate());x.setDate(x.getDate()+n);return x}
  function nights(a,b){return Math.round((parse(b)-parse(a))/86400000)}
  function load(){try{var v=JSON.parse(localStorage.getItem(KEY)||'null');return Array.isArray(v)?v:null}catch(e){return null}}
  function save(list){localStorage.setItem(KEY,JSON.stringify(list))}
  function seed(){
    var t=new Date(), s=[
      ['Sample Guest A','studio',1,2,5,'confirmed'],['Sample Guest B','apartment',3,4,9,'confirmed'],
      ['Sample Guest C','studio',2,8,10,'pending'],['Sample Guest D','apartment',4,12,19,'pending'],
      ['Sample Guest E','studio',1,-3,1,'confirmed'],['Sample Guest F','apartment',2,6,8,'cancelled']
    ];
    return s.map(function(r,i){return{id:'S'+(i+1),ref:'DEMO-S'+(100+i),name:r[0],phone:'05X XXX XXXX',unit:r[1],guests:r[2],
      checkIn:ymd(addDays(t,r[3])),checkOut:ymd(addDays(t,r[4])),notes:'',status:r[5],createdAt:new Date(t.getTime()-(i+1)*3600e3).toISOString(),sample:true}});
  }
  function all(){var l=load();if(!l){l=seed();save(l)}return l}
  function add(b){var l=all();l.unshift(b);save(l);return b}
  function update(id,patch){var l=all();l.forEach(function(b){if(b.id===id){for(var k in patch)b[k]=patch[k]}});save(l)}
  function remove(id){save(all().filter(function(b){return b.id!==id}))}
  function reset(){localStorage.removeItem(KEY);return all()}
  function getLang(){var l=localStorage.getItem(LKEY);return l==='ar'?'ar':'en'}
  function applyLang(dict,lang){
    lang=lang||getLang();localStorage.setItem(LKEY,lang);
    var h=document.documentElement;h.lang=lang;h.dir=lang==='ar'?'rtl':'ltr';
    document.querySelectorAll('[data-i18n]').forEach(function(el){var k=el.getAttribute('data-i18n');if(dict[k])el.textContent=dict[k][lang]});
    document.querySelectorAll('[data-i18n-ph]').forEach(function(el){var k=el.getAttribute('data-i18n-ph');if(dict[k])el.placeholder=dict[k][lang]});
    if(dict._title)document.title=dict._title[lang];
    return lang;
  }
  function fmtDate(s,lang){if(!s)return '—';try{return parse(s).toLocaleDateString(lang==='ar'?'ar-SA-u-ca-gregory-nu-latn':'en-GB',{day:'numeric',month:'short',year:'numeric'})}catch(e){return s}}
  function esc(s){return String(s==null?'':s).replace(/[&<>"']/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})}
  window.SQC={TOTAL_UNITS:75,ymd:ymd,parse:parse,addDays:addDays,nights:nights,all:all,add:add,update:update,remove:remove,reset:reset,getLang:getLang,applyLang:applyLang,fmtDate:fmtDate,esc:esc};
})();
