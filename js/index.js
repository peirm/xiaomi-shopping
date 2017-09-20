/**
 * Created by hahha on 2017/7/31.
 */
$(function() {
    /* 顶部的鼠标移入颜色变化 */
    // 1. 发生的目标元素 a
    // 2. 什么事件 mouseover，mouseout
    // 3. 改变链接颜色

    /* 顶部开始 */
    /*-==============a标签的特效===============-*/

    $('.top a').mouseover(function () {
        $(this).css('color', '#fff')
    }).mouseout(function () {
        $(this).css('color', '#a4b094')
    });
    /*-==============购物车的特效===============-*/
    $('.shopCar').mouseover(function () {
        $(this).css({color: '#FF6700', background: '#fff'})
        $('.goods').stop(true, false).slideDown()
    }).mouseout(function () {
        $(this).css({color: '#a4b094', background: 'rgba(66, 66, 66, 0.9)'})
        $('.goods').stop(true, false).slideUp()
    });
    $('.goods').mouseover(function () {
        $('.shopCar').css({color: '#FF6700', background: '#fff'})
        $(this).stop(true, false).slideDown()
    }).mouseout(function () {
        $(this).stop(true, false).slideUp()
        $('.shopCar').css({color: '#a4b094', background: 'rgba(66, 66, 66, 0.9)'})
    });
    /* 顶部结束 */

    /* 头部开始 */
    var flag = true;
    /*-============== 表单输入框移入和移出效果 ==============-*/
    $('.ser1').mouseover(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #000')
            $('.ser2').css('border', '1px solid #000').css('borderLeft', 'none')
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc')
            $('.ser2').css('border', '1px solid #ccc').css('borderLeft', 'none')
        }
    })
    /*-============== 热门搜索的移入和移出效果 ==============-*/
    $('.hot a').mouseover(function () {
        $(this).css({
            'color': '#fff',
            'background': 'orange'
        })
    }).mouseout(function () {
        $(this).css({
            'color': '#757575',
            'background': '#eee'
        })
    })
    /*-============== 按钮的背景颜色(要考虑进入按钮时其他样式的效果) ==============-*/
    $('.ser2').mouseover(function () {
        if (flag) {
            $('.ser1 input').css({
                'border': '1px solid #000',
                'border-right': 'none'
            });
            $(this).css({
                'background': 'orange',
                'color': '#fff',
                'border': 'none'
            })
        }
    }).mouseout(function () {
        if (flag) {
            $('.ser1 input').css('border', '1px solid #ccc')
            $(this).css({
                'background': '#fff',
                'color': '#000',
                'border': '1px solid #ccc',
                'border-left': 'none'
            })
        }
    })
    /*-============== 鼠标点击Input输入框时的所有样式 ==============-*/
    /* focus:获取焦点     blur:失去焦点 */
    $('.ser1 input').focus(function () {
        flag = false;
        $(this).css('border-color', 'orange')
        $('.ser2').css('border-color', 'orange')
        $('.keywordsList').show().css('border-color', 'orange')
        $('.hot a').css('display', 'none')
    }).blur(function () {
        flag = true;
        $(this).css('border-color', '#ccc')
        $('.ser2').css('border-color', '#ccc')
        $('.keywordsList').hide().css('border-color', '#ccc')
        $('.hot a').css('display', 'inline-block')
    })
    /*-============== 导航出现下拉菜单的特效 ==============-*/
    $('.nav li').mouseover(function () {
        $(this).children('a').css('color', '#FF6700')
        if ($(this).index() < 7) {
            $('.select').removeClass('hide')
            $('.select').slideDown().finish()
            $('.select').find('ul').addClass('hide')
            $('.select').find('ul').eq($(this).index()).removeClass('hide')
        }
    }).mouseout(function () {
        $(this).children('a').css('color', '#000')
    });

    $('.nav').mouseout(function () {
        $('.select').slideUp()
    });

    $('.select').find('ul').mouseover(function () {
        $('.select').slideDown().finish()
    }).mouseout(function () {
        $('.select').slideUp()
    });
    /* 头部结束 */
    /*-============== 轮播图特效 ==============-*/
    var num = 0;
    var timer;
    timer = setInterval(autoplay,4000)
    $('.round li').mouseover(function(){
        clearInterval(timer);
        num = $(this).index();
        displayImg();
    })
    $('.banner').mouseover(function(){
        clearInterval(timer);
    }).mouseout(function() {
        timer = setInterval(autoplay,4000)
    });
    $('.direcL').click(function(){
        //上一张
        clearInterval(timer);
        num = num - 1;
        if(num < 0){
            num = 4;
        }
        displayImg();
    })
    $('.direcR').click(function(){
        //下一张
        clearInterval(timer);
        num = num + 1;
        if(num > 4){
            num = 0;
        }
        displayImg();
    })
    function displayImg(){
        $('.round li').eq(num).css('background','orange').siblings().css({
            'background':"#000",
            'opacity':'0.5'
        });
        $('.banner > img').eq(num).removeClass('hide').siblings('img').addClass('hide');
    }
    function autoplay (){
        num ++;
        if(num > 4){
            num = 0;
        }
        displayImg();
    }
    /*-============== banner出现侧拉菜单的特效 ==============-*/
    $('.navL li').mouseover(function () {
        $(this).css('background', '#ff6700')
        $('.ulHide').eq($(this).index()).removeClass('hide')
    }).mouseout(function () {
        $(this).css('background', '')
        $('.ulHide').eq($(this).index()).addClass('hide')
    });
    /* 用户移入三级导航的时候，也要让它显示 */
    $('.ulHide').mouseover(function () {
        $(this).removeClass('hide')
        $('.navL li').eq($(this).index()).css('background', '#ff6700')
    }).mouseout(function () {
        $(this).addClass('hide')
        $('.navL li').eq($(this).index()).css('background', '')
    });
    /* 三级导航内‘选购’样式*/
    $('.navHide .buy').mouseover(function () {
        $(this).css({color: '#fff', background: 'orange'})
    }).mouseout(function () {
        $(this).css({color: 'orange', background: '#fff'})
    });
    /* 三级导航内‘商品名’样式*/
    $('.ulHide a').mouseover(function(){
        $(this).css('color','red')
    }).mouseout(function(){
        $(this).css('color','')
    });
    /*-============== 轮播图区域下方列表start ==============-*/
    $('.navB > li a').mouseover(function(){
        $(this).css('color','#fff')
    }).mouseout(function(){
        $(this).css('color','')
    });
    /*-============== 小米明星单品开始 ==============-*/
    var clockLR;
    $('.p').mouseover(function(){
        clearInterval(clockLR)
    }).mouseout(function(){
        clockLR=setInterval(autoLR,10000)
    })
    // 向左翻页
    $('.prev').mouseover(function(){
        if($('.scroll').css('left') != '0px'){
            $(this).css({color:'#ff6700',cursor:'pointer'})
        }
    }).click(function(){
        if($('.scroll').css('left') != '0px'){
            $('.scroll').css('left','0px')
            $(this).css({color:'#dfdfe0',cursor:'default'})
            $('.next').css('color','#b0b4bc')
        }
    }).mouseout(function(){
        if($('.scroll').css('left')!='0px'){
            $(this).css('color','#b0b4bc')
        }
        else{
            $(this).css('color','#dfdfe0')
        }
    });
    // 向右翻页
    $('.next').mouseover(function(){
        if($('.scroll').css('left')=='0px'){
            $(this).css({color:'#ff6700',cursor:'pointer'})
        }
    }).click(function(){
        if($('.scroll').css('left')=='0px'){
            $('.scroll').css('left','-100%')
            $(this).css({color:'#dfdfe0',cursor:'default'})
            $('.prev').css('color','#b0b4bc')
        }
    }).mouseout(function(){
        if($('.scroll').css('left')=='0px'){
            $(this).css('color','#b0b4bc')
        }else{
            $(this).css('color','#dfdfe0')
        }
    });
    // 自动轮播
    clockLR=setInterval(autoLR,10000);
    function autoLR(){
        if($('.scroll').css('left') != '0px'){
            $('.scroll').css('left','0px');
        }
        else if($('.scroll').css('left') == '0px'){
            $('.scroll').css('left','-100%');
        }
    }
    /*-============== 小米明星单品结束 ==============-*/

    /*-============== 各种产品列表开始 ==============-*/
    /* 智能硬件 */
    $('.toAll').mouseover(function(){
        $(this).children('a').css('color','#FF6700');
        $(this).find('i').css('color','#FF6700');
    }).mouseout(function(){
        $(this).children('a').css('color','#424242');
        $(this).find('i').css('color','#B0B0B0');
    });

    $('.product1').mouseover(function(){
        $(this).find('li').css({
            marginTop:'12px',
            boxShadow:'0 0 28px #aaa'
        })
    }).mouseout(function(){
        $(this).find('li').css({
            marginTop:'14px',
            boxShadow:'none'
        })
    });

    $('.productYJ li').mouseover(function(){
        $(this).css({
            marginTop:'12px',
            boxShadow:'0 0 28px #aaa'
        })
    }).mouseout(function(){
        $(this).css({
            marginTop:'14px',
            boxShadow:'none'
        })
    });

    $('.productYJ li a').mouseover(function(){
        $(this).css('color','red')
    }).mouseout(function(){
        $(this).css('color','')
    });

    /* 搭配、配件、周边 */
    $('.list41 li').mouseover(function(){
        $('.productR2 > .ProLi').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
        $(this).css({
            color:'#ff6700',
            borderBottom:'2px solid #ff6700',
            cursor:'pointer'
        }).siblings().css({
            color:'#000',
            borderBottom:'none'
        })
    });

    $('.list42 li').mouseover(function(){
        $('.productR3 > .ProLi').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
        $(this).css({
            color:'#ff6700',
            borderBottom:'2px solid #ff6700',
            cursor:'pointer'
        }).siblings().css({
            color:'#000',
            borderBottom:'none'
        })
    });

    $('.list5 li').mouseover(function(){
        $('.productR4 > .ProLi').eq($(this).index()).removeClass('hide').siblings().addClass('hide')
        $(this).css({
            color:'#ff6700',
            borderBottom:'2px solid #ff6700',
            cursor:'pointer'
        }).siblings().css({
            color:'#000',
            borderBottom:'none'
        })
    });

    $('.ProLi > li').mouseover(function(){
        $(this).find('.slideDiv').stop(true,false).slideDown('fast');
        if($(this).index() != 7){
            $(this).css({
                marginTop:'12px',
                boxShadow:'0 0 28px #aaa'
            })
        }
    }).mouseout(function(){
        $(this).find('.slideDiv').stop(true,false).slideUp('fast');
        if($(this).index() != 7){
            $(this).css({
                marginTop:'14px',
                boxShadow:'none'
            })
        }
    });

    $('.twoRow li').mouseover(function(){
        if($(this).index() == 0){
            $(this).css({
                marginTop:'12px',
                boxShadow:'0 0 28px #aaa'
            })
            $(this).next().css('marginTop','16px')
        }
        else {
            $(this).css({
                marginTop:'12px',
                boxShadow:'0 0 28px #aaa'
            })
        }
    }).mouseout(function(){
        if($(this).index() == 0){
            $(this).css({
                marginTop:'14px',
                boxShadow:'none'
            })
            $(this).next().css('marginTop','14px')
        }
        else{
            $(this).css({
                marginTop:'14px',
                boxShadow:'none'
            })
        }
    })

    $('.productL > li').mouseover(function(){
        if($(this).index() == 0){
            $(this).css({
                marginTop:'12px',
                boxShadow:'0 0 28px #aaa'
            })
            $(this).next().css('marginTop','16px')
        }
        else{
            $(this).css({
                marginTop:'12px',
                boxShadow:'0 0 28px #aaa'
            })
        }
    }).mouseout(function(){
            if($(this).index() == 0){
                $(this).css({
                    marginTop:'14px',
                    boxShadow:'none'
                })
                $(this).next().css('marginTop','14px')
            }
            else{
                $(this).css({
                    marginTop:'14px',
                    boxShadow:'none'
                })
            }
    });

    /* 为你推荐 */
    $('.scroll2 li').mouseover(function(){
        $(this).find('img').css('marginTop','48px')
    }).mouseout(function(){
        $(this).find('img').css('marginTop','50px')
    });

    // 向左翻页
    $('.prev2').mouseover(function(){
        if($('.scroll2').css('left') != '0px'){
            $(this).css('color','#ff6700')
        }
    }).click(function(){
        if($('.scroll2').css('left') != '0px'){
            $('.scroll2').css('left',parseInt($('.scroll2').css('left')) + 1226 + 'px')
            if($('.scroll2').css('left')!='-3678px'){
                $('.next2').css('color','#b0b4bc')
            }
            if($('.scroll2').css('left') == '0px'){
                $(this).css({
                    color:'#dfdfe0',cursor:'default'
                })
            }
        }else{
            $(this).css('color','#dfdfe0')
        }
    }).mouseout(function(){
        if($('.scroll2').css('left') != '0px'){
            $(this).css('color','#b0b4bc')
        }
        else{
            $(this).css('color','#dfdfe0')
        }
    });
    // 向右翻页
    $('.next2').mouseover(function(){
        if($('.scroll2').css('left') == '0px'){
            $(this).css('color','#ff6700')
        }
    }).click(function(){
        if($('.scroll2').css('left') != '-3678px'){
            $('.scroll2').css('left',parseInt($('.scroll2').css('left')) - 1226 + 'px');
            if($('.scroll2').css('left') != '0px'){
                $('.prev2').css('color','#b0b4bc');
            }
            if($('.scroll2').css('left') == '-3678px'){
                $(this).css({color:'#dfdfe0',cursor:'default'});
            }
        }
        else{
            $(this).css('color','#dfdfe0');
        }
    }).mouseout(function(){
        if($('.scroll2').css('left') != '-3678px'){
            $(this).css('color','#b0b4bc');
        }else{
            $(this).css('color','#dfdfe0');
        }
    })
    // 自动翻页
    // var clockLR2;
    // $('.p').mouseover(function(){
    //     clearInterval(clockLR2)
    // }).mouseout(function(){
    //     clockLR2 = setInterval(autoLR2,2000)
    // })
    //
    // clockLR2 = setInterval(autoLR2,2000);
    // function autoLR2(){
    //     if($('.scroll2').css('left') != '0px'){
    //         $('.scroll2').css('left','0px');
    //     }
    //     else if($('.scroll2').css('left') == '0px'){
    //         $('.scroll2').css('left','-100%');
    //     }
    // }

    /* 热评产品 */
    $('.hotList li').mouseover(function(){
        $(this).css({
            marginTop:'17px',
            boxShadow:'0 0 18px #aaa'
        })
    }).mouseout(function(){
        $(this).css({
            marginTop:'19px',
            boxShadow:'none'
        })
    });

    /* 内容 */
    var index = 0;
    $('.contList > li').mouseover(function(){
        index = $(this).index();
        $(this).find('.p2').css('opacity','1')
    }).mouseout(function(){
        $(this).find('.p2').css('opacity','0')
    });

    var num2 = [0,0,0,0];
   /* 右翻页 */
   $('.contList > li .r2').mouseover(function(){
       $(this).css('backgroundColor','#757575')
   }).click(function(){
       if(num2[index] < 3){
           num2.splice(index,1,num2[index] + 1);
           $('.contBox').eq(index).find('li').eq(num2[index]).show().siblings().hide();
           $('.round2').eq(index).find('p').eq(num2[index]).css({
               border:'2px solid #ff6700',
               backgroundColor:'#fff'
           }).siblings().css({
               border:'2px solid #fff',
               backgroundColor:'#b0b0b0'
           })
       }
   }).mouseout(function(){
       $(this).css('backgroundColor','#b0b0b0')
   });
   /* 左翻页*/
   $('.contList > li .l2').mouseover(function(){
       $(this).css('backgroundColor','#757575')
   }).click(function(){
       if(num2[index] > 0){
           num2.splice(index,1,num2[index] - 1);
           $('.contBox').eq(index).find('li').eq(num2[index]).show().siblings().hide()
           $('.round2').eq(index).find('p').eq(num2[index]).css({
               border:'2px solid #ff6700',
               backgroundColor:'#fff'
           }).siblings().css({
               border:'2px solid #fff',
               backgroundColor:'#b0b0b0'
           })
       }
   }).mouseout(function(){
       $(this).css('backgroundColor','#b0b0b0')
   });
   /* 点击圆圈翻页 */
   $('.round2 p').mouseover(function() {
        if(num2[index] != $(this).index()){
            $(this).css('backgroundColor','#ff6700')
        }
    }).mouseout(function(){
        if(num2[index] != $(this).index()){
            $(this).css('backgroundColor','#b0b0b0')
        }
    }).click(function(){
       num2[index] = $(this).index();
       $('.contBox').eq(index).find('li').eq(num2[index]).show().siblings().hide()
       $(this).css({
           border:'2px solid #ff6700',
           backgroundColor:'#fff'
       }).siblings().css({
           border:'2px solid #fff',
           backgroundColor:'#b0b0b0'
       })
   });
    /* 最后一张图片的特效*/
    $('.goTo').mouseover(function(){
        $(this).css({
            backgroundColor:$(this).css('color'),
            color:'#fff',
            cursor:'pointer'
        })
    }).mouseout(function(){
        $(this).css({
            backgroundColor:'#fff',
            color:$(this).parent().css('color')
        })
    });

    /* 视频 */
    $('.videoList li').mouseover(function(){
        $(this).css({
            marginTop:'12px',
            boxShadow:'0 0 18px #aaa'
        }).mouseout(function(){
            $(this).css({
                marginTop:'14px',
                boxShadow:'none'
            })
        })
    });

    $('.videoList li > img').mouseover(function(){
        $(this).next('.icon-bofang').css('color','orange')
    }).mouseout(function(){
        $(this).next('.icon-bofang').css('color','#fff')
    })

    $('.videoList li > h2 > a').mouseover(function(){
        $(this).css('color','#ff6700')
    }).mouseout(function(){
        $(this).css('color','')
    })


    /*-=============== 底部 =============-*/
    $('.nav1 > li').mouseover(function(){
        $(this).find('a').css('color','#ff6700')
    }).mouseout(function(){
        $(this).find('a').css('color','#616161')
    });

    $('.nav2 a').mouseover(function(){
        $(this).css('color','#ff6700')
    }).mouseout(function(){
        $(this).css('color','#757575')
    })

    $('#serv').mouseover(function(){
        $(this).css({
            color:'#fff',
            backgroundColor:'#ff6700',
            cursor:'pointer'
        })
    }).mouseout(function(){
        $(this).css({
            color:'#ff6700',
            backgroundColor:'#fff'
        })
    });

    $('.navFoot > li').mouseover(function(){
        $(this).find('a').css('color','#ff6700')
    }).mouseout(function(){
        $(this).find('a').css('color','')
    });

    $('.staLink > a').mouseover(function(){
        $(this).css('color','#ff6700')
    }).mouseout(function(){
        $(this).css('color','')
    })


});

