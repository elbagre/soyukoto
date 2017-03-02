class Api::PublicDecksController < ApplicationController
  def create
    @public_deck = PublicDeck.new(public_deck_params)
    @public_deck.user_id = current_user.id

    if @public_deck.save
      params[:public_deck][:cards] ||= []
      cards = params[:public_deck][:cards].map { |_k, value| value }

      cards.each do |card|
        PublicCard.create(
          public_deck_id: @public_deck.id,
          searchable_id: card['id'].to_i
        )
      end
      render :show
    else
      render json: @public_deck.errors.full_messages, status: 401
    end
  end

  def update
    @public_deck = deck.find(params[:id])
    render :show
  end

  def index
    @public_decks = PublicDeck.all.preload(:searchables)
    render :index
  end

  def show
    @public_deck = PublicDeck.where(id: params[:id])
                             .preload(:searchables)
                             .first
    render :show
  end

  def public_deck_params
    params.require(:public_deck).permit(:name, :description)
  end
end
