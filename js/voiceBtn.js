const voiceBtnFirst=document.querySelector(".voice_btn_first"),voiceBtnSecond=document.querySelector(".voice_btn_second"),voiceBtnThird=document.querySelector(".voice_btn_third"),voiceFirst=document.querySelector(".voice_first"),voiceSecond=document.querySelector(".voice_second"),voiceThird=document.querySelector(".voice_third"),voiceBtnTextFirst=document.querySelector(".voice_btn_text_first"),voiceBtnTextSecond=document.querySelector(".voice_btn_text_second"),voiceBtnIconFirst=document.querySelector(".voice_btn_icon_first"),voiceBtnIconSecond=document.querySelector(".voice_btn_icon_second"),voiceBtnArr=[voiceBtnFirst,voiceBtnSecond,voiceBtnThird],voiceArr=[voiceFirst,voiceSecond,voiceThird],bg="linear-gradient(91.42deg, #FFDAA6 -1.92%, #FA858D 57.43%, #A153C9 120.52%), linear-gradient(138.06deg, #FDAE3C 13.28%, #FA858D 58.2%, #74269C 105.94%)";voiceBtnFirst.addEventListener("click",(()=>{voiceFirst.paused?(voiceFirst.play(),voiceBtnFirst.style.background="#000",voiceBtnFirst.style.color="#fff",voiceBtnTextFirst.innerHTML="пауза",voiceBtnIconFirst.style.background='url("../img/pause.svg")'):(voiceFirst.pause(),voiceBtnFirst.style.background=bg,voiceBtnFirst.style.color="#000",voiceBtnTextFirst.innerHTML="прослушать",voiceBtnIconFirst.style.background='url("../img/play.svg")')})),voiceBtnSecond.addEventListener("click",(()=>{voiceSecond.paused?(voiceSecond.play(),voiceBtnSecond.style.background="#000",voiceBtnSecond.style.color="#fff",voiceBtnTextSecond.innerHTML="пауза",voiceBtnIconSecond.style.background='url("../img/pause.svg")'):(voiceSecond.pause(),voiceSecond.pause(),voiceBtnSecond.style.background=bg,voiceBtnSecond.style.color="#000",voiceBtnTextSecond.innerHTML="прослушать",voiceBtnIconSecond.style.background='url("../img/play.svg")')}));