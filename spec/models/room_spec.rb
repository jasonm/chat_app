require 'spec_helper'

describe Room do
  it { should have_many :messages }
end
