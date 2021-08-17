class ApplicationController < ActionController::API
  def index
    render :json => {:message => "If you see this message, I come from the server. I am alive!"}
  end
end
