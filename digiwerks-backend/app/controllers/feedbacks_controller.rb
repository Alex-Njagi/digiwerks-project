class FeedbacksController < ApplicationController
    skip_before_action :verify_authenticity_token

    before_action :set_asset_version, only: [:index, :create]
    before_action :set_artist, only: [:create]
    before_action :set_feedback, only: [:show, :update, :destroy]

    def index
        feedbacks = @asset_version.feedbacks.includes(:artist)
        render json: feedbacks.as_json(include: { artist: { only: [:id, :username] }})
    end

    def show
        render json: @feedback.as_json(include: { artist: { only: [:id, :username] }})
    end

    def create
        feedback = @asset_version.feedbacks.build(feedback_params)
        feedback.artist = @artist

        if feedback.save
            render json: feedback.as_json(include: { artist: { only: [:id, :username] }}), status: :created
        else
            render json: { errors: feedback.errors }, status: :unprocessable_entity
        end

    end

    def update
        if @feedback.update(feedback_params)
            render json: @feedback.as_json(include: { artist: { only: [:id, :username] }})
        else
            render json: { errors: @feedback.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @feedback.destroy
        head :no_content
    end

    private

    def set_asset_version
        @asset_version = AssetVersion.find(params[:asset_version_id])
    end

    def set_artist
        @artist = Artist.find(params[:artist_id])
    end

    def set_feedback
        @feedback = Feedback.find(params[:id])
    end

    def feedback_params
        params.permit(:comment_text)
    end
    
end