# Autodecor

**Autodecor** is a minimalist jQuery plugin to create a beautiful section with floating objects. It is a very lightweight plugin and very easy to use.

**[Click here for demo](https://raazmi.github.io/autodecor/dist/)**

## Usage
- Insert autodecor.js or autodecor.min.js on your site.

	`<script src="autodecor.js"></script>`
	or,
	`<script src="autodecor.min.js"></script>`
	
- Active autodecor with a selector.
	`$('.autodecor').autodecor();`

## Options
**animate**: true,  
**animationName**: 'rotate',  
**animationDuration**: '5s',  
**animationDelay** : '0s',  
**opacity**: 1,  
**max-height**: '50px',  
**max-width**: 50px,  

> Here you see our default values. You can change this with your custom values.  

**Included Animations:** *rotate*, *fadeinout*, *zoominout*, *dancing*, *bouncing*, *bouncingx*, *flipx*, *flipy*, *bouncezoom*  

##### Usage
`$('.autodecor').autodecor({
	animate: true,
	animationName: ‘rotate’,
	moreoptions...
});`

### #The End#

