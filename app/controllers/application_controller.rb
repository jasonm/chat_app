class ApplicationController < ActionController::Base
  protect_from_forgery

  private

  def signed_in?
    !!current_user
  end
  helper_method :signed_in?

  def sign_in(user)
    session[:user_id] = user
  end

  def sign_out
    session[:user_id] = nil
  end

  def current_user
    session[:user_id] && User.find(session[:user_id])
  end
  helper_method :current_user
end
