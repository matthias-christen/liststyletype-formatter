# liststyletype-formatter

## Synopsis and Usage

This library formats (ordinal) numbers with JavaScript as CSS would do when using an
ordered list or CSS counters.

For instance, to format a number as in lower case Roman format (corresponding
to the CSS declaration ```list-style-type: lower-roman```), use

```javascript
// Node.js
var ListStyleTypeFormatter = require('liststyletype-formatter');
console.log(ListStyleTypeFormatter.format(1234, 'lower-roman'));
// should output: mccxxxiv
```

```html
<!-- Browser -->
<script src="liststyletype-formatter.js"></script>
<script>
	console.log(ListStyleTypeFormatter.format(1234, 'lower-roman'));
	// should output: mccxxxiv
</script>
```

The following formats are supported:

|Format|Description|
|---|---|
|```arabic-indic```|Eastern arabic numerals|
|```armenian```, ```upper-armenian```|Traditional Armenian numbering|
|```bengali```|Bengali numerals|
|```cambodian```, ```khmer```|Khmer numerals|
|```circle```|A hollow circle (for any number)|
|```cjk-earthly-branch```|Numbering used in a Chinese system for reckoning time based on the Chinese zodiac|
|```cjk-decimal```|Han decimal numbers|
|```cjk-heavenly-stem```|Chinese system of ordinals based on the ten days of the week|
|```cjk-ideographic```|CJK (Chinese-Japanese-Korean) ideographic numbering|
|```decimal```|Decimal numbers|
|```decimal-leading-zero```|Decimal numbers with a leading zero if there is only one digit|
|```devanagari```|Devanagari numerals|
|```disc```|A filled disc (for any number)|
|```ethiopic-numeric```|Ethiopic numbering|
|```georgian```|Traditional Georgian numbering|
|```gujarati```|Gujarati numerals|
|```gurmukhi```|Gurmuhki numerals|
|```hebrew```|Traditional Hebrew numbering|
|```hiragana```|Hiragana letters|
|```hiragana-iroha```|Hiragana letters in the old Japanese ordering|
|```japanese-formal```|Japanese formal numbering to be used in legal or financial document|
|```japanese-informal```|Japanese informal numbering|
|```kannada```|Kannada numerals|
|```katakana```|Katakana letters|
|```katakana-iroha```|Katakana letters in the old Japanese ordering|
|```khmer```|Khmer numerals|
|```korean-hangul-formal```|Korean hangul numbering|
|```korean-hanja-formal```|Formal Korean Han numbering|
|```korean-hanja-informal```|Korean Hanja numbering|
|```lao```|Lao numerals|
|```lower-alpha```, ```lower-latin```|Lowercase ASCII letters|
|```lower-armenian```|Traditional Armenian numbering with lowercase letters|
|```lower-greek```|Lowercase classical Greek|
|```lower-roman```|Lowercase Roman numerals|
|```malayalam```|Malayalam numerals|
|```mongolian```|Mongolian numerals|
|```myanmar```|Burmese numerals|
|```none```|Nothing, returns an empty string|
|```oriya```|Oriya (Odia) numerals|
|```persian```|Persian numerals|
|```simp-chinese-formal```|Simplified Chinese formal numbering|
|```simp-chinese-informal```|Simplified Chinese informal numbering|
|```square```|A filled square (for any number)|
|```tamil```|Tamil numerals|
|```telugu```|Telugu numerals|
|```thai```|Thai numerals|
|```tibetan```|Tibetan numerals|
|```trad-chinese-formal```|Traditional Chinese formal numbering|
|```trad-chinese-informal ```|Traditional Chinese informal numbering|
|```upper-alpha```, ```upper-latin```|Uppercase ASCII letters|
|```upper-armenian```, ```armenian```|Traditional Armenian numbering|
|```upper-roman```|Uppercase Roman numerals|

For more information, see [https://developer.mozilla.org/en/docs/Web/CSS/list-style-type](https://developer.mozilla.org/en/docs/Web/CSS/list-style-type).


## Installing

liststyletype-formatter can be installed with npm:

```
npm install liststyletype-formatter
```

## Building and Testing

If you plan to use this package just from Node.js, there is no need to do a build. To build a browser version of the library, first make sure that you have **browserify** and **uglifyjs** installed (you can check this by typing ```browserify --version``` and ```uglifyjs --version``` on the command line.
If needed (i.e., you get something like "command not found"), you can install them with

```bash
# install browserify
npm install -g browserify

# installl UglifyJS
npm install -g uglifyjs
```

Once you have these build tools installed, to run the build, type

```
npm run build
```

To run the tests, type

```
npm test
```
This requires that you have the package's dev dependencies installed, which you can install by typing ```npm install```.

## License

MIT License

Copyright (c) 2017 Matthias Christen

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
