document.querySelector('.page-wrapper2 button').onclick=function() {
    document.querySelector('.page-wrapper').classList.add('active');
};
document.querySelector('.right2 button').onclick=function() {
    document.querySelector('.page-wrapper').classList.remove('active');
};