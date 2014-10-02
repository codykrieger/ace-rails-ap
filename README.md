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
//= require ace/worker-html
```

To include a theme or mode, put:

```javascript
//= require ace/theme-sometheme
//= require ace/mode-somemode
```

...in your `application.js` manifest as well.

Then just use Ace like normal.

