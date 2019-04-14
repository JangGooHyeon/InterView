var emoticon_src;


// 이모티콘 효과
function addEmoticon() {
    var con = stage.container();
    con.addEventListener('dragover', function (e) {
        e.preventDefault(); // !important
    });


    con.addEventListener('drop', function (e) {
        e.preventDefault();

        node_num++;
        
        stage.setPointersPositions(e);
        var dropPosition = stage.getPointerPosition();
        
        var imageObj = new Image();
        imageObj.onload = function () {
            var image = new Konva.Image({
                x: dropPosition.x,
                y: dropPosition.y,
                image: imageObj,
                width: 300,
                height: 300,
                name: 'emoticon ' + node_num,
                draggable: true,
                src: emoticon_src,
            });
            
            layer.add(image);
            layer.draw();
        };
        imageObj.src = emoticon_src;
        
        
    });

    $('.emoticon').on('mousedown', function () {

        emoticon_src = $(this).attr('src');
        console.log("이모티콘 추가 : " + emoticon_src);

    });
}

function imageUpload() {

    var form = $("#imageForm")[0];
	var formData = new FormData(form);
	
		console.log(formData);

		$.ajax({
			
			url : "/page/imageUpload",
			enctype: 'multipart/form-data',
			method : "post",
			data : formData,
			processData: false,
	        contentType: false,
	        cache: false,
	        timeout: 600000,
//	        async : true,
			success : function(data){
				
				console.log(data);
				addImage(data);
			}
		});
}

function addImage(data) {
	
	 node_num++;
	 
	 console.log("Image_src : " + data);
	
	 var imageObj = new Image();
	 imageObj.src = data;
	 
	 //imageObj의 이미지 로딩이 제대로 되지 않았을시 
     imageObj.onerror = function() {
    	 imageObj.src = data;
     };
	 
	 
	 imageObj.onload = function () {
		 var image = new Konva.Image({
             x: 300,
             y: 300,
             image: imageObj,
             name: 'iamge ' + node_num,
             draggable: true,
             src: this.src,
         });
         
         layer.add(image);
         layer.draw();
     };
     
}

function addVideo() {

    // 미완
    // 방법 : iframe을 display:none 해놓은 div에 숨기기
    // 좌표값을 지정해서 DB에 저장

    var iframe = document.createElement('iframe');
    iframe.width = 560;
    iframe.height = 315;
    iframe.src = 'https://www.youtube.com/embed/49YyDDhujys';
    iframe.frameborder = 0;
    iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
    iframe.allowfullscreen = true;
    iframe.draggable = true;



    document.body.appendChild(iframe);

    console.log(iframe);



    var video = document.createElement('video');
    video.src =
        'http://download.blender.org/peach/bigbuckbunny_movies/BigBuckBunny_320x180.mp4';

    video.width = 320;
    video.height = 180;

    var image = new Konva.Image({
        image: video,
        draggable: true,
        x: 0,
        y: 0
    });

    layer.add(image);
    //    
    // data가 load 될때 크기 조정
    video.addEventListener('loadedmetadata', function (e) {
        image.width(video.width);
        image.height(video.height);
    });

    var anim = new Konva.Animation(function () {
        // do nothing, adnimation just need to update the layer
    }, layer);

    video.play();
    anim.start();

    layer.draw();
}

var code_mode; // code 언어
var code_theme; // code 테마
var code_img;

function addCode() {

    var editor = null;

    editor = CodeMirror.fromTextArea(document.getElementById('code_editor'), {
        mode: "javascript", // text/html 추가 java
        lineNumbers: true,
        tabMode: 'indent',
        styleActiveLine: true,
        lineWrapping: true,
        autoCloseTags: true
        // tabSize: 10, //tab 몇칸 띄우는지
    });

    // 모드 선택
    $('#modeSelect').on('change', function () {
        code_mode = $('#modeSelect').val();

        editor.setOption('mode', code_mode);
        editor.save();
    });

    // 테마 선택
    $('#themeSelect').on('change', function () {
        code_theme = $('#themeSelect').val();

        editor.setOption('theme', code_theme);
        editor.save();
    });
    editor.setSize(600, 500);

    // 작성 버튼
    $('#completeBtn').on('click', function () {

        var codemirror = $('.CodeMirror');

        var code_div = document.createElement('div');
        code_div.className = 'code_div' + node_num;

        // -webkit-font-smoothing: antialiased;
        // -moz-osx-font-smoothing: grayscale;
        // codemirror.css('-webkit-font-smoothing', 'antialiased;');
        // codemirror.css('-moz-osx-font-smoothing', 'grayscale;');



        // code_div.style.display = 'none';



        // getElementById('test');
        document.body.appendChild(code_div);




        $('.code_div' + node_num).html(codemirror);



        var onetwo = $('.code_div' + node_num);
        var imagestring;
        
        // html2canvas(codemirror, {
        // letterRendering: true,
        // useCORS: true,
        // //onclone: ' ',
        // //allowTaint: true,
        // windowWidth:600,
        // windowHeight:500,
        // ignoreElements: ' ',
        // width: 600,
        // height: 500,
        //            
        // onrendered: function (canvas) {
        //                
        // // imagestring = canvas.toDataURL("image/png");
        // // console.log(imagestring);
        //                
        // canvas.toBlob(function (blob) {
        //
        // saveAs(blob, 'test.png');
        //
        // });
        //
        // }
        //
        // });

        // 전체 스크린 샷하기
        html2canvas(codemirror).then(
            function (canvas) {
                // canvas 결과값을 drawImg 함수를 통해서
                // 결과를 canvas 넘어줌.
                // png의 결과 값
                drawImg(canvas.toDataURL('image/png'));

                // appendchild 부분을 주석을 풀게 되면 body
                // document.body.appendChild(canvas);

                // 특별부록 파일 저장하기 위한 부분.
                saveAs(canvas.toDataURL(), 'file-name.png');
            }).catch(function (err) {
            console.log(err);
        });








        // 이미지로 렌더링
// var cap = html2canvas(document.querySelector(".code_div" +
// node_num)).then(capture => {
// code_img = new Konva.Image({
// image: capture,
// draggable: true,
// name: 'code_img ',
//
// });
//
// layer.add(code_img);
// layer.draw();
// });
//
// $('#code_capture').html('');



        // css 위치 값으로 컨트롤
        $(".code_div" + node_num).draggable({
            containment: "#container",
            scroll: true
        });

        // css 위치값 확인
        $(".code_div" + node_num).css('left', '98px');
        $(".code_div" + node_num).css('top', '-700px');
        $(".code_div" + node_num).css('width', '600px !important');
        $(".code_div" + node_num).css('height', '500px !important');
        $(".CodeMirror").css('margin', '0px !important');

        $(".code_div" + node_num).css('display', 'inline');





        // modal 끄기
        $('.jk-modalsasun').css('display', 'none');

    });

    // 닫기 버튼
    $('#closeBtn').on('click', function () {
        $('.jk-modalsasun').css('display', 'none');
    });

}

document.addEventListener('click', (e) => {
    console.log(e);


    // e.addEventListener('drag', (e2)=>{
    // console.log('left: ' + e2.css('left') +', top: ' + e2.css('top'));
    // });

});

function drawImg(imgData) {
    console.log(imgData);
    // imgData의 결과값을 console 로그롤 보실 수 있습니다.
    return new Promise(function reslove() {
        // 내가 결과 값을 그릴 canvas 부분 설정
        var canvas = document.getElementById('canvas');
        var ctx = canvas.getContext('2d');
        // canvas의 뿌려진 부분 초기화
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        var imageObj = new Image();
        imageObj.onload = function () {
            ctx.drawImage(imageObj, 10, 10);
            // canvas img를 그리겠다.
        };
        imageObj.src = imgData;
        // 그릴 image데이터를 넣어준다.

    }, function reject() {});

}

function saveAs(uri, filename) {
    var link = document.createElement('a');
    if (typeof link.download === 'string') {
        link.href = uri;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    } else {
        window.open(uri);
    }
}