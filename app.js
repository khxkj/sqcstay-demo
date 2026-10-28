(function(){
var D={
 _title:{en:'SQC Stay — Furnished Studios & Apartments (Demo)',ar:'إس كيو سي ستاي — استوديوهات وشقق مفروشة (نسخة تجريبية)'},
 strip:{en:'Demo website concept — sample content only. Bookings are not real.',ar:'نموذج موقع تجريبي — المحتوى للعرض فقط. الحجوزات ليست حقيقية.'},
 badge:{en:'Demo',ar:'تجريبي'},
 brandSub:{en:'Serviced Apartments',ar:'شقق فندقية مخدومة'},
 navUnits:{en:'Units',ar:'الوحدات'},navBook:{en:'Book',ar:'الحجز'},navAmen:{en:'Amenities',ar:'المرافق'},navLoc:{en:'Location',ar:'الموقع'},navContact:{en:'Contact',ar:'تواصل'},navCta:{en:'Book now',ar:'احجز الآن'},
 heroPill:{en:'Saudi Arabia · City: to be confirmed',ar:'المملكة العربية السعودية · المدينة: يُحدَّد لاحقاً'},
 heroTitle:{en:'Your furnished home, ready when you arrive',ar:'منزلك المفروش جاهز لحظة وصولك'},
 heroSub:{en:'Bright, fully furnished studios and apartments for short and long stays. Pick your dates and request a booking in under a minute.',ar:'استوديوهات وشقق مفروشة بالكامل ومشرقة للإقامات القصيرة والطويلة. اختر تواريخك وأرسل طلب الحجز في أقل من دقيقة.'},
 heroCta:{en:'Check dates',ar:'تحقق من التواريخ'},heroCta2:{en:'View units',ar:'عرض الوحدات'},
 f1:{en:'furnished units',ar:'وحدة مفروشة'},f2v:{en:'2',ar:'2'},f2:{en:'unit types',ar:'نوع وحدات'},f3v:{en:'EN/AR',ar:'عربي/EN'},f3:{en:'online booking',ar:'حجز إلكتروني'},
 uEye:{en:'Our units',ar:'وحداتنا'},uTitle:{en:'Studios & apartments',ar:'استوديوهات وشقق'},
 uSub:{en:'Real photos from the property. Rates below are sample values for this demo.',ar:'صور حقيقية من العقار. الأسعار أدناه قيم تجريبية لهذا النموذج.'},
 studio:{en:'Studio',ar:'استوديو'},apartment:{en:'Apartment',ar:'شقة'},
 studioD:{en:'Open-plan studio with a comfortable bed, lounge seating, kitchenette with microwave and fridge, and air-conditioning.',ar:'استوديو مفتوح بسرير مريح وجلسة، ومطبخ صغير مع ميكروويف وثلاجة، وتكييف.'},
 aptD:{en:'Separate bedroom and living room with smart TV, a fitted kitchen with oven and hob, and a private bathroom.',ar:'غرفة نوم منفصلة وصالة مع تلفاز ذكي، ومطبخ مجهز بفرن وموقد، ودورة مياه خاصة.'},
 tKitchenette:{en:'Kitchenette',ar:'مطبخ صغير'},tAC:{en:'Air-conditioning',ar:'تكييف'},tSofa:{en:'Lounge area',ar:'جلسة'},tG2:{en:'Up to 2 guests (sample)',ar:'حتى ضيفين (تجريبي)'},
 tKitchen:{en:'Full kitchen',ar:'مطبخ كامل'},tTV:{en:'Smart TV',ar:'تلفاز ذكي'},tLiving:{en:'Living room',ar:'صالة'},tG4:{en:'Up to 4 guests (sample)',ar:'حتى 4 ضيوف (تجريبي)'},
 studioP:{en:'SAR 250',ar:'250 ر.س'},aptP:{en:'SAR 400',ar:'400 ر.س'},perNight:{en:'/ night',ar:'/ ليلة'},sampleRate:{en:'Sample rate',ar:'سعر تجريبي'},
 bookThis:{en:'Book this unit',ar:'احجز هذه الوحدة'},galTitle:{en:'Photo gallery',ar:'معرض الصور'},
 bEye:{en:'Booking',ar:'الحجز'},bTitle:{en:'Choose your dates',ar:'اختر تواريخ إقامتك'},bSub:{en:'Tap your check-in date, then your check-out date.',ar:'اضغط على تاريخ الوصول ثم تاريخ المغادرة.'},
 calTitle:{en:'Availability calendar',ar:'تقويم التوفر'},checkIn:{en:'Check-in',ar:'الوصول'},checkOut:{en:'Check-out',ar:'المغادرة'},nightsL:{en:'Nights',ar:'الليالي'},
 fName:{en:'Full name',ar:'الاسم الكامل'},fNamePh:{en:'e.g. Sample Name',ar:'مثال: اسم تجريبي'},fPhone:{en:'Phone',ar:'رقم الجوال'},
 fUnit:{en:'Unit type',ar:'نوع الوحدة'},fGuests:{en:'Guests',ar:'عدد الضيوف'},fNotes:{en:'Notes (optional)',ar:'ملاحظات (اختياري)'},
 eName:{en:'Please enter your name.',ar:'يرجى إدخال الاسم.'},ePhone:{en:'Please enter a valid phone number.',ar:'يرجى إدخال رقم جوال صحيح.'},
 eDates:{en:'Please choose valid dates.',ar:'يرجى اختيار تواريخ صحيحة.'},eGuests:{en:'Studios fit up to 2 guests (sample rule).',ar:'الاستوديو يتسع لضيفين كحد أقصى (قاعدة تجريبية).'},
 estNote:{en:'Select dates to see a sample estimate.',ar:'اختر التواريخ لعرض تقدير تجريبي.'},
 submit:{en:'Request booking (demo)',ar:'إرسال طلب الحجز (تجريبي)'},
 formDisc:{en:'This is a demo. Submitting does not reserve a unit or contact the property.',ar:'هذا نموذج تجريبي. الإرسال لا يحجز وحدة ولا يتواصل مع العقار.'},
 aEye:{en:'Amenities',ar:'المرافق'},aTitle:{en:'Everything for a comfortable stay',ar:'كل ما تحتاجه لإقامة مريحة'},aSub:{en:'Based on what is visible in the property photos.',ar:'بناءً على ما يظهر في صور العقار.'},
 am1:{en:'Air-conditioning',ar:'تكييف'},am1d:{en:'Split AC units in rooms',ar:'مكيفات سبليت في الغرف'},
 am2:{en:'Kitchen / kitchenette',ar:'مطبخ / مطبخ صغير'},am2d:{en:'Microwave, kettle, fridge, oven in apartments',ar:'ميكروويف وغلاية وثلاجة، وفرن في الشقق'},
 am3:{en:'Smart TV',ar:'تلفاز ذكي'},am3d:{en:'In living areas',ar:'في الصالات'},am4:{en:'Fresh linen',ar:'مفارش نظيفة'},am4d:{en:'Hotel-style bedding',ar:'مفارش بطابع فندقي'},
 am5:{en:'Lounge seating',ar:'جلسات مريحة'},am5d:{en:'Sofas and coffee tables',ar:'كنب وطاولات قهوة'},am6:{en:'Private bathroom',ar:'دورة مياه خاصة'},am6d:{en:'In every unit',ar:'في كل وحدة'},
 am7:{en:'Wardrobe storage',ar:'خزائن ملابس'},am7d:{en:'Built-in wardrobes',ar:'خزائن مدمجة'},am8:{en:'Wi-Fi',ar:'واي فاي'},am8d:{en:'To be confirmed (placeholder)',ar:'يُؤكَّد لاحقاً (مؤقت)'},
 lEye:{en:'Location',ar:'الموقع'},lTitle:{en:'Where to find us',ar:'أين تجدنا'},mapPh:{en:'Map placeholder',ar:'مكان الخريطة (مؤقت)'},
 mapPh2:{en:'The exact address and map will be added once confirmed.',ar:'سيُضاف العنوان والخريطة بعد التأكيد.'},
 addrL:{en:'Address',ar:'العنوان'},addrV:{en:'[Address placeholder]',ar:'[العنوان — مؤقت]'},ph:{en:'Placeholder',ar:'مؤقت'},
 cityL:{en:'City',ar:'المدينة'},cityV:{en:'[City — to be confirmed], Saudi Arabia',ar:'[المدينة — تُحدَّد لاحقاً]، المملكة العربية السعودية'},
 hoursL:{en:'Check-in / check-out',ar:'الدخول / المغادرة'},hoursV:{en:'[Times to be confirmed]',ar:'[الأوقات تُحدَّد لاحقاً]'},
 cEye:{en:'Contact',ar:'تواصل'},cTitle:{en:'Questions before you book?',ar:'لديك سؤال قبل الحجز؟'},
 cSub:{en:"Contact details below are placeholders for this demo, not the property's real details.",ar:'بيانات التواصل أدناه مؤقتة لهذا النموذج وليست بيانات العقار الحقيقية.'},
 waL:{en:'WhatsApp (demo placeholder)',ar:'واتساب (رقم تجريبي مؤقت)'},phDemo:{en:'Demo number',ar:'رقم تجريبي'},emL:{en:'Email',ar:'البريد الإلكتروني'},emV:{en:'[Email placeholder]',ar:'[البريد — مؤقت]'},
 footer:{en:'Demo website concept prepared by Lumine. Photos supplied by the property; all prices, address and contact details are placeholders.',ar:'نموذج موقع تجريبي من إعداد Lumine. الصور مقدمة من العقار؛ وجميع الأسعار والعنوان وبيانات التواصل مؤقتة.'},
 adminLink:{en:'Admin dashboard (demo)',ar:'لوحة الإدارة (تجريبية)'},
 okTitle:{en:'Demo request received',ar:'تم استلام الطلب التجريبي'},
 okDemo:{en:'This is a DEMO. No booking has been made and nobody has been contacted. This is not a confirmation.',ar:'هذا نموذج تجريبي. لم يتم أي حجز ولم يتم التواصل مع أحد. هذا ليس تأكيد حجز.'},
 okAdmin:{en:'You can see this demo request in the admin dashboard.',ar:'يمكنك رؤية هذا الطلب التجريبي في لوحة الإدارة.'},
 openAdmin:{en:'Open admin',ar:'فتح لوحة الإدارة'},close:{en:'Close',ar:'إغلاق'},
 ref:{en:'Demo ref',ar:'مرجع تجريبي'},guestsL:{en:'Guests',ar:'الضيوف'},estL:{en:'Sample estimate',ar:'تقدير تجريبي'},statusL:{en:'Status',ar:'الحالة'},pending:{en:'Pending (demo)',ar:'قيد الانتظار (تجريبي)'}
};
var RATE={studio:250,apartment:400};
var lang=SQC.getLang();
var MONTHS={en:['January','February','March','April','May','June','July','August','September','October','November','December'],ar:['يناير','فبراير','مارس','أبريل','مايو','يونيو','يوليو','أغسطس','سبتمبر','أكتوبر','نوفمبر','ديسمبر']};
var DOW={en:['Su','Mo','Tu','We','Th','Fr','Sa'],ar:['أحد','إثن','ثلا','أرب','خمي','جمع','سبت']};
var $=function(id){return document.getElementById(id)};
var today=new Date();today=new Date(today.getFullYear(),today.getMonth(),today.getDate());
var view=new Date(today.getFullYear(),today.getMonth(),1);
var sel={a:null,b:null};
var maxDate=SQC.addDays(today,365);

function setLang(l){lang=SQC.applyLang(D,l);$('langBtn').textContent=lang==='ar'?'English':'العربية';render();est()}
$('langBtn').addEventListener('click',function(){setLang(lang==='ar'?'en':'ar')});

function render(){
  var wrap=$('calMonths');wrap.innerHTML='';
  var wide=window.matchMedia('(min-width:700px)').matches;
  for(var m=0;m<(wide?2:1);m++){
    var first=new Date(view.getFullYear(),view.getMonth()+m,1);
    var box=document.createElement('div');box.className='cal-m';
    var h=document.createElement('h5');h.textContent=MONTHS[lang][first.getMonth()]+' '+first.getFullYear();box.appendChild(h);
    var g=document.createElement('div');g.className='cal-g';
    DOW[lang].forEach(function(d){var e=document.createElement('div');e.className='cal-dow';e.textContent=d;g.appendChild(e)});
    for(var i=0;i<first.getDay();i++)g.appendChild(document.createElement('div'));
    var dim=new Date(first.getFullYear(),first.getMonth()+1,0).getDate();
    for(var d=1;d<=dim;d++){
      var dt=new Date(first.getFullYear(),first.getMonth(),d),s=SQC.ymd(dt);
      var b=document.createElement('button');b.type='button';b.className='day';b.textContent=d;b.dataset.d=s;
      if(dt<today||dt>maxDate)b.disabled=true;
      if(+dt===+today)b.classList.add('today');
      if(sel.a===s)b.classList.add('start');if(sel.b===s)b.classList.add('end');
      if(sel.a&&sel.b&&s>sel.a&&s<sel.b)b.classList.add('in');
      g.appendChild(b);
    }
    box.appendChild(g);wrap.appendChild(box);
  }
  $('calPrev').disabled=view<=new Date(today.getFullYear(),today.getMonth(),1);
  $('sumIn').textContent=sel.a?SQC.fmtDate(sel.a,lang):'—';$('sumOut').textContent=sel.b?SQC.fmtDate(sel.b,lang):'—';
  $('sumN').textContent=sel.a&&sel.b?SQC.nights(sel.a,sel.b):0;
}
$('calMonths').addEventListener('click',function(e){
  var b=e.target.closest('.day');if(!b||b.disabled)return;var s=b.dataset.d;
  if(!sel.a||sel.b||s<=sel.a){sel.a=s;sel.b=null}else{sel.b=s}
  $('fIn').value=sel.a||'';$('fOut').value=sel.b||'';render();est();
});
$('calPrev').addEventListener('click',function(){view=new Date(view.getFullYear(),view.getMonth()-1,1);render()});
$('calNext').addEventListener('click',function(){view=new Date(view.getFullYear(),view.getMonth()+1,1);render()});
$('fIn').min=SQC.ymd(today);$('fOut').min=SQC.ymd(SQC.addDays(today,1));
function syncInputs(){var a=$('fIn').value,b=$('fOut').value;sel.a=a||null;sel.b=(b&&a&&b>a)?b:null;if(a){var p=SQC.parse(a);view=new Date(p.getFullYear(),p.getMonth(),1)}render();est()}
$('fIn').addEventListener('change',syncInputs);$('fOut').addEventListener('change',syncInputs);
$('fUnit').addEventListener('change',est);
window.addEventListener('resize',function(){clearTimeout(window._rt);window._rt=setTimeout(render,150)});

function est(){
  var n=sel.a&&sel.b?SQC.nights(sel.a,sel.b):0,u=$('fUnit').value;
  if(!n){$('estimate').textContent=D.estNote[lang];return}
  var t=n*RATE[u];
  $('estimate').textContent=lang==='ar'?('تقدير تجريبي: '+n+' ليلة × '+RATE[u]+' ر.س = '+t+' ر.س (سعر تجريبي، ليس سعراً حقيقياً)'):('Sample estimate: '+n+' night'+(n>1?'s':'')+' × SAR '+RATE[u]+' = SAR '+t+' (sample rate, not a real price)');
}

document.querySelectorAll('[data-unit]').forEach(function(a){a.addEventListener('click',function(){$('fUnit').value=a.dataset.unit;est()})});

$('bookForm').addEventListener('submit',function(e){
  e.preventDefault();var ok=true;
  function chk(id,cond){var f=$(id).closest('.field');f.classList.toggle('bad',!cond);if(!cond)ok=false}
  var name=$('fName').value.trim(),phone=$('fPhone').value.trim(),a=$('fIn').value,b=$('fOut').value,u=$('fUnit').value,g=+$('fGuests').value;
  chk('fName',name.length>=2);chk('fPhone',/^[+0-9\s-]{8,16}$/.test(phone));
  chk('fIn',a&&b&&b>a&&a>=SQC.ymd(today));chk('fGuests',!(u==='studio'&&g>2));
  if(!ok){var bad=document.querySelector('.field.bad input,.field.bad select');if(bad)bad.focus();return}
  var id='B'+Date.now().toString(36);
  var bk=SQC.add({id:id,ref:'DEMO-'+id.slice(-5).toUpperCase(),name:name,phone:phone,unit:u,guests:g,checkIn:a,checkOut:b,notes:$('fNotes').value.trim(),status:'pending',createdAt:new Date().toISOString(),sample:false,lang:lang});
  var n=SQC.nights(a,b);
  $('okKv').innerHTML=[[D.ref[lang],bk.ref],[D.fName[lang],SQC.esc(name)],[D.checkIn[lang],SQC.fmtDate(a,lang)],[D.checkOut[lang],SQC.fmtDate(b,lang)],[D.fUnit[lang],D[u][lang]],[D.guestsL[lang],g],[D.estL[lang],(lang==='ar'?(n*RATE[u])+' ر.س':'SAR '+n*RATE[u])],[D.statusL[lang],D.pending[lang]]].map(function(r){return '<dt>'+r[0]+'</dt><dd>'+r[1]+'</dd>'}).join('');
  $('okModal').classList.add('open');$('okClose').focus();
  this.reset();sel={a:null,b:null};render();est();
});
$('okClose').addEventListener('click',function(){$('okModal').classList.remove('open')});
$('okModal').addEventListener('click',function(e){if(e.target===this)this.classList.remove('open')});
document.querySelectorAll('.unit-gal img,.gallery img').forEach(function(im){im.addEventListener('click',function(){$('lbImg').src=im.src;$('lbImg').alt=im.alt;$('lb').classList.add('open')})});
$('lbClose').addEventListener('click',function(){$('lb').classList.remove('open')});
$('lb').addEventListener('click',function(e){if(e.target===this)this.classList.remove('open')});
document.addEventListener('keydown',function(e){if(e.key==='Escape'){$('lb').classList.remove('open');$('okModal').classList.remove('open')}});
setLang(lang);
})();
