

module Theme

  Theme = Struct.new( :name, :light_color, :dark_color )

  def themes()
    return [
      Theme.new("blue", "#06aecc", "#0e92ab"),
      Theme.new("orange", "#d29134", "#b1792d"),
      Theme.new("green", "#519839", "#448030"),
      Theme.new("red", "#b04732", "#943c2a"),
      Theme.new("purple", "#89609e", "#735184"),
      Theme.new("pink", "#cd5b91", "#ac4c79"),
      Theme.new("light_green", "#4ac06a", "#3fa25a"),
      Theme.new("light_blue", "#06aecc", "#0e92ab"),
      Theme.new("gray", "#838c91", "#6f7579"),
    ]
  end

end
