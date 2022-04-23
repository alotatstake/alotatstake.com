Remove-Item -Recurse -Path 'docs'
npm run build
npm run export
Move-Item 'out' 'docs'
git add docs
git commit -m "Site update."
git push -u origin main
