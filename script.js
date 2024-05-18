document.getElementById('HomeButton').addEventListener('click',function() {
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
});
document.getElementById('HomeButton1').addEventListener('click',function() {
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
});
document.getElementById('HomeButton2').addEventListener('click',function() {
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
});
document.getElementById('HomeButton3').addEventListener('click',function() {
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
});
document.getElementById('HomeButton4').addEventListener('click',function() {
    document.getElementById("home").scrollIntoView({behavior:"smooth"});
});
document.getElementById('ResumeButton').addEventListener('click',function(){
const link = document.createElement('a');
link.href = "C://Users//Shree//Desktop//Portfolio/My_Resume.pdf";
link.download = 'My_Resume.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
});


