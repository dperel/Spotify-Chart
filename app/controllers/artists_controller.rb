class ArtistsController < ApplicationController
  respond_to :html, :js
  
  def index
     respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @location }
    end
  end

  
  def create
     respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @location }
    end
  end



  private
    def artist_params
      params.require(:artist).permit(:name)
    end
end 
