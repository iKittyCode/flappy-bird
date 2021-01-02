.PHONY: all build help setup start
.DEFAULT_GOAL := help
UNAME := $(shell uname -s)

all: setup start ## setup start

help: ## List commands
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

setup: ## Install Node
	@npm install --global http-server@0.12.3

start: ## Start the local web server
	@cp *.html docs/
	@cp *.js docs/
	@cp *.jpg docs/
	@cp *.css docs/
	@http-server ./docs
