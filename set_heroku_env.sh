#!/bin/bash
input="./.env"
while IFS= read -r var
do
  heroku config:set $var
done < "$input"