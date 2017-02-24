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

class Searchable < ActiveRecord::Base
  belongs_to :item,
    polymorphic: true
end
