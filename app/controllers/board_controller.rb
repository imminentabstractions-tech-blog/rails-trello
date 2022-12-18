require_relative '../../lib/Theme'
# include Theme

class BoardController < ApplicationController
  def index
    @boards = Board.all
    # @color_theme = 'normal'
  end

  def show
    @board = Board.find(params[:id])
    @color_theme = @board.color
  end

  def showhelper
    @board = Board.find(params[:id])
    @color_theme = @board.color
  end

end