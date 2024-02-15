import os
import requests
import time
import platform
import psutil

def get_user_info():
    try:
        sistema_operacional = platform.system().lower()
        
        if sistema_operacional == "linux":
            pasta_documentos = os.path.join(os.path.expanduser("~"), "Documents")
        elif "android" in sistema_operacional:
            pasta_documentos = os.path.expanduser("~")
        else:
            pasta_documentos = os.path.expanduser("~")

        caminho_arquivo = os.path.join(pasta_documentos, "usuario.txt")

        with open(caminho_arquivo, "r") as arquivo:
            nome_discord = arquivo.read().strip()

        return f"👤 Usuário: {nome_discord}"

    except FileNotFoundError:
        return "👤 Usuário não encontrado."

def get_system_info():
    system_info = f"💻 Sistema: {platform.system()} {platform.version()}"
    cpu_info = f"🔧 Processador: {platform.processor()}"
    memory_info = f"🧠 Total de RAM: {psutil.virtual_memory().total / (1024 ** 3):.2f} GB"
    memory_used_info = f"💡 RAM em uso: {psutil.virtual_memory().used / (1024 ** 3):.2f} GB"
    

    cpu_percent = psutil.cpu_percent()
    cpu_cores = psutil.cpu_count(logical=False)
    cpu_threads = psutil.cpu_count(logical=True)
    cpu_frequency = psutil.cpu_freq()

    cpu_info += f"\n💻 Uso da CPU: {cpu_percent}%"
    cpu_info += f"\n💾 Número de núcleos físicos: {cpu_cores}"
    cpu_info += f"\n🔄 Número de threads lógicas: {cpu_threads}"
    cpu_info += f"\n🚀 Frequência da CPU: {cpu_frequency.current} MHz"

  
    memory_percent = psutil.virtual_memory().percent
    memory_available = psutil.virtual_memory().available / (1024 ** 3)

    memory_info += f"\n🧠 Uso da RAM: {memory_percent}%"
    memory_info += f"\n💡 RAM disponível: {memory_available:.2f} GB"


    disk_info = f"💽 Total de espaço no disco: {psutil.disk_usage('/').total / (1024 ** 3):.2f} GB"
    disk_used_info = f"💽 Espaço em uso no disco: {psutil.disk_usage('/').used / (1024 ** 3):.2f} GB"
    disk_percent = psutil.disk_usage('/').percent

    disk_info += f"\n💽 Uso do disco: {disk_percent}%"
    disk_info += f"\n💽 Espaço livre no disco: {psutil.disk_usage('/').free / (1024 ** 3):.2f} GB"

    return f"{system_info}\n{cpu_info}\n{memory_info}\n{disk_info}\n{get_user_info()}"

def send_log_to_discord(log_message, webhook_url):
    payload = {
        "embeds": [
            {
                "title": f"Logs __L1CCgen__ - {platform.system()}",
                "description": f"{log_message}\n\n{get_system_info()}",
                "color": 0x3498db  # Cor azul
            }
        ]
    }

    try:
        response = requests.post(webhook_url, json=payload)
        response.raise_for_status()
        print("Log enviado com sucesso para o Discord!")
    except requests.exceptions.HTTPError as errh:
        print(f"Erro HTTP: {errh}")
    except requests.exceptions.ConnectionError as errc:
        print(f"Erro de Conexão: {errc}")
    except requests.exceptions.Timeout as errt:
        print(f"Timeout do Pedido: {errt}")
    except requests.exceptions.RequestException as err:
        print(f"Erro na requisição: {err}")

def main():

    webhook_url = "https://discord.com/api/webhooks/1204891971748106250/sTcUux4b7nXO0q2dcp0_j3z5UiuDzaoZtM7-u1m7JMj4-HcfNPzKseDP_n0nuOkG15wN"

    log_message = f"{time.strftime('%Y-%m-%d %H:%M:%S')}: Inicializando script."
    send_log_to_discord(log_message, webhook_url)

if __name__ == "__main__":
    main()
