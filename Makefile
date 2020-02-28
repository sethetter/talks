.PHONY: talks

talks:
	# for f in $$(ls talks/notes/*.md); do pandoc -f markdown -t html -o $${f%.*}.html $$f; done
	for f in $$(ls talks/*/slides.md); do npx reveal-md --theme=solarized --static=public $$f; done
	rm talks/index.html
