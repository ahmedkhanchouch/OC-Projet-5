let imageCourante = 0;
const listImages = ['assets/images/slideshow/slide1.jpg', 'assets/images/slideshow/slide2.jpg',	'assets/images/slideshow/slide3.jpg' , 'assets/images/slideshow/slide4.png'];
let dots = document.querySelectorAll('.dot');

document.getElementById('flecheDroite').addEventListener('click', () => {
dots[imageCourante].classList.remove('dot_selected');
  imageCourante = imageCourante + 1;
  if (imageCourante >= listImages.length){
	imageCourante = 0 ;
  }
  document
  .getElementById('img-carroussel')
  .setAttribute('src', listImages[imageCourante]);
	dots[imageCourante].classList.add('dot_selected');
});

document.getElementById('flecheGauche').addEventListener('click', () => {
	dots[imageCourante].classList.remove('dot_selected');
	imageCourante = imageCourante - 1;
	if (imageCourante <= 0 ){
		imageCourante = listImages.length - 1 ;
	}
	document
    .getElementById('img-carroussel')
    .setAttribute('src', listImages[imageCourante]);
	
	dots[imageCourante].classList.add('dot_selected')
});

const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]
