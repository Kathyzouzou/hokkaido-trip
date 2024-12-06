function showDay(dayNumber) {
    // 隐藏所有日程内容
    const dayContents = document.querySelectorAll('.day-content');
    dayContents.forEach(content => {
        content.classList.remove('active');
    });

    // 移除所有按钮的active类
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => {
        button.classList.remove('active');
    });

    // 显示选中的日程
    document.getElementById(`day${dayNumber}`).classList.add('active');
    
    // 添加选中按钮的active类
    document.querySelector(`.tab-btn:nth-child(${dayNumber})`).classList.add('active');
}

// 页面加载时显示第一天的行程
document.addEventListener('DOMContentLoaded', () => {
    showDay(1);
});

// 添加平滑滚动
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
}); 