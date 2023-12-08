#!/usr/bin/env sh
set -e

rm -rf dist
npm run build

cd build

git init 
git config --local user.name "Seungwoo Lee"
git config --local user.email "seungwoo321@gmail.com"
git add -A
git commit -m "deploy for quiz app"
git push -f git@github.com:Seungwoo321/react-quiz-app.git master:gh-pages
cd -