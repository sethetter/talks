.PHONY: deploy
deploy: site
	git commit -am 'make deploy'
	git push

.PHONY: site
site:
	mkdir -p public/{img,notes}
	cp notes.css public/notes/notes.css
	for f in $$(ls talks); do if [[ -f talks/$$f/notes.md ]]; then pandoc -s -c ./notes.css -f markdown -t html -o public/notes/$$f.html talks/$$f/notes.md; fi; done
	for f in $$(ls talks); do npx reveal-md --theme=solarized --static=public talks/$$f/slides.md && mv public/slides.html public/$$f.html; done
	for f in $$(ls talks); do mkdir -p public/img && if [[ -z $$f/img ]]; then cp -r $$f/img/* public/img/; fi; done

.PHONY: serve
serve:
	npx serve public