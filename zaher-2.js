$(function () {
  // إضافة واجهة الغلاف والأزرار بتصميم محسن
  $(`<div class="cover-container">
    <img src="https://jmrr.life/sico/1745769546196.gif" class="cover-image" alt="غلاف">

    <div class="button-row">
      <a href="#" class="nav-btn audio-btn">
        <i class="fa fa-microphone"></i>
        <span>الصوتي</span>
      </a> 
      <a href="#" class="nav-btn main-btn jump-button">
        <i class="fa fa-fire"></i>
        <span>جمر</span>
      </a>
      <a href="#" class="nav-btn mobile-btn">
        <i class="fa fa-mobile-alt"></i>
        <span>للجوال</span>
      </a> 
      <a href="#" class="nav-btn chat-btn">
        <i class="fa fa-comments"></i>
        <span>شات</span>
      </a> 
    </div>

    <a class="welcome-button" href="https://jmrr.life/">
      <div class="welcome-icon">🌟</div>
      <div class="welcome-text">حياكم الله في شات "جمر" الصوتي</div>
      <div class="welcome-icon">🌟</div>
    </a>
  </div>`).insertBefore('.nav-tabs');

  // زر القرآن الكريم مع تحسينات تفاعلية
  $(`<div class="quran-container">
    <button id="quranButton" class="quran-button">
      <i class="quran-icon">📖</i>
      <span class="quran-text">استمع للقرآن الكريم</span>
    </button>
    <div id="quranPlayer" class="quran-player">
      <audio id="quranAudio" controls loop>
        <source src="https://h.top4top.io/m_1595scph70.mp3" type="audio/mpeg">
        متصفحك لا يدعم تشغيل الصوت.
      </audio>
    </div>
  </div>`).insertBefore('label.nosel.ninr.fl.uzr.label.label-primary');

  // تشغيل وإيقاف القرآن مع تأثيرات انتقالية محسنة
  $('#quranButton').click(function () {
    const player = $('#quranPlayer');
    const audio = $('#quranAudio').get(0);
    const button = $(this);
    
    if (player.hasClass('active')) {
      player.removeClass('active');
      button.removeClass('playing');
      setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
      }, 300);
    } else {
      player.addClass('active');
      button.addClass('playing');
      setTimeout(() => {
        audio.play();
      }, 300);
    }
  });

  // إضافة تأثير النقر على الأزرار
  $('.nav-btn, .welcome-button').on('mousedown touchstart', function() {
    $(this).addClass('btn-active');
  });
  
  $(document).on('mouseup touchend', function() {
    $('.nav-btn, .welcome-button').removeClass('btn-active');
  });

  // جميع الستايلات المحسنة
  $(`<style>
    * { 
      margin: 0; 
      padding: 0; 
      box-sizing: border-box; 
    }
    
    body, html { 
      font-family: 'jazeera', sans-serif;
      scroll-behavior: smooth;
    }

    /* تحسين حاوية الغلاف */
    .cover-container {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      max-width: 100%;
      padding: 0 5px;
      margin-bottom: 10px;
    }

    /* تحسين صورة الغلاف - تعديل العرض والارتفاع */
    .cover-image {
      width: 100%;
      max-width: 100%;
      height: auto;
      min-height: 120px;
      object-fit: cover;
      border: none !important;
      background-color: transparent !important;
      border-radius: 12px;
      margin-bottom: 10px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.08);
      transition: transform 0.5s ease;
    }
    
    .cover-image:hover {
      transform: scale(1.02);
    }

    /* تحسين صف الأزرار */
    .button-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      max-width: 100%;
      margin: 0 0 10px 0;
      gap: 8px;
    }

    /* تصميم أزرار التنقل */
    .nav-btn {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      padding: 10px 5px;
      background: linear-gradient(145deg, #f8f9fa, #e9ecef);
      color: #495057;
      font-weight: bold;
      text-decoration: none;
      font-family: 'jazeera', FontAwesome;
      border-radius: 12px;
      box-shadow: 0 2px 6px rgba(0,0,0,0.05), 
                  inset 1px 1px 1px rgba(255,255,255,0.8);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
      border: 1px solid rgba(0,0,0,0.05);
    }
    
    .nav-btn:before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(rgba(255,255,255,0.1), rgba(255,255,255,0.05));
      opacity: 0;
      transition: opacity 0.3s ease;
    }
    
    .nav-btn:hover:before {
      opacity: 1;
    }
    
    .nav-btn i {
      font-size: 16px;
      margin-bottom: 3px;
    }
    
    .nav-btn span {
      font-size: 13px;
    }

    .nav-btn:hover {
      transform: translateY(-3px);
      box-shadow: 0 4px 10px rgba(0,0,0,0.1), 
                  inset 1px 1px 1px rgba(255,255,255,0.8);
      color: #212529;
    }
    
    .btn-active {
      transform: scale(0.95) !important;
      box-shadow: 0 1px 3px rgba(0,0,0,0.1), 
                  inset 1px 1px 1px rgba(255,255,255,0.5) !important;
    }

    /* تخصيص زر جمر الرئيسي */
    .main-btn {
      background: linear-gradient(145deg, #ff9a9e, #fad0c4);
      color: #7d3b3b;
    }
    
    .main-btn:hover {
      background: linear-gradient(145deg, #fad0c4, #ff9a9e);
      color: #6a2e2e;
    }
    
    /* تخصيص زر الصوتي */
    .audio-btn {
      background: linear-gradient(145deg, #a1c4fd, #c2e9fb);
      color: #2c5282;
    }
    
    .audio-btn:hover {
      color: #1a365d;
    }
    
    /* تخصيص زر الجوال */
    .mobile-btn {
      background: linear-gradient(145deg, #d4fc79, #96e6a1);
      color: #2f6b39;
    }
    
    .mobile-btn:hover {
      color: #22543d;
    }
    
    /* تخصيص زر الشات */
    .chat-btn {
      background: linear-gradient(145deg, #e2b0ff, #9f44d3);
      color: #553c9a;
    }
    
    .chat-btn:hover {
      color: #44337a;
    }

    /* تحسين حركة القفز */
    .jump-button {
      animation: jump 2s ease-in-out infinite;
    }

    /* تحسين زر الترحيب */
    .welcome-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      margin-top: 3px;
      padding: 10px 20px;
      font-size: 15px;
      font-weight: bold;
      color: #fff;
      border: none;
      border-radius: 30px;
      text-decoration: none;
      font-family: 'jazeera', FontAwesome;
      background: linear-gradient(135deg, #ff758c, #a18cd1, #ff758c);
      background-size: 200% 200%;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
      transition: all 0.3s ease-in-out;
      position: relative;
      overflow: hidden;
      animation: gradientShift 5s ease infinite;
      width: 100%;
      max-width: 100%;
    }
    
    .welcome-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 6px 15px rgba(0,0,0,0.2);
    }
    
    .welcome-button:after {
      content: '';
      position: absolute;
      top: -50%;
      left: -50%;
      width: 200%;
      height: 200%;
      background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
      opacity: 0;
      transform: scale(0.5);
      transition: transform 0.5s ease, opacity 0.5s ease;
    }
    
    .welcome-button:hover:after {
      opacity: 1;
      transform: scale(1);
    }
    
    .welcome-icon {
      display: inline-flex;
      animation: pulse 2s infinite ease-in-out;
      font-size: 14px;
    }
    
    .welcome-text {
      position: relative;
      z-index: 1;
      font-size: 15px;
    }

    /* تحسين حاوية القرآن */
    .quran-container {
      text-align: center;
      margin: 10px auto;
      max-width: 100%;
      width: 100%;
      padding: 0 5px;
    }

    /* تحسين زر القرآن */
    .quran-button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: 100%;
      background: linear-gradient(to right, #00c9ff, #92fe9d);
      color: #1a4731;
      padding: 10px 15px;
      font-size: 15px;
      border-radius: 12px;
      border: none;
      cursor: pointer;
      font-weight: bold;
      font-family: 'jazeera', FontAwesome;
      box-shadow: 0 3px 10px rgba(0,0,0,0.1);
      transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
    }
    
    .quran-button:before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(90deg, 
                  rgba(255,255,255,0) 0%, 
                  rgba(255,255,255,0.3) 50%, 
                  rgba(255,255,255,0) 100%);
      transition: left 0.7s ease;
    }
    
    .quran-button:hover:before {
      left: 100%;
    }
    
    .quran-button:hover {
      transform: translateY(-3px);
      box-shadow: 0 5px 15px rgba(0,0,0,0.15);
    }
    
    .quran-button.playing {
      background: linear-gradient(to right, #92fe9d, #00c9ff);
    }
    
    .quran-icon {
      font-size: 18px;
      display: inline-flex;
      animation: rotate 10s linear infinite;
    }
    
    .quran-text {
      font-size: 15px;
    }

    /* تحسين مشغل القرآن */
    .quran-player {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.5s ease, padding 0.5s ease, margin 0.5s ease;
      margin: 0;
      padding: 0;
      border-radius: 12px;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
    }
    
    .quran-player.active {
      max-height: 80px;
      margin-top: 10px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      border: 1px solid rgba(255, 255, 255, 0.2);
    }
    
    .quran-player audio {
      width: 100%;
      border-radius: 8px;
      box-shadow: 0 3px 8px rgba(0,0,0,0.1);
    }

    /* تصميم بسيط جداً لـ pmsgc */
    .pmsgc {
      background-color: #ffffff;
      border-radius: 8px;
      padding: 10px 12px;
      margin: 8px 0;
      font-family: 'jazeera', FontAwesome;
      font-size: 14px;
      color: #333;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
      border: 1px solid #e0e0e0;
    }

    /* تحسين الحركات والتأثيرات */
    @keyframes jump {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-5px); }
    }
    
    @keyframes pulse {
      0%, 100% { transform: scale(1); }
      50% { transform: scale(1.2); }
    }
    
    @keyframes rotate {
      0% { transform: rotate(0deg); }
      100% { transform: rotate(360deg); }
    }
    
    @keyframes gradientShift {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
    
    /* تحسينات للأجهزة المحمولة - تصغير حجم الأزرار بشكل كبير */
    @media (max-width: 768px) {
      .button-row {
        flex-wrap: wrap;
        gap: 5px;
      }
      
      .nav-btn {
        flex: 1 0 calc(25% - 4px); /* تعديل حجم الأزرار على الهاتف */
        padding: 5px 2px;
        min-height: 40px;
        margin-bottom: 0;
        border-radius: 8px;
      }
      
      .nav-btn i {
        font-size: 14px;
        margin-bottom: 2px;
      }
      
      .nav-btn span {
        font-size: 10px;
      }
      
      .welcome-button {
        padding: 8px 12px;
        font-size: 12px;
        margin-top: 5px;
        border-radius: 20px;
      }
      
      .welcome-text {
        font-size: 12px;
      }
      
      .welcome-icon {
        font-size: 12px;
      }
      
      .quran-button {
        padding: 8px 12px;
        font-size: 12px;
        border-radius: 8px;
      }
      
      .quran-icon {
        font-size: 14px;
      }
      
      .quran-text {
        font-size: 12px;
      }
      
      .cover-image {
        min-height: 100px;
      }
      
      .pmsgc {
        padding: 8px 10px;
        font-size: 13px;
      }
    }
    
    /* تحسينات إضافية للشاشات الصغيرة جداً */
    @media (max-width: 480px) {
      .button-row {
        gap: 4px;
      }
      
      .nav-btn {
        padding: 4px 2px;
        min-height: 35px;
        border-radius: 6px;
      }
      
      .nav-btn i {
        font-size: 12px;
        margin-bottom: 1px;
      }
      
      .nav-btn span {
        font-size: 9px;
      }
      
      .welcome-button {
        padding: 6px 10px;
        font-size: 11px;
        border-radius: 15px;
        gap: 5px;
      }
      
      .welcome-icon {
        font-size: 10px;
      }
      
      .quran-button {
        padding: 6px 10px;
        font-size: 11px;
        border-radius: 6px;
      }
      
      .quran-icon {
        font-size: 12px;
      }
      
      .quran-text {
        font-size: 11px;
      }
      
      .cover-image {
        min-height: 80px;
      }
      
      .pmsgc {
        padding: 8px 10px;
        font-size: 12px;
      }
    }
    
    /* تحسينات للشاشات الصغيرة جداً جداً */
    @media (max-width: 360px) {
      .nav-btn {
        padding: 3px 1px;
        min-height: 30px;
      }
      
      .nav-btn i {
        font-size: 11px;
        margin-bottom: 1px;
      }
      
      .nav-btn span {
        font-size: 8px;
      }
      
      .welcome-button {
        padding: 5px 8px;
        font-size: 10px;
      }
      
      .quran-button {
        padding: 5px 8px;
        font-size: 10px;
      }
    }
  </style>`).appendTo('head');
});
