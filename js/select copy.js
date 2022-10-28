$(".option1").change(function(){

    let option1Index = $(this).val();

    $.ajax({

        type : "GET",
        url:"../js/select-data.json",
        dataType: "Json",  

        success:function(data){

            if(option1Index == 1){

                // for(var count = 0; count < data.option2.length; count++){
                //     $(".option2").append('<option></option>');
                // };
                // $(".symptomB li").each(function(){
                //     i = $(this).index();
                //     $(".resultAA").find(".symptomB li").eq(i).text(data.result.resultAA.symptomB[i]);
                // });

                $(".option2 option").remove();
                $(".option2").append('<option value="0" disabled selected>부위별 증상을 선택해주세요</option>');
                $(".option2").append('<option value="1">귀를 털거나 긁는다</option>');
                $(".option2").append('<option value="2">귀가 들리지 않는다</option>');
                $(".option2").append('<option value="3">귀를 가려워한다, 아파한다, 머리를 흔든다</option>');

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