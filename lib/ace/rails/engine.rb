module Ace
  module Rails
    class Engine < ::Rails::Engine
      initializer 'ace-rails-ap.assets.precompile' do |app|
        app.config.assets.precompile += %w[ace/worker-*.js ace/snippets/html.js ace/snippets/css.js ace/snippets/liquid.js]
      end
    end
  end
end

