const url = location.protocol + '//' + location.host + location.pathname;

//Set boxes to JSON data in URL
const userData = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get("userdata")));
if (userData != null) {
    document.getElementById("p1").value = userData.p1;
    document.getElementById("p2").value = userData.p2;
    document.getElementById("p3").value = userData.p3;
    document.getElementById("p4").value = userData.p4;
    document.getElementById("p5").value = userData.p5;
    document.getElementById("p6").value = userData.p6;
    document.getElementById("p7").value = userData.p7;
    document.getElementById("hs").checked = userData.hs;
} else {
    document.getElementById("p1").value = "Class1";
    document.getElementById("p2").value = "Class2";
    document.getElementById("p3").value = "Class3";
    document.getElementById("p4").value = "Class4";
    document.getElementById("p5").value = "Class5";
    document.getElementById("p6").value = "Class6";
    document.getElementById("p7").value = "Class7";
    document.getElementById("hs").checked = false;
}

const colorData = JSON.parse(decodeURIComponent(new URLSearchParams(window.location.search).get("colordata")))
if (colorData != null) {
    document.getElementById("c1").value = colorData.c1
    document.getElementById("c2").value = colorData.c2
    document.getElementById("c3").value = colorData.c3
    document.getElementById("c4").value = colorData.c4
    document.getElementById("c5").value = colorData.c5
    document.getElementById("c6").value = colorData.c6
    document.getElementById("c7").value = colorData.c7
}

let colorheader = (new URLSearchParams(window.location.search).get("colorheader") == "true");
if (colorheader) {
    document.getElementById("colorheader").checked = colorheader
}

function openNav() {
    document.getElementById("mySidenav").style.width = "500px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}

function reload() {
    const data = {
        p1: document.getElementById("p1").value,
        p2: document.getElementById("p2").value,
        p3: document.getElementById("p3").value,
        p4: document.getElementById("p4").value,
        p5: document.getElementById("p5").value,
        p6: document.getElementById("p6").value,
        p7: document.getElementById("p7").value,
        hs: document.getElementById("hs").checked
    };
    const colors = {
        c1: document.getElementById("c1").value,
        c2: document.getElementById("c2").value,
        c3: document.getElementById("c3").value,
        c4: document.getElementById("c4").value,
        c5: document.getElementById("c5").value,
        c6: document.getElementById("c6").value,
        c7: document.getElementById("c7").value
    };
    window.location.href = url + "?userdata=" + encodeURIComponent(JSON.stringify(data)) + "&colordata=" + encodeURIComponent(JSON.stringify(colors)) + "&colorheader=" + document.getElementById("colorheader").checked;
}

function reset() {
    window.location.href = url
}

function qrCode() {
    document.getElementById("qrcode").src = "https://api.qrserver.com/v1/create-qr-code/?data=" + window.location.href
}