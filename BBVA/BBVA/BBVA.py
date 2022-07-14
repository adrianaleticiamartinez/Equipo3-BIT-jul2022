import pandas as pd


insumos = pd.read_csv('./baseClientesHackaton2022.csv')
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


