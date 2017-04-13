$(document).ready(function() {
       var upButton = document.createElement('div');
upButton.classList.add('upButton');
upButton.innerHTML= '▲';
window.addEventListener('scroll', function() {
    if(window.pageYOffset >= document.documentElement.clientHeight + 50) {
        upButton.innerHTML= '▲';
        document.body.appendChild(upButton);
        upButton.onclick = function(){
            var a = window.pageYOffset;
            window.scrollTo(0, 0);
            upButton.remove();
            }
        }
    } ) 

    
    
    
   $('.menu').on('click', chooseMenu);
    $('.name, .profession').on('click', chooseMenu);
    
    function chooseMenu(event) {
        var target = event.target;
        if(target.tagName == 'A') {
            target = target.parentElement;
        }
    };
    
   $('.menu-buttons').on('click', toggleMenu);
    function toggleMenu(event) {
        var target = event.target;
        if(target.tagName == 'svg') {
            target = target.parentElement;
        } else if(target.tagName == 'line') {
            target = target.parentElement.parentElement;
        }
        if(target.classList.contains('open-menu') == true) {
            openMenu();
            return;
        } else if(target.classList.contains('close-menu') == true) {
            closeMenu();
            return;
        }
    }
    
    
    function openMenu() {
        
        $('.colomn-body').addClass('fallBody').removeClass('riseBody');
        $('.colomn-menu').addClass('openMenu').removeClass('hidden').removeClass('closeMenu');
        
            $('.close-menu').removeClass('closeIconMove');
            $('.open-menu').removeClass('closeIconMove').addClass('openIconMove');
            setTimeout(function() {
                $('.close-menu').removeClass('hidden'); $('.open-menu').addClass('hidden');  
            }, 1000);
    };
    function closeMenu() {
        $('.colomn-body').addClass('riseBody').removeClass('fallBody');
        $('.colomn-menu').addClass('closeMenu');
        
            $('.close-menu').addClass('closeIconMove');
            $('.open-menu').removeClass('openIconMove');
            setTimeout(function() {
                $('.close-menu').addClass('hidden'); $('.open-menu').removeClass('hidden'); 
                $('.colomn-menu').addClass('hidden').removeClass('openMenu');
            }, 1000);
    };

    
    
    $('.icon-mail').on('click', copyEmail);
    function copyEmail() {
        var emailLink = 'ann.yevlakova@gmail.com';
   
      window.prompt ("Чтобы скопировать текст в буфер обмена, нажмите Ctrl+C и Enter", emailLink);
}
  
});



