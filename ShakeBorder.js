$.fn.extend({ShakeBorder: function(opciones) {
					var ShakeBorder=this;
					theClassShake=$(ShakeBorder).attr('class');
					
					
					defaults = {shake:true,border:true}
					var opciones = $.extend({}, defaults, opciones);
					
					if(opciones.shake){
						shakecode ='<style>@-webkit-keyframes spaceboots {0%   { -webkit-transform: translate(2px, 1px)   rotate(0deg); }10%  { -webkit-transform: translate(-1px, -2px) rotate(-1deg); }	20%  { -webkit-transform: translate(-3px, 0px)  rotate(1deg); }';
						shakecode=shakecode+'30%  { -webkit-transform: translate(0px, 2px)   rotate(0deg); }';
						shakecode=shakecode+'40%  { -webkit-transform: translate(1px, -1px)  rotate(1deg); }';
						shakecode=shakecode+'50%  { -webkit-transform: translate(-1px, 1px)  rotate(-1deg); }';
						shakecode=shakecode+'60%  { -webkit-transform: translate(-3px, -2px)  rotate(0deg); }';
						shakecode=shakecode+'70%  { -webkit-transform: translate(2px, 1px)   rotate(-1deg); }';
						shakecode=shakecode+'80%  { -webkit-transform: translate(-1px, -2px) rotate(1deg); }';
						shakecode=shakecode+'90%  { -webkit-transform: translate(2px, -1px)   rotate(0deg); }';
						shakecode=shakecode+'100% { -webkit-transform: translate(1px, -2px)  rotate(-1deg); }}';
						shakecode=shakecode+"."+theClassShake+":hover,."+theClassShake+":focus,."+theClassShake+":hover,."+theClassShake+":focus {-webkit-animation-name: 'spaceboots';-webkit-animation-duration: 0.8s;-webkit-transform-origin:50% 50%;-webkit-animation-iteration-count: infinite;	-webkit-animation-timing-function: linear;}";
						shakecode=shakecode+'.'+theClassShake+' {display:block;	position:relative;}';
						shakecode=shakecode+'.'+theClassShake+'.inline {display:inline-block;}</style>';
						
						
						shakecode ='<style>.'+theClassShake+' {display:block;position:relative;}';
						shakecode=shakecode+'.'+theClassShake+':hover {-webkit-animation-name: shakeEffect;';
						shakecode=shakecode+'-moz-animation-name: shakeEffect;';
						shakecode=shakecode+'animation-name: shakeEffect;';
						shakecode=shakecode+'-webkit-animation-duration: 0.8s;';
						shakecode=shakecode+'-moz-animation-duration: 0.8s;'
						shakecode=shakecode+'animation-duration: 0.8s;';
						shakecode=shakecode+'-webkit-transform-origin:50% 50%;';
						shakecode=shakecode+'-moz-transform-origin:50% 50%;';
			shakecode=shakecode+'transform-origin:50% 50%;';
			shakecode=shakecode+'-webkit-animation-iteration-count: infinite;';
			shakecode=shakecode+'-moz-animation-iteration-count: infinite;';
			shakecode=shakecode+'animation-iteration-count: infinite;';
			shakecode=shakecode+'-webkit-animation-timing-function: linear;';
			shakecode=shakecode+'-moz-animation-timing-function: linear;';
			shakecode=shakecode+'animation-timing-function: linear;';
			shakecode=shakecode+'}';
			
shakecode=shakecode+theClassShake+'</style>';						
			$(ShakeBorder).before(shakecode);					
			}
				if(opciones.border){
						shakecode='';
						shakecode=shakecode+"<style>."+theClassShake+":hover img{opacity:1;filter: alpha(opacity = 100);}";
						shakecode=shakecode+"."+theClassShake+":hover .Ot1{border-color:#0088EA;box-shadow:0 0 10px #0285E2;}"
						shakecode=shakecode+"."+theClassShake+":hover .outer2{opacity:1;filter: alpha(opacity = 100);box-shadow:0 0 20px #8EB9FF;} </style>"
						$(ShakeBorder).before(shakecode);
				}
				$(ShakeBorder).each(function( index ) {
					thesrc=$(this).attr('src');
					attralt=$(this).attr('alt');
					alt='';
					if (typeof attralt !== typeof undefined && attralt !== false) {{ alt=attralt; }}
					var theCode='';
					theCode=theCode+'<div class=" HoverShakeImage '+theClassShake+'">';
					theCode=theCode+'<div class="Ot1 crclu"></div>';
					theCode=theCode+'<div class="outer2 crclu"></div>';
					theCode=theCode+'<figure>';
					theCode=theCode+'<img src="'+thesrc+'" />';
					theCode=theCode+'<figcaption class="caption">'+alt+'</figcaption>';
					theCode=theCode+'</figure>';
					theCode=theCode+'</div>';
					$(this).replaceWith( theCode );
				});
	}
});