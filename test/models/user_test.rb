# == Schema Information
#
# Table name: users
#
#  id                         :integer          not null, primary key
#  username                   :string           not null
#  email                      :string           not null
#  password_digest            :string           not null
#  session_token              :string           not null
#  full_name                  :string
#  bio                        :text
#  created_at                 :datetime         not null
#  updated_at                 :datetime         not null
#  profile_image_file_name    :string
#  profile_image_content_type :string
#  profile_image_file_size    :integer
#  profile_image_updated_at   :datetime
#

require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
