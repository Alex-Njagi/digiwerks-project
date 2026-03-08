class ProjectsController < ApplicationController
    skip_before_action :verify_authenticity_token
    before_action :set_artist, only: [:owned_projects, :create]
    before_action :set_project, only: [:show, :update, :destroy]

    def index
        projects = Project.all
        render json: projects, include: :project_stages
    end
    
    def owned_projects
        owned_projects = @artist.projects
        render json: owned_projects
    end

    def show
        render json: @project, include: :project_stages
    end

    def create
        project = @artist.projects.build(project_params)

        if project.save
        render json: project, status: :created
        else
        render json: { errors: project.errors }, status: :unprocessable_entity
        end

    end

    def update
        if @project.update(project_params)
        render json: @project
        else
        render json: { errors: @project.errors }, status: :unprocessable_entity
        end
    end

    def destroy
        @project.destroy
        head :no_content
    end

    private

    def set_artist
        @artist = Artist.find(params[:artist_id])
    end

    def set_project
        @project = Project.find(params[:id])
    end

    def project_params
        params.permit(:title, :description, :status, :start_date, :end_date)
    end

end