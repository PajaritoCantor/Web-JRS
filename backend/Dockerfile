FROM node:20-alpine

# Directorio de trabajo
WORKDIR /app

# Instalar las dependencias de compilación para sqlite3 (opcional si usamos prebuilds, pero útil)
RUN apk add --no-cache python3 make g++

# Copiar configuración de dependencias
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar código fuente
COPY . .

# Exponer el puerto
EXPOSE 3000

# Añadir script de arranque
CMD ["node", "src/server.js"]
