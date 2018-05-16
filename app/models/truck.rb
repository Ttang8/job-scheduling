# == Schema Information
#
# Table name: trucks
#
#  id         :bigint(8)        not null, primary key
#  name       :string           not null
#  start_time :time             not null
#  end_time   :time             not null
#  overnight  :boolean          default(FALSE)
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Truck < ApplicationRecord
  validates :name, :start_time, :end_time, presence: true

  has_many :jobs, dependent: :destroy

  def s_time
    if self.start_time.hour == 12
      return "12 PM"
    elsif self.start_time.hour > 12
      return "#{(self.start_time.hour)-12} PM"
    else
      return "#{self.start_time.hour} AM"
    end
  end

  def e_time
    if self.end_time.hour == 12
      return "12 PM"
    elsif self.end_time.hour > 12
      return "#{(self.end_time.hour)-12} PM"
    else
      return "#{self.end_time.hour} AM"
    end
  end
end
