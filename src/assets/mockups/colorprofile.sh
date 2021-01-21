#!/bin/bash

echo " "
for file in ./*.png; do
    echo "Working on $file"
    pngcrush -q -rem gAMA -rem cHRM -rem iCCP -rem sRGB $file "$file.tmp"
    mv $file "$file.old"
    mv "$file.tmp" $file
	rm "$file.old"
done
