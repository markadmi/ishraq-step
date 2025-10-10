const DATA = [
  // --- أساسيات ومكونات الإلكترونيات (شرح مباشر وصور ثابتة) ---
  
  { 
    id: 'EL_R_001', 
    title: 'المقاومة الكهربائية (Resistor)', 
    desc: 'هي مكون إلكتروني ثنائي الطرف يستخدم لمقاومة تدفق التيار الكهربائي في الدائرة. وظيفتها الأساسية هي **خفض الجهد** و **تنظيم مرور التيار** لحماية المكونات الأخرى، وتُقاس بوحدة **الأوم (Ohm)**. تتوفر بأنواع ثابتة ومتغيرة (مثل الريوستات).', 
    thumb: 'https://k.top4top.io/p_3565jz6bm1.jpg', // صورة توضيحية للمقاومة
    url: 'مفهوم_المقاومة_وأنواعها' // هذا الحقل الآن يحمل مُعرّف المقالة/الموضوع
  },
  
  { 
    id: 'EL_C_002', 
    title: 'المكثف الكهربائي (Capacitor)', 
    desc: 'مكون يخزن الطاقة الكهربائية في مجال كهربائي بين لوحين موصلين يفصل بينهما مادة عازلة (دي إلكتريك). وظيفته الأساسية هي **تخزين الشحنات**، و**تنعيم التيار** (تحويل AC إلى DC أكثر استقراراً)، و**حجب التيار المستمر** والسماح بمرور التيار المتناوب. يُقاس بوحدة **الفاراد (Farad)**.', 
    thumb: 'https://c.top4top.io/p_3565kvnxa1.jpg', // صورة توضيحية للمكثف
    url: 'مفهوم_المكثف_ووظيفته_في_الدوائر' 
  },
  
  { 
    id: 'EL_D_003', 
    title: 'الديود/الصمام الثنائي (Diode)', 
    desc: 'مكون يسمح بمرور التيار الكهربائي في **اتجاه واحد فقط** ويمنع مروره في الاتجاه المعاكس. يُستخدم بشكل أساسي في **تقويم التيار** (تحويل AC إلى DC)، كما أن له أنواع متخصصة مثل **ديود زينر** لتنظيم الجهد و**الديودات المُشعّة للضوء (LED)**.', 
    thumb: 'https://g.top4top.io/p_35659xhc21.png', // صورة توضيحية للديود
    url: 'وظيفة_الديود_وتطبيقاته' 
  },
  
  { 
    id: 'EL_T_004', 
    title: 'الترانزستور (Transistor)', 
    desc: 'هو حجر الزاوية في الإلكترونيات الحديثة. يعمل أساساً كـ **مفتاح إلكتروني** (لتشغيل وإيقاف التيار) أو كـ **مكبر للإشارة**. يتكون من ثلاثة أطراف (المُجمع، القاعدة، الباعث) ويستخدم للتحكم في تيار كبير بواسطة تيار صغير. وهو المكون الأساسي في بناء الدوائر المتكاملة (IC).', 
    thumb: 'https://i.imgur.com/Z4w2fTf.png', // صورة توضيحية للترانزستور
    url: 'شرح_عمل_الترانزستور' 
  },
  
  { 
    id: 'EL_ARD_005', 
    title: 'لوحة الأردوينو (Arduino Board)', 
    desc: 'هي لوحة تحكم دقيقة مفتوحة المصدر، سهلة الاستخدام ومناسبة للمبتدئين. تسمح للمستخدم بكتابة وتنفيذ الأكواد البرمجية للتحكم في الأجهزة الإلكترونية والمستشعرات (Sensors). تُستخدم في بناء مشاريع الروبوتات والتحكم الآلي في المنزل.', 
    thumb: 'https://i.imgur.com/QhG0r9f.png', // صورة توضيحية للوحة أردوينو
    url: 'تعريف_لوحة_الأردوينو' 
  },
  
  { 
    id: 'EL_AC_DC_006', 
    title: 'التيار المتناوب والمستمر (AC vs DC)', 
    desc: 'يشير إلى أنواع تدفق الشحنات. **التيار المستمر (DC)** يتدفق في اتجاه واحد (مثل البطاريات). **التيار المتناوب (AC)** يغير اتجاهه بشكل دوري ومنتظم (مثل كهرباء المنزل). تستخدم معظم الأجهزة الإلكترونية **التيار المستمر**، لذلك تحتاج إلى دوائر تقويم لتحويل AC إلى DC.', 
    thumb: 'https://i.imgur.com/tH6N0F5.png', // صورة توضيحية للتيار
    url: 'الفرق_بين_AC_و_DC' 
  }
];

const resultsEl = document.getElementById('results');
const metaEl = document.getElementById('meta');

function getQueryParam(name){
  const params = new URLSearchParams(window.location.search);
  return params.get(name) || '';
}

function performSearch(term){
  if(!term) return [];
  const q = term.trim().toLowerCase();
  return DATA.filter(item => {
    return (item.title && item.title.toLowerCase().includes(q)) || (item.desc && item.desc.toLowerCase().includes(q));
  });
}

function renderResults(results, term){
  resultsEl.innerHTML = '';
  if(!term){
    metaEl.textContent = '📌 أضف ?search=كلمة في الرابط لعرض النتائج.';
    return;
  }
  // اذا لم يتم العثور على البحث
  metaEl.textContent = `نتائج البحث عن: "${term}" — ${results.length} نتيجة`;
  if(results.length === 0){
    resultsEl.innerHTML = `<div class="card"><div class="info"><h3>لا توجد نتائج</h3><p>لا توجد عناصر تطابق كلمات البحث.</p></div></div>`;
    return;
  }

  results.forEach(item => {
    const card = document.createElement('article');
    card.className = 'card';

    const thumb = document.createElement('div');
    thumb.className = 'thumb';
    const img = document.createElement('img');
    img.src = item.thumb;
    img.alt = item.title;
    thumb.appendChild(img);

    const info = document.createElement('div');
    info.className = 'info';
    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    const p = document.createElement('p');
    p.textContent = item.desc;
    const actions = document.createElement('div');
    actions.className = 'actions';
    const openBtn = document.createElement('a');
    openBtn.href = item.url;
    openBtn.target = '_blank';
    openBtn.rel = 'noopener';
    openBtn.className = 'small-btn';
    openBtn.textContent = 'فتح الفيديو';
    actions.appendChild(openBtn);

    info.appendChild(h3);
    info.appendChild(p);
    info.appendChild(actions);

    card.appendChild(thumb);
    card.appendChild(info);
    resultsEl.appendChild(card);
  });
}

window.addEventListener('load', () => {
  const q = getQueryParam('search');
  const results = performSearch(q);
  renderResults(results, q);
});
