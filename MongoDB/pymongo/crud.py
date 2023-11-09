#!/usr/bin/python3

"""
creates functions for crud operations

Author: Bradley Dillion Gilden
Date: 09-11-2023
"""
from typing import List
from pymongo.errors import BulkWriteError, WriteError
from pprint import PrettyPrinter

printer = PrettyPrinter()

"""################################ CREATE ###############################"""


def insert_doc(collection, document: dict) -> None:
    """inserts document inside collection"""
    try:
        doc_id = collection.insert_one(document).inserted_id
        print(doc_id)
    except WriteError as e:
        print(e)


def insert_docs(collection, document_list: List[dict]):
    """inseets multiple documents inside a collection"""
    try:
        collection.insert_many(document_list)
        print("Succes!")
    except BulkWriteError as e:
        print(e)


"""################################ READ ###############################"""


def find_all(collection, filters={}, columns={}):
    """lists documents in a collection"""
    for doc in collection.find(filters, columns):
        printer.pprint(doc)


def find_by_name(collection, name):
    """Finds doc by name field, not accurate as it returns the first doc it
    finds if there are duplicates"""

    doc = collection.find_one({"name": name})
    if doc is None:
        print("Not found")
    else:
        printer.pprint(doc)


def find_by_id(collection, id):
    """Finds doc by id field"""
    from bson import ObjectId

    doc = collection.find_one({"_id": ObjectId(id)})
    if doc is None:
        print("Not found")
    else:
        printer.pprint(doc)


def count(collection, filters={}):
    """counts number of documents present depending on the filter"""
    print(collection.count_documents(filters))


def age_range(collection, min, max):
    """returns docs within an age range"""
    query = {
        "$and": [{"age": {"$gte": min}}, {"age": {"$lte": max}}]
    }

    for doc in collection.find(query).sort("age"):
        printer.pprint(doc)


"""################################ UPDATE ###############################"""
