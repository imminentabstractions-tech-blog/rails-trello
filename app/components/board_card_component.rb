# frozen_string_literal: true

class BoardCardComponent < ViewComponent::Base
  def initialize(title:, color:)
    @title = title
    @color = color
  end

end
