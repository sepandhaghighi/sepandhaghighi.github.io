    var options = {
    "element": "mark",
    "className": "",
    "exclude": [],
    "separateWordSearch": false,
    "accuracy": "complementary",
    "diacritics": true,
    "synonyms": {},
    "iframes": false,
    "iframesTimeout": 5000,
    "acrossElements": false,
    "caseSensitive": false,
    "ignoreJoiners": false,
    "wildcards": "disabled",
    }
var placeholder_value=$("#db_search").attr("placeholder");
var last_search="";

$("#db_search").focusin(function(){
    $(this).attr("placeholder", "  ... جستجو");
    document.getElementById("db_search").value=last_search;
    document.getElementById("db_search").style.cursor="text";
});

$("#db_search").focusout(function(){
    $(this).attr("placeholder", placeholder_value);
    last_search=document.getElementById("db_search").value;
    document.getElementById("db_search").value="";
    document.getElementById("db_search").style.cursor="pointer";
});


$(document).ready(function(){
    var footer;
    footer=document.getElementById("login-footer");
    if ($(document).height() > $(window).height()) {
    footer.style.opacity="0.2";

}
});

$(window).scroll(function() {
    var footer;
    footer=document.getElementById("login-footer");
   if ((window.innerHeight + window.scrollY+90) >= document.body.scrollHeight) {
       footer.style.opacity="1";
   }
    else{
        footer.style.opacity="0.2";
    }
});

function marquee_control(){
    var marquee_obj;
    var first_class;
    marquee_obj=document.getElementById("marquee_obj");
    first_class=document.getElementsByClassName("first-class");
    if (marquee_obj.innerHTML.length==0){
        marquee_obj.style.display="none";
        for (i=0;i<first_class.length;i++){
            first_class[i].style.height="50%";
        }
    }
}
function login(){
    var password;
    var username;
    var message;
    username=document.getElementById("username");
    password=document.getElementById("password");
    message=document.getElementById("error-message")
    if (username.value.length==0){
    message.innerHTML="نام کاربری خود را وارد کنید";
    username.style.backgroundColor="pink";
    }
    else if (password.value.length==0){
       message.innerHTML="کلمه عبور خود را وارد کنید"; 
       password.style.backgroundColor="pink";
    }
    
    setTimeout(function(){message.innerHTML="";password.style.backgroundColor="white";username.style.backgroundColor="white";},"4000");
}



function myFunction() {
    var x = document.getElementById("myTopnav");
    var menu=document.getElementById("menu");
    var icon=document.getElementById("mobile-icon");
    if (x.className === "topnav") {
        x.className += " responsive";
        menu.style.height="auto";
        document.getElementById("search").style.display="none";
        icon.innerHTML="&#x2716;";
    } else {
        x.className = "topnav";
        menu.style.height="100px";
        document.getElementById("search").style.display="block";
        icon.innerHTML="&#9776;";
    }
}


function search_hide(){
    var menu
    menu=document.getElementById("myTopnav");
    menu.style.display="none";
}
function search_view(){
    var menu
    menu=document.getElementById("myTopnav");
    menu.style.display="block";
}

function openNav() {
    var admin_icon=document.getElementById("adicon");
    if (document.getElementById("mySidenav").style.width=="" || document.getElementById("mySidenav").style.width=="0px")
    {
        document.getElementById("mySidenav").style.width = "250px"
        admin_icon.innerHTML="&#x2716;";
    }
    else{
        document.getElementById("mySidenav").style.width = "0"
        admin_icon.innerHTML="&#9776;";
        
    }

}

function custom_search(){
    var input,filter,table,tr,td_list,i,message,counter;
    counter=0;
    input=document.getElementById("myinput");
    message=document.getElementById("search-message");
    filter=input.value.toUpperCase();
    tr=document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td_list = tr[i].getElementsByTagName("td");
        for (j=td_list.length;j>1;j--){
            td=td_list[j];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
          counter=counter+1;
          break;
      } else {
        tr[i].style.display = "none";
          
      }
    } 
  }
    }
}

function all_search(){
    var input,filter,table,tr,td_list,i,message,counter,instance;
    counter=0;
    input=document.getElementById("myinput");
    message=document.getElementById("search-message");
    filter=input.value.toUpperCase();
    tr=document.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
    td_list = tr[i].getElementsByTagName("td");
        instance=new Mark(tr[i]);
        instance.unmark(instance.innerHTML);
        for (j=0;j<td_list.length;j++){
            td=td_list[j];
    if (td) {
      if (td.innerHTML.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
          instance.mark(filter,options);
          counter=counter+1;
          break;
      } else {
        tr[i].style.display = "none";
          
      }
    } 
  }
    }
    if (counter==0){
        message.style.display="block";
    }
    else{
        message.style.display="none";
    }
}

function notif_search(){
    var input,filter,notif,p_list,i,message,counter,instance;

    counter=0;
    input=document.getElementById("myinput");
    filter=input.value.toUpperCase();
    notif=document.getElementById("notif");
    message=document.getElementById("search-message");
    p_list=notif.getElementsByTagName("p");
    for (i=0;i<p_list.length;i++){
        instance=new Mark(p_list[i]);
        if (p_list[i].innerHTML.toUpperCase().indexOf(filter)>-1){
            p_list[i].style.display="";
            instance.unmark(p_list[i].innerHTML);
            instance.mark(filter,options);
            counter=counter+1;
        }
        else{
            p_list[i].style.display="none";
            instance.unmark(filter);
        }
    }
    if (counter==0){
        message.style.display="block";
    }
    else{
        message.style.display="none";
    }
    
}

function admin_notif_search(){
    var input,filter,notif,forms,i,message,counter,textarea;
    counter=0;
    input=document.getElementById("myinput");
    filter=input.value.toUpperCase();
    notif=document.getElementById("admin-notif");
    message=document.getElementById("search-message");
    forms=notif.getElementsByTagName("form");
    textarea=document.getElementsByTagName("textarea");
    for (i=0;i<textarea.length;i++){
        
        if (textarea[i].value.toUpperCase().indexOf(filter)>-1){
            forms[i].style.display="";
            counter=counter+1;
        }
        else{
            forms[i].style.display="none";
        }
    }
    if (counter==0){
        message.style.display="block";
    }
    else{
        message.style.display="none";
    }
    
}



function floor_search(){
    var input,filter,i,j,table_list,td_list,counter,message,instance;
    counter=0;
    input=document.getElementById("myinput");
    filter=input.value.toUpperCase();
    message=document.getElementById("search-message");
    table_list=document.getElementsByTagName("table");
    for(i=0;i<table_list.length;i++){
        td_list=table_list[i].getElementsByTagName("td");
        instance=new Mark(table_list[i]);
        instance.unmark(instance.innerHTML);
        for (j=0;j<td_list.length;j++){
            if(td_list[j].innerHTML.toUpperCase().indexOf(filter)>-1){
                instance.mark(filter,options);
                table_list[i].style.display="";
                counter=counter+1;
                break;
            } 
            else{
                table_list[i].style.display="none";
                
            }
        }
    }
    if (counter==0){
        message.style.display="block";
    }
    else{
        message.style.display="none";
    }
}


var $TABLE = $('#table');
var $BTN = $('#export-btn');
var $EXPORT = $('#export');
var $NOTIFS=$('#admin-notif');
$('.table-add').click(function () {
  var $clone = $TABLE.find('tr.hide').clone(true).removeClass('hide table-line');
  $TABLE.find('table').append($clone);
});

$('.notif-add').click(function () {
  var $clone = $NOTIFS.find('form.hide').clone(true).removeClass('hide');
  $NOTIFS.append($clone);
});

$('.table-remove').click(function () {
  $(this).parents('tr').detach();
});
$('.notif-close-icon').click(function () {
  $(this).parents('form').detach();
});
$('.table-up').click(function () {
  var $row = $(this).parents('tr');
  if ($row.index() === 1) return; // Don't go above the header
  $row.prev().before($row.get(0));
});

$('.table-down').click(function () {
  var $row = $(this).parents('tr');
  $row.next().after($row.get(0));
});

// A few jQuery helpers for exporting only
jQuery.fn.pop = [].pop;
jQuery.fn.shift = [].shift;

$BTN.click(function () {
  var $rows = $TABLE.find('tr:not(:hidden)');
  var headers = [];
  var data = [];
  
  // Get the headers (add special header logic here)
  $($rows.shift()).find('th:not(:empty)').each(function () {
    headers.push($(this).text().toLowerCase());
  });
  
  // Turn all existing rows into a loopable array
  $rows.each(function () {
    var $td = $(this).find('td');
    var h = {};
    
    // Use the headers from earlier to name our hash keys
    headers.forEach(function (header, i) {
      h[header] = $td.eq(i).text();   
    });
    
    data.push(h);
  });
  
  // Output the result
  $EXPORT.text(JSON.stringify(data));
});


