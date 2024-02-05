$(document).ready(function(){
    

    // ========== 해상도 분기 ========== //
    if(matchMedia("screen and (min-width: 1280px)").matches){
        media1280();
    }else if(matchMedia("screen and (min-width: 768px) and (max-width: 1279px)").matches){
        media768();
    }else if(matchMedia("screen and (min-width: 550px) and (max-width: 767px)").matches){
        media550();
    }else if(matchMedia("screen and (max-width: 549px)").matches){
        media_min();
    }
    // 휴대폰에서는 아래의 addListener만으로는 작동 안하더라.. 그래서 둘다 넣어줌.
    
    const media_pc = matchMedia("screen and (min-width: 1280px)");
    const media_ta = matchMedia("screen and (min-width: 768px) and (max-width: 1279px)");
    const media_mo1 = matchMedia("screen and (min-width: 550px) and (max-width: 767px)");
    const media_mo2 = matchMedia("screen and (max-width: 549px)");

    media_pc.addListener((a) => { media1280(); });
    media_ta.addListener((a) => { media768(); });
    media_mo1.addListener((a) => { media550(); });
    media_mo2.addListener((a) => { media_min(); });

    
    // ========== 메인메뉴 ========== //
    // --- (함수 : 클릭시 이동할 위치 조절)
    function menuLinkPos(mar){
        $('.m_who a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sec_who').offset().top - mar;
            $(window).scrollTop(pos);
        });
        $('.m_focus a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sec_focus').offset().top - mar;
            $(window).scrollTop(pos);
        });
        $('.m_works a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sec_works').offset().top - mar;
            $(window).scrollTop(pos);
        });
        $('.works2023 a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sec_works_2023').offset().top - mar;
            $(window).scrollTop(pos);
        });
        $('.works2022 a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sec_works_2022').offset().top - mar;
            $(window).scrollTop(pos);
        });
        $('.m_process a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sec_pro').offset().top - mar;
            $(window).scrollTop(pos);
        });
        $('.pro_wf a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sec_pro').offset().top - mar;
            $(window).scrollTop(pos);
        });
        $('.pro_sa a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sample').offset().top - mar;
            $(window).scrollTop(pos);
        });
        $('.m_other a').on('click.adjpos',function(e){
            e.preventDefault();
            let pos = $('#sec_other').offset().top - mar;
            $(window).scrollTop(pos);
        });
    }
    // --- (함수 : 기존 위치조절 해제)
    function noLinkPos(){
        $(document).unbind('.adjpos');
    }
    // --- (함수 : 모바일 메뉴버튼)
    function mobMenuCtrl(){
        // 열기 닫기
        $('.mobile_nav .btn_open').click(function(){
            $('.mobile_nav .navi_bg').stop().animate({'marginLeft' : '0'}, 500);
        });
        $('.mobile_nav .btn_close').click(function(){
            $('.mobile_nav .navi_bg').stop().animate({'marginLeft' : '-110%'}, 500);
        });
        // 메인메뉴 클릭시 닫기
        $('.mobile_nav .mainmenu>li').click(function(){
            $('.mobile_nav .navi_bg').stop().animate({'marginLeft' : '-110%'}, 500);
        });
    }



    // ========== toTop 버튼 ========== //
    // --- (클릭시)
    $('.totop').click(function(){
        $('html, body').stop().animate({'scrollTop' : '0'}, 1000);
    });
    // --- (특정 스크롤 위치부터 보이기)
    $(window).on('scroll', function(){
        let curScroll = $(window).scrollTop();
        if(curScroll > 1000){
            $('.totop').stop().animate({'marginBottom' : 0}, 500, 'easeOutBack');
        }else{
            $('.totop').stop().animate({'marginBottom' : -300}, 500, 'easeOutBack');
        }
    });

    // ========== other ========== //
    // --- (선택버튼 작동)
    $('.oth_menu>li').click(function(){
        $(this).siblings().removeClass('on');
        $(this).addClass('on');
        let ot_Idx = $(this).index();
        $('ul.oth_imgbox>li').eq(ot_Idx).siblings().fadeOut(500);
        $('ul.oth_imgbox>li').eq(ot_Idx).fadeIn(500);
    });
    // --- (함수 : 모바일 모달팝업 제어)
    function othModal(){
        $('.mobile_oth ul li').click(function(){
            $('.oth_modal').show();
            let idx = '0' + ($(this).index() + 1);
            let imgurl = 'images/other_img' + idx + '.png'
            $('.oth_modal .scrollbox img').attr('src', imgurl);
        });

        $('.oth_modal i').click(function(){
            $('.oth_modal').hide();
        });
    }






    /* ---------- 해상도별로 실행할 함수 ---------- */
    function media1280(){
        // ========== 메인메뉴 제어 ========== //
        // --- (마우스오버)
        $('ul.mainmenu>li').mouseover(function(){
            $(this).siblings().children('ul.submenu').hide();
            $(this).children('ul.submenu').show();
        });
        // --- (스크롤 따라 이동)
        // let navPos = parseInt($('nav').css('top'));
        // 처음 진입시 NaN 발생. 새로고침해야 작동되는 원인불명의 문제가 발생. 그냥 값을 받아오지 않고 숫자로 지정해서 문제 해결.
        let navPos = 200; //top값
        $(window).on('scroll', function(){
            let scroll = $(window).scrollTop();
            $('nav.pc_nav').stop().animate({'top' : scroll + navPos + 'px'}, 500)
        });
        // --- (메인메뉴 링크 위치 조절)
        noLinkPos();
        menuLinkPos(100);
    }

    function media768(){
        // ========== 메인메뉴 제어 ========== //
        // --- (메인메뉴 링크 위치 조절)
        noLinkPos();
        menuLinkPos(100);
    }

    function media550(){
        // ========== 메인메뉴 제어 ========== //
        // --- (메인메뉴 링크 위치 조절)
        noLinkPos();
        menuLinkPos(60);
        // --- (휴대폰용 메뉴버튼 제어)
        mobMenuCtrl();

        // ========== other 모달 팝업 ========== //
        othModal();
    }

    function media_min(){
        // ========== 메인메뉴 제어 ========== //
        // --- (메인메뉴 링크 위치 조절)
        noLinkPos();
        menuLinkPos(80);
        // --- (휴대폰용 메뉴버튼 제어)
        mobMenuCtrl();

        // ========== other 모달 팝업 ========== //
        othModal();
    }    




}); // ready end