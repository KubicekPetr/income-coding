FROM hayd/deno:alpine-1.8.2

RUN deno install -qAf --unstable https://deno.land/x/denon/denon.ts

WORKDIR /usr/app
COPY . . 

RUN deno cache deps.ts

COPY . . 

ENTRYPOINT ["/usr/local/bin/denon"] 