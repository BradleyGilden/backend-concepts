# CRUD Commands

## Insert

```
school> db.students.insertOne({name:"constantine", age:29})
{
  acknowledged: true,
  insertedId: ObjectId("654253b8a25937783b1de1da")
}
```

to view data inside your collection

```
school> db.students.find()
[
  {
    _id: ObjectId("654253b8a25937783b1de1da"),
    name: 'constantine',
    age: 29
  }
]
```

to insert more than one document at a time

```
school> db.students.insertMany([{name:"Harry", age:11}, {name:"Albus", age:150}, {name:"Seamus", age:11}])
{
  acknowledged: true,
  insertedIds: {
    '0': ObjectId("654254f7a25937783b1de1db"),
    '1': ObjectId("654254f7a25937783b1de1dc"),
    '2': ObjectId("654254f7a25937783b1de1dd")
  }
}
school> db.students.find()
[
  {
    _id: ObjectId("654253b8a25937783b1de1da"),
    name: 'constantine',
    age: 29
  },
  {
    _id: ObjectId("654254f7a25937783b1de1db"),
    name: 'Harry',
    age: 11 
  },
  {
    _id: ObjectId("654254f7a25937783b1de1dc"),
    name: 'Albus',
    age: 150
  },
  {
    _id: ObjectId("654254f7a25937783b1de1dd"),
    name: 'Seamus',
    age: 11
  }
]
```

sorting and limiting
```
school> db.students.find().sort({age:-1}).limit(2)  # sorts in reverse order by age, and limits results to 2
[
  {
    _id: ObjectId("654254f7a25937783b1de1dc"),
    name: 'Albus',
    age: 150
  },
  {
    _id: ObjectId("654253b8a25937783b1de1da"),
    name: 'constantine',
    age: 29
  }
]
```
