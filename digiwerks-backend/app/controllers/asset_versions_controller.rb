class AssetVersionsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_project_asset, only: [:index, :create]
    before_action :set_version, only: [:show, :update, :destroy]

    def index
        versions = @asset.asset_versions
        render json: versions
    end

    def show
        render json: @version, include: :feedbacks
    end

    def create
        version = @asset.asset_versions.build(version_params)
        if version.save
            render json: version, status: :created
        else
            render json: { errors: version.errors }, status: :unprocessable_entity
        end
    end

    def update
        if @version.update(version_params)
        render json: @version
        else
        render json: { errors: @version.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @version.destroy
        head :no_content
    end

    private

    def set_project_asset
        @asset = Asset.find(params[:asset_id])
    end

    def set_version
        @version = AssetVersion.find(params[:id])
    end

    def version_params
        params.require(:asset_version).permit(:version_number, :file_url, :change_notes)
    end
end
