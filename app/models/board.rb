class Board < ApplicationRecord
    has_many :lists, dependent: :delete_all
end
