REM powershell.exe -Command "& {set-executionpolicy remotesigned currentuser}"
REM powershell.exe .\mongodb-mng.ps1

powershell.exe -NoProfile -ExecutionPolicy Bypass -Command "& '.\mongodb-mng.ps1'";