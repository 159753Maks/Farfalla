document.querySelector('.button__block button').onclick = function () {
    document.querySelector('.page-wrapper').classList.add('active');
    document.querySelector('body').classList.add('no-overflow');
};
document.querySelector('.right2 button').onclick = function () {
    document.querySelector('.page-wrapper').classList.remove('active');
    document.querySelector('body').classList.remove('no-overflow');
};
