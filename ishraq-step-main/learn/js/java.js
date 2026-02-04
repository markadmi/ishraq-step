export const java = {
  // --- القسم الأول: الأساسيات والطباعة ---
  1: {
    title: 'الطباعة والتعليقات',
    description: 'في Java نستخدم دالة System.out.println() لعرض المخرجات، ويجب كتابتها داخل دالة main.',
    content: `<p>للطباعة في جافا، نضع النص داخل علامات تنصيص وهيكل البرنامج الأساسي:</p>textSystem.out.println("Ishraq");`,
    challenge: 'اطبع نص "Ishraq" باستخدام System.out.println() داخل دالة main.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println("");\n  }\n}',
    expectedOutput: 'Ishraq'
  },
  2: {
    title: 'التعليقات في Java',
    description: 'تستخدم التعليقات لشرح الكود ويتم تجاهلها. للتعليق بسطر واحد نستخدم // ولأكثر من سطر /* */.',
    content: `<p>مثال للتعليق:</p>text// هذا تعليق لن يظهر في النتائج`,
    challenge: 'اكتب تعليقاً من اختيارك داخل دالة main ولا تطبع شيئاً.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    // اكتب تعليقك هنا\n  }\n}',
    expectedOutput: 'لا توجد مخرجات'
  },

  // --- القسم الثاني: عالم المتغيرات المفصل ---
  3: {
    title: 'النصوص (Strings)',
    description: 'يتم تخزين النصوص باستخدام النوع String (S كبيرة).',
    content: `<p>تعريف نص وطباعته:</p>textString name = "Ahmed";\nSystem.out.println(name);`,
    challenge: 'أنشئ متغيراً باسم message وقيمته "hello java" ثم اطبعه.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    String message = "hello java";\n    System.out.println();\n  }\n}',
    expectedOutput: 'hello java'
  },
  4: {
    title: 'الأرقام الصحيحة (Integers)',
    description: 'نستخدم النوع int لتخزين الأرقام الصحيحة.',
    content: `<p>تعريف رقم صحيح:</p>textint age = 25;\nSystem.out.println(age);`,
    challenge: 'أنشئ متغيراً باسم age قيمته 25 ثم اطبعه.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    int age = 25;\n    System.out.println();\n  }\n}',
    expectedOutput: '25'
  },
  5: {
    title: 'الأرقام العشرية (Double)',
    description: 'نستخدم النوع double لتمثيل الأرقام التي تحتوي على فاصلة عشرية.',
    content: `<p>مثال للأرقام العشرية:</p>textdouble height = 1.75;\nSystem.out.println(height);`,
    challenge: 'أنشئ متغيراً باسم height وقيمته 1.75 ثم اطبعه.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    double height = 1.75;\n    System.out.println();\n  }\n}',
    expectedOutput: '1.75'
  },
  6: {
    title: 'الفرق بين الأنواع',
    description: 'Java لغة صارمة؛ الرقم 5 يختلف تماماً عن النص "5".',
    content: `<p>الجمع الحسابي في جافا:</p>textSystem.out.println(5 + 5);`,
    challenge: 'اطبع ناتج جمع الرقم 5 مع الرقم 5 ليظهر الناتج 10.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println();\n  }\n}',
    expectedOutput: '10'
  },

  // --- القسم الثالث: العمليات الحسابية المتدرجة ---
  7: {
    title: 'الجمع والطرح',
    description: 'يمكن إجراء العمليات الحسابية بين المتغيرات من نوع int.',
    content: `<p>عملية الجمع:</p>textint x = 10; int y = 20;\nSystem.out.println(x + y);`,
    challenge: 'أنشئ متغير x قيمته 10 و y قيمته 20 واطبع ناتج جمعهما.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    int x = 10;\n    int y = 20;\n    System.out.println();\n  }\n}',
    expectedOutput: '30'
  },
  8: {
    title: 'الضرب والقسمة',
    description: 'الرمز * للضرب والرمز / للقسمة.',
    content: `<p>مثال للضرب:</p>textSystem.out.println(4 * 5);`,
    challenge: 'اطبع ناتج ضرب 4 في 5.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println();\n  }\n}',
    expectedOutput: '20'
  },

  // --- القسم الرابع: اتخاذ القرارات (If) ---
  9: {
    title: 'الشروط: المقارنة البسيطة',
    description: 'نستخدم == للتحقق من التساوي في الأرقام.',
    content: `<p>إذا تحقق الشرط يتم تنفيذ الكود:</p>textif (a == 100) {\n  System.out.println("Yes");\n}`,
    challenge: 'إذا كان المتغير a يساوي 100، اطبع كلمة "Perfect".',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    int a = 100;\n    if (a == 100) {\n      \n    }\n  }\n}',
    expectedOutput: 'Perfect'
  },
  10: {
    title: 'الشروط: Else',
    description: 'تنفذ كتلة else إذا كان شرط if خطأ.',
    content: `if (score >= 50) { ... } else { ... }`,
    challenge: 'أنشئ متغيراً score قيمته 40، إذا كان أقل من 50 اطبع "Failed".',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    int score = 40;\n    if (score < 50) {\n      \n    }\n  }\n}',
    expectedOutput: 'Failed'
  },
  11: {
    title: 'الشروط: Else If',
    description: 'تستخدم لاختبار شروط إضافية مرتبة.',
    content: `if (t > 30) { ... } else if (t > 15) { ... }`,
    challenge: 'إذا كانت القيمة في temp تساوي 20، اطبع "Warm".',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    int temp = 20;\n    if (temp > 30) {\n      System.out.println("Hot");\n    } else if (temp >= 15) {\n      \n    }\n  }\n}',
    expectedOutput: 'Warm'
  },

  // --- القسم الخامس: البيانات والتكرار ---
  12: {
    title: 'المصفوفات (Arrays)',
    description: 'المصفوفة تخزن عناصر من نفس النوع.',
    content: `<p>الوصول للعنصر الأول:</p>textString[] list = {"A", "B"};\nSystem.out.println(list[0]);`,
    challenge: 'أنشئ مصفوفة نصوص باسم colors تحتوي "red"، "blue" واطبع "blue".',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    String[] colors = {"red", "blue"};\n    System.out.println();\n  }\n}',
    expectedOutput: 'blue'
  },
  13: {
    title: 'حلقات التكرار (For)',
    description: 'تكرار الكود لعدد محدد من المرات.',
    content: `for (int i = 0; i != 3; i++) {\n  System.out.println("Hi");\n}`,
    challenge: 'اطبع كلمة "java" ثلاث مرات باستخدام حلقة for.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    for (int i = 0; i != 3; i++) {\n      System.out.println("");\n    }\n  }\n}',
    expectedOutput: 'java\njava\nJava'
  },
  14: {
    title: 'حلقات التكرار (While Loop)',
    description: 'تستمر طالما أن الشرط محقق. سنستخدم الترميز لتجنب مشاكل العرض.',
    content: `<p>مثال للحلقة:</p>textint i = 1;\nwhile (i <= 3) {\n  System.out.println(i);\n  i++;\n}`,
    challenge: 'أضف سطر الزيادة (i++) داخل حلقة while لطباعة 1، 2، 3 ثم التوقف.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    int i = 1;\n    while (i <= 3) {\n      System.out.println(i);\n      // زد قيمة i هنا\n    }\n  }\n}',
    expectedOutput: '1\n2\n3'
  },

  // --- القسم السادس: معالجة الأخطاء والرياضيات المتقدمة ---
  15: {
    title: 'معالجة الأخطاء (Try & Catch)',
    description: 'تستخدم try و catch لمنع انهيار البرنامج عند حدوث خطأ.',
    content: `try { ... } catch (Exception e) { ... }`,
    challenge: 'داخل كتلة catch، اطبع كلمة "Error" عند حدوث خطأ.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    try {\n      int x = 10 / 0;\n    } catch (Exception e) {\n      \n    }\n  }\n}',
    expectedOutput: 'Error'
  },
  16: {
    title: 'الجذر التربيعي (Math.sqrt)',
    description: 'دالة رياضية من فئة Math.',
    content: `Math.sqrt(64); // الناتج 8.0`,
    challenge: 'اطبع الجذر التربيعي للرقم 64.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println(Math.sqrt(64));\n  }\n}',
    expectedOutput: '8.0'
  },
  17: {
    title: 'الثابت Math.PI',
    description: 'قيمة ط (Pi) في الرياضيات.',
    content: `System.out.println(Math.PI);`,
    challenge: 'اطبع قيمة Math.PI.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println();\n  }\n}',
    expectedOutput: '3.141592653589793'
  },
  18: {
    title: 'الدوال المثلثية',
    description: 'حساب الجيب (Sin) باستخدام Java.',
    content: `Math.sin(0);`,
    challenge: 'اطبع ناتج Math.sin(0).',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println();\n  }\n}',
    expectedOutput: '0.0'
  },
  19: {
    title: 'استبدال النصوص (Replace)',
    description: 'تستخدم دالة replace لاستبدال الأجزاء النصية.',
    content: `str.replace("Old", "New");`,
    challenge: 'استبدل World بـ Java في نص "Hello World" واطبعه.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    String word = "Hello World";\n    String res = word.replace("World", "Java");\n    System.out.println(res);\n  }\n}',
    expectedOutput: 'Hello Java'
  },
  20: {
    title: 'الأرقام العشوائية',
    description: 'استخدام Math.random() لتوليد أرقام.',
    content: `<p>تنتج قيمة بين 0 و 1.</p>`,
    challenge: 'اطبع الرقم 5 مباشرة كاختبار نهائي لنجاحك في مسار Java.',
    startCode: 'public class Main {\n  public static void main(String[] args) {\n    System.out.println(5);\n  }\n}',
    expectedOutput: '5'
  }
};