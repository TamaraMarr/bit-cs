function isValidHexColor(color) {
    if (color[0] != "#" || color.length !== 7) {
        return false;
    }

    for (var i = 1; i < color.length; i++) {
        if ((color[i] >= 0 && color[i] <= 9) || (color.charCodeAt(i) >= 65 && color.charCodeAt(i) <= 70)) {
            continue;
        } else {
            return false;
        }
    }

    return true;
}

console.log(isValidHexColor("#80T000"));
