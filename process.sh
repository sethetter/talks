#!/usr/bin/env bash

mkdir -p public/{img,notes}

cp notes.css public/notes/notes.css

for f in $(ls talks); do \
	mkdir -p public/$f/{slides,notes}

	# Turn the talk notes file into an html page
	if [[ -f talks/$f/notes.md ]]; then
		pandoc -s -c ./notes.css -f markdown -t html \
			-o public/$f/notes/index.html talks/$f/notes.md
	fi

	# Convert the slides markdown into a reveal-md generated html file,
	# then rename it to match the talk folder name
  npx reveal-md --theme=solarized --static=public talks/$f/slides.md
  mv public/slides.html public/$f/index.html

	# Put images in their place
  mkdir -p public/img
  if [[ -z $f/img ]]; then
  	cp -r $f/img/* public/img/
  fi
done



