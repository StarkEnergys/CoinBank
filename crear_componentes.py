import os
import sys

def Crear():
    """cmd: ng generate component"""
    name = input("Nombre del componente: ")
    os.system("ng generate component pages/"+ name)
    pass

def add_materail_ui():
    """cmd: ng add @angular/material"""
    os.system("ng add @angular/material")
    pass

def add_ionic():
    """cmd: ng add @ionic/angular"""
    os.system("ng add @ionic/angular")
    pass

def add_ngx_bootstrap():
    """cmd: ng add ngx-bootstrap"""
    os.system("ng add ngx-bootstrap")
    pass

def nueva_proyecto():
    """cmd: ng new"""
    name = input("Nombre del proyecto: ")
    os.system("ng new "+name)
    pass

def Crear_modulo():
    """cmd: ng generate module"""
    name = input("Nombre del componente: ")
    os.system("ng generate module Modulos/"+ name)

def Crear_modulo_routing():
    """cmd: ng generate module + routing"""
    name = input("Nombre del componente: ")
    os.system("ng generate module Componentes/"+ name + " --routing")
    pass

def Crear_interface():
    """cmd: ng generate interface"""
    name = input("Nombre del interface: ")
    os.system("ng generate interface interfaces/"+ name) 
    pass

def Crear_services():
    """cmd: ng generate services"""
    name = input("Nombre del service: ")
    os.system("ng generate service servicios/"+ name)
    pass

def Crear_guard():
    """cmd: ng generate guard"""
    name = input("Nombre del guard: ")
    os.system("ng generate guard "+ name)  
    pass  

def Crear_todo(name):
    pass
    


class Main:
    print("""
                           Seleccionar: 1 para crear componentes:
                           Seleccionar: 2 para Instalar material UI:
                           Seleccionar: 3 para crear nuevo proyecto: 
                           Seleccionar: 4 para crear modulos:
                           Seleccionar: 5 para crear modulos routing:
                           Seleccionar: 6 para crear interface: 
                           Seleccionar: 7 para crear services:
                           Seleccionar: 8 para crear guard:
                           Seleccionar: 9 para Instalar ngx-bootstrap:
                           Seleccionar: 10 para Instalar ionic:
    """)

    selector = input("Seleccionar: ")
    if selector == "1":
        Crear()
    elif selector == "2":  
        add_materail_ui() 
    elif selector == "3":
        nueva_proyecto()  
    elif selector == "4":
        Crear_modulo()  
    elif selector == "5":
        Crear_modulo_routing() 
    elif selector == "6":
        Crear_interface() 
    elif selector == "7":
        Crear_services()
    elif selector =="8":
        Crear_guard() 
    elif selector =="9":
        add_ngx_bootstrap() 
    elif selector =="10":
        add_ionic()                          

