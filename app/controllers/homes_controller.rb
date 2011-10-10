class HomesController < ApplicationController
  def show
    if signed_in?
    else
      redirect_to login_url
    end
  end
end
