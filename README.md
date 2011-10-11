Chat app
========

This is a demo backbone application.

Specification
=============

Users chat with other users.

You can login with any name, it's stored in the session.  User.find_or_create_by_name

User:    [id, name]
Room:    [id, name]
Message: [id, user_id, room_id, body]

Features:

As a user:
  I can login
  I can see a list of the rooms
  I can create a new room
  I can view an individual room
  I can see the messages in a room
  I can send a new message in a room
