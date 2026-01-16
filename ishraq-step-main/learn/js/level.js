export const levelData = {
  python: {
    name: '🐍 Python',
    levels: [
      { id: 1, title: 'الطباعة', description: 'تعلم كيفية طباعة الرسائل والبيانات', topics: 'print(), السلاسل النصية' },
      { id: 2, title: 'المتغيرات', description: 'تعرف على المتغيرات وأنواع البيانات', topics: 'int, str, float, bool' },
      { id: 3, title: 'العمليات الحسابية', description: 'إجراء العمليات الحسابية الأساسية', topics: '+, -, *, /, //, %' },
      { id: 4, title: 'الشروط', description: 'استخدام if و else و elif', topics: 'if, else, elif, and, or' },
      { id: 5, title: 'الحلقات', description: 'تكرار الأكواد مع while و for', topics: 'while, for, break, continue' },
      { id: 6, title: 'الدوال', description: 'كتابة وتنفيذ الدوال الخاصة بك', topics: 'def, return, parameters' },
      { id: 7, title: 'القوائم (Lists)', description: 'تخزين وإدارة مجموعات البيانات', topics: 'append, pop, slice, sort' },
      { id: 8, title: 'القواميس (Dictionaries)', description: 'العمل مع البيانات بصيغة مفتاح وقيمة', topics: 'keys, values, items' },
      { id: 9, title: 'التعامل مع الملفات', description: 'قراءة وكتابة الملفات الخارجية', topics: 'open, read, write, close' },
      { id: 10, title: 'البرمجة الكائنية (OOP)', description: 'تعلم الكلاسات والكائنات', topics: 'class, self, __init__' }
    ]
  },
  javascript: {
    name: '⚡ JavaScript',
    levels: [
      { id: 1, title: 'الطباعة', description: 'تعلم كيفية طباعة البيانات', topics: 'console.log(), document.write()' },
      { id: 2, title: 'المتغيرات', description: 'تعرف على var و let و const', topics: 'var, let, const, types' },
      { id: 3, title: 'العمليات الحسابية', description: 'إجراء العمليات الحسابية', topics: '+, -, *, /, %, **' },
      { id: 4, title: 'الشروط', description: 'استخدام if و else', topics: 'if, else, switch, ternary' },
      { id: 5, title: 'الحلقات', description: 'تكرار الأكواد', topics: 'for, while, do-while' },
      { id: 6, title: 'الدوال', description: 'كتابة الدوال والـ Arrow Functions', topics: 'function, arrow, parameters' },
      { id: 7, title: 'المصفوفات (Arrays)', description: 'إدارة البيانات المتسلسلة', topics: 'push, map, filter, reduce' },
      { id: 8, title: 'الأجسام (Objects)', description: 'التعامل مع JSON والبيانات المهيكلة', topics: 'properties, methods, this' },
      { id: 9, title: 'التعامل مع DOM', description: 'تعديل عناصر HTML برمجياً', topics: 'querySelector, innerHTML, events' },
      { id: 10, title: 'البرمجة المتزامنة', description: 'التعامل مع الوعود والطلبات', topics: 'Promises, async, await, fetch' }
    ]
  },
  java: {
    name: '☕ Java',
    levels: [
      { id: 1, title: 'الطباعة', description: 'تعلم System.out.println()', topics: 'println, print, printf' },
      { id: 2, title: 'المتغيرات', description: 'أنواع البيانات في Java', topics: 'int, String, double, boolean' },
      { id: 3, title: 'العمليات الحسابية', description: 'العمليات الحسابية الأساسية', topics: '+, -, *, /, %' },
      { id: 4, title: 'الشروط', description: 'استخدام if و else', topics: 'if, else, switch' },
      { id: 5, title: 'الحلقات', description: 'تكرار الأكواد', topics: 'for, while, do-while' },
      { id: 6, title: 'الدوال', description: 'كتابة الدوال والـ Methods', topics: 'method, return, parameters' },
      { id: 7, title: 'المصفوفات (Arrays)', description: 'تخزين البيانات الثابتة', topics: 'length, index, 2D arrays' },
      { id: 8, title: 'كلاسات و كائنات', description: 'أساسيات البرمجة الكائنية', topics: 'public, private, constructor' },
      { id: 9, title: 'الوراثة (Inheritance)', description: 'تطوير الكلاسات بالوراثة', topics: 'extends, super, override' },
      { id: 10, title: 'معالجة الأخطاء', description: 'التعامل مع الاستثناءات', topics: 'try, catch, finally, throw' }
    ]
  },
  cpp: {
    name: '⚙️ C++',
    levels: [
      { id: 1, title: 'الطباعة', description: 'تعلم cout و printf', topics: 'cout, printf, iostream' },
      { id: 2, title: 'المتغيرات', description: 'أنواع البيانات في C++', topics: 'int, string, double, char' },
      { id: 3, title: 'العمليات الحسابية', description: 'العمليات الحسابية', topics: '+, -, *, /, %' },
      { id: 4, title: 'الشروط', description: 'استخدام if و else', topics: 'if, else, switch' },
      { id: 5, title: 'الحلقات', description: 'تكرار الأكواد', topics: 'for, while, do-while' },
      { id: 6, title: 'الدوال', description: 'كتابة الدوال', topics: 'function, return, parameters' },
      { id: 7, title: 'المصفوفات و Strings', description: 'التعامل مع النصوص والمصفوفات', topics: 'char arrays, string library' },
      { id: 8, title: 'المؤشرات (Pointers)', description: 'التعامل مع عناوين الذاكرة', topics: '*, &, nullptr' },
      { id: 9, title: 'إدارة الذاكرة', description: 'تخصيص الذاكرة يدوياً', topics: 'new, delete, heap vs stack' },
      { id: 10, title: 'كلاسات وهياكل البيانات', description: 'مقدمة في الـ OOP والهياكل', topics: 'class, struct, access modifiers' }
    ]
  }

};
