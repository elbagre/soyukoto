class Api::KatakanasController < ApplicationController
  def index
    @katakanas = Katakana.all
    render :index
  end

  def show
    @katakana = Katakana.find(params[:id])
    render :show
  end
end
