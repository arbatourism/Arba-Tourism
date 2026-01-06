$baseUrl = "https://www.arbatourism.com"
$excludeDirs = @(".git", ".claude", "includes", "fonts", "images", "all images")
$excludeFiles = @("header.html", "footer.html", "invoice.html")
$root = Get-Location

$sitemapContent = @('<?xml version="1.0" encoding="UTF-8"?>', '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">')
$today = (Get-Date).ToString("yyyy-MM-dd")

$files = Get-ChildItem -Path $root -Recurse -Filter "*.html"

foreach ($file in $files) {
    # Check exclusions
    $relPath = $file.FullName.Substring($root.Path.Length + 1)
    $segments = $relPath -split "\\"
    
    if ($excludeDirs -contains $segments[0]) { continue }
    if ($file.Name.StartsWith("MOCKUP")) { continue }
    if ($excludeFiles -contains $file.Name) { continue }

    # Construct URL
    $urlPath = $relPath -replace "\\", "/"
    $url = "$baseUrl/$urlPath"
    if ($file.Name -eq "index.html" -and $segments.Count -eq 1) {
        $url = $baseUrl
    }

    # Priority
    $priority = "0.8"
    if ($file.Name -eq "index.html") { $priority = "1.0" }
    elseif ($file.Name -like "*contact*") { $priority = "0.9" }

    $sitemapContent += "  <url>"
    $sitemapContent += "    <loc>$url</loc>"
    $sitemapContent += "    <lastmod>$today</lastmod>"
    $sitemapContent += "    <changefreq>weekly</changefreq>"
    $sitemapContent += "    <priority>$priority</priority>"
    $sitemapContent += "  </url>"
}

$sitemapContent += '</urlset>'
$sitemapContent | Set-Content -Path "sitemap.xml" -Encoding UTF8
Write-Host "Sitemap generated."
