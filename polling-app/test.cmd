$mongoDbPath = "D:\home\MongoDB" 
$mongoDbConfigPath = "$mongoDbPath\mongod.cfg"
$url = "http://downloads.mongodb.org/win32/mongodb-win32-x86_64-2008plus-2.4.9.zip" 
$zipFile = "$mongoDbPath\mongo.zip" 
$unzippedFolderContent ="$mongoDbPath\mongodb-win32-x86_64-2008plus-2.4.9"

mkdir "D:\home\MongoDB"
REM curl -OutFile "mongo.zip" "http://downloads.mongodb.org/win32/mongodb-win32-x86_64-2008plus-2.4.9.zip" 
curl -o 'test'zip' http://www.colorado.edu/conflict/peace/download/peace.zip