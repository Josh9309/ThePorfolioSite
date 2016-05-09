"use strict";
		
		$(document).ready(function(){
			$("img").on("click", function(e){
				var lightbox = document.createElement("DIV");
				
				 lightbox.style.position= "fixed";   //makes sure it’s directly on the page
				 lightbox.style.height = "100%";   //set the height to 100% of the page 
				 lightbox.style.width = "100%";    //set the width to 100% of the page    
				 lightbox.style.left = 0;            //set the position to absolute left  
				 lightbox.style.top = 0;   //set the position to absolute top 
				 
				//At this point the div is at 0,0 with full screen height/width.  
				//set the background to rgb(0,0,0) with alpha (opacity) 70%     
				lightbox.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; 
				
				lightbox.style.display = "none";  //hide the box until needed 
				
				var myImg = document.createElement('IMG');
				myImg.src = e.target.src;
				
				//When the image is loaded, the function will be called.  
				myImg.onload = function(){   
					myImg.style.position = "absolute";
					
					//find the difference between half the window width/height and half the     
					//image width/height. These will be the center points of the page and the 
					//center points of the image 
					var diffWidth = $(window).width()/2 - myImg.width/2; 
					var diffHeight = $(window).height()/2 - myImg.height/2;    
					
					//since the image is absolutely positioned, we can give it the position      
					//from the left and top directly. We just need to append the units to our      
					//positions.
					myImg.style.left =  diffWidth + "px";               
					myImg.style.top = diffHeight + "px"; 
					
					lightbox.appendChild(myImg); //appends image to div
					document.body.appendChild(lightbox) //append div to body
					$(lightbox).fadeIn(200); //fade in div
				}; 
				console.log('clicked');
				
				lightbox.addEventListener("click", function(e){
					$(lightbox).fadeOut(200, function(){
						//this will not work in older browsers
						lightbox.remove();
					});
				});
			});
		});