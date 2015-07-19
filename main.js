/* 

#### Interesting lessons from this #####

# using .focus() to compare to document.activeElement (but I ended up not using it)
* https://developer.mozilla.org/en-US/docs/Web/API/document.activeElement
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.focus

# regular expression help -- especially the use of those handy brackets -- from Reid
* https://plus.google.com/u/0/101114332268546148921/posts
* his example: http://jsfiddle.net/vsjmm2us/
* more on regex: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

# really cool stuff about attaching events, and trying to call functions with arguments with an event attachment
* 2 elegant ways to do so: http://toddmotto.com/avoiding-anonymous-javascript-functions/
* found it via http://stackoverflow.com/questions/10335343/javascript-attaching-events

# wonderful, simply way, using onkeyup, to make a live counter for number of characters. onkeyup was the trick, I believe. (I was using onkeydown and onkeypress.) Sample uses jQuery but I used straight JavaScript. 
* http://jsfiddle.net/hNn5b/
* http://stackoverflow.com/questions/9767521/count-and-display-number-of-characters-in-a-textbox-using-javascript

# contentEditable is fun
* https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement.contentEditable
* but apparently also terrible: https://medium.com/medium-eng/why-contenteditable-is-terrible-122d8a40e480

:-) Amedeo
hellotumo.com

#######

*/ 
var doHyphenButton = document.getElementById('changeHedButton');
var actionArea = document.getElementById('headlineToChange');
var preppedUrlHeadline = document.getElementById('headlineHyphenated');
doHyphenButton.onclick = function () {
  var headline = document.getElementById('headlineToChange').value;
  var headlineLength = headline.length;
  
  // make new a variable to contain the cleaned-up and then hyphenated headline 
  var cleanedHeadline = headline
  // remove non-word (\w) chars, non-whitespace (\s) characters, and underscores
    .replace(/[^\w\s]|_/g, '')
    // replace groups of 1 or more whitespace with hyphens
    .replace(/\s+/g, '-')
    // removes hyphens on end and beginning
    .replace(/^-|-$/gi, '')
    // lower case
    .toLowerCase();

    // drop cleaned headline into box as hyphenated, lowercase headline
    preppedUrlHeadline.innerHTML = cleanedHeadline;

    //and select the hyphenated headline automatically 
    document.getElementById('headlineHyphenated').select();
};

// Update the number of characters in the headline on the fly. http://jsfiddle.net/hNn5b/ . must use onkeyup 
actionArea.onkeyup = function() {
    var cs = this.value.length;
    document.getElementById('characterCount').innerHTML = cs;
};

// select the hyphenated text button
document.getElementById('selectNewHed').onclick = function () {
  document.getElementById('headlineHyphenated').select();
}

