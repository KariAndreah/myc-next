# // entrypoint.sh

# #!/bin/bash
# envFilename='./.env.production'
# nextFolder='./standalone/.next/'

# while read -r line; do
#     # no comment or not empty
#     if [ "${line:0:1}" == "#" ] || [ "${line}" == "" ]; then
#         continue
#     fi

#     # split
#     configName="$(cut -d'=' -f1 <<<"$line")"
#     configValue="$(cut -d'=' -f2 <<<"$line")"
#     # get system env
#     envValue=$(env | grep "^$configName=" | grep -oe '[^=]*$')

#     # if config found && configName starts with NEXT_PUBLIC
#     if [ -n "$configValue" ] && [ -n "$envValue" ]; then
#         # replace all
#         echo "Replace: ${configValue} with ${envValue}"
#         find $nextFolder \( -type d -name .git -prune \) -o -type f -print0 | xargs -0 sed -i "s#$configValue#$envValue#g"
#     fi
# done <$envFilename

# echo "Starting Nextjs"
# exec "$@"

#!/usr/bin/env bash

# The first part wrapped in a function
# makeSedCommands() {
#   printenv | \
#       grep  '^NEXT_PUBLIC' | \
#       sed -r "s/=/ /g" | \
#       xargs -n 2 bash -c 'echo "sed -i \"s#APP_$0#$1#g\""'
# }

# # Set the delimiter to newlines (needed for looping over the function output)
# IFS=$'\n'
# # For each sed command
# for c in $(makeSedCommands); do
#   # For each file in the .next directory
#   for f in $(find .next -type f); do
#     # Execute the command against the file
#     COMMAND="$c $f"
#     eval $COMMAND
#   done
# done

# echo "Starting Nextjs"
# # Run any arguments passed to this script
# exec "$@"