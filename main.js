function checkBirthday() {
    const name = document.getElementById('name').value;
    const birthday = new Date(document.getElementById('birthday').value);
    const today = new Date();

    const message = document.getElementById('message');

    if (birthday.getDate() === today.getDate() && birthday.getMonth() === today.getMonth()) {
        message.textContent = `Chúc mừng sinh nhật, ${name}!`;
        message.style.color = 'green';
    } else {
        message.textContent = `Hôm nay không phải là sinh nhật của bạn, ${name}.`;
        message.style.color = 'red';
    }
}
