-include config.mk

.PHONY: clean

NAME=base
SRC=$(wildcard *.js) $(wildcard assert/*.js) $(wildcard ecma5/*.js)

dist/$(NAME).js: $(NAME).js $(NAME).moddef $(SRC)
	mkdir -p dist
	"$(RAINY_PATH)/rain" --moddef $(NAME).moddef --incpath ".." $< > $@

clean:
	rm -f dist/$(NAME).js
