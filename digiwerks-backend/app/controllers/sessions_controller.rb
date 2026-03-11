class SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authenticate_artist!

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

    def admin_login
    admin = Admin.find_by(email: params[:email])

    if admin&.authenticate(params[:password])
        session[:admin_id] = admin.id
        render json: { message: "Admin logged in", role: admin.role }
    else
        render json: { error: "Invalid credentials" }, status: :unauthorized
    end
    end

    def logout
    session.delete(:artist_id)
    session.delete(:admin_id)

    render json: { message: "Logged out" }
    end
end
