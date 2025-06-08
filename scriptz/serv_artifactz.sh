#!/bin/bash
set -e

clear

REPO_ROOT=$(git rev-parse --show-toplevel)
cd $REPO_ROOT
# printf "pwd: $(pwd)\n\n"


python3 -m http.server 14480 --bind 127.0.0.1 --directory ./artifactz/


