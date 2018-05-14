class Api::TrucksController < ApplicationController

  def show
    @truck = Truck.find(params[:id])
  end

  def create
    @truck = Truck.new(truck_params)
    if @truck.save
      render "api/trucks/show"
    else
      render json: @truck.errors.full_messages, status: 422
    end
  end

  def update
    @truck = Truck.find(params[:id])
    if @truck.update_attributes(truck_params)
      render "api/trucks/show"
    else
      render json: @truck.errors.full_messages, status: 422
    end
  end

  def destroy
    @truck = Truck.find(params[:id])
    @truck.destroy
    render "api/photos/show"
  end

  def index
    @trucks = Truck.all
  end

  private

  def truck_params
    params.require(:truck).permit(:name, :start_time, :end_time, :overnight)
  end
end
