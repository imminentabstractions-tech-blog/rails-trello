require_relative '../../lib/Theme'
include Theme

class ApplicationController < ActionController::Base
  def initialize
    super()

    @themes = Theme::themes()
  end
end
