#!/bin/sh

export INLINE_RUNTIME_CHUNK=false
export GENERATE_SOURCEMAP=false

yarn build
mv build/index.html build/popup.html

cp -r build release