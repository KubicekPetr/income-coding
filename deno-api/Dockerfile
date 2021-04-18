FROM hayd/deno:alpine-1.9.0

RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

WORKDIR /app

# Cache the dependencies as a layer (the following two steps are re-run only when deps.ts is modified).
COPY deps.ts .
RUN deno cache deps.ts

# These steps will be re-run upon each file change in your working directory:
ADD . .
# Compile the main app so that it doesn't need to be compiled each startup/entry.
RUN deno cache src/main.ts

ENTRYPOINT ["/usr/local/bin/denon"]