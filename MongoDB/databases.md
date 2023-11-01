# Database commands

show list of databases
```
test> show dbs
admin
local
```

create or switch to database
```
test> use admin  #switch
admin> use school #create
school>
```

a database has not been completely created without some data
```
school> db.createCollection("students")
{ ok: 1 }
```

to delete a database simply use
```
db.dropDatabase()
```
