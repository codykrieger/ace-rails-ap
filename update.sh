#!/bin/bash
cd ext/ace && git pull && cd -
cp ext/ace/build/src/* vendor/assets/javascripts/ace
