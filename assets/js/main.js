// let y = $(".about").offset();
// console.log(y)
let homeHeight =$(".home").outerHeight();
$(window).scroll(function(){
   let x = $(window).scrollTop();
    if(x>=homeHeight){
        $(".navbar").addClass('bg-dark') & $(".btn-up").show(1000)
    }
    else{
        $(".navbar").removeClass('bg-dark') & $(".btn-up").hide(1000)
    }
});
$(".btn-up").click(function(){
    // $(window).scrollTop(0)
    $('html,bod').animate({scrollTop:0},1500)
});
$('.navbar .nav-link').click(function(e){
    let l = $(e.target).attr('href');
    let offs = $(l).offset().top;
    $('body,html').animate({scrollTop:offs},1500)
});
// $(".options li").eq(0).css('backgroundColor','blue')
let colors=['#554','red','#fff',' orange','#213',' #ff206e'];
for(let i=0 ; i<6; i++){
    $(".options li").eq(i).css('backgroundColor',colors[i])
};
$(".options i").click(function(){
    let widthInfo =$(".options-slide").outerWidth();
    let t =$(".options").offset().left;
    if(t==0){
        $(".options").animate({left:-widthInfo},3000)
    }else
    {
        $(".options").animate({left:0},3000)
    }
});
$(".options li").click(function(e){
    let bg =$(e.target).css('backgroundColor');
    $("html").attr('style', `--mainColor:${bg}`)
});
$(".options img").click(function(e){
    let hh = $(e.target).attr('src');
    $(".header").css('backgroundImage',`url( ${hh})`);
    $(e.target).css('border','2px solid #000');
    $(e.target).siblings().css('border','none')
});
