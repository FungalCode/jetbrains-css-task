1. ##Selection:
    I selected the lowest square (div) from the pyramid/stack, called "Level 1". It also has id "Level1".

2. ##CSS Properties
Property 1: background-color
    Computed Value: rgb(64, 64, 64)
    Styles Panel: element.style { background-color: rgb(64, 64, 64); }
    Generated CSS Location: none, inline Style attribute
    Original Source: not possible with source maps (process.html:13:21)

Property 2: display
    Computed Value: flex
    Styles Panel: .pyramid-container[_ngcontent-ng-c3497764399] div[_ngcontent-ng-c3497764399] { display: flex; };
    Generated CSS Location: Internal <style> block (injected at runtime into index.html by main.js:35244:799)
    Original Source: process.css:43:5

Property 3: height
    Computed Value: 600px
    Styles Panel: .pyramid-container[_ngcontent-ng-c3497764399] div[_ngcontent-ng-c3497764399] { height: 100% }
    Generated CSS Location: Internal <style> block (injected at runtime into index.html by main.js:35244:990)
    Original Source: process.css:51:5

Property 4: box-sizing
    Computed Value: border-box
    Styles Panel: * { box-sizing: border-box; }
    Generated CSS Location: styles.css:27
    Original Source: styles.css:25

Property 5: unicode-bidi
    Computed Value: isolate
    Styles Panel: div { unicode-bidi: isolate; }
    Generated CSS Location: none, user agent stylesheet
    Original Source: none

3. ##Mapping Difficulties
Case 1: Inline Styles:
    When using inline styles inside html, the mapping gets difficult since there's no generated CSS and therefore also no sourcemap.
Case 2: SVG Coloring
    My project includes a complex svg (the webstorm logo), which gets colored dynamically by changing CSS-variables inline. But DevTools only displays very limited information inside the Computed tab in this case, making this process difficult.
Case 3: Computed:
    My project also features a subtle hover effect when hovering the card stack/pyramid. This is done with the ::after pseudo-element and some typescript computation. It's difficult to find the actual source of the hover inside DevTools.