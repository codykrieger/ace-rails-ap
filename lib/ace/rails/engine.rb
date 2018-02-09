module Ace
  module Rails
    mattr_accessor :include_modes

    class Engine < ::Rails::Engine
      initializer 'ace-rails-ap.assets.precompile' do |app|
        app.config.assets.precompile +=
          if Ace::Rails.include_modes.present?
            Ace::Rails.include_modes.each_with_object([]) { |mode, assets|
              assets << "ace/worker-#{mode}-*.js"
              assets << "ace/mode-#{mode}-*.js"
            }
          else
            %w[ace/worker-*.js ace/mode-*.js]
          end
      end
    end
  end
end

