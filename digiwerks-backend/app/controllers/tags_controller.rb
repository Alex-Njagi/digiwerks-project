class TagsController < ApplicationController
    skip_before_action :verify_authenticity_token
    skip_before_action :authenticate_artist!, only: [:index, :show]
    before_action :set_tag, only: [:show]

    def index
        tags = Tag.all
        render json: tags
    end

    def show
        render json: @tag
    end

    def set_tag
        @tag = Tag.find(params[:id])
    end
end
