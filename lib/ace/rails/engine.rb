module Ace
  module Rails
    class Engine < ::Rails::Engine
      initializer 'ace-rails-ap.assets.precompile' do |app|
        app.config.assets.precompile += %w[ace/worker-*.js ace/mode-*.js]
      end
    end
  end
end

