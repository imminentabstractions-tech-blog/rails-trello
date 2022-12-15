#!/bin/bash

set -eu

docker run -it -d -v "$(pwd)":/app \
    --publish=3000:3000 --expose=3000 \
    --publish 7658:7658 --expose=7658 \
    --name myrails \
    --workdir=/app myrails /bin/bash
