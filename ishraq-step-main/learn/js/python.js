export const python = {
  1: {
    title: 'الطباعة',
    description: 'تعلم كيفية طباعة الرسائل والبيانات',
    content: `
      <p>دالة <strong>print()</strong> تستخدم لعرض النصوص والبيانات على الشاشة.</p>
      <pre>print("مرحبا بك في عالم بايثون")</pre>
    `,
    challenge: 'اطبع الرسالة: "أنا أتعلم البرمجة"',
    expectedOutput: 'أنا أتعلم البرمجة'
  },
  2: {
    title: 'المتغيرات',
    description: 'تعرف على المتغيرات وأنواع البيانات',
    content: `
      <p>المتغيرات تستخدم لتخزين البيانات. أنواعها: <strong>int</strong> للأرقام، <strong>str</strong> للنصوص، و <strong>float</strong> للعشري.</p>
      <pre>name = "أحمد"\nage = 25\nprint(name)</pre>
    `,
    challenge: 'أنشئ متغير باسم age وقيمة 20 ثم اطبعه',
    expectedOutput: '20'
  },
  3: {
    title: 'العمليات الحسابية',
    description: 'إجراء العمليات الحسابية الأساسية',
    content: `
      <p>تستخدم بايثون الرموز: <strong>+ , - , * , /</strong> للعمليات الحسابية، و <strong>//</strong> للقسمة الصحيحة.</p>
      <pre>result = 10 + 5\nprint(result)</pre>
    `,
    challenge: 'اطبع ناتج ضرب 5 في 4',
    expectedOutput: '20'
  },
  4: {
    title: 'الشروط (If Statements)',
    description: 'استخدام if و else و elif لاتخاذ القرارات',
    content: `
      <p>تسمح لك الشروط بتنفيذ كود معين فقط إذا تحقق شرط ما.</p>
      <pre>score = 80\nif score >= 50:\n    print("ناجح")</pre>
    `,
    challenge: 'إذا كان x يساوي 10، اطبع "مقبول"',
    expectedOutput: 'مقبول'
  },
  5: {
    title: 'الحلقات (Loops)',
    description: 'تكرار الأكواد مع for و while',
    content: `
      <p>تستخدم <strong>for</strong> لتكرار الكود لعدد محدد من المرات.</p>
      <pre>for i in range(3):\n    print("تكرار")</pre>
    `,
    challenge: 'استخدم for لطباعة الأرقام من 0 إلى 2',
    expectedOutput: '0\n1\n2'
  },
  6: {
    title: 'الدوال (Functions)',
    description: 'كتابة وتنفيذ الدوال الخاصة بك',
    content: `
      <p>الدالة هي كتلة من الكود يتم استدعاؤها عند الحاجة باستخدام كلمة <strong>def</strong>.</p>
      <pre>def say_hi():\n    print("أهلاً")\n\nsay_hi()</pre>
    `,
    challenge: 'أنشئ دالة باسم greet تطبع "مرحبا" ثم استدعها',
    expectedOutput: 'مرحبا'
  },
  7: {
    title: 'القوائم (Lists)',
    description: 'تخزين مجموعة من العناصر في مكان واحد',
    content: `
      <p>القائمة <strong>List</strong> تخزن عدة قيم. نصل للعنصر الأول باستخدام الرقم 0.</p>
      <pre>fruits = ["تفاح", "موز"]\nprint(fruits[0])</pre>
    `,
    challenge: 'أنشئ قائمة [1, 2] واطبع العنصر الأول',
    expectedOutput: '1'
  },
  8: {
    title: 'المدخلات (Input)',
    description: 'أخذ بيانات من المستخدم',
    content: `
      <p>تستخدم دالة <strong>input()</strong> لاستقبال البيانات من المستخدم أثناء تشغيل البرنامج.</p>
      <pre>name = input("ما اسمك؟")\nprint(name)</pre>
    `,
    challenge: 'استخدم input واطبع ما يدخله المستخدم (افترض الإدخال "خالد")',
    expectedOutput: 'خالد'
  },
  9: {
    title: 'القواميس (Dictionaries)',
    description: 'تخزين البيانات بنظام المفتاح والقيمة',
    content: `
      <p>القاموس يخزن البيانات في أزواج (Key: Value) مثل سجل الهاتف.</p>
      <pre>user = {"id": 1, "name": "سارة"}\nprint(user["name"])</pre>
    `,
    challenge: 'اطبع قيمة المفتاح "name" من القاموس {"name": "أمل"}',
    expectedOutput: 'أمل'
  },
  10: {
    title: 'المكتبات (Modules)',
    description: 'استخدام مكتبات جاهزة مثل math',
    content: `
      <p>يمكنك استخدام أكواد جاهزة عن طريق <strong>import</strong> لتوفير الوقت.</p>
      <pre>import math\nprint(math.sqrt(16))</pre>
    `,
    challenge: 'استخدم مكتبة math لطباعة قيمة pi (اكتب print(math.pi))',
    expectedOutput: '3.141592653589793'
  }
};