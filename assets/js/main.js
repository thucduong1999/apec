//Concept
document.getElementById('Concept').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'block';
    document.querySelector('.item-stock').style.display = 'none';
    document.querySelector('.item-mkt').style.display = 'none';
    document.querySelector('.item-manager').style.display = 'none';
    document.querySelector('.item-landing').style.display = 'none';
    document.querySelector('.item-it').style.display = 'none';
    document.querySelector('.item-business').style.display = 'none';
    document.querySelector('.item-building').style.display = 'none';
    document.querySelector('.item-bo').style.display = 'none';
}

document.querySelector('.item-concept .item-inner-remove').onclick = function() {
    document.querySelector('.item-concept').style.display = 'none';
}

//Stock
document.getElementById('Chung_khoan').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'none';
    document.querySelector('.item-stock').style.display = 'block';
    document.querySelector('.item-mkt').style.display = 'none';
    document.querySelector('.item-manager').style.display = 'none';
    document.querySelector('.item-landing').style.display = 'none';
    document.querySelector('.item-it').style.display = 'none';
    document.querySelector('.item-business').style.display = 'none';
    document.querySelector('.item-building').style.display = 'none';
    document.querySelector('.item-bo').style.display = 'none';
}

document.querySelector('.item-stock .item-inner-remove').onclick = function() {
    document.querySelector('.item-stock').style.display = 'none';
}

//MKT
document.getElementById('marketing').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'none';
    document.querySelector('.item-stock').style.display = 'none';
    document.querySelector('.item-mkt').style.display = 'block';
    document.querySelector('.item-manager').style.display = 'none';
    document.querySelector('.item-landing').style.display = 'none';
    document.querySelector('.item-it').style.display = 'none';
    document.querySelector('.item-business').style.display = 'none';
    document.querySelector('.item-building').style.display = 'none';
    document.querySelector('.item-bo').style.display = 'none';
}

document.querySelector('.item-mkt .item-inner-remove').onclick = function() {
    document.querySelector('.item-mkt').style.display = 'none';
}

//Manager
document.getElementById('Khach_san').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'none';
    document.querySelector('.item-stock').style.display = 'none';
    document.querySelector('.item-mkt').style.display = 'none';
    document.querySelector('.item-manager').style.display = 'block';
    document.querySelector('.item-landing').style.display = 'none';
    document.querySelector('.item-it').style.display = 'none';
    document.querySelector('.item-business').style.display = 'none';
    document.querySelector('.item-building').style.display = 'none';
    document.querySelector('.item-bo').style.display = 'none';
}

document.querySelector('.item-manager .item-inner-remove').onclick = function() {
    document.querySelector('.item-manager').style.display = 'none';
}

//Landing
document.getElementById('Chua_khai_pha').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'none';
    document.querySelector('.item-stock').style.display = 'none';
    document.querySelector('.item-mkt').style.display = 'none';
    document.querySelector('.item-manager').style.display = 'none';
    document.querySelector('.item-landing').style.display = 'block';
    document.querySelector('.item-it').style.display = 'none';
    document.querySelector('.item-business').style.display = 'none';
    document.querySelector('.item-building').style.display = 'none';
    document.querySelector('.item-bo').style.display = 'none';
}

document.querySelector('.item-landing .item-inner-remove').onclick = function() {
    document.querySelector('.item-landing').style.display = 'none';
}

//IT
document.getElementById('IT').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'none';
    document.querySelector('.item-stock').style.display = 'none';
    document.querySelector('.item-mkt').style.display = 'none';
    document.querySelector('.item-manager').style.display = 'none';
    document.querySelector('.item-landing').style.display = 'none';
    document.querySelector('.item-it').style.display = 'block';
    document.querySelector('.item-business').style.display = 'none';
    document.querySelector('.item-building').style.display = 'none';
    document.querySelector('.item-bo').style.display = 'none';
}

document.querySelector('.item-it .item-inner-remove').onclick = function() {
    document.querySelector('.item-it').style.display = 'none';
}

//Business
document.getElementById('Kinh_doanh').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'none';
    document.querySelector('.item-stock').style.display = 'none';
    document.querySelector('.item-mkt').style.display = 'none';
    document.querySelector('.item-manager').style.display = 'none';
    document.querySelector('.item-landing').style.display = 'none';
    document.querySelector('.item-it').style.display = 'none';
    document.querySelector('.item-business').style.display = 'block';
    document.querySelector('.item-building').style.display = 'none';
    document.querySelector('.item-bo').style.display = 'none';
}

document.querySelector('.item-business .item-inner-remove').onclick = function() {
    document.querySelector('.item-business').style.display = 'none';
}

//Building
document.getElementById('Xay_dung').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'none';
    document.querySelector('.item-stock').style.display = 'none';
    document.querySelector('.item-mkt').style.display = 'none';
    document.querySelector('.item-manager').style.display = 'none';
    document.querySelector('.item-landing').style.display = 'none';
    document.querySelector('.item-it').style.display = 'none';
    document.querySelector('.item-business').style.display = 'none';
    document.querySelector('.item-building').style.display = 'block';
    document.querySelector('.item-bo').style.display = 'none';
}

document.querySelector('.item-building .item-inner-remove').onclick = function() {
    document.querySelector('.item-building').style.display = 'none';
}

//BO
document.getElementById('BO').onmouseover = function() {
    document.querySelector('.item-concept').style.display = 'none';
    document.querySelector('.item-stock').style.display = 'none';
    document.querySelector('.item-mkt').style.display = 'none';
    document.querySelector('.item-manager').style.display = 'none';
    document.querySelector('.item-landing').style.display = 'none';
    document.querySelector('.item-it').style.display = 'none';
    document.querySelector('.item-business').style.display = 'none';
    document.querySelector('.item-building').style.display = 'none';
    document.querySelector('.item-bo').style.display = 'block';
}

document.querySelector('.item-bo .item-inner-remove').onclick = function() {
    document.querySelector('.item-bo').style.display = 'none';
}

