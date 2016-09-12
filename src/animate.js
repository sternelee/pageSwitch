function pwAnimateCache() {
    for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["style"] ? allBoxes[i].setAttribute("animate-style-cache", allBoxes[i].attributes["style"].value) : allBoxes[i].setAttribute("animate-style-cache", " "), allBoxes[i].style.visibility = "hidden"
}

function pwAnimate(a) {
    clearPwAnimate();
    var b = a.pages[a.current].querySelectorAll(".ani");
    for (i = 0; i < b.length; i++) b[i].style.visibility = "visible", effect = b[i].attributes["ani-effect"] ? b[i].attributes["ani-effect"].value : "", b[i].className = b[i].className + "  " + effect + " " + "animated", style = b[i].attributes["style"].value, duration = b[i].attributes["ani-time"] ? b[i].attributes["ani-time"].value : "", duration && (style = style + "animation-duration:" + duration + ";-webkit-animation-duration:" + duration + ";"), delay = b[i].attributes["ani-delay"] ? b[i].attributes["ani-delay"].value : "", delay && (style = style + "animation-delay:" + delay + ";-webkit-animation-delay:" + delay + ";"), b[i].setAttribute("style", style)
}

function clearPwAnimate() {
    for (allBoxes = window.document.documentElement.querySelectorAll(".ani"), i = 0; i < allBoxes.length; i++) allBoxes[i].attributes["animate-style-cache"] && allBoxes[i].setAttribute("style", allBoxes[i].attributes["animate-style-cache"].value), allBoxes[i].style.visibility = "hidden", allBoxes[i].className = allBoxes[i].className.replace("animated", " "), allBoxes[i].attributes["ani-effect"] && (effect = allBoxes[i].attributes["ani-effect"].value, allBoxes[i].className = allBoxes[i].className.replace(effect, " "))
}
