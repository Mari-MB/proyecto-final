const altura = document.body.scrollHeight - window.innerHeight;
const fondo = document.getElementById('FONDO');

window.onscroll = () => {
	const anchoFondo = (window.pageYOffset / altura) * 900;
	if(anchoFondo <= 100){
		fondo.style.width = anchoFondo + '%';
	}
}