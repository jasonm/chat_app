class HomesController < ApplicationController
  def show
    if signed_in?
      redirect_to chat_url
    else
      redirect_to login_url
    end
  end
end
