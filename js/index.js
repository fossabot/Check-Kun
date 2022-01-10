// 数値代入部分
const accessfrom = "アクセス元ページ:" + location.href;
const resolution = "解像度:" + screen.width + " x " + screen.height;
const browser = "ブラウザー: " + platform.name + " " + platform.version;
const os = "OS: " + platform.os.family+ " " + platform.os.version;

// ページロード時に"out*"に対し代入
window.onload = function onLoad() {
    document.getElementById("out1").innerHTML = accessfrom;
    document.getElementById("out2").innerHTML = resolution;
    document.getElementById("out3").innerHTML = browser;
    document.getElementById("out4").innerHTML = os
}
