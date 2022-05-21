$(document).ready(function() {
preloaderFadeOutTime = 3510;
function hidePreloader() {
var preloader = $('.spinner-wrapper');
preloader.fadeOut(preloaderFadeOutTime);
}hidePreloader();
});