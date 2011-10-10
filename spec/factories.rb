FactoryGirl.define do
  factory :user do
    sequence(:name) do |n|
      name "User #{n}"
    end
  end
end
