class Api::CardsController < ApplicationController
  def create
    card = Card.new(card_params)

    if card.save
      @deck = Deck.where(id: card.deck_id).preload(:hiragana_cards, :katakana_cards).first
      render 'api/decks/show'
    else
      render json: card.errors.full_messages, status: 402
    end
  end

  def destroy
    card = Card.find(params[:id])
    if card.destroy
      @deck = Deck.where(id: card.deck_id).preload(:hiragana_cards, :katakana_cards).first
      render 'api/decks/show'
    else
      render json: card.errors.full_messages, status: 404
    end
  end

  def card_params
    params.require(:card).permit(:deck_id, :item_id, :item_type)
  end
end
