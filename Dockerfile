FROM node:18-alpine
WORKDIR /app
COPY . .
# Ensure Prisma and dependencies are installed
RUN npm install
RUN npx prisma generate
RUN npm run build

# Give SQLite write permissions (key step!)
RUN chmod -R 777 /app/prisma

CMD ["npm", "start"]