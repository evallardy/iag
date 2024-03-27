function validaNumeros(e) {
    if (e.keyCode >= 48 && e.keyCode <= 57) {
        return true;
    } else {
        return false;
    }
}
function formatoDecimal(cadena, e, d ) {
    contador = 0;
    decimales = 0;
    enteros = 0;
    sw = 0;
    for(var i = 0; i < cadena.length; i++) {
        if (cadena[i] == ".") {
            contador ++
            sw = 1;
        } else {
            if (sw == 1) {
                if (contador == 1) {
                    decimales ++;
                    if (decimales > 2) {
                        return false;
                    }
                }
            } else {
                enteros ++;
                if (enteros > 2) {
                    return false;
                }
            }
        }
    }
    if (contador > 1) {
        return false;
    } else {
        return true;
    }
}
