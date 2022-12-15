from ruby
workdir /app
run apt-get update
run apt-get install -y sqlite3
copy Gemfile .
copy Gemfile.lock .
run bundle install