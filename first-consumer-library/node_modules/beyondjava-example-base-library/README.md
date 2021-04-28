Simple demo showing that npm can bundle different versions of the same library.

There are three versions of the library:

## Version 1.2.0

```javascript
function printDeepThoughts() {
    console.log(42);
    return 42;
}

module.exports = printDeepThoughts;
```

## Version 2.1.0

```javascript
function printDeepThoughts() {
    console.log('21 is only half the truth');
    return 21;
}

module.exports = printDeepThoughts;
```

```javascript
class DeepThought {
    printDeepThoughts() {
        console.log('84 is twice the truth');
        return 84;
    }
    
}

module.exports = { DeepThought };
```