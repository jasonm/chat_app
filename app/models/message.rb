class Message < ActiveRecord::Base
  belongs_to :room
  belongs_to :user

  validates :body, presence: true

  def as_json(options={})
    super(methods: [:user_name])
  end

  def user_name
    user.name
  end
end
