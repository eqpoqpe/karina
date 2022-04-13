#!/bin/bash

declare process=

env node --version > /dev/null 2>&1
if [ $? -eq 0 ]; then
	echo "NODEJS ......... [OK]"
	let "process=process+1"
fi

env npm --version > /dev/null 2>&1
if [ $? -eq 0 ]; then
	echo "NPM ............ [OK]"
	let "process=process+1"
fi


if [ $process -eq 2 ]; then
	npm install && npm run build
fi
