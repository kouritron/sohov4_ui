#!/bin/bash
set -e


REPO_ROOT=$(git rev-parse --show-toplevel)
clear

cd $REPO_ROOT/dev_res/small_demos

python3 -m http.server 14467 --bind 127.0.0.1 --directory ./





