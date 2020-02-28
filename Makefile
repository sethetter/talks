.PHONY: slides

slides:
	# for f in $$(ls talks/notes/*.md); do pandoc -f markdown -t html -o $${f%.*}.html $$f; done
	for f in $$(ls talks); do npx reveal-md --theme=solarized --static=public talks/$$f/slides.md && mv public/slides.html public/$$f.html; done
	for f in $$(ls talks); do mkdir -p public/img && if [[ -z $$f/img ]]; then cp -r $$f/img/* public/img/; fi; done

serve:
	npx serve public