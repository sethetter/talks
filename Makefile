.PHONY: talks

slides:
	# for f in $$(ls talks/notes/*.md); do pandoc -f markdown -t html -o $${f%.*}.html $$f; done
	for f in $$(ls talks); do npx reveal-md --theme=solarized --static=public talks/$$f/slides.md && mv public/slides.html public/$$f.html; done

serve:
	npx serve public