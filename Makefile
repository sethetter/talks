.PHONY: slides

slides:
	mkdir -p public/{img,notes}
	for f in $$(ls talks); do if [[ -f talks/$$f/notes.md ]]; then cp talks/$$f/notes.md public/notes/$$f.md; fi; done
	for f in $$(ls talks); do npx reveal-md --theme=solarized --static=public talks/$$f/slides.md && mv public/slides.html public/$$f.html; done
	for f in $$(ls talks); do mkdir -p public/img && if [[ -z $$f/img ]]; then cp -r $$f/img/* public/img/; fi; done

serve:
	npx serve public