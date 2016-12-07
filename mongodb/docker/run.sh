#!/bin/bash
docker run --name mongo-dev -d -v /opt/mongodb:/data/db -p 27017 kana1/mongodb