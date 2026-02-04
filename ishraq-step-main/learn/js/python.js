export const python = {
  // --- القسم الأول: الأساسيات والطباعة ---
  1: {
    title: 'الطباعة والتعليقات',
    description: 'يمكن من خلالها طباعة اي نص print()  هي المسؤولة عن إظهار النتائج.',
    content: `
      print("Ishraq")
    `,
    challenge: 'اطبع نص Ishraq باستخدام دالة الطباعة print()',
    expectedOutput: 'Ishraq'
  },
  2: {
    title: 'التعليقات في بايثون',
    description: 'اكتب # قبل أي نص ليتم تجاهله من قبل المترجم. تستخدم لكتابة ملاحظات في الكود. لا تطبع اي نص',
    content: `# هذا تعليق في بايثون`,
    challenge: 'اكتب تعليقاً يوضح ولا تطبع أي شيء',
    expectedOutput: 'لا توجد مخرجات'
  },
  // --- القسم الثاني: رحلة المتغيرات المفصلة ---
  3: {
    title: 'المتغيرات النصية (Strings)',
    description: 'النصوص في بايثون توضع بين علامات تنصيص " ". تستخدم لتخزين الأسماء والكلمات.',
    content: `
       name = "Ahmed"\nprint(name)
    `,
    challenge: 'أنشئ متغيراً باسم message وقيمة "hello python" ثم اطبعه',
    expectedOutput: 'hello python'
  },
  4: {
    title: 'الأرقام الصحيحة (Integers)',
    description: 'تستخدم لتخزين الأرقام بدون فاصلة عشرية مثل العمر أو السنة. لا تحتاج لعلامات تنصيص.',
    content: `
      year = 24\nprint(year)
    `,
    challenge: 'أنشئ متغيراً باسم age واجعل قيمته 25 ثم اطبعه',
    expectedOutput: '25'
  },
  5: {
    title: 'الأرقام العشرية (Float)',
    description: 'تستخدم للحسابات الدقيقة التي تحتوي على فاصلة مثل الطول أو السعر.',
    content: `
      price = 19.99\nprint(price)
    `,
    challenge: 'أنشئ متغيراً باسم height وقيمة 1.75 ثم اطبعه',
    expectedOutput: '1.75'
  },
  6: {
    title: 'الفرق بين الأنواع (Type Checking)',
    description: 'ماذا لو وضعنا رقماً داخل علامات تنصيص؟ سيصبح نصاً وليس رقماً! بايثون تميز بين "5" و 5.',
    content: `
      x = "10" # نص\ny = 10   # رقم
    `,
    challenge: 'اطبع ناتج جمع الرقم 5 مع الرقم 5 (يجب أن يكون الناتج 10)',
    expectedOutput: '10'
  },

  // --- القسم الثالث: العمليات الحسابية المتدرجة ---
  7: {
    title: 'الجمع والطرح',
    description: 'يمكنك استخدام بايثون كآلة حاسبة بسيطة.',
    challenge: 'أنشئ متغيراً x قيمته 10 و y قيمته 20 واطبع ناتج جمعهما',
    expectedOutput: '30'
  },
  8: {
    title: 'الضرب والقسمة',
    description: 'نستخدم * للضرب و / للقسمة.',
    challenge: 'اطبع ناتج ضرب 4 في 5',
    expectedOutput: '20'
  },

  // --- القسم الرابع: اتخاذ القرارات (If) بتدرج ---
  9: {
    title: 'الشروط: المقارنة البسيطة',
    description: 'نستخدم == للتحقق مما إذا كانت القيمتان متساويتين.',
    content: `
      status = "online"\nif status == "online":\n    print("متصل")
    `,
    challenge: 'إذا كان المتغير a يساوي 100، اطبع كلمة "Perfect"',
    expectedOutput: 'Perfect'
  },
  10: {
    title: 'الشروط: Else (الاحتمال الآخر)',
    description: 'إذا لم يتحقق شرط if، يتم تنفيذ كود else.',
    content: `
      age = 15\nif age >= 18:\n    print("بالغ")\nelse:\n    print("قاصر")
    `,
    challenge: 'أنشئ متغيراً score بvalue 40، إذا كان أقل من 50 اطبع "Failed"',
    expectedOutput: 'Failed'
  },
  11: {
    title: 'الشروط: Elif (احتمالات متعددة)',
    description: 'نستخدم elif لإضافة شروط إضافية بين if و else.',
    content: `
      marks = 75\nif marks >= 90:\n    print("A")\nelif marks >= 75:\n    print("B")\nelse:\n    print("C")
    `,
    challenge: 'إذا كانت القيمة في المتغير temp أكبر من 30، اطبع "Hot"، وإذا كانت بين 15 و30 اطبع "Warm"، وإلا اطبع "Cold"',
    expectedOutput: 'Warm'
  },
 12: {
    title: 'القوائم (Lists)',
    description: 'القوائم تخزن مجموعة من العناصر في مكان واحد. يمكن أن تحتوي على نصوص أو أرقام أو حتى قوائم أخرى.',
    content: ` 
       fruits = ["تفاح", "موز", "كرز"]
       print(fruits[0])
       # يطبع التفاح
       `,
    challenge: 'أنشئ قائمة باسم colors تحتوي على "أحمر"، "أزرق"، "أخضر" ثم اطبع العنصر الثاني',
    expectedOutput: 'أزرق'
 },

  // --- القسم الخامس: التكرار ---
  13: {
    title: 'حلقات التكرار (For Loop)',
    description: 'لطباعة شيء عدة مرات بدلاً من كتابته يدوياً. نستخدم for مع range(). 3  نطبع النص ثلاث مرات.',
    content: ` 
      for i in range(3):
        print("Python")
       `,
    challenge: 'اطبع كلمة "Python" ثلاث مرات باستخدام حلقة for',
    expectedOutput: 'Python\nPython\nPython'
  },
  14: {
    title: 'حلقات التكرار (While Loop)',
    description: 'تستخدم while لتكرار الكود طالما أن الشرط صحيح (True). يجب أن ننتبه دائماً لتحديث المتغير حتى لا تستمر الحلقة للأبد!',
    content: `
      
        i = 1
        while <= 3:
          print(i)
          i = i + 1  #هذا هو السطر المطلوب لزيادة قيمة i
       
    `,
    challenge: 'أكمل الكود لطباعة الأرقام 1 و 2 و 3 باستخدام حلقة while. (قم بزيادة قيمة i داخل الحلقة)',
    startCode: 'i = 1\nwhile i <= 3:\n    print(i)\n    # قم بزيادة i هنا بمقدار 1\n    ',
    expectedOutput: '1\n2\n3'
},
15: {
    title: 'معالجة الأخطاء (Try & Except)',
    description: 'أحياناً يحدث خطأ في الكود يؤدي لتوقف البرنامج (مثل القسمة على صفر). نستخدم try لتجربة الكود، و except لتحديد ما سيحدث في حال وقوع خطأ.',
    content: `
      <p>#مثال لمنع انهيار البرنامج عند القسمة على صفر:</p>
       try:
          print(10 / 0)
       except:
          print("لا يمكن القسمة على صفر")
      
    `,
    challenge: 'قم بتعديل الكود واستخدم try و except لطباعة كلمة "Error" في حال فشل الكود الموجود بالداخل.',
    startCode: 'try:\n    # هناك خطأ هنا لأن x غير معرف\n    print(x)\nexcept:\n    # اكتب هنا دالة طباعة لكلمة Error\n    ',
    expectedOutput: 'Error'
},
16: {
    title: 'مكتبة الرياضيات (math)',
    description: 'توفر بايثون مكتبات جاهزة تحتوي على أدوات مفيدة. مكتبة math تمكنك من القيام بحسابات متقدمة مثل الجذر التربيعي (sqrt) وقيمة Pi.',
    content: `
      <p>لاستخدام المكتبة نكتب <strong>import math</strong>:</p>
             import math
        print(math.sqrt(25))  # الناتج سيكون 5.0
      
    `,
    challenge: 'استخدم مكتبة math واطبع الجذر التربيعي للرقم 64 (يجب أن يكون الناتج 8.0)',
    startCode: 'import math # اكتب الكود هنا لحساب وطباعة الجذر التربيعي لـ 64',
    expectedOutput: '8.0'
},
17: {
    title: 'الثوابت الرياضية (math.pi)',
    description: 'توفر مكتبة math ثوابت جاهزة بدقة عالية، أشهرها قيمة Pi (ط) التي تستخدم في حسابات الدوائر. قيمتها تقريباً 3.14159',
    content: `
      <p> للحصول على قيمه باي Pi نستخدم:</p>
             import math
        print(math.pi)
      
    `,
    challenge: 'استورد مكتبة math ثم اطبع قيمة الثابت pi فقط.',
    startCode: ' import math \n\n# اطبع قيمة math.pi\n',
    expectedOutput: '3.141592653589793'
},
18: {
    title: 'الدوال المثلثية (math.sin)',
    description: 'يمكنك حساب جيب الزاوية (sin) باستخدام دالة math.sin. ملاحظة: الدالة تتعامل مع الزوايا بالتقدير الدائري (Radians).',
    content: `
             import math
        # حساب sin للزاوية 0
        print(math.sin(0))
      
    `,
    challenge: 'استورد مكتبة math واطبع ناتج (math.sin(0)) ليظهر لك الصفر.',
    startCode: 'import math\n\n# اطبع هنا math.sin للرقم 0\n',
    expectedOutput: '0.0'
},
19: {
    title: 'استبدال النصوص (String Replace)',
    description: 'تستخدم دالة replace لاستبدال جزء من النص بنص آخر. هي مفيدة جداً لتعديل البيانات أو تصحيح الأخطاء داخل الجمل.',
    content: `
      <p>لاستبدال كلمة داخل نص نستخدم:</p>
             text = "I love Java"
        new_text = text.replace("Java", "Python")
        print(new_text) # سيطبع I love Python
      
    `,
    challenge: 'لديك متغير اسمه word قيمته "Hello World"، قم باستبدال كلمة "World" بكلمة "Python" ثم اطبع النتيجة.',
    startCode: 'word = "Hello World"\n# استخدم replace هنا لاستبدال World بـ Python\nresult = \n\nprint(result)',
    expectedOutput: 'Hello Python'
},
20: {
    title: 'الأرقام العشوائية (random)',
    description: 'تستخدم مكتبة random لتوليد أرقام عشوائية. دالة randint(start, end) تعطيك رقماً عشوائياً بين الرقمين اللذين تختارهما.',
    content: `
      <p>للحصول على رقم عشوائي بين 1 و 10:</p>
               import random
         number = random.randint(1, 10)
         print(number)
      
    `,
    challenge: 'اطبع رقم عشوائي من 9 الي 10 باستخدام مكتبة random ودالة randint.',
    startCode: 'import random\nx = random.randint(9 , 10) # نثبت الرقم لغرض التصحيح\n\n # اطبع الرقم العشوائي هنا\n',
    expectedOutput: '10'
}

};