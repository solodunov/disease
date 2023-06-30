function filterImages() {
    var searchTerm = document.getElementById("search").value.toLowerCase();
    var imageBlocks = document.getElementsByClassName("image_block");

    for (var i = 0; i < imageBlocks.length; i++) {
        var imageBlock = imageBlocks[i];
        var image = imageBlock.getElementsByTagName("img")[0];
        var label = image.getAttribute("data-lebel").toLowerCase();

        if (label === searchTerm || searchTerm === '') {
            imageBlock.style.display = "block";
        } else {
            imageBlock.style.display = "none";
        }
    }
}

var modal = document.getElementById("myModal1");
var img = document.getElementById("аденоиды");
var span = document.getElementsByClassName("close1")[0];
img.onclick = function () {
    modal.style.display = "block";
}
span.onclick = function () {
    modal.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
var modal2 = document.getElementById("myModal2");
var img2 = document.getElementById("аллергические заболевания");
var span2 = document.getElementsByClassName("close2")[0];
img2.onclick = function () {
    modal2.style.display = "block";
}
span2.onclick = function () {
    modal2.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
var modal3 = document.getElementById("myModal3");
var img3 = document.getElementById("Болезнь Альцгеймера");
var span3 = document.getElementsByClassName("close3")[0];
img3.onclick = function () {
    modal3.style.display = "block";
}
span3.onclick = function () {
    modal3.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}
var modal4 = document.getElementById("myModal4");
var img4 = document.getElementById("Боковой амиотрофическийсклероз");
var span4 = document.getElementsByClassName("close4")[0];
img4.onclick = function () {
    modal4.style.display = "block";
}
span4.onclick = function () {
    modal4.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal4) {
        modal4.style.display = "none";
    }
}
var modal5 = document.getElementById("myModal5");
var img5 = document.getElementById("Болезни сердца и сосудов");
var span5 = document.getElementsByClassName("close5")[0];
img5.onclick = function () {
    modal5.style.display = "block";
}
span5.onclick = function () {
    modal5.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal5) {
        modal5.style.display = "none";
    }
}
var modal6 = document.getElementById("myModal6");
var img6 = document.getElementById("Болезнь Крона");
var span6 = document.getElementsByClassName("close6")[0];
img6.onclick = function () {
    modal6.style.display = "block";
}
span6.onclick = function () {
    modal6.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal6) {
        modal6.style.display = "none";
    }
}
var modal7 = document.getElementById("myModal7");
var img7 = document.getElementById("Бронхиальная астма");
var span7 = document.getElementsByClassName("close7")[0];
img7.onclick = function () {
    modal7.style.display = "block";
}
span7.onclick = function () {
    modal7.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal7) {
        modal7.style.display = "none";
    }
}
var modal8 = document.getElementById("myModal8");
var img8 = document.getElementById("ВИЧ/СПИД");
var span8 = document.getElementsByClassName("close8")[0];
img8.onclick = function () {
    modal8.style.display = "block";
}
span8.onclick = function () {
    modal8.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal8) {
        modal8.style.display = "none";
    }
}

var modal9 = document.getElementById("myModal9");
var img9 = document.getElementById("Геморрой");
var span9 = document.getElementsByClassName("close9")[0];
img9.onclick = function () {
    modal9.style.display = "block";
}
span9.onclick = function () {
    modal9.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal9) {
        modal9.style.display = "none";
    }
}

var modal10 = document.getElementById("myModal10");
var img10 = document.getElementById("Гепатит");
var span10 = document.getElementsByClassName("close10")[0];
img10.onclick = function () {
    modal10.style.display = "block";
}
span10.onclick = function () {
    modal10.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal10) {
        modal10.style.display = "none";
    }
}
var modal11 = document.getElementById("myModal11");
var img11 = document.getElementById("Головная боль у детей");
var span11 = document.getElementsByClassName("close11")[0];
img11.onclick = function () {
    modal11.style.display = "block";
}
span11.onclick = function () {
    modal11.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal11) {
        modal11.style.display = "none";
    }
}
var modal12 = document.getElementById("myModal12");
var img12 = document.getElementById("Деменция (слабоумие)");
var span12 = document.getElementsByClassName("close12")[0];
img12.onclick = function () {
    modal12.style.display = "block";
}
span12.onclick = function () {
    modal12.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal12) {
        modal12.style.display = "none";
    }
}
var modal13 = document.getElementById("myModal13");
var img13 = document.getElementById("Желчнокаменная болезнь");
var span13 = document.getElementsByClassName("close13")[0];
img13.onclick = function () {
    modal13.style.display = "block";
}
span13.onclick = function () {
    modal13.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == moda13) {
        modal13.style.display = "none";
    }
}
var modal14 = document.getElementById("myModal14");
var img14 = document.getElementById("Инсульт");
var span14 = document.getElementsByClassName("close14")[0];
img14.onclick = function () {
    modal14.style.display = "block";
}
span14.onclick = function () {
    modal14.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal14) {
        modal14.style.display = "none";
    }
}
var modal15 = document.getElementById("myModal15");
var img15 = document.getElementById("Клещевой энцефалит(болезнь Лайма)");
var span15 = document.getElementsByClassName("close15")[0];
img15.onclick = function () {
    modal15.style.display = "block";
}
span15.onclick = function () {
    modal15.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal15) {
        modal15.style.display = "none";
    }
}
var modal16 = document.getElementById("myModal16");
var img16 = document.getElementById("Корь");
var span16 = document.getElementsByClassName("close16")[0];
img16.onclick = function () {
    modal16.style.display = "block";
}
span16.onclick = function () {
    modal16.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal16) {
        modal16.style.display = "none";
    }
}
var modal17 = document.getElementById("myModal17");
var img17 = document.getElementById("Мастопатия");
var span17 = document.getElementsByClassName("close17")[0];
img17.onclick = function () {
    modal17.style.display = "block";
}
span17.onclick = function () {
    modal17.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal17) {
        modal17.style.display = "none";
    }
}
var modal18 = document.getElementById("myModal18");
var img18 = document.getElementById("Меланома");
var span18 = document.getElementsByClassName("close18")[0];
img18.onclick = function () {
    modal18.style.display = "block";
}
span18.onclick = function () {
    modal18.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal18) {
        modal18.style.display = "none";
    }
}
var modal19 = document.getElementById("myModal19");
var img19 = document.getElementById("Наркомания");
var span19 = document.getElementsByClassName("close19")[0];
img19.onclick = function () {
    modal19.style.display = "block";
}
span19.onclick = function () {
    modal19.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal19) {
        modal19.style.display = "none";
    }
}
var modal20 = document.getElementById("myModal20");
var img20 = document.getElementById("Ожирение");
var span20 = document.getElementsByClassName("close20")[0];
img20.onclick = function () {
    modal20.style.display = "block";
}
span20.onclick = function () {
    modal20.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal20) {
        modal20.style.display = "none";
    }
}
var modal21 = document.getElementById("myModal21");
var img21 = document.getElementById("Орторексия");
var span21 = document.getElementsByClassName("close21")[0];
img21.onclick = function () {
    modal21.style.display = "block";
}
span21.onclick = function () {
    modal21.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal21) {
        modal21.style.display = "none";
    }
}
var modal22 = document.getElementById("myModal22");
var img22 = document.getElementById("Отит");
var span22 = document.getElementsByClassName("close22")[0];
img22.onclick = function () {
    modal22.style.display = "block";
}
span22.onclick = function () {
    modal22.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal22) {
        modal22.style.display = "none";
    }
}
var modal23 = document.getElementById("myModal23");
var img23 = document.getElementById("ОРВИ");
var span23 = document.getElementsByClassName("close23")[0];
img23.onclick = function () {
    modal23.style.display = "block";
}
span23.onclick = function () {
    modal23.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal23) {
        modal23.style.display = "none";
    }
}
var modal24 = document.getElementById("myModal24");
var img24 = document.getElementById("Панкреатит");
var span24 = document.getElementsByClassName("close24")[0];
img24.onclick = function () {
    modal24.style.display = "block";
}
span24.onclick = function () {
    modal24.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal24) {
        modal24.style.display = "none";
    }
}
var modal25 = document.getElementById("myModal25");
var img25 = document.getElementById("Первичный иммунодефицит");
var span25 = document.getElementsByClassName("close25")[0];
img25.onclick = function () {
    modal25.style.display = "block";
}
span25.onclick = function () {
    modal25.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal25) {
        modal25.style.display = "none";
    }
}
var modal26 = document.getElementById("myModal26");
var img26 = document.getElementById("Плоскостопие");
var span26 = document.getElementsByClassName("close26")[0];
img26.onclick = function () {
    modal26.style.display = "block";
}
span26.onclick = function () {
    modal26.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal26) {
        modal26.style.display = "none";
    }
}
var modal27 = document.getElementById("myModal27");
var img27 = document.getElementById("Рак гортани");
var span27 = document.getElementsByClassName("close27")[0];
img27.onclick = function () {
    modal27.style.display = "block";
}
span27.onclick = function () {
    modal27.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal27) {
        modal27.style.display = "none";
    }
}
var modal28 = document.getElementById("myModal28");
var img28 = document.getElementById("Рак молочной железы");
var span28 = document.getElementsByClassName("close28")[0];
img28.onclick = function () {
    modal28.style.display = "block";
}
span28.onclick = function () {
    modal28.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal28) {
        modal28.style.display = "none";
    }
}
var modal29 = document.getElementById("myModal29");
var img29 = document.getElementById("Рак простаты");
var span29 = document.getElementsByClassName("close29")[0];
img29.onclick = function () {
    modal29.style.display = "block";
}
span29.onclick = function () {
    modal29.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal29) {
        modal29.style.display = "none";
    }
}

var modal30 = document.getElementById("myModal30");
var img30 = document.getElementById("Сколиоз");
var span30 = document.getElementsByClassName("close30")[0];
img30.onclick = function () {
    modal30.style.display = "block";
}
span30.onclick = function () {
    modal30.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal30) {
        modal30.style.display = "none";
    }
}
var modal31 = document.getElementById("myModal31");
var img31 = document.getElementById("Сахарный диабет");
var span31 = document.getElementsByClassName("close31")[0];
img31.onclick = function () {
    modal31.style.display = "block";
}
span31.onclick = function () {
    modal31.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal31) {
        modal31.style.display = "none";
    }
}
var modal32 = document.getElementById("myModal32");
var img32 = document.getElementById("Тонзиллит");
var span32 = document.getElementsByClassName("close32")[0];
img32.onclick = function () {
    modal32.style.display = "block";
}
span32.onclick = function () {
    modal32.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal32) {
        modal32.style.display = "none";
    }
}
var modal33 = document.getElementById("myModal33");
var img33 = document.getElementById("Туберкулёз");
var span33 = document.getElementsByClassName("close33")[0];
img33.onclick = function () {
    modal33.style.display = "block";
}
span33.onclick = function () {
    modal33.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal33) {
        modal33.style.display = "none";
    }
}
var modal34 = document.getElementById("myModal34");
var img34 = document.getElementById("Шизофрения");
var span34 = document.getElementsByClassName("close34")[0];
img34.onclick = function () {
    modal34.style.display = "block";
}
span34.onclick = function () {
    modal34.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal34) {
        modal34.style.display = "none";
    }
}
var modal35 = document.getElementById("myModal35");
var img35 = document.getElementById("Целиакия");
var span35 = document.getElementsByClassName("close35")[0];
img35.onclick = function () {
    modal35.style.display = "block";
}
span35.onclick = function () {
    modal35.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal35) {
        modal35.style.display = "none";
    }
}
var modal36 = document.getElementById("myModal36");
var img36 = document.getElementById("Цистит");
var span36 = document.getElementsByClassName("close36")[0];
img36.onclick = function () {
    modal36.style.display = "block";
}
span36.onclick = function () {
    modal36.style.display = "none";
}
window.onclick = function (event) {
    if (event.target == modal36) {
        modal36.style.display = "none";
    }
}
function open1() {
    window.open("https://ru.wikipedia.org/wiki/Аденоиды");
}
function open2() {
    window.open("https://ru.wikipedia.org/wiki/Аллергология");
}
function open3() {
    window.open("https://ru.wikipedia.org/wiki/Болезнь_Альцгеймера#:~:text=Боле́знь%20Альцгеймера%20(синонимы%3A%20идиопатический%20синдром,Альцгеймером%20(1864—1915).");
}
function open4() {
    window.open("https://ru.wikipedia.org/wiki/Боковой_амиотрофический_склероз");
}
function open5() {
    window.open("https://ru.wikipedia.org/wiki/Заболевания_сердца#:~:text=Заболевания%20сердца%20(болезни%20сердца)%20—,клапанного%20аппарата%20сердца%2C%20сосудов%20сердца.");
}
function open6() {
    window.open("https://ru.wikipedia.org/wiki/Болезнь_Крона");
}
function open7() {
    window.open("https://ru.wikipedia.org/wiki/Бронхиальная_астма");
}
function open8() {
    window.open("https://ru.wikipedia.org/wiki/Вирус_иммунодефицита_человека");
}
function open9() {
    window.open("https://ru.wikipedia.org/wiki/Геморрой");
}
function open10() {
    window.open("https://ru.wikipedia.org/wiki/Гепатит");
}
function open11() {
    window.open("https://ru.wikipedia.org/wiki/Головная_боль");
}
function open12() {
    window.open("https://ru.wikipedia.org/wiki/Деменция#:~:text=Деме́нция%20(лат.,затруднением%20или%20невозможностью%20приобретения%20новых.");
}
function open13() {
    window.open("https://ru.wikipedia.org/wiki/Жёлчнокаменная_болезнь");
}
function open14() {
    window.open("https://ru.wikipedia.org/wiki/Инсульт");
}
function open15() {
    window.open("https://ru.wikipedia.org/wiki/Болезнь_Лайма");
}
function open16() {
    window.open("https://ru.wikipedia.org/wiki/Корь");
}
function open17() {
    window.open("https://ru.wikipedia.org/wiki/Мастопатия");
}
function open18() {
    window.open("https://ru.wikipedia.org/wiki/Меланома");
}
function open19() {
    window.open("https://ru.wikipedia.org/wiki/Наркомания");
}
function open20() {
    window.open("https://ru.wikipedia.org/wiki/Ожирение");
}
function open21() {
    window.open("https://ru.wikipedia.org/wiki/Нервная_орторексия");
}
function open22() {
    window.open("https://ru.wikipedia.org/wiki/Средний_отит");
}
function open23() {
    window.open("https://ru.wikipedia.org/wiki/Острая_респираторная_вирусная_инфекция");
}
function open24() {
    window.open("https://ru.wikipedia.org/wiki/Панкреатит");
}
function open25() {
    window.open("https://ru.wikipedia.org/wiki/Иммунодефицит");
}
function open26() {
    window.open("https://ru.wikipedia.org/wiki/Плоскостопие");
}
function open27() {
    window.open("https://ru.wikipedia.org/wiki/Рак_гортани");
}
function open28() {
    window.open("https://ru.wikipedia.org/wiki/Рак_молочной_железы");
}
function open29() {
    window.open("https://ru.wikipedia.org/wiki/Рак_предстательной_железы");
}
function open30() {
    window.open("https://ru.wikipedia.org/wiki/Сколиоз");
}
function open31() {
    window.open("https://ru.wikipedia.org/wiki/Сахарный_диабет");
}
function open32() {
    window.open("https://ru.wikipedia.org/wiki/Острый_тонзиллит");
}
function open33() {
    window.open("https://ru.wikipedia.org/wiki/Туберкулёз");
}
function open34() {
    window.open("https://ru.wikipedia.org/wiki/Шизофрения#:~:text=σχίζω%20«расщеплять»%2C%20«раскалывать,процессов%20мышления%20и%20эмоциональных%20реакций.");
}
function open35() {
    window.open("https://ru.wikipedia.org/wiki/Целиакия");
}
function open36() {
    window.open("https://ru.wikipedia.org/wiki/Цистит#:~:text=Цисти́т%20(от%20греч.,а%20также%20изменениями%20осадка%20мочи.");
}
