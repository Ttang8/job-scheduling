class Api::JobsController < ApplicationController

  def create
    @job = Job.new(job_params)
    @trucks = Truck.all
    @length = @trucks.length
    @i = 0
    while @i < @length
      @job.truck_id = @trucks[@i].id
      if @job.save
        render "api/trucks/index"
        break
      elsif @i == @length - 1
        render json: @job.errors.full_messages, status: 422
      end
      @i += 1
    end
  end

  def update
    @job = Job.find(params[:id])
    if @job.update_attributes(job_params)
      render "api/trucks/index"
    else
      render json: @job.errors.full_messages, status: 422
    end
  end

  def destroy
    @job = Job.find(params[:id])
    @job.destroy
    render "api/trucks/index"
  end

  def index
    if params[:truck_id]
      truck = Truck.find(params[:truck_id])
      @jobs = truck.jobs
    else
      @jobs = Job.all
    end
  end

  private

  def job_params
    params.require(:job).permit(:mover, :move_date, :end_date, :start_time, :end_time, :move_time, :overnight)
  end
end
