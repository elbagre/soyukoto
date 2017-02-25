class Api::PublicDecksController < ApplicationController
  def create
    @public_deck = PublicDeck.new(public_deck_params)
    @public_deck.user_id = current_user.id

    if @public_deck.save
      render :show
    else
      render json: @public_deck.errors.full_messages, status: 401
    end
  end

  def update
    @public_deck = deck.find(params[:id])
    # @public_deck.update(public_deck_params)
    render :show
  end

  def index
    @public_decks = PublicDeck.all
    render :index
  end

  def show
    @public_deck = PublicDeck.find(params[:id])
    render :show
  end

  def public_deck_params
    params.require(:public_deck).permit(:name, :description)
  end
end
