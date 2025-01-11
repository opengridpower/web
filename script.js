// 移动端导航菜单功能
document.addEventListener('DOMContentLoaded', function() {
  // 获取元素
  const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
  const nav = document.querySelector('nav ul');
  const body = document.body;

  // 切换导航菜单
  if (mobileNavToggle && nav) {
    mobileNavToggle.addEventListener('click', function() {
      const isOpen = nav.classList.toggle('active');
      this.setAttribute('aria-expanded', isOpen);
      body.classList.toggle('nav-open', isOpen);
    });

    // 点击菜单外区域关闭菜单
    document.addEventListener('click', function(e) {
      if (!nav.contains(e.target) && !mobileNavToggle.contains(e.target)) {
        nav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('nav-open');
      }
    });

    // 防止页面跳转时菜单保持打开状态
    nav.addEventListener('click', function(e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
        body.classList.remove('nav-open');
      }
    });
  }

  // 表单提交处理
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      if (!data.name || !data.email || !data.message) {
        alert('请填写所有必填项');
        return;
      }

      console.log('表单数据:', data);
      alert('感谢您的留言！我们会尽快与您联系。');
      form.reset();
    });
  }

  // 为导航链接添加active类
  const currentPage = window.location.pathname.split('/').pop();
  const navLinks = document.querySelectorAll('nav a');
  
  navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
      link.classList.add('active');
    }
  });

  // 添加简单的交互效果
  const sections = document.querySelectorAll('section');
  
  sections.forEach(section => {
    section.addEventListener('mouseenter', () => {
      section.style.transform = 'scale(1.02)';
      section.style.transition = 'transform 0.3s ease';
    });
    
    section.addEventListener('mouseleave', () => {
      section.style.transform = 'scale(1)';
    });
  });

  // 平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
