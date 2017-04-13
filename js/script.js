$(document).ready(function($) {
    
    //portfolio
    var $bigImg = $('<div class="bigImg hidden"></div>');
    var $imgPhone = $('<div class="imgPhone hidden"></div>');
    //$bigImg.height(window.screen.height*0.9 + 'px');
    $('.portfolio-conteiner img').on('click', showImg);
    $bigImg.appendTo('.colomn-body');
    $imgPhone.appendTo('.colomn-body');
    
    function showImg() {
        var $this = $(this);
        $bigImg.removeClass('hidden').html('<img src=' + $this.attr('src') +' style="width:auto; max-width:100%; height:1000; max-height=auto;"/>');
        $imgPhone.removeClass('hidden');
        $bigImg.on('click', hideImg);
        function hideImg() {
            $bigImg.addClass('hidden').html(''); 
            $imgPhone.addClass('hidden');
            
        }
    }
    window.addEventListener('scroll', function() {
        var min = window.pageYOffset;
        var max = min + document.documentElement.clientHeight;
        var $imgs = $('.portfolio-conteiner img');
        $imgs.each(function(i, elem) {
            var elemBottom = $(elem).height() + $(elem).offset().top;
            var elemTop = $(elem).offset().top;
            
            if(elemTop > min && elemTop < max || elemBottom > min && elemBottom < max) {
                if($(elem).data('src') != undefined)
                $(elem).attr('src', $(elem).data('src'));
            }
            
        })
    });
    
    
    
    
    
    
    
    
    
    //blog
    var $postField = $("<div class='postField'></div>");
    var $postBox = $("<div class='postBox'></div>");
    $postBox.html("<img class='img'><div class='post'></div><div class='close-menu'><svg width='15px' height='15px'>      <line id='close1' x1='0' y1='0' x2='15' y2='15' stroke='#690930' stroke-width='2'/><line id='close2' x1='0' y1='15' x2='15' y2='0' stroke='#690930' stroke-width='2'/></svg></div>");
    
    
    
     $('.avatar').on('click', showBlogPost);

    function showBlogPost(event) {
        $('.blog-container').append($postField);
        $('.blog-container').append($postBox);
        $('.img').attr('src', event.target.getAttribute('src'));
       $('.post').html("<p>В рубрике aboutmakeupangelo - популярные патчи для глаз The Secret Key Gold Racoony Hydro Gel Eye & Spot Patch.Прежде чем проанализировать их состав, давайте немного поговори про кожу век и темные круги под глазами. Ни для кого не секрет, что кожа вокруг век тоньше, чем остальная кожа на лице. Она фактически не имеет сальных желез, что делает кожу вокруг век более сухой и уязвимой. А хорошо развитые мимические мышцы достаточно быстро создают морщинки вокруг глаз (тонкая, более сухая кожа не отличается хорошей эластичностью, отсюда и потребность в отдельном уходе за кожей вокруг век).<br/> Темные круги под глазами – это следствие застоя крови в капиллярах. Кожа гораздо тоньше, поэтому эти застои и видны. Существует несколько «способов» борьбы с темными кругами. Самый сложный в современном мире – это хороший сон, правильное питание и здоровье организма в целом (как следствие – это как минимум хорошая работа капилляров, которые не дают крови застаиваться). Все остальные способы – это то или иное косметическое воздействие. Это непосредственное сужение капилляров холодом, после сужающего воздействия капилляр расширяется и застоявшаяся кровь «выталкивается». А так же применение различным косметических активов, которые имеют разностороннее действие – будь то усиление прочности капилляра, или активы, которые «заряжают» энергией клетки кожи, усиливая метаболизм, или помощь в «усилении» самой кожи вокруг глаз и многие другие приемы и хитрости.<br/> Основу структуры The Secret Key Gold Racoony Hydro Gel Eye & Spot Patch составляют Carrageenan и Guar Gum - водорастворимые натуральные полимеры, которые будут давать гелевую структуру. Так же в составе имеются пигменты, которые будут придавать продукту привлекательный золотой вид (Mica, Tin Oxide, Yellow Iron Oxid (CI 774921), Titanium Dioxide), подчеркивая саму маркетинговую идею с коллоидным золотом. Активная составляющая этих патчей достаточна богата. Давайте разбираться по порядку. В первых рядах состава стоят два компонента – Glycerin и Amorphophallus Konjac Root Powder. Относительно первого все предельно понятно – самый распространенный увлажнитель для кожи. Второй компонент является полностью натуральным, и у него несколько функций – с функциональной точки зрения он помогает поддержать гелевую структуру, а с биологической точки зрения – этот ингредиент является хорошим увлажнителем.<p/><div class='ya-share2' data-services='vkontakte,facebook,gplus,twitter,viber' data-size='s'></div>");
        $('.close-menu').on('click', function(event) {
        var target = event.target;
        if(target.tagName == 'svg') {
            target = target.parentElement;
        } else if(target.tagName == 'line') {
            target = target.parentElement.parentElement;
        }
        $postField.remove();
        $postBox.remove();
        $('.post').remove();
       $('.img').attr('src','');
        
    });
   };
    /*$('.heart').on('click', counter);
    var count = 0;
    function counter() {
       return count++; 
    }*/
    
   
    
    
    //about me
    var $aboutMe = $("<div class='boxAboutMe hidden'> </div>");
        $aboutMe.html('<p> Существует несколько «способов» борьбы с темными кругами. Самый сложный в современном мире – это хороший сон, правильное питание и здоровье организма в целом (как следствие – это как минимум хорошая работа капилляров, которые не дают крови застаиваться).<br/> Все остальные способы – это то или иное косметическое воздействие. Это непосредственное сужение капилляров холодом, после сужающего воздействия капилляр расширяется и застоявшаяся кровь «выталкивается». А так же применение различным косметических активов, которые имеют разностороннее действие – будь то усиление прочности капилляра, или активы, которые «заряжают» энергией клетки кожи, усиливая метаболизм, или помощь в «усилении» самой кожи вокруг глаз и многие другие приемы и хитрости.</p>');
    $('.aboutMe-conteiner').after($aboutMe);
    /*$('.main, .boxAboutMe').hover(showAboutMe, hideAboutMe);
    function showAboutMe() {
        $aboutMe.removeClass('hidden');
    }
    function hideAboutMe() {
        $aboutMe.addClass('hidden');
    }*/
    
    
    
    
    
    
    //forma
    var $note = $('<div></div>');
    $note.addClass('note hidden');
    $('.message').after($note);
    var arr = [];
    var $letterField = $("<div class='letterField hidden'></div>");
    var $letter = $("<div class='letter hidden'><div/>");
    $('#forma').before($letterField);
    $('#forma').before($letter);
    
    
    $('.button').on('click', showLetter);
    $('.correct').on('click', correctMessage);
    $(".submit").on('click', spentLetter);
                    
    function spentLetter() {
          
        var dataString ={
            name: $(':input[name="user"]').val(),
            phone: $(':input[name="phone"]').val(),
            email:$(':input[name="email"]').val(),
            message: $(':input[name="message"]').val(),
        } ;
        $.ajax({
            url: 'mail.php',
            data: dataString,
            type: "POST",
            dataType: 'json'
        });
           
    //$.post('mail.php',dataString,'json');
    //$forma.reset();
        //alert('Спасибо, Ваше сообщение отправлено');
        $letter.addClass('hidden');
        $letterField.addClass('hidden');
        $('.correct, .submit').addClass('hidden');
        arr.length = 0;
           $('.valid').each(function(i, elem) {
            var element = $(elem).val('');
        });
        

  var div = document.createElement('div');
  div.className = "alert alert-success";
  div.innerHTML = "Спасибо, Ваше сообщение отправлено!";

  document.body.appendChild(div);
/* и пропадает через 1 c*/
  setTimeout(function() {
    div.parentNode.removeChild(div);
  }, 3000);
    
        
    }
                        
                         
    
    
   
function showLetter() {
        $note.addClass('hidden');
        $note.text('');
        
        if($('.phone').val() == '' || $('.email').val() == '') {
            $note.removeClass('hidden');
            $note.text('Please, fill all required fields');
            return;
        }
       
       
        $('.valid').each(function(i, elem) {
            var element = $(elem).val();
            arr.push(element);
        });
        
        $letterField.removeClass('hidden');
        $letter.removeClass('hidden');
        $('.letter').html("<p>Message:<br/>" + arr[3] + ".<br/><br/><br/> Pleas, conect with me with phone (" + arr[1] + ") or email (" + arr[2] + ').<br/><br/> Best regards, ' + arr[0] + ".<p/>");
        $('.correct, .submit').removeClass('hidden');
    
     $('.icon-mail').on('click', copyEmail);
    function copyEmail() {
        var emailLink = 'ann.yevlakova@gmail.com';
   
      window.prompt ("Чтобы скопировать текст в буфер обмена, нажмите Ctrl+C и Enter", emailLink);
}
};
    function correctMessage() {
        $letter.addClass('hidden');
        $letterField.addClass('hidden');
        $('.correct, .submit').addClass('hidden');
        arr.length = 0;
    };
    

    

});