//option1 변경 이벤트

$(".option1").change(function(){

    let option1Index = $(this).val();       //option2 이벤트를 위한 option1 value 가져오기

    $.ajax({
        type : "GET",
        url:"../js/select-data.json",
        dataType: "Json",       //제이슨 연결
        success:function(data){     //성공했을때





            // option2 갯수, 텍스트 설정

            if(option1Index == 1){      //option1을 눌렀을때 - 귀
                $(".option2 option").remove();      //모든 option 삭제
                for(var count = 0; count < data.option2.length; count++){       
                    $(".option2").append('<option></option>');
                };      //option2 생성 반복
                $(".option2 option").each(function(){
                    i = $(this).index();
                    $(".option2 option").eq(i).text(data.option2[i]).val(i);
                });     //option2 텍스트 생성 반복
                $(".option2 option").eq(0).attr("disabled", true);      //option2의 첫번째 option은 선택X
                        




                // option2 변경 이벤트

                $(".option2").change(function(){
                    $(".main-logo").css("width", "150px");
                    let option2Index = $(this).val();
                    if(option2Index == 1){
                        $(".option3-checkbox").remove();
                        for(var count = 0; count < data.ear.option2A.option3.length; count++){
                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };
                        $(".option3-checkbox").each(function(){
                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.ear.option2A.for[i]+'"><label for="'+data.ear.option2A.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.ear.option2A.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.ear.option2A.code[i]);
                        });

                    }else if(option2Index == 2){

                        $(".option3-checkbox").remove();

                        for(var count = 0; count < data.ear.option2B.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.ear.option2B.for[i]+'"><label for="'+data.ear.option2B.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.ear.option2B.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.ear.option2B.code[i]);

                        });

                    }else if(option2Index == 3){

                        $(".option3-checkbox").remove();
                        
                        for(var count = 0; count < data.ear.option2C.option3.length; count++){

                            $(".option3").append('<div class="option3-checkbox"></div>');
                        };

                        $(".option3-checkbox").each(function(){

                            i = $(this).index();
                            $(".option3-checkbox").eq(i).append('<input type="checkbox" id="'+data.ear.option2C.for[i]+'"><label for="'+data.ear.option2C.for[i]+'"></label>');
                            $(".option3-checkbox").eq(i).children("label").text(data.ear.option2C.option3[i]);
                            $(".option3-checkbox").eq(i).attr("id",data.ear.option2C.code[i]);

                        });

                    };;
                    $(".option3-wrap").stop().slideDown(500);
                });
            }
        },

        error:function(){

            console.log("error");

        }
    }); 

});




var arr = []; // 클릭한 값을 담을 배열을 변수로 넣기

$(document).on("click", "input", function() { //input을 눌렀을때

    if($(this).is(":checked")){ //input이 체크가 된다면

        var symptomCode = $(this).parent(".option3-checkbox").attr("id"); //.option3-checkbox의 아이디를 추출(증상코드)
        symptomSearch(arr, symptomCode); //symptomSearch 실행
        console.log(arr); //console에 선택된 증상코드

    }else if($(this).not(':checked')){ //input이 체크를 뺀다면

        var symptomCode = $(this).parent(".option3-checkbox").attr("id"); //.option3-checkbox의 아이디를 추출(증상코드)
        symptomSearch2(arr, symptomCode); //symptomSearch2 실행
        console.log(arr); //console에 선택된 증상코드

    };
});

function symptomSearch(array, val) { //symptomSearch

    array.push(val); // 값이 없다면 배열의 마지막에 추가
    $(".search").addClass(val);

};
function symptomSearch2(array, val) { //symptomSearch2

    arr = array.filter((element) => element !== val); //선택된 증상코드 제거
    $(".search").removeClass(val);
};




$(".search").click(function(e){

    if(arr == ""){

        alert("추가 증상을 선택해주세요");

    }else{

        e.preventDefault();
        $("#search").css("display", "flex");

        $.ajax({

            type : "GET",
            url:"../js/result-data.json",
            dataType: "Json",  


            success:function(data){

                // function resultFnc(code){
                //     var codecode = data.code
                //     code = codecode;

                //     $(".result-title").text(data.code.resultTitle[0]);
                //     $(".title-sub").text(data.code.titleSub[0]);
                //     $(".result-img").attr("src", data.code.resultImg[0]);
                //     $(".symptomA li").text(data.code.symptomA[0]);
                //     $(".symptomB li").each(function(){
                //         i = $(this).index();
                //         $(".symptomB li").eq(i).text(data.code.symptomB[i]);
                //     });
                //     $(".symptomPart li").text(data.code.symptomPart[0]);
                //     $(".symptomText li").text(data.code.symptomText[0]);
                //     $(".symptomMedical li").text(data.code.symptomMedical[0]);

                // };

                    if($(".search").is('.EAAA00, .EAAA01, .EAAA02, .EAAA03, .EAAA04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAA");
                        $(".resultAA").find(".result-title").text(data.result.resultAA.resultTitle[0]);
                        $(".resultAA").find(".title-sub").text(data.result.resultAA.titleSub[0]);
                        $(".resultAA").find(".result-img").attr("src", data.result.resultAA.resultImg[0]);
                        $(".resultAA").find(".symptomA li").text(data.result.resultAA.symptomA[0]);
                        for(var count = 0; count < data.result.resultAA.symptomB.length; count++){
                            $(".resultAA .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAA").find(".symptomB li").eq(i).text(data.result.resultAA.symptomB[i]);
                        });
                        $(".resultAA").find(".symptomPart li").text(data.result.resultAA.symptomPart[0]);
                        $(".resultAA").find(".symptomText li").text(data.result.resultAA.symptomText[0]);
                        $(".resultAA").find(".symptomMedical li").text(data.result.resultAA.symptomMedical[0]);

                    }

                    if($(".search").is('.EAAA05, .EAAA06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAB");
                        $(".resultAB").find(".result-title").text(data.result.resultAB.resultTitle[0]);
                        $(".resultAB").find(".title-sub").text(data.result.resultAB.titleSub[0]);
                        $(".resultAB").find(".result-img").attr("src", data.result.resultAB.resultImg[0]);
                        $(".resultAB").find(".symptomA li").text(data.result.resultAB.symptomA[0]);
                        for(var count = 0; count < data.result.resultAB.symptomB.length; count++){
                            $(".resultAB .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAB").find(".symptomB li").eq(i).text(data.result.resultAB.symptomB[i]);
                        });
                        $(".resultAB").find(".symptomPart li").text(data.result.resultAB.symptomPart[0]);
                        $(".resultAB").find(".symptomText li").text(data.result.resultAB.symptomText[0]);
                        $(".resultAB").find(".symptomMedical li").text(data.result.resultAB.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAB00, .EAAB01, .EAAB02, .EAAB03')){

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

                    };

                    if($(".search").is('.EAAB00, .EAAB01, .EAAB04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAD");
                        $(".resultAD").find(".result-title").text(data.result.resultAD.resultTitle[0]);
                        $(".resultAD").find(".title-sub").text(data.result.resultAD.titleSub[0]);
                        $(".resultAD").find(".result-img").attr("src", data.result.resultAD.resultImg[0]);
                        $(".resultAD").find(".symptomA li").text(data.result.resultAD.symptomA[0]);
                        for(var count = 0; count < data.result.resultAD.symptomB.length; count++){
                            $(".resultAD .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAD").find(".symptomB li").eq(i).text(data.result.resultAD.symptomB[i]);
                        });
                        $(".resultAD").find(".symptomPart li").text(data.result.resultAD.symptomPart[0]);
                        $(".resultAD").find(".symptomText li").text(data.result.resultAD.symptomText[0]);
                        $(".resultAD").find(".symptomMedical li").text(data.result.resultAD.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAB00, .EAAB01')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAE");
                        $(".resultAE").find(".result-title").text(data.result.resultAE.resultTitle[0]);
                        $(".resultAE").find(".title-sub").text(data.result.resultAE.titleSub[0]);
                        $(".resultAE").find(".result-img").attr("src", data.result.resultAE.resultImg[0]);
                        $(".resultAE").find(".symptomA li").text(data.result.resultAE.symptomA[0]);
                        for(var count = 0; count < data.result.resultAE.symptomB.length; count++){
                            $(".resultAE .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAE").find(".symptomB li").eq(i).text(data.result.resultAE.symptomB[i]);
                        });
                        $(".resultAE").find(".symptomPart li").text(data.result.resultAE.symptomPart[0]);
                        $(".resultAE").find(".symptomText li").text(data.result.resultAE.symptomText[0]);
                        $(".resultAE").find(".symptomMedical li").text(data.result.resultAE.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAB00, .EAAB01, .EAAB05')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAF");
                        $(".resultAF").find(".result-title").text(data.result.resultAF.resultTitle[0]);
                        $(".resultAF").find(".title-sub").text(data.result.resultAF.titleSub[0]);
                        $(".resultAF").find(".result-img").attr("src", data.result.resultAF.resultImg[0]);
                        $(".resultAF").find(".symptomA li").text(data.result.resultAF.symptomA[0]);
                        for(var count = 0; count < data.result.resultAF.symptomB.length; count++){
                            $(".resultAF .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAF").find(".symptomB li").eq(i).text(data.result.resultAF.symptomB[i]);
                        });
                        $(".resultAF").find(".symptomPart li").text(data.result.resultAF.symptomPart[0]);
                        $(".resultAF").find(".symptomText li").text(data.result.resultAF.symptomText[0]);
                        $(".resultAF").find(".symptomMedical li").text(data.result.resultAF.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC00, .EAAC01, .EAAC02, .EAAC12')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAG");
                        $(".resultAG").find(".result-title").text(data.result.resultAG.resultTitle[0]);
                        $(".resultAG").find(".title-sub").text(data.result.resultAG.titleSub[0]);
                        $(".resultAG").find(".result-img").attr("src", data.result.resultAG.resultImg[0]);
                        $(".resultAG").find(".symptomA li").text(data.result.resultAG.symptomA[0]);
                        for(var count = 0; count < data.result.resultAG.symptomB.length; count++){
                            $(".resultAG .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAG").find(".symptomB li").eq(i).text(data.result.resultAG.symptomB[i]);
                        });
                        $(".resultAG").find(".symptomPart li").text(data.result.resultAG.symptomPart[0]);
                        $(".resultAG").find(".symptomText li").text(data.result.resultAG.symptomText[0]);
                        $(".resultAG").find(".symptomMedical li").text(data.result.resultAG.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC00, .EAAC01, .EAAC02, .EAAC03, .EAAC04')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAH");
                        $(".resultAH").find(".result-title").text(data.result.resultAH.resultTitle[0]);
                        $(".resultAH").find(".title-sub").text(data.result.resultAH.titleSub[0]);
                        $(".resultAH").find(".result-img").attr("src", data.result.resultAH.resultImg[0]);
                        $(".resultAH").find(".symptomA li").text(data.result.resultAH.symptomA[0]);
                        for(var count = 0; count < data.result.resultAH.symptomB.length; count++){
                            $(".resultAH .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAH").find(".symptomB li").eq(i).text(data.result.resultAH.symptomB[i]);
                        });
                        $(".resultAH").find(".symptomPart li").text(data.result.resultAH.symptomPart[0]);
                        $(".resultAH").find(".symptomText li").text(data.result.resultAH.symptomText[0]);
                        $(".resultAH").find(".symptomMedical li").text(data.result.resultAH.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC00, .EAAC01, .EAAC02, .EAAC05, .EAAC06')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAI");
                        $(".resultAI").find(".result-title").text(data.result.resultAI.resultTitle[0]);
                        $(".resultAI").find(".title-sub").text(data.result.resultAI.titleSub[0]);
                        $(".resultAI").find(".result-img").attr("src", data.result.resultAI.resultImg[0]);
                        $(".resultAI").find(".symptomA li").text(data.result.resultAI.symptomA[0]);
                        for(var count = 0; count < data.result.resultAI.symptomB.length; count++){
                            $(".resultAI .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAI").find(".symptomB li").eq(i).text(data.result.resultAI.symptomB[i]);
                        });
                        $(".resultAI").find(".symptomPart li").text(data.result.resultAI.symptomPart[0]);
                        $(".resultAI").find(".symptomText li").text(data.result.resultAI.symptomText[0]);
                        $(".resultAI").find(".symptomMedical li").text(data.result.resultAI.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC00, .EAAC01, .EAAC02, .EAAC06, .EAAC07, .EAAC08')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAJ");
                        $(".resultAJ").find(".result-title").text(data.result.resultAJ.resultTitle[0]);
                        $(".resultAJ").find(".title-sub").text(data.result.resultAJ.titleSub[0]);
                        $(".resultAJ").find(".result-img").attr("src", data.result.resultAJ.resultImg[0]);
                        $(".resultAJ").find(".symptomA li").text(data.result.resultAJ.symptomA[0]);
                        for(var count = 0; count < data.result.resultAJ.symptomB.length; count++){
                            $(".resultAJ .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAJ").find(".symptomB li").eq(i).text(data.result.resultAJ.symptomB[i]);
                        });
                        $(".resultAJ").find(".symptomPart li").text(data.result.resultAJ.symptomPart[0]);
                        $(".resultAJ").find(".symptomText li").text(data.result.resultAJ.symptomText[0]);
                        $(".resultAJ").find(".symptomMedical li").text(data.result.resultAJ.symptomMedical[0]);

                    };

                    if($(".search").is('.EAAC09, .EAAC10, .EAAC11')){

                        $(".result-wrap").eq(0).clone().appendTo(".result-info").addClass("resultAK");
                        $(".resultAK").find(".result-title").text(data.result.resultAK.resultTitle[0]);
                        $(".resultAK").find(".title-sub").text(data.result.resultAK.titleSub[0]);
                        $(".resultAK").find(".result-img").attr("src", data.result.resultAK.resultImg[0]);
                        $(".resultAK").find(".symptomA li").text(data.result.resultAK.symptomA[0]);
                        for(var count = 0; count < data.result.resultAK.symptomB.length; count++){
                            $(".resultAK .symptomB ul").append('<li></li>');
                        };
                        $(".symptomB li").each(function(){
                            i = $(this).index();
                            $(".resultAK").find(".symptomB li").eq(i).text(data.result.resultAK.symptomB[i]);
                        });
                        $(".resultAK").find(".symptomPart li").text(data.result.resultAK.symptomPart[0]);
                        $(".resultAK").find(".symptomText li").text(data.result.resultAK.symptomText[0]);
                        $(".resultAK").find(".symptomMedical li").text(data.result.resultAK.symptomMedical[0]);

                    };

                    $(".result-wrap").eq(0).remove();
                    
            },

            error:function(){

                console.log("error");

            }
        }); 
    };
});

$(".back").click(function(){

    location.reload();

});
