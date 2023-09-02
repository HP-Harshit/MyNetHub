// Add this script at the end of your HTML body or load it asynchronously


//    LINKS

var sharelink = "https://hp-harshit.github.io/MyNetHub/";
var contactlink = "+91 9131306169";
var maillink = "harshitpatel274@gmail.com";
var wplink = "https://wa.me/qr/DZ2AW5JPLEFLK1";
var linkedlink = "https://www.linkedin.com/in/harshit-patel-572979226";
var gitlink = "https://github.com/HP-Harshit";
var instalink = "https://instagram.com/bugcreater.exe?igshid=ZGUzMzM3NWJiOQ";
var snaplink = "https://www.snapchat.com/add/btw.itshoney?share_id=6_aGeur_p5c&locale=en-US";
var threadlink = "https://www.threads.net/@bugcreater.exe";
var fblink = "https://www.facebook.com/codeinterpreter";
var telegramlink = "https://t.me/buzzycreater";
var twitterlink = "https://twitter.com/harshitpatel274?t=QNda4bnzPiyr16DYXeSFYw&s=09";
var ytlink = "https://youtube.com/@irregulardeveloper_?si=YpUGh1MkJFFLJEAZ";


//    PHOTOS

var shareimg = "MNH.png"; 
var contactimg = "psnl.png"; 
var mailimg = "hrshit.png"; 
var wpimg = "scwp.jpg"; 
var linkedimg = "linkdin.png"; 
var gitimg = "git.png"; 
var instaimg = "scinsta.jpg"; 
var snapimg = "scsnap.jpg"; 
var threadimg = "scthread.png"; 
var fbimg = "fb.png"; 
var telegramimg = "sctelegram.jpg"; 
var twitterimg = "x.png"; 
var ytimg = "yt.png"; 









window.addEventListener("scroll", function() {
    var header = document.querySelector(".header");
    var scrollPosition = window.scrollY;

    if (scrollPosition > 100) {
      header.style.display = "block";
      header.style.backgroundColor = "rgba(70, 68, 68, 0.1)"; 
    }
    else {
    header.style.display = "none";
    header.style.backgroundColor = "transparent";
    }
});





// JavaScript code to show/hide the container and overlay



//    ELEMENTS

var image = document.getElementById("image");

var copyText = document.getElementById("copyText");

var showDivButton1 = document.getElementById("showDivButton1");
var showDivButton2 = document.getElementById("showDivButton2");
var contact = document.getElementById("contact");
var mail = document.getElementById("mail");
var whatsapp = document.getElementById("whatsapp");
var linkedin = document.getElementById("linkedin");
var github = document.getElementById("github");
var instagram = document.getElementById("instagram");
var snapchat = document.getElementById("snapchat");
var thread = document.getElementById("thread");
var facebook = document.getElementById("facebook");
var telegram = document.getElementById("telegram");
var twitter = document.getElementById("twitter");
var youtube = document.getElementById("youtube");


var modalContainer = document.getElementById("modal-container");
var overlay = document.getElementById("overlay");
var closeButton = document.getElementById("close-button");




//      ONCLICK EVENT



// showDivButton.onclick = function() {
//   modalContainer.style.display = "block";
//   overlay.style.display = "block";
// };

    
      showDivButton1.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = sharelink;
      image.src = shareimg;
    };
    
      showDivButton2.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = sharelink;
      image.src = shareimg;
    };
    
      contact.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = contactlink;
      image.src = contactimg;
    };
    
      mail.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = maillink;
      image.src = mailimg;
    };
    
      whatsapp.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = wplink;
      image.src = wpimg;
    };
    
      linkedin.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = linkedlink;
      image.src = linkedimg;
    };
    
      github.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = gitlink;
      image.src = gitimg;
    };
    
      instagram.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = instalink;
      image.src = instaimg;
    };
    
      snapchat.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = snaplink;
      image.src = snapimg;
    };
    
      thread.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = threadlink;
      image.src = threadimg;
    };
    
      facebook.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = fblink;
      image.src = fbimg;
    };
    
      telegram.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = telegramlink;
      image.src = telegramimg;
    };
    
      twitter.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = twitterlink;
      image.src = twitterimg;
    };
    
      youtube.onclick = function() {
      modalContainer.style.display = "block";
      overlay.style.display = "block";
      copyText.value = ytlink;
      image.src = ytimg;
    };
    
    
    
    
    
    
    closeButton.onclick = function() {
      modalContainer.style.display = "none";
      overlay.style.display = "none";
};







function copyToClipboard() {
  /* Get the text field */
  var copyText = document.getElementById("copyText");

  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /* For mobile devices */

  /* Copy the text to the clipboard */
  document.execCommand("copy");

  /* Alert the user that the text has been copied */
  alert("Copied: " + copyText.value);
}

