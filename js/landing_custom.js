$(document).ready(function(){

    // ========== 해상도 분기 ========== //
    if(matchMedia("screen and (max-width:1299px)").matches){
        media1299();
    }
    if(matchMedia("screen and (max-width:767px)").matches){
        media767();
    }
    if(matchMedia("screen and (max-width:549px)").matches){
        media549();
    }
    // 휴대폰에서는 아래의 addListener만으로는 작동 안하더라.. 그래서 둘다 넣어줌.

    const media_moBig = matchMedia("screen and (max-width:1299px)");
    const media_moMid = matchMedia("screen and (max-width:767px)");
    const media_moSm = matchMedia("screen and (max-width:549px)");

    media_moBig.addListener(() => { media1299(); });
    media_moMid.addListener(() => { media767(); });
    media_moSm.addListener(() => { media549(); });


    // ===== 내비게이션 ===== //
    // --- (와이드버전 on 효과)
    $('.h_wide nav ul li').on('click', function(){
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
    });
    // --- (모바일버전 메뉴 열기 닫기)
    let clicknum = 0;
    $('.hambtn').click(function(){
        if(clicknum == 0){
            $('.hambtn img').attr('src', 'images/xbtn.png');
            $('.menubar').stop().animate({'marginTop' : 0});
            clicknum++;
        }else{
            $('.hambtn img').attr('src', 'images/hambtn.png');
            $('.menubar').stop().animate({'marginTop' : -300});
            clicknum = 0;
        }
    });
    // 메뉴 클릭시 원상복귀
    $('.menubar a').click(function(){
        $('.hambtn img').attr('src', 'images/hambtn.png');
        $('.menubar').stop().animate({'marginTop' : -300});
        clicknum = 0;
    });


    // ===== malihu 스크롤바 ===== //
    $('.mhscroll').mCustomScrollbar({ 
        theme: "rounded-dark", // 테마
        mouseWheelPixels : 300, // 마우스휠 속도
    });  

   
    // ===== 해상도 768 이상 malihu 스크롤 이벤트 ===== //
    // --- (메뉴 클릭시)
    $('.h_wide .m_webpage').on('click', function(){
        $('.mhscroll').mCustomScrollbar('scrollTo',$('.webpage'));
    });
    $('.h_wide .m_concept').on('click', function(){
        $('.mhscroll').mCustomScrollbar('scrollTo',$('.concept'));
    });
    $('.h_wide .m_feature').on('click', function(){
        $('.mhscroll').mCustomScrollbar('scrollTo',$('.feature'));
    });
    $('.h_wide .m_details').on('click', function(){
        $('.mhscroll').mCustomScrollbar('scrollTo',$('.details'));
    });
    // --- (작업내용 버튼 클릭시)
    $('.mhscroll .btn2').on('click', function(){
        $('.mhscroll').mCustomScrollbar('scrollTo',$('.details'));
    });



    // ===== 해상도 767 ~550 스크롤 이벤트 ===== //
    //  $('html, body').animate({scrollTop: ($(this.hash).offset().top)}, 300);
    // this.hash 사용해서 해시태그 위치로 이동 가능

    // --- (메뉴 클릭시)
    function scroll767(){
        /* 
        $('.m_webpage').on('click',function(e){
        e.preventDefault();
        let pos = 0;
        $('main').stop().animate({scrollTop : pos}, 500);
        });
        $('.m_concept').on('click',function(e){
            e.preventDefault();
            let pos = $('.noscroll .concept').offset().top;
            $('main').stop().animate({scrollTop : pos}, 500);
        });
        $('.m_feature').on('click',function(e){
            e.preventDefault();
            let pos = $('.noscroll .feature').offset().top;
            $('main').stop().animate({scrollTop : pos}, 500);
        });
        $('.m_details').on('click',function(e){
            e.preventDefault();
            let pos = $('.noscroll .details').offset().top;
            $('main').stop().animate({scrollTop : pos}, 500);
        });
        */
        // 클릭문 안에서 pos를 구하면 내부에서 pos가 자꾸 변함..
        
        let $posname =$('.noscroll .content_box >div');
        let posArr=[];
        for(var i=0; i<$posname.length; i++){
            posArr[i]=$posname.eq(i).offset().top-110; // 헤더 높이 110px
        }
        $('.h_wide nav li').click(function(e){
            e.preventDefault();
            var i=$(this).index();
            $('main').stop().animate({'scrollTop': posArr[i]}, 500);
        });
    }
    // --- (작업내용 버튼 클릭시)
    function btn2_scroll767(){
        let pos = $('.noscroll .content_box >div').eq(3).offset().top-110;
        $('.noscroll .btn2').on('click', function(e){
            e.preventDefault();
            $('main').stop().animate({'scrollTop': pos}, 500);
        });
    }



    // ===== 해상도 549 이하 스크롤 이벤트 ===== //
    // --- (메뉴 클릭시)
    function scroll549(){
        // console.log('aaa');
        let $posname =$('.noscroll549 .content_box >div');
        let posArr=[];
        for(var i=0; i<$posname.length; i++){
            posArr[i]=$posname.eq(i).offset().top-50; // 헤더 높이 50px
        }
        $('.h_mobile nav li').click(function(e){
            e.preventDefault();
            var i=$(this).index();
            // $('main').stop().animate({'scrollTop': posArr[i]}, 500); // 휴대폰에서 작동 안함
            $('main').scrollTop(posArr[i]);
            // console.log(posArr[i]);
        });
    }
    // --- (작업내용 버튼 클릭시)
    function btn2_scroll549(){
        let pos = $('.noscroll549 .content_box >div').eq(3).offset().top-50;
        $('.noscroll549 .btn2').on('click', function(e){
            e.preventDefault();
            // $('main').stop().animate({'scrollTop': pos}, 500);
            $('main').scrollTop(pos);
        });
    }








    /* ---------- 해상도별로 실행할 함수 ---------- */
    function media1299(){

    }

    function media767(){
        scroll767();
        btn2_scroll767();
    }
    
    function media549(){
        scroll549();
        btn2_scroll549();
    }



}); //ready end