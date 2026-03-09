class AssetTagsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_asset, only: [:index, :create]
    before_action :set_asset_tag, only: [:destroy]

    def index
        asset_tags = @asset.asset_tags.includes(:tag)
        render json: asset_tags.as_json(include: { tag: { only: [:id, :tag_name] }})
    end

    def create
        tag = Tag.find(params[:tag_id])

        asset_tag = AssetTag.new(
        asset: @asset,
        tag: tag
        )

        if asset_tag.save
            render json: asset_tag, status: :created
        else
            render json: { errors: asset_tag.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @asset_tag.destroy
        head :no_content
    end

    private

    def set_asset
        @asset = Asset.find(params[:asset_id])
    end

    def set_asset_tag
        @asset_tag = AssetTag.find(params[:id])
    end
    
end