class SessionsController < ApplicationController
  def new
  end

  def create
    user = User.login(params[:session])
    sign_in(user)
    redirect_to root_url
  end

  def destroy
    sign_out
    redirect_to root_url
  end
end
