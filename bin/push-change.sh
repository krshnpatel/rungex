if [[ -z $(git status -s) ]]
then
  echo "No changes!"
  exit
else
  git config user.name "github-actions"
  git config user.email "github-actions@github.com"
  git commit -am "ci: build"
  git push
  exit
fi
