#!/bin/bash
_ENV=$1
if [ -z "$_ENV" ]
then
	echo "Usage . dev_build.sh ENV_LOCAL"
 
else
	echo "Running Dev Build with environment $_ENV"
       php ../www/framework/cli-script.php dev/build $_ENV
fi




