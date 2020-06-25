# -*- encoding: utf-8 -*-
$:.push File.expand_path("../lib", __FILE__)
require "ace/rails/version"

Gem::Specification.new do |s|
  s.name        = "ace-rails-ap"
  s.version     = Ace::Rails::VERSION
  s.platform    = Gem::Platform::RUBY
  s.authors     = ["Cody Krieger"]
  s.email       = ["cody@codykrieger.com"]
  s.homepage    = "https://github.com/codykrieger/ace-rails-ap"
  s.summary     = %q{The Ajax.org Cloud9 Editor (Ace) for the Rails 3.1 asset pipeline.}
  s.description = %q{The Ajax.org Cloud9 Editor (Ace) for the Rails 3.1 asset pipeline.}
  s.license     = "MIT"

  s.files         = `git ls-files`.split("\n")
  s.test_files    = `git ls-files -- {test,spec,features}/*`.split("\n")
  s.executables   = `git ls-files -- bin/*`.split("\n").map{ |f| File.basename(f) }
  s.require_paths = ["lib"]

  s.add_development_dependency "bundler"
  s.add_development_dependency "rails",   ">= 3.1"

  # specify any dependencies here; for example:
  # s.add_development_dependency "rspec"
  # s.add_runtime_dependency "rest-client"
end
