$(document).ready(function(){
    //logo pos
    $("#desk-logo").css('opacity', '100%');
    var back_pos = $("div[data-elem-id='1572018624908']").offset();
    var logo_pos = $(".t456__imglogo").offset();
    var menu_pos = $("a[data-menu-item-number='6']").offset();
    var back_pos_right = back_pos.left +$("div[data-elem-id='1572018624908']").width();
    var menu_pos_right = menu_pos.left + $("a[data-menu-item-number='6']").width();
    var credits_pos = $(".tn-elem__1352154871475143840125").offset();
    console.log($(window).width()+" "+$(window).height());
    //set main_block_a id to links in main block
    let end = true;
    do
    {
        let a_mainblock = $(".t396__artboard:eq(0)").find("a:not(#main_block_a)");
        if(!a_mainblock.length){
            end = false;
        }
        else{
            a_mainblock.attr("id","main_block_a");
        }
    }  while(end);
    //set footer a positions
    var a_footer_len = $("a[class='tn-atom']:not(#main_block_a)").length;
    var a_pos = $("a[class='tn-atom']:not(#main_block_a):eq("+(a_footer_len-1)+")").parent().offset();
    var a_pos_right = a_pos.left + $("a[class='tn-atom']:not(#main_block_a):eq("+(a_footer_len-1)+")").width();
    console.log(a_footer_len);
    var dist = 45;
    //setting up diagonal
    var back_w = $("div[data-elem-id='1572018624908']").width();
    var back_h = $("div[data-elem-id='1572018624908']").height();
    var back_pos_bot = back_pos.top + back_h;
    $("div[data-elem-id='1572033930904']").attr("data-field-top-value", back_h-2);
    $("div[data-elem-id='1572033930904']").attr("data-field-left-value", back_pos.left);
    $("div[data-elem-id='1572033930904']").css("transform-origin","top left");
    var diag_width = Math.sqrt(Math.pow(back_w,2)+Math.pow(back_h,2));
    $("div[data-elem-id='1572033930904']").attr("data-field-width-value", diag_width-2);
    var angle = Math.PI/2 - Math.atan(back_w/back_h);
    angle = angle*180/Math.PI;
    $("div[data-elem-id='1572033930904']").css("transform", "rotate("+(-Math.round(angle*100)/100+0.06)+"deg)");
    let eH = new editHeight();
    let subrect_w = $("div[data-elem-id='1572174044052']").width();
    let subrect_h = eH.setHeight(Math.atan(back_w/back_h), back_w, subrect_w);
    $("div[data-elem-id='1572174044052']").attr("data-field-height-value",subrect_h+1);
    let subrect_top = eH.calculateTop(back_h, subrect_h);
    $("div[data-elem-id='1572174044052']").attr("data-field-top-value",/*subrect_top-210.2*/0);
    let subrect_left = $("div[data-elem-id='1572174044052']").attr("data-field-left-value");
    $("div[data-elem-id='1572178112076']").attr("data-field-left-value", subrect_left);
    $("div[data-elem-id='1572178112076']").attr("data-field-width-value", subrect_w);
    $("div[data-elem-id='1572178112076']").attr("data-field-height-value", subrect_w);
    if ($(window).width()>=980)
    {

        $(".t456__imglogo").css("margin-left", Math.abs(back_pos.left - logo_pos.left));
        $(".t456__list").css("margin-right", Math.abs(back_pos_right - menu_pos_right));
        $(".t456__imglogo").css("margin-left", Math.abs(back_pos.left - logo_pos.left));
        $(".tn-elem__1352154871475143840125").css("margin-left", -Math.abs(back_pos.left - credits_pos.left));
        $("a[class='tn-atom']:not(#main_block_a):eq("+(a_footer_len-1)+")").parent().css("margin-left", (back_pos_right - a_pos_right));
        for(let i = 0; i < a_footer_len; i++)
            console.log($("a[class='tn-atom']:not(#main_block_a):eq("+i+")").text());
        for(let i = a_footer_len-1; i > 0; i--)
        {
            let prev = $("a[class='tn-atom']:not(#main_block_a):eq("+(i-1)+")").parent().offset();
            let prev_right = prev.left + Number($("a[class='tn-atom']:not(#main_block_a):eq("+(i-1)+")").css("width").split("px")[0]);
            let pres = $("a[class='tn-atom']:not(#main_block_a):eq("+i+")").parent().offset();
            let a_mar_left = Number($("a[class='tn-atom']:not(#main_block_a):eq("+(i-1)+")").parent().css("margin-left").split("px")[0]);
            if(prev_right - pres.left != dist)
            {
                let dif = Math.abs(dist - (pres.left - prev_right));
                $("a[class='tn-atom']:not(#main_block_a):eq("+(i-1)+")").parent().css("margin-left", a_mar_left + dif);

            }
        }
    }

    $(".t456__imglogo").attr('id', 'desk-logo');
    var logo = '<svg id="mob-logo-container" viewBox="0 0 300 100" width="300" height="100""> '+
        '<image id="mob-logo" x="0" y="-25" width="300" height="100" xlink:href="https://static.tildacdn.com/tild3836-3838-4337-a238-666464383139/kulturaction_logo.svg"/></image>'+
        '</svg>';
    $("a[class='tn-atom']").hover(function(){
        $(this).css("color", "#bc0022");
    });
    $("a[class='tn-atom']").mouseleave(function(){
        $("a[class='tn-atom']").css("color", "black");
    });
    if ($(window).width()<=980)
    {
        $(".t456__leftwrapper").css('display', 'none');
        $(".t456__mobile_text").before(logo);
        if ($(window).width()<375)
        {
            $("#mob-logo").attr("width","230");
        }
        $(".t456__burger span").css("background-color", "black");
        $(".t456__mobile").css("background-color", "white");
        $(".t456__mobile_container").css("height", "50px");

    }
    $(window).resize(function(){
        menu_pos = $("a[data-menu-item-number='6']").offset();
        $(".t456__imglogo").css("margin-left", Math.abs(back_pos.left - logo_pos.left));
        back_pos_right = back_pos.left + Number($("div[data-elem-id='1572018624908']").css("width").split("px")[0]);
        menu_width = $("a[data-menu-item-number='6']").css("width");
        menu_pos_right = menu_pos.left + Number(menu_width.split("px")[0]);

        if ($(window).width()<=980)
        {
            $("#mob-logo-container").remove();
            $(".t456__leftwrapper").css('display', 'none');
            $(".t456__mobile_text").before(logo);
            $(".t456__imglogo").css("margin-left", 0);
            $(".t456__list").css("margin-right", 0);
            if ($(window).width()<375)
            {
                $("#mob-logo").attr("width","230");
            }
            $(".t456__burger span").css("background-color", "black");
            $(".t456__mobile").css("background-color", "white");
            $(".t456__mobile_container").css("height", "50px");
        }
        else
        {
            $("#mob-logo-container").remove();
            $(".t456__leftwrapper").css('display', 'block');
        }
        if ($(window).width()>=980)
        {
            $(".t456__imglogo").css("margin-left", Math.abs(back_pos.left - logo_pos.left));
            $(".t456__list").css("margin-right", Math.abs(back_pos_right - menu_pos_right));
            $(".t456__imglogo").css("margin-left", Math.abs(back_pos.left - logo_pos.left));
            $(".tn-elem__1352154871475143840125").css("margin-left", -Math.abs(back_pos.left - credits_pos.left));
            $("a[class='tn-atom']:not(#main_block_a)").parent().css("margin-left", Math.abs(back_pos_right - a_pos_right));
            for(let i = $("a[class='tn-atom']:not(#main_block_a)").length-2; i > 0; i--)
            {
                let prev = $("a[class='tn-atom']:not(#imain_block_a):eq("+(i-1)+")").parent().offset();
                let prev_right = prev.left + Number($("a[class='tn-atom']:not(#main_block_a):eq("+(i-1)+")").css("width").split("px")[0]);
                let pres = $("a[class='tn-atom']:not(#main_block_a):eq("+i+")").parent().offset();
                let a_mar_left = Number($("a[class='tn-atom']:not(#main_block_a):eq("+(i-2)+")").parent().css("margin-left").split("px")[0]);
                if(prev_right - pres.left != dist)
                {
                    let dif = Math.abs(dist - (pres.left - prev_right));
                    $("a[class='tn-atom']:not(#main_block_a):eq("+(i-1)+")").parent().css("margin-left", a_mar_left + dif);
                }
            }
        }
    });
});