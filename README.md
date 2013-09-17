# ace-rails-ap

The [Ajax.org Cloud9 Editor (Ace)](https://github.com/ajaxorg/ace) for the Rails 3.1+ asset
pipeline.

## Usage

`Gemfile`:

```ruby
gem 'ace-rails-ap'
```

`application.js`:

```javascript
//= require ace/ace
```

To include a theme or mode, just put:

```javascript
//= require ace/theme-[sometheme].js
//= require ace/mode-[somemode].js
```

After `//= require ace/ace` in your `application.js` manifest.

Then just use Ace like normal.

