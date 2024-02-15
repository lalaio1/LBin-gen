from itertools import product

def generate_card_combinations(card_info):
    valid_years = [str(x).zfill(2) for x in range(23, 31)]
    valid_months = [str(x).zfill(2) for x in range(1, 13)]
    cvc_numbers = [str(x).zfill(3) for x in range(1, 1000)]

    combinations = list(product(valid_months, valid_years, cvc_numbers))

    with open("credit_card_combinations.js", "w") as file:
        file.write("const cardCombinations = [\n")
        for month, year, cvc in combinations:
            full_combination = f"{card_info[:6]}{card_info[6:]}|{month}|{year}|{cvc}"
            line = f'  "{full_combination}",\n'
            file.write(line)
        file.write("];")

    print("\033[1;32m" + "Foram geradas {} combinações.".format(len(combinations)) + "\033[0m")
    print("\033[1;34m" + "Exemplo de combinação gerada: {}".format(
        '{}{}|{}|{}|{}'.format(card_info[:6], card_info[6:], combinations[0][0], combinations[0][1], combinations[0][2])) + "\033[0m")
    print("\033[1;36m" + "Arquivo 'credit_card_combinations.js' gerado com sucesso." + "\033[0m")

def print_banner():
    banner = """
 █████       ███████████  ██████████
░░███       ░░███░░░░░███░███░░░░███                                [ Discord // lalaio1 ]
 ░███        ░███    ░███░░░    ███  
 ░███        ░██████████       ███               [ By // lalaio1]
 ░███        ░███░░░░░███     ███   
 ░███      █ ░███    ░███    ███                                           
 ███████████ ███████████    ███     
░░░░░░░░░░░ ░░░░░░░░░░░    ░░░      
                                    
[ este script gera todas as combinações pociveis de data e dos 3 digitos de cartão]
[ Va ate o arquivo valid_credit_cards.js e copie um numero de sua preferencia e cole aqui.]                                   
[ Apos isso, e so verificar o arquivo credit_card_combinations.js ]  
                                  
"""
    print("\033[1;35m" + banner + "\033[0m")

if __name__ == "__main__":
    print_banner()
    card_info = input("\033[1;33m" + "Digite os dígitos do número do cartão: " + "\033[0m")
    generate_card_combinations(card_info)
