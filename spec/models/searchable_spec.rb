# == Schema Information
#
# Table name: searchables
#
#  id              :integer          not null, primary key
#  translation     :string           default("")
#  transliteration :string           not null
#  item_id         :integer          not null
#  item_type       :string           not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

require 'rails_helper'

RSpec.describe Searchable, type: :model do
  pending "add some examples to (or delete) #{__FILE__}"
end
