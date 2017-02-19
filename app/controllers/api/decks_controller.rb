class Api::DecksController < ApplicationController
  def create
    @deck = Deck.new(deck_params)


    if @deck.save
      cards = params[:deck][:cards].map { |_k, value| value }
      debugger
      cards.each do |card|
        Card.create(deck_id: @deck.id, item_id: card['item_id'].to_i, item_type: card['item_type'])
      end

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
    @decks = Deck.all.preload(:associated_cards, :hiragana_cards, :katakana_cards)
    render :index
  end

  def show
    @deck = Deck.where(id: params[:id]).preload(:associated_cards, :hiragana_cards, :katakana_cards).first
    render :show
  end

  def deck_params
    params.require(:deck).permit(:name, :description)
  end
end
