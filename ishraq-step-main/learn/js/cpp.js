export const cpp = {
  1: {
    title: 'الطباعة',
    description: 'تعلم كيفية استخدام cout لطباعة البيانات',
    content: `
      <pre>
#include <iostream>
using namespace std;

int main() {
    // cout تستخدم لطباعة النصوص
    cout << "مرحبا بك";
    return 0;
}
      </pre>
    `,
    challenge: 'اطبع الرسالة: "أنا أتعلم البرمجة"',
    expectedOutput: 'أنا أتعلم البرمجة'
  },
  2: {
    title: 'المتغيرات',
    description: 'تخزين البيانات باستخدام أنواع مختلفة',
    content: `
      <pre>
#include <iostream>
#include <string>
using namespace std;

int main() {
    // تحديد نوع المتغير مهم في C++
    int x = 5;           // تخزين أعداد صحيحة
    string name = "Ali"; // تخزين نصوص
    cout << x;           // طباعة المتغير
    return 0;
}
      </pre>
    `,
    challenge: 'أنشئ متغير age بقيمة 25 واطبعه',
    expectedOutput: '25'
  },
  3: {
    title: 'العمليات الحسابية',
    description: 'إجراء الحسابات الأساسية',
    content: `
      <pre>
#include <iostream>
using namespace std;

int main() {
    // العمليات الحسابية: +, -, *, /, %
    int sum = 10 + 20;
    cout << sum; // طباعة الناتج
    return 0;
}
      </pre>
    `,
    challenge: 'اطبع ناتج ضرب 6 في 7',
    expectedOutput: '42'
  },
  4: {
    title: 'مدخلات المستخدم',
    description: 'استخدام cin لاستقبال البيانات',
    content: `
      <pre>
#include <iostream>
using namespace std;

int main() {
    int num;
    // cin تأخذ قيمة من المستخدم
    cin >> num;
    cout << num;
    return 0;
}
      </pre>
    `,
    challenge: 'استخدم cin لاستقبال رقم واطبعه (افترض الإدخال 100)',
    expectedOutput: '100'
  },
  5: {
    title: 'الشروط (If)',
    description: 'اتخاذ القرارات البرمجية',
    content: `
      <pre>
#include <iostream>
using namespace std;

int main() {
    int x = 10;
    // تنفيذ الكود إذا كان الشرط صحيحاً
    if (x > 5) {
        cout << "كبير";
    }
    return 0;
}
      </pre>
    `,
    challenge: 'إذا كان x يساوي 10 اطبع "Yes"',
    expectedOutput: 'Yes'
  },
  6: {
    title: 'الحلقات (Loops)',
    description: 'تكرار الكود باستخدام for',
    content: `
      <pre>
#include <iostream>
using namespace std;

int main() {
    // حلقة for: البداية; الشرط; الزيادة
    for(int i = 1; i <= 3; i++) {
        cout << i << " ";
    }
    return 0;
}
      </pre>
    `,
    challenge: 'اطبع الأرقام من 1 إلى 3 باستخدام for (بينهم مسافة)',
    expectedOutput: '1 2 3 '
  },
  7: {
    title: 'المصفوفات (Arrays)',
    description: 'تخزين عناصر متعددة من نفس النوع',
    content: `
      <pre>
#include <iostream>
using namespace std;

int main() {
    // المصفوفة تبدأ من الفهرس 0
    int nums[] = {10, 20, 30};
    cout << nums[1]; // طباعة العنصر الثاني
    return 0;
}
      </pre>
    `,
    challenge: 'أنشئ مصفوفة {5, 15} واطبع العنصر الأول',
    expectedOutput: '5'
  },
  8: {
    title: 'الدوال (Functions)',
    description: 'تنظيم الكود في كتل قابلة للاستدعاء',
    content: `
      <pre>
#include <iostream>
using namespace std;

// تعريف الدالة
void greet() {
    cout << "Hello";
}

int main() {
    // استدعاء الدالة
    greet();
    return 0;
}
      </pre>
    `,
    challenge: 'أنشئ دالة myFunc تطبع "C++" واستدعها',
    expectedOutput: 'C++'
  },
  9: {
    title: 'المؤشرات (Pointers)',
    description: 'التعامل مع عناوين الذاكرة',
    content: `
      <pre>
#include <iostream>
using namespace std;

int main() {
    int x = 10;
    int* ptr = &x; // المؤشر يخزن عنوان x
    cout << *ptr;  // طباعة قيمة x باستخدام المؤشر
    return 0;
}
      </pre>
    `,
    challenge: 'اطبع قيمة المتغير x باستخدام المؤشر الخاص به ptr',
    expectedOutput: '10'
  },
  10: {
    title: 'الكلاسات (Classes)',
    description: 'أساس البرمجة الكائنية OOP',
    content: `
      <pre>
#include <iostream>
using namespace std;

// تعريف الكلاس
class MyClass {
  public:
    void msg() {
        cout << "Done";
    }
};

int main() {
    MyClass obj;
    obj.msg(); // استدعاء الدالة داخل الكلاس
    return 0;
}
      </pre>
    `,
    challenge: 'استدعِ الدالة داخل الكلاس لطباعة "Done"',
    expectedOutput: 'Done'
  }
};
