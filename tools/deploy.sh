export NODE_ENV=production
export HOST_URL="https://block-zero.us/"

domain="block-zero.us"

yarn build

touch dist/.nojekyll
echo $domain > dist/CNAME

git add -f dist/
git commit -m "New github pages deploy"
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages