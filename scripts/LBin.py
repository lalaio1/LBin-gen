import random
import requests
from concurrent.futures import ThreadPoolExecutor
from faker import Faker
from luhn import verify as luhn_verify
from colorama import init, Fore
import time
import os

init(autoreset=True) 

BINLIST_API_URL = "https://lookup.binlist.net/"
PROXY_API_URL = "https://api.getproxylist.com/proxy?protocol=https"
fake = Faker()

def luhn_algorithm(card_number):
    return luhn_verify(card_number)

def identify_card_issuer(card_number):
    if card_number.startswith("4"):
        return "Visa"
    elif card_number.startswith(("51", "52", "53", "54", "55")):
        return "MasterCard"
    else:
        return "Desconhecido"

def verify_credit_card(card_number):
    if luhn_algorithm(card_number):
        issuer = identify_card_issuer(card_number)
        return issuer != "Desconhecido", issuer
    else:
        return False, "Desconhecido"

def get_proxy():
    response = requests.get(PROXY_API_URL)
    if response.status_code == 200:
        proxy_data = response.json()
        return proxy_data.get("protocol", "http") + "://" + proxy_data.get("ip") + ":" + str(proxy_data.get("port"))
    else:
        return None

def verify_credit_card_with_api(card_number):
    try:
        start_time = time.time()
        response = requests.get(f"{BINLIST_API_URL}{card_number[:6]}")
        elapsed_time = time.time() - start_time

        if response.status_code == 200:
            data = response.json()
            return True, data, elapsed_time
        else:
            return False, {"error": "Erro na API"}, elapsed_time
    except requests.RequestException:
        return False, {"error": "Erro na API"}, elapsed_time

def generate_credit_card():
    return fake.credit_card_number(card_type=None)

def save_to_js(valid_cards_info):
    filename = "valid_credit_cards.js"
    with open(filename, "w") as file:
        file.write("const validCards = [\n")
        for info in valid_cards_info:
            file.write(f'  {{\n'
                       f'    "card": "{info["card"]}",\n'
                       f'    "bank": "{info["bank"].get("bank", {}).get("name", "Desconhecido")}",\n'
                       f'    "country": "{info["bank"].get("country", {}).get("name", "Desconhecido")}",\n'
                       f'    "brand": "{info["bank"].get("scheme", "Desconhecido")}",\n'
                       f'    "type": "{info["bank"].get("type", "Desconhecido")}",\n'
                       f'    "time": {info["time"]},\n'
                       f'    "tries": {info["tries"]}\n'
                       f'  }},\n')
        file.write("];")

def print_card_info(card_number, status, data, elapsed_time, tries):
    print(f"{Fore.WHITE}{card_number}: {status} "
          f"{Fore.CYAN}Banco: {data.get('bank', {}).get('name', 'Desconhecido')} "
          f"{Fore.MAGENTA}País: {data.get('country', {}).get('name', 'Desconhecido')} "
          f"{Fore.YELLOW}Bandeira: {data.get('scheme', 'Desconhecido')} "
          f"{Fore.BLUE}Tipo: {data.get('type', 'Desconhecido')} "
          f"[Tentativas: {tries}]\n")

def generate_and_verify_credit_cards(num_threads, save_to_file):
    os.system("clear" if os.name != "nt" else "cls")
    generate_banner = r"""
    ██╗     ██████╗ ██╗███╗   ██╗     ██████╗ ███████╗███╗   ██╗
    ██║     ██╔══██╗██║████╗  ██║    ██╔════╝ ██╔════╝████╗  ██║                  
    ██║     ██████╔╝██║██╔██╗ ██║    ██║  ███╗█████╗  ██╔██╗ ██║                  
    ██║     ██╔══██╗██║██║╚██╗██║    ██║   ██║██╔══╝  ██║╚██╗██║      [ Discord // 
    ███████╗██████╔╝██║██║ ╚████║    ╚██████╔╝███████╗██║ ╚████║               // lalaio1 ]
    ╚══════╝╚═════╝ ╚═╝╚═╝  ╚═══╝     ╚═════╝ ╚══════╝╚═╝  ╚═══╝
                                                                            
    """
    print(Fore.MAGENTA + generate_banner + Fore.RESET)

    valid_cards_info = []
    with ThreadPoolExecutor(max_workers=num_threads) as executor:
        tries = 0
        while True:
            card_number = generate_credit_card()
            is_valid, data, elapsed_time = verify_credit_card_with_api(card_number)
            tries += 1

            if is_valid:
                status = Fore.GREEN + "Válido" + Fore.RESET
                print_card_info(card_number, status, data, elapsed_time, tries)
                valid_cards_info.append({"card": card_number, "bank": data, "time": elapsed_time, "tries": tries})

                if save_to_file:
                    save_to_js(valid_cards_info)


welcome_banner = r"""
          _____
         |A .  | _____
         | /.\ ||A ^  | _____
         |(_._)|| / \ ||A _  | _____
         |  |  || \ / || ( ) ||A_ _ |
         |____V||  .  ||(_'_)||( v )|                                            [ By: lalaio1 // L1 ]
                |____V||  |  || \ / |       [ Discord // lalaio1 ]
                       |____V||  .  |                               [ NC // Novo Comando // 4]
                              |____V|

"""
print(Fore.RED + welcome_banner + Fore.RESET)

num_threads = int(input(f"{Fore.YELLOW}Quantas threads você quer usar? "))
save_to_file = input(f"{Fore.YELLOW}Deseja salvar os números válidos em um arquivo .js? (S/N) ").lower() == "s"

generate_and_verify_credit_cards(num_threads, save_to_file)
