import pandas as pd
import sys
import os


insumos = pd.read_csv('./baseClientesHackaton2022.csv')
usuarios = pd.read_csv('./baseUsuarios.csv')
tipoUsuario = 0




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
        
def login(usuario, contraseña):
    counter = 0
    for i in usuarios.loc[:, "usuario"]:
        if(i == usuario):
            if(usuarios.loc[counter, "auth"] != contraseña):
                tipoUsuario = ""
                raise Exception("No es la contraseña correcta")
            else:
                tipoUsuario = usuarios.loc[counter, 'perfil']
                

def main():
    global tipoUsusario
    if(sys.argv[1] == ""):
        #displayMessage()
        print("pon usuario y contraseña")
    else:
        tipoUsusario = ""
        login(sys.argv[1], sys.argv[2])
        if(tipoUsusario == False):
            exit()
        else:
            while (True):
                nombre = input('Nombre de la busqueda')
                apellido = input('Apellido de la busqueda')
                getNombre(nombre, apellido)
        
main()
