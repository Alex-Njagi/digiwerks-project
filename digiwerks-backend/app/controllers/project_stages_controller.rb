class ProjectStagesController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_project, only: [:index, :create]
    before_action :set_stage, only: [:show, :update, :destroy]

    def index
        stages = @project.project_stages
        render json: stages
    end

    def show
        render json: @stage, include: :assets
    end

    def create
        stage = @project.project_stages.build(stage_params)

        if stage.save
        render json: stage, status: :created
        else
        render json: { errors: stage.errors }, status: :unprocessable_entity
        end

    end

    def update
        if @stage.update(stage_params)
        render json: @stage
        else
        render json: { errors: @stage.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @stage.destroy
        head :no_content
    end

    private

    def set_project
        @project = Project.find(params[:project_id])
    end

    def set_stage
        @stage = ProjectStage.find(params[:id])
    end

    def stage_params
        params.require(:project_stage).permit(:stage_name, :stage_order, :description)
    end
end
