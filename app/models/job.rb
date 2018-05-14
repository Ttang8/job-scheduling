# == Schema Information
#
# Table name: jobs
#
#  id         :bigint(8)        not null, primary key
#  mover      :string           not null
#  move_date  :date             not null
#  end_date   :date             not null
#  start_time :time             not null
#  end_time   :time             not null
#  move_time  :integer          not null
#  truck_id   :integer          not null
#  overnight  :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Job < ApplicationRecord
  validates :mover, :move_date, :end_date, :start_time, :end_time, :move_time, presence: true
  validate :no_overlap
  belongs_to :truck

  def no_overlap
    truck = Truck.find_by(id: self.truck_id)
    jobs = truck.jobs.where(move_date: self.move_date)
    if self.start_time < truck.start_time
      errors.add(:start_time, "Truck not available at that time")
    elsif self.end_time > truck.end_time
      errors.add(:end_time, "Truck not available at that time")
    else
      jobs.each do |job|
        if self.start_time > job.start_time && self.start_time < job.end_time
          errors.add(:start_time, "Conflicts with another job")
        elsif self.end_time > job.start_time && self.start_time < job.end_time
          errors.add(:end_time, "Conflicts with another job")
        end
      end
    end
  end
end
