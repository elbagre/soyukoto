class Api::DecksController < ApplicationController
  def create
    @deck = Deck.new(deck_params)

    if @deck.save
      render :show
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def destroy
    @deck = Deck.find(params[:id])
    if @deck.destroy
      render :index
    else
      render json: @deck.errors.full_messages, status: 422
    end
  end

  def update
  end

  def index
    @decks = Deck.all.preload(:hiragana_cards)
    render :index
  end

  def show
    @deck = Deck.where(id: params[:id]).preload(:hiragana_cards).first
    render :show
  end

  def deck_params
    params.require(:deck).permit(:name, :description)
  end
end
