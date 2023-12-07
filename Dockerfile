FROM --platform=linux/amd64 node:lts-alpine
COPY node_modules/ node_modules/
COPY dist/ dist/
COPY package.json package.json
COPY package-lock.json package-lock.json
# TODO CHANGE EXPOSED PORT
EXPOSE 4000
CMD ["node", "dist/src/index.js"]
