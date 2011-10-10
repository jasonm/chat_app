class User < ActiveRecord::Base
  validates :name, presence: true

  def self.login(name)
    self.find_or_create_by_name(name)
  end
end
