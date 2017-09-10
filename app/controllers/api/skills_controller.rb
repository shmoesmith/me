class Api::SkillsController < ApplicationController
  before action :set_skill, only: [:update, :destroy]

  def index
    render json: Skill.all
  end

  def create
    skill = Skill.create(skill_params)
      if skill.save
        render json: skill
      else
        render json: { errors: skill.errors.full_messages.join(',') }, status: 442
      end
  end

  def update
    if @skill.update
      render json: @skill
    else
      render json: { errors: skill.errors.full_messages.join(',') }, status: 442
    end
  end

  def destroy
    @skill.destroy
  end

private

  def set_skill
    @skill = Skill.find(params[:id]
  end

  def skill_params
    params.require(:skill).permit(:name, :picture_link, :description)
  end
end
