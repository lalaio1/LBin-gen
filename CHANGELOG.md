# Changelog

Todas as mudanças relevantes do LBin Gen. Formato baseado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [3.0.0] — 2026-10-17 — “Neon”

Reescrita completa. O projeto deixou de ser um script único com dependências externas e virou um
pacote Python puro (somente biblioteca padrão), com interface própria e suíte de testes.

### Adicionado

- **Interface interativa completa** (`python start.py`) com motor ANSI próprio:
  truecolor → 256 → 16 → sem cor, glifos unicode/ascii, fallback para listas numeradas sem TTY.
- **6 temas**: `neon` (padrão), `cyber`, `matrix`, `sunset`, `ice` e `mono`.
- **Telas**: Gerador online, Gerador turbo, Consulta de BIN, Combinações, Validador, Biblioteca,
  Configurações, Sobre e Diagnóstico.
- **CLI com subcomandos**: `gen`, `bulk`, `lookup`, `validate`, `combos`, `library`, `export`,
  `doctor`, `about`, `demo`, `menu` — todos com `--help`.
- **8 formatos de exportação**: txt, csv, json, jsonl, js, sql, xml e html.
- **Templates de saída** configuráveis (`{number}`, `{month}`, `{year_full}`, `{cvc}`, `{brand}`, ...).
- **Consulta de BIN offline-first**: base embutida + inferência por bandeira, com provedores
  públicos opcionais (`binlist.net`, `bincodes`), cache JSON, rate limit, retries, rotação de
  User-Agent e suporte a proxies.
- **Gerador turbo** com escrita incremental e velocidade de ~60.000 cartões/s em modo offline.
- **Combinações** de validade × CVV (faixa completa `000-999` ou amostra) com estimativa de tamanho.
- **Validador** individual e em lote (Luhn + IIN + comprimento), com saída `--json`.
- **Biblioteca** com histórico local, gráficos de bandeiras e atividade dos últimos 14 dias.
- **Diagnóstico** (`doctor`) que checa Python, terminal, cores, rede e caminhos.
- **Aviso de responsabilidade no primeiro uso** (substitui o antigo `login.py`) + perfil opcional.
- **Screenshots reais** em `docs/images/` (capturados via pty, renderizados de terminal para PNG).
- **Suíte de testes** (`tests/`, `unittest`) cobrindo Luhn, gerador, bandeiras, exportadores,
  storage, consulta de BIN, renderização das telas em 4 tamanhos de terminal, fluxo interativo de
  todas as telas e todos os subcomandos da CLI (132 testes).
- **CI no GitHub Actions** para Linux/Windows/macOS em Python 3.9 → 3.13.

### Corrigido

- Exportação **JSON/JSONL inválida** (vírgula final) da versão legada.
- Linhas órfãs de UI: colunas com larguras duplicadas geravam truncamentos `…` fantasma.
- Destaque de linha ativa no menu quebrava ao reaplicar cor de fundo sobre ANSI interno.
- Telas estouravam a altura em terminais baixos (ex.: 84×26 e 64×20); agora todo layout é adaptável
  até 50×16 e o rodapé nunca é cortado.
- Caracteres unicode vazando em modo ASCII/compatível (nova camada `to_ascii` no terminal).
- **Gerador online travava**: o `EnrichJob` não publicava os cartões para os workers (0 enriquecidos
  e job sem fim). Agora enriquece e conclui normalmente.
- Telas de job chamavam as views com assinatura errada, derrubando o app ao abrir o gerador.
- `run_job_screen` descartava os últimos itens ao encerrar sem TTY (arquivos de combinações vazios).
- Tela de combinações quebrava por falta do import de `MenuItem`.
- Item **Sobre** não estava registrado no menu e o `about` entrava em loop sem TTY.
- `lookup` individual não voltava com enter vazio (o default preenchido anulava a saída).
- Tecla **P** (pausar) tinha a lógica invertida e não pausava os lotes.
- Menu interativo entrava em loop quando o stdin não era um terminal; agora exibe os comandos da CLI.
- `library.preview` quebrava ao abrir um arquivo de saída vazio.

### Removido

- Dependências `faker`, `requests`, `colorama`, `luhn` e `psutil` (nada de compilar nada no Termux).
- Scripts legados `scripts/LB7.py`, `scripts/LBin.py`, `scripts/login.py` e `Como usar.txt`.
- Referências ao Discord (canal oficial agora é o Telegram [@lalaio1](https://t.me/lalaio1)).

## [1.x] — legado

- Versão original: `LB7.py` / `LBin.py` com `login.py`, dependências externas e saída por stdout.
  Mantida apenas como histórico; não é mais compatível.
