sc#!/bin/bash

rm ../www/css/dev/*
echo "Watching SASS"
sass --watch ../www/css/sass:../www/css/dev --style expanded --no-cache --line-numbers
