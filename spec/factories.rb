FactoryGirl.define do
  factory :user do
    sequence(:name) do |n|
      name "User #{n}"
    end
  end

  factory :room do
    name "A chat room"
  end

  factory :message do
    body "Body"
    user
    room
  end
end
