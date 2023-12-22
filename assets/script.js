let imageCourante = 0;
const listImages = ['/assets/images/slideshow/slide1.jpg', '/assets/images/slideshow/slide2.jpg',	'/assets/images/slideshow/slide3.jpg' , '/assets/images/slideshow/slide4.png'];

document.getElementById('flecheDroite').addEventListener('click', () => {
  imageCourante = imageCourante + 1;
  document
    .getElementById('img-carroussel')
    .setAttribute('src', listImages[imageCourante]);
});

document.getElementById('flecheGauche').addEventListener('click', () => {
  imageCourante = imageCourante - 1;
  document
    .getElementById('img-carroussel')
    .setAttribute('src', listImages[imageCourante]);
	
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
