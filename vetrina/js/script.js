
// leggi accenni su ES6 e la differenza tra const, let e var
function sendMail(){
    let oggetto = document.getElementById("oggetto").value;
    let corpo = document.getElementById("corpo").value;
    var mailto_link = 'mailto:luciadanna04@gmail.com?subject=' + oggetto + '&body=' + corpo;
    win = window.open(mailto_link, 'emailWindow');
    if (win && win.open && !win.closed) win.close();
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })
   
$(function () {
    var numclic=1;
    $('[data-toggle="popover"]').click(function(){
      if(numclic==0){
        $('[data-toggle="popover"]').popover('show');
        numclic=1;
      }
      else{
        $('[data-toggle="popover"]').popover('hide');
        numclic=0;
      }
    });
})
