@echo off
echo ================================================
echo Tonsco Next.js Framework Setup
echo ================================================
echo.

echo Step 1: Installing dependencies...
call npm install
if %ERRORLEVEL% NEQ 0 (
    echo Error installing dependencies!
    pause
    exit /b 1
)
echo.

echo Step 2: Copying static assets...

if not exist "public" mkdir public
if not exist "public\images" mkdir public\images
if not exist "public\tonscologo" mkdir public\tonscologo
if not exist "public\partnerlogo" mkdir public\partnerlogo

echo Copying images...
xcopy "..\images" "public\images\" /E /I /Y /Q

echo Copying logos...
xcopy "..\tonscologo" "public\tonscologo\" /E /I /Y /Q
xcopy "..\partnerlogo" "public\partnerlogo\" /E /I /Y /Q

echo.
echo ================================================
echo Setup Complete!
echo ================================================
echo.
echo To start the development server, run:
echo   npm run dev
echo.
echo Then open http://localhost:3000 in your browser
echo.
pause
