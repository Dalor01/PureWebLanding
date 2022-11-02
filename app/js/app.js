import $ from 'jquery'
window.jQuery = $
window.$ = $
document.addEventListener('DOMContentLoaded', () => {
//code here
    $('.cookies-alert').slideDown(1000)
    $('.cookies-alert__btn').on('click', () => {
        $('.cookies-alert').fadeOut(1000)
    })
})
