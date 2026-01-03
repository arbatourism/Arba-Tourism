# PowerShell script to add mobile compatibility to all HTML pages

$htmlFiles = Get-ChildItem -Path "c:\Users\haque\Desktop\New Arba" -Filter "*.html" -File | Where-Object {
    $_.Name -notlike "MOCKUP*" -and 
    $_.Name -notlike "home.html" -and 
    $_.Name -ne "index.html" -and
    $_.Name -notlike "*mockup*" -and
    $_.Name -notlike "footer-mockups.html"
}

$mobileMenuCssLink = '    <link rel="stylesheet" href="mobile-menu.css">'
$mobileMenuJsScript = '    <script src="mobile-menu.js"></script>'

$filesUpdated = 0
$filesSkipped = 0

foreach ($file in $htmlFiles) {
    $content = Get-Content $file.FullName -Raw
    
    # Check if mobile-menu.css is already included
    if ($content -notmatch "mobile-menu\.css") {
        # Find the styles.css line and add mobile-menu.css after it
        if ($content -match '(<link rel="stylesheet" href="styles\.css">)') {
            $content = $content -replace '(<link rel="stylesheet" href="styles\.css">)', "`$1`r`n$mobileMenuCssLink"
            
            # Add mobile-menu.js before </body>
            if ($content -match '(</body>)') {
                $content = $content -replace '(</body>)', "$mobileMenuJsScript`r`n`$1"
            }
            
            # Save the updated content
            Set-Content -Path $file.FullName -Value $content -NoNewline
            Write-Host "Updated: $($file.Name)" -ForegroundColor Green
            $filesUpdated++
        } else {
            Write-Host "Skipped (no styles.css found): $($file.Name)" -ForegroundColor Yellow
            $filesSkipped++
        }
    } else {
        Write-Host "Already has mobile-menu.css: $($file.Name)" -ForegroundColor Cyan
        $filesSkipped++
    }
}

Write-Host "`n========================================" -ForegroundColor Magenta
Write-Host "Summary:" -ForegroundColor Magenta
Write-Host "Files Updated: $filesUpdated" -ForegroundColor Green
Write-Host "Files Skipped: $filesSkipped" -ForegroundColor Yellow
Write-Host "========================================" -ForegroundColor Magenta
