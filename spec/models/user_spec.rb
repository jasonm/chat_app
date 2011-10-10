require 'spec_helper'

describe User do
  it { should validate_presence_of :name }

  context "no User with a given name exists" do
    it "creates a new with the given name User when #login is called" do
      user = User.login(name: "Jason")
      user.name.should == "Jason"
      User.all.should == [user]
    end
  end

  context "a User with a given name exists" do
    before do
      @existing_user = Factory(:user, name: "Jason")
    end

    it "finds an existing User by name when #login is called" do
      User.login(name: "Jason").should == @existing_user
    end
  end
end
