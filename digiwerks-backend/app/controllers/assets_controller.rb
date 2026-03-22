class AssetsController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :set_stage, only: [:index, :create]
  before_action :set_asset, only: [:show, :update, :destroy]

  def index
    assets = @stage.assets
    render json: assets
  end

  def show
    render json: @asset, include: :asset_versions
  end

  def create
      asset = @stage.assets.build(asset_params)
      if asset.save
        render json: asset, status: :created
      else
        render json: { errors: asset.errors }, status: :unprocessable_entity
      end
  end

  def update
    if @asset.update(asset_params)
      render json: @asset
    else
      render json: { errors: @asset.errors }, status: :unprocessable_entity
    end
  end

  def destroy
    @asset.destroy
    head :no_content
  end

  private

  def set_stage
    @stage = ProjectStage.find(params[:project_stage_id])
  end

  def set_asset
    @asset = Asset.find(params[:id])
  end

  def asset_params
    params.require(:asset).permit(:asset_name, :asset_description, :asset_tag)
  end

end