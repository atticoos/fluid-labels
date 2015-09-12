# Fluid Labels

## Installation

Via bower:
```
bower install fluid-labels
```

Include the files in your project:
- `dist/fluid-labels.js`
- `dist/fluid-labels.css`
- `jquery`

Create a field group:
```html
<div class="fluid-label">
  <input type="text" placeholder="Your Field Name" />
  <label>Your Field Name</label>
</div>
```

Activate the jQuery plugin:
```js
$('.fluid-label').fluidLabel();
```

## Options
```js
{
  inputOffsetTop: Number,
  animationDuration: Number,
  focusClass: String
}
```
