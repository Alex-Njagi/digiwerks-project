class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authenticate_artist!, only: [
        :artist_login, :current_artist_info, :admin_login, :current_admin_info, :logout, :whoami]

    def artist_login
        artist = Artist.find_by(email: params[:email])
        if artist&.authenticate(params[:password])
            session[:artist_id] = artist.id
            render json: { message: "Artist logged in", artist: artist }
        else
            render json: { error: "Invalid credentials" }, status: :unauthorized
        end
    end

    def whoami
        render json: {
            artist: current_artist,
            admin: current_admin
        }
    end

    def current_artist_info
        if current_artist
            render json: current_artist.as_json(except: [:password_digest])
        else
            render json: { error: "Not logged in" }, status: :unauthorized
        end
    end

    def admin_login
        admin = Admin.find_by(email: params[:email])
        if admin&.authenticate(params[:password])
            session[:admin_id] = admin.id
            render json: { message: "Admin logged in", admin: admin }
        else
            render json: { error: "Invalid credentials" }, status: :unauthorized
        end
    end

    def current_admin_info
        if current_admin
            render json: current_admin.as_json(except: [:password_digest])
        else
            render json: { error: "Not logged in" }, status: :unauthorized
        end
    end

    def logout
        session.delete(:artist_id)
        session.delete(:admin_id)
        render json: { message: "Logged out" }
    end
end
