#!/bin/sh

# Caminho do arquivo que indica que o container foi criado
FILE_PATH="/data/container_created"

# Verifica se o diretório existe, se não, cria
if [ ! -d "/data" ]; then
  mkdir -p /data
  chmod 777 /data  # Permissão total para o diretório
fi

# Verifica se o arquivo existe. Se não, executa o comando.
if [ ! -f "$FILE_PATH" ]; then
  cd /app
  npx prisma migrate dev
  # Comando que deseja rodar
  touch /data/container_created
fi

# Executa o comando principal do container
exec "$@"
