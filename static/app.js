function upload(){
  document.getElementById("loading").style.visibility = "visible";
}


$(function()
{
  $('.scroll-pane').jScrollPane(
    {
      hijackInternalLinks: true
    }
  );
});
    

function UpdateQueryString(key, value, url) {
  if(window.location.href.includes("?user="+$.cookie("username"))){
    return true;
  }
    if (!url) url = window.location.href;
    var re = new RegExp("([?&])" + key + "=.*?(&|#|$)(.*)", "gi"),
        hash;

    if (re.test(url)) {
        if (typeof value !== 'undefined' && value !== null) {
            location.href = url.replace(re, '$1' + key + "=" + value + '$2$3');
        } 
        else {
            hash = url.split('#');
            url = hash[0].replace(re, '$1$3').replace(/(&|\?)$/, '');
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                url += '#' + hash[1];
            }
            location.href = url;
        }
    }
    else {
        if (typeof value !== 'undefined' && value !== null) {
            var separator = url.indexOf('?') !== -1 ? '&' : '?';
            hash = url.split('#');
            url = hash[0] + separator + key + '=' + value;
            if (typeof hash[1] !== 'undefined' && hash[1] !== null) {
                url += '#' + hash[1];
            }
            location.href = url;
        }
        else {
            location.href = url;
        }
    }
}

function authorize(){
  if($.cookie("authorized") === undefined){
    location.href = "/pin/";
  } else if($.cookie("username") === undefined){
    location.href = "/user/";
  } else if($.cookie("username") !== undefined && $.cookie("authorized") !== undefined){
    UpdateQueryString("user", $.cookie("username"))
  }
  
  
}

$(document).ready(function () {
  authorize()
});


function usedCredits(){
  document.cookie = "credits="+(parseInt($.cookie("credits"))-1)+"; expires=Thu, 18 Dec 3000 12:00:00 UTC; SameSite=None;";
  loadCredits()
}

document.getElementById("dir").src = "./dir/?user="+$.cookie("username")