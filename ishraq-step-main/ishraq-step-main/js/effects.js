// متغير لتخزين حدث التثبيت
let deferredPrompt;

// الاستماع لحدث beforeinstallprompt
window.addEventListener('beforeinstallprompt', (e) => {
  // منع ظهور النافذة الافتراضية
  e.preventDefault();
  // تخزين الحدث
  deferredPrompt = e;
  // عرض زر التثبيت (اختياري)
  showInstallPrompt();
});

// دالة لعرض نافذة طلب التثبيت
function showInstallPrompt() {
  // نافذة تأكيد مخصصة
  const userChoice = confirm('هل تود تثبيت تطبيق Ishraq Step على جهازك للوصول السريع والعمل بدون إنترنت؟');
  
  if (userChoice && deferredPrompt) {
    // عرض نافذة التثبيت الأصلية
    deferredPrompt.prompt();
    
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('تم تثبيت التطبيق بنجاح!');
      } else {
        console.log('تم رفض تثبيت التطبيق');
      }
      deferredPrompt = null;
    });
  }
}

// الاستماع لحدث التثبيت الناجح
window.addEventListener('appinstalled', () => {
  console.log('تم تثبيت تطبيق Ishraq Step بنجاح!');
  // حذف متغير التثبيت بعد التثبيت الناجح
  deferredPrompt = null;
});

    // تعامل بسيط مع الأزرار (تأثيرات مؤقتة)
    document.getElementById('learnBtn').addEventListener('click', function(){
      // محاكاة انتقال - استبدل الروابط حسب حاجتك
      this.animate([
        { transform: 'translateY(0)' },
        { transform: 'translateY(-6px)' },
        { transform: 'translateY(0)' }
      ], { duration: 350, easing: 'ease-out' });
      // افتراضي: فتح صفحة دورات (اضبط href لاحقًا)
     window.location.href = "ishraq-step-cours.html";
    });

    // تحقّق من وجود العنصر قبل إضافة المستمع
    const joinBtn = document.getElementById('joinBtn');
    if (joinBtn) {
      joinBtn.addEventListener('click', function(){
        this.animate([
          { transform: 'translateY(0) scale(1)' },
          { transform: 'translateY(-4px) scale(1.02)' },
          { transform: 'translateY(0) scale(1)' }
        ], { duration: 350, easing: 'ease-out' });
        window.location.href = "https://wa.me/+201012631782?text=مرحبا%20اريد%20الانضمام%20الى%20فريق%20اشراق%20ستيب"
      });
    }

    const gropBtn = document.getElementById('grop');
    if (gropBtn) {
      gropBtn.addEventListener('click', function(){
        this.animate([
          { transform: 'translateY(0) scale(1)' },
          { transform: 'translateY(-4px) scale(1.02)' },
          { transform: 'translateY(0) scale(1)' }
        ], { duration: 350, easing: 'ease-out' });
        window.location.href = "chat/start.html"
      });
    }