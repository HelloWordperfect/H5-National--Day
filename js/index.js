var audio = $('audio')[0];
var music = $('#music')[0];



audio.addEventListener('ended',function (event){
	music.setAttribute('class','');
},false)


music.addEventListener('touchstart',function(evnet){
		if(audio.paused){
			audio.play()
			$('.music_disc').addClass('music_play');
		}
		else{
			audio.pause();
			$('.music_disc').removeClass('music_play');
			
		}
})

var screen = screen.width;
if(screen>900){
	alert('请用手机打开页面')
	audio.pause()
	/*关闭页面*/
	// window.close();
	
}

$(window).preloader({
    option: 'value'
});   