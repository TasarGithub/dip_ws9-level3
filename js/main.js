// document.addEventListener("DOMContentLoaded", function(event){
//   // console.log ("klkl");
//   const modal = document.querySelector('.modal');
//   const modalBtn = document.querySelectorAll('[data-toggle=modal]');
//   const switchModal = () =>{
//     modal.classList.toggle('modal--visible');
//   };
//   const closeBtn = document.querySelector('.modal__close');

//   modalBtn.forEach(element => {
//     element.addEventListener('click', switchModal);
//   });
//   console.log (modal);
//   closeBtn.addEventListener('click', switchModal);
// });

// window.onload = function () {
// 	aload();
	
// };

$(document).ready(function () {

  var modal =$('.modal'),
  modalThanks =$('.modal-thanks'),
  formModal =$('#modal__form'),
  formControl =$('.control__form'),
  formFooter =$('.footer__form'),
  btnControl =$('.control__button'),
  btnFooter =$('.footer__button'),
  modalBtn = $('[data-toggle="modal"]');
  //closeBtnThanks = $('.modal-thanks__close'),
  closeBtn = $('.modal__close');


  var modalAll = document.querySelectorAll('[data-close="modal"]'),
    modaljs = document.querySelector('.modal');


  //Close modal windows
  $('[data-close="modal"]').each(function(index, item){
    //console.log('item: ', item);

    // $(item).click(function(event) {
		// 	var target = event.target;
			
		// 	console.log('target: ', target);
		// 	// event.preventDefault();
    //   //console.log('target', target); 

    //       if  ($(target).hasClass("modal--visible")) {
    //         $(target).removeClass("modal--visible");
    //       }
		// });
		
    $(document).keydown(function(event) {
      if (event.code === 'Escape' && ( $(item).hasClass("modal--visible"))) {
        $(item).removeClass("modal--visible");
      }
    });

  });

	// $('.modal__close').each(function(index, item){
		
	// 	$(item).click(function(event) {
  //     var target = event.target;
	// 		event.preventDefault();
	// 		if  ($(target).hasClass("modal--visible")) {
	// 			$(target).removeClass("modal--visible");
	// 		}

	// 	});

	// });


  modalBtn.on('click', function () {
    // if ($('div').is('#glo_vksubscribe')) {
    //   $('#glo_vksubscribe').remove();
    //   $('.modal__title').text('Оставьте заявку и наш менеджер свяжется с вами ');
    // }
    // $('#modal__form').css('display',"flex");
    // $('.modal__title').css('display',"block");
    // $('.modal__thanks-block').css('display',"none");
    // $('.modal__form').css('opacity',1);
    // $('.modal__title').css('opacity',1); 

    $('.modal__booking').addClass('modal--visible');
  });

  // closeBtn.on('click', function() {
  //   modal.removeClass('modal--visible');
  // });

  
  // closeBtnThanks.on('click', function() {
  //   modalThanks.removeClass('modal--visible');
	// });
	
  $('#close-modal__thanks--booking').click(function(event) {
		event.preventDefault();
    $('#modal__thanks--booking').removeClass('modal--visible');
	});
	
  $('#close-modal__thanks--subscribe').click(function(event) {
		event.preventDefault();
    $('#modal-thanks--subscibe').removeClass('modal--visible');
	});
	
	$('#close-modal__thanks--message').click (function(event) {
		event.preventDefault();
    $('#modal__thanks--message').removeClass('modal--visible');
  });
	
	$('#close-modal__booking').click (function(event) {
		event.preventDefault();
    $('.modal__booking').removeClass('modal--visible');
  });
  let flyInterval,
    count = 1;


  //initialize swiper when document ready
  var mySwiper = new Swiper ('.swiper-container', {
    // Optional parameters
    // direction: 'vertical',
    loop: true,
    //pagination: {
    // //   el: '.swiper-pagination',
    // //   type: 'bullets',
    // //   clickable: true,
		// // },
		keyboard: {
			enabled: true,
			onlyInViewport: true,
		},

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
		}
		
  });
  var next = $('.swiper-button-next');
  var prev = $('.swiper-button-prev');
  // //var bullets = $('.swiper-pagination');
  
  // next.css('left',prev.width() + 6 + bullets.width() + 32);
	
	// // bullets.css('left',prev.width() + 21);

  //initialize swiper when document ready
  // var mySwiperReveiwes = new Swiper ('.swiper-container.swiper-container--reviews', {
  //   // Optional parameters
  //   // direction: 'vertical',
  //   loop: true,
  //   // // pagination: {
  //   // //   el: '.swiper-pagination',
  //   // //   type: 'bullets',
  //   // //   clickable: true,
	// 	// // },
	// 	// keyboard: {
	// 	// 	//enabled: true,
	// 	// 	// onlyInViewport: true,
	// 	// },

	// 	navigation: {
	// 		nextEl: '.swiper-button--reviews-next',
	// 		prevEl: '.swiper-button--reviews-prev',
	// 	},
  // });



  //anime
  //new WOW().init();


  // Валидация форм
  //, .footer__form, .control__form

  //Замена встроенного метода проверки емейла на лучший , с проверкой точки - это замена из начинки плагина validator
  // $.validator.methods.email = function( value, element ) {
  //   return this.optional( element ) || /[A-z0-9._]+@[A-z0-9.-]+\.[a-z]+/.test( value );
  // };

  $('.modal__form').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило simple rule, converted to {required:true}
      userNameModal: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      userPhoneModal: {
        required: true,
        minlength: 17
      },
      //правило - объект
      userEmailModal: {
        required: true,
        email: true
      }


    },
    //сообщения
    messages: {
      userNameModal: {
        required: "fill in the field",
        minlength: "The name should be > 2 letters",
        maxlength: "The name should be < 15 letters"
      },
      userPhoneModal: {
        required: "fill in the field",
        minlength: "fix phone, please",
      },      
      userEmailModal: {
        required: "fill in the field, please",
        email: "fix email, please"
      }
      // modalPolicyCheckbox: {
      //   required: "fill in the field"
      // }
    },

    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('form').serialize(),
        success: function (response) {
          //console.log('response: ', response);

          //console.log($(form).serialize());
          $('form')[4].reset();
          modal.removeClass('modal--visible');
					$('#modal__thanks--booking').toggleClass('modal--visible');
          // ym(62095768,'reachGoal','sendForm');
        },
        erorr: function(response) {
          console.error('Ошибка запроса' + response);
        }
        
      });
    }
  });

  $('.form__subscribe').validate({
    errorClass: "invalid",
    errorElement: "div",
    rules: {
      // строчное правило simple rule, converted to {required:true}

      //правило - объект
      userEmailSubscribe: {
        required: true,
        email: true
      }
    },
    //сообщения
    messages: {
      userEmailSubscribe: {
        required: "fill in the field",
        email: "fix email, please"
      }

    },
    submitHandler: function(form) {
      $.ajax({
        type: "POST",
        url: "send.php",
        data: $('form').serialize(),
        success: function (response) {
          // console.log('$(form).serialize()');
					// console.log($(form).serialize());
					// console.log('$(form)[2]: ', $('form')[2]);
          // console.log('Ajax сработал. Ответ сервера: ' + response);
          $('#modal-thanks--subscibe').toggleClass('modal--visible');
          //$('.control__form').reset(); не работает, надо именно форма нужна
					$('form')[2].reset();
	
					
          //ym(62095768,'reachGoal','sendForm');
        }
      });
    }

  });


  $('.footer__form').validate({
      errorClass: "invalid",
      errorElement: "div",
      rules: {
        // строчное правило simple rule, converted to {required:true}
        userNameFooter: {
          required: true,
          minlength: 2,
          maxlength: 15
        },
        userPhoneFooter: {
          required: true,
          minlength: 17
        },
        //правило - объект
        // footerPolicyCheckbox: {
        //   required: true
        // }
      },
      //сообщения
      messages: {
        userNameFooter: {
          required: "fill in the field",
					minlength: "The name should be > 2 letters",
					maxlength: "The name should be < 15 letters"
        },
        userPhoneFooter: {
          required: "fill in the field",
          minlength: "fix phone, please",
        }      
        // footerPolicyCheckbox: {
        //   required: "fill in the field"
        // }
      },

      submitHandler: function(form) {
        $.ajax({
          type: "POST",
          url: "send.php",
          data: $('form').serialize(),
          success: function (response) {
            // console.log($(form).serialize());
            // console.log('Ajax сработал. Ответ сервера: ' + response);
						$('form')[3].reset();
						$('#modal__thanks--message').toggleClass('modal--visible');
            //$('.footer__form').reset();
            // // modal.removeClass('modal--visible');
            //modalThanks.toggleClass('modal--visible');
            //ym(62095768,'reachGoal','sendForm');
          }
        });
      }

  });




  //$('.phone').mask('0000-0000');
  // маска для телефона
  //$('[type=tel]').mask('+7(000) 000-00-00', {placeholder: "+7 (___) ___-__-__"});
  $('[type=tel]').mask('+7(000) 000-00-00');//, {placeholder: "Ваш номер телефона:"});
  
 // $('#user-phone-metering').mask('+7(000) 000-00-00', {placeholder: "Ваш телефон:"});
  
  // Яндекс карта с меткой с собственным изображением
    //перенесена в html
  ///

  //подключение YouTube
  // var player;
  // $('.video__play').on('click', function onYouTubeIframeAPIReady(){
  //   player = new YT.Player('player', {
  //     height: '100%',
  //     width: '100%',
  //     videoId: 'TvVYeLvujLk',
  //     events: {
  //       'onReady': videoPlay,
  //     }
  //   });
  // });
  // function videoPlay(event) {
  //   event.target.playVideo();
  // }

// <iframe width="560" height="315" src="https://www.youtube.com/embed/TvVYeLvujLk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>


//  function topArrow(){
//     const totop = document.querySelector('.totop'),
//       hero = document.querySelector('.hero');
 
//     totop.style.opacity = 0;
     
//     const base = hero.offsetTop;
    

//      window.addEventListener('scroll', function(){    
//       if (window.pageYOffset > base ) {
//         totop.style.opacity = 1;
//       } else {
//         totop.style.opacity = 0;
//       }
//     });
//   }
  
//   topArrow();

//   $("#totop").click(function(){
//     //Необходимо прокрутить в начало страницы
//     var curPos=$(document).scrollTop();
//     var scrollTime=curPos/1.73;
//     $("body,html").animate({"scrollTop":0},scrollTime);
//     });




  //плавная прокрутка
//ошибка var id = $(this).attr('href');
  // $('a[href^="#"]').on('click',function (e) {
  //   e.preventDefault();
  //   if ( $(this).attr("class").indexOf("totop") < 0) {
  //     var id = $(this).attr('href');
  //     var    top = $(id).offset().top;
  //     if ( $(this).attr("class").indexOf("footer__contacts") > 0){
  //     $('body,html').animate({
  //           scrollTop: top - 400
  //       }, 3000);
  //     } else {
  //       $('body,html').animate({
  //         scrollTop: top  }, 3000);
  //     }
  //   }
  // });

	// $(window).resize(function (e) {
	// 	if ($(window).width() <= 768) {
	// 		var widthSwiperCont = $("#map").width(),
	// 		widthSwiperContFixed;
	// 		widthSwiperContFixed = widthSwiperCont.toFixed();
	// 		$('.swiper-container').css("width", widthSwiperContFixed);
	// 		console.log('$(swiper-container).width()', widthSwiperCont);
	// 		console.log('$(swiper-container).width().toFixed(): ', widthSwiperContFixed);
		
	// 	}


	// });
	
	// $('.parallax-window').parallax({imageSrc: '../img/bg-subscribe.jpg'});
	// Бургер клик

		// определение элемента в поле зрения
		function elementInViewport(el){
			var bounds = el.getBoundingClientRect();
			return (
					(bounds.top + bounds.height > 0) && // Елемент ниже верхней границы
					(window.innerHeight - bounds.top > 0) && // Выше нижней
					(bounds.left + bounds.width > 0) && // Правее левой
					(window.innerWidth - bounds.left > 0)// Левее правой
			);
		}


		// document.addEventListener("scroll", (e) => {
		// 		var el = document.querySelector(".navbar-middle");
		// 		var inViewport = elementInViewport(el);
		// 		document.querySelector("#status").innerText = inViewport ? "Елемент в поле зрения" : "Елемент не в поле зрения";
		// });


	$('.navbar__burger').click(function (e) {
		// $('.user, .form__search').toggleClass('mobile-block--visible');
		var el = document.querySelector(".navbar-middle");
		var inViewport = elementInViewport(el);

		console.log('window.outerWidth: ', window.outerWidth);
		if (window.outerWidth < 768){
			
			
				$('.navbar-bottom').toggleClass('navbar-bottom--mobile-menu');
				$('.navbar__burger').toggleClass('active');
		} else {
			if (!inViewport ) {
				$('.navbar-bottom').toggleClass('navbar-burger-for-scroll');
				// $('.navbar-bottom').toggleClass('navbar__bottom--mobile-menu');
				$('.navbar__burger').toggleClass('active');
				// $("body").toggleClass("fixed");
				// $('body').toggleClass('body__lock');
			} else if ($('.navbar__burger').hasClass('active')) {
				$('.navbar__burger').toggleClass('active');
				$('.navbar-bottom').toggleClass('navbar-burger-for-scroll');
			}
	
		}
	});


//загрузка гуглкарты при клике наведении мышкой
	$('.map').click(function (e){

		$('#google-map').css('display',"block");

	});


	// Табы
	var $tabs = function (target) {
		var
			_elemTabs = (typeof target === 'string' ? document.querySelector(target) : target),
			_eventTabsShow,

			_showTab = function (tabsLinkTarget) {
				var tabsPageTarget, tabsLinkActive, tabsPageShow;
				tabsPageTarget = document.querySelector(tabsLinkTarget.getAttribute('data-href'));
				// console.log('tabsLinkTarget: ', tabsLinkTarget);
				// console.log('tabsPageTarget: ', tabsPageTarget);
				tabsLinkActive = tabsLinkTarget.parentElement.querySelector('.link__item--active');
				tabsPageShow = tabsPageTarget.parentElement.querySelector('.tabs__page--show');
				// если следующая вкладка равна активной, то завершаем работу
				if (tabsLinkTarget === tabsLinkActive) {
					return;
				}
				// удаляем классы у текущих активных элементов
				if (tabsLinkActive !== null) {
					tabsLinkActive.classList.remove('link__item--active');
				}
				if (tabsPageShow !== null) {
					tabsPageShow.classList.remove('tabs__page--show');
				}
				// добавляем классы к элементам (в завимости от выбранной вкладки)
				tabsLinkTarget.classList.add('link__item--active');
				tabsPageTarget.classList.add('tabs__page--show');
				document.dispatchEvent(_eventTabsShow);
			},
			_switchTabTo = function (tabsLinkIndex) {
				var tabsLinks = _elemTabs.querySelectorAll('.link__item');
				if (tabsLinks.length > 0) {
					if (tabsLinkIndex > tabsLinks.length) {
						tabsLinkIndex = tabsLinks.length;
					} else if (tabsLinkIndex < 1) {
						tabsLinkIndex = 1;
					}
					_showTab(tabsLinks[tabsLinkIndex - 1]);
				}
			};

		_eventTabsShow = new CustomEvent('tab.show', { detail: _elemTabs });

		_elemTabs.addEventListener('click', function (e) {
			var tabsLinkTarget = e.target.closest('.link__item');
			// console.log('e: ', e);
			// console.log('tabsLinkTarget: ', tabsLinkTarget);
			// завершаем выполнение функции, если кликнули не по ссылке
			if (!tabsLinkTarget.classList.contains('link__item')) {
				return;
			}
			// отменяем стандартное действие
			e.preventDefault();
			_showTab(tabsLinkTarget);
		});

		return {
			showTab: function (target) {
				_showTab(target);
			},
			switchTabTo: function (index) {
				_switchTabTo(index);
			}
		}

	};

	$tabs('.tabs');

	$('#card-1').click(function (e) {
		$('#favorit-1').toggleClass('favorit-red');
	});

	$('#card-2').click(function (e) {
		$('#favorit-2').toggleClass('favorit-red');
	});

	$('#card-3').click(function (e) {
		$('#favorit-3').toggleClass('favorit-red');
	});

	$('#card-4').click(function (e) {
		$('#favorit-4').toggleClass('favorit-red');
	});

	$('#card-5').click(function (e) {
		$('#favorit-5').toggleClass('favorit-red');
	});

	$('#card-6').click(function (e) {
		$('#favorit-6').toggleClass('favorit-red');
	});



});

