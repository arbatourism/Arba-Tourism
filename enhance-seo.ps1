$baseUrl = "https://www.arbatourism.com"
$excludeDirs = @(".git", ".claude", "includes", "fonts", "images", "all images")
$excludeFiles = @("header.html", "footer.html", "invoice.html")
$root = Get-Location

$files = Get-ChildItem -Path $root -Recurse -Filter "*.html"

foreach ($file in $files) {
    $relPath = $file.FullName.Substring($root.Path.Length + 1)
    $segments = $relPath -split "\\"
    
    if ($excludeDirs -contains $segments[0]) { continue }
    if ($file.Name.StartsWith("MOCKUP")) { continue }
    if ($excludeFiles -contains $file.Name) { continue }

    Write-Host "Processing $($file.Name)..."
    
    $content = Get-Content -Path $file.FullName -Raw -Encoding UTF8
    
    # 1. Extract Title
    $titleRegex = [regex] "<title>(.*?)</title>"
    $titleMatch = $titleRegex.Match($content)
    $pageTitle = "Arba Tourism - UAE Tours & Safaris"
    if ($titleMatch.Success) {
        $pageTitle = $titleMatch.Groups[1].Value
    }
    
    # Clean title for description/keywords
    $cleanTitle = $pageTitle -replace "Arba Tourism", "" -replace " - ", "" -replace " \| ", "" 
    $cleanTitle = $cleanTitle.Trim()
    if ($cleanTitle -eq "") { $cleanTitle = "Best Tours & Desert Safaris in UAE" }

    # 2. Generate Description
    $description = "Experience the best of UAE with Arba Tourism. Book $cleanTitle including desert safaris, city tours, and luxury cruises. Best prices & top-rated service."
    
    # 3. Generate URL
    $urlPath = $relPath -replace "\\", "/"
    $pageUrl = "$baseUrl/$urlPath"
    if ($file.Name -eq "index.html" -and $segments.Count -eq 1) { $pageUrl = $baseUrl }

    # 4. Define Meta Block
    $metaBlock = @"
    <!-- SEO Meta Tags -->
    <meta name="description" content="$description">
    <meta name="keywords" content="$cleanTitle, Dubai Desert Safari, Abu Dhabi City Tour, UAE Tourism, Arba Tourism, Desert Safari Deals, Dhow Cruise, sightseeing tours">
    <meta name="author" content="Arba Tourism">
    <link rel="canonical" href="$pageUrl">
    <link rel="icon" type="image/x-icon" href="https://i.imgur.com/p4uERZs.png">

    <!-- Open Graph / Facebook -->
    <meta property="og:type" content="website">
    <meta property="og:url" content="$pageUrl">
    <meta property="og:title" content="$pageTitle">
    <meta property="og:description" content="$description">
    <meta property="og:image" content="https://i.imgur.com/p4uERZs.png">

    <!-- Twitter -->
    <meta property="twitter:card" content="summary_large_image">
    <meta property="twitter:url" content="$pageUrl">
    <meta property="twitter:title" content="$pageTitle">
    <meta property="twitter:description" content="$description">
    <meta property="twitter:image" content="https://i.imgur.com/p4uERZs.png">
"@

    # 5. Inject
    # Check if already has SEO tags to avoid duplication
    if ($content -match "<!-- SEO Meta Tags -->") {
        Write-Host "  Skipping: SEO tags already present."
    } else {
        # Insert after <title>... </title> or <meta charset> if title not found
        if ($titleMatch.Success) {
            $newContent = $content.Replace($titleMatch.Value, "$($titleMatch.Value)`n$metaBlock")
            $newContent | Set-Content -Path $file.FullName -Encoding UTF8
            Write-Host "  Injected SEO tags."
        } else {
             # Fallback: Insert after <head>
             $newContent = $content -replace "<head>", "<head>`n$metaBlock"
             $newContent | Set-Content -Path $file.FullName -Encoding UTF8
             Write-Host "  Injected SEO tags (Fallback)."
        }
    }
}

Write-Host "SEO Enhancement Complete."
