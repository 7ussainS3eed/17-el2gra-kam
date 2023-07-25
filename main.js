let ogra = document.querySelector(".ogra");
let dkhool = document.querySelector(".dkhool");
let total = document.querySelector(".total");
ogra.oninput = function() {
    if (ogra.value > 0) {
        dkhool.style.display = "block";
    }
    else {
        dkhool.style.display = "none";
    }
    total.innerHTML = ogra.value * 14;
}

let first = document.querySelector(".first");
let second = document.querySelector(".second");
let microbus = document.querySelector(".microbus");
dkhool.onclick = function() {
    first.style.display = "none";
    dkhool.style.display = "none";
    second.style.display = "flex";
    microbus.style.display = "flex";
}

let reload = document.querySelector(".reload");
reload.onclick = function() {
    location.reload();
}

let chair = [];
let lkam = [];
let lkamSelect = [];
let final = [];
let matloob = [];
let matloobSpan = [];
let madfoo = [];
let madfooInput = [];
let baky = [];
let bakySpan = [];
let pov = document.querySelector(".pov");
let totalLkam = 0;
let totalMatloob = 0;
let totalMadfoo = 0;
let totalBaky = 0;
let mash = document.querySelector(".mash");
let last = document.querySelector(".last");
let last2 = document.querySelector(".last2");
let totalLkamSpan = document.querySelector(".totalLkamSpan");
let totalMatloobSpan = document.querySelector(".totalMatloobSpan");
let totalMadfooSpan = document.querySelector(".totalMadfooSpan");
let totalBakySpan = document.querySelector(".totalBakySpan");
for (i = 0; i < 14; i++) {
    chair[i] = document.createElement("div");
    chair[i].classList.add("chair");
    microbus.appendChild(chair[i]);
    lkam[i] = document.createElement("div");
    lkam[i].classList.add("lkam");
    chair[i].appendChild(lkam[i]);
    lkamSelect[i] = document.createElement("select");
    lkamSelect[i].classList.add("lkamSelect");
    lkam[i].appendChild(lkamSelect[i]);
    for (j = 0; j < 15; j++) {
        let option = document.createElement("option");
        option.value = j;
        option.innerHTML = j;
        lkamSelect[i].appendChild(option);
    }
    lkam[i].appendChild(document.createTextNode(" هيدفع لكام راكب؟"));
    final[i] = document.createElement("div");
    final[i].classList.add("final");
    chair[i].appendChild(final[i]);
    matloob[i] = document.createElement("div");
    matloob[i].classList.add("matloob");
    final[i].appendChild(matloob[i]);
    matloob[i].appendChild(document.createTextNode("المطلوب: "));
    matloobSpan[i] = document.createElement("span");
    matloobSpan[i].classList.add("matloobSpan");
    matloobSpan[i].innerHTML = 0;
    matloob[i].appendChild(matloobSpan[i]);
    matloob[i].appendChild(document.createTextNode(" جنيه"));
    madfoo[i] = document.createElement("div");
    madfoo[i].classList.add("madfoo");
    final[i].appendChild(madfoo[i]);
    madfoo[i].appendChild(document.createTextNode("المدفوع: "));
    madfooInput[i] = document.createElement("input");
    madfooInput[i].type = "number";
    madfooInput[i].value = 0;
    madfooInput[i].classList.add("madfooInput");
    madfoo[i].appendChild(madfooInput[i]);
    madfoo[i].appendChild(document.createTextNode(" جنيه"));
    baky[i] = document.createElement("div");
    baky[i].classList.add("baky");
    chair[i].appendChild(baky[i]);
    baky[i].appendChild(document.createTextNode("الباقي: "));
    bakySpan[i] = document.createElement("span");
    bakySpan[i].classList.add("bakySpan");
    bakySpan[i].innerHTML = 0;
    baky[i].appendChild(bakySpan[i]);
    baky[i].appendChild(document.createTextNode(" جنيه"));
    let nowChair = chair[i];
    let nowMatloobSpan = matloobSpan[i];
    let nowmadfooinput = madfooInput[i];
    let nowFinal = final[i];
    let nowBakySpan = bakySpan[i];
    let nowBaky = baky[i];
    chair[i].addEventListener("change", function(e) {
        if (e.target.classList.contains("lkamSelect")) {
            nowChair.style.backgroundColor = "orange";
            nowChair.classList.add("orange");
            for (j = 0; j < 14; j++) {
                if (chair[j].classList.contains("orange")) {
                    pov.style.display = "inline";
                    break;
                }
                else {
                    pov.style.display = "none";
                }
            }
            nowMatloobSpan.innerHTML = e.target.value * ogra.value;
            nowmadfooinput.value = 0;
            nowFinal.style.display = "block";
            nowBakySpan.innerHTML = 0;
            nowBaky.style.display = "none";
            totalLkam = 0;
            totalMatloob = 0;
            totalMadfoo = 0;
            totalBaky = 0;
            for (j = 0; j < 14; j++) {
                totalLkam = totalLkam + parseFloat(lkamSelect[j].value);
                totalMatloob = totalMatloob + parseFloat(matloobSpan[j].innerHTML);
                totalMadfoo = totalMadfoo + parseFloat(madfooInput[j].value);
                totalBaky = totalBaky + parseFloat(bakySpan[j].innerHTML);
            }
            if (e.target.value == 0) {
                nowChair.style.backgroundColor = "transparent";
                nowChair.classList.remove("orange");
                for (j = 0; j < 14; j++) {
                    if (chair[j].classList.contains("orange")) {
                        pov.style.display = "inline";
                        break;
                    }
                    else {
                        pov.style.display = "none";
                    }
                }
                nowmadfooinput.value = 0;
                nowFinal.style.display = "none";
                nowBakySpan.innerHTML = 0;
                nowBaky.style.display = "none";
                totalMadfoo = 0;
                totalBaky = 0;
                for (j = 0; j < 14; j++) {
                    totalMadfoo = totalMadfoo + parseFloat(madfooInput[j].value);
                    totalBaky = totalBaky + parseFloat(bakySpan[j].innerHTML);
                }
            }
            if (totalLkam > 14) {
                alert("انت كده بتحاول تلم الاجرة من اكتر من 14 راكب!");
                nowChair.style.backgroundColor = "transparent";
                nowChair.classList.remove("orange");
                for (j = 0; j < 14; j++) {
                    if (chair[j].classList.contains("orange")) {
                        pov.style.display = "inline";
                        break;
                    }
                    else {
                        pov.style.display = "none";
                    }
                }
                e.target.value = 0;
                nowMatloobSpan.innerHTML = 0;
                nowmadfooinput.value = 0;
                nowFinal.style.display = "none";
                nowBakySpan.innerHTML = 0;
                nowBaky.style.display = "none";
                totalLkam = 0;
                totalMatloob = 0;
                totalMadfoo = 0;
                totalBaky = 0;
                for (j = 0; j < 14; j++) {
                    totalLkam = totalLkam + parseFloat(lkamSelect[j].value);
                    totalMatloob = totalMatloob + parseFloat(matloobSpan[j].innerHTML);
                    totalMadfoo = totalMadfoo + parseFloat(madfooInput[j].value);
                    totalBaky = totalBaky + parseFloat(bakySpan[j].innerHTML);
                }
            }
            if (totalLkam == 0) {
                mash.style.display = "none";
                last.style.display = "none";
                last2.style.display = "none";
                pov.style.display = "none";
            }
            else {
                mash.style.display = "block";
                last.style.display = "block";
            }
            if (totalMadfoo == 0) {
                last2.style.display = "none";
                pov.style.display = "none";
            }
            totalLkamSpan.innerHTML = totalLkam;
            totalMatloobSpan.innerHTML = totalMatloob;
            totalMadfooSpan.innerHTML = totalMadfoo;
            totalBakySpan.innerHTML = totalBaky;
        }
    });
    let nowMatloobSpan2 = matloobSpan[i];
    let nowBakySpan2 = bakySpan[i];
    let nowBaky2 = baky[i];
    let nowChair2 = chair[i];
    madfooInput[i].addEventListener("blur", function(e) {
        if (e.target.value < parseFloat(nowMatloobSpan2.innerHTML) && e.target.value != 0) {
            alert("مينفعش الراكب يدفع اقل من اللي مطلوب منه!");
            nowChair2.style.backgroundColor = "orange";
            nowChair2.classList.add("orange");
            e.target.value = 0;
            nowBakySpan2.innerHTML = 0;
            nowBaky2.style.display = "none";
            totalMadfoo = 0;
            totalBaky = 0;
            for (j = 0; j < 14; j++) {
                totalMadfoo = totalMadfoo + parseFloat(madfooInput[j].value);
                totalBaky = totalBaky + parseFloat(bakySpan[j].innerHTML);
            }
        }
        else if (e.target.value == 0 || e.target.value == "") {
            e.target.value = 0;
            nowChair2.style.backgroundColor = "orange";
            nowChair2.classList.add("orange");
            nowBakySpan2.innerHTML = 0;
            nowBaky2.style.display = "none";
            totalBaky = 0;
            for (j = 0; j < 14; j++) {
                totalBaky = totalBaky + parseFloat(bakySpan[j].innerHTML);
            }
        }
        else {
            nowChair2.style.backgroundColor = "transparent";
            nowChair2.classList.remove("orange");
            nowBakySpan2.innerHTML = e.target.value - nowMatloobSpan2.innerHTML;
            nowBaky2.style.display = "block";
        }
        totalMadfoo = 0;
        totalBaky = 0;
        for (j = 0; j < 14; j++) {
            totalMadfoo = totalMadfoo + parseFloat(madfooInput[j].value);
            totalBaky = totalBaky + parseFloat(bakySpan[j].innerHTML);
        }
        if (totalMadfoo == 0) {
            last2.style.display = "none";
            pov.style.display = "none";
        }
        else {
            last2.style.display = "block";
            for (j = 0; j < 14; j++) {
                if (chair[j].classList.contains("orange")) {
                    pov.style.display = "inline";
                    break;
                }
                else {
                    pov.style.display = "none";
                }
            }
        }
        totalMadfooSpan.innerHTML = totalMadfoo;
        totalBakySpan.innerHTML = totalBaky;
    });
}

mash.onclick = function() {
    mash.style.display = "none";
    for (i = 0; i < 14; i++) {
        chair[i].style.backgroundColor = "transparent";
        chair[i].classList.remove("orange");
        lkamSelect[i].value = 0;
        matloobSpan[i].innerHTML = 0;
        madfooInput[i].value = 0;
        final[i].style.display = "none";
        bakySpan[i].innerHTML = 0;
        baky[i].style.display = "none";
    }
    totalLkam = 0;
    totalLkamSpan.innerHTML = 0;
    totalMatloob = 0;
    totalMatloobSpan.innerHTML = 0;
    last.style.display = "none";
    totalMadfoo = 0;
    totalMadfooSpan.innerHTML = 0;
    totalBaky = 0;
    totalBakySpan.innerHTML = 0;
    last2.style.display = "none";
    pov.style.display = "none";
}