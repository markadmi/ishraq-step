export const javascript = {
  1: {
    title: 'الطباعة',
    description: 'تعلم كيفية طباعة البيانات في المتصفح',
    content: `
     <p>نستخدم // لكتابة تعليق بجانب الكود حتا يتجاهلها الكمبيوتر </p>
     <p> في حاله عدم كتابه // قبل النص يعتبر الكمبيوتر ان النص كود </p>
      <p>نستخدم <strong>console.log()</strong> لطباعة البيانات في وحدة تحكم المتصفح (Console).</p>
      <pre>console.log("مرحبا بك");</pre>
    `,
    challenge: 'اطبع الرسالة: "أنا أتعلم البرمجة"',
    expectedOutput: 'أنا أتعلم البرمجة'
  },
  2: {
    title: 'المتغيرات',
    description: 'الفرق بين var, let و const',
    content: `
      <p>نستخدم <strong>let</strong> للمتغيرات القابلة للتغيير و <strong>const</strong> للثوابت.</p>
      <pre>let name = "أحمد";\nconst pi = 3.14;\nconsole.log(name);</pre>
    `,
    challenge: 'أنشئ متغير باسم age بقيمة 20 واطبعه',
    expectedOutput: '20'
  },
  3: {
    title: 'العمليات الحسابية',
    description: 'الحسابات الأساسية في JavaScript',
    content: `
      <p>يدعم JavaScript العمليات: +, -, *, /, % وأيضاً ** للأس.</p>
      <pre>let result = 10 * 2;\nconsole.log(result);</pre>
    `,
    challenge: 'اطبع ناتج جمع 5 و 5',
    expectedOutput: '10'
  },
  4: {
    title: 'الشروط (If Statement)',
    description: 'التحكم في مسار البرنامج',
    content: `
      <p>نستخدم <strong>if</strong> للتحقق من الشرط و <strong>else</strong> كبديل.</p>
      <pre>let score = 80;\nif (score >= 50) {\n  console.log("ناجح");\n}</pre>
    `,
    challenge: 'إذا كان x يساوي 10 اطبع "صح"',
    expectedOutput: 'صح'
  },
  5: {
    title: 'الحلقات (For Loop)',
    description: 'تكرار العمليات البرمجية',
    content: `
      <p>تُستخدم حلقة <strong>for</strong> لتكرار الكود عدداً من المرات.</p>
      <pre>for (let i = 0; i < 3; i++) {\n  console.log(i);\n}</pre>
    `,
    challenge: 'اطبع الأرقام من 0 إلى 2 باستخدام for',
    expectedOutput: '0\n1\n2'
  },
  6: {
    title: 'الدوال (Functions)',
    description: 'كتابة الدوال والـ Arrow Functions',
    content: `
      <p>يمكن كتابة الدوال بالطريقة التقليدية أو باستخدام <strong>Arrow Function</strong>.</p>
      <pre>const greet = () => {\n  console.log("أهلاً");\n};\ngreet();</pre>
    `,
    challenge: 'أنشئ دالة باسم sayHi تطبع "أهلاً" واستدعها',
    expectedOutput: 'أهلاً'
  },
  7: {
    title: 'المصفوفات (Arrays)',
    description: 'التعامل مع قوائم البيانات',
    content: `
      <p>المصفوفات في JS مرنة جداً وتحتوي على دوال مدمجة مثل <strong>push</strong>.</p>
      <pre>let colors = ["أحمر", "أزرق"];\nconsole.log(colors[0]);</pre>
    `,
    challenge: 'أنشئ مصفوفة [1, 2] واطبع العنصر الثاني (index 1)',
    expectedOutput: '2'
  },
  8: {
    title: 'الأجسام (Objects)',
    description: 'تخزين البيانات في شكل خصائص وقيم',
    content: `
      <p>الأجسام (Objects) تسمح بتخزين بيانات مرتبطة ببعضها.</p>
      <pre>let user = { name: "سارة", age: 25 };\nconsole.log(user.name);</pre>
    `,
    challenge: 'اطبع خاصية name من الجسم {name: "علي"}',
    expectedOutput: 'علي'
  },
  9: {
    title: 'التعامل مع DOM',
    description: 'تغيير محتوى HTML برمجياً',
    content: `
      <p>يمكننا الوصول لعناصر الصفحة باستخدام <strong>document.getElementById</strong>.</p>
      <pre>document.body.innerHTML = "تم التغيير";</pre>
    `,
    challenge: 'غير محتوى الصفحة إلى "مرحباً بالجميع" (استخدم innerHTML)',
    expectedOutput: 'مرحباً بالجميع'
  },
  10: {
    title: 'الوعود (Promises)',
    description: 'التعامل مع العمليات غير المتزامنة',
    content: `
      <p>نستخدم <strong>async</strong> و <strong>await</strong> للانتظار حتى انتهاء المهمة (مثل جلب بيانات).</p>
      <pre>async function getData() {\n  return "Done";\n}\ngetData().then(console.log);</pre>
    `,
    challenge: 'اجعل دالة ترجع كلمة "Success" واطبعها',
    expectedOutput: 'Success'
  }
};