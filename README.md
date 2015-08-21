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

Do not include Ace workers files in your application.js file. Then just use Ace like normal.

## Rails Asset Pipeline

Ace editor will dynamically load in run-time the workers javascript files.
ace-rails-ap play nice with rails asset pipeline by automatically configuring the precompilation of the workers files,
and by setting-up Ace to load the fingerprinted worker files. You have nothing to do, it just works.

## Migrate from previous version of ace-rails-ap

You may have done some customisation to allow ace-rails-ap to work in production, such as adding the worker files in
`assets.precompile` of your application.rb and/or using `ace.config.setModuleUrl` function. You can remove those.

Also replace the previous javascript manifest instruction `//= require ace/ace` by the new `//= require ace-rails-ap`, and remove
all workers from your javascript manifest.


