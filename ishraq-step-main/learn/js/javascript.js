export const javascript = {
  // --- القسم الأول: الأساسيات والطباعة ---
  1: {
    title: 'الطباعة والتعليقات',
    description: 'تستخدم دالة console.log() لعرض المخرجات في لوحة التحكم (Console).',
    content: `<p>لطباعة أي نص نضعه داخل الأقواس وعلامات التنصيص:</p>textconsole.log("Ishraq");`,
    challenge: 'اطبع نص "Ishraq" باستخدام دالة الطباعة console.log()',
    startCode: 'console.log("");',
    expectedOutput: 'Ishraq'
  },
  2: {
    title: 'التعليقات في JavaScript',
    description: 'تستخدم التعليقات لشرح الكود ويتم تجاهلها عند التشغيل. للتعليق بسطر واحد نستخدم //.',
    content: `<p>اكتب تعليقك هكذا وسيتجاهله المتصفح:</p>text// هذا تعليق لن يتم تنفيذه`,
    challenge: 'اكتب تعليقاً من اختيارك ولا تطبع أي شيء في هذا المستوى.',
    startCode: '// اكتب تعليقك هنا\n',
    expectedOutput: 'لا توجد مخرجات'
  },

  // --- القسم الثاني: عالم المتغيرات المفصل ---
  3: {
    title: 'النصوص (Strings)',
    description: 'يتم تخزين النصوص باستخدام الكلمة let داخل علامات تنصيص " ".',
    content: `<p>مثال لتعريف نص وطباعته:</p>textlet name = "Ahmed";\nconsole.log(name);`,
    challenge: 'أنشئ متغيراً باسم message وقيمته "hello javascript" ثم اطبعه.',
    startCode: 'let message = "hello javascript";\nconsole.log();',
    expectedOutput: 'hello javascript'
  },
  4: {
    title: 'الأرقام الصحيحة (Integers)',
    description: 'في JavaScript، الأرقام لا تحتاج لعلامات تنصيص وتستخدم للعد والحساب.',
    content: `<p>تعريف رقم صحيح:</p>textlet age = 25;\nconsole.log(age);`,
    challenge: 'أنشئ متغيراً باسم age واجعل قيمته 25 ثم اطبعه.',
    startCode: 'let age = 25;\nconsole.log();',
    expectedOutput: '25'
  },
  5: {
    title: 'الأرقام العشرية (Float)',
    description: 'تستخدم الفاصلة (.) لتمثيل الأرقام الدقيقة.',
    content: `<p>مثال للكسور العشرية:</p>textlet height = 1.75;\nconsole.log(height);`,
    challenge: 'أنشئ متغيراً باسم height وقيمة 1.75 ثم اطبعه.',
    startCode: 'let height = 1.75;\nconsole.log();',
    expectedOutput: '1.75'
  },
  6: {
    title: 'الفرق بين الأنواع (Type Checking)',
    description: 'تذكر أن "5" نص، بينما 5 رقم. JavaScript تميز بينهما.',
    content: `<p>الجمع بين الأرقام يعطي ناتجاً حسابياً:</p>textconsole.log(5 + 5); // 10`,
    challenge: 'اطبع ناتج جمع الرقم 5 مع الرقم 5 ليظهر الناتج 10.',
    startCode: 'console.log();',
    expectedOutput: '10'
  },

  // --- القسم الثالث: العمليات الحسابية المتدرجة ---
  7: {
    title: 'الجمع والطرح',
    description: 'يمكنك إجراء العمليات الحسابية مباشرة بين المتغيرات.',
    content: `<p>عملية الجمع:</p>textlet x = 10;\nlet y = 20;\nconsole.log(x + y);`,
    challenge: 'أنشئ متغير x قيمته 10 و y قيمته 20 واطبع ناتج جمعهما.',
    startCode: 'let x = 10;\nlet y = 20;\nconsole.log();',
    expectedOutput: '30'
  },
  8: {
    title: 'الضرب والقسمة',
    description: 'نستخدم الرمز * للضرب والرمز / للقسمة.',
    content: `<p>مثال للضرب:</p>textconsole.log(4 * 5); // 20`,
    challenge: 'اطبع ناتج ضرب 4 في 5.',
    startCode: 'console.log();',
    expectedOutput: '20'
  },

  // --- القسم الرابع: اتخاذ القرارات (If) ---
  9: {
    title: 'الشروط: المقارنة البسيطة',
    description: 'نستخدم === للتحقق من التساوي التام.',
    content: `<p>إذا تحقق الشرط، سيتم تنفيذ ما بين الأقواس { }:</p>textif (a === 100) {\n  console.log("Yes");\n}`,
    challenge: 'إذا كان المتغير a يساوي 100، اطبع كلمة "Perfect"',
    startCode: 'let a = 100;\nif (a === 100) {\n  \n}',
    expectedOutput: 'Perfect'
  },
  10: {
    title: 'الشروط: Else',
    description: 'Else تنفذ الكود في حال فشل شرط if.',
    content: `<p>مثال:</p>textif (score >= 50) {\n  console.log("Pass");\n} else {\n  console.log("Fail");\n}`,
    challenge: 'أنشئ متغيراً score قيمته 40، إذا كان أقل من 50 اطبع "Failed".',
    startCode: 'let score = 40;\nif (score < 50) {\n  \n}',
    expectedOutput: 'Failed'
  },
  11: {
    title: 'الشروط: Else If',
    description: 'تستخدم لاختبار احتمالات متعددة.',
    content: `<p>تدرج الشروط:</p>textif (t > 30) { console.log("Hot"); }\nelse if (t > 15) { console.log("Warm"); }`,
    challenge: 'إذا كانت القيمة في temp تساوي 20، اطبع "Warm".',
    startCode: 'let temp = 20;\nif (temp > 30) {\n  console.log("Hot");\n} else if (temp >= 15) {\n  \n}',
    expectedOutput: 'Warm'
  },

  // --- القسم الخامس: البيانات والتكرار ---
  12: {
    title: 'المصفوفات (Arrays)',
    description: 'تخزن مجموعة عناصر، الترتيب يبدأ من الصفر [0].',
    content: `<p>الوصول للعنصر الأول:</p>textlet list = ["A", "B"];\nconsole.log(list[0]);`,
    challenge: 'أنشئ مصفوفة colors تحتوي "أحمر"، "أزرق" واطبع العنصر الثاني (أزرق).',
    startCode: 'let colors = ["أحمر", "أزرق"];\nconsole.log();',
    expectedOutput: 'أزرق'
  },
 13: {
    title: 'حلقات التكرار (For)',
    description: 'تستخدم حلقة for لتكرار الأوامر لعدد محدد من المرات. تتكون من البداية، الشرط، ومقدار الزيادة.',
    content: `
      <p>لطباعة كلمة "Hi" ثلاث مرات نستخدم:</p>
      textfor (let i = 0; i < 3; i++) {\n  console.log("Hi");\n}
    `,
    challenge: 'أكمل الكود داخل حلقة for لطباعة كلمة "JavaScript" ثلاث مرات.',
    startCode: 'for (let i = 0; i < 3; i++) {\n  // اكتب أمر الطباعة هنا\n  console.log("");\n}',
    expectedOutput: 'JavaScript\nJavaScript\nJavaScript'
  },
14: {
    title: 'حلقات التكرار (While Loop)',
    description: 'تستخدم while لتكرار الكود طالما أن الشرط لا يزال صحيحاً (true). من المهم جداً زيادة العداد داخلها وإلا لن يتوقف البرنامج أبداً!',
    content: `<p>مثال لكتابة الحلقة بشكل صحيح:</p>\ntextlet i = 0;\nwhile (i <= 3) {\n  console.log(i);\n  i++;\n}`,
    challenge: 'الكود الحالي سيستمر للأبد لأن i دائماً تساوي 1. أضف سطر الزيادة (i++) داخل الحلقة لطباعة 1، 2، 3 ثم التوقف.',
    startCode: 'let i = 1;\nwhile (i <= 3) {\n  console.log(i);\n  // اكتب هنا سطر زيادة المتغير i بمقدار 1\n\n}',
    expectedOutput: '1\n2\n3'
},
  // --- القسم السادس: معالجة الأخطاء والرياضيات المتقدمة ---
 15: {
    title: 'معالجة الأخطاء (Try & Catch)',
    description: 'في هذا الدرس، سنقوم بكتابة كود "خاطئ" عمداً داخل try لنرى كيف يقوم catch بإنقاذ البرنامج من الانهيار وطباعة رسالة بديلة.',
    content: `
      <p>لاحظ الكود التالي؛ استدعاء متغير غير موجود (مثل <strong>x</strong>) سيؤدي لخطأ:</p>
      
       try {
          console.log(x); // خطأ: x غير معرف!
       }catch (error) {
          console.log("لقد أمسكنا بالخطأ هنا");
       }
      
    `,
    challenge: 'الكود في الأسفل سيحاول طباعة متغير غير موجود (x). قم بكتابة أمر الطباعة داخل كتلة الـ catch ليطبع كلمة "Error".',
    startCode: 'try {\n  // هذا السطر خاطئ لأن x ليس له قيمة\n  console.log(x);\n} catch (error) {\n  // البرنامج سيقفز إلى هنا فوراً\n  console.log(""); \n}',
    expectedOutput: 'Error'
  },

  16: {
    title: 'الجذر التربيعي (Math.sqrt)',
    description: 'دالة لحساب الجذور الرياضية.',
    content: `Math.sqrt(64); // الناتج 8`,
    challenge: 'اطبع الجذر التربيعي للرقم 64.',
    startCode: 'console.log();',
    expectedOutput: '8'
  },
  17: {
    title: 'الثابت Math.PI',
    description: 'قيمة الثابت الرياضي Pi.',
    content: `console.log(Math.PI);`,
    challenge: 'اطبع قيمة Math.PI.',
    startCode: 'console.log();',
    expectedOutput: '3.141592653589793'
  },
  18: {
    title: 'الدوال المثلثية',
    description: 'حساب الجيب (Sin) للزوايا.',
    content: `Math.sin(0); // يطبع 0`,
    challenge: 'اطبع ناتج Math.sin(0).',
    startCode: 'console.log();',
    expectedOutput: '0'
  },
 19: {
    title: 'استبدال النصوص (String Replace)',
    description: 'دالة replace() تسمح لك بتغيير كلمة محددة داخل النص بكلمة أخرى، وهي لا تغير المتغير الأصلي بل تعيد نسخة جديدة معدلة.',
    content: `
      <p>لاستبدال كلمة "Apple" بكلمة "Orange":</p>
      textlet fruit = "I like Apple";\nlet result = fruit.replace("Apple", "Orange");\nconsole.log(result);
    `,
    challenge: 'لديك نص "Hello World"، قم باستبدال كلمة "World" بكلمة "JavaScript" ثم اطبع المتغير الناتج.',
    startCode: 'let word = "Hello World";\n// استخدم دالة replace هنا وقم بتخزين الناتج في متغير res\nlet res = \n\nconsole.log(res);',
    expectedOutput: 'Hello JavaScript'
  },
  20: {
    title: 'الأرقام العشوائية (Math.random)',
    description: 'تنتج دالة Math.random() رقماً عشوائياً بين 0 و 1. لجعله رقماً صحيحاً، نضربه في نطاق معين ونستخدم Math.floor() لتقريبه.',
    content: `
      <p>مثال لتوليد رقم عشوائي بين 1 و 10:</p>
      textlet randomNum = Math.floor(Math.random() * 10) + 1;\nconsole.log(randomNum);
    `,
    challenge: 'في هذا التحدي، وبسبب صعوبة اختبار الأرقام المتغيرة، قم بطباعة الرقم 5 مباشرة كأنه رقم عشوائي ناتج من شيفرتك.',
    startCode: '// في الواقع نكتب Math.random لكن هنا اطبع الرقم 5 فقط للاختبار\nconsole.log();',
    expectedOutput: '5'
  }
};