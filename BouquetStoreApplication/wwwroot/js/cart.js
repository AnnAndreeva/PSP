/* */

function openForm() {
    document.getElementById("myForm").style.display = "block"; }

 function closeForm() {
    document.getElementById("myForm").style.display = "none";
}


function checkForm() {
    var nameFormat = /^[А-Яа-яA-Za-zёЁ\ \-]+$/;
    var mailFormat = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    var phoneFormat = /^[\+]?\d[\d\(\)\ \-]{4,15}\d$/;

    if( document.form1.namef.value === "" ) {
        alert( "Укажите имя" );
        document.form1.namef.focus() ;
        return false;
    }
    if( !nameFormat.test(document.form1.namef.value) || document.form1.namef.value.length < 2 || document.form1.namef.value.length > 50) {
        alert( "Неверный формат имени" );
        document.form1.namef.focus() ;
        return false;
     }

    if( document.form1.surname.value === "" ) {
        alert( "Укажите фамилию" );
        document.form1.surname.focus() ;
        return false;
    }
    if( !nameFormat.test(document.form1.surname.value) || document.form1.surname.value.length < 2 || document.form1.surname.value.length > 50) {
        alert( "Неверный формат фамилии." );
        document.form1.surname.focus() ;
        return false;
    }

    if( document.form1.email.value === "" ) {
        alert( "Укажите эл. почту" );
        document.form1.email.focus() ;
        return false;
    }
    if( !mailFormat.test(document.form1.email.value)){
         alert( "Неверный формат эл. почты" );
         document.form1.email.focus() ;
         return false;

    }

    if( document.form1.phone.value === "" ) {
        alert( "Укажите телефон" );
        return false;
    }
    if( !phoneFormat.test(document.form1.phone.value)){
         alert( "Неверный формат телефона" );
         document.form1.email.focus() ;
         return false;
    }
    return( true );
}