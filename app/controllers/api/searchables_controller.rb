class Api::SearchablesController < ApplicationController
  def index
    query = params[:query] + '%'
    @query_results = Searchable.where(
      'transliteration LIKE ? OR translation LIKE ?', query, query
    ).order('LENGTH(transliteration)').limit(5)

    render :index
  end
end
