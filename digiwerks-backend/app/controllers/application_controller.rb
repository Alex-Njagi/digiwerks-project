class ApplicationController < ActionController::Base
  # protect_from_forgery with: :null_session
  # Only allow modern browsers supporting webp images, web push, badges, import maps, CSS nesting, and CSS :has.
  allow_browser versions: :modern

  # Changes to the importmap will invalidate the etag for HTML responses
  stale_when_importmap_changes

  before_action :authenticate_artist!
  helper_method :current_artist

  def current_artist
    @current_artist ||= Artist.find(session[:artist_id]) if session[:artist_id]
  end

  def current_admin
    @current_admin ||= Admin.find(session[:admin_id]) if session[:admin_id]
  end

  def authenticate_artist!
    render json: { error: "Artist login required" }, status: :unauthorized unless current_artist
  end

  def authenticate_admin!
    render json: { error: "Admin login required" }, status: :unauthorized unless current_admin
  end

  def require_account_manager!
    unless current_admin && current_admin.role == "account_management"
      render json: { error: "Account manager access required" }, status: :forbidden
    end
  end

  def require_content_moderator!
    unless current_admin && current_admin.role == "content_moderation"
      render json: { error: "Content moderator access required" }, status: :forbidden
    end
  end
  
end