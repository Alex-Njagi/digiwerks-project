class ArtistsController < UsersController
    before_action :require_account_manager!, only: [:view_accounts]

    def view_accounts
        artists = Artist.all
        render json: artists
    end

    # def index
    #     artists = Artist.all
    #     render json: artists
    # end

    def create
        artist = Artist.new(artist_params)

        if artist.save
            render json: artist, status: :created
        else
            render json: {errors: artist.errors}, status: :unprocessable_entity
        end
    end

    private

    def permitted_params
        artist_params
    end

    def artist_params
        params.permit(:email, :password, :username, :bio, :profile_image_url)
    end

end