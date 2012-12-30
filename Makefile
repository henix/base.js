-include config.mk

.PHONY: clean

NAME=base

dist/$(NAME).js: $(NAME).js $(NAME).moddef
	mkdir -p dist
	"$(RAINY_PATH)/rain" --moddef $(NAME).moddef --incpath ".." $< > $@

clean:
	rm -f dist/$(NAME).js
