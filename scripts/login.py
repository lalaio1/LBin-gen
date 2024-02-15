import os
import time
import platform

cor_ciano = "\033[1;36m"
cor_amarela = "\033[1;33m"
cor_reset = "\033[0m"
cor_verde = "\033[1;32m"

def imprimir_banner():
    banner = """
.__             ____    ____  .__          
|  |    ____   / ___\  / ___\ |__|  ____   
|  |   /  _ \ / /_/  >/ /_/  >|  | /    \\  
|  |__(  <_> )\___  / \___  / |  ||   |  \                                
|____/ \____//_____/ /_____/  |__||___|  / 
[Discord: lalaio1]                    \/  
                                             
    """
    print(f"{cor_ciano}{banner}{cor_reset}")

def criar_usuario():
    imprimir_banner()
    print(f"\n{cor_amarela}=== Criação de Usuário ==={cor_reset}")
    nome_discord = input("Digite seu nome do Discord: ")

    pasta_documentos = obter_pasta_documentos()

    caminho_arquivo = os.path.join(pasta_documentos, "usuario.txt")
    with open(caminho_arquivo, "w") as arquivo:
        arquivo.write(nome_discord)

    print(f"\n{cor_reset}[{cor_verde}+{cor_reset}]{cor_verde} Usuário criado com sucesso!{cor_reset}")
    time.sleep(2)  

def fazer_login():
    imprimir_banner()
    print(f"\n{cor_amarela}=== Login ==={cor_reset}")
    try:
        pasta_documentos = obter_pasta_documentos()
        caminho_arquivo = os.path.join(pasta_documentos, "usuario.txt")

        with open(caminho_arquivo, "r") as arquivo:
            nome_discord = arquivo.read().strip()

        print(f"{cor_reset}[{cor_verde}+{cor_reset}]{cor_verde} Bem-vindo, {nome_discord}!{cor_reset}")

    except FileNotFoundError:
        print(f"{cor_reset}[{cor_amarela}+{cor_reset}]{cor_amarela} Usuário não encontrado. Criando um usuário...{cor_reset}")
        criar_usuario()

def obter_pasta_documentos():
    sistema_operacional = platform.system().lower()

    if sistema_operacional == "windows":
        return os.path.join(os.path.expanduser("~"), "Documents")
    elif sistema_operacional == "linux":
        return os.path.expanduser("~")
    elif "android" in sistema_operacional: 
        return os.path.expanduser("~")
    else:
        raise NotImplementedError(f"Sistema operacional não suportado: {sistema_operacional}")

if __name__ == "__main__":
    fazer_login()
