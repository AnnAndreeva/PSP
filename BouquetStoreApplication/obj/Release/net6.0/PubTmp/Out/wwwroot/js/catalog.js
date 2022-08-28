
window.onload = (function () {
    loadNext();
});

function loadNext() {
    var innerhtml = document.getElementById("prodlist").innerHTML;
    $.ajax({
        url: '/Home/GetCatalog',
        method: 'GET',
        dataType: 'json',
        crossDomain: false,
        success: function (data) {
            //var res = JSON.parse(data);    
            data.forEach(elem => {
                innerhtml += `<div class="catalog__col">`;
                innerhtml += `<div class="product">`;
                innerhtml += `<img src="/images/default.png">
							  <p class="name_bouqet">${elem.BouquetName}</p>
							  <p>${elem.Description}</p>
							  <p>Размер: ${elem.Size}</p>
							  <p>Состав: ${elem.Flowers}</p>
							  <p class="price">${elem.Price} руб</p>
							  <button style="text-decoration: none; color: black" onclick="window.location.href='/Home/Cart'">Добавить в корзину</button>`;
                innerhtml += `</div>
						</div>`
            });

        },
        complete: function () {
            document.getElementById("prodlist").innerHTML = innerhtml;
        }
    });

}

function filters() {

    var data = {
        'isRoses': $('#checktype1')[0].checked,
        'isChrysanthemum': $('#checktype2')[0].checked,
        'isPion': $('#checktype3')[0].checked,
        'isLily': $('#checktype4')[0].checked,
        'isHyacinth': $('#checktype5')[0].checked,
        'isGypsophila': $('#checktype6')[0].checked,
        'isTulip': $('#checktype7')[0].checked,
        'isSmall': $('#checksize1')[0].checked,
        'isMiddle': $('#checksize2')[0].checked,
        'isBig': $('#checksize3')[0].checked,
        'lowPrice': ($('#price_before')[0].value != '') ? $('#price_before')[0].value : 0,
        'highPrice': ($('#price_after')[0].value != '') ? $('#price_after')[0].value : 999999,
        'sort': $('#asc')[0].checked ? 'asc' : 'desc'
    };

    var innerhtml = "";

    $.ajax({
        url: '/Home/Search',
        contentType: 'application/json; charset=utf-8',
        method: 'POST',
        data: JSON.stringify(data),
        crossDomain: true,
        success: function (data) {
            var res = JSON.parse(data);
            var idx = 0;

            res.forEach(elem => {
                innerhtml += `<div class="catalog__col">`;
                innerhtml += `<div class="product">`;
                innerhtml += `<img src="/images/default.png">
							  <p class="name_bouqet">${elem.BouquetName}</p>
							  <p>${elem.Description}</p>
							  <p>Размер: ${elem.Size}</p>
							  <p>Состав: ${elem.Flowers}</p>
							  <p class="price">${elem.Price} руб</p>
							  <button style="text-decoration: none; color: black" onclick="window.location.href='/Home/Cart'">Добавить в корзину</button>`;
                innerhtml += `</div>
						</div>`
            });
        },
        complete: function () {
            document.getElementById("prodlist").innerHTML = innerhtml;
        }
    });
}

function smartSearch(value) {
    var innerhtml = "";

    if (value == "") {
        document.getElementById("smart-search").style.backgroundColor = 'white';
        document.getElementById("search-res").innerHTML = "";
        $.ajax({
            url: '/Home/SmartSearch',
            contentType: 'application/json; charset=utf-8',
            method: 'GET',
            dataType: 'json',
            crossDomain: false,
            success: function (data) {
                //var res = JSON.parse(data);   
                data.forEach(elem => {
                    innerhtml += `<div class="catalog__col">`;
                    innerhtml += `<div class="product">`;
                    innerhtml += `<img src="/images/default.png">
							  <p class="name_bouqet">${elem.BouquetName}</p>
							  <p>${elem.Description}</p>
							  <p>Размер: ${elem.Size}</p>
							  <p>Состав: ${elem.Flowers}</p>
							  <p class="price">${elem.Price} руб</p>
							  <button style="text-decoration: none; color: black" onclick="window.location.href='/Home/Cart'">Добавить в корзину</button>`;
                    innerhtml += `</div>
						</div>`
                });

            },
            complete: function () {
                document.getElementById("prodlist").innerHTML = innerhtml;
            }
        });

    } else {
        $.ajax({
            url: '/Home/SmartSearch',
            contentType: 'application/json; charset=utf-8',
            method: 'GET',
            data: { value: value },
            crossDomain: true,
            success: function (data) {
                var res = JSON.parse(data);

                if (res.length == 0) {
                    document.getElementById("smart-search").style.backgroundColor = 'yellow';
                } else if (res.length == 1) {
                    document.getElementById("smart-search").style.backgroundColor = 'white';
                    console.log(res[0]);
                    innerhtml += `<div class="catalog__col">`;
                    innerhtml += `<div class="product">`;
                    innerhtml += `<img src="/images/default.png">
							  <p class="name_bouqet">${res[0].BouquetName}</p>
							  <p>${res[0].Description}</p>
							  <p>Размер: ${res[0].Size}</p>
							  <p>Состав: ${res[0].Flowers}</p>
							  <p class="price">${res[0].Price} руб</p>
							  <button style="text-decoration: none; color: black" onclick="window.location.href='/Home/Cart'">Добавить в корзину</button>`;
                    innerhtml += `</div>
						</div>`
                } else {
                    document.getElementById("smart-search").style.backgroundColor = 'white';
                    res.forEach(elem => {
                        innerhtml += `<div class="catalog__col">`;
                        innerhtml += `<div class="product">`;
                        innerhtml += `<img src="/images/default.png">
							  <p class="name_bouqet">${elem.BouquetName}</p>
							  <p>${elem.Description}</p>
							  <p>Размер: ${elem.Size}</p>
							  <p>Состав: ${elem.Flowers}</p>
							  <p class="price">${elem.Price} руб</p>
							  <button style="text-decoration: none; color: black" onclick="window.location.href='/Home/Cart'">Добавить в корзину</button>`;
                        innerhtml += `</div>
						</div>`
                    });
                }

            },
            complete: function () {
                document.getElementById("prodlist").innerHTML = innerhtml;
            }
        });
    }

}

function openAddForm() {

    document.getElementById("myAddForm").style.display = "block";
}

function closeAddForm() {
    document.getElementById("myAddForm").style.display = "none";
    var innerhtml = "";
    $.ajax({
        url: '/Home/GetCatalog',
        method: 'GET',
        dataType: 'json',
        crossDomain: false,
        success: function (data) {
            //var res = JSON.parse(data);  
           
            data.forEach(elem => {                
                innerhtml += `<div class="catalog__col">`;
                innerhtml += `<div class="product">`;
                innerhtml += `<img src="/images/default.png">
							  <p class="name_bouqet">${elem.BouquetName}</p>
							  <p>${elem.Description}</p>
							  <p>Размер: ${elem.Size}</p>
							  <p>Состав: ${elem.Flowers}</p>
							  <p class="price">${elem.Price} руб</p>
							  <button style="text-decoration: none; color: black" onclick="window.location.href='/Home/Cart'">Добавить в корзину</button>`;
                innerhtml += `</div>
						</div>`
            });
        },
        complete: function () {
            document.getElementById("prodlist").innerHTML = "";
            document.getElementById("prodlist").innerHTML = innerhtml;
        }
    });

}


function checkAddForm(event) {
    var nameFormat = /^[А-Яа-яA-Za-zёЁ\ \"]+$/;
    if (document.form2.name_Add.value === "") {
        alert("Укажите название букета");
        document.form2.name_Add.focus();
        return false;
    }
    if (!nameFormat.test(document.form2.name_Add.value) || document.form2.name_Add.value.length < 2 || document.form2.name_Add.value.length > 50) {
        alert("Неверный формат названия букета");
        document.form2.name_Add.focus();
        return false;
    }

    if (document.form2.size_Add.value === "") {
        alert("Укажите размер букета");
        document.form2.size_Add.focus();
        return false;
    }

    if (document.form2.flowers_Add.value === "") {
        alert("Укажите хотя бы один вид цветов в составе букета");
        document.form2.flowers_Add.focus();
        return false;
    } else

        if (document.form2.price_Add.value === "") {
            alert("Укажите цену букета");
            document.form2.price_Add.focus();
            return false;
        }
    if (document.form2.price_Add.value <= 0) {
        alert("Неверный формат цены букета");
        document.form2.price_Add.focus();
        return false;
    }

    if (document.form2.description_Add.value === "") {
        alert("Добавьте описание букета");
        document.form2.description_Add.focus();
        return false;
    }
    if (document.form2.name_Add.value.length != 0) {
        $.ajax({
            url: '/Home/GetCatalog',
            method: 'GET',
            dataType: 'json',
            crossDomain: false,
            success: function (data) {
                var isUnique = true;
                data.forEach(elem => {
                    if (elem.BouquetName === "Букет \"" + $('#name_Add').val() + "\"") {
                        alert("Букет с таким названием уже существует.");
                        document.form2.name_Add.focus();
                        isUnique = false;
                        return false;
                    }
                });
                if (isUnique) {
                    addProd();
                    alert("Букет добавлен.");
                    return true;
                }
            }
        });
    }
    
    return false;
}

function addProd() {
    //var data = new FormData();
    var bName = "Букет \"" + $('#name_Add').val() + "\"";
    var size = $('#size_Add').val();
    var description = $('#description_Add').val();
    var price = $('#price_Add').val();

    var elm = document.getElementById("flowers_Add");

    //в этот массив будем отбирать выбранные значения
    var values = [];

    //случай мульти-режима
    //перебираем массив опций
    for (var i = 0; i < elm.options.length; i++) {
        //если опция выбрана - добавим её в массив
        if (elm.options[i].selected)
            values.push(elm.options[i].value);
    }
    var flowers = "";
    for (var i = 0; i < values.length - 1; i++) {
        flowers += values[i] + ", ";
    }

    flowers += values[values.length - 1];

    var model = {
        BouquetName: bName,
        Size: size,
        Description: description,
        Price: price,
        Flowers: flowers
    }

    $.ajax({
        url: "/Home/AddProduct",
        method: 'POST',
        dataType: 'json',
        data: model,
        success: function (data) {

        },
        complete: function () {
        }
    });
    return true;
}


