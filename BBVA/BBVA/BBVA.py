

def ofuscar(palabra):
    textoofuscado = "";
    if palabra!="":
        longitud = len(palabra);
        tresprimeros = palabra[0:3]
        caracteresfaltantes = longitud - 3;
        asteriscos = "";
        i=0
        while i<caracteresfaltantes:
            asteriscos = asteriscos + "*";
            i=i+1
        textoofuscado=tresprimeros + asteriscos
    return textoofuscado;


print(ofuscar("Martinez"))
