ChatApp::Application.routes.draw do
  root to: "homes#show"

  if %w(development test).include? Rails.env
    mount Jasminerice::Engine => "/jasmine"
  end
end
