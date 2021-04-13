# perspective-playground

Simple project to get familiar with Vue basics.

[See Live Here :)](https://y-jie28.github.io/perspective-playground/)

## Directives Used
- v-on (for click events on the buttons)
- v-bind (for binding style on the box)
- v-model (for transform property values)

## Implementing Copy to Clipboard
__document.execCommand("copy")__ will perform the __copy__ action, and intends to copy what's selected (by using __select()__). 

In this case, user has nothing to select, and therefore the approach is to create an element with the content that should be copied as the text content, and use __select()__ to complete copy.

## Some Question
Lecturer used __document.body.removeChild(el)__ and I used __el.remove()__. It seems the outcome is identical but there are slight difference. 

[Can read more about it here on Stackoverflow. ](https://stackoverflow.com/questions/36998877/what-is-the-difference-between-remove-and-removechild-method-in-javascript)

<hr />

Even if my code does not include the following it still functions without unexpected outcome. I think it's just to ensure there's no unexpected behavior? 

```
el.setAttribute('readonly', '');
el.style.position = 'absolute';
el.style.left = '-9999px';
```
