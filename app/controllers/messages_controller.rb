class MessagesController < ApplicationController
  respond_to :json, only: [:index, :create]

  def index
    room = Room.find(params[:room_id])
    render json: room.messages
  end

  def create
    room = Room.find(params[:room_id])
    message = room.messages.create(params[:message].merge(user_id: current_user.id))
    render json: message
  end
end

