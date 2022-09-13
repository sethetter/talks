.PHONY: deploy
deploy: site
	git commit -am 'make deploy'
	git push

.PHONY: site
site:
	@./process.sh

.PHONY: serve
serve:
	npx serve public
