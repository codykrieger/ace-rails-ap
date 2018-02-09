# ace-rails-ap

The [Ajax.org Cloud9 Editor (Ace)](https://github.com/ajaxorg/ace) for the Rails 3.1+ asset
pipeline.

## Installation

In your Gemfile, add:

```ruby
gem 'ace-rails-ap'
```

Then execute `bundle` and restart your server.

Add in your application.js file:

```javascript
//= require ace-rails-ap
```

To include a theme or mode, add them in your application.js file:

```javascript
//= require ace/theme-sometheme
//= require ace/mode-somemode
```

Workers and modes don't need to be included in your application.js file, as they can also be loaded dynamically (see below).

## Rails Asset Pipeline

Ace will dynamically load the JavaScript files for workers and modes at run-time.

ace-rails-ap plays nicely with the Rails asset pipeline by automatically configuring the precompilation of the workers and modes,
and by setting up Ace to load the fingerprinted files. You have nothing to do, it just works.

## Migrate from previous version of ace-rails-ap

You may have done some customisation to allow ace-rails-ap to work in production, such as adding the worker files in
`assets.precompile` of your application.rb and/or using `ace.config.setModuleUrl` function. You can remove those.

Also replace the previous javascript manifest instruction `//= require ace/ace` by the new `//= require ace-rails-ap`, and remove
all workers from your javascript manifest.

## Limiting asset build to certain modes

By default, all mode files are included in the asset build. If you want to limit the asset build to only those modes which you will use, create an initializer like the following:

```ruby
Ace::Rails.include_modes = %w{html yaml}
```
