module Ace
  module Rails
    if ::Rails.version < "3.1"
      # no dice!
    else
      require 'ace/rails/engine'
    end

    require "ace/rails/version"
  end
end
