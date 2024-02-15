import subprocess
import sys
import os

cor_vermelha = "\033[1;31m"
cor_verde = "\033[1;32m"
cor_amarela = "\033[1;33m"
cor_azul = "\033[1;34m"
cor_roxa = "\033[1;35m"
cor_ciano = "\033[1;36m"
cor_branca = "\033[1;37m"
cor_reset = "\033[0m"

def instalar_bibliotecas_necessarias():
    bibliotecas = [
        "requests",
        "concurrent.futures",
        "faker",
        "luhn",
        "colorama",
        "platform",
        "psutil",
        "uuid",
        "cryptography"
    ]

    print(f"\n{cor_amarela}Verificando bibliotecas...{cor_reset}")

    for biblioteca in bibliotecas:
        print(f"{cor_reset}[{cor_amarela}+{cor_reset}]{cor_amarela} Verificando {biblioteca}{cor_reset}")
        try:
            __import__(biblioteca)
            print(f"{cor_reset}[{cor_azul}+{cor_reset}]{cor_verde} Verificada {biblioteca}{cor_reset}")
        except ImportError:
            print(f"{cor_reset}[{cor_vermelha}-{cor_reset}]{cor_vermelha} Instalando biblioteca {biblioteca}{cor_reset}")
            subprocess.check_call([sys.executable, "-m", "pip", "install", biblioteca])

def imprimir_banner():
    banner = """
.____  ____   ____              .__   _____         
|    | \   \ /   / ____ _______ |__|_/ ____\___.__. 
|    |  \   Y   /_/ __ \\_  __ \|  |\   __\<   |  |                       [ Discord // lalaio1]
|    |___\     / \  ___/ |  | \/|  | |  |   \___  |     [ By // lalaio1 ]
|_______ \\___/   \___  >|__|   |__| |__|   / ____| 
        \/            \/                    \/      
                                                      
"""
    print(f"{cor_azul} {cor_roxa} {banner}{cor_reset}")


if __name__ == "__main__":
    os.system("clear" if os.name != "nt" else "cls")
    imprimir_banner()
    instalar_bibliotecas_necessarias()
    os.system("clear" if os.name != "nt" else "cls")

    print(f"{cor_reset}[{cor_amarela}+{cor_reset}]{cor_amarela} Executando login.py...{cor_reset}")
    subprocess.run([sys.executable, "./scripts/login.py"])

    print(f"{cor_reset}[{cor_amarela}+{cor_reset}]{cor_amarela} Executando LBin.py...{cor_reset}")
    print(f"{cor_reset}[{cor_amarela}+{cor_reset}]{cor_amarela} Executando logs.pyy...{cor_reset}")
    subprocess.run([sys.executable, "./scripts/logs.pyw"])
    os.system("clear" if os.name != "nt" else "cls")
    try:
        subprocess.run([sys.executable, "./scripts/LBin.py"])
    except KeyboardInterrupt:
        os.system("clear" if os.name != "nt" else "cls")
        print(f"\n{cor_vermelha}[{cor_vermelha}-{cor_reset}]{cor_vermelha} Interação do usuário interrompida. Pulando para o próximo script...{cor_reset}")

    print(f"\n{cor_amarela}Aguarde enquanto o terminal é limpo...{cor_reset}")
    os.system("clear" if os.name != "nt" else "cls")

    print(f"\n{cor_reset}[{cor_amarela}+{cor_reset}]{cor_amarela} Executando LB7.py...{cor_reset}")
    subprocess.run([sys.executable, "./scripts/LB7.py"])

