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

require 'test_helper'

class JobTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
