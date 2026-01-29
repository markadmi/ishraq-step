export const java = {
  1: {
    title: 'الطباعة',
    description: 'تعلم كيفية طباعة النصوص في Java',
    content: `
     <p>نستخدم // لكتابة تعليق بجانب الكود حتا يتجاهلها الكمبيوتر </p>
     <p> في حاله عدم كتابه // قبل النص يعتبر الكمبيوتر ان النص كود </p>
     <p> انظر الي الكود التالي لتعرف كيف تطبع نص</p>
      <pre>
        public class Main {
          public static void main(String[] args) {
           // System.out.println تستخدم لطباعة النصوص مع سطر جديد في النهاية
           System.out.println("مرحبا"); // طباعة كلمة مرحبا
          }
        }
      </pre>
    `,
    challenge: 'اطبع الرسالة: "أنا أتعلم البرمجة"',
    expectedOutput: 'أنا أتعلم البرمجة'
  },
  2: {
    title: 'المتغيرات',
    description: 'تخزين البيانات بأنواعها المختلفة',
    content: `
      <pre>
public class Main {
    public static void main(String[] args) {
        // تعريف أنواع البيانات المختلفة في جافا
        String name = "خالد";      // تخزين نصوص (Strings)
        int score = 100;           // تخزين أعداد صحيحة (Integers)
        double pi = 3.14;          // تخزين أعداد عشرية (Floating points)
        char grade = 'A';          // تخزين حرف واحد فقط (Character)
        boolean isPassed = true;   // تخزين قيمة منطقية (صح أو خطأ)

        System.out.println(name);  // طباعة قيمة المتغير
    }
}
      </pre>
    `,
    challenge: 'أنشئ متغير x بقيمة 50 واطبعه',
    expectedOutput: '50'
  },
  3: {
    title: 'العمليات الحسابية',
    description: 'الحسابات الأساسية في جافا',
    content: `
      <pre>
public class Main {
    public static void main(String[] args) {
        int a = 10;
        int b = 5;

        int sum = a + b;      // الجمع (+)
        int diff = a - b;     // الطرح (-)
        int prod = a * b;     // الضرب (*)
        int div = a / b;      // القسمة (/)
        int mod = a % b;      // باقي القسمة (%)

        System.out.println(sum);
    }
}
      </pre>
    `,
    challenge: 'اطبع ناتج قسمة 20 على 4',
    expectedOutput: '5'
  },
  4: {
    title: 'الشروط (If Statement)',
    description: 'التحقق من صحة الشروط',
    content: `
      <pre>
public class Main {
    public static void main(String[] args) {
        int age = 18;

        if (age >= 18) {
            // ينفذ هذا الكود إذا كان الشرط صحيحاً
            System.out.println("بالغ"); 
        } else {
            // ينفذ إذا كان الشرط خاطئاً
            System.out.println("قاصر");
        }
    }
}
      </pre>
    `,
    challenge: 'إذا كان x يساوي 10 اطبع "Yes"',
    expectedOutput: 'Yes'
  },
  5: {
    title: 'الحلقات (For Loop)',
    description: 'تكرار الأوامر البرمجية',
    content: `
      <pre>
public class Main {
    public static void main(String[] args) {
        // تكرار الكود لعدد محدد من المرات
        for (int i = 1; i <= 3; i++) {
            System.out.println(i); // سيطبع 1 ثم 2 ثم 3
        }
    }
}
      </pre>
    `,
    challenge: 'اطبع الأرقام من 1 إلى 2 باستخدام حلقة for',
    expectedOutput: '1\n2'
  },
  6: {
    title: 'المصفوفات (Arrays)',
    description: 'تخزين مجموعة عناصر من نفس النوع',
    content: `
      <pre>
public class Main {
    public static void main(String[] args) {
        // المصفوفة تخزن عدة قيم في متغير واحد بحجم ثابت
        int[] numbers = {10, 20, 30}; 

        // الوصول للعناصر يبدأ من الرقم 0
        System.out.println(numbers[0]); // يطبع العنصر الأول (10)
        System.out.println(numbers.length); // يطبع طول المصفوفة (3)
    }
}
      </pre>
    `,
    challenge: 'أنشئ مصفوفة تحتوي {10, 20} واطبع العنصر الثاني',
    expectedOutput: '20'
  },
  7: {
    title: 'الدوال (Methods)',
    description: 'تنظيم الكود داخل وظائف',
    content: `
      <pre>
public class MyProgram {
    // تعريف الدالة
    static void sayHello() {
        System.out.println("Hello");
    }

    public static void main(String[] args) {
        sayHello(); // استدعاء الدالة لتنفيذها
    }
}
      </pre>
    `,
    challenge: 'أنشئ دالة باسم run تطبع "Go" واستدعها',
    expectedOutput: 'Go'
  },
  8: {
    title: 'الكلاس والكائن (OOP)',
    description: 'مقدمة في البرمجة الكائنية',
    content: `
      <pre>
class Car {
    String color = "Red"; // خاصية (Property)
}

public class Main {
    public static void main(String[] args) {
        Car myCar = new Car(); // إنشاء كائن جديد من كلاس Car
        System.out.println(myCar.color); // الوصول لخاصية الكائن
    }
}
      </pre>
    `,
    challenge: 'أنشئ كائناً واطبع قيمة الخاصية color (الناتج: Red)',
    expectedOutput: 'Red'
  },
  9: {
    title: 'الوراثة (Inheritance)',
    description: 'توريث الصفات بين الكلاسات',
    content: `
      <pre>
       class Animal {
         void eat() {
         System.out.println("Eating");
    }
}

class Dog extends Animal {
    void bark() {
      System.out.println("Woof");
    }
}

public class Main {
    public static void main(String[] args) {
        Dog dog = new Dog();
        dog.eat(); // استدعاء الدالة الموروثة
    }
}
      </pre>
    `,
    challenge: 'استدعِ الدالة الموروثة eat لطباعة "Eating"',
    expectedOutput: 'Eating'
  },
  10: {
    title: 'معالجة الأخطاء (Try-Catch)',
    description: 'منع البرنامج من الانهيار عند حدوث خطأ',
    content: `
      <pre>
public class Main {
    public static void main(String[] args) {
        try {
            int res = 10 / 0; // خطأ: لا يمكن القسمة على صفر
        } catch (Exception e) {
            // ينفذ هذا الجزء عند حدوث خطأ في بلوك try
            System.out.println("Error"); 
        } finally {
            // ينفذ دائماً سواء حدث خطأ أم لا
            System.out.println("Finished");
        }
    }
}
      </pre>
    `,
    challenge: 'اطبع كلمة "Error" داخل بلوك الـ catch',
    expectedOutput: 'Error'
  }
};
