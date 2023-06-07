# Matches

The `matches()` method of the `Element` interface tests whether the element would be selected by the specified `CSS selector`.

Syntax: `matches(selector)`

This basically does is, if the selector is present in the document, then it outputs true else false

# Closest

The `closest()` method of the Element interface traverses the element and its parents (heading toward the document root) until it finds a node that matches the specified `CSS selector`.

Syntax: `closest(selector)`

This basically means that, the control will start searching for the selector in the current element, and gradually move to root of file i.e. `<html>...</html>`.

# Contains

The `contains()` method of the element interface transeverse the element and its child (heading towards the inner childs) untiil it finds a node that matches the specified `CSS Selector`.

Syntax: `contains(selector)`

This basically means that, the control will start searchinf for the seletctor in the current element, and will graduallly move to the innermost child that is within current element.

## Matches - Example

```
<html>
    <body>
        <div class="uno" id="one"></div>
        <div class="dos" id="two">
            <div class="tres" id="three"></div>
        </div>
        <script>
            let a = document.getElementById("one").matches("dos");
            let b = document.getElementById("one").matches("uno");
            let c = document.getElementById("dos").matches("tres");
            console.log(a);     // False
            console.log(b);     // True
            console.log(c);     // False
        </script>
    </body>
</html>
```

## Closest - Example

```
<html>
    <body>
        <div class="uno" id="one"></div>
        <div class="dos" id="two">
            <div class="tres" id="three"></div>
        </div>
        <script>
            let a = document.getElementById("three").closest("tres");
            let b = document.getElementById("three").closest("uno");
            let c = document.getElementById("dos").closest("tres");
            console.log(a);     // True
            console.log(b);     // True
            console.log(c);     // False
        </script>
    </body>
</html>
```

## Contains - Example

```
<html>
    <body>
        <div class="uno" id="one"></div>
        <div class="dos" id="two">
            <div class="tres" id="three"></div>
        </div>
        <script>
            let a = document.getElementById("one").contains("dos");
            let b = document.getElementById("one").contains("uno");
            let c = document.getElementById("dos").contains("tres");
            letd = document.getElementById("dos").contains("uno");
            console.log(a);     // True
            console.log(b);     // True
            console.log(c);     // True
            console.log(d);     // False
        </script>
    </body>
</html>
```
