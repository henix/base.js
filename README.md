# base.js

Some base utils for javascript:

* ecmascript5 shim
* Assert
* Precond

For details, see [base.moddef](https://github.com/henix/base.js/blob/master/base.moddef)

## ecma5

* Object.keys
* String.prototype.trim
* Array.prototype.filter
* Array.prototype.map
* etc, etc, ...

## Assert

Inspired by JUnit4's Assert

```javascript
function getAge(name) {
	Assert.present(name, 'name is null'); // assert that name is not undefined or null
}

Assert.between(i, 0, ar.length - 1); // between is inclusive

Assert.equalsIgnoreCase(tagName, 'h3'); // throw an AssertError
```

## Precond

```javascript
Precond.check(cond, msg); // if cond is false, throw an ArgumentError
```

## Differences between Assert and Preconditions

Both `Assert` and `Precond` have the meaning of "if some condition failed, throw an Error", but they are used in different scenarios.

* `Assert` is used to indicate a **program** error. The error message is for the **programmer** (e.g. logged in the console, etc).
* `Precond` is used to indicate a **user input** error. The error message will usually **return to the user** (e.g. shown in a dialog, etc).

So, `Assert` will add detail information to the error message, suitable for debug. While `Precond` do nothing to the error message, leave it as it is.

## Build

Build tool is [rainy](https://github.com/henix/rainy)

Build:

```bash
RAINY_PATH=~/rainy make
```

If you don't want to type "RAINY_PATH=" every time, create a file `config.mk`:

```makefile
# you'd better use absolute path
RAINY_PATH=/where/you/install/rainy
```
