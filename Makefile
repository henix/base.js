-include config.mk

.PHONY: clean

dist/base.js: base.js base.moddef
	mkdir -p dist
	$(RAINY_PATH)/rain --moddef base.moddef --incpath ".." $< > $@

clean:
	rm dist/base.js
