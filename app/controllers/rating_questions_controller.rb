class RatingQuestionsController < ApplicationController
  before_action :find_question, only: [:show, :edit, :update, :destroy]

  def index
    @rating_questions = RatingQuestion.all
  end

  def new
    @rating_question = RatingQuestion.new
  end

  def create
    @rating_question = RatingQuestion.new(question_params)
    if @rating_question.save
      respond_to do |format|
        format.html { redirect_to @rating_question, notice: "Your question has been created." }
        format.json { render :show, status: :created }
      end
    else
      errors = @rating_question.errors.full_messages.to_sentence
      respond_to do |format|
        format.html { render :new, notice: errors }
        format.json { render json: { 'errors' => @rating_question.errors.messages }, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    if @rating_question.update(question_params)
      respond_to do |format|
        format.html { redirect_to @rating_question, notice: "Updated Successfully" }
        format.json { render :show , status: :ok }
      end
    else
      errors = @rating_question.errors.full_messages.to_sentence
      respond_to do |format|
        format.html { render :edit, notice: errors }
      end
    end
  end

  def destroy
    if @rating_question.destroy
      respond_to do |format|
        format.html { redirect_to "/", notice: "Deleted Successfully" }
        format.json { render json: {}, status: :no_content }
      end
    end
  end

  def show
  end

  private

  def question_params
    params.require(:rating_question).permit(:title, :tag)
  end

  def find_question
    @rating_question = RatingQuestion.find(params[:id])
    unless @rating_question
      head :not_found
      return
    end
  end
  
end