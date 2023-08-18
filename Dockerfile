FROM --platform=linux/amd64 node:lts-alpine
ARG APPLICATION_INSIGHT_KEY
COPY dist/ dist/
COPY package.json package.json
COPY package-lock.json package-lock.json
# TODO CHANGE EXPOSED PORT
EXPOSE 4000
ENV APPLICATIONINSIGHTS_CONNECTION_STRING=${APPLICATION_INSIGHT_KEY}
RUN npm ci --omit=dev
CMD ["node", "dist/src/index.js"]
