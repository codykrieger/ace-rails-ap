#!/bin/bash
cd ext/ace && git pull && cd -
mkdir -p vendor/assets/javascripts/ace
cp ext/ace/build/src/* vendor/assets/javascripts/ace
