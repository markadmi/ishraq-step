export const cpp = {
  // --- القسم الأول: الأساسيات والطباعة ---
  1: {
    title: 'الطباعة في C++',
    description: 'نستخدم std::cout للطباعة و << لتمرير النص. يجب تضمين مكتبة iostream.',
    content: `<p>الهيكل الأساسي لبرنامج C++:</p>#include &lt;iostream&gt;\nint main() {\n  std::cout << "Ishraq";\n  return 0;\n}`,
    challenge: 'اطبع نص "Ishraq" باستخدام std::cout داخل دالة main.',
    startCode: '#include <iostream>\nint main() {\n  std::cout << "";\n  return 0;\n}',
    expectedOutput: 'Ishraq'
  },
  2: {
    title: 'التعليقات في C++',
    description: 'نستخدم // للتعليق بسطر واحد، و /* */ للتعليقات الطويلة.',
    content: `// هذا تعليق في C++`,
    challenge: 'اكتب تعليقاً من اختيارك داخل الدالة الرئيسية.',
    startCode: '#include <iostream>\nint main() {\n  // اكتب تعليقك هنا\n  return 0;\n}',
    expectedOutput: 'لا توجد مخرجات'
  },

  // --- القسم الثاني: المتغيرات ---
  3: {
    title: 'النصوص (string)',
    description: 'في C++ نستخدم النوع std::string للتعامل مع النصوص.',
    content: `std::string name = "Ahmed";\nstd::cout << name;`,
    challenge: 'أنشئ متغيراً باسم message وقيمته "hello cpp" ثم اطبعه.',
    startCode: '#include <iostream>\n#include <string>\nint main() {\n  std::string message = "hello cpp";\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: 'hello cpp'
  },
  4: {
    title: 'الأرقام الصحيحة (int)',
    description: 'نستخدم int لتخزين الأرقام الصحيحة.',
    content: `int age = 25;\nstd::cout << age;`,
    challenge: 'أنشئ متغيراً باسم age قيمته 25 ثم اطبعه.',
    startCode: '#include <iostream>\nint main() {\n  int age = 25;\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: '25'
  },
  5: {
    title: 'الأرقام العشرية (double)',
    description: 'نستخدم double للأرقام التي تحتوي على فواصل عشرية.',
    content: `double height = 1.75;`,
    challenge: 'أنشئ متغيراً باسم height قيمته 1.75 ثم اطبعه.',
    startCode: '#include <iostream>\nint main() {\n  double height = 1.75;\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: '1.75'
  },

  // --- القسم الثالث: الحساب والشروط ---
  6: {
    title: 'العمليات الحسابية',
    description: 'الجمع باستخدام الرمز +.',
    content: `std::cout << 5 + 5;`,
    challenge: 'اطبع ناتج جمع 5 + 5 ليظهر الناتج 10.',
    startCode: '#include <iostream>\nint main() {\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: '10'
  },
  7: {
    title: 'الجمع بين المتغيرات',
    description: 'يمكنك جمع قيم المتغيرات وطباعتها.',
    content: `int x = 10; int y = 20;\nstd::cout << x + y;`,
    challenge: 'اطبع ناتج جمع x و y (الناتج 30).',
    startCode: '#include <iostream>\nint main() {\n  int x = 10, y = 20;\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: '30'
  },
  8: {
    title: 'الضرب والقسمة',
    description: 'نستخدم * للضرب و / للقسمة.',
     content: `
      int x = 10*2; //للضرب 10 في 2
      int y = 10/2; // للقسمه 10 على 2`, 
    challenge: 'اطبع ناتج ضرب 4 في 5.',
    startCode: '#include <iostream>\nint main() {\n  std::cout << 4 * 5;\n  return 0;\n}',
    expectedOutput: '20'
  },
 // --- القسم الرابع: اتخاذ القرارات (If) بتدرج ---
  9: {
    title: 'الشروط: المقارنة البسيطة (if)',
    description: 'نستخدم if للتحقق مما إذا كان الشرط صحيحاً.',
    content: `
      std::string status = "online";
      if (status == "online") {
        std::cout << "Connected";
      }
    `,
    challenge: 'إذا كان المتغير a يساوي 100، اطبع كلمة "Perfect".',
    startCode: '#include <iostream>\nint main() {\n  int a = 100;\n  if (a == 100) {\n    \n  }\n  return 0;\n}',
    expectedOutput: 'Perfect'
  },
  10: {
    title: 'الشروط: Else (الاحتمال الآخر)',
    description: 'إذا لم يتحقق شرط if، يتم تنفيذ كود else.',
    content: `
      int age = 15;
      if (age >= 18) {
        std::cout << "Adult";
      } else {
        std::cout << "Minor";
      }
    `,
    challenge: 'أنشئ متغيراً score بقيمة 40، إذا كان أقل من 50 اطبع "Failed".',
    startCode: '#include <iostream>\nint main() {\n  int score = 40;\n  if (score >= 50) {\n    std::cout << "Pass";\n  } else {\n    \n  }\n  return 0;\n}',
    expectedOutput: 'Failed'
  },
  11: {
    title: 'الشروط: Else If (شروط متعددة)',
    description: 'في C++ نستخدم else if لإضافة شروط إضافية.',
    content: `
      int marks = 75;
      if (marks >= 90) {
        std::cout << "A";
      } else if (marks >= 75) {
        std::cout << "B";
      } else {
        std::cout << "C";
      }
    `,
    challenge: 'لديك متغير temp يساوي 25. إذا كان أكبر من 30 اطبع Hot، وإذا كان أكبر من 15 اطبع Warm، وإلا اطبع Cold.',
    startCode: '#include <iostream>\nint main() {\n  int temp = 25;\n  if (temp > 30) {\n    std::cout << "Hot";\n  } else if (temp > 15) {\n    \n  } else {\n    std::cout << "Cold";\n  }\n  return 0;\n}',
    expectedOutput: 'Warm'
  },
  12: {
    title: 'المصفوفات (Arrays)',
    description: 'المصفوفات تخزن مجموعة عناصر من نفس النوع. (تشبه القوائم في بايثون).',
    content: `
      std::string fruits[] = {"Apple", "Banana", "Cherry"};
      std::cout << fruits[0]; // يطبع Apple
    `,
    challenge: 'أنشئ مصفوفة نصوص باسم colors تحتوي على "Red", "Blue", "Green" ثم اطبع العنصر الثاني (تذكر أن العد يبدأ من 0).',
    startCode: '#include <iostream>\n#include <string>\nint main() {\n  std::string colors[] = {"Red", "Blue", "Green"};\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: 'Blue'
  },

  // --- القسم الخامس: التكرار ---
  13: {
    title: 'حلقات التكرار (For Loop)',
    description: 'تكرار الكود لعدد محدد من المرات.',
    content: `
      for(int i = 0; i < 3; i++) {
        std::cout << "C++" << std::endl;
      }
    `,
    challenge: 'اطبع كلمة "C++" ثلاث مرات باستخدام حلقة for.',
    startCode: '#include <iostream>\nint main() {\n  for(int i=0; i < 3; i++) {\n    \n  }\n  return 0;\n}',
    expectedOutput: 'C++\nC++\nC++'
  },
  14: {
    title: 'حلقات التكرار (While Loop)',
    description: 'تستخدم while لتكرار الكود طالما الشرط محقق. يجب تحديث العداد يدوياً.',
    content: `
      int i = 1;
      while (i <= 3) {
        std::cout << i << std::endl;
        i++; // زيادة العداد
      }
    `,
    challenge: 'أكمل حلقة while لطباعة الأرقام 1 و 2 و 3 (قم بزيادة i بمقدار 1).',
    startCode: '#include <iostream>\nint main() {\n  int i = 1;\n  while (i <= 3) {\n    std::cout << i << std::endl;\n    // قم بزيادة i هنا\n  }\n  return 0;\n}',
    expectedOutput: '1\n2\n3'
  },
  15: {
    title: 'معالجة الأخطاء (Try & Catch)',
    description: 'نستخدم try لتجربة الكود و catch للإمساك بالأخطاء (Exceptions) لمنع انهيار البرنامج.',
    content: `
      try {
        throw 505; // افتراض وجود خطأ
      } catch (...) {
        std::cout << "حدث خطأ ما";
      }
    `,
    challenge: 'أكمل الكود داخل catch لطباعة كلمة "Error" عند حدوث المشكلة.',
    startCode: '#include <iostream>\nint main() {\n  try {\n    throw "Problem";\n  } catch (...) {\n    std::cout << ;\n  }\n  return 0;\n}',
    expectedOutput: 'Error'
  },
  16: {
    title: 'مكتبة الرياضيات (cmath)',
    description: 'مكتبة cmath توفر دوال رياضية مثل الجذر التربيعي (sqrt).',
    content: `
      #include <cmath>
      //...
      std::cout << sqrt(25); // الناتج 5
    `,
    challenge: 'استخدم دالة sqrt لطباعة الجذر التربيعي للرقم 64.',
    startCode: '#include <iostream>\n#include <cmath>\nint main() {\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: '8'
  },
  17: {
    title: 'الثوابت الرياضية (M_PI)',
    description: 'للحصول على قيمة Pi (ط) في C++ نستخدم الثابت M_PI الموجود في مكتبة cmath.',
    content: `
      #include <cmath>
      //...
      std::cout << M_PI;
    `,
    challenge: 'اطبع قيمة الثابت M_PI.',
    startCode: '#include <iostream>\n#include <cmath>\nint main() {\n  // اطبع M_PI هنا\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: '3.14159'
  },
  18: {
    title: 'الدوال المثلثية (sin)',
    description: 'حساب جيب الزاوية باستخدام دالة sin(). التعامل يكون بالتقدير الدائري (Radian).',
    content: `
      std::cout << sin(0); // يطبع 0
    `,
    challenge: 'اطبع ناتج sin(0).',
    startCode: '#include <iostream>\n#include <cmath>\nint main() {\n  std::cout << ;\n  return 0;\n}',
    expectedOutput: '0'
  },
  19: {
    title: 'استبدال النصوص (Replace)',
    description: 'لتعديل جزء من النص في C++ نستخدم دالة replace()، حيث نحدد مكان البداية وعدد الحروف.',
    content: `
      std::string s = "I love Java";
      // ابدأ من الحرف السابع، استبدل 4 حروف بكلمة C++
      s.replace(7, 4, "C++"); 
      std::cout << s;
    `,
    challenge: 'لديك النص "Hello World"، استبدل كلمة "World" (التي تبدأ عند المؤشر 6 وطولها 5) بكلمة "C++".',
    startCode: '#include <iostream>\n#include <string>\nint main() {\n  std::string word = "Hello World";\n  word.replace(6, 5, "C++");\n  std::cout << word;\n  return 0;\n}',
    expectedOutput: 'Hello C++'
  },
  20: {
    title: 'الأرقام العشوائية (rand)',
    description: 'نستخدم دالة rand() لتوليد أرقام عشوائية.',
    content: `
      int r = rand() % 10; // رقم عشوائي من 0 إلى 9
      std::cout << r;
    `,
    challenge: 'اطبع رقماً عشوائياً (تم تثبيته في الكود لأغراض الاختبار).',
    startCode: '#include <iostream>\n#include <cstdlib>\nint main() {\n  int x = 10; // محاكاة لرقم عشوائي\n  std::cout << x;\n  return 0;\n}',
    expectedOutput: '10'
  }
};