require 'spec_helper'

describe Message do
  it { should belong_to :room }
  it { should belong_to :user }
  it { should validate_presence_of :body }

  it "includes user name in JSON" do
    message = Factory(:message, user: Factory(:user, name: "Jason"))
    message.as_json[:user_name].should == "Jason"
  end
end
