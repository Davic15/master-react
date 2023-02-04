### SEction 28 - Project Social Network MERN
## Data Base
    User
    - _id
    - name
    - nick
    - password
    - role
    - image
    - created_at

    Publication
    - _id
    - text
    - file
    - created_at
    - user
    (relation user and publication with the user_id)

    Follow
    - _id
    - user
    - followed
    - created_at
    (user id and followed are related to the user collection)
