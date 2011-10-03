# ace-rails-ap

The [Ajax.org Cloud9 Editor (Ace)](/ajaxorg/ace) for the Rails 3.1 asset 
pipeline.

## Usage

`Gemfile`:

```ruby
gem 'ace-rails-ap'
```

`application.js`:

```javascript
//= require ace
```

To include a theme or mode, just put:

```javascript
//= require theme-[sometheme].js
//= require mode-[somemode].js
```

After `//= require ace` in your `application.js` manifest.

Then just use Ace like normal.

