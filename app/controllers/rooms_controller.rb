class RoomsController < ApplicationController
  respond_to :json, only: [:create]

  def create
    room = Room.create(params[:room])
    render json: room
  end
end
