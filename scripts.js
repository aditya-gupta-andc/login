document.addEventListener('DOMContentLoaded', () => {
    // Animation timing
    setTimeout(() => {
        document.querySelector('.intro-container').classList.add('fade-out');
        setTimeout(() => {
            document.querySelector('.intro-container').style.display = 'none';
            document.querySelector('.login-container').style.display = 'flex';
        }, 2000); // Match this with fade-out duration
    }, 3000); // Duration for the intro animation

    const predefinedUsers = [
        { mobile: '0123456789', password: '1234' },
       // { mobile: '222', password: '456' },
       // { mobile: '333', password: '789' }
    ];

    const form = document.getElementById('loginForm');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const mobile = document.getElementById('mobile').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.getElementById('errorMessage');

        const user = predefinedUsers.find(user => user.mobile === mobile && user.password === password);
        if (user) {
            sessionStorage.setItem('userMobile', mobile);
            window.location.href = 'dashboard.html';
        } else {
            errorMessage.innerText = 'Invalid mobile number or password';
            errorMessage.style.display = 'block';
        }
    });
});
