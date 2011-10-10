ChatApp::Application.routes.draw do
  root to: "homes#show"

  resource :sessions, only: %w(new create)
  match 'login' => 'sessions#new'

  if %w(development test).include? Rails.env
    mount Jasminerice::Engine => "/jasmine"
  end
end
