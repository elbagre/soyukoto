class Api::HiraganasController < ApplicationController
  def index
    @hiraganas = Hiragana.all
    render :index
  end

  def show
    @hiragana = Hiragana.find(params[:id])
    render :show
  end
end
