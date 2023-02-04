# ==
# Serve
#FROM node:16 as serve

#WORKDIR /app

#ARG ENVIRONMENT
#ENV ENVIRONMENT=$ENVIRONMENT

#COPY package.json .
#COPY yarn.lock .
#COPY .env .
#COPY src src

# Only install necessary dependencies.
#RUN yarn install --production --frozen-lockfile && \
#      yarn cache clean && \
# Helpful utilities for exploring your container
#      apt-get update && apt install -y nano ncdu

# Expose server port
#EXPOSE 3000

#ENTRYPOINT ["node", "src/app.js"]


# Begin Earthfile
VERSION 0.6
FROM node:16
WORKDIR /app 


# NOTE: To run any stage of the earthfile run:
# earthly +<name of stage>
# example: earthly +docker 
#
# Docker images will not be pushed to Dockerhub unless you run Earthly with the "--push" flag
# See docs regarding the push flag here: https://docs.earthly.dev/basics/part-2-outputs

# The deps target will prepare a layer that contains everything we need. 
deps:
  COPY package.json yarn.lock .env ./ 
  COPY src src
  RUN yarn install --production --forzen-lockfile && yarn cache clean && apt-get update && apt install -y nano ncdu

# Normally build and test steps would go here. Since this runs directly on node there is nothing to build.
test:
  FROM +deps
  RUN yarn test # NOTE: these tests run but they do fail as expected based on how they're written. 

docker:
  FROM +deps
  EXPOSE 3000
  ENTRYPOINT ["node", "src/app.js"]
  SAVE IMAGE --push pipethedev/earthly-example
# End Earthfile
