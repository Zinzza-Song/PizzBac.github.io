window.onload = function () {
  let nowMonth = new Date(); // 현재 달을 페이지를 로드한 날의 달로 초기화
  let today = new Date(); // 페이지를 로드한 날짜를 저장
  let date =
    nowMonth.getFullYear() +
    "년" +
    (nowMonth.getMonth() + 1) +
    "월" +
    today.getDate() +
    "일";
  document.getElementById("main_today").innerHTML = date;

  var diary = decodeURIComponent(decodeURI(get_cookie("input")));
  var keys = decodeURIComponent(decodeURI(get_cookie("key")));

  var sideTextEl = document.querySelector(".side_day_text");
  sideTextEl.innerText = diary;

  var keyosrdsEl = document.querySelector(".side_div_keywords ul");

  var keyVal = keys.split(",");
  console.log(keyVal);
  keyVal.forEach((val) => {
    console.log(val);
    keyosrdsEl.innerHTML += /* HTML */ `
      <li id="keywords"><span>${val}</span></li>
    `;
  });
};

// 이미지 클릭시 모달 창
$(function () {
  // 	이미지 클릭시 해당 이미지 모달
  $(".div_main_pic").click(function () {
    $(".modal").show();
    // 해당 이미지 가겨오기
    var imgSrc = $(this).children("img").attr("src");
    var imgAlt = $(this).children("img").attr("alt");
    $(".modalBox img").attr("src", imgSrc);
    $(".modalBox img").attr("alt", imgAlt);

    // 해당 이미지 텍스트 가져오기
    var imgTit = $(this).children("p").text();
    $(".modalBox p").text(imgTit);

    // 해당 이미지에 alt값을 가져와 제목으로
    //$(".modalBox p").text(imgAlt);
  });

  //.modal안에 button을 클릭하면 .modal닫기
  $(".modal button").click(function () {
    $(".modal").hide();
  });

  //.modal밖에 클릭시 닫힘
  $(".modal").click(function (e) {
    if (e.target.className != "modal") {
      return false;
    } else {
      $(".modal").hide();
    }
  });
});

// 이미지 썸네일 클릭시 전환하기
var photo = document.getElementById("main_photo");
var thumbnail = document.querySelectorAll("#gallery > li > img");

for (var i = 0; i < thumbnail.length; i++)
  thumbnail[i].addEventListener("click", function () {
    photo.setAttribute("src", this.getAttribute("src"));
    // photo.src = this.src;
  });

var photo = document.getElementById("main_photo");
var thumbnail = document.querySelectorAll("#gallery > li > img");

for (var i = 0; i < thumbnail.length; i++)
  thumbnail[i].addEventListener("click", function () {
    photo.setAttribute("src", this.getAttribute("src"));
    // photo.src = this.src;
  });

function get_cookie(name) {
  var value = document.cookie.match("(^|;) ?" + name + "=([^;]*)(;|$)");
  return value ? value[2] : null;
}
