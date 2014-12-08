#!/bin/bash

echo "Minifying CSS"
rm -rf ../www/css/min/*
sass --update ../www/css/sass:../www/css/min --style compressed --no-cache --force