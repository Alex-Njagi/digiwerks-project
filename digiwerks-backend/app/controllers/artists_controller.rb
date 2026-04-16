class ArtistsController < UsersController
    skip_before_action :authenticate_artist!, only: [:index, :show, :create, :view_accounts, :show_account]
    before_action :authenticate_user!, only: [:index]

    def view_accounts
        artists = Artist.all
        render json: artists, include: :projects
    end

    def show_account
        artist = Artist.find(params[:id])
        render json: artist.as_json(include: {
            projects: {
            include: {
                artist: { only: [:_id, :username] },
                project_stages: {
                include: {
                    assets: {
                    include: :asset_versions
                    }
                }
                }
            }
            }
        })
    end

    def index
        artists = Artist.all
        render json: artists, include: :projects
    end

    def show
        artist = Artist.find(params[:id])
        render json: artist.as_json(include: {
            projects: {
            include: {
                artist: { only: [:_id, :username] },
                project_stages: {
                include: {
                    assets: {
                    include: :asset_versions
                    }
                }
                }
            }
            }
        })
    end

    def create
        artist = Artist.new(artist_params)

        if artist.save
            render json: artist, status: :created
        else
            render json: {errors: artist.errors}, status: :unprocessable_entity
        end
    end

    def update
        artist = current_artist
        if artist.update(permitted_params)
        render json: artist
        else
        render json: { errors: artist.errors }, status: :unprocessable_entity
        end
    end

    def stats
        artist = current_artist

        projects_count = artist.projects.count
        assets_count = artist.projects.map(&:project_stages).flatten.map(&:assets).flatten.count
        asset_versions_count = artist.projects
                                    .map(&:project_stages).flatten
                                    .map(&:assets).flatten
                                    .map(&:asset_versions).flatten.count

        render json: {
            projects_count: projects_count,
            assets_count: assets_count,
            asset_versions_count: asset_versions_count
        }
    end

    private

    def permitted_params
        artist_params
    end

    def artist_params
        params.require(:artist).permit(
            :email,
            :password,
            :username,
            :bio,
            :profile_image_url
        )
    end

    def authenticate_user!
        unless current_artist || current_admin
            render json: { error: "You must be logged in to continue" }, status: :unauthorized
        end
    end

end