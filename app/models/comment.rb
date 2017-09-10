class Comment < ApplicationRecord
  validates :title, :body, presence: true
end
