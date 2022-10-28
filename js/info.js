$(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAC");
$(".resultAC").find(".result-title").text(data.result.resultAC.resultTitle[0]);
$(".resultAC").find(".title-sub").text(data.result.resultAC.titleSub[0]);
$(".resultAC").find(".result-img").attr("src", data.result.resultAC.resultImg[0]);
$(".resultAC").find(".symptomA li").text(data.result.resultAC.symptomA[0]);
for(var count = 0; count < data.result.resultAC.symptomB.length; count++){
    $(".resultAC .symptomB ul").append('<li></li>');
};
$(".symptomB li").each(function(){
    i = $(this).index();
    $(".resultAC").find(".symptomB li").eq(i).text(data.result.resultAC.symptomB[i]);
});
$(".resultAC").find(".symptomPart li").text(data.result.resultAC.symptomPart[0]);
$(".resultAC").find(".symptomText li").text(data.result.resultAC.symptomText[0]);
$(".resultAC").find(".symptomMedical li").text(data.result.resultAC.symptomMedical[0]);