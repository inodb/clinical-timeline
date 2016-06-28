HEADER="/* cBioPortal Clinical Timeline $(shell git describe --dirty --tags) | Maintained @ github.com/cbioportal/clinical-timeline */"

dist/clinical-timeline.js: js/main.js js/lib/d3-timeline.js js/clinicalTimeline.js js/parser.js js/sanity.js
	mkdir -p $(@D)
	echo $(HEADER) > $@
	browserify $< >> $@

dist/clinical-timeline.min.js: dist/clinical-timeline.js
	echo $(HEADER) > $@
	uglifyjs $< >> $@

clean:
	rm -rf dist/

build: dist/clinical-timeline.js dist/clinical-timeline.min.js

test: dist/clinical-timeline.js
	mocha --reporter=nyan test/unit/first-test.js

.PHONY: build clean
