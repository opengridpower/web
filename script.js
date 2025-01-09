// 页面加载完成后执行// 表单提交处理
document.addEventListener('DOMContentLoaded', function() {
  const form = document.querySelector('.contact-form form');
  
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      
      // 获取表单数据
      const formData = new FormData(form);
      const data = {};
      formData.forEach((value, key) => {
        data[key] = value;
      });

      // 简单验证
      if (!data.name || !data.email || !data.message) {
        alert('请填写所有必填项');
        return;
      }

      // 模拟提交
      console.log('表单数据:', data);
      alert('感谢您的留言！我们会尽快与您联系。');
      form.reset();
    });
  }
});
document.addEventListener('DOMContentLoaded', function() {
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
});
