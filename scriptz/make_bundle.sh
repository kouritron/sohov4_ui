#!/bin/bash
set -e

clear
REPO_ROOT=$(git rev-parse --show-toplevel)

# ------------------------------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------------------------------
cd $REPO_ROOT
echo "dropping old build ..."
rm -rf $REPO_ROOT/artifactz

# sleep 1
echo "making new bundle ..."
mkdir -p $REPO_ROOT/artifactz/static
mkdir -p $REPO_ROOT/artifactz/static

cp $REPO_ROOT/src_ui/index.html $REPO_ROOT/artifactz/index.html
cp $REPO_ROOT/src_ui/assets/favicon.svg $REPO_ROOT/artifactz/static/favicon.svg
cp $REPO_ROOT/src_ui/assets/favicon.ico $REPO_ROOT/artifactz/static/favicon.ico
cp $REPO_ROOT/src_ui/assets/favicon.svg $REPO_ROOT/artifactz/favicon.svg
cp $REPO_ROOT/src_ui/assets/favicon.ico $REPO_ROOT/artifactz/favicon.ico



# ------------------------------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------------------------------
cd $REPO_ROOT/src_ui
# printf "pwd: $(pwd)\n\n"


# for prod minify
# esbuild app.jsx --bundle --minify --target=chrome58,firefox57,safari11,edge16

esbuild app.jsx --bundle --sourcemap --outfile=$REPO_ROOT/artifactz/static/sohov4_bundle.js


# ------------------------------------------------------------------------------------------------------------------------------
# ------------------------------------------------------------------------------------------------------------------------------






