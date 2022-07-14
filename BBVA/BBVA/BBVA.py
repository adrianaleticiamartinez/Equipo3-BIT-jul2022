
import pandas as pd

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




insumos = pd.read_csv('baseClientesHackaton2022.csv')
tipoUsuario = 0


def getNombre(_nombre, _apellidoP = ""):
    counter = 0
    for i in insumos.loc[:, "nombre"]:
        if(i == _nombre):
            if(_apellidoP == ""):
                print(insumos.loc[counter])
            else:
                if(insumos.loc[counter, "apellidoPaterno"] == _apellidoP):

                    print(insumos.loc[counter])
                    exit()
        counter += 1

