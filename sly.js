var i=0;
  var images=[];
  var time =3000;

  //image list
  images[0]='b1.jpg';
  images[1]='b2.jpg';
  images[2]='b3.jpg';
  images[3]='b4.jpg';


  //change images
  function changeimg(argument) {
    // body...
    document.slide.src=images[i];
    
    if (i< images.length - 1) {
      i++;
    }
    else{
      i=0;
    }
    setTimeout("changeimg()",time);
  }
  window.onload = changeimg;

